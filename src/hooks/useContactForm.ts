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
