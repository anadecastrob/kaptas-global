import { useState } from "react";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "";

interface FormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

export function useContactForm(source: string) {
  const [form, setForm] = useState<FormData>({ name: "", company: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email) {
      setError("Please fill in your name and email.");
      return;
    }
    setIsSubmitting(true);
    setError("");
    const pageUrl = typeof window !== "undefined" ? window.location.href : source;
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New inquiry from ${form.name} at ${form.company} — ${pageUrl}`,
          from_name: "Kaptas Global Website",
          name: form.name,
          company: form.company,
          email: form.email,
          message: form.message,
          page_url: pageUrl,
        }),
      });
      const data = await res.json();
      if (data.success) {
        // GA4 lead conversion via GTM dataLayer.
        // form_source is derived from the current pathname so it stays correct
        // when this hook is reused on new pages, without the caller having to
        // remember to update the `source` prop.
        if (typeof window !== "undefined") {
          const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
          w.dataLayer = w.dataLayer || [];
          const path = window.location.pathname;
          const formSource = path === "/" ? "home" : (path.split("/").filter(Boolean)[0] || "home");
          w.dataLayer.push({
            event: "lead_form_submit",
            form_source: formSource,
            form_type: "contact",
          });
        }

        setShowModal(true);
        setForm({ name: "", company: "", email: "", message: "" });
      } else {
        setError(data.message || "Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return { form, handleChange, handleSubmit, isSubmitting, showModal, setShowModal, error };
}
