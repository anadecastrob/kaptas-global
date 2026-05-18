import { ViteReactSSG } from "vite-react-ssg";
import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useLocation, Link, Outlet, useParams, Navigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, X, Menu, Linkedin, MapPin, Mail, Phone, ArrowRight, ShieldCheck, TrendingDown, Zap, CheckCircle2, Clock, Briefcase, Minus, Plus, ChevronRight, ArrowLeft, Calendar, BookOpen, DollarSign, FileText, Users, Globe, Scale, Compass } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Logo({ className = "" }) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: "/logo-branco.png",
      alt: "Kaptas Global",
      className: `h-8 w-auto ${className}`
    }
  );
}
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);
  const services = [
    { name: "Direct Hire", path: "/direct-hire" },
    { name: "Outsourcing & Staffing", path: "/contractor-staffing" },
    { name: "Executive Mapping", path: "/executive-mapping" },
    { name: "Hire in Brazil", path: "/start-operation" }
  ];
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "header",
    {
      className: cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-[#050505]/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:opacity-80 transition-opacity", children: /* @__PURE__ */ jsx(Logo, {}) }),
          /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm font-medium text-gray-300", children: [
            /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-white transition-colors", children: "Home" }),
            /* @__PURE__ */ jsx(Link, { to: "/pricing", className: "hover:text-white transition-colors", children: "Pricing" }),
            /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-white transition-colors", children: "Blog" }),
            /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "flex items-center gap-1 hover:text-white transition-colors",
                  onMouseEnter: () => setServicesOpen(true),
                  onMouseLeave: () => setServicesOpen(false),
                  children: [
                    "Services ",
                    /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "absolute top-full left-0 pt-4 w-64 transition-all duration-200 origin-top-left",
                    servicesOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                  ),
                  onMouseEnter: () => setServicesOpen(true),
                  onMouseLeave: () => setServicesOpen(false),
                  children: /* @__PURE__ */ jsx("div", { className: "bg-[#1A1A1A] border border-white/10 rounded-xl p-2 shadow-2xl flex flex-col gap-1", children: services.map((service) => /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: service.path,
                      className: "px-4 py-3 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-sm",
                      children: service.name
                    },
                    service.path
                  )) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/pricing",
              className: "bg-kaptas-green text-kaptas-black px-6 py-2.5 rounded-full text-sm font-semibold hover:brightness-90 transition-colors",
              children: "Get Started"
            }
          ) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "md:hidden text-white",
              onClick: () => setMobileMenuOpen(!mobileMenuOpen),
              children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {})
            }
          )
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: "md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-2xl overflow-hidden",
            children: [
              /* @__PURE__ */ jsx(Link, { to: "/", className: "text-lg font-medium text-gray-300 hover:text-white", children: "Home" }),
              /* @__PURE__ */ jsx(Link, { to: "/pricing", className: "text-lg font-medium text-gray-300 hover:text-white", children: "Pricing" }),
              /* @__PURE__ */ jsx(Link, { to: "/blog", className: "text-lg font-medium text-gray-300 hover:text-white", children: "Blog" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wider mt-2", children: "Services" }),
                services.map((service) => /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: service.path,
                    className: "text-lg font-medium text-gray-300 hover:text-white pl-4 border-l border-white/10",
                    children: service.name
                  },
                  service.path
                ))
              ] })
            ]
          }
        ) })
      ]
    }
  ) });
}
function Footer() {
  const services = [
    { name: "Direct Hire", path: "/direct-hire" },
    { name: "Outsourcing & Staffing", path: "/contractor-staffing" },
    { name: "Executive Mapping", path: "/executive-mapping" },
    { name: "Hire in Brazil", path: "/start-operation" }
  ];
  return /* @__PURE__ */ jsxs("footer", { className: "bg-[#050505] pt-24 pb-10 mt-12 relative z-10 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-kaptas-green/10 via-neon-blue/10 to-transparent blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-12 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-12 lg:col-span-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-block hover:opacity-80 transition-opacity mb-6", children: /* @__PURE__ */ jsx(Logo, {}) }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed max-w-sm mb-8", children: "Kaptas Global is a US-incorporated hiring partner founded by Brazilians that sources senior talent in Brazil and Latin America. We handle sourcing, payroll, compliance, and vetting. 300+ placements. Zero upfront cost." }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsx("a", { href: "https://linkedin.com", target: "_blank", rel: "noreferrer", className: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-kaptas-green hover:text-kaptas-black transition-all", children: /* @__PURE__ */ jsx(Linkedin, { className: "w-4 h-4" }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-4 lg:col-span-2 lg:col-start-6", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold mb-6 text-sm uppercase tracking-wider", children: "Services" }),
          /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-4", children: services.map((service) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: service.path, className: "text-gray-400 hover:text-white transition-colors text-sm", children: service.name }) }, service.path)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-4 lg:col-span-2", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold mb-6 text-sm uppercase tracking-wider", children: "Company" }),
          /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/pricing", className: "text-gray-400 hover:text-white transition-colors text-sm", children: "Pricing" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog", className: "text-gray-400 hover:text-white transition-colors text-sm", children: "Blog" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-4 lg:col-span-3", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold mb-6 text-sm uppercase tracking-wider", children: "Headquarters" }),
          /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-gray-400", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-kaptas-green shrink-0" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "block text-white font-medium mb-1", children: "Orlando - US" }),
                "7345 W Sand Lake rd ste 210.",
                /* @__PURE__ */ jsx("br", {}),
                "OFC 460, Orlando, FL 32819"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-sm text-gray-400", children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-kaptas-green shrink-0" }),
              /* @__PURE__ */ jsx("a", { href: "mailto:support@kaptasglobal.io", className: "hover:text-white transition-colors", children: "support@kaptasglobal.io" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-sm text-gray-400", children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 text-kaptas-green shrink-0" }),
              /* @__PURE__ */ jsx("a", { href: "tel:+16892939252", className: "hover:text-white transition-colors", children: "+1 (689) 293-9252" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-gray-500 text-sm", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Kaptas Global. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-6 text-sm text-gray-500", children: [
          /* @__PURE__ */ jsx(Link, { to: "/privacy-policy", className: "hover:text-white transition-colors", children: "Privacy Policy" }),
          /* @__PURE__ */ jsx(Link, { to: "/terms-of-service", className: "hover:text-white transition-colors", children: "Terms of Service" })
        ] })
      ] })
    ] })
  ] });
}
function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-[#050505] text-white font-sans selection:bg-kaptas-green selection:text-kaptas-black relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-0 pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-blue/15 blur-[120px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-kaptas-green/10 blur-[120px]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col min-h-screen w-full", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "flex-1 pt-24", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -10 },
          transition: { duration: 0.3 },
          children: /* @__PURE__ */ jsx(Outlet, {})
        },
        location.pathname
      ) }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function isStagingHost() {
  if (typeof window === "undefined") return false;
  return window.location.hostname.endsWith(".vercel.app");
}
function SEO({ title, description, keywords, canonical, ogImage, schemas = [] }) {
  const image = ogImage || "https://kaptasglobal.io/logo-branco.png";
  const robots = isStagingHost() ? "noindex, follow" : "index, follow";
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("title", { children: title }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    keywords && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
    /* @__PURE__ */ jsx("meta", { name: "robots", content: robots }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonical }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: image }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:width", content: "1200" }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:height", content: "630" }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Kaptas Global" }),
    /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "en_US" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: image }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:site", content: "@KaptasGlobal" }),
    schemas.map((schema, i) => /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schema) }, i))
  ] });
}
function AEOContent({ paragraph, label = "Service overview" }) {
  return /* @__PURE__ */ jsx("section", { className: "sr-only", "aria-label": label, children: /* @__PURE__ */ jsx("p", { children: paragraph }) });
}
const SITE_URL = "https://kaptasglobal.io";
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  "name": "Kaptas Global",
  "legalName": "HR Technology LLC",
  "alternateName": ["Kaptas Global", "HR Technology LLC d/b/a Kaptas Global"],
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo-branco.png`,
  "description": "Kaptas Global is a strategic hiring partner connecting founder-led U.S. technology companies with senior remote engineering and operating talent in Brazil and Latin America. Services include Direct Hire, Outsourcing & Staffing, Executive Mapping, and Hire in Brazil. Kaptas Global is the trade name of HR Technology LLC, a US-incorporated Florida limited liability company.",
  "foundingDate": "2024",
  "founder": [
    { "@type": "Person", "name": "Rodolfo Chaves" },
    { "@type": "Person", "name": "Henry Novaes" }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7345 W Sand Lake Rd, Ste 210, 0FC 460",
    "addressLocality": "Orlando",
    "addressRegion": "FL",
    "postalCode": "32819",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-689-293-9252",
    "email": "support@kaptasglobal.io",
    "contactType": "sales",
    "availableLanguage": ["English", "Portuguese"]
  },
  "sameAs": ["https://www.linkedin.com/company/kaptas-global/"],
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Place", "name": "Worldwide" }
  ],
  "knowsAbout": [
    "Hiring developers in Brazil",
    "Outsourcing and staffing Brazilian professionals",
    "Direct hire recruitment Brazil to US",
    "Employer of record Brazil",
    "CLT vs PJ hiring models in Brazil",
    "Nearshore software development Brazil",
    "Remote teams Brazil for US companies",
    "Executive mapping and talent intelligence",
    "Cost to hire software engineers in Brazil",
    "Brazil tech talent market",
    "Recruitment pricing and fee structures for Latin America",
    "Cost comparison US vs Brazilian talent",
    "Market entry hiring strategy for Brazil",
    "Hire in Brazil consulting",
    "Brazilian labor law compliance for foreign companies",
    "Payroll management Brazil",
    "Latin America nearshore hiring"
  ]
};
const FAQ_SPEAKABLE = {
  "@type": "SpeakableSpecification",
  "cssSelector": ["[data-speakable]"]
};
const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "speakable": FAQ_SPEAKABLE,
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Kaptas Global offer?",
      "acceptedAnswer": { "@type": "Answer", "text": "Kaptas Global offers four core services for companies hiring in Brazil. Direct Hire places full-time professionals on your team for a one-time fee of 18% of first-year salary, with no retainer required. Outsourcing & Staffing provides dedicated professionals at a flat monthly cost (for example, a Senior Full-Stack Engineer at $4,000-$6,000/month fully loaded), with Kaptas Global handling payroll, compliance, and HR. Executive Mapping delivers a research-grade report with salary benchmarks, competitor org charts, and a shortlist of passive candidates in 10-15 business days. Hire in Brazil is a market-entry consulting service that provides compensation analysis, hiring-model recommendation (CLT, PJ, EOR), and first-hire support for companies entering Brazil." }
    },
    {
      "@type": "Question",
      "name": "Is there any upfront cost to work with Kaptas Global?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Kaptas Global charges no retainers, no deposits, and no recruitment fees upfront. For Direct Hire, billing happens only after a successful placement. For Outsourcing & Staffing, monthly invoicing starts when the professional begins working. Executive Mapping and Hire in Brazil are scoped projects with fees agreed before work begins. There are no speculative charges at any stage." }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire a Brazilian professional through Kaptas Global?",
      "acceptedAnswer": { "@type": "Answer", "text": "Direct Hire: a one-time fee of 18% of the professional's first-year salary. Outsourcing & Staffing: a flat monthly rate per professional (example: Senior Full-Stack Engineer $4,000-$6,000/month fully loaded, including salary, CLT charges, and Kaptas Global's management fee). Companies typically save 40-60% compared to equivalent US hires. Executive Mapping and Hire in Brazil are custom-priced per project scope. Full pricing details at kaptasglobal.io/pricing/." }
    },
    {
      "@type": "Question",
      "name": "How quickly can Kaptas Global deliver candidates?",
      "acceptedAnswer": { "@type": "Answer", "text": "Kaptas Global delivers a shortlist of vetted candidates within 5 business days of intake. The full placement cycle averages 2-4 weeks for Direct Hire and Outsourcing & Staffing roles. Executive Mapping reports are delivered in 10-15 business days. Hire in Brazil full-cycle engagements take 3-6 weeks from kickoff to first hire." }
    },
    {
      "@type": "Question",
      "name": "What happens if a hire does not work out?",
      "acceptedAnswer": { "@type": "Answer", "text": "Kaptas Global provides a replacement guarantee on every placement. Direct Hire includes a 90-180 day guarantee depending on role level. Outsourcing & Staffing contracts include unlimited replacements for the duration of the engagement. If a professional does not meet expectations, Kaptas Global restarts the search at no additional cost. A bad hire can cost a company more than 200% of the position's annual salary." }
    },
    {
      "@type": "Question",
      "name": "Why should US companies hire Brazilian professionals?",
      "acceptedAnswer": { "@type": "Answer", "text": "Brazilian professionals offer 40-60% lower total compensation compared to US equivalents at the same seniority level. Brazil's timezone (GMT-3) provides 5-8 hours of daily overlap with US teams. The country has over 1.5 million tech graduates and a growing bilingual talent pool. Brazil's engineering ecosystem has supported global tech operations since 2005." }
    },
    {
      "@type": "Question",
      "name": "What types of roles can Kaptas Global fill?",
      "acceptedAnswer": { "@type": "Answer", "text": "Kaptas Global recruits across technology (software engineers, QA, data engineers, DevOps, product managers, engineering managers), finance, sales, marketing, operations, HR, and executive leadership. The team has completed 300+ placements across 30+ global clients." }
    },
    {
      "@type": "Question",
      "name": "Do I need a legal entity in Brazil to hire through Kaptas Global?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. For Outsourcing & Staffing, Kaptas Global acts as the employer of record in Brazil and invoices your company in USD. You do not need a Brazilian entity, local tax registration, or labor-law expertise. For Direct Hire, the professional is employed directly by your company or your existing EOR provider. Hire in Brazil includes consulting on whether to use CLT, PJ, or EOR." }
    },
    {
      "@type": "Question",
      "name": "How does Kaptas Global vet candidates?",
      "acceptedAnswer": { "@type": "Answer", "text": "Every candidate goes through requirement screening, structured English-proficiency interview, technical assessment, and cultural-fit evaluation. Only head-sourced candidates are presented. Kaptas Global screens approximately 50 candidates to shortlist 3. This process supports a 75% repeat-client rate across 300+ placements." }
    },
    {
      "@type": "Question",
      "name": "What makes Kaptas Global different from other recruitment agencies?",
      "acceptedAnswer": { "@type": "Answer", "text": "Kaptas Global is US-incorporated and founded by Brazilians with over 20 years of combined experience in the Brazil-US hiring market. The company operates as a two-person team, meaning every client works directly with the founders. Kaptas Global serves 30+ clients worldwide with a 75% repeat-client rate, transparent pricing, and performance-based engagement models." }
    }
  ]
};
const homeHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to hire senior Brazilian engineers through Kaptas Global",
  "description": "Kaptas Global's hiring process delivers a pre-vetted candidate from kickoff to signed offer in approximately 14 business days. The client interviews three finalists; Kaptas Global handles sourcing, screening, English and remote-readiness validation, compliance, and onboarding.",
  "totalTime": "P14D",
  "inLanguage": "en-US",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Strategic Alignment",
      "text": "Kaptas Global runs an intake call with the founder, CTO, or hiring manager to map the technical stack, seniority level, engineering culture, and product roadmap. The search is calibrated to the specific requirements, and the engagement model is confirmed — Direct Hire (one-time placement fee), Outsourcing & Staffing (flat monthly cost with payroll and Brazilian compliance handled), Executive Mapping (research-first), or Hire in Brazil (market-entry consulting).",
      "url": "https://kaptasglobal.io/#how-it-works"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Sourcing and Vetting",
      "text": "Kaptas Global directly sources and headhunts candidates from target companies — not from inbound databases. Each candidate is screened on technical depth, behavioral fit, business-level English fluency, remote-readiness and async communication, and cultural alignment with the client team. Three finalists are presented for typical engineering roles; for leadership searches the shortlist depth follows the engagement scope.",
      "url": "https://kaptasglobal.io/#how-it-works"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Client Interviews",
      "text": "The client interviews only the pre-vetted finalists. Kaptas Global coordinates scheduling, live technical assessments, system-design rounds, and reference checks. The client's existing interview loop is preserved; Kaptas Global plugs in around it rather than replacing it.",
      "url": "https://kaptasglobal.io/#how-it-works"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Hire and Onboard",
      "text": "Offer letter, contract structuring, compliance, payroll setup, and onboarding are handled end-to-end. For Outsourcing & Staffing and EOR engagements, Kaptas Global is the employer of record in Brazil and issues a single USD invoice covering salary and all mandatory Brazilian employment charges. For Direct Hire the candidate moves onto the client's payroll or PJ contract. The new hire begins shipping by day 14 in most engagements.",
      "url": "https://kaptasglobal.io/#how-it-works"
    }
  ]
};
const homeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Recruitment and Staffing",
  "provider": { "@type": "Organization", "name": "Kaptas Global", "url": "https://kaptasglobal.io" },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Place", "name": "Worldwide" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Kaptas Global Hiring Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Direct Hire", "description": "One-time placement fee of 18% of first-year salary. No retainer. 90-180 day replacement guarantee.", "url": "https://kaptasglobal.io/direct-hire" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Outsourcing & Staffing", "description": "Flat monthly cost per professional including salary, CLT charges, and management fee. Unlimited replacements during contract.", "url": "https://kaptasglobal.io/contractor-staffing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Executive Mapping", "description": "Market intelligence report with salary benchmarks, competitor org charts, and passive candidate shortlist. Delivery in 10-15 business days.", "url": "https://kaptasglobal.io/executive-mapping" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hire in Brazil", "description": "Market-entry consulting including compensation analysis, hiring-model recommendation (CLT, PJ, EOR), and first-hire support.", "url": "https://kaptasglobal.io/start-operation" } }
    ]
  }
};
const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "speakable": FAQ_SPEAKABLE,
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to hire a Brazilian professional through Kaptas Global?",
      "acceptedAnswer": { "@type": "Answer", "text": "It depends on the hiring model. Direct Hire is a one-time fee of 18% of the professional's first-year salary, with no retainer or deposit required. Outsourcing & Staffing is a flat monthly cost per professional that covers salary, Kaptas Global fees, and all Brazilian employment obligations in a single invoice. There are no hidden fees in either model." }
    },
    {
      "@type": "Question",
      "name": "What is included in the flat monthly cost for Outsourcing & Staffing?",
      "acceptedAnswer": { "@type": "Answer", "text": "The flat monthly cost covers the professional's salary, all mandatory Brazilian employment charges (which typically add 70-80% above gross salary for CLT contracts), Kaptas Global management fees, and ongoing HR support. You receive a single invoice with no separate charges for taxes, benefits, or compliance." }
    },
    {
      "@type": "Question",
      "name": "How does Kaptas Global's 18% Direct Hire fee compare to other recruitment agencies?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most US-based recruitment agencies charge 20-30% of first-year salary for contingency searches, and 25-35% for retained executive searches, often requiring an upfront retainer. Kaptas Global charges a flat 18% with no retainer and no deposit. You only pay when the professional is hired and starts working." }
    },
    {
      "@type": "Question",
      "name": "Are there any upfront fees or deposits required?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. For Direct Hire, there is no retainer and no deposit. Payment is due only after the professional is hired and starts. For Outsourcing & Staffing, billing begins only when the professional is active and working. Executive Mapping and Hire in Brazil are scoped as custom projects with fees agreed before work begins." }
    },
    {
      "@type": "Question",
      "name": "What happens if a hire doesn't work out?",
      "acceptedAnswer": { "@type": "Answer", "text": "For Direct Hire, Kaptas Global offers a replacement guarantee of 90 to 180 days depending on the role level. If the professional leaves or is terminated within that period, Kaptas Global replaces them at no additional cost. For Outsourcing & Staffing, replacement is unlimited and included at no extra charge for the entire duration of the contract." }
    },
    {
      "@type": "Question",
      "name": "How much can I save by hiring Brazilian professionals instead of US-based talent?",
      "acceptedAnswer": { "@type": "Answer", "text": "Companies typically save 40-60% compared to equivalent US-based hires, depending on the role and seniority. For example, a Senior Full-Stack Engineer in Brazil costs between $4,000 and $6,000 per month through Outsourcing & Staffing, fully loaded. The same profile in the US often exceeds $10,000-$12,000 per month when you include salary, benefits, and employer taxes." }
    },
    {
      "@type": "Question",
      "name": "What are typical salary ranges for Brazilian tech professionals?",
      "acceptedAnswer": { "@type": "Answer", "text": "Through Kaptas Global's Outsourcing & Staffing model (flat monthly cost, all-in), typical ranges are: Senior Full-Stack Engineer $4,000-$6,000/month, QA Engineer $3,000-$5,000/month, Mobile Engineer $4,000-$6,000/month, and Data Engineer $4,500-$7,000/month. These figures include salary, Brazilian employment charges, and Kaptas Global fees in a single invoice." }
    },
    {
      "@type": "Question",
      "name": "Do I need to set up a legal entity in Brazil to hire through Kaptas Global?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. With Outsourcing & Staffing, Kaptas Global is the employer of record in Brazil. The professional works dedicated to your team, but all employment contracts, payroll, taxes, and compliance are handled by Kaptas Global. You receive one monthly invoice in USD. If you want to establish your own entity in Brazil, the Hire in Brazil service can help with that process." }
    },
    {
      "@type": "Question",
      "name": "How does pricing work for Executive Mapping?",
      "acceptedAnswer": { "@type": "Answer", "text": "Executive Mapping is priced as a custom project scoped to the specific role, target companies, geography, and depth of research required. Kaptas Global delivers a detailed report with qualified candidate profiles, compensation benchmarks, and market analysis within 10-15 business days. The fee is agreed before work begins, with no recurring charges." }
    },
    {
      "@type": "Question",
      "name": "Can I combine multiple Kaptas Global services in a single engagement?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many clients start with Executive Mapping to understand the talent landscape, then move to Direct Hire or Outsourcing & Staffing to bring professionals on board. Each service is priced independently, so you only pay for what you use. Kaptas Global can recommend the most efficient combination based on your hiring goals, timeline, and budget." }
    }
  ]
};
const pricingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Recruitment and Staffing Services",
  "provider": { "@type": "Organization", "name": "Kaptas Global", "url": "https://kaptasglobal.io" },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Place", "name": "Worldwide" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Kaptas Global Hiring Services",
    "itemListElement": [
      { "@type": "Offer", "name": "Direct Hire", "description": "One-time recruitment fee of 18% of the professional's first-year salary. No retainer, no deposit. Includes a 90-180 day replacement guarantee.", "price": "18%", "priceCurrency": "USD", "url": "https://kaptasglobal.io/direct-hire" },
      { "@type": "Offer", "name": "Outsourcing & Staffing", "description": "Flat monthly cost per professional covering salary, Brazilian employment charges, Kaptas Global fees, and HR support in a single invoice. Unlimited replacement included.", "priceSpecification": { "@type": "UnitPriceSpecification", "priceCurrency": "USD", "unitCode": "MON", "referenceQuantity": { "@type": "QuantitativeValue", "value": "1", "unitText": "professional" } }, "url": "https://kaptasglobal.io/contractor-staffing" },
      { "@type": "Offer", "name": "Executive Mapping", "description": "Custom project fee. Delivers candidate profiles, compensation benchmarks, and market analysis within 10-15 business days.", "url": "https://kaptasglobal.io/executive-mapping" },
      { "@type": "Offer", "name": "Hire in Brazil", "description": "Custom engagement for companies entering or expanding operations in Brazil.", "url": "https://kaptasglobal.io/start-operation" }
    ]
  }
};
const outsourcingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "speakable": FAQ_SPEAKABLE,
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does outsourcing and staffing work when hiring remote talent in Brazil and Latin America?",
      "acceptedAnswer": { "@type": "Answer", "text": "Outsourcing and staffing through Kaptas Global means we source, vet, and place a remote professional on your team while handling payroll, taxes, and compliance on an ongoing basis. You manage the talent's daily work, own everything they produce, and receive one monthly invoice in USD. There is no need to open a local entity in Brazil or any other Latin American country, which makes this the simplest nearshore hiring model available." }
    },
    {
      "@type": "Question",
      "name": "How does Kaptas Global find and source talent in Brazil and Latin America?",
      "acceptedAnswer": { "@type": "Answer", "text": "Kaptas Global sources professionals through direct outreach, not job boards or inbound databases. Every search is built from scratch around the client's requirements, including tech stack, seniority, function, and team culture. We target professionals who are currently employed at strong companies across Brazil and Latin America and reach them with credibility, context, and clarity from the first message." }
    },
    {
      "@type": "Question",
      "name": "What does Kaptas Global validate beyond the resume when screening candidates?",
      "acceptedAnswer": { "@type": "Answer", "text": "Kaptas Global validates five dimensions beyond the resume: functional and technical fit, business-level English through live assessment, remote maturity and async communication habits, understanding of the contractor engagement model, and cultural alignment with the client's team. A strong resume alone is never enough to pass screening." }
    },
    {
      "@type": "Question",
      "name": "How long does it take to hire remote professionals in Brazil through Kaptas Global?",
      "acceptedAnswer": { "@type": "Answer", "text": "Kaptas Global typically delivers a shortlist of three pre-vetted candidates within five business days of kickoff. The average time from the first alignment call to a signed hire is 14 days. Kaptas Global achieves this speed through direct sourcing and a structured screening process that eliminates wasted interviews and low-signal candidates." }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire professionals in Brazil compared to the United States?",
      "acceptedAnswer": { "@type": "Answer", "text": "Kaptas Global charges one monthly invoice in USD that covers the professional's compensation, Brazilian taxes, and the service fee. The total loaded cost for a senior professional hired in Brazil through Kaptas Global is typically 40 to 60 percent lower than a comparable US hire at the same seniority level, without sacrificing quality or timezone overlap." }
    },
    {
      "@type": "Question",
      "name": "Is there any upfront cost to start hiring talent in Brazil through Kaptas Global?",
      "acceptedAnswer": { "@type": "Answer", "text": "Kaptas Global charges zero upfront cost to begin an engagement. Sourcing, vetting, and candidate presentations are completely free. Clients pay nothing until they decide to hire and the professional starts working. No local entity is required to get started." }
    },
    {
      "@type": "Question",
      "name": "What is Kaptas Global's replacement guarantee if a professional leaves or underperforms?",
      "acceptedAnswer": { "@type": "Answer", "text": "Kaptas Global's replacement guarantee has no time limit and no additional cost. Because the service fee is billed monthly, replacements are fully covered for as long as the engagement lasts. If a professional leaves or underperforms, Kaptas Global begins a new search immediately and presents replacement candidates within the same five-day shortlist timeline." }
    },
    {
      "@type": "Question",
      "name": "Who owns the intellectual property produced by remote professionals hired through Kaptas Global?",
      "acceptedAnswer": { "@type": "Answer", "text": "The client owns 100 percent of all code, data, designs, documents, and deliverables produced by the professional. Full IP ownership is written into every Kaptas Global contract. There are no exceptions, no shared ownership clauses, and no transfer fees." }
    },
    {
      "@type": "Question",
      "name": "What is the timezone overlap between Brazil and the United States for nearshore remote teams?",
      "acceptedAnswer": { "@type": "Answer", "text": "Brazil is one to four hours ahead of US Eastern Time, which provides full overlap during standard US business hours. West Coast teams get four to six hours of direct overlap. This nearshore timezone proximity is one of the key advantages of hiring remote teams in Latin America over offshore regions like Eastern Europe or Asia." }
    },
    {
      "@type": "Question",
      "name": "Can I cancel my outsourcing and staffing engagement with Kaptas Global at any time?",
      "acceptedAnswer": { "@type": "Answer", "text": "Kaptas Global requires no minimum contract term, no lock-in period, and no cancellation penalty. Clients can scale down the number of professionals or end the engagement entirely at any time with no financial consequence." }
    }
  ]
};
const outsourcingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Outsourcing and Staffing in Brazil and Latin America",
  "description": "Kaptas Global sources, vets, and places remote professionals from Brazil and Latin America on client teams worldwide. Kaptas Global handles payroll, taxes, compliance, and contract structuring. Clients manage the talent directly, own all intellectual property, and pay one monthly invoice in USD with zero upfront cost. No local entity required.",
  "provider": { "@type": "Organization", "name": "Kaptas Global", "url": "https://kaptasglobal.io" },
  "serviceType": "Outsourcing and Staffing",
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Place", "name": "Worldwide" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Outsourcing and Staffing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Remote Engineer Staffing in Brazil", "description": "Kaptas Global places pre-vetted senior engineers from Brazil on client teams with full payroll, compliance, and IP ownership handled." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Remote Operations and Finance Staffing in Brazil", "description": "Kaptas Global places pre-vetted finance, operations, marketing, and design professionals from Brazil on client teams with full payroll and compliance handled." } }
    ]
  },
  "url": "https://kaptasglobal.io/contractor-staffing",
  "potentialAction": { "@type": "Action", "name": "Start for free", "target": "https://kaptasglobal.io/contractor-staffing#form" }
};
const executiveMappingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "speakable": FAQ_SPEAKABLE,
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is executive mapping and why does it matter before a leadership hire?",
      "acceptedAnswer": { "@type": "Answer", "text": "Executive mapping is a market intelligence engagement that gives you a complete picture of the leadership talent available for a specific role before you commit to a search. Kaptas Global maps 20 to 30 real professionals for a target position in Brazil or Latin America, delivering competitor compensation analysis, team structures, salary benchmarks, and a ranked shortlist of the strongest candidates. Instead of starting a 3 to 6 month executive search blind, you enter the process knowing exactly who is out there, what they earn, and who is worth pursuing." }
    },
    {
      "@type": "Question",
      "name": "What does an executive mapping report include?",
      "acceptedAnswer": { "@type": "Answer", "text": "A Kaptas Global executive mapping report covers seven core deliverables: 20 to 30 mapped qualified professionals with validated profiles; a ranked shortlist of top candidates; competitor compensation analysis broken down by salary, bonuses, equity, and benefits; salary and benefits benchmarks using real sourcing data; team structure intelligence covering reporting lines and seniority mix; a hiring landscape overview with candidate concentration and realistic timelines; and a hiring model recommendation (PJ, CLT, or EOR). Every engagement is custom-scoped." }
    },
    {
      "@type": "Question",
      "name": "Who is executive mapping for?",
      "acceptedAnswer": { "@type": "Answer", "text": "Executive mapping is designed for companies that need to hire C-level executives, country managers, VPs, directors, or other senior leadership roles in Brazil or Latin America and want real market data before committing to a search. Kaptas Global works with US-based companies, European firms, and any organization worldwide expanding into or operating in Brazil." }
    },
    {
      "@type": "Question",
      "name": "How long does an executive mapping engagement take?",
      "acceptedAnswer": { "@type": "Answer", "text": "Kaptas Global delivers a completed executive mapping report in 10 to 15 business days after the intro call. This is significantly faster than a traditional executive search, which typically runs 3 to 6 months from kickoff to offer acceptance. Every mapped professional is sourced and validated directly through active outreach, not pulled from a static database." }
    },
    {
      "@type": "Question",
      "name": "How much does executive mapping cost?",
      "acceptedAnswer": { "@type": "Answer", "text": "There is no fixed price for Kaptas Global's executive mapping service. Each engagement is scoped as a custom project based on the target role, seniority level, number of competitors to benchmark, geographic coverage, and the depth of intelligence required. Pricing is structured as a retainer and discussed directly during the first conversation." }
    },
    {
      "@type": "Question",
      "name": "What happens after I receive the mapping report?",
      "acceptedAnswer": { "@type": "Answer", "text": "The report and all data belong to you. After delivery, you have three options: activate a search through Kaptas Global to engage and place one of the identified candidates; run your own hiring process using the mapped shortlist and market data; or hold the intelligence for a future hire or board presentation. There is no lock-in, no contingency fee tied to future hires, and no obligation to continue with Kaptas Global." }
    },
    {
      "@type": "Question",
      "name": "Why should I map the market before making a leadership hire in Brazil?",
      "acceptedAnswer": { "@type": "Answer", "text": "A wrong executive hire costs more than salary — research shows it can reach 200% or more of the role's annual compensation. Studies indicate that 46% of newly hired executives fail within 18 months, most often due to poor cultural or strategic fit. Executive mapping reduces that risk by giving you a clear view of who is available, what they earn, and which candidates are the strongest fit — all before you invest in a full search." }
    },
    {
      "@type": "Question",
      "name": "Can Kaptas Global map roles beyond Brazil?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. While Kaptas Global's deepest network is in Brazil, executive mapping engagements can cover leadership roles across Latin America, including Argentina, Mexico, Colombia, and Chile. If the target role involves a regional scope or the client needs to compare talent availability across multiple markets, the mapping report can be expanded accordingly." }
    }
  ]
};
const executiveMappingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Executive Mapping in Brazil and Latin America",
  "description": "Kaptas Global's Executive Mapping service maps 20 to 30 leadership professionals for a target role in Brazil and Latin America, delivering competitor compensation analysis, team structure intelligence, salary benchmarks, and a ranked shortlist of top candidates. Delivered in 10 to 15 business days.",
  "provider": { "@type": "Organization", "name": "Kaptas Global", "url": "https://kaptasglobal.io" },
  "serviceType": "Executive Talent Mapping",
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Brazil" },
    { "@type": "Country", "name": "Argentina" },
    { "@type": "Country", "name": "Mexico" },
    { "@type": "Country", "name": "Colombia" },
    { "@type": "Country", "name": "Chile" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Executive Mapping Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Executive Talent Mapping for Brazil", "description": "Maps 20 to 30 leadership professionals for a target role in Brazil, including competitor compensation analysis, team structure intelligence, and a ranked shortlist." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Executive Talent Mapping for Latin America", "description": "Maps leadership professionals across Latin America for C-level, VP, director, and country manager roles, with salary benchmarks, competitor analysis, and hiring model recommendations." } }
    ]
  },
  "url": "https://kaptasglobal.io/executive-mapping",
  "potentialAction": { "@type": "Action", "name": "Book a call", "target": "https://kaptasglobal.io/executive-mapping#form" }
};
const hireInBrazilFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "speakable": FAQ_SPEAKABLE,
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can a foreign company hire employees in Brazil without a local entity?",
      "acceptedAnswer": { "@type": "Answer", "text": "A foreign company can hire in Brazil through an Employer of Record (EOR), a PJ contractor model, or by partnering with a recruitment firm that manages the process end-to-end. Kaptas Global helps companies from the US, UK, Germany, China, and other markets make their first hire in Brazil without requiring entity setup. We recommend the right hiring model (EOR, PJ, or CLT) based on the role, budget, and long-term plan, then handle recruitment and onboarding." }
    },
    {
      "@type": "Question",
      "name": "What does the hiring process look like when expanding to Brazil for the first time?",
      "acceptedAnswer": { "@type": "Answer", "text": "Kaptas Global runs a structured process: competitor landscape analysis, compensation benchmarking, work-model recommendation (PJ, CLT, or EOR), candidate sourcing, vetting, and placement. The entire cycle typically takes 3 to 6 weeks depending on role complexity. Companies receive market data and a clear hiring structure before any candidate is presented, reducing the risk of misaligned offers or wrong hires." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between CLT, PJ, and EOR hiring models in Brazil?",
      "acceptedAnswer": { "@type": "Answer", "text": "CLT is Brazil's formal employment contract with full labor protections (13th salary, FGTS, paid vacation). PJ is a contractor model where the professional invoices through their own company, offering flexibility and lower employer costs. EOR allows a foreign company to hire a CLT employee without setting up a Brazilian entity. Kaptas Global evaluates each role and recommends the best model based on cost, compliance risk, and operational needs." }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire an employee in Brazil?",
      "acceptedAnswer": { "@type": "Answer", "text": "Total employer cost in Brazil typically runs 70-80% above gross salary when using CLT, accounting for 13th salary, vacation bonus, FGTS (8% monthly), INSS (~20%), meal and transport vouchers, and health insurance. Kaptas Global provides a role-specific compensation benchmark before the search begins so companies can plan budgets accurately." }
    },
    {
      "@type": "Question",
      "name": "How long does it take to make a first hire in Brazil?",
      "acceptedAnswer": { "@type": "Answer", "text": "With Kaptas Global, the full cycle from market analysis to placement typically takes 3 to 6 weeks. EOR onboarding after candidate selection adds 3 to 7 business days; PJ contractors can start within 1 to 3 days after contract agreement. Traditional hiring processes without local expertise often stretch to 60-90 days or longer." }
    },
    {
      "@type": "Question",
      "name": "What mandatory benefits must employers provide in Brazil?",
      "acceptedAnswer": { "@type": "Answer", "text": "Brazilian labor law (CLT) requires 13th salary (one extra month of pay), 30 days of paid vacation plus a one-third vacation bonus, FGTS deposits (8% of monthly salary), INSS employer contributions (~20% of payroll), and transportation vouchers. Many companies also offer meal vouchers and health insurance to remain competitive." }
    },
    {
      "@type": "Question",
      "name": "Can Kaptas Global help hire for any role or industry, not just tech?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. While many firms entering Brazil focus on technology roles, Kaptas Global supports hiring across all functions: sales, operations, marketing, HR, finance, general management, and executive leadership. We have placed General Managers, Marketing Managers, HR leads, SAP specialists, and Community Managers for companies expanding into Brazil and Latin America." }
    },
    {
      "@type": "Question",
      "name": "What happens if a hire does not work out?",
      "acceptedAnswer": { "@type": "Answer", "text": "Kaptas Global offers a replacement guarantee on every placement. If a hire does not meet expectations within the guarantee period, Kaptas Global restarts the search at no additional recruitment cost. This protects companies making their first move into Brazil, where replacing a bad hire can cost over 200% of the role's annual salary." }
    },
    {
      "@type": "Question",
      "name": "Why hire in Brazil instead of other Latin American countries?",
      "acceptedAnswer": { "@type": "Answer", "text": "Brazil has the largest professional talent pool in Latin America, with over 1.5 million tech graduates alone. Salary expectations for mid-to-senior roles are significantly lower than US equivalents. Time zone alignment with US East Coast (1-2 hours difference) and growing bilingual proficiency make Brazil a practical first step for companies expanding into Latin America." }
    },
    {
      "@type": "Question",
      "name": "Can Kaptas Global help hire in other Latin American countries beyond Brazil?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. While Brazil is the primary market, Kaptas Global supports hiring in Argentina, Mexico, Colombia, and Chile. Each country has a different labor framework, compensation structure, and talent profile. Kaptas Global adapts the process — competitor analysis, compensation benchmarking, model recommendation, and recruitment — to each country's specifics." }
    }
  ]
};
const hireInBrazilServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Market Entry Recruitment in Brazil",
  "name": "Hire in Brazil",
  "description": "End-to-end recruitment service for companies making their first hires in Brazil. Includes competitor landscape analysis, compensation benchmarking, hiring-model consulting (CLT, PJ, or EOR), candidate sourcing, vetting, and placement. No local entity required.",
  "provider": { "@type": "Organization", "name": "Kaptas Global", "url": "https://kaptasglobal.io" },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Place", "name": "Worldwide" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Hire in Brazil — Key Deliverables",
    "itemListElement": [
      { "@type": "Offer", "name": "Market Intelligence Report", "description": "Competitor landscape analysis, compensation benchmarks, and hiring-model recommendation (CLT, PJ, or EOR) for the target role and geography in Brazil." },
      { "@type": "Offer", "name": "End-to-End Recruitment", "description": "Candidate sourcing, vetting, English assessment, cultural fit evaluation, and placement. Full cycle typically completed in 3 to 6 weeks." },
      { "@type": "Offer", "name": "Replacement Guarantee", "description": "90 to 180-day replacement guarantee depending on role level. If a hire does not work out within the guarantee period, Kaptas Global restarts the search at no additional cost." }
    ]
  },
  "url": "https://kaptasglobal.io/start-operation",
  "potentialAction": { "@type": "Action", "name": "Plan your first hire", "target": "https://kaptasglobal.io/start-operation#form" }
};
const directHireFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "speakable": FAQ_SPEAKABLE,
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Direct Hire and how does it work?",
      "acceptedAnswer": { "@type": "Answer", "text": "Direct Hire means we handle the entire recruitment process — sourcing, screening, technical validation, and shortlisting — and deliver pre-vetted candidates ready to join your team. You hire them directly on your payroll (PJ or CLT in Brazil, or as international contractors). There are no recurring fees. You pay a one-time placement fee of 18% of the candidate's expected first-year compensation, only after you make a hire." }
    },
    {
      "@type": "Question",
      "name": "How long does the hiring process take?",
      "acceptedAnswer": { "@type": "Answer", "text": "On average, we deliver the first shortlist within 5 business days. Most roles are filled within 2 to 4 weeks from kickoff, depending on seniority and specificity. Executive-level or niche roles may take slightly longer." }
    },
    {
      "@type": "Question",
      "name": "What does the 18% fee include?",
      "acceptedAnswer": { "@type": "Answer", "text": "The 18% one-time fee covers the full recruitment cycle: market mapping, active sourcing, behavioral and technical screening, shortlist delivery, interview coordination, offer advisory, and a replacement warranty. There are no retainers, upfront deposits, or hidden charges." }
    },
    {
      "@type": "Question",
      "name": "Is there a replacement warranty?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. If a placed candidate leaves or is terminated within the warranty period, we replace them at no additional cost. The warranty duration depends on the role level and is defined before the search begins." }
    },
    {
      "@type": "Question",
      "name": "Can I hire contractors (PJ) or only permanent employees (CLT)?",
      "acceptedAnswer": { "@type": "Answer", "text": "Both. We support PJ (contractor) and CLT (permanent employment under Brazilian labor law) hiring models. We help you understand the legal, tax, and cost differences so you can choose the best fit for each role." }
    },
    {
      "@type": "Question",
      "name": "Do I need a legal entity in Brazil to hire directly?",
      "acceptedAnswer": { "@type": "Answer", "text": "Not necessarily. For PJ (contractor) hires, you can engage professionals directly from your US entity via a service agreement. For CLT (permanent) hires, you would need a local entity or an Employer of Record (EOR). We advise on the best path depending on your situation." }
    },
    {
      "@type": "Question",
      "name": "What roles can Kaptas Global fill through Direct Hire?",
      "acceptedAnswer": { "@type": "Answer", "text": "We specialize in technology, product, and engineering roles — including full-stack developers, backend and frontend engineers, QA engineers, AI/ML engineers, DevOps, data engineers, product managers, and engineering managers. We also recruit for sales, marketing, finance, and operations positions across Latin America." }
    },
    {
      "@type": "Question",
      "name": "How do you vet candidates?",
      "acceptedAnswer": { "@type": "Answer", "text": "Every candidate goes through a multi-layer validation: resume and background review, behavioral interview, technical assessment (live coding, system design, or domain-specific tests depending on the role), English proficiency evaluation, and culture-fit analysis. Only candidates who pass all stages are shortlisted." }
    },
    {
      "@type": "Question",
      "name": "Who owns the IP for work produced by the hire?",
      "acceptedAnswer": { "@type": "Answer", "text": "You do. Since the candidate is hired directly on your payroll or as your contractor, 100% of the intellectual property belongs to your company. We recommend including IP assignment clauses in your employment or service agreement." }
    },
    {
      "@type": "Question",
      "name": "How is Direct Hire different from Outsourcing & Staffing?",
      "acceptedAnswer": { "@type": "Answer", "text": "With Direct Hire, we find the talent and you hire them on your payroll. You pay a one-time 18% fee and manage the professional directly. With Outsourcing and Staffing, the professional works dedicated to your team but remains on our payroll — you pay a flat monthly fee that includes salary, taxes, and management. Direct Hire is best when you want full control. Outsourcing and Staffing is best when you want zero HR overhead." }
    }
  ]
};
const directHireServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Direct Hire in Brazil",
  "description": "End-to-end recruitment service to hire Brazilian professionals directly on your team. One-time 18% placement fee. Pre-vetted shortlist in 5 days. Replacement warranty included.",
  "provider": { "@type": "Organization", "name": "Kaptas Global", "url": "https://kaptasglobal.io" },
  "serviceType": "Direct Hire Recruitment",
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Place", "name": "Worldwide" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Direct Hire Plans",
    "itemListElement": [
      { "@type": "Offer", "name": "Direct Hire - Contractor (PJ)", "description": "One-time 18% placement fee. Candidate joins your team as an independent contractor (PJ) in Brazil. Includes full vetting, shortlisting, and replacement warranty.", "priceCurrency": "USD", "price": "18% of first-year compensation", "eligibleRegion": { "@type": "Place", "name": "Worldwide" } },
      { "@type": "Offer", "name": "Direct Hire - Permanent (CLT)", "description": "One-time 18% placement fee. Candidate is hired as a permanent employee (CLT) under Brazilian labor law. Includes full vetting, shortlisting, and replacement warranty.", "priceCurrency": "USD", "price": "18% of first-year compensation", "eligibleRegion": { "@type": "Place", "name": "Worldwide" } }
    ]
  },
  "url": "https://kaptasglobal.io/direct-hire",
  "potentialAction": { "@type": "Action", "name": "Start for free", "target": "https://kaptasglobal.io/direct-hire#form" }
};
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  "url": SITE_URL,
  "name": "Kaptas Global",
  "alternateName": ["HR Technology LLC d/b/a Kaptas Global"],
  "description": "Strategic hiring partner connecting founder-led U.S. technology companies with senior remote engineering and operating talent in Brazil and Latin America.",
  "publisher": { "@id": ORG_ID },
  "inLanguage": "en-US",
  "copyrightYear": 2024,
  "copyrightHolder": { "@id": ORG_ID }
};
function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
const SHARED_CLOSING = "Kaptas Global, the trade name of HR Technology LLC, was founded in 2024 by Rodolfo Chaves and Henry Novaes, who together bring more than 20 years of combined experience placing senior Brazilian professionals in companies worldwide. The company has completed 300+ placements across 30+ global clients with a 75% repeat-client rate. Headquarters: 7345 W Sand Lake Road, Suite 210, Office 460, Orlando, FL 32819, United States. Contact: support@kaptasglobal.io or +1 (689) 293-9252.";
const AEO_PARAGRAPHS = {
  home: "Kaptas Global is a US-incorporated strategic hiring partner that helps founder-led U.S. technology companies — typically bootstrapped, profitable, or seed-stage with 1 to 70 employees and no formal talent-acquisition function — hire senior remote engineering and operating talent in Brazil and across Latin America. Kaptas Global runs four services: Direct Hire (a one-time placement fee of 18% of first-year compensation, paid only after a successful hire, with no retainer and a replacement guarantee included), Outsourcing & Staffing (a flat monthly cost per professional that covers salary, Brazilian employment compliance, payroll, and unlimited replacements, billed as a single USD invoice, with full intellectual property ownership for the client), Executive Mapping (a research-grade market-intelligence report including competitor compensation, team structures, salary benchmarks, and a ranked shortlist of leadership candidates, delivered in 10 to 15 business days as a standalone product), and Hire in Brazil (market-entry consulting and end-to-end recruitment for foreign companies establishing Brazilian operations, with hiring-model recommendation across CLT, PJ, and EOR). Representative outcomes from real placements include a 24-person U.S. startup that replaced 8 U.S.-based engineers post-layoff with 8 Brazil-based engineers at 55% lower engineering cost while preserving shipping pace; a Series G startup that filled a Backend Engineer role from 8 pre-vetted finalists instead of the 30+ candidate interviews its internal process typically required; and a CTO whose first single QA hire grew into a five-person team within six months, all still active. Brazil is a strategic hiring market rather than a cost-arbitrage market. Brazilian engineers are actively sourced by Google, Netflix, Microsoft, and Stripe from their São Paulo and Belo Horizonte hubs. The country has more than 1.5 million tech graduates, growing senior-level English fluency, and synchronous time-zone overlap with both the U.S. East Coast (1 to 2 hours difference) and the U.S. West Coast / Pacific Time (3 to 4 hours difference), enabling same-day collaboration without offshore hand-off friction. Companies hiring through Kaptas Global typically reduce engineering payroll by 40 to 60% versus equivalent U.S. hires while preserving seniority and quality. " + SHARED_CLOSING,
  pricing: "Kaptas Global publishes transparent, model-based pricing for hiring Brazilian and Latin American professionals so founder-led U.S. technology companies can compare hiring paths without a sales call. Direct Hire is a one-time placement fee of 18% of the professional's first-year compensation, with no retainer and no deposit; payment is due only after the professional starts, and a replacement guarantee of 90 to 180 days is included depending on role level. Outsourcing & Staffing is a flat monthly cost per professional that covers salary, all mandatory Brazilian employment charges (which typically add 70 to 80% above gross salary under CLT contracts), Kaptas Global's management fee, and ongoing HR support — billed as a single USD invoice with unlimited replacements included for the duration of the engagement. Executive Mapping is priced as a custom project scoped to the role, target companies, geographic coverage, and depth of intelligence required, with fees agreed before work begins. Hire in Brazil is a custom market-entry engagement covering competitor landscape analysis, compensation benchmarking, hiring-model recommendation across CLT, PJ, and EOR, and end-to-end recruitment for the first hires. Companies typically save 40 to 60% versus equivalent U.S.-based hires depending on role and seniority. The Outsourcing & Staffing model carries no minimum term, no lock-in, and no cancellation penalty; the Direct Hire fee is payable only on a successful hire. Exact monthly ranges and project fees are confirmed in the applicable Service Agreement so that they remain current as the market evolves. " + SHARED_CLOSING,
  directHire: "Kaptas Global Direct Hire is a placement service for founder-led U.S. technology companies that want to bring senior Brazilian and Latin American professionals onto their own payroll. Kaptas Global handles the full recruitment cycle — market mapping, direct sourcing and headhunting, behavioral screening, technical validation, business-level English assessment, remote-readiness evaluation, cultural-fit interviews, shortlist delivery, and offer advisory — and the client hires the professional directly under their own employment or contractor relationship. The fee is a one-time placement charge of 18% of the candidate's expected first-year total compensation, due only after the professional is hired and starts; there are no retainers, no upfront deposits, and no recurring fees. A replacement guarantee of 90 to 180 days is included, with the duration set by role level before the search begins. Direct Hire supports both PJ (independent contractor in Brazil) and CLT (formal employment under Brazilian labor law) hiring models, and Kaptas Global advises on the legal, tax, and cost trade-offs of each before the offer is made. The average time from kickoff to a pre-vetted shortlist of three candidates is five business days; most permanent placements close within two to four weeks. Roles regularly placed through this service include full-stack, backend, frontend, mobile, QA, DevOps, data, ML, and AI engineers, as well as engineering managers, tech leads, product managers, and senior operating leadership. Brazilian engineers are recruited by Google, Netflix, Microsoft, and Stripe from their São Paulo and Belo Horizonte hubs — the same talent pool Kaptas Global sources from. Direct Hire is the right model when a company wants full management control over the professional; Outsourcing & Staffing is the alternative when zero HR overhead is the priority. " + SHARED_CLOSING,
  outsourcingStaffing: "Kaptas Global Outsourcing & Staffing places senior Brazilian and Latin American professionals on the client team while Kaptas Global remains the employer of record in Brazil, handling payroll, taxes, compliance, and contract structuring. The client manages the professional directly day-to-day, owns 100% of all code, designs, data, and other work product, and receives a single monthly invoice in U.S. dollars that covers salary, all mandatory Brazilian employment charges, Kaptas Global's management fee, and ongoing HR support — with no separate billing for taxes, benefits, or compliance. There is no upfront cost to begin an engagement; sourcing, vetting, and candidate presentations are free, and clients pay nothing until they decide to hire and the professional starts working. No local entity is required in Brazil. Replacements are unlimited and included at no extra cost for the full duration of the engagement; if a professional leaves or underperforms, a new search begins immediately and replacement candidates are typically presented within the same five-business-day shortlist timeline. The average time from kickoff to a signed hire is 14 days. Brazil offers synchronous time-zone overlap with both the U.S. East Coast (1 to 2 hours difference) and the U.S. West Coast / Pacific Time (3 to 4 hours difference), enabling full same-day collaboration without offshore hand-off friction. Outsourcing & Staffing supports engineers (full-stack, backend, frontend, mobile, QA, DevOps, data, ML, AI), product managers, designers, finance and operations specialists, marketing professionals, and leadership roles across Brazil and Latin America. The engagement carries no minimum term, no lock-in, and no cancellation penalty. " + SHARED_CLOSING,
  executiveMapping: "Kaptas Global Executive Mapping is a standalone market-intelligence engagement that gives a U.S. or international company a complete picture of the leadership talent available for a specific role in Brazil or Latin America before committing to a search. Each engagement maps 20 to 30 real qualified professionals for the target position and delivers a structured report covering competitor compensation analysis (salary, bonuses, equity, benefits), team structures and reporting lines at competitor companies, salary and benefits benchmarks built from active sourcing data, a ranked shortlist of the strongest candidates, a hiring-landscape overview with candidate concentration by geography and realistic timelines, and a hiring-model recommendation across PJ, CLT, and EOR. Delivery is 10 to 15 business days from intro call — substantially faster than a traditional executive search, which typically runs three to six months. The mapping is a one-time, fixed-scope project; the report and all underlying data belong to the client. After delivery, the client can activate a placement search through Kaptas Global, run an in-house process using the mapping shortlist, or hold the intelligence for a future hire or board presentation. There is no lock-in, no contingency fee tied to a future hire, and no obligation to continue with Kaptas Global. The service is designed for companies hiring CTOs, country managers, VPs, directors, and other senior leadership roles, especially when the cost of a wrong executive hire — typically more than 200% of the role's annual compensation — makes blind search untenable. Executive Mapping also covers Argentina, Mexico, Colombia, and Chile for regional or pan-Latin American leadership searches. " + SHARED_CLOSING,
  hireInBrazil: "Kaptas Global Hire in Brazil is an end-to-end market-entry service for foreign companies — primarily from the United States, United Kingdom, Germany, China, and other markets — making their first hires in Brazil. The engagement begins with a competitor landscape analysis and compensation benchmarking specific to the target role, geography, and seniority. Kaptas Global then recommends the appropriate hiring model from among CLT (formal employment with full Brazilian labor protections, including 13th salary, FGTS at 8% monthly, INSS at approximately 20%, 30 days of paid vacation plus one-third vacation bonus, meal and transport vouchers, and customary health insurance — total employer cost typically running 70 to 80% above gross salary), PJ (contractor model with lower employer burden and faster onboarding, typically 1 to 3 days after contract agreement), or EOR (employment through Kaptas Global as employer of record, with no Brazilian entity required from the foreign client). Kaptas Global then runs the full recruitment cycle: direct sourcing and headhunting, behavioral screening, technical and English validation, cultural-fit evaluation, shortlist delivery, interview coordination, offer advisory, contract structuring, and onboarding. The full cycle from market analysis to placement typically takes three to six weeks; EOR onboarding adds three to seven business days after candidate selection. A replacement guarantee of 90 to 180 days is included on every placement, with the duration set by role level. Brazil offers the largest professional talent pool in Latin America — more than 1.5 million tech graduates, with deep executive pipelines in São Paulo, Belo Horizonte, Porto Alegre, Recife, Curitiba, and Florianópolis. Hire in Brazil also extends to Argentina, Mexico, Colombia, and Chile for companies expanding across Latin America, with each country adapted to its specific labor framework, compensation structure, and talent profile. " + SHARED_CLOSING,
  blog: "The Kaptas Global blog publishes practical, evidence-based guidance for founder-led U.S. technology companies and operators evaluating how to hire senior Brazilian and Latin American professionals — covering salary and total-cost benchmarks, hiring-model trade-offs between CLT, PJ, and EOR, time-zone and remote-team management practices, market-entry playbooks for Brazil, and lessons learned from real placements completed by Kaptas Global. Articles are written from a strategic-hiring perspective: Brazil is treated as a market with deep technical and operating talent rather than a cost-arbitrage destination. Each article addresses a specific decision a founder, CTO, or operating leader faces when scaling an engineering or operating team into Brazil. " + SHARED_CLOSING,
  ebook: "The Smart Guide to Hiring Brazilian Engineers is a free interactive guide published by Kaptas Global for founders, CTOs, and engineering leaders at U.S. technology companies who are evaluating whether — and how — to hire senior remote talent in Brazil. The guide covers what hiring a senior Brazilian engineer actually costs in 2026 (loaded cost, not just gross salary), the practical trade-offs between CLT, PJ, and Employer-of-Record (EOR) hiring models, how to evaluate technical depth and business-level English beyond the resume, the remote-readiness and async-communication signals that separate strong remote operators from average ones, what time-zone overlap with U.S. East Coast and Pacific Time looks like day-to-day, and the most common pitfalls foreign companies hit on their first Brazilian hire — and how to avoid them. Access is gated: U.S. founders, CTOs, and engineering leaders share name, work email, company, and role, and the guide then opens in a new tab. It is written for the bootstrapped or seed-stage segment that does not yet have a formal talent-acquisition function and where the technical leader is still personally running hiring. " + SHARED_CLOSING
};
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const markers = [
  { name: "San Francisco", coordinates: [-122.4194, 37.7749], tz: "GMT -8", offset: [-10, -15] },
  { name: "New York", coordinates: [-74.006, 40.7128], tz: "GMT -5", offset: [15, -15] },
  { name: "São Paulo", coordinates: [-46.6333, -23.5505], tz: "GMT -3", offset: [15, 5] },
  { name: "Europe", coordinates: [-0.1276, 51.5072], tz: "GMT +0", offset: [15, -15] },
  { name: "Ukraine", coordinates: [-5, 28], lineEnd: [35, 48], tz: "GMT +2", offset: [0, 0], faded: true },
  { name: "China", coordinates: [12, 14], lineEnd: [55, 35], tz: "GMT +8", offset: [0, 0], faded: true }
];
const europeCountries = [
  "Albania",
  "Andorra",
  "Austria",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Ukraine",
  "United Kingdom",
  "Vatican City"
];
function TechMapBackground() {
  return /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none z-0 flex justify-end items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "w-full h-full max-w-[850px] absolute right-[-30%] md:right-[-15%] lg:right-[-5%] opacity-100 flex items-center top-0", children: /* @__PURE__ */ jsxs(
      ComposableMap,
      {
        projection: "geoMercator",
        projectionConfig: {
          scale: 190,
          center: [-65, 30]
          // Centers to show both West Coast US/Canada and Europe, shifted right
        },
        style: { width: "100%", height: "100%" },
        children: [
          /* @__PURE__ */ jsxs("defs", { children: [
            /* @__PURE__ */ jsxs("linearGradient", { id: "line-grad", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
              /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "var(--color-kaptas-green)", stopOpacity: "1" }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "var(--color-kaptas-purple)", stopOpacity: "1" })
            ] }),
            /* @__PURE__ */ jsxs("linearGradient", { id: "line-grad-blue", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
              /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#0047FF", stopOpacity: "1" }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "var(--color-kaptas-purple)", stopOpacity: "1" })
            ] }),
            /* @__PURE__ */ jsxs("filter", { id: "glow", children: [
              /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "3", result: "coloredBlur" }),
              /* @__PURE__ */ jsxs("feMerge", { children: [
                /* @__PURE__ */ jsx("feMergeNode", { in: "coloredBlur" }),
                /* @__PURE__ */ jsx("feMergeNode", { in: "SourceGraphic" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Geographies, { geography: geoUrl, children: ({ geographies }) => geographies.map((geo) => {
            const name = geo.properties.name;
            const isBrazil = name === "Brazil";
            const isUS = name === "United States of America";
            const isCanada = name === "Canada";
            const isEurope = europeCountries.includes(name);
            let fillColor = "rgba(255, 255, 255, 0.02)";
            let fillOpacity = 1;
            let strokeColor = "rgba(255, 255, 255, 0.05)";
            if (isBrazil) {
              fillColor = "var(--color-kaptas-green)";
              fillOpacity = 0.15;
              strokeColor = "rgba(255, 255, 255, 0.2)";
            } else if (isUS || isEurope) {
              fillColor = "var(--color-kaptas-purple)";
              fillOpacity = 0.15;
              strokeColor = "rgba(255, 255, 255, 0.2)";
            } else if (isCanada) {
              fillColor = "#0047FF";
              fillOpacity = 0.06;
              strokeColor = "rgba(255, 255, 255, 0.2)";
            }
            return /* @__PURE__ */ jsx(
              Geography,
              {
                geography: geo,
                fill: fillColor,
                fillOpacity,
                stroke: strokeColor,
                strokeWidth: 0.75,
                style: {
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" }
                }
              },
              geo.rsmKey
            );
          }) }),
          /* @__PURE__ */ jsx(
            Line,
            {
              from: markers[0].coordinates,
              to: markers[2].coordinates,
              stroke: "url(#line-grad)",
              strokeWidth: 2.5,
              strokeLinecap: "round",
              className: "animate-dash opacity-90"
            }
          ),
          /* @__PURE__ */ jsx(
            Line,
            {
              from: markers[1].coordinates,
              to: markers[2].coordinates,
              stroke: "url(#line-grad)",
              strokeWidth: 2.5,
              strokeLinecap: "round",
              className: "animate-dash opacity-90",
              style: { animationDelay: "-25s" }
            }
          ),
          /* @__PURE__ */ jsx(
            Line,
            {
              from: markers[3].coordinates,
              to: markers[2].coordinates,
              stroke: "url(#line-grad)",
              strokeWidth: 2.5,
              strokeLinecap: "round",
              className: "animate-dash opacity-90",
              style: { animationDelay: "-35s" }
            }
          ),
          /* @__PURE__ */ jsx(
            Line,
            {
              from: markers[2].coordinates,
              to: markers[4].lineEnd,
              stroke: "rgba(255, 255, 255, 0.15)",
              strokeWidth: 1.5,
              strokeLinecap: "round",
              strokeDasharray: "4 4"
            }
          ),
          /* @__PURE__ */ jsx(
            Line,
            {
              from: markers[2].coordinates,
              to: markers[5].lineEnd,
              stroke: "rgba(255, 255, 255, 0.15)",
              strokeWidth: 1.5,
              strokeLinecap: "round",
              strokeDasharray: "4 4"
            }
          ),
          markers.map(({ name, coordinates, tz, offset, faded }, i) => {
            if (faded) {
              return /* @__PURE__ */ jsxs(Marker, { coordinates, children: [
                /* @__PURE__ */ jsx(
                  "text",
                  {
                    textAnchor: "start",
                    x: offset[0],
                    y: offset[1],
                    fill: "rgba(255, 255, 255, 0.4)",
                    fontSize: "12",
                    fontWeight: "bold",
                    children: name
                  }
                ),
                /* @__PURE__ */ jsx(
                  "text",
                  {
                    textAnchor: "start",
                    x: offset[0],
                    y: offset[1] + 14,
                    fill: "rgba(136, 136, 136, 0.4)",
                    fontSize: "9",
                    fontFamily: "monospace",
                    fontWeight: "300",
                    letterSpacing: "1",
                    children: tz
                  }
                )
              ] }, name);
            }
            const isSP = i === 2;
            const markerColor = isSP ? "var(--color-kaptas-purple)" : "var(--color-kaptas-green)";
            return /* @__PURE__ */ jsxs(Marker, { coordinates, children: [
              /* @__PURE__ */ jsx("circle", { r: 4, fill: markerColor, filter: "url(#glow)" }),
              /* @__PURE__ */ jsx(
                "circle",
                {
                  r: 12,
                  fill: "none",
                  stroke: markerColor,
                  strokeWidth: 1,
                  className: "animate-ping",
                  style: { animationDuration: "3s", animationDelay: `${i * 0.5}s` }
                }
              ),
              /* @__PURE__ */ jsx(
                "text",
                {
                  textAnchor: i === 0 ? "end" : "start",
                  x: offset[0],
                  y: offset[1],
                  fill: "#fff",
                  fontSize: "12",
                  fontWeight: "bold",
                  style: { textShadow: "0px 2px 4px rgba(0,0,0,0.8)" },
                  children: name
                }
              ),
              /* @__PURE__ */ jsx(
                "text",
                {
                  textAnchor: i === 0 ? "end" : "start",
                  x: offset[0],
                  y: offset[1] + 14,
                  fill: "#888888",
                  fontSize: "9",
                  fontFamily: "monospace",
                  fontWeight: "300",
                  letterSpacing: "1",
                  children: tz
                }
              )
            ] }, name);
          })
        ]
      }
    ) })
  ] });
}
const fadeIn$6 = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};
const staggerContainer$5 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
const staggerItem$5 = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const words = ["Developers", "AI Engineers", "QA Engineers", "for Sales", "for Marketing"];
function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" },
      className: "relative pt-12 lg:pt-24 px-6 md:px-12 max-w-7xl mx-auto w-full min-h-[75vh] flex items-center",
      children: [
        /* @__PURE__ */ jsx(TechMapBackground, {}),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_top_right,_#0047FF33,transparent_80%)] blur-[120px] pointer-events-none" }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-3xl lg:max-w-4xl relative z-10", children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-[64px] font-extrabold tracking-tight leading-[1.1] mb-6 text-white", children: [
            /* @__PURE__ */ jsxs("span", { className: "md:whitespace-nowrap flex flex-wrap items-center gap-x-3", children: [
              "Hire",
              /* @__PURE__ */ jsx("span", { className: "inline-grid overflow-hidden", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: /* @__PURE__ */ jsx(
                motion.span,
                {
                  initial: { y: 40, opacity: 0, filter: "blur(4px)" },
                  animate: { y: 0, opacity: 1, filter: "blur(0px)" },
                  exit: { y: -40, opacity: 0, filter: "blur(4px)" },
                  transition: { duration: 0.4, ease: "easeOut" },
                  className: "col-start-1 row-start-1 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 font-bold leading-tight",
                  children: words[wordIndex]
                },
                wordIndex
              ) }) })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-kaptas-green to-kaptas-purple", children: "in Brazil" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed font-light", children: "Reduce your engineering burn by 60% and keep shipping with senior talent in your timezone." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-5 mb-12", children: [
            /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-6", children: /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/pricing",
                className: "bg-kaptas-green text-kaptas-black px-5 py-2.5 rounded-lg border border-kaptas-green text-sm font-semibold hover:brightness-90 transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_15px_var(--color-kaptas-green)] w-fit",
                children: [
                  "See how hiring in Brazil would work for your team",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mt-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-kaptas-green/10 border border-kaptas-green/30 text-kaptas-green px-3 py-1.5 rounded-sm text-sm font-semibold tracking-wide", children: [
                /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }),
                "Zero cost to interview"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 font-medium tracking-wide", children: "You only pay when you successfully hire." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              variants: staggerContainer$5,
              initial: "hidden",
              animate: "show",
              className: "flex flex-col sm:flex-row gap-8 sm:gap-16 mt-16 pt-10 border-t border-white/10",
              children: [
                /* @__PURE__ */ jsxs(motion.div, { variants: staggerItem$5, className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center text-kaptas-green backdrop-blur-sm", children: /* @__PURE__ */ jsx(TrendingDown, { className: "w-5 h-5", strokeWidth: 1.5 }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-medium text-base text-white mb-0.5", children: "50%+ Cost Reduction" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Compared to US engineering hires" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(motion.div, { variants: staggerItem$5, className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center text-kaptas-purple backdrop-blur-sm", children: /* @__PURE__ */ jsx(Zap, { className: "w-5 h-5", strokeWidth: 1.5 }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-medium text-base text-white mb-0.5", children: "Real-time collaboration" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Full overlap with US time zones" })
                  ] })
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function WhyBrazil() {
  return /* @__PURE__ */ jsx(motion.section, { ...fadeIn$6, className: "px-6 md:px-12 max-w-7xl mx-auto w-full", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-[#111111] to-[#0A0A0A] rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-kaptas-green/5 to-transparent pointer-events-none" }),
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold tracking-tight mb-12 relative z-10", children: "Why Brazil, not offshore" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 max-w-3xl mb-12", children: /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 leading-relaxed", children: "Stop choosing between expensive US talent and heavily async offshore regions. Brazil offers the perfect strategic balance." }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 mb-12", children: [
      /* @__PURE__ */ jsxs("ul", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-kaptas-green shrink-0 mt-1" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-lg mb-1 text-white", children: "Lower cost" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "$70K vs $180K+ for the same Senior Engineer profile." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-kaptas-green shrink-0 mt-1" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-lg mb-1 text-white", children: "Strong talent" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "The same talent pool Google and Amazon have tapped since 2005." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-kaptas-green shrink-0 mt-1" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-lg mb-1 text-white", children: "Real-time collaboration" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Work synchronously with your team, avoiding 24-hour feedback delays." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-kaptas-green shrink-0 mt-1" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-lg mb-1 text-white", children: "Timezone overlap" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Full EST overlap. 4-6h live overlap with PST. No night shifts." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mt-12 pt-8 border-t border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-kaptas-purple animate-pulse" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-kaptas-purple uppercase tracking-widest", children: "Proven Ecosystem" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-1", children: "Big Tech's strategic hub" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Industry leaders have been quietly scaling their engineering centers in Brazil for over a decade." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 w-fit", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-3 h-3 text-white", children: /* @__PURE__ */ jsx("path", { d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" }) }) }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm font-medium", children: "Google" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-600 font-mono ml-1", children: "2005" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-3 h-3 text-white", children: /* @__PURE__ */ jsx("path", { d: "M13.84 14.54c-1.35.69-3.23 1.12-5.1 1.12-3.77 0-5.7-1.6-5.7-4.13 0-2.8 2.3-4.4 6.36-4.4 1.58 0 2.92.3 3.8.68v-.57c0-1.6-.82-2.5-2.6-2.5-1.3 0-2.6.4-3.5 1l-.8-2c1.2-.7 3-1.2 5-1.2 3.3 0 4.8 1.8 4.8 4.8v4.4c0 1.2.2 1.8.7 2.3v1.1c-.6.1-1.2.1-1.8.1-.8 0-1.1-.3-1.14-1.2zm-2.8-5.3c-1-.4-2-.6-3-.6-2 0-3 .8-3 2.1 0 1.3 1 2 2.6 2 1.4 0 2.5-.4 3.4-1v-2.5zM12 21.6c-4.2 0-8.1-1.3-11.2-3.6l1-1.8c2.8 2 6.1 3.1 9.8 3.1 4.1 0 7.8-1.4 10.8-3.9l1.2 1.6c-3.3 2.8-7.4 4.6-11.6 4.6z" }) }) }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm font-medium", children: "Amazon" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-600 font-mono ml-1", children: "2012" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-3 h-3 text-white", children: /* @__PURE__ */ jsx("path", { d: "M17.53 14.831c-1.573 0-3.08-.609-4.218-1.722l-1.312-1.288-1.312 1.288c-1.138 1.113-2.645 1.722-4.218 1.722S3.39 14.222 2.252 13.109a5.86 5.86 0 0 1 0-8.38A5.94 5.94 0 0 1 6.47 3c1.573 0 3.08.609 4.218 1.722L12 6.01l1.312-1.288C14.45 3.609 15.957 3 17.53 3s3.08.609 4.218 1.722a5.86 5.86 0 0 1 0 8.38 5.94 5.94 0 0 1-4.218 1.729zM6.47 5.168c-1.002 0-1.944.388-2.653 1.092a3.73 3.73 0 0 0 0 5.336c.709.704 1.651 1.092 2.653 1.092s1.944-.388 2.653-1.092l2.079-2.04a1.07 1.07 0 0 0 0-1.536l-2.079-2.04A3.746 3.746 0 0 0 6.47 5.168zm11.06 0c-1.002 0-1.944.388-2.653 1.092l-2.079 2.04a1.07 1.07 0 0 0 0 1.536l2.079 2.04c.709.704 1.651 1.092 2.653 1.092s1.944-.388 2.653-1.092a3.73 3.73 0 0 0 0-5.336 3.746 3.746 0 0 0-2.653-1.092z" }) }) }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm font-medium", children: "Meta" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-600 font-mono ml-1", children: "2011" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-3 h-3 text-white", children: /* @__PURE__ */ jsx("path", { d: "M10.428 17.545a16.89 16.89 0 0 1-5.118-1.48V3.414h4.414v10.37l5.85-10.37h4.118v17.15a18.23 18.23 0 0 1-4.414 1.155V10.27l-4.85 8.43z" }) }) }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm font-medium", children: "Netflix" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-600 font-mono ml-1", children: "2011" })
        ] })
      ] })
    ] })
  ] }) });
}
function Differentiation() {
  return /* @__PURE__ */ jsxs(motion.section, { ...fadeIn$6, className: "px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-center text-center", children: [
    /* @__PURE__ */ jsxs("h2", { className: "tracking-tight mb-8 max-w-4xl", children: [
      /* @__PURE__ */ jsx("span", { className: "block text-white text-4xl md:text-5xl lg:text-[56px] font-semibold mb-2 leading-[1.1]", children: "We don’t just send candidates." }),
      /* @__PURE__ */ jsxs("span", { className: "block text-[#9CA3AF] text-3xl md:text-4xl lg:text-[48px] font-medium leading-[1.15]", children: [
        "We make hiring in Brazil",
        /* @__PURE__ */ jsx("br", {}),
        "a safe bet"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-48 h-[2px] bg-gradient-to-r from-kaptas-green to-[#A78BFA] rounded-full mb-16" }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer$5,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-50px" },
        className: "grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 w-full pb-16 border-b border-white/10",
        children: [
          /* @__PURE__ */ jsxs(motion.div, { variants: staggerItem$5, className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-4xl md:text-5xl font-bold text-kaptas-green mb-2", children: "20+" }),
            /* @__PURE__ */ jsx("span", { className: "text-lg font-medium text-gray-300 mb-1", children: "Years" }),
            /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-sm", children: [
              "Combined experience in",
              /* @__PURE__ */ jsx("br", {}),
              "Brazil's tech market"
            ] })
          ] }),
          /* @__PURE__ */ jsxs(motion.div, { variants: staggerItem$5, className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-4xl md:text-5xl font-bold text-kaptas-green mb-2", children: "30+" }),
            /* @__PURE__ */ jsx("span", { className: "text-lg font-medium text-gray-300 mb-1", children: "Clients" }),
            /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-sm", children: [
              "US and global",
              /* @__PURE__ */ jsx("br", {}),
              "companies served"
            ] })
          ] }),
          /* @__PURE__ */ jsxs(motion.div, { variants: staggerItem$5, className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-4xl md:text-5xl font-bold text-kaptas-green mb-2", children: "300+" }),
            /* @__PURE__ */ jsx("span", { className: "text-lg font-medium text-gray-300 mb-1", children: "Placements" }),
            /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-sm", children: [
              "Engineers and specialists",
              /* @__PURE__ */ jsx("br", {}),
              "hired and placed"
            ] })
          ] }),
          /* @__PURE__ */ jsxs(motion.div, { variants: staggerItem$5, className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-4xl md:text-5xl font-bold text-kaptas-green mb-2", children: "75%" }),
            /* @__PURE__ */ jsx("span", { className: "text-lg font-medium text-gray-300 mb-1", children: "Rate" }),
            /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-sm", children: [
              "Placement on",
              /* @__PURE__ */ jsx("br", {}),
              "presented finalists"
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer$5,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-50px" },
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full",
        children: [
          /* @__PURE__ */ jsxs(motion.div, { variants: staggerItem$5, className: "border-l-2 border-kaptas-purple pl-6 py-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Strategic partner, not a recruiter" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: "We learn your stack, stage, and culture before sourcing a single candidate." })
          ] }),
          /* @__PURE__ */ jsxs(motion.div, { variants: staggerItem$5, className: "border-l-2 border-kaptas-purple pl-6 py-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Build teams, not just fill roles" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: "We help you structure and scale operations, thinking beyond the immediate hire." })
          ] }),
          /* @__PURE__ */ jsxs(motion.div, { variants: staggerItem$5, className: "border-l-2 border-kaptas-purple pl-6 py-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Highly specialized in Brazil" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: "Brazil-only. Deep local network, not a LatAm marketplace." })
          ] }),
          /* @__PURE__ */ jsxs(motion.div, { variants: staggerItem$5, className: "border-l-2 border-kaptas-purple pl-6 py-2", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold mb-3", children: [
              "Raise the talent",
              /* @__PURE__ */ jsx("br", {}),
              "bar"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: "We vet 50+ candidates to present 3 finalists. You only interview the best." })
          ] })
        ]
      }
    )
  ] });
}
function EnterpriseSegment() {
  return /* @__PURE__ */ jsxs("div", { className: "w-full bg-[#F9FAFB] pt-[70px] h-[320px] relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-full h-full bg-gradient-to-l from-kaptas-green/5 via-transparent to-transparent pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none opacity-50" }),
    /* @__PURE__ */ jsx(motion.section, { ...fadeIn$6, className: "px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-kaptas-purple" }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]", children: "Market Entry" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-light tracking-tight text-[#111111] mb-6", children: [
          "Starting your ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#111111]", children: "on-site operations" }),
          " in Brazil?"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-lg leading-relaxed", children: "We de-risk your market entry by navigating local compliance, sourcing qualified talent, and mapping the leadership landscape, so you can build your team and start operating in Brazil with confidence." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-full md:w-auto mt-6 md:mt-0", children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/start-operation",
          className: "group/btn inline-flex items-center justify-center gap-3 bg-[#111111] text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-colors w-full md:w-auto shadow-lg",
          children: [
            "Find out more",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover/btn:translate-x-1 transition-transform" })
          ]
        }
      ) })
    ] }) })
  ] });
}
function HowItWorks() {
  return /* @__PURE__ */ jsxs(motion.section, { ...fadeIn$6, id: "how-it-works", className: "px-6 md:px-12 max-w-7xl mx-auto w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mb-16", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-extrabold tracking-tight mb-6", children: [
        "From kickoff to hire in ",
        /* @__PURE__ */ jsx("span", { className: "text-kaptas-purple", children: "14 days" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 font-medium", children: "You interview 3 finalists. We handle the other 50." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-8", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-[27px] left-[50px] right-[50px] h-[1px] bg-gradient-to-r from-kaptas-purple/50 via-white/10 to-kaptas-green/50 z-0" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8", children: [
        {
          step: "01",
          title: "Strategic Alignment",
          desc: "Deep-dive into your technical stack, engineering culture, and product roadmap. We calibrate our search to your exact specifications.",
          color: "text-kaptas-purple",
          borderColor: "border-kaptas-purple/30",
          bgColor: "bg-kaptas-purple/10",
          metric: "Day 1"
        },
        {
          step: "02",
          title: "Sourcing & Vetting",
          desc: "We headhunt from target companies, run technical screens, and validate English proficiency. Three finalists delivered.",
          color: "text-white",
          borderColor: "border-white/20",
          bgColor: "bg-white/5",
          metric: "Days 2-5"
        },
        {
          step: "03",
          title: "Interviews",
          desc: "You interview only the finalists. We handle the scheduling, technical assessments, and logistics.",
          color: "text-white",
          borderColor: "border-white/20",
          bgColor: "bg-white/5",
          metric: "Days 6-11"
        },
        {
          step: "04",
          title: "Hire & Onboard",
          desc: "Offer, contract, compliance, and onboarding. All handled. Your new engineer starts shipping.",
          color: "text-kaptas-green",
          borderColor: "border-kaptas-green/30",
          bgColor: "bg-kaptas-green/10",
          metric: "Days 12-14"
        }
      ].map((item, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.5, delay: i * 0.1 },
          className: "relative group flex flex-col",
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-14 h-14 rounded-full bg-[#111111] border ${item.borderColor} flex items-center justify-center z-10 mb-6 group-hover:scale-110 transition-transform duration-300 relative`, children: /* @__PURE__ */ jsx("span", { className: `font-mono text-sm font-bold ${item.color}`, children: item.step }) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 relative overflow-hidden flex flex-col flex-1 group-hover:bg-[#161616]", children: [
              /* @__PURE__ */ jsx("div", { className: `absolute top-0 left-0 w-full h-1 ${item.bgColor}` }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 mb-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3 text-white", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: item.desc })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300", children: item.metric }) })
            ] })
          ]
        },
        i
      )) })
    ] })
  ] });
}
function CostComparison() {
  return /* @__PURE__ */ jsx(motion.section, { ...fadeIn$6, className: "px-6 md:px-12 max-w-7xl mx-auto w-full mb-32", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] rounded-3xl p-[1px] shadow-2xl relative overflow-hidden group", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-kaptas-green/30 via-transparent to-kaptas-purple/30 opacity-50 group-hover:opacity-100 transition-opacity duration-700" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#111111] rounded-[23px] p-8 md:p-16 relative z-10 h-full w-full overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-1/4 w-96 h-96 bg-kaptas-green/10 rounded-full blur-[120px] pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/4 w-96 h-96 bg-neon-blue/15 rounded-full blur-[120px] pointer-events-none" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center mb-16 relative z-20", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white", children: "The real cost comparison" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 font-medium", children: "Same talent. Same timezone. Different cost structure." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto relative z-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "hidden md:grid grid-cols-3 gap-4 border-b border-white/10 pb-6 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "col-span-1" }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-1 text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-gray-500 uppercase tracking-widest mb-2", children: "US Talent" }),
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-black text-white", children: "Senior Engineer" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-1 text-center relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 bg-kaptas-green/10 text-kaptas-green border border-kaptas-green/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap", children: "Kaptas Global" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-kaptas-green uppercase tracking-widest mb-2 mt-4", children: "Brazil Talent" }),
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-black text-white", children: "Senior Engineer" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-4 py-4 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors rounded-lg md:px-4 md:-mx-4", children: [
            /* @__PURE__ */ jsx("div", { className: "col-span-1 text-sm font-medium text-gray-400 w-full mb-2 md:mb-0", children: "Base Salary (Annual)" }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex justify-between md:justify-center w-full md:w-auto", children: [
              /* @__PURE__ */ jsx("span", { className: "md:hidden text-xs text-gray-500 uppercase font-bold", children: "US Talent:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gray-300", children: "$130k - $160k" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex justify-between md:justify-center w-full md:w-auto", children: [
              /* @__PURE__ */ jsx("span", { className: "md:hidden text-xs text-kaptas-green uppercase font-bold", children: "Brazil Talent:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-kaptas-green font-bold", children: "$60k - $80k" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-4 py-4 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors rounded-lg md:px-4 md:-mx-4", children: [
            /* @__PURE__ */ jsx("div", { className: "col-span-1 text-sm font-medium text-gray-400 w-full mb-2 md:mb-0", children: "Taxes, Benefits & Equity" }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex justify-between md:justify-center w-full md:w-auto", children: [
              /* @__PURE__ */ jsx("span", { className: "md:hidden text-xs text-gray-500 uppercase font-bold", children: "US Talent:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gray-300", children: "+$30,000 (Min)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex justify-between md:justify-center w-full md:w-auto", children: [
              /* @__PURE__ */ jsx("span", { className: "md:hidden text-xs text-kaptas-green uppercase font-bold", children: "Brazil Talent:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-kaptas-green font-bold", children: "$0 (Included)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-4 py-4 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors rounded-lg md:px-4 md:-mx-4", children: [
            /* @__PURE__ */ jsx("div", { className: "col-span-1 text-sm font-medium text-gray-400 w-full mb-2 md:mb-0", children: "Seniority" }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex justify-between md:justify-center w-full md:w-auto", children: [
              /* @__PURE__ */ jsx("span", { className: "md:hidden text-xs text-gray-500 uppercase font-bold", children: "US Talent:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gray-300", children: "5-8+ years" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex justify-between md:justify-center w-full md:w-auto", children: [
              /* @__PURE__ */ jsx("span", { className: "md:hidden text-xs text-kaptas-green uppercase font-bold", children: "Brazil Talent:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-kaptas-green font-bold", children: "5-8+ years" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-4 py-4 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors rounded-lg md:px-4 md:-mx-4", children: [
            /* @__PURE__ */ jsx("div", { className: "col-span-1 text-sm font-medium text-gray-400 w-full mb-2 md:mb-0", children: "English Proficiency" }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex justify-between md:justify-center w-full md:w-auto", children: [
              /* @__PURE__ */ jsx("span", { className: "md:hidden text-xs text-gray-500 uppercase font-bold", children: "US Talent:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gray-300", children: "Native" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex justify-between md:justify-center w-full md:w-auto", children: [
              /* @__PURE__ */ jsx("span", { className: "md:hidden text-xs text-kaptas-green uppercase font-bold", children: "Brazil Talent:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-kaptas-green font-bold", children: "Fluent" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-4 py-4 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors rounded-lg md:px-4 md:-mx-4", children: [
            /* @__PURE__ */ jsx("div", { className: "col-span-1 text-sm font-medium text-gray-400 w-full mb-2 md:mb-0", children: "Timezone Overlap" }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex justify-between md:justify-center w-full md:w-auto", children: [
              /* @__PURE__ */ jsx("span", { className: "md:hidden text-xs text-gray-500 uppercase font-bold", children: "US Talent:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gray-300", children: "100% (PST/EST)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex justify-between md:justify-center w-full md:w-auto", children: [
              /* @__PURE__ */ jsx("span", { className: "md:hidden text-xs text-kaptas-green uppercase font-bold", children: "Brazil Talent:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-kaptas-green font-bold", children: "100% (EST/PST Aligned)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-4 py-4 border-b border-white/5 items-start md:items-center hover:bg-white/[0.02] transition-colors rounded-lg md:px-4 md:-mx-4", children: [
            /* @__PURE__ */ jsx("div", { className: "col-span-1 text-sm font-medium text-gray-400 w-full mb-2 md:mb-0", children: "Average Time to Hire" }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex justify-between md:justify-center w-full md:w-auto", children: [
              /* @__PURE__ */ jsx("span", { className: "md:hidden text-xs text-gray-500 uppercase font-bold", children: "US Talent:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gray-300", children: "45 - 90 Days" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex justify-between md:justify-center w-full md:w-auto", children: [
              /* @__PURE__ */ jsx("span", { className: "md:hidden text-xs text-kaptas-green uppercase font-bold", children: "Brazil Talent:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-kaptas-green font-bold", children: "14 - 21 Days" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 mt-8 pt-8 border-t border-white/10 items-center bg-white/[0.02] rounded-2xl p-6 md:p-8 border border-white/5", children: [
          /* @__PURE__ */ jsxs("div", { className: "col-span-1 text-center md:text-left", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-white", children: "Total Annual Cost" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 mt-1", children: "Fully loaded per engineer" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-1 text-center flex flex-col items-center justify-center", children: [
            /* @__PURE__ */ jsx("span", { className: "md:hidden text-xs text-gray-500 uppercase font-bold mb-1", children: "US Talent" }),
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-black text-gray-500 line-through decoration-red-500/50 decoration-2", children: "$180,000+" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-1 text-center relative flex flex-col items-center justify-center", children: [
            /* @__PURE__ */ jsx("span", { className: "md:hidden text-xs text-kaptas-green uppercase font-bold mb-1", children: "Brazil Talent" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-kaptas-green/20 blur-2xl rounded-full z-0" }),
            /* @__PURE__ */ jsxs("div", { className: "text-5xl md:text-6xl font-black text-white relative z-10 drop-shadow-[0_0_15px_rgba(63,185,80,0.5)] flex items-baseline justify-center gap-2", children: [
              "$70k",
              /* @__PURE__ */ jsx("span", { className: "text-lg md:text-xl font-medium text-gray-400 tracking-normal drop-shadow-none", children: "All-in" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-kaptas-green font-bold text-sm mt-3 relative z-10 bg-kaptas-green/10 px-4 py-1.5 rounded-full border border-kaptas-green/20", children: "~60% BURN REDUCTION" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function TalentMapping() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-[#F9FAFB] text-[#111111] pt-[50px] pb-[50px] h-[500px] w-full mt-0 relative z-10 overflow-hidden", children: [
    /* @__PURE__ */ jsx(motion.section, { ...fadeIn$6, className: "px-6 md:px-12 max-w-7xl mx-auto w-full mb-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-kaptas-purple" }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]", children: "Talent Mapping" })
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-light tracking-tight text-[#111111] mb-6", children: [
        "The best talent isn't applying.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#111111]", children: "We go find them" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-lg leading-relaxed", children: "No job postings. No applicant pools. We run targeted searches across Brazil's top tech companies to find the exact profile your team needs." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex whitespace-nowrap overflow-hidden mb-6 relative w-full", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10" }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10" }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "flex gap-4 px-2 w-max",
          animate: { x: ["0%", "-50%"] },
          transition: { repeat: Infinity, ease: "linear", duration: 40 },
          children: [
            { name: "Frontend Engineer", color: "bg-kaptas-green" },
            { name: "Account Executive", color: "bg-red-500" },
            { name: "Financial Analyst", color: "bg-blue-500" },
            { name: "Product Manager", color: "bg-kaptas-green" },
            { name: "Backend Engineer", color: "bg-kaptas-green" },
            { name: "SDR", color: "bg-red-500" },
            { name: "UI/UX Designer", color: "bg-orange-500" },
            { name: "Data Scientist", color: "bg-kaptas-green" },
            { name: "Fullstack Engineer", color: "bg-kaptas-green" },
            { name: "Head of Finance", color: "bg-blue-500" },
            { name: "Machine Learning", color: "bg-kaptas-green" },
            { name: "QA Engineer", color: "bg-kaptas-green" },
            { name: "Blockchain Engineer", color: "bg-kaptas-green" },
            { name: "Frontend Engineer", color: "bg-kaptas-green" },
            { name: "Account Executive", color: "bg-red-500" },
            { name: "Financial Analyst", color: "bg-blue-500" },
            { name: "Product Manager", color: "bg-kaptas-green" },
            { name: "Backend Engineer", color: "bg-kaptas-green" },
            { name: "SDR", color: "bg-red-500" },
            { name: "UI/UX Designer", color: "bg-orange-500" },
            { name: "Data Scientist", color: "bg-kaptas-green" },
            { name: "Fullstack Engineer", color: "bg-kaptas-green" },
            { name: "Head of Finance", color: "bg-blue-500" },
            { name: "Machine Learning", color: "bg-kaptas-green" },
            { name: "QA Engineer", color: "bg-kaptas-green" },
            { name: "Blockchain Engineer", color: "bg-kaptas-green" }
          ].map((role, i) => /* @__PURE__ */ jsxs("div", { className: "px-4 py-2 md:px-5 md:py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-[#111111] shadow-sm hover:shadow-md transition-shadow duration-300 whitespace-nowrap flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: `w-1.5 h-1.5 rounded-full ${role.color}` }),
            role.name
          ] }, i))
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex whitespace-nowrap overflow-hidden relative w-full", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10" }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10" }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "flex gap-4 px-2 w-max",
          animate: { x: ["-50%", "0%"] },
          transition: { repeat: Infinity, ease: "linear", duration: 45 },
          children: [
            { name: "CTO", color: "bg-kaptas-green" },
            { name: "VP of Sales", color: "bg-red-500" },
            { name: "AI Engineer", color: "bg-kaptas-green" },
            { name: "Cloud Architect", color: "bg-kaptas-green" },
            { name: "RevOps Specialist", color: "bg-blue-500" },
            { name: "Marketing Director", color: "bg-orange-500" },
            { name: "Security Engineer", color: "bg-kaptas-green" },
            { name: "Technical Sales", color: "bg-red-500" },
            { name: "Fullstack Engineer", color: "bg-kaptas-green" },
            { name: "CFO", color: "bg-blue-500" },
            { name: "Mobile Developer", color: "bg-kaptas-green" },
            { name: "QA Engineer", color: "bg-kaptas-green" },
            { name: "Blockchain Engineer", color: "bg-kaptas-green" },
            { name: "CTO", color: "bg-kaptas-green" },
            { name: "VP of Sales", color: "bg-red-500" },
            { name: "AI Engineer", color: "bg-kaptas-green" },
            { name: "Cloud Architect", color: "bg-kaptas-green" },
            { name: "RevOps Specialist", color: "bg-blue-500" },
            { name: "Marketing Director", color: "bg-orange-500" },
            { name: "Security Engineer", color: "bg-kaptas-green" },
            { name: "Technical Sales", color: "bg-red-500" },
            { name: "Fullstack Engineer", color: "bg-kaptas-green" },
            { name: "CFO", color: "bg-blue-500" },
            { name: "Mobile Developer", color: "bg-kaptas-green" },
            { name: "QA Engineer", color: "bg-kaptas-green" },
            { name: "Blockchain Engineer", color: "bg-kaptas-green" }
          ].map((role, i) => /* @__PURE__ */ jsxs("div", { className: "px-4 py-2 md:px-5 md:py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-[#111111] shadow-sm hover:shadow-md transition-shadow duration-300 whitespace-nowrap flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: `w-1.5 h-1.5 rounded-full ${role.color}` }),
            role.name
          ] }, i))
        }
      )
    ] })
  ] });
}
const defaultCases = [
  {
    tag: "Case 01 // Cost Efficiency",
    metric: "55",
    metricSuffix: "%",
    title: "Lower engineering cost",
    description: "A 24-person startup replaced 8 US-based engineers post-layoff with 8 Brazil-based engineers through Kaptas Global. Same shipping pace. 55% lower engineering cost.",
    colorClass: "bg-kaptas-green",
    glowClass: "bg-kaptas-green/5"
  },
  {
    tag: "Case 02 // Signal to Noise",
    metricPrefix: "33→",
    metric: "8",
    title: "Interviews to finalists",
    description: "A Series G startup needed a Backend Engineer. Their internal process typically requires 30 candidate interviews to make one hire. We presented 8 finalists and placed the engineer.",
    colorClass: "bg-kaptas-purple",
    glowClass: "bg-neon-blue/10"
  },
  {
    tag: "Case 03 // Validation",
    metricPrefix: "1→",
    metric: "Team",
    title: "Strategic expansion",
    description: "A CTO hired a single QA engineer to test the model. Within 6 months, the team grew to 4 QA engineers and 1 full-stack engineer. All still active.",
    colorClass: "bg-blue-500",
    glowClass: "bg-blue-500/5"
  }
];
const defaultBadges = [
  "Highly qualified candidates",
  "No cost to interview",
  "Senior talent ready to ship"
];
function CaseResults({
  title = "Results from startups who hire with us",
  subtitle = "Results from global companies building teams in Brazil through Kaptas Global.",
  cases = defaultCases,
  badges = defaultBadges
}) {
  const icons = [Clock, ShieldCheck, Briefcase];
  return /* @__PURE__ */ jsxs(motion.section, { ...fadeIn$6, className: "px-6 md:px-12 max-w-7xl mx-auto w-full pt-[110px]", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start justify-start mb-16 gap-6 text-left", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 font-medium leading-relaxed", children: subtitle })
    ] }) }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: staggerContainer$5,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-50px" },
        className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12",
        children: cases.map((item, index) => /* @__PURE__ */ jsxs(motion.div, { variants: staggerItem$5, className: "group relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center h-full overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5", children: [
          /* @__PURE__ */ jsx("div", { className: `absolute top-0 right-0 w-64 h-64 ${item.glowClass} rounded-full blur-3xl -mr-20 -mt-20 transition-opacity duration-500 opacity-0 group-hover:opacity-100` }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-8 relative z-10 w-full", children: [
            /* @__PURE__ */ jsx("div", { className: `w-1.5 h-1.5 rounded-full ${item.colorClass}` }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]", children: item.tag })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6 relative z-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-4xl md:text-5xl font-light tracking-tighter text-white mb-2", children: [
              item.metricPrefix && /* @__PURE__ */ jsx("span", { className: "text-2xl text-gray-600 mx-1", children: item.metricPrefix }),
              item.metric,
              item.metricSuffix && /* @__PURE__ */ jsx("span", { className: "text-2xl text-gray-600 mx-1", children: item.metricSuffix })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white", children: item.title })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 relative z-10" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed flex-1 relative z-10", children: item.description })
        ] }, index))
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: fadeIn$6,
        className: "flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-8 border-t border-white/10 text-center",
        children: badges.map((badge, index) => {
          const Icon = icons[index % icons.length];
          return /* @__PURE__ */ jsxs(React.Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-kaptas-green shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-kaptas-green uppercase tracking-widest", children: badge })
            ] }),
            index < badges.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden md:block w-1 h-1 rounded-full bg-white/20 shrink-0" })
          ] }, index);
        })
      }
    )
  ] });
}
function ServiceNavigation() {
  return /* @__PURE__ */ jsx(motion.section, { ...fadeIn$6, className: "px-6 md:px-12 max-w-7xl mx-auto w-full mb-0 pb-[100px]", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-12 lg:col-span-4 lg:row-span-2 flex flex-col justify-start pt-4 lg:pr-12 mb-8 lg:mb-0", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-light tracking-tight mb-6 text-white", children: [
        "Choose how ",
        /* @__PURE__ */ jsx("br", { className: "hidden lg:block" }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "to hire" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: "Whether you need one contractor tomorrow or a full team next quarter, the process adapts" }),
        /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-white/10", children: [
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm mb-3", children: "Don't see your exact setup?" }),
          /* @__PURE__ */ jsxs("a", { href: "#contact", className: "inline-flex items-center gap-2 text-sm font-medium text-white hover:text-kaptas-green transition-colors group", children: [
            "Build a tailored solution",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Link, { to: "/contractor-staffing", className: "group md:col-span-6 lg:col-span-4 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-neon-blue/30 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[280px]", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-kaptas-purple uppercase tracking-widest", children: "01 // Plug & Play" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium text-white mb-3", children: "Outsourcing & Staffing" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: "They report to you. We handle everything else: sourcing, contracts, payroll, and compliance. One engineer or a full team." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between relative z-10 mt-auto pt-6 border-t border-white/5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider", children: "PAY MONTHLY" }),
          /* @__PURE__ */ jsx("div", { className: "bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider", children: "NO LONG-TERM CONTRACT" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon-blue group-hover:bg-neon-blue/10 transition-all duration-300 shrink-0", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-gray-500 group-hover:text-neon-blue group-hover:translate-x-1 transition-all duration-300" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Link, { to: "/direct-hire", className: "group md:col-span-6 lg:col-span-4 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-kaptas-green/30 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[280px]", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-kaptas-green/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-kaptas-green uppercase tracking-widest", children: "02 // Core" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium text-white mb-3", children: "Direct Hire" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: "We find and vet the talent. You hire them directly, as a contractor or full-time employee. Payroll and employment are on your side." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between relative z-10 mt-auto pt-6 border-t border-white/5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider", children: "PAY ON HIRE" }),
          /* @__PURE__ */ jsx("div", { className: "bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider", children: "ZERO COST TO INTERVIEW" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-kaptas-green group-hover:bg-kaptas-green/10 transition-all duration-300 shrink-0", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-gray-500 group-hover:text-kaptas-green group-hover:translate-x-1 transition-all duration-300" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Link, { to: "/executive-mapping", className: "group md:col-span-6 lg:col-span-4 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[280px]", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-blue-500 uppercase tracking-widest", children: "03 // Intel" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium text-white mb-3", children: "Executive Mapping" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: "We find and vet the talent. You hire them directly, as a contractor or full-time employee. Payroll and employment are on your side." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between relative z-10 mt-auto pt-6 border-t border-white/5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider", children: "DEDICATED SEARCH" }),
          /* @__PURE__ */ jsx("div", { className: "bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider", children: "RETAINED ENGAGEMENT" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-300 shrink-0", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-gray-500 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Link, { to: "/start-operation", className: "group md:col-span-6 lg:col-span-4 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[280px]", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-white uppercase tracking-widest", children: "04 // Build" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium text-white mb-3", children: "Hire in Brazil" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: "Opening a physical presence in Brazil. We handle EOR, compliance, and local hiring. Turnkey." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between relative z-10 mt-auto pt-6 border-t border-white/5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider", children: "FULL COMPLIANCE" }),
          /* @__PURE__ */ jsx("div", { className: "bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider", children: "END-TO-END SETUP" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300 shrink-0", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" }) })
      ] })
    ] })
  ] }) });
}
const WEB3FORMS_KEY$1 = "";
function useContactForm(source) {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }
  async function handleSubmit(e) {
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
          access_key: WEB3FORMS_KEY$1,
          subject: `New inquiry from ${form.name} at ${form.company} — ${pageUrl}`,
          from_name: "Kaptas Global Website",
          name: form.name,
          company: form.company,
          email: form.email,
          message: form.message,
          page_url: pageUrl
        })
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
function ThankYouModal({ isOpen, onClose }) {
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 10 },
        transition: { duration: 0.3, ease: "easeOut" },
        className: "fixed inset-0 z-[101] flex items-center justify-center px-4",
        onClick: onClose,
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 md:p-14 max-w-lg w-full shadow-2xl overflow-hidden",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-kaptas-green/10 blur-[80px] pointer-events-none" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: onClose,
                  className: "absolute top-5 right-5 text-gray-500 hover:text-white transition-colors",
                  children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: { delay: 0.15, type: "spring", stiffness: 200 },
                    className: "w-16 h-16 rounded-full bg-kaptas-green/15 flex items-center justify-center mb-6",
                    children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-8 h-8 text-kaptas-green" })
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.2 },
                    children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase tracking-[0.2em] text-kaptas-green mb-3", children: "Message received" }),
                      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4", children: "Thank you for reaching out." }),
                      /* @__PURE__ */ jsxs("p", { className: "text-gray-400 text-base leading-relaxed mb-8", children: [
                        "Our team will review your message and get back to you within",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "1 business day" }),
                        ". We look forward to learning about your hiring goals."
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 mb-8 text-left bg-white/5 rounded-2xl p-5 border border-white/5", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-sm text-gray-400", children: [
                          /* @__PURE__ */ jsx("span", { className: "w-5 h-5 rounded-full bg-kaptas-green/20 text-kaptas-green flex items-center justify-center text-xs font-bold shrink-0 mt-0.5", children: "1" }),
                          /* @__PURE__ */ jsx("span", { children: "We'll review your hiring needs and suggest the right service model." })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-sm text-gray-400", children: [
                          /* @__PURE__ */ jsx("span", { className: "w-5 h-5 rounded-full bg-kaptas-green/20 text-kaptas-green flex items-center justify-center text-xs font-bold shrink-0 mt-0.5", children: "2" }),
                          /* @__PURE__ */ jsx("span", { children: "A quick intro call to align on requirements, timeline, and budget." })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-sm text-gray-400", children: [
                          /* @__PURE__ */ jsx("span", { className: "w-5 h-5 rounded-full bg-kaptas-green/20 text-kaptas-green flex items-center justify-center text-xs font-bold shrink-0 mt-0.5", children: "3" }),
                          /* @__PURE__ */ jsx("span", { children: "Pre-vetted candidates delivered within 5 business days of kickoff." })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          onClick: onClose,
                          className: "w-full bg-kaptas-green text-kaptas-black font-semibold rounded-xl px-6 py-3.5 hover:brightness-90 transition-all",
                          children: "Got it, thanks!"
                        }
                      )
                    ]
                  }
                )
              ] })
            ]
          }
        )
      }
    )
  ] }) });
}
function LeadGenerationForm({
  headline,
  subtext,
  steps,
  trustSignals,
  ctaText,
  source
}) {
  const { form, handleChange, handleSubmit, isSubmitting, showModal, setShowModal, error } = useContactForm(source || "Home");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ThankYouModal, { isOpen: showModal, onClose: () => setShowModal(false) }),
    /* @__PURE__ */ jsxs("div", { className: "w-full bg-[#F9FAFB] pt-[80px] h-[680px] relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-full h-full bg-gradient-to-l from-kaptas-green/5 via-transparent to-transparent pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none opacity-50" }),
      /* @__PURE__ */ jsx(motion.section, { ...fadeIn$6, className: "px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-kaptas-green" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]", children: "Start Here" })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-light tracking-tight text-[#111111] mb-6", children: headline || /* @__PURE__ */ jsxs(Fragment, { children: [
            "Let's build your ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#111111]", children: "hiring strategy for Brazil" })
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-lg leading-relaxed mb-8", children: subtext || "The role you've been trying to fill for months? We can close it in 14 days." }),
          /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-[#111111] uppercase tracking-widest mb-4", children: "After you book:" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: (steps || [
              { number: "1", title: "Intro call.", desc: "Service models, budget, and positions." },
              { number: "2", title: "Alignment.", desc: "Candidate profile, stack, and priorities." },
              { number: "3", title: "Candidates in 5 days.", desc: "Pre-vetted, headhunted profiles." }
            ]).map((step, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full bg-kaptas-green/10 text-kaptas-green flex items-center justify-center text-xs font-bold shrink-0 mt-0.5", children: step.number }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#111111]", children: step.title }),
                " ",
                step.desc
              ] })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3 pt-6 border-t border-gray-200", children: (trustSignals || [
            "Zero cost to interview",
            "Headhunted profiles, not job board applicants",
            "No commitment required"
          ]).map((signal, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm text-gray-600 font-medium", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-kaptas-green" }),
            /* @__PURE__ */ jsx("span", { children: signal })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute -inset-[1px] rounded-3xl overflow-hidden blur-md opacity-60 pointer-events-none", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_12s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#0047FF1A_200deg,#0047FF_280deg,#00B356_360deg)]", style: { animationDuration: "7s" } }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_17s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#00B3561A_200deg,#00B356_260deg,#E8B923_310deg,#E8B923_360deg)]", style: { animationDuration: "11s" } }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl p-[1px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-gray-200/60", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_12s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#0047FF1A_200deg,#0047FF_280deg,#00B356_360deg)]", style: { animationDuration: "7s" } }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_17s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#00B3561A_200deg,#00B356_260deg,#E8B923_310deg,#E8B923_360deg)]", style: { animationDuration: "11s" } }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-white rounded-[23px] p-8 md:p-10 relative z-10 h-full w-full", children: /* @__PURE__ */ jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "lg-name", className: "text-xs font-semibold text-gray-500 uppercase tracking-wider", children: "Name" }),
                  /* @__PURE__ */ jsx("input", { type: "text", id: "lg-name", name: "name", value: form.name, onChange: handleChange, required: true, className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-kaptas-green/20 focus:border-kaptas-green transition-all", placeholder: "John Doe" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "lg-company", className: "text-xs font-semibold text-gray-500 uppercase tracking-wider", children: "Company Name" }),
                  /* @__PURE__ */ jsx("input", { type: "text", id: "lg-company", name: "company", value: form.company, onChange: handleChange, className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-kaptas-green/20 focus:border-kaptas-green transition-all", placeholder: "Acme Corp" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "lg-email", className: "text-xs font-semibold text-gray-500 uppercase tracking-wider", children: "Work Email" }),
                /* @__PURE__ */ jsx("input", { type: "email", id: "lg-email", name: "email", value: form.email, onChange: handleChange, required: true, className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-kaptas-green/20 focus:border-kaptas-green transition-all", placeholder: "john@acmecorp.com" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "lg-message", className: "text-xs font-semibold text-gray-500 uppercase tracking-wider", children: "How can we help?" }),
                /* @__PURE__ */ jsx("textarea", { id: "lg-message", name: "message", value: form.message, onChange: handleChange, rows: 4, className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-kaptas-green/20 focus:border-kaptas-green transition-all resize-none", placeholder: "Tell us about your hiring needs, timeline, or any specific challenges..." })
              ] }),
              error && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm", children: error }),
              /* @__PURE__ */ jsxs("button", { type: "submit", disabled: isSubmitting, className: "w-full bg-[#111111] text-white font-semibold rounded-xl px-6 py-4 hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed", children: [
                isSubmitting ? "Sending..." : ctaText || "Start for free",
                !isSubmitting && /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
              ] })
            ] }) })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
const blogPosts = /* @__PURE__ */ JSON.parse('[{"id":9802,"slug":"choose-right-latam-country-nearshore-engineering-pod","date":"2025-12-08","title":"How to choose the right LatAm country for your first nearshore engineering pod","excerpt":"<p>If you are serious about LatAm nearshore engineering, “LatAm” cannot be a single bucket. Brazil, Mexico, Colombia and Argentina play very different roles in your strategy. Choosing the right country is not about who is “best” in general. It is about who is best for the way your product team works, the systems you run [&hellip;]</p>\\n","content":"\\n<p>If you are serious about LatAm nearshore engineering, “LatAm” cannot be a single bucket. Brazil, Mexico, Colombia and Argentina play very different roles in your strategy. Choosing the right country is not about who is “best” in general. It is about who is best for the way your product team works, the systems you run and the risks you are willing to take.</p>\\n\\n\\n\\n<p><strong>What actually changes from one country to another</strong></p>\\n\\n\\n\\n<p>When you compare LatAm countries, you are comparing more than salary tables. The differences that matter for founders and CTOs are:</p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Size and depth of the senior talent pool<br></li>\\n\\n\\n\\n<li>Typical industry experience such as fintech, ecommerce, B2B SaaS and data heavy products<br></li>\\n\\n\\n\\n<li>English proficiency and comfort with U.S. style communication<br></li>\\n\\n\\n\\n<li>Time zone overlap with your core team<br></li>\\n\\n\\n\\n<li>Total cost at senior levels, not just averages across all roles<br></li>\\n\\n\\n\\n<li>Legal and tax environment once you scale beyond a handful of people<br></li>\\n</ul>\\n\\n\\n\\n<p>Below is a practical way to think about each of the main markets and what they are really good for in 2025 and 2026.</p>\\n\\n\\n\\n<p><strong>Brazil: default choice when you care about seniority and complex systems</strong></p>\\n\\n\\n\\n<p>Brazil is often the best first bet when your product depends on complex back ends, payments, data and reliability.</p>\\n\\n\\n\\n<p><em>Where Brazil usually wins</em></p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li><strong>Depth of senior talent.</strong> You find many engineers who have already worked at scale in fintech, digital banks, marketplaces, SaaS and streaming. That is critical if your codebase is not a simple greenfield app. If you are mapping hubs by city and stack, use this guide on<a href=\\"https://kaptasglobal.io/blog/where-to-find-top-tech-talent-in-brazil/\\"> where to find top tech talent in Brazil</a>.<br></li>\\n\\n\\n\\n<li><strong>Experience with modern stacks.</strong> Senior profiles commonly bring experience in microservices, event driven architectures, cloud native systems, data engineering and SRE style practices.<br></li>\\n\\n\\n\\n<li><strong>Time zone overlap.</strong> Overlap with U.S. Eastern and Central time is good enough to run live standups, design reviews and incident calls without forcing extreme hours on either side. See why the<a href=\\"https://kaptasglobal.io/blog/why-brazils-time-zone-is-an-ideal-fit-for-international-teams/?utm_source=chatgpt.com\\"> Brazil time zone is an ideal fit</a>.<br></li>\\n\\n\\n\\n<li><strong>Cultural fit with U.S. product teams.</strong> Many senior engineers are used to working with U.S. companies, writing documentation in English and participating in product conversations instead of only receiving tasks.<br></li>\\n</ul>\\n\\n\\n\\n<p><em>Where Brazil is less ideal</em></p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>If you need very large numbers of entry level engineers very quickly, other markets can sometimes be cheaper at junior levels.<br></li>\\n\\n\\n\\n<li>If you require near native spoken English across the entire pod, Mexico may give you a higher percentage of that profile, especially for client facing roles.<br></li>\\n</ul>\\n\\n\\n\\n<p><em>When Brazil tends to be the right choice</em><em><br></em> When you want a senior heavy pod that can own important services end to end, especially in payments, core back end, data pipelines and reliability. For planning ranges and budgeting, see the analysis of the<a href=\\"https://kaptasglobal.io/blog/cost-hire-software-engineer-brazil/\\"> cost to hire a software engineer in Brazil</a> and the pillar on<a href=\\"https://kaptasglobal.io/blog/hiring-software-engineers-brazil-latam-complete-guide/\\"> hiring software engineers in Brazil and Latam</a>.</p>\\n\\n\\n\\n<p><strong>Mexico: best fit when live communication matters most</strong></p>\\n\\n\\n\\n<p>Mexico is particularly strong when your work model is built around frequent live calls, a lot of English communication and tight collaboration with U.S. based teams.</p>\\n\\n\\n\\n<p><em>Where Mexico usually wins</em></p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li><strong>Spoken English.</strong> High probability of engineers comfortable leading calls, talking to stakeholders in the United States and handling customer facing situations.<br></li>\\n\\n\\n\\n<li><strong>Time zone comfort.</strong> Overlap with U.S. Central and Pacific time is almost perfect, which helps if you run many live rituals, discovery sessions and ad hoc calls.<br></li>\\n\\n\\n\\n<li><strong>Product and front end roles.</strong> Mexico has a strong base of full stack and front end engineers who are comfortable close to the product, design and user experience layer. If your core platform is anchored elsewhere, see how to plan handoffs in integrating Brazilian developers into your U.S. tech team.<br></li>\\n</ul>\\n\\n\\n\\n<p><em>Where Mexico is less ideal</em></p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Senior cost levels for some profiles can be closer to U.S. numbers than in Brazil or Colombia, especially in the most competitive hubs.<br></li>\\n\\n\\n\\n<li>If your top priority is cost compression combined with very deep back end and data experience, Brazil may be a better anchor.<br></li>\\n</ul>\\n\\n\\n\\n<p><em>When Mexico tends to be the right choice</em><em><br></em> When you want engineers who spend a significant part of the week in calls with product managers, sales teams and customers, and when you expect the pod to carry a lot of product context.</p>\\n\\n\\n\\n<p><strong>Colombia: balanced option for data, analytics and support coverage</strong></p>\\n\\n\\n\\n<p>Colombia has been growing fast as a nearshore destination and often works well when you want a flexible mix of skills without paying top of market rates across the board.</p>\\n\\n\\n\\n<p><em>Where Colombia usually wins</em></p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li><strong>Balanced cost and quality.</strong> Senior engineers are often more affordable than in Mexico while keeping strong technical capability.<br></li>\\n\\n\\n\\n<li><strong>Data and analytics focus.</strong> Strong representation of profiles comfortable with data engineering, BI, reporting and analytics heavy work.<br></li>\\n\\n\\n\\n<li><strong>Extended support hours.</strong> Colombian teams can stretch support and incident coverage without moving too far away from core U.S. time zones. For ongoing operations and leadership practices, see<a href=\\"https://kaptasglobal.io/blog/managing-remote-brazilian-teams/\\"> managing remote Brazilian teams</a>, which also applies to broader LatAm setups.<br></li>\\n</ul>\\n\\n\\n\\n<p><em>Where Colombia is less ideal</em></p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>The senior pool is smaller than in Brazil or Mexico, so if you need niche experience at scale you may have to search longer.<br></li>\\n\\n\\n\\n<li>For deeply regulated fintech back ends or very high scale transactional systems, Brazil still tends to have more veterans.<br></li>\\n</ul>\\n\\n\\n\\n<p><em>When Colombia tends to be the right choice</em><em><br></em> When you want a versatile pod to own parts of data, reporting, internal tools and shared services, often combined with another country that anchors your core platform work.</p>\\n\\n\\n\\n<p><strong>Argentina: strong depth for hard problems, but mind the volatility</strong></p>\\n\\n\\n\\n<p>Argentina has a long tradition of strong engineering, especially in algorithmic thinking, research heavy work and complex problem solving.</p>\\n\\n\\n\\n<p><em>Where Argentina usually wins</em></p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li><strong>Strong technical foundations.</strong> Many engineers bring solid backgrounds in algorithms, mathematics and computer science theory.<br></li>\\n\\n\\n\\n<li><strong>Fit for complex or R and D heavy work.</strong> Argentina can be a good choice for optimisation, experimentation and parts of your product that require deep thinking rather than only incremental delivery. For comparisons across LatAm choices, review Brazilian vs other nearshore development options.<br></li>\\n</ul>\\n\\n\\n\\n<p><em>Where Argentina is less ideal</em></p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Macroeconomic volatility can impact stability, expectations and contract structures more than in some neighboring countries.<br></li>\\n\\n\\n\\n<li>If you want to build a very large team quickly, it may be harder to maintain consistency compared with Brazil or Mexico.<br></li>\\n</ul>\\n\\n\\n\\n<p><em>When Argentina tends to be the right choice</em><em><br></em> When you are deliberately building a small, very senior pod for hard problems and you are comfortable managing a bit more volatility in exchange for depth.</p>\\n\\n\\n\\n<p><strong>How to think about the decision like a founder, not like a recruiter</strong></p>\\n\\n\\n\\n<p>Instead of asking “Which country is cheaper” or “Which country has better talent”, it is more useful to tie the choice to your product and operating model. Use these patterns as a starting point and adapt to your roadmap.</p>\\n\\n\\n\\n<p><em>If your product is a complex platform</em><em><br></em> Brazil should usually be the starting point for core back end, payments, data and reliability. Mexico can complement with front end and product heavy roles, especially where engineers must stay very close to stakeholders in the United States. For a structured plan, start with<a href=\\"https://kaptasglobal.io/blog/hiring-software-engineers-brazil-latam-complete-guide/\\"> hiring software engineers in Brazil and Latam</a>.</p>\\n\\n\\n\\n<p><em>If your product is very customer facing and sales driven</em><em><br></em> Mexico becomes more interesting for engineers who join sales calls, discovery sessions and customer onboarding. Brazil and Colombia can support integrations, data sync, automation and internal tools behind the scenes.</p>\\n\\n\\n\\n<p><em>If your product is AI or data intensive</em><em><br></em> Brazil and Colombia together give a strong combination of data engineering, pipelines, MLOps and analytics. Argentina can be a surgical bet for a small number of senior profiles working on research or algorithm heavy components.</p>\\n\\n\\n\\n<p><em>If your priority is risk management</em><em><br></em> Avoid putting everything in a single country when you start to scale. A core pod in Brazil plus a smaller presence in Mexico or Colombia reduces exposure to regulatory or macro changes. Focus on markets where you can find replacement talent quickly if someone leaves. When building pods in parallel, consider targeted<a href=\\"https://kaptasglobal.io/mapping-service/\\"> talent mapping</a> to identify senior pockets by city, stack and availability.</p>\\n\\n\\n\\n<p><strong>Bottom line</strong></p>\\n\\n\\n\\n<p>Choosing the right LatAm country for your first nearshore engineering pod is a design decision for your engineering system, not a sourcing trick. For many U.S. startups, Brazil is the natural anchor because it combines depth of senior talent, strong back end and data experience and solid time zone overlap. Mexico, Colombia and Argentina then become strategic additions, each playing a specific role in communication, data, analytics or complex problem solving. When you match country strengths to your actual roadmap and operating model, LatAm stops being a generic label and becomes a precise tool for shaping how and where your product evolves.</p>\\n","featured_image":"https://kaptasglobal.io/wp-content/uploads/2025/12/latam_nearshore_country_selection_engineering_pod-768x403.webp","categories":["Hiring in Brazil"]},{"id":9748,"slug":"nearshore-brazil-ai-delivery-roles","date":"2025-11-17","title":"Nearshore for AI delivery in 2026: what U.S. startups actually move first and why Brazil fits","excerpt":"<p>U.S. startups need to ship AI features faster while protecting runway. Through 2025, budgets moved toward AI software and infrastructure and that changed hiring dynamics. Global IT spending is projected at 5.43 trillion dollars in 2025, up 7.9% year over year, which lifted demand across engineering, data and cloud roles. Roles that work closely with [&hellip;]</p>\\n","content":"\\n<p>U.S. startups need to ship AI features faster while protecting runway. Through 2025, budgets moved toward AI software and infrastructure and that changed hiring dynamics. Global IT spending is projected at 5.43 trillion dollars in 2025, up 7.9% year over year, which lifted demand across engineering, data and cloud roles. Roles that work closely with AI did not shrink. Job availability for those roles grew 38%. Professionals with AI skills earned an average 56% wage premium in 2024 compared to 25% a year earlier. This is where <strong>nearshore software development in Brazil</strong> becomes a practical lever.</p>\\n\\n\\n\\n<p><strong>Key facts</strong><strong><br></strong> Global IT spending is projected at <strong>5.43 trillion dollars</strong> in 2025, up <strong>7.9%</strong> year over year. Roles exposed to AI saw <strong>38%</strong> higher job availability and a <strong>56%</strong> wage premium in 2024. Nearshore in Brazil keeps collaboration in U.S. hours and reduces cycle time.</p>\\n\\n\\n\\n<p><strong>Why the Brazil model works for AI delivery</strong><strong><br></strong> Time zone overlap keeps collaboration inside the U.S. workday, leveraging the <strong>Brazil time zone overlap</strong>. The result is shorter feedback loops for model and product work. If you are planning team schedules, see why the<a href=\\"https://kaptasglobal.io/blog/why-brazils-time-zone-is-an-ideal-fit-for-international-teams/?utm_source=chatgpt.com\\"> Brazil time zone is an ideal fit</a>.</p>\\n\\n\\n\\n<p>Key reasons teams choose nearshore in Brazil:</p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Real time ceremonies with Eastern and Central hours<br></li>\\n\\n\\n\\n<li>Senior depth across back end, platform, data engineering, MLOps and QA automation<br></li>\\n\\n\\n\\n<li>Modern delivery habits such as versioned infrastructure and continuous testing<br></li>\\n\\n\\n\\n<li>Cost structure that supports scale while keeping seniority<br></li>\\n</ul>\\n\\n\\n\\n<p>If you need a quick orientation by city and stack, use this guide on<a href=\\"https://kaptasglobal.io/blog/where-to-find-top-tech-talent-in-brazil/\\"> where to find top tech talent in Brazil</a>. For a broader view of process and channels, bookmark the pillar on<a href=\\"https://kaptasglobal.io/blog/hiring-software-engineers-brazil-latam-complete-guide/\\"> hiring software engineers in Brazil and Latam</a>.</p>\\n\\n\\n\\n<p><strong>What U.S. startups move first</strong><strong><br></strong> Start with roles that shorten critical feedback loops and move product metrics in <strong>LatAm nearshore engineering</strong> contexts.</p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li><strong>Back end and platform</strong><strong><br></strong> Service decomposition, performance work and reliability. Same day reviews protect critical paths.<br></li>\\n\\n\\n\\n<li><strong>Data engineering and MLOps</strong><strong><br></strong> Pipelines, orchestration, feature stores and deployment workflows for training and inference. Teams in Brazil can support model iteration and telemetry improvements within U.S. hours.<br></li>\\n\\n\\n\\n<li><strong>QA automation</strong><strong><br></strong> Regression expansion and contract testing inside CI to raise release confidence without slowing the roadmap.<br></li>\\n\\n\\n\\n<li><strong>Cloud and FinOps</strong><strong><br></strong> Infrastructure as code, observability and spend visibility for AI heavy workloads so planned and actual costs stay close.<br><br></li>\\n</ul>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>How nearshore software development in Brazil cut cycle time</strong></h2>\\n\\n\\n\\n<p>Shared working hours reduce wait states between design, review and release. For AI delivery, that means faster learning loops and fewer handoff delays. Teams work in the same day, which keeps standups, design reviews and incident response inside normal U.S. hours.</p>\\n\\n\\n\\n<p><strong>Cost expectations without losing seniority</strong><strong><br></strong> Benchmarks vary by method, but two references help set expectations:</p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Average around $60,000 per year for software engineers in 2025<br></li>\\n</ul>\\n\\n\\n\\n<p>Realized costs depend on city, seniority and contract structure. Many teams still report total <strong>savings near 40% to 50%</strong> versus equivalent roles in major U.S. metros. Figures are based on recognized market surveys and 2025 labor references and are intended as directional anchors for budgeting. For planning bands and negotiation tips, use the analysis of the<a href=\\"https://kaptasglobal.io/blog/cost-hire-software-engineer-brazil/\\"> cost to hire a software engineer in Brazil</a> and the comparison of the<a href=\\"https://kaptasglobal.io/blog/best-hiring-model-remote-team-brazil/\\"> best hiring model for a remote team in Brazil</a>.</p>\\n\\n\\n\\n<p><strong>When you need precision sourcing</strong><strong><br></strong> If you want to identify senior pockets by city, stack and availability before you open roles, consider targeted<a href=\\"https://kaptasglobal.io/mapping-service/\\"> talent mapping</a>. This reduces time to shortlist and aligns the search to your AI delivery milestones. For ongoing operations and leadership practices, see<a href=\\"https://kaptasglobal.io/blog/managing-remote-brazilian-teams/\\"> managing remote Brazilian teams</a> and a comparison of Brazilian vs other nearshore development options.The bottom line for 2026 is clear. Nearshore in Brazil helps U.S. startups move the right AI delivery roles first. It keeps collaboration in the same day. It protects runway while the product roadmap accelerates. It also helps you <strong>hire senior developers in Brazil</strong> without stretching hiring cycles.</p>\\n","featured_image":"https://kaptasglobal.io/wp-content/uploads/2025/11/nearshore_ai_delivery_brazil_us_collaboration-768x403.webp","categories":["Hiring in Brazil"]},{"id":9712,"slug":"salaries-in-brazil-for-us-remote-teams-2026","date":"2025-10-31","title":"Salaries in Brazil for U.S. remote teams in 2026","excerpt":"<p>Hiring in Brazil gives U.S. companies senior talent, fluent English, and cost efficiency above 50% while keeping delivery speed. The tables below show typical annual USD salary ranges offered by U.S. employers to professionals based in Brazil. These are market expectations for remote roles, not BRL conversions. Use our salary calculator for Brazil to explore [&hellip;]</p>\\n","content":"\\n<p>Hiring in Brazil gives U.S. companies senior talent, fluent English, and cost efficiency above 50% while keeping delivery speed. The tables below show typical annual USD salary ranges offered by U.S. employers to professionals based in Brazil. These are market expectations for remote roles, not BRL conversions.</p>\\n\\n\\n\\n<p>Use our<a href=\\"https://kaptasglobal.io/calculator/\\"> salary calculator for Brazil</a> to explore role specific scenarios and benefit mixes.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>How to read this guide</strong></h2>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Figures reflect salaries commonly paid by U.S. companies to Brazil based remote professionals.<br></li>\\n\\n\\n\\n<li>Actual offers vary by scope, ownership, company stage, and performance expectations.<br></li>\\n\\n\\n\\n<li>For deeper context on Brazil hiring, see the pillar guide on<a href=\\"https://kaptasglobal.io/blog/hiring-software-engineers-brazil-latam-complete-guide/\\"> hiring software engineers in Brazil and LatAm</a> and the overview on<a href=\\"https://kaptasglobal.io/blog/where-to-find-top-tech-talent-in-brazil/\\"> where to find top tech talent in Brazil</a>.<br></li>\\n</ul>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Technology salaries paid by U.S. companies to Brazil based talent</strong></h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Individual contributors</strong></h3>\\n\\n\\n\\n<figure class=\\"wp-block-table\\"><table class=\\"has-fixed-layout\\"><tbody><tr><td><strong>Role</strong></td><td><strong>Annual USD</strong></td></tr><tr><td>Software engineer junior</td><td>30k to 40k</td></tr><tr><td>Software engineer mid</td><td>40k to 50k</td></tr><tr><td>Software engineer senior</td><td>45k to 70k</td></tr><tr><td>Mobile engineer</td><td>40k to 70k</td></tr><tr><td>Data scientist or ML engineer</td><td>50k to 80k</td></tr></tbody></table></figure>\\n\\n\\n\\n<p>Hiring for a full engineering squad from Brazil can further optimize cost and time to ship. Learn about team based models in<a href=\\"https://kaptasglobal.io/contractor-services/\\"> Contractor Services</a>.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Sales salaries paid by U.S. companies to Brazil based talent</strong></h2>\\n\\n\\n\\n<p>Sales roles usually include base plus variable. Below is typical on target earnings along with base.</p>\\n\\n\\n\\n<figure class=\\"wp-block-table\\"><table class=\\"has-fixed-layout\\"><tbody><tr><td><strong>Role</strong></td><td><strong>Base USD</strong></td><td><strong>OTE USD</strong></td></tr><tr><td>SDR or BDR</td><td>24k to 36k</td><td>30k to 60k</td></tr><tr><td>Account executive mid market</td><td>36k to 60k</td><td>60k to 90k</td></tr><tr><td>Sales manager</td><td>50k to 80k</td><td>85k to 110k</td></tr></tbody></table></figure>\\n\\n\\n\\n<p>For permanent hires in Brazil, review our<a href=\\"https://kaptasglobal.io/direct-hire-services/\\"> Direct Hire Services</a> or<a href=\\"https://kaptasglobal.io/contractor-services/\\"> Contractor Services</a>.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Marketing salaries paid by U.S. companies to Brazil based talent</strong></h2>\\n\\n\\n\\n<figure class=\\"wp-block-table\\"><table class=\\"has-fixed-layout\\"><tbody><tr><td><strong>Role</strong></td><td><strong>Annual USD</strong></td></tr><tr><td>Content or SEO specialist</td><td>28k to 48k</td></tr><tr><td>Performance or growth marketer</td><td>35k to 60k</td></tr><tr><td>Marketing manager</td><td>40k to 70k</td></tr></tbody></table></figure>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Finance salaries paid by U.S. companies to Brazil based talent</strong></h2>\\n\\n\\n\\n<figure class=\\"wp-block-table\\"><table class=\\"has-fixed-layout\\"><tbody><tr><td><strong>Role</strong></td><td><strong>Annual USD</strong></td></tr><tr><td>Accounting analyst or senior</td><td>30k to 50k</td></tr><tr><td>FP&amp;A analyst</td><td>40k to 75k</td></tr><tr><td>Controller manager level</td><td>70k to 110k</td></tr></tbody></table></figure>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Why Brazil works for U.S. hiring</strong></h2>\\n\\n\\n\\n<p><strong>Time zone alignment with the U.S.</strong><strong><br></strong> Teams in Brazil share core hours with Eastern and Central time. This supports real time standups, incident response, and customer calls without late nights.</p>\\n\\n\\n\\n<p><strong>English fluency for product and client work</strong><strong><br></strong> Senior candidates in major hubs often have advanced English and are comfortable with discovery calls, documentation, demos, and async updates.</p>\\n\\n\\n\\n<p><strong>Cultural and tooling alignment</strong><strong><br></strong> Agile rituals, modern cloud stacks, and familiarity with U.S. product cycles reduce handoff friction and speed up feedback loops.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>How to position your offer inside each range</strong></h2>\\n\\n\\n\\n<p><strong>Scope and communication</strong><strong><br></strong> Roles with frequent client interaction, discovery, demos, or cross team leadership should trend toward the top of the band.</p>\\n\\n\\n\\n<p><strong>Ownership and impact</strong><strong><br></strong> On call participation, production ownership, roadmap leadership, revenue impact, or quota carry justify higher offers.</p>\\n\\n\\n\\n<p><strong>Skills supply and demand</strong><strong><br></strong> AI and ML, data engineering, mobile, and cloud reliability remain scarce. Candidates with these skills often land in the upper quartile.</p>\\n\\n\\n\\n<p><strong>Engagement model and benefits</strong><strong><br></strong> Contractor packages in USD are common. Benefits, allowances, and equipment stipends can shift how much sits in base versus total compensation. Model scenarios with the<a href=\\"https://kaptasglobal.io/calculator/\\"> salary calculator</a>.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Next steps</strong></h2>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Explore budgets with the<a href=\\"https://kaptasglobal.io/calculator/\\"> salary calculator for Brazil</a>.<br></li>\\n\\n\\n\\n<li>Review the<a href=\\"https://kaptasglobal.io/blog/hiring-software-engineers-brazil-latam-complete-guide/\\"> complete guide to hiring in Brazil and LatAm</a>.<br></li>\\n</ul>\\n\\n\\n\\n<p>Compare models in<a href=\\"https://kaptasglobal.io/direct-hire-services/\\"> Direct Hire Services</a> and<a href=\\"https://kaptasglobal.io/contractor-services/\\"> Contractor Services</a>.</p>\\n","featured_image":"https://kaptasglobal.io/wp-content/uploads/2025/10/brazil_remote_team_salaries_guide_2026-768x403.webp","categories":["Hiring in Brazil"]},{"id":9703,"slug":"brazil-hiring-costs-2025-total-cost-guide","date":"2025-10-16","title":"Brazil hiring costs in 2025 &#8211; The complete total cost guide for US teams","excerpt":"<p>A complete total cost guide&nbsp; Hiring in Brazil can deliver senior quality at a lower total cost of ownership when you match structure to reality. This guide explains how CLT/W2 employment works, how PJ/1099 contractors work, what employers actually pay under each model, and how to build a reliable budget for hiring in Brazil. The [&hellip;]</p>\\n","content":"\\n<h2 class=\\"wp-block-heading\\"><strong>A complete total cost guide&nbsp;</strong></h2>\\n\\n\\n\\n<p>Hiring in Brazil can deliver senior quality at a lower total cost of ownership when you match structure to reality. This guide explains how CLT/W2 employment works, how PJ/1099 contractors work, what employers actually pay under each model, and how to build a reliable budget for hiring in Brazil. The tone is consultative and practical so both newcomers and advanced leaders can act with confidence. When in doubt, confirm details with local payroll and legal support.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>What total cost means when hiring in Brazil</strong></h2>\\n\\n\\n\\n<p>Total cost of ownership is not only the headline salary or rate. It includes statutory items, benefits, taxes, operations, equipment and security, and the management effort required to run a predictable relationship. Your cost mix depends first on the engagement model. CLT/W2 concentrates cost in mandatory employment items. PJ/1099 concentrates cost in a service rate, supported by compliant contracts and reliable payments.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>CLT W2 employment in Brazil what you actually pay</strong></h2>\\n\\n\\n\\n<p>CLT is Brazil’s employment regime. It resembles the United States W2 experience but with local specifics that you must budget for.</p>\\n\\n\\n\\n<p><strong>Base salary and payroll cadence</strong><strong><br></strong> Salaries are negotiated as a monthly gross amount paid in local currency. Payroll typically runs monthly with a cut off date defined by your provider or Employer of Record.</p>\\n\\n\\n\\n<p><strong>Paid time off and public holidays</strong><strong><br></strong> Brazil guarantees <strong>30 calendar days</strong> of paid vacation per year after 12 months of work, with the option for the employee to sell up to 10 days back to the employer. Public holidays exist at national, state, and municipal levels, so the exact count varies by city.</p>\\n\\n\\n\\n<p><strong>Thirteenth salary</strong><strong><br></strong> A mandatory extra monthly salary typically split across November and December. In budget terms, this is roughly <strong>8.33%</strong> of the annual base added to your cost.</p>\\n\\n\\n\\n<p><strong>Vacation bonus</strong><strong><br></strong> When the employee takes vacation, the employer pays a statutory bonus equal to <strong>33.33%</strong> of one monthly salary. Finance should accrue this monthly to avoid spikes.</p>\\n\\n\\n\\n<p><strong>FGTS<br></strong> A employer deposit equal to <strong>8%</strong> of monthly gross salary into the employee’s severance fund is mandatory. If you terminate without cause, there is an additional <strong>40%</strong> penalty on the FGTS balance. This penalty is not a monthly cost but should be understood for scenario planning.</p>\\n\\n\\n\\n<p><strong>Social security and payroll taxes</strong><strong><br></strong> Employer social security contributions apply on payroll and commonly sit around <strong>20%</strong> for companies under the general regime, plus risk and third party levies that can add a few percentage points depending on industry and classification. Your payroll provider will calculate exact figures. Plan a working range in the budget and refine with actual quotes.</p>\\n\\n\\n\\n<p><strong>Health plan and benefits policy</strong><strong><br></strong> Mid senior and senior CLT hires usually expect private health coverage. Employer cost varies by plan, but a realistic planning range is <strong>100 to 200 USD per month</strong> per employee. It is common to include meal or food allowance and commuter support. A practical planning range for meal allowance is <strong>150 to 250 USD per month</strong> per employee when offered as a benefit.</p>\\n\\n\\n\\n<p><strong>Payroll operations</strong><strong><br></strong> If you use an Employer of Record, you will pay an administration fee in addition to the statutory items above. If you operate your own entity, budget external payroll services and internal accounting time. In both cases, the statutory items remain your economic responsibility.</p>\\n\\n\\n\\n<p>For fundamentals of these structures, see our explainer on<a href=\\"https://kaptasglobal.io/blog/hiring-models-brazil-pj-vs-clt/?utm_source=chatgpt.com\\"> hiring models in Brazil</a> and the decision guide on the<a href=\\"https://kaptasglobal.io/blog/best-hiring-model-remote-team-brazil/?utm_source=chatgpt.com\\"> best hiring model for a remote team in Brazil</a>.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>PJ/1099 contractor in Brazil what you actually pay</strong></h2>\\n\\n\\n\\n<p>PJ means the professional invoices through a personal legal entity for services. When the day to day reality reflects a service relationship focused on deliverables and outcomes, this maps to a United States independent contractor arrangement.</p>\\n\\n\\n\\n<p><strong>Service rate</strong><strong><br></strong> You agree a monthly or daily rate based on seniority, scope, and impact. Rates can be denominated in USD for planning and settled in Brazilian reais through a local partner.</p>\\n\\n\\n\\n<p><strong>Employer taxes</strong><strong><br></strong> There are no employer side social charges like FGTS or employer social security on your side. The professional handles their own taxation. Your cost is the agreed service rate.</p>\\n\\n\\n\\n<p><strong>Contracts, invoicing, and payouts</strong><strong><br></strong> Use clear scopes, confidentiality and IP assignment, data protection, and service level expectations. A reliable local partner runs invoicing and ensures on time payouts in local currency, which supports retention and focus.</p>\\n\\n\\n\\n<p><strong>PTO as a retention practice</strong><strong><br></strong> There is no statutory paid vacation for PJ/1099, but successful teams still plan a PTO policy for contractors to sustain performance and retention. A common practice is to offer <strong>10 to 15 business days</strong> of paid time off per year and to align national holidays with team norms. Document this in the agreement to avoid ambiguity.</p>\\n\\n\\n\\n<p>For an end to end view of process quality and budgeting across models, keep the pillar on<a href=\\"https://kaptasglobal.io/blog/hiring-software-engineers-brazil-latam-complete-guide/\\"> hiring software engineers in Brazil and Latam</a> close by.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Currency planning and rate or salary reviews</strong></h2>\\n\\n\\n\\n<p>Most United States teams benchmark compensation in USD and settle in BRL to reduce friction for professionals. Agree a review cycle that accounts for performance and market movement. Common review checkpoints are every 6 or 12 months. For CLT/W2, align to an annual cycle and pro rate thirteenth salary and vacation bonus accruals each month. For PJ/1099, keep reviews tied to scope and impact to preserve the link between cost and outcomes. Paying in USD is often seen as a differentiator by senior candidates, especially when combined with predictable payout dates and transparent review policies.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Two worked examples you can adapt</strong></h2>\\n\\n\\n\\n<p>Replace the assumptions with your numbers and confirm with your payroll provider or Employer of Record before committing to budgets.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Example A: Senior Software Engineer in Brazil as PJ/1099 contractor</strong></h3>\\n\\n\\n\\n<p><strong>Assumptions</strong><strong><br></strong> Annual service rate between <strong>40,000 and 60,000 USD</strong><strong><br></strong> No employer social charges, no FGTS, no thirteenth salary, no vacation bonus<br>Optional contractor PTO policy of <strong>10 to 15 business days</strong> for retention</p>\\n\\n\\n\\n<p><strong>Estimated annual employer cost</strong><strong><br></strong> <strong>40,000 to 60,000 USD</strong><strong><br></strong> This equals the agreed service rate. If you choose to provide equipment or a stipend, budget separately. There are no employer statutory taxes on top under PJ/1099.</p>\\n\\n\\n\\n<p><strong>Fit</strong><strong><br></strong> Speed, flexibility, and cost tied directly to delivery. Suitable for nearshore squads and platform work.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Example B: Senior Software Engineer as CLT/W2 through an Employer of Record</strong></h3>\\n\\n\\n\\n<p><strong>Assumptions<br></strong>Annual base salary <strong>50,000 USD<br></strong>Thirteenth salary <strong>8.33%</strong> of annual base<br>Vacation bonus <strong>33.33%</strong> of one monthly salary<br>Employer social security working assumption <strong>20%</strong> applied to salary plus thirteenth and vacation bonus<br>FGTS <strong>8%</strong> applied to salary plus thirteenth and vacation bonus<br>Health plan <strong>150 USD per month<br></strong>Meal allowance <strong>200 USD per month<br></strong>EOR administration fee varies by vendor and is not included below</p>\\n\\n\\n\\n<p><strong>Step by step estimate</strong></p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Base salary per year<br><strong>50,000 USD</strong><strong><br></strong></li>\\n\\n\\n\\n<li>Thirteenth salary at <strong>8.33%</strong><strong><br></strong> <strong>4,167 USD</strong><strong><br></strong></li>\\n\\n\\n\\n<li>Vacation bonus at <strong>33.33%</strong> of one monthly salary<br><strong>1,389 USD</strong><strong><br></strong></li>\\n\\n\\n\\n<li>Employer social security at <strong>20%</strong> on salary plus thirteenth plus vacation bonus<br><strong>11,111 USD</strong><strong><br></strong></li>\\n\\n\\n\\n<li>FGTS at <strong>8%</strong> on salary plus thirteenth plus vacation bonus<br><strong>4,444 USD</strong><strong><br></strong></li>\\n\\n\\n\\n<li>Health plan per year<br><strong>1,800 USD</strong><strong><br></strong></li>\\n\\n\\n\\n<li>Meal allowance per year<br><strong>2,400 USD</strong><strong><br></strong></li>\\n</ul>\\n\\n\\n\\n<p><strong>Estimated annual employer cost before EOR admin fee</strong><strong><br></strong> <strong>75,311 USD</strong></p>\\n\\n\\n\\n<p>Notes<br>Social security add ons can vary by industry and classification. Your provider will calculate exact figures. The FGTS termination penalty of <strong>40%</strong> applies only in terminations without cause and is not a monthly cost. EOR administration fees are additional.</p>\\n\\n\\n\\n<p><strong>Fit<br></strong>Traditional employment experience with benefits and a long horizon. Suitable for engineering managers, principal roles, and key system owners.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Cost comparison in one view</strong></h2>\\n\\n\\n\\n<p>PJ/1099 at <strong>40,000 to 60,000 USD</strong> per year usually delivers a lower total cost of ownership and the fastest time to start.<br>CLT/W2 at a <strong>50,000 USD</strong> base in this example results in roughly <strong>75,000 USD</strong> in annual employer cost before any EOR administration fee, due to statutory items that are part of the Brazilian employment model.</p>\\n\\n\\n\\n<p>The decision is not only cost. It is also about the working reality you need. If you require statutory benefits and an employment package, CLT/W2 is appropriate. If you need speed, flexibility, and a service relationship aligned to outcomes, PJ/1099 is usually the best fit.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>A short checklist before hiring in Brazil</strong></h2>\\n\\n\\n\\n<p>Do you need statutory benefits and a traditional employment experience?<br>If yes, CLT/W2 is the likely path. If no, PJ/1099 is typically the best model.</p>\\n\\n\\n\\n<p>Do you have a clear service scope and collaboration windows?<br>If yes, PJ/1099 aligns well. If not, CLT/W2 gives more structure through standard policies.</p>\\n\\n\\n\\n<p>Do you require long term retention?<br>If yes, both models work well when expectations, compensation progression, and collaboration norms are well defined.</p>\\n\\n\\n\\n<p>Do you need to start quickly with senior capacity at a lean cost<br>If yes, PJ/1099 with a reliable local partner is usually faster.</p>\\n\\n\\n\\n<p>Do you have a payroll provider or Employer of Record ready?<br>If yes, you can proceed with CLT/W2. If not, start with PJ/1099 while you evaluate providers.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Helpful references to go deeper</strong></h2>\\n\\n\\n\\n<p>If you want to understand each model in detail, start with our overview of<a href=\\"https://kaptasglobal.io/blog/hiring-models-brazil-pj-vs-clt/?utm_source=chatgpt.com\\"> hiring models in Brazil</a>.<br>If you are deciding which model fits your scenario, review the<a href=\\"https://kaptasglobal.io/blog/best-hiring-model-remote-team-brazil/?utm_source=chatgpt.com\\"> best hiring model for a remote team in Brazil</a>.<br>If you are budgeting a squad, see the analysis on the<a href=\\"https://kaptasglobal.io/blog/cost-hire-software-engineer-brazil/\\"> cost to hire a software engineer in Brazil</a>.<br>For an end to end process view from sourcing to offer, keep the pillar on<a href=\\"https://kaptasglobal.io/blog/hiring-software-engineers-brazil-latam-complete-guide/\\"> hiring software engineers in Brazil and Latam</a> close by.</p>\\n\\n\\n\\n<p></p>\\n","featured_image":"https://kaptasglobal.io/wp-content/uploads/2025/10/brazil_hiring-768x403.webp","categories":["Hiring in Brazil"]},{"id":9677,"slug":"h1b-explained-new-100000-fee-guide","date":"2025-09-25","title":"H 1B explained, what just changed, and how it could reshape hiring in Brazil, Latam, and the United States","excerpt":"<p>The headline in plain language The White House announced a new one time fee of $100,000 tied to new H 1B cases. Early reporting and clarifications indicate the fee is targeted at new petitions filed from outside the United States, is one time rather than annual, and does not apply to existing H 1B holders [&hellip;]</p>\\n","content":"\\n<p><strong>The headline in plain language</strong></p>\\n\\n\\n\\n<p>The White House announced a new one time fee of <strong>$100,000</strong> tied to <strong>new H 1B</strong> cases. Early reporting and clarifications indicate the fee is targeted at <strong>new petitions filed from outside the United States</strong>, is <strong>one time</strong> rather than annual, and <strong>does not apply</strong> to existing H 1B holders or routine extensions and transfers. Several officials and observers also expect <strong>legal challenges</strong> that could affect timing and enforcement.<a href=\\"https://nripulse.com/the-100000-h-1b-visa-fee-applies-only-to-new-petitions-karolina-leavitt-clarifies/?utm_source=chatgpt.com\\">&nbsp;</a></p>\\n\\n\\n\\n<p>This is a substantial change. For employers that rely on global talent, the additional <strong>$100,000</strong> per new entry can alter budgets and staffing plans. Markets and hiring leaders are already reassessing relocation dependent roles while waiting for guidance from federal agencies and courts.<a href=\\"https://www.livemint.com/news/us-news/h1b-visa-fee-news-live-updates-nonimmigrant-workers-travel-restrictions-trump-news-all-about-100k-rule-us-23-september-11758605535218.html?utm_source=chatgpt.com\\">&nbsp;</a></p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>What the H 1B program is and how it works</strong></h2>\\n\\n\\n\\n<p>The H 1B is the primary United States work visa for “specialty occupations” such as software engineering and data science. It operates under an <strong>annual cap of 85,000</strong> new slots, divided into <strong>65,000</strong> regular and <strong>20,000</strong> for advanced degree holders from United States institutions. Certain employers university and research related are <strong>cap exempt</strong>. Selection uses electronic registration and a <strong>lottery</strong> in heavy demand years, which is typical.<a href=\\"https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/h-1b-electronic-registration-process?utm_source=chatgpt.com\\">&nbsp;</a></p>\\n\\n\\n\\n<p>Separate from the new fee, USCIS had already modernized the process for recent cycles. The electronic registration <strong>fee increased from $10 to $215</strong> and the system moved to a <strong>beneficiary centric</strong> design to reduce duplicate filings and fraud. Those changes are <strong>independent</strong> of the new <strong>$100,000</strong> fee and remain in place.<a href=\\"https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/h-1b-electronic-registration-process?utm_source=chatgpt.com\\">&nbsp;</a></p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>What changed now and why it matters</strong></h2>\\n\\n\\n\\n<p>Multiple outlets and legal summaries report that the administration introduced a <strong>mandatory $100,000 one time payment</strong> for <strong>new H 1B petitions filed on or after September 21, 2025</strong>, particularly affecting petitions started <strong>from abroad</strong>. The White House press office clarified that the fee is <strong>not annual</strong> and <strong>not retroactive</strong> for existing visa holders. Legal pushback is expected, and timelines may shift pending lawsuits and agency guidance.<a href=\\"https://natlawreview.com/article/new-100000-h-1b-filing-fee-employer-considerations?utm_source=chatgpt.com\\">&nbsp;</a></p>\\n\\n\\n\\n<p>For employers, the near term implication is straightforward. A single new H 1B hire from outside the United States would carry an additional <strong>$100,000</strong> cost on top of normal filing, legal, and premium processing fees. That is a material shock for <strong>startups and SMBs</strong> and a meaningful budget item even for large enterprises. Analysts note this could reduce monthly inflows of new workers if the fee holds.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>What the market is signaling</strong></h2>\\n\\n\\n\\n<p>Coverage highlights concern in technology and consulting, investor commentary about competitiveness, and potential knock on effects for international students who plan on the <strong>OPT to H 1B</strong> pathway. Some large employers reportedly advised caution on international travel for employees on H 1B until policy and guidance stabilize. Meanwhile, markets in India and broader Asia have reacted to the news as firms consider alternative hiring and delivery plans.<a href=\\"https://www.livemint.com/news/us-news/h1b-visa-fee-news-live-updates-nonimmigrant-workers-travel-restrictions-trump-news-all-about-100k-rule-us-23-september-11758605535218.html?utm_source=chatgpt.com\\">&nbsp;</a></p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>A quick refresher on costs before the new fee</strong></h2>\\n\\n\\n\\n<p>Before this change, a cap subject H 1B case already involved several cost elements. Employers typically budget for the <strong>USCIS filing fees</strong>, optional <strong>premium processing</strong>, <strong>attorney fees</strong>, and internal time for petition preparation. The <strong>$215</strong> electronic registration fee is a small piece of that total. The new <strong>$100,000</strong> fee, if enforced, would sit <strong>on top</strong> of those costs and apply to <strong>new</strong> petitions, according to current reporting.<a href=\\"https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/h-1b-electronic-registration-process?utm_source=chatgpt.com\\">&nbsp;</a></p>\\n\\n\\n\\n<p>Because immigration policy can evolve through proclamations, rules, and agency memos, employers should anticipate further <strong>clarifications</strong> from DHS and the Department of State, as well as the possibility of <strong>injunctions</strong> that delay or limit enforcement while courts evaluate the policy.<a href=\\"https://natlawreview.com/article/new-100000-h-1b-filing-fee-employer-considerations?utm_source=chatgpt.com\\">&nbsp;</a></p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Who is most affected by the new fee</strong></h2>\\n\\n\\n\\n<p><strong>Startups and SMBs</strong> are the most exposed. Many rely on targeted international hires for specialized skills but cannot justify a sudden <strong>$100,000</strong> per hire cost. <strong>IT services and consultancies</strong> may also feel pressure since a high fee multiplies across larger intakes. <strong>Universities and research organizations</strong> could be less impacted if cap exempt and depending on how agency guidance treats their petitions, but they will still monitor policy details closely.<a href=\\"https://timesofindia.indiatimes.com/world/us/jpmorgans-top-economists-warn-on-h-1b-visa-fee-hike-could-slash-5500-work-visas-monthly/articleshow/124105708.cms?utm_source=chatgpt.com\\">&nbsp;</a></p>\\n\\n\\n\\n<p><strong>International student pathways</strong> could see second order effects. Prospective students weigh the probability of securing an H 1B against the cost and complexity employers face. If employers pull back on new H 1B filings, this could dampen demand for some graduate programs tied to United States work outcomes.<a href=\\"https://timesofindia.indiatimes.com/world/us/jpmorgans-top-economists-warn-on-h-1b-visa-fee-hike-could-slash-5500-work-visas-monthly/articleshow/124105708.cms?utm_source=chatgpt.com\\">&nbsp;</a></p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>How this interacts with remote hiring</strong></h2>\\n\\n\\n\\n<p>The fee encourages a sharper distinction between roles that <strong>must be United States based</strong> and roles that <strong>can be remote</strong>. For positions that can be executed remotely with clear collaboration windows, documentation standards, and security practices, many employers will pivot to <strong>nearshore</strong> or <strong>offshore</strong> solutions to maintain delivery speed and manage risk while litigation and guidance evolve.<a href=\\"https://timesofindia.indiatimes.com/world/us/jpmorgans-top-economists-warn-on-h-1b-visa-fee-hike-could-slash-5500-work-visas-monthly/articleshow/124105708.cms?utm_source=chatgpt.com\\">&nbsp;</a></p>\\n\\n\\n\\n<p>In practice, that means <strong>hiring in Brazil</strong> will draw more attention for engineering roles. <strong>Software engineers in Brazil</strong> can operate as <strong>contractors in Brazil</strong> using a service based model, or under local employment structures, with strong <strong>time zone</strong> overlap for real time collaboration with United States teams. Mature hubs such as <strong>São Paulo</strong>, <strong>Recife</strong>, <strong>Porto Alegre</strong>, <strong>Belo Horizonte</strong>, <strong>Florianópolis</strong>, and <strong>Manaus</strong> offer depth in modern stacks and senior leadership. If you are new to the market, start with a primer on<a href=\\"https://kaptasglobal.io/blog/hiring-models-brazil-pj-vs-clt/?utm_source=chatgpt.com\\"> hiring models in Brazil</a>, then compare options in the<a href=\\"https://kaptasglobal.io/blog/best-hiring-model-remote-team-brazil/?utm_source=chatgpt.com\\"> best hiring model for a remote team in Brazil</a>, and study city level patterns in<a href=\\"https://kaptasglobal.io/blog/where-to-find-top-tech-talent-in-brazil/\\"> where to find top tech talent in Brazil</a>.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Clarifying common questions and early misconceptions</strong></h2>\\n\\n\\n\\n<p>Some headlines implied the new amount could be <strong>annual</strong>. Official statements and press briefings indicate it is a <strong>one time</strong> supplemental fee associated with <strong>new</strong> petitions from abroad. Other questions asked whether <strong>existing H 1B holders</strong> changing employers would be subject to the fee. Current reporting suggests the focus is on <strong>new</strong> cases, but agencies will need to publish guidance to remove ambiguity. Always validate with counsel before acting.</p>\\n\\n\\n\\n<p>There has also been confusion around the relationship between the new fee and the <strong>85,000</strong> annual cap, as well as the <strong>$215</strong> registration fee. Neither is changed by this move. The cap remains <strong>65,000 plus 20,000</strong> for advanced degree holders, and the <strong>$215</strong> registration fee is a separate step introduced by USCIS modernization. The <strong>$100,000</strong> supplement would <strong>add</strong> to the cost stack for <strong>new</strong> cases if and when enforcement begins.<a href=\\"https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/h-1b-electronic-registration-process?utm_source=chatgpt.com\\">&nbsp;</a></p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Short term actions for United States employers</strong></h2>\\n\\n\\n\\n<ol class=\\"wp-block-list\\">\\n<li><strong>Inventory roles</strong> by legal necessity of presence. Identify which roles truly require a United States location and which can be performed remotely without compromising security, compliance, or customer experience.<br></li>\\n\\n\\n\\n<li><strong>Resequence hiring</strong>. For relocation dependent roles, consider deferring start dates until guidance clarifies or pursue <strong>cap exempt</strong> options with qualifying institutions.<br></li>\\n\\n\\n\\n<li><strong>Budget scenarios</strong>. Model headcount plans with and without the <strong>$100,000</strong> cost. Include sensitivity by business unit and critical path projects.<br></li>\\n\\n\\n\\n<li><strong>Communication plans</strong>. Prepare clear updates for current H 1B employees and candidates about travel, timing, and contingencies to reduce anxiety.<br></li>\\n\\n\\n\\n<li><strong>Remote contingencies</strong>. Where appropriate, accelerate <strong>nearshore</strong> pipelines in <strong>Brazil</strong> and <strong>Latam</strong> to hedge uncertainty and retain velocity on product roadmaps.<br></li>\\n</ol>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Medium term scenarios to monitor</strong></h2>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li><strong>Litigation and injunctions</strong>. Watch for court filings and any temporary restraining orders that could pause enforcement while constitutional questions are reviewed.<br></li>\\n\\n\\n\\n<li><strong>Agency guidance</strong>. Track memos from DHS, USCIS, and DOS clarifying scope, exceptions, and edge cases.<br></li>\\n\\n\\n\\n<li><strong>Employer policy shifts</strong>. Expect more remote first role design, increased use of cap exempt opportunities where mission aligned, and deeper investment in distributed team practices.<br></li>\\n</ul>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>The Brazil and Latam angle in depth</strong></h2>\\n\\n\\n\\n<p><strong>Nearshore</strong> hiring is not only a cost lever. It is a <strong>continuity</strong> strategy when immigration timelines become unpredictable. <strong>Recruitment agency in Brazil</strong> partners can help define the correct engagement model from day one. <strong>CLT W2 style</strong> employment provides statutory benefits and a traditional employee experience. <strong>PJ 1099 style</strong> contractor arrangements emphasize deliverables and move quickly when supported by compliant contracts and reliable payroll operations.</p>\\n\\n\\n\\n<p>Process quality is what separates smooth integrations from painful ones. Before booking live interviews, validate English and collaboration with an asynchronous prompt that includes one written design trade off and a <strong>90 second</strong> voice or video sample about a recent ticket. Confirm <strong>daily overlap</strong> and documentation habits. Run <strong>two short calls on different days</strong> to verify availability and responsiveness. Collect <strong>recent manager references</strong> focused on ownership, communication, and delivery patterns. Avoid sharing wide salary ranges early to prevent high anchors; request the candidate target by <strong>contract type</strong> in a <strong>single currency</strong> and anchor offers to <strong>impact</strong> and <strong>scope</strong>. For market context, see the analysis on the<a href=\\"https://kaptasglobal.io/blog/cost-hire-software-engineer-brazil/\\"> cost to hire a software engineer in Brazil</a> and the broader <strong>pillar</strong> reference on<a href=\\"https://kaptasglobal.io/blog/hiring-software-engineers-brazil-latam-complete-guide/\\"> hiring software engineers in Brazil and Latam</a>.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>FAQ</strong></h2>\\n\\n\\n\\n<p><strong>Is the $100,000 fee a one time charge or an annual payment?</strong><strong><br></strong> Reporting and official clarifications describe it as a <strong>one time</strong> supplemental fee for <strong>new</strong> H 1B petitions filed from abroad, not an annual payment. Final details depend on agency guidance and litigation outcomes.</p>\\n\\n\\n\\n<p><strong>Does the new fee affect existing H 1B holders or routine extensions and transfers?</strong><strong><br></strong> Current reporting indicates it <strong>targets new cases</strong> rather than existing workers. Extensions and transfers for people already in the United States are not the focus of the announced fee, pending formal guidance.</p>\\n\\n\\n\\n<p><strong>Does this change the 85,000 annual cap or the $215 electronic registration fee?</strong><strong><br></strong> No. The cap and the <strong>$215</strong> registration fee remain as before. The new fee would be <strong>in addition</strong> to existing steps if and when enforced.</p>\\n\\n\\n\\n<p><strong>How does this impact remote hiring plans?</strong><strong><br></strong> Roles that do not require presence in the United States may shift to <strong>remote nearshore</strong> to avoid the new cost and uncertainty. Expect more demand for contractor models and distributed teams while courts and agencies clarify scope and timing.</p>\\n\\n\\n\\n<p><strong>Will there be exemptions for certain sectors?</strong><strong><br></strong> Coverage mentions discussions about possible exceptions in critical areas, with healthcare often cited in early commentary. Wait for agency guidance to confirm any exemptions.<a href=\\"https://www.livemint.com/news/us-news/h1b-visa-fee-news-live-updates-nonimmigrant-workers-travel-restrictions-trump-news-all-about-100k-rule-us-23-september-11758605535218.html?utm_source=chatgpt.com\\">&nbsp;</a></p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Sources to monitor as this evolves</strong></h2>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li><strong>USCIS official resources</strong> on H 1B registration and fees.<a href=\\"https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/h-1b-electronic-registration-process?utm_source=chatgpt.com\\"> USCIS<br></a></li>\\n\\n\\n\\n<li><strong>National Law Review</strong> and attorney memos on employer considerations.<a href=\\"https://natlawreview.com/article/new-100000-h-1b-filing-fee-employer-considerations?utm_source=chatgpt.com\\"> natlawreview.com<br></a></li>\\n\\n\\n\\n<li><strong>LiveMint</strong> and similar markets coverage tracking business reaction.<a href=\\"https://www.livemint.com/news/us-news/h1b-visa-fee-news-live-updates-nonimmigrant-workers-travel-restrictions-trump-news-all-about-100k-rule-us-23-september-11758605535218.html?utm_source=chatgpt.com\\"> mint<br></a></li>\\n\\n\\n\\n<li><strong>Times of India</strong> for analyst estimates and international market response.<a href=\\"https://timesofindia.indiatimes.com/world/us/jpmorgans-top-economists-warn-on-h-1b-visa-fee-hike-could-slash-5500-work-visas-monthly/articleshow/124105708.cms?utm_source=chatgpt.com\\"> The Times of India<br></a></li>\\n</ul>\\n\\n\\n\\n<p><strong>Brazilian business media</strong> such as Exame for regional analysis and impact perspectives.<a href=\\"https://exame.com/mundo/taxa-de-us-100-000-sobre-visto-h-1b-e-mais-um-golpe-na-relacao-entre-eua-e-india/?utm_source=chatgpt.com\\"> Exame</a></p>\\n","featured_image":"https://kaptasglobal.io/wp-content/uploads/2025/09/h1b_explained_new_100000_fee_guide-768x403.webp","categories":["Hiring in Brazil"]},{"id":9667,"slug":"five-things-to-know-before-hiring-in-brazil","date":"2025-09-18","title":"Five things you should know before hiring in Brazil","excerpt":"<p>Hiring in Brazil can lift quality and reduce cost when you set structure and process early. Use the points below to brief your team or your recruitment agency in Brazil and to shape a reliable plan for nearshore hiring. 1. Choose the right hiring model early Brazil supports two common paths. CLT is the employment [&hellip;]</p>\\n","content":"\\t\\t<div data-elementor-type=\\"wp-post\\" data-elementor-id=\\"9667\\" class=\\"elementor elementor-9667\\" data-elementor-post-type=\\"post\\">\\n\\t\\t\\t\\t<div class=\\"elementor-element elementor-element-ceee42e e-flex e-con-boxed e-con e-parent\\" data-id=\\"ceee42e\\" data-element_type=\\"container\\" data-e-type=\\"container\\" data-settings=\\"{&quot;jet_parallax_layout_list&quot;:[]}\\">\\n\\t\\t\\t\\t\\t<div class=\\"e-con-inner\\">\\n\\t\\t\\t\\t<div class=\\"elementor-element elementor-element-76752f27 elementor-widget elementor-widget-text-editor\\" data-id=\\"76752f27\\" data-element_type=\\"widget\\" data-e-type=\\"widget\\" data-widget_type=\\"text-editor.default\\">\\n\\t\\t\\t\\t<div class=\\"elementor-widget-container\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\n<p>Hiring in Brazil can lift quality and reduce cost when you set structure and process early. Use the points below to brief your team or your recruitment agency in Brazil and to shape a reliable plan for nearshore hiring.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>1. Choose the right hiring model early</strong></h2>\\n\\n\\n\\n<p>Brazil supports two common paths. <strong>CLT</strong> is the employment regime that most closely resembles <strong>W2</strong> in the United States. It involves payroll, statutory benefits, paid vacation, and stronger employment protections. <strong>PJ</strong> is a service based engagement that maps to an <strong>independent contractor 1099</strong> style relationship when the work reality is delivery oriented and scoped by service.</p>\\n\\n\\n\\n<p>If speed and flexibility are priorities, contractors in Brazil under PJ usually move faster and keep total cost lean when supported by proper contracts and a dependable local partner. If your risk profile or internal policy requires benefits and an employment wrapper, CLT or an Employer of Record are the natural choices. For a deeper comparison, see the guide to<a href=\\"https://kaptasglobal.io/blog/hiring-models-brazil-pj-vs-clt/?utm_source=chatgpt.com\\"> hiring models in Brazil</a> and this overview of the<a href=\\"https://kaptasglobal.io/blog/best-hiring-model-remote-team-brazil/?utm_source=chatgpt.com\\"> best hiring model for a remote team in Brazil</a>.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>2. Understand the real costs of hiring in Brazil</strong></h2>\\n\\n\\n\\n<p>Cost is not only salary. Under CLT W2 style employment you must account for payroll taxes, social security contributions, paid vacation, thirteenth salary, and health benefits. These items increase total cost of ownership and should be budgeted from the start. Currency, city, and seniority also affect the final number.</p>\\n\\n\\n\\n<p>Under PJ 1099 style agreements you shift cost toward service rates and delivery. You still need compliant contracts, secure payments, and a clear scope that matches a service relationship. With the right setup, senior software engineers in Brazil can deliver savings of fifty percent or more versus comparable roles in the United States. For concrete drivers and examples, review the analysis on the<a href=\\"https://kaptasglobal.io/blog/cost-hire-software-engineer-brazil/\\"> cost to hire a software engineer in Brazil</a>.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>3. Validate English and collaboration before booking interviews</strong></h2>\\n\\n\\n\\n<p>Save time by screening communication first. Ask candidates for a short asynchronous prompt that includes one written explanation of a design trade off and a ninety second voice note or video about a recent ticket. Score clarity, structure, and tone rather than accent. Confirm expected overlap windows and documentation habits before scheduling any live call.</p>\\n\\n\\n\\n<p>Only after this async screen invite candidates to a brief live conversation and a ten minute pair review on a small diff. This sequence filters out weak fits early and preserves your interview loop for the strongest profiles. For planning collaboration windows, see why the<a href=\\"https://kaptasglobal.io/blog/why-brazils-time-zone-is-an-ideal-fit-for-international-teams/\\"> Brazil time zone is an ideal fit</a> for nearshore teams.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>4. Search in the right cities and use credible sources</strong></h2>\\n\\n\\n\\n<p>Brazil has multiple hubs for software engineers in Brazil. São Paulo brings scale and specialization for product and platform work. Recife blends university strength from UFPE with a mature ecosystem at Porto Digital. Porto Alegre is strong in backend and DevOps and usually shows solid English and retention.</p>\\n\\n\\n\\n<p>Belo Horizonte benefits from UFMG and growing product teams. Florianópolis concentrates remote ready seniors with startup experience. Manaus offers niche embedded and mobile expertise. Combine referrals, reputable job boards, GitHub and open source signals, and targeted outreach. If speed and precision matter, start with this field guide to<a href=\\"https://kaptasglobal.io/blog/where-to-find-top-tech-talent-in-brazil/\\"> where to find top tech talent in Brazil</a> and consider a focused<a href=\\"https://kaptasglobal.io/mapping-service/\\"> talent mapping</a> before publishing roles.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>5. Avoid the common risks when hiring in Brazil</strong></h2>\\n\\n\\n\\n<p>Salary negotiation can drift upward when ranges are shared too early. Anchor compensation to impact and scope and request the candidate target by contract type in a single currency. Reconfirm expectations after the technical loop and offer review checkpoints linked to outcomes rather than raising bands mid process.</p>\\n\\n\\n\\n<p>Double job risk is manageable during recruiting. Request current time allocation across engagements, run two short calls on different days to verify overlap and responsiveness, and collect recent manager references focused on availability and delivery patterns. Validate real fluency in English and core skills through the async prompt and a brief pair review. For an end to end view of process quality, keep the pillar guide on<a href=\\"https://kaptasglobal.io/blog/hiring-software-engineers-brazil-latam-complete-guide/\\"> hiring software engineers in Brazil and Latam</a> as your reference.</p>\\n\\n\\n\\n<hr class=\\"wp-block-separator has-alpha-channel-opacity\\"/>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Why many companies choose Kaptas Global as their recruitment agency in Brazil</strong></h3>\\n\\n\\n\\n<p>Kaptas Global combines market insight with a rigorous recruiting process. We map cities and compensation, run structured English and collaboration screens before live interviews, and set contractor operations with compliant contracts and reliable payroll. For companies that prefer a single point of contact, we operate as your <strong>HR department in Brazil</strong>, coordinating recruiting, onboarding, and ongoing contractor support.If you want a managed contractor setup, review the outline of<a href=\\"https://kaptasglobal.io/contractor-services/\\"> contractor services</a>. For senior or executive roles with an employment path, consider<a href=\\"https://kaptasglobal.io/direct-hire-services/\\"> direct hire services</a>.</p>\\n\\n\\n\\n<p></p>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"elementor-element elementor-element-afd90a9 elementor-widget elementor-widget-html\\" data-id=\\"afd90a9\\" data-element_type=\\"widget\\" data-e-type=\\"widget\\" data-widget_type=\\"html.default\\">\\n\\t\\t\\t\\t<div class=\\"elementor-widget-container\\">\\n\\t\\t\\t\\t\\t<script type=\\"application/ld+json\\">\\n{\\n  \\"@context\\":\\"https://schema.org\\",\\n  \\"@type\\":\\"Organization\\",\\n  \\"name\\":\\"Kaptas Global\\",\\n  \\"url\\":\\"https://kaptasglobal.io/\\",\\n  \\"logo\\":\\"https://kaptasglobal.io/path-to-logo.png\\",\\n  \\"sameAs\\":[\\n    \\"https://www.linkedin.com/company/YOUR-LINKEDIN\\",\\n    \\"https://www.crunchbase.com/organization/YOUR-CRUNCHBASE\\",\\n    \\"https://clutch.co/profile/YOUR-CLUTCH\\",\\n    \\"https://g2.com/your-profile\\"\\n  ],\\n  \\"contactPoint\\":[\\n    {\\"@type\\":\\"ContactPoint\\",\\"contactType\\":\\"sales\\",\\"email\\":\\"contact@kaptasglobal.io\\",\\"areaServed\\":\\"US, Brazil, Latam\\",\\"availableLanguage\\":[\\"English\\",\\"Portuguese\\",\\"Spanish\\"]}\\n  ]\\n}\\n<\/script>\\n\\n<script type=\\"application/ld+json\\">\\n{\\n  \\"@context\\":\\"https://schema.org\\",\\n  \\"@type\\":\\"WebSite\\",\\n  \\"url\\":\\"https://kaptasglobal.io/\\",\\n  \\"name\\":\\"Kaptas Global\\",\\n  \\"potentialAction\\":{\\n    \\"@type\\":\\"SearchAction\\",\\n    \\"target\\":\\"https://kaptasglobal.io/?s={search_term_string}\\",\\n    \\"query-input\\":\\"required name=search_term_string\\"\\n  }\\n}\\n<\/script>\\n\\n<script type=\\"application/ld+json\\">\\n{\\n  \\"@context\\":\\"https://schema.org\\",\\n  \\"@graph\\":[\\n    {\\n      \\"@type\\":\\"WebPage\\",\\n      \\"@id\\":\\"https://kaptasglobal.io/blog/five-things-to-know-before-hiring-in-brazil/\\",\\n      \\"url\\":\\"https://kaptasglobal.io/blog/five-things-to-know-before-hiring-in-brazil/\\",\\n      \\"name\\":\\"Five things you should know before hiring in Brazil\\",\\n      \\"isPartOf\\":{\\"@id\\":\\"https://kaptasglobal.io/\\"},\\n      \\"about\\":[\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"hiring in Brazil\\"},\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"recruitment agency in Brazil\\"},\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"contractors in Brazil\\"},\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"software engineers in Brazil\\"},\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"nearshore\\"}\\n      ],\\n      \\"primaryImageOfPage\\":{\\"@type\\":\\"ImageObject\\",\\"url\\":\\"FEATURED-IMAGE-URL\\"},\\n      \\"datePublished\\":\\"2025-09-18\\",\\n      \\"dateModified\\":\\"2025-09-18\\",\\n      \\"inLanguage\\":\\"en\\"\\n    },\\n    {\\n      \\"@type\\":\\"Article\\",\\n      \\"headline\\":\\"Five things you should know before hiring in Brazil\\",\\n      \\"alternativeHeadline\\":\\"A practical guide for US teams and their recruitment agency in Brazil\\",\\n      \\"description\\":\\"Five things you should know before hiring in Brazil Choose CLT W2 or PJ 1099 understand real costs validate English early find the right cities and avoid hiring risks with software engineers in Brazil.\\",\\n      \\"author\\":{\\"@type\\":\\"Organization\\",\\"name\\":\\"Kaptas Global\\"},\\n      \\"publisher\\":{\\"@type\\":\\"Organization\\",\\"name\\":\\"Kaptas Global\\",\\"logo\\":{\\"@type\\":\\"ImageObject\\",\\"url\\":\\"https://kaptasglobal.io/path-to-logo.png\\"}},\\n      \\"mainEntityOfPage\\":{\\"@id\\":\\"https://kaptasglobal.io/blog/five-things-to-know-before-hiring-in-brazil/\\"},\\n      \\"image\\":\\"FEATURED-IMAGE-URL\\",\\n      \\"articleSection\\":[\\n        \\"Choose the right hiring model early\\",\\n        \\"Understand the real costs of hiring in Brazil\\",\\n        \\"Validate English and collaboration before booking interviews\\",\\n        \\"Search in the right cities and use credible sources\\",\\n        \\"Avoid the common risks when hiring in Brazil\\",\\n        \\"Why many companies choose Kaptas Global as their recruitment agency in Brazil\\"\\n      ],\\n      \\"about\\":[\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"Brazil tech talent\\"},\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"Latam tech market\\"}\\n      ],\\n      \\"inLanguage\\":\\"en\\",\\n      \\"datePublished\\":\\"2025-09-18\\",\\n      \\"dateModified\\":\\"2025-09-18\\"\\n    }\\n  ]\\n}\\n<\/script>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t","featured_image":"https://kaptasglobal.io/wp-content/uploads/2025/09/five_things_you_should_know_before_hiring_in_brazil-768x403.webp","categories":["Hiring in Brazil"]},{"id":9664,"slug":"guide-to-hiring-remote-brazilian-developers","date":"2025-09-07","title":"The Complete Guide to Hiring Remote Brazilian Developers in 2025","excerpt":"<p>Brazil has emerged as Latin America&#8217;s premier destination for sourcing world-class software engineers, and for good reason. With over 500,000 tech professionals and a rapidly growing digital economy, Brazil offers an unmatched combination of technical excellence, cultural compatibility, and cost efficiency that&#8217;s transforming how global companies build their engineering teams. Ready to Build Your Brazilian [&hellip;]</p>\\n","content":"\\n<p>Brazil has emerged as Latin America&#8217;s premier destination for sourcing world-class software engineers, and for good reason. With over 500,000 tech professionals and a rapidly growing digital economy, Brazil offers an unmatched combination of technical excellence, cultural compatibility, and cost efficiency that&#8217;s transforming how global companies build their engineering teams.</p>\\n\\n\\n\\n<div style=\\"background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; border-radius: 12px; color: white; text-align: center; margin: 40px 0;\\"> <h3 style=\\"color: white; margin-bottom: 20px; font-size: 28px;\\">Ready to Build Your Brazilian Development Team?</h3> <p style=\\"font-size: 18px; margin-bottom: 30px; line-height: 1.6;\\">Connect with Brazil&#8217;s top tech talent through our proven recruitment process. Get access to pre-vetted developers who can start contributing to your projects within 48 hours.</p> <div style=\\"display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;\\"> <a href=\\"https://kaptasglobal.io/direct-hire-services/\\" style=\\"background: white; color: #667eea; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;\\">Explore Direct Hire Services</a> <a href=\\"https://kaptasglobal.io/contractor-services/\\" style=\\"background: rgba(255,255,255,0.2); color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; border: 2px solid white;\\">View Contractor Options</a> </div> </div>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Why Brazil Dominates the Latin American Tech Landscape</h2>\\n\\n\\n\\n<p>Brazil&#8217;s tech ecosystem has experienced explosive growth over the past decade. The country now hosts the largest concentration of skilled developers in Latin America, with major tech hubs in São Paulo, Rio de Janeiro, Belo Horizonte, and increasingly, the Amazon region. This growth isn&#8217;t accidental—it&#8217;s the result of strategic investments in education, a thriving startup ecosystem, and a culture that embraces innovation.</p>\\n\\n\\n\\n<p>Brazilian developers consistently rank among the top performers in global coding competitions and hackathons. Their expertise spans across modern technologies including React, Node.js, Python, Java, Go, and emerging fields like artificial intelligence and blockchain development. What sets Brazilian developers apart is their ability to combine technical proficiency with strong problem-solving skills and adaptability to different business contexts.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">The Strategic Advantages of Brazilian Talent</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Time Zone Alignment for Seamless Collaboration</h3>\\n\\n\\n\\n<p>One of the most significant advantages of hiring Brazilian developers is the favorable time zone overlap with North American businesses. Brazil operates on GMT-3, which provides substantial working hours overlap with both Eastern (EST) and Pacific (PST) time zones. This alignment enables real-time collaboration, immediate feedback cycles, and synchronized team meetings—advantages that are often compromised when working with developers from other regions.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">English Proficiency and Communication Excellence</h3>\\n\\n\\n\\n<p>Brazilian developers generally possess strong English communication skills, particularly those working in the international market. This proficiency extends beyond basic conversation to technical documentation, code comments, and participation in complex technical discussions. The ability to communicate effectively in English eliminates the communication barriers that often plague international development partnerships.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Cultural Compatibility and Work Ethic</h3>\\n\\n\\n\\n<p>Brazilian culture emphasizes relationship-building, collaboration, and creative problem-solving—values that align naturally with modern software development practices. Brazilian developers are known for their adaptability, positive attitude, and ability to work effectively in diverse, multicultural teams. This cultural compatibility significantly reduces the friction often associated with remote team integration.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Cost Analysis: Maximizing Value Without Compromising Quality</h2>\\n\\n\\n\\n<p>The financial advantages of hiring Brazilian developers are substantial and strategic. While a senior software engineer in the United States commands an average salary of $167,000 annually (including benefits, insurance, and other employment costs), a comparable developer in Brazil can be hired for approximately $92,000 through established recruitment partnerships. This represents significant cost savings without any compromise in skill level or output quality.</p>\\n\\n\\n\\n<p>However, the value proposition extends beyond simple cost reduction. Brazilian developers often bring a unique perspective to problem-solving, combining technical expertise with creative thinking that can lead to innovative solutions and improved product outcomes. Many companies find that their Brazilian team members contribute ideas and approaches that wouldn&#8217;t have emerged from a more homogeneous team.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Understanding Brazilian Employment Models</h2>\\n\\n\\n\\n<p>When hiring Brazilian developers, it&#8217;s crucial to understand the local employment landscape and choose the model that best fits your business needs and the candidate&#8217;s preferences.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">PJ (Pessoa Jurídica) Model</h3>\\n\\n\\n\\n<p>The PJ model allows developers to work as independent contractors through their own companies. This arrangement offers flexibility for both parties and is often preferred for remote international work. Under this model, developers handle their own taxes and social security contributions, providing more take-home income while giving companies greater flexibility in engagement terms.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">CLT (Consolidação das Leis do Trabalho) Model</h3>\\n\\n\\n\\n<p>CLT represents traditional employment under Brazilian labor law, providing developers with comprehensive benefits including vacation time, health insurance, and job security protections. While this model involves higher costs and more regulatory compliance, it can be appropriate for long-term strategic hires and larger team deployments.</p>\\n\\n\\n\\n<p>The choice between PJ and CLT models should be made based on your specific requirements, the duration of the engagement, and the preferences of your chosen candidates. Working with an experienced recruitment partner can help navigate these decisions and ensure compliance with local regulations.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Technical Expertise and Skill Sets</h2>\\n\\n\\n\\n<p>Brazilian developers excel across a wide range of technical domains. The country&#8217;s strong educational foundation in computer science and engineering, combined with practical experience in diverse industries, produces developers who are both technically proficient and business-aware.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Frontend Development Excellence</h3>\\n\\n\\n\\n<p>Brazilian frontend developers are particularly skilled in modern JavaScript frameworks and libraries. React.js adoption is widespread, with many developers also proficient in Vue.js, Angular, and emerging technologies. Their understanding of user experience principles and design thinking makes them valuable contributors to product development teams.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Backend and Full-Stack Capabilities</h3>\\n\\n\\n\\n<p>On the backend, Brazilian developers demonstrate strong capabilities in Node.js, Python (Django/Flask), Java (Spring Boot), PHP, and increasingly, Go and Rust. Many are comfortable working across the full technology stack, making them valuable for smaller teams or projects requiring versatility.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Cloud and DevOps Proficiency</h3>\\n\\n\\n\\n<p>With the global shift toward cloud-native development, Brazilian developers have embraced modern DevOps practices and cloud platforms. Many are experienced with AWS, Google Cloud Platform, and Azure, along with containerization technologies like Docker and Kubernetes. This expertise is crucial for companies looking to modernize their infrastructure and development practices.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">The Hiring Process: From Sourcing to Onboarding</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Sourcing and Initial Screening</h3>\\n\\n\\n\\n<p>The most effective approach to hiring Brazilian developers involves partnering with established recruitment firms that understand both the local talent market and international business requirements. These partnerships provide access to pre-vetted candidates who have already been assessed for technical skills, English proficiency, and cultural fit.</p>\\n\\n\\n\\n<p>The initial screening process should focus on technical capabilities relevant to your specific needs, communication skills in English, and alignment with your company culture and values. This multi-faceted evaluation ensures that candidates can contribute effectively from day one.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Technical Assessment and Cultural Fit</h3>\\n\\n\\n\\n<p>Technical interviews should be comprehensive, covering both theoretical knowledge and practical problem-solving abilities. Many Brazilian developers appreciate technical challenges that allow them to demonstrate their creativity and approach to complex problems. Consider including architecture discussions, code review exercises, and collaborative problem-solving sessions.</p>\\n\\n\\n\\n<p>Cultural fit assessment is equally important. Look for candidates who demonstrate curiosity, adaptability, and enthusiasm for your product or industry. Brazilian professionals often bring a collaborative spirit and positive energy that can significantly enhance team dynamics.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Contract Negotiation and Onboarding</h3>\\n\\n\\n\\n<p>Contract terms should be clear and comprehensive, covering compensation, working hours, communication expectations, and project deliverables. Many Brazilian developers appreciate transparency around career development opportunities and potential for long-term collaboration.</p>\\n\\n\\n\\n<p>Effective onboarding for remote Brazilian developers should include comprehensive documentation, clear communication protocols, and integration with existing team processes. Consider assigning a buddy or mentor to help new team members navigate company culture and processes.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Legal and Compliance Considerations</h2>\\n\\n\\n\\n<p>Working with Brazilian developers requires understanding and compliance with local employment laws and international contracting requirements. These regulations can be complex, particularly around taxation, intellectual property rights, and data protection.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Tax Implications and Withholdings</h3>\\n\\n\\n\\n<p>Depending on your chosen employment model, there may be specific tax obligations and withholding requirements. PJ contractors typically handle their own tax obligations, while CLT employees require employer contributions to social security and other statutory benefits.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Intellectual Property Protection</h3>\\n\\n\\n\\n<p>Ensure that all contracts include comprehensive intellectual property clauses that protect your company&#8217;s assets and innovations. Brazilian law provides strong IP protections, but contracts should be explicit about ownership of work products and confidentiality requirements.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Data Protection and Privacy</h3>\\n\\n\\n\\n<p>Brazil&#8217;s Lei Geral de Proteção de Dados (LGPD) establishes comprehensive data protection requirements similar to GDPR. Companies hiring Brazilian developers should ensure compliance with these regulations, particularly when handling personal data or customer information.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Building and Managing Remote Brazilian Teams</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Communication Strategies</h3>\\n\\n\\n\\n<p>Establish clear communication protocols that accommodate time zone differences while maintaining team cohesion. Regular video calls, structured stand-ups, and collaborative documentation help maintain alignment and foster team relationships.</p>\\n\\n\\n\\n<p>Consider cultural differences in communication styles. Brazilian professionals often appreciate personal connections and relationship-building, so include time for informal interactions and team building alongside task-focused meetings.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Performance Management and Career Development</h3>\\n\\n\\n\\n<p>Implement performance management systems that provide clear expectations, regular feedback, and opportunities for professional growth. Many Brazilian developers are highly motivated by learning opportunities and career advancement prospects.</p>\\n\\n\\n\\n<p>Provide access to training resources, conference attendance, and certification programs. This investment in professional development often results in improved performance, higher retention, and stronger team loyalty.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Tools and Technology Integration</h3>\\n\\n\\n\\n<p>Ensure that Brazilian team members have access to the same tools, technologies, and resources as your local team. This includes development environments, project management systems, communication platforms, and any specialized software required for their roles.</p>\\n\\n\\n\\n<p>Consider providing equipment stipends or direct hardware provision to ensure consistent development environments and reliable connectivity.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Measuring Success and ROI</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Key Performance Indicators</h3>\\n\\n\\n\\n<p>Track both quantitative and qualitative metrics to measure the success of your Brazilian development team. Quantitative metrics might include code quality scores, sprint velocity, bug rates, and feature delivery timelines. Qualitative measures could include team satisfaction scores, collaboration effectiveness, and innovation contributions.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Long-term Value Assessment</h3>\\n\\n\\n\\n<p>Consider the long-term value beyond immediate cost savings. Many companies find that Brazilian developers contribute to improved product quality, faster time-to-market, and enhanced team creativity. These benefits often exceed the initial cost advantages.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Retention and Team Stability</h3>\\n\\n\\n\\n<p>Monitor retention rates and job satisfaction among your Brazilian team members. High retention not only reduces recruitment costs but also builds institutional knowledge and stronger team relationships over time.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Common Challenges and Solutions</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Language and Communication Barriers</h3>\\n\\n\\n\\n<p>While most professional Brazilian developers have strong English skills, occasional communication challenges may arise with complex technical concepts or cultural nuances. Address these proactively through clear documentation, regular check-ins, and patience as team members adapt to your communication style.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Time Zone Management</h3>\\n\\n\\n\\n<p>Although time zone overlap is generally favorable, managing schedules across multiple zones requires planning and flexibility. Establish core collaboration hours while allowing for asynchronous work when appropriate.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Cultural Integration</h3>\\n\\n\\n\\n<p>Help Brazilian team members understand your company culture while respecting their cultural perspectives. This mutual adaptation often leads to a richer, more inclusive team environment that benefits all members.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Future Outlook and Industry Trends</h2>\\n\\n\\n\\n<p>The demand for Brazilian tech talent continues to grow as more companies recognize the strategic advantages of nearshore development partnerships. Brazil&#8217;s tech ecosystem is expanding rapidly, with new coding bootcamps, universities programs, and corporate training initiatives producing an increasing supply of skilled developers.</p>\\n\\n\\n\\n<p>Emerging technologies like artificial intelligence, machine learning, and blockchain are gaining traction in Brazil&#8217;s tech community, ensuring a pipeline of developers skilled in next-generation technologies. The country&#8217;s commitment to digital transformation and innovation makes it an increasingly attractive source of technical talent.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Getting Started with Brazilian Developer Hiring</h2>\\n\\n\\n\\n<p>The most effective approach to hiring Brazilian developers involves partnering with established recruitment specialists who understand both markets. These partnerships provide access to pre-vetted talent pools, handle legal and compliance requirements, and offer ongoing support throughout the hiring and management process.</p>\\n\\n\\n\\n<p>When evaluating potential partnerships, look for firms with proven track records, comprehensive service offerings, and deep understanding of both Brazilian talent markets and international business requirements. The investment in professional recruitment support often pays dividends through faster hiring, better candidate quality, and reduced administrative overhead. </p>\\n\\n\\n\\n<p>Brazilian developers represent one of the most compelling opportunities in today&#8217;s global talent market. With the right approach to recruitment, onboarding, and team management, companies can access world-class technical expertise while achieving significant cost advantages and operational flexibility. The key is partnering with experienced professionals who understand both markets and can facilitate successful, long-term collaborations.</p>\\n\\n\\n\\n<p>Whether you&#8217;re a startup looking to scale rapidly, an established company seeking to optimize development costs, or an enterprise building distributed teams, Brazilian developers offer a strategic advantage that&#8217;s difficult to match in today&#8217;s competitive talent landscape.</p>\\n\\n\\n\\n<p></p>\\n","featured_image":"","categories":["Blog"]},{"id":9662,"slug":"brazilian-developers-for-us-startups","date":"2025-09-07","title":"Why Brazilian Developers Are Perfect for US Startups: A Data-Driven Analysis","excerpt":"<p>For US startups navigating the competitive landscape of 2025, access to top-tier technical talent often determines the difference between breakthrough success and stagnation. While the domestic tech talent shortage continues to drive up hiring costs and extend recruitment timelines, forward-thinking startups are discovering a strategic advantage in Brazilian developers—a solution that delivers exceptional technical expertise, [&hellip;]</p>\\n","content":"\\n<p>For US startups navigating the competitive landscape of 2025, access to top-tier technical talent often determines the difference between breakthrough success and stagnation. While the domestic tech talent shortage continues to drive up hiring costs and extend recruitment timelines, forward-thinking startups are discovering a strategic advantage in Brazilian developers—a solution that delivers exceptional technical expertise, cultural alignment, and cost efficiency that&#8217;s particularly crucial during early-stage growth.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">The US Startup Talent Crisis: By the Numbers</h2>\\n\\n\\n\\n<p>The current state of US tech hiring presents significant challenges for early-stage companies. According to recent industry data, the average time to fill a senior developer position has increased to 87 days, with startups often facing even longer timelines due to competition from established tech giants offering higher compensation packages.</p>\\n\\n\\n\\n<p>For a typical US-based senior software engineer, total employment costs now average $167,000 annually when factoring in salary, benefits, equity, insurance, and operational expenses. For cash-strapped startups, these costs can consume 25-40% of their runway, creating unsustainable burn rates that threaten long-term viability.</p>\\n\\n\\n\\n<p>The competition for domestic talent is particularly intense in major tech hubs. San Francisco, New York, and Seattle-based startups often find themselves in bidding wars not just with other startups, but with tech giants like Google, Meta, and Amazon who can offer compensation packages that early-stage companies simply cannot match.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Brazilian Developers: The Startup Game-Changer</h2>\\n\\n\\n\\n<p>Brazilian developers offer a compelling alternative that addresses each of these pain points while delivering additional strategic advantages that are particularly valuable for startup environments.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Cost Efficiency That Extends Runway</h3>\\n\\n\\n\\n<p>The financial impact of hiring Brazilian developers can be transformative for startup economics. With total costs averaging $92,000 annually for comparable senior-level talent, startups can achieve immediate cost savings of approximately 45% compared to domestic hiring. For a startup building a team of five developers, this translates to annual savings of $375,000—funds that can be redirected toward product development, marketing, or extending runway.</p>\\n\\n\\n\\n<p>These savings become even more significant when considering equity dilution. Many startups offer equity packages to attract top domestic talent, diluting founder and early investor stakes. Brazilian developers, while certainly appreciating equity opportunities, often place greater emphasis on competitive cash compensation and professional growth opportunities, potentially reducing equity requirements.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Accelerated Time-to-Market</h3>\\n\\n\\n\\n<p>Brazilian developers can significantly reduce time-to-hire from months to days. Established recruitment networks in Brazil maintain pools of pre-vetted, available talent who can begin contributing to projects within 48-72 hours of final selection. For startups racing to reach market milestones or satisfy investor requirements, this acceleration can be critical.</p>\\n\\n\\n\\n<p>The time zone alignment between Brazil and the US enables continuous development cycles. While US-based team members focus on planning, meetings, and strategic decisions during business hours, Brazilian developers can work on implementation during overlapping hours and continue development into US evening hours, effectively extending productive development time.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Technical Excellence Meets Startup Agility</h3>\\n\\n\\n\\n<p>Brazilian developers consistently demonstrate the technical versatility that startups require. Unlike larger companies where developers may specialize narrowly, startups need team members who can work across the full technology stack and adapt to changing requirements. Brazilian developers, often with experience in diverse project environments, excel in these dynamic situations.</p>\\n\\n\\n\\n<p>The Brazilian tech ecosystem has produced developers skilled in modern startup-friendly technologies including React, Node.js, Python, microservices architectures, and cloud-native development. Many have experience with agile methodologies, DevOps practices, and rapid prototyping—exactly the skillsets that drive startup success.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Cultural Alignment: The Hidden Startup Advantage</h2>\\n\\n\\n\\n<p>Beyond technical and financial considerations, Brazilian developers bring cultural attributes that align naturally with startup environments. The Brazilian approach to problem-solving emphasizes creativity, collaboration, and adaptability—traits that are essential in fast-changing startup contexts.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Innovation and Creative Problem-Solving</h3>\\n\\n\\n\\n<p>Brazilian culture encourages innovative thinking and creative approaches to challenges. This mindset translates directly to software development, where Brazilian developers often propose alternative solutions, identify overlooked opportunities, and contribute ideas that extend beyond their immediate technical responsibilities.</p>\\n\\n\\n\\n<p>Many US startups report that their Brazilian team members become valuable contributors to product strategy discussions, user experience considerations, and business model refinement. This broader engagement reflects the Brazilian cultural emphasis on holistic thinking and collaborative problem-solving.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Resilience and Adaptability</h3>\\n\\n\\n\\n<p>Startups require team members who can thrive in uncertain, rapidly changing environments. Brazilian professionals, often with experience navigating economic volatility and dynamic business conditions, demonstrate exceptional resilience and adaptability. They&#8217;re comfortable with ambiguity, quick to adjust to changing priorities, and maintain positive attitudes during challenging periods.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Strong Work Ethic and Commitment</h3>\\n\\n\\n\\n<p>Brazilian developers typically demonstrate strong commitment to their teams and projects. The cultural emphasis on relationship-building means that Brazilian team members often develop deep loyalty to companies that treat them well and provide growth opportunities. For startups building long-term teams, this loyalty can be invaluable.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Technical Capabilities: Startup-Ready Skills</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Full-Stack Versatility</h3>\\n\\n\\n\\n<p>Early-stage startups often need developers who can contribute across multiple areas rather than specialists in narrow domains. Brazilian developers frequently possess full-stack capabilities, comfortable working on frontend user interfaces, backend APIs, database design, and deployment infrastructure. This versatility allows startups to build comprehensive products with smaller, more efficient teams.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Modern Technology Stacks</h3>\\n\\n\\n\\n<p>Brazilian developers are typically well-versed in modern, startup-friendly technology stacks. Popular combinations include React/Node.js/PostgreSQL, Python/Django/Redis, and cloud-native architectures using AWS or Google Cloud Platform. Their familiarity with these technologies means faster onboarding and immediate productivity.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Mobile Development Expertise</h3>\\n\\n\\n\\n<p>With Brazil&#8217;s mobile-first digital economy, many Brazilian developers have strong mobile development experience using React Native, Flutter, Swift, or Kotlin. For startups developing mobile applications or mobile-responsive web platforms, this expertise is particularly valuable.</p>\\n\\n\\n\\n<div style=\\"background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%); padding: 40px; border-radius: 12px; color: white; text-align: center; margin: 40px 0;\\"> <h3 style=\\"color: white; margin-bottom: 20px; font-size: 28px;\\">Transform Your Startup&#8217;s Technical Capabilities</h3> <p style=\\"font-size: 18px; margin-bottom: 30px; line-height: 1.6;\\">Join hundreds of successful startups who&#8217;ve accelerated growth and extended runway by hiring Brazil&#8217;s top developers. Get your shortlist of qualified candidates in just 3-5 days.</p> <div style=\\"display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;\\"> <a href=\\"https://kaptasglobal.io/build-a-nearshoring-squad/\\" style=\\"background: white; color: #ff6b6b; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;\\">Build Your Squad</a> <a href=\\"https://kaptasglobal.io/direct-hire-services/\\" style=\\"background: rgba(255,255,255,0.2); color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; border: 2px solid white;\\">Start Hiring Today</a> </div> </div>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">DevOps and Infrastructure Skills</h3>\\n\\n\\n\\n<p>Many Brazilian developers understand DevOps principles and can contribute to deployment pipelines, monitoring systems, and infrastructure scaling. This knowledge is crucial for startups that need to move fast but also build reliable, scalable systems from the beginning.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Case Studies: Startups Successfully Scaling with Brazilian Talent</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">FinTech Startup: 60% Cost Reduction, 3x Faster Development</h3>\\n\\n\\n\\n<p>A San Francisco-based fintech startup struggling with domestic hiring costs and timeline pressures partnered with Brazilian developers to build their core platform. By hiring three senior Brazilian developers instead of two domestic engineers, they reduced costs by 60% while accelerating development by 3x due to extended working hours and complementary skill sets.</p>\\n\\n\\n\\n<p>The Brazilian team members contributed not only to development but also to product strategy, suggesting features based on their experience with Brazil&#8217;s advanced mobile payment ecosystem. Within 18 months, the startup had launched successfully and secured Series A funding, with investors specifically noting the efficiency and quality of their technical execution.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">E-commerce Platform: Global Perspective, Local Execution</h3>\\n\\n\\n\\n<p>An e-commerce startup building a global marketplace hired Brazilian developers specifically for their international perspective and experience with diverse market conditions. The Brazilian team members helped design platform features that worked across different payment systems, currencies, and regulatory environments—insights that proved crucial when expanding to Latin American markets.</p>\\n\\n\\n\\n<p>The cultural diversity of the team also improved product design decisions, leading to more inclusive user experiences and broader market appeal. The startup attributed 40% of their international revenue growth to features and improvements suggested by their Brazilian team members.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">SaaS Startup: 24/7 Development Cycle</h3>\\n\\n\\n\\n<p>A B2B SaaS startup used the time zone overlap with Brazil to establish a continuous development cycle. US-based team members would plan features and conduct stakeholder meetings during US business hours, then hand off implementation to Brazilian developers who would work during overlapping hours and continue development into US evening hours.</p>\\n\\n\\n\\n<p>This approach allowed the startup to ship features 50% faster than competitors while maintaining high quality standards. The Brazilian developers&#8217; ability to work independently and make good technical decisions during off-hours was crucial to this success.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Addressing Common Startup Concerns</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Communication and Language Barriers</h3>\\n\\n\\n\\n<p>While language concerns are common among first-time international hiring managers, the reality is that professional Brazilian developers typically have strong English communication skills. The key is establishing clear communication protocols and providing comprehensive project documentation.</p>\\n\\n\\n\\n<p>Successful startups implement regular video calls, use collaborative documentation tools, and encourage over-communication rather than under-communication. Many find that their Brazilian team members become effective communicators who help improve overall team communication practices.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Time Zone Management</h3>\\n\\n\\n\\n<p>Rather than viewing time zone differences as obstacles, successful startups leverage them as advantages. The overlap between Brazilian time (GMT-3) and US time zones provides substantial collaborative hours while extending total development time.</p>\\n\\n\\n\\n<p>Effective practices include scheduling core collaboration hours that work for all team members, using asynchronous communication tools for non-urgent matters, and establishing clear handoff procedures for work that spans time zones.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Legal and Compliance Considerations</h3>\\n\\n\\n\\n<p>Working with international developers requires attention to legal and compliance requirements, but these challenges are manageable with proper guidance. Many startups work with established recruitment partners who handle compliance, contracts, and payroll management, reducing administrative overhead and legal complexity.</p>\\n\\n\\n\\n<p>For startups concerned about intellectual property protection, Brazilian law provides strong IP protections, and contracts can include comprehensive clauses covering work product ownership, confidentiality, and non-compete provisions.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Strategic Implementation: Getting Started</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Assessment and Planning</h3>\\n\\n\\n\\n<p>Before beginning the hiring process, startups should assess their specific needs, technical requirements, and cultural preferences. Consider which roles are best suited for remote work, what communication styles work best for your team, and how to integrate international team members effectively.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Partner Selection</h3>\\n\\n\\n\\n<p>The most effective approach involves partnering with established recruitment firms that specialize in Brazilian talent and understand startup needs. Look for partners who offer comprehensive services including technical screening, cultural fit assessment, legal compliance, and ongoing support.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Onboarding and Integration</h3>\\n\\n\\n\\n<p>Successful integration requires thoughtful onboarding processes that help Brazilian developers understand your company culture, product vision, and technical standards. Assign mentors, provide comprehensive documentation, and schedule regular check-ins during the first few months.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Performance and Growth Management</h3>\\n\\n\\n\\n<p>Establish clear performance expectations, provide regular feedback, and create opportunities for professional growth. Many Brazilian developers are highly motivated by learning opportunities and career advancement prospects, making them valuable long-term team members.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">ROI Analysis: Quantifying the Startup Advantage</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Direct Cost Savings</h3>\\n\\n\\n\\n<p>The immediate financial benefits are substantial: hiring Brazilian developers instead of domestic talent can reduce total employment costs by 40-50%. For a startup hiring five developers, annual savings of $300,000-400,000 can extend runway by 12-18 months or fund additional product development.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Accelerated Development Timeline</h3>\\n\\n\\n\\n<p>Faster hiring processes and extended development hours can accelerate product development by 30-50%. For startups racing to market milestones or investor deadlines, this acceleration often has value far exceeding direct cost savings.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Improved Product Quality</h3>\\n\\n\\n\\n<p>Access to diverse perspectives and international experience often leads to better product decisions, more inclusive design, and stronger technical architecture. These improvements can result in higher user satisfaction, better retention rates, and stronger competitive positioning.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Enhanced Scalability</h3>\\n\\n\\n\\n<p>Building distributed teams from the beginning prepares startups for global scaling. Experience managing international talent, remote collaboration tools, and cross-cultural communication becomes valuable as companies grow and expand to new markets.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Future Considerations and Strategic Planning</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Long-term Team Building</h3>\\n\\n\\n\\n<p>Many startups find that their initial Brazilian hires become core team members who contribute to strategic planning, mentoring new hires, and representing company culture. Consider how international team members can grow into leadership roles as your company scales.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Market Expansion Opportunities</h3>\\n\\n\\n\\n<p>Brazilian team members often provide valuable insights for Latin American market expansion. Their understanding of local cultures, business practices, and technical requirements can accelerate international growth strategies.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Competitive Advantage Sustainability</h3>\\n\\n\\n\\n<p>As more startups discover the advantages of Brazilian talent, early adopters can build sustainable competitive advantages through established relationships, cultural integration, and refined remote collaboration processes. </p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Conclusion: The Strategic Imperative</h2>\\n\\n\\n\\n<p>For US startups in 2025, hiring Brazilian developers isn&#8217;t just a cost-optimization strategy—it&#8217;s a comprehensive approach to building stronger, more capable, and more resilient technical teams. The combination of cost efficiency, technical excellence, cultural alignment, and strategic advantages creates compelling value propositions that extend far beyond simple arbitrage.</p>\\n\\n\\n\\n<p>Startups that embrace Brazilian talent early often build sustainable competitive advantages through better economics, faster development cycles, and more diverse perspectives. As the global talent market continues to evolve, early adoption of international hiring strategies positions companies for long-term success in an increasingly competitive landscape.</p>\\n\\n\\n\\n<p>The question for startup leaders isn&#8217;t whether to consider Brazilian developers, but how quickly they can begin building these strategic partnerships. In a market where every advantage matters, Brazilian talent represents one of the most accessible and impactful opportunities available to ambitious startups ready to think globally while executing locally.</p>\\n","featured_image":"","categories":["Blog"]},{"id":9660,"slug":"managing-remote-brazilian-teams","date":"2025-09-07","title":"Managing Remote Brazilian Teams: Best Practices for Global Success","excerpt":"<p>Successfully managing remote Brazilian development teams requires more than just traditional project management skills—it demands cultural intelligence, strategic communication approaches, and an understanding of the unique dynamics that make Brazilian professionals exceptionally productive in remote environments. Companies that master these management practices often discover that their Brazilian teams become their highest-performing, most innovative, and most [&hellip;]</p>\\n","content":"\\n<p>Successfully managing remote Brazilian development teams requires more than just traditional project management skills—it demands cultural intelligence, strategic communication approaches, and an understanding of the unique dynamics that make Brazilian professionals exceptionally productive in remote environments. Companies that master these management practices often discover that their Brazilian teams become their highest-performing, most innovative, and most loyal contributors.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Understanding the Brazilian Professional Mindset</h2>\\n\\n\\n\\n<p>Brazilian workplace culture emphasizes relationships, collaboration, and collective problem-solving in ways that can significantly enhance remote team productivity when properly leveraged. Unlike cultures that prioritize individual achievement above all else, Brazilian professionals thrive in environments where personal connections support professional excellence.</p>\\n\\n\\n\\n<p>This relationship-oriented approach translates into several management advantages. Brazilian team members typically invest deeply in understanding project goals, stakeholder needs, and long-term business objectives. They&#8217;re more likely to proactively identify potential issues, suggest improvements, and contribute ideas beyond their immediate technical responsibilities.</p>\\n\\n\\n\\n<p>The Brazilian concept of &#8220;jeitinho brasileiro&#8221;—finding creative, resourceful solutions to complex problems—makes Brazilian developers particularly valuable in startup and innovation environments. This mindset encourages thinking outside conventional boundaries and finding practical solutions when standard approaches fall short.</p>\\n\\n\\n\\n<p>Understanding these cultural foundations allows managers to create environments where Brazilian professionals can excel while contributing their unique perspectives to global teams.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Communication Strategies That Drive Results</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Establishing Clear Communication Protocols</h3>\\n\\n\\n\\n<p>Effective communication with Brazilian teams requires structured approaches that balance formal project requirements with the relationship-building that Brazilian culture values. Successful managers establish communication protocols that include regular check-ins, clear documentation standards, and multiple channels for different types of interactions.</p>\\n\\n\\n\\n<p>Weekly one-on-one meetings provide opportunities for both project updates and relationship building. These sessions should cover current work progress, upcoming challenges, professional development goals, and general well-being. Brazilian professionals often appreciate managers who show genuine interest in their career growth and personal success.</p>\\n\\n\\n\\n<p>Team meetings should combine project-focused discussions with opportunities for broader collaboration and idea sharing. Brazilian team members often contribute valuable insights when given platforms to share perspectives on product strategy, user experience, and business development.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Managing Time Zone Advantages</h3>\\n\\n\\n\\n<p>The favorable time zone alignment between Brazil (GMT-3) and North American business hours (EST/PST) creates opportunities for extended development cycles when managed strategically. Rather than viewing time zones as obstacles, successful managers leverage these differences to create continuous productivity.</p>\\n\\n\\n\\n<p>Establish core collaboration hours that work for all team members, typically late morning to early afternoon in US time zones. Use these hours for meetings, code reviews, planning sessions, and collaborative problem-solving. Outside these core hours, encourage asynchronous work that allows Brazilian team members to make progress during their optimal working hours.</p>\\n\\n\\n\\n<p>Many successful teams implement handoff procedures where US-based team members prepare detailed work specifications during US business hours, allowing Brazilian developers to work independently during overlapping and non-overlapping hours, then review results during the next day&#8217;s collaboration window.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Documentation and Knowledge Sharing</h3>\\n\\n\\n\\n<p>Comprehensive documentation becomes crucial for remote Brazilian teams, but the approach should emphasize clarity and context rather than simply listing requirements. Brazilian professionals often appreciate understanding the reasoning behind decisions, the broader business context, and how their work contributes to larger objectives.</p>\\n\\n\\n\\n<p>Create living documentation that team members can contribute to and improve. Brazilian developers often enhance documentation with practical insights, alternative approaches, and troubleshooting guides based on their implementation experience.</p>\\n\\n\\n\\n<p>Encourage knowledge sharing sessions where Brazilian team members can present their solutions, explain their approaches, and share insights with the broader team. These sessions often become valuable learning opportunities for all team members while recognizing the expertise that Brazilian developers bring.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Performance Management and Goal Setting</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Setting Clear Expectations and Metrics</h3>\\n\\n\\n\\n<p>Brazilian professionals typically respond well to clear expectations combined with autonomy in achieving those goals. Establish specific, measurable objectives while providing flexibility in implementation approaches. This balance allows Brazilian team members to leverage their creative problem-solving skills while ensuring alignment with business requirements.</p>\\n\\n\\n\\n<p>Focus on outcome-based metrics rather than activity-based measurements. Brazilian developers often work most effectively when evaluated on delivered results, code quality, and project contributions rather than hours logged or meetings attended. This approach aligns with the results-oriented aspects of Brazilian work culture.</p>\\n\\n\\n\\n<p>Regular performance reviews should include both quantitative assessments and qualitative feedback. Brazilian professionals often appreciate detailed feedback that helps them understand their strengths, areas for improvement, and opportunities for growth within the organization.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Career Development and Growth Opportunities</h3>\\n\\n\\n\\n<p>Professional development opportunities are particularly important for retaining and motivating Brazilian team members. Many Brazilian developers are highly ambitious and appreciate managers who invest in their long-term career growth rather than viewing them only as short-term resources.</p>\\n\\n\\n\\n<p>Provide access to training resources, conference attendance (virtual or in-person), certification programs, and learning stipends. Many companies find that modest investments in professional development yield significant returns through improved skills, higher motivation, and stronger team loyalty.</p>\\n\\n\\n\\n<p>Create clear advancement pathways that allow Brazilian team members to grow into senior technical roles, team leadership positions, or specialized expertise areas. Many Brazilian professionals are interested in expanding their responsibilities and contributing to strategic decision-making when given appropriate opportunities.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Recognition and Feedback Systems</h3>\\n\\n\\n\\n<p>Brazilian culture values recognition and positive feedback, but the approach should be genuine and specific rather than generic praise. Acknowledge specific contributions, innovative solutions, and collaborative efforts that Brazilian team members provide.</p>\\n\\n\\n\\n<p>Implement peer recognition systems that allow team members to acknowledge each other&#8217;s contributions. Brazilian professionals often excel at recognizing and appreciating their colleagues&#8217; work, creating positive team dynamics when properly facilitated.</p>\\n\\n\\n\\n<p>Public recognition during team meetings, company announcements, or internal communications can be particularly meaningful for Brazilian team members who appreciate being valued as integral parts of the team rather than external contractors.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Building Team Cohesion Across Cultures</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Virtual Team Building and Relationship Development</h3>\\n\\n\\n\\n<p>Creating strong team bonds with remote Brazilian members requires intentional relationship-building activities that go beyond work-focused interactions. Brazilian culture emphasizes personal connections, so successful managers create opportunities for team members to know each other as individuals.</p>\\n\\n\\n\\n<p>Schedule virtual coffee breaks, informal chat sessions, or online team activities that allow for casual conversation and relationship building. Brazilian team members often appreciate opportunities to share aspects of their culture, local perspectives, and personal interests with their colleagues.</p>\\n\\n\\n\\n<p>Consider organizing virtual cultural exchange sessions where Brazilian team members can share insights about Brazilian culture, local tech communities, or regional business practices. These sessions often become valuable learning experiences while strengthening team relationships.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Inclusive Decision-Making Processes</h3>\\n\\n\\n\\n<p>Brazilian professionals often contribute valuable perspectives to strategic and tactical decisions, but they need to feel genuinely included in decision-making processes rather than simply informed of decisions made elsewhere.</p>\\n\\n\\n\\n<p>Create structured opportunities for Brazilian team members to contribute to architectural decisions, product planning, and process improvements. Their international perspective and technical expertise often lead to insights that improve project outcomes.</p>\\n\\n\\n\\n<p>When making decisions that affect the entire team, ensure that Brazilian members have opportunities to provide input and ask questions. This inclusion demonstrates respect for their expertise while leveraging their unique perspectives.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Conflict Resolution and Problem Solving</h3>\\n\\n\\n\\n<p>When conflicts or challenges arise, Brazilian team members often prefer collaborative problem-solving approaches rather than hierarchical directives. Address issues through open discussion, mutual problem-solving, and consensus-building when possible.</p>\\n\\n\\n\\n<p>Brazilian professionals typically respond well to honest, direct communication about challenges while maintaining respect for personal relationships. Frame difficult conversations in terms of solving problems together rather than assigning blame or demanding compliance.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Technology and Tools for Remote Collaboration</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Communication Platform Optimization</h3>\\n\\n\\n\\n<p>Choose communication tools that support both synchronous and asynchronous collaboration while accommodating different communication styles. Brazilian team members often excel at written communication but also value face-to-face video interactions for complex discussions.</p>\\n\\n\\n\\n<p>Implement tools that support code collaboration, document sharing, and project tracking in ways that provide visibility without creating micromanagement. Brazilian developers typically prefer tools that enhance their productivity rather than monitoring their activities.</p>\\n\\n\\n\\n<p>Consider using collaboration platforms that allow for informal communication alongside work-focused channels. Many successful teams create virtual spaces for casual conversation, cultural sharing, and relationship building that parallel formal project channels.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Development Environment and Infrastructure</h3>\\n\\n\\n\\n<p>Ensure that Brazilian team members have access to the same development tools, environments, and resources as local team members. Inconsistent access to tools or resources can create unnecessary barriers to productivity and team integration.</p>\\n\\n\\n\\n<p>Provide clear guidelines for development environment setup, coding standards, and deployment procedures while allowing flexibility for individual preferences and local considerations.</p>\\n\\n\\n\\n<p>Consider providing hardware stipends or direct equipment provision to ensure consistent development environments and reliable connectivity. This investment often pays dividends through improved productivity and professional satisfaction.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Legal and Administrative Considerations</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Understanding Employment Models and Compliance</h3>\\n\\n\\n\\n<p>Work with legal and HR professionals who understand Brazilian employment law and international contracting requirements. The choice between PJ (contractor) and CLT (employee) models should align with both business needs and individual preferences while ensuring full legal compliance.</p>\\n\\n\\n\\n<p>Establish clear contracts that cover intellectual property rights, confidentiality requirements, and work product ownership while respecting Brazilian legal frameworks and cultural expectations.</p>\\n\\n\\n\\n<p>Consider working with established employment partners who can handle payroll, tax compliance, and administrative requirements, allowing you to focus on team management rather than legal complexity.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Payment and Benefits Administration</h3>\\n\\n\\n\\n<p>Implement reliable, timely payment systems that accommodate Brazilian banking and currency requirements. Late or inconsistent payments can significantly damage relationships with Brazilian team members who often have financial commitments based on expected payment schedules.</p>\\n\\n\\n\\n<p>Consider offering benefits that are meaningful in the Brazilian context, such as professional development stipends, health insurance contributions, or equipment allowances. These benefits often have high perceived value while representing reasonable costs for international employers.</p>\\n\\n\\n\\n<p>Be transparent about payment schedules, currency exchange considerations, and any administrative requirements that affect compensation. Brazilian professionals appreciate clear, predictable financial arrangements that allow them to plan effectively.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Measuring Success and Continuous Improvement</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Key Performance Indicators for Remote Brazilian Teams</h3>\\n\\n\\n\\n<p>Track both quantitative and qualitative metrics that reflect the unique contributions of Brazilian team members. Quantitative measures might include code quality scores, feature delivery timelines, bug resolution rates, and technical innovation contributions.</p>\\n\\n\\n\\n<p>Qualitative assessments should include team collaboration effectiveness, cultural integration success, knowledge sharing contributions, and long-term retention rates. Brazilian team members often contribute value that extends beyond immediate technical deliverables.</p>\\n\\n\\n\\n<p>Monitor team satisfaction scores, engagement levels, and professional development progress to ensure that Brazilian members feel valued and integrated into the broader team culture.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Feedback Loops and Process Refinement</h3>\\n\\n\\n\\n<p>Implement regular feedback sessions where Brazilian team members can share insights about management approaches, communication effectiveness, and process improvements. Their international perspective often reveals opportunities for enhancement that might not be apparent to domestic team members.</p>\\n\\n\\n\\n<p>Create safe spaces for honest feedback about what works well and what could be improved in the remote collaboration experience. Brazilian professionals often provide thoughtful, constructive suggestions when they feel their input is genuinely valued.</p>\\n\\n\\n\\n<p>Use feedback to continuously refine communication protocols, collaboration tools, and team processes. The most successful remote teams evolve their practices based on real experience rather than theoretical best practices.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Advanced Management Strategies</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Leveraging Brazilian Innovation and Creativity</h3>\\n\\n\\n\\n<p>Create opportunities for Brazilian team members to contribute to product innovation, technical architecture decisions, and business strategy development. Their international perspective and creative problem-solving approaches often lead to breakthrough solutions.</p>\\n\\n\\n\\n<p>Encourage Brazilian developers to share insights from the Brazilian tech ecosystem, including emerging technologies, innovative approaches, and market trends that might be relevant to your business.</p>\\n\\n\\n\\n<p>Consider establishing innovation time or hackathon events where Brazilian team members can explore creative projects, experiment with new technologies, or develop proof-of-concept solutions for business challenges.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Building Long-term Strategic Partnerships</h3>\\n\\n\\n\\n<p>View relationships with Brazilian team members as long-term strategic partnerships rather than short-term hiring arrangements. Many of the most successful international teams develop multi-year relationships that become increasingly valuable over time.</p>\\n\\n\\n\\n<p>Create advancement pathways that allow exceptional Brazilian professionals to grow into leadership roles, technical specialization areas, or strategic advisory positions within your organization.</p>\\n\\n\\n\\n<p>Consider establishing Brazilian team members as regional experts or cultural ambassadors who can help guide future hiring decisions, market expansion strategies, or product localization efforts. </p>\\n\\n\\n\\n<div style=\\"background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 40px; border-radius: 12px; color: white; text-align: center; margin: 40px 0;\\"> <h3 style=\\"color: white; margin-bottom: 20px; font-size: 28px;\\">Ready to Optimize Your Remote Brazilian Team?</h3> <p style=\\"font-size: 18px; margin-bottom: 30px; line-height: 1.6;\\">Get expert guidance on managing and scaling your Brazilian development team. Our specialists provide ongoing support to ensure your remote collaboration drives maximum results.</p> <div style=\\"display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;\\"> <a href=\\"https://kaptasglobal.io/dedicated-tech-recruiter-bpo/\\" style=\\"background: white; color: #4facfe; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;\\">Get Dedicated Support</a> <a href=\\"https://kaptasglobal.io/contractor-services/\\" style=\\"background: rgba(255,255,255,0.2); color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; border: 2px solid white;\\">Explore Team Options</a> </div> </div>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Common Challenges and Proven Solutions</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Overcoming Initial Integration Hurdles</h3>\\n\\n\\n\\n<p>The first 90 days of working with Brazilian team members are crucial for establishing effective collaboration patterns. Common challenges include communication style differences, work rhythm adjustments, and cultural integration barriers.</p>\\n\\n\\n\\n<p>Address these challenges proactively through structured onboarding programs, cultural orientation sessions, and regular check-ins during the initial period. Many successful teams assign cultural mentors or buddies who can help new Brazilian members navigate company culture while sharing their perspectives.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Managing Expectations and Deliverables</h3>\\n\\n\\n\\n<p>Clear expectation setting becomes crucial when working across cultures and time zones. Brazilian professionals often appreciate detailed context about project goals, business requirements, and success criteria rather than simple task assignments.</p>\\n\\n\\n\\n<p>Provide comprehensive project briefs that explain not just what needs to be done, but why it matters, how it fits into larger objectives, and what success looks like. This context allows Brazilian team members to contribute more effectively and suggest improvements based on their understanding of the broader goals.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Scaling Team Management Practices</h3>\\n\\n\\n\\n<p>As Brazilian teams grow, management approaches need to scale while maintaining the personal relationships and cultural sensitivity that drive success. Consider implementing team lead structures where experienced Brazilian professionals help manage and mentor newer team members.</p>\\n\\n\\n\\n<p>Develop standardized onboarding processes, communication protocols, and performance management systems that can accommodate growth while preserving the cultural awareness and relationship focus that makes Brazilian teams successful.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Future-Proofing Your Remote Management Approach</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Adapting to Evolving Work Patterns</h3>\\n\\n\\n\\n<p>The remote work landscape continues to evolve, and successful management approaches must adapt to changing technologies, expectations, and business requirements. Brazilian professionals often embrace new collaboration tools and working methodologies, making them valuable partners in developing future-ready work practices.</p>\\n\\n\\n\\n<p>Stay current with emerging collaboration technologies, project management methodologies, and remote team best practices while maintaining the cultural sensitivity and relationship focus that makes Brazilian teams thrive.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Building Sustainable Growth Strategies</h3>\\n\\n\\n\\n<p>Plan for long-term success by developing management capabilities that can scale with team growth and business expansion. Consider how successful practices with Brazilian teams can inform broader remote work strategies and international team management approaches.</p>\\n\\n\\n\\n<p>Document successful practices, refine management processes, and develop internal expertise that can support continued growth in international team collaboration.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Conclusion: Mastering the Art of Remote Brazilian Team Management</h2>\\n\\n\\n\\n<p>Successfully managing remote Brazilian teams requires a sophisticated understanding of cultural dynamics, communication strategies, and collaborative technologies. However, companies that invest in developing these capabilities often discover that their Brazilian teams become among their most productive, innovative, and loyal contributors.</p>\\n\\n\\n\\n<p>The key lies in recognizing that effective management of Brazilian professionals extends beyond traditional project management to encompass relationship building, cultural integration, and strategic collaboration. When properly implemented, these management approaches create synergies that benefit not just Brazilian team members, but entire organizations through improved collaboration practices, enhanced innovation capabilities, and stronger team cultures.</p>\\n\\n\\n\\n<p>The investment in developing sophisticated remote management capabilities pays dividends that extend far beyond immediate project deliverables. Companies that excel at managing Brazilian teams often find that they&#8217;ve developed competitive advantages in remote collaboration, international expansion, and global talent acquisition that serve them well across all aspects of their business operations.</p>\\n\\n\\n\\n<p>For organizations committed to building world-class distributed teams, mastering the management of Brazilian professionals represents both a strategic opportunity and a pathway to global excellence in remote collaboration.</p>\\n","featured_image":"","categories":["Blog"]},{"id":9658,"slug":"brazilian-vs-other-nearshore-development-options","date":"2025-09-07","title":"Cost Analysis: Brazilian vs Other Nearshore Development Options in 2025","excerpt":"<p>The global competition for tech talent has fundamentally transformed hiring economics, forcing companies to carefully evaluate the total cost of ownership when building development teams. While domestic US hiring costs continue to escalate, nearshore options have emerged as strategic alternatives that promise significant cost savings without compromising quality. However, not all nearshore markets offer equivalent [&hellip;]</p>\\n","content":"\\n<p>The global competition for tech talent has fundamentally transformed hiring economics, forcing companies to carefully evaluate the total cost of ownership when building development teams. While domestic US hiring costs continue to escalate, nearshore options have emerged as strategic alternatives that promise significant cost savings without compromising quality. However, not all nearshore markets offer equivalent value propositions. A comprehensive analysis reveals that Brazilian developers provide the most compelling combination of cost efficiency, technical excellence, and strategic advantages in today&#8217;s market.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">The True Cost of US Tech Hiring in 2025</h2>\\n\\n\\n\\n<p>Understanding the value proposition of nearshore hiring requires a clear picture of domestic US hiring costs, which extend far beyond base salaries. The total cost of employing a senior software engineer in the United States now averages $167,000 annually when including all direct and indirect expenses.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Breaking Down US Employment Costs</h3>\\n\\n\\n\\n<p><strong>Base Compensation</strong>: $125,000 &#8211; $180,000 annually for senior developers in major tech markets, with significant variation based on location, technology stack, and company size.</p>\\n\\n\\n\\n<p><strong>Benefits and Insurance</strong>: Health insurance, dental, vision, and life insurance typically add $15,000 &#8211; $25,000 annually per employee.</p>\\n\\n\\n\\n<p><strong>Payroll Taxes and Compliance</strong>: Employer contributions to Social Security, Medicare, unemployment insurance, and workers&#8217; compensation average 10-12% of base salary.</p>\\n\\n\\n\\n<p><strong>Equity Compensation</strong>: Early-stage companies often provide equity packages worth 0.1% &#8211; 2.0% of company valuation, which can represent significant dilution costs.</p>\\n\\n\\n\\n<p><strong>Operational Overhead</strong>: Office space, equipment, software licenses, and administrative costs add approximately $8,000 &#8211; $12,000 per employee annually.</p>\\n\\n\\n\\n<p><strong>Recruitment Costs</strong>: External recruiting fees typically range from 20-30% of first-year salary, with internal recruiting costs adding additional overhead.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Hidden Costs and Opportunity Costs</h3>\\n\\n\\n\\n<p>Beyond direct employment expenses, US hiring involves substantial hidden costs that affect overall business economics. Extended hiring timelines—often 60-90 days for senior positions—create opportunity costs through delayed product development and competitive disadvantages.</p>\\n\\n\\n\\n<p>The competitive nature of US tech hiring often forces companies into bidding wars that drive compensation above planned levels. Retention challenges require ongoing investment in salary increases, promotion paths, and retention bonuses that compound costs over time.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Brazil: The Nearshore Value Leader</h2>\\n\\n\\n\\n<p>Brazilian developers offer exceptional value propositions that address each of the cost challenges associated with US hiring while providing additional strategic advantages.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Comprehensive Cost Analysis: Brazilian Developers</h3>\\n\\n\\n\\n<p><strong>Total Employment Cost</strong>: $92,000 annually for senior-level Brazilian developers, representing a 45% cost reduction compared to equivalent US positions.</p>\\n\\n\\n\\n<p><strong>Breakdown of Brazilian Costs</strong>:</p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Developer compensation: $65,000 &#8211; $75,000 annually</li>\\n\\n\\n\\n<li>Recruitment and management fees: $12,000 &#8211; $18,000 annually</li>\\n\\n\\n\\n<li>Legal and compliance costs: $2,000 &#8211; $3,000 annually</li>\\n\\n\\n\\n<li>Equipment and infrastructure: $3,000 &#8211; $5,000 annually</li>\\n</ul>\\n\\n\\n\\n<p><strong>Time-to-Hire</strong>: 3-5 days for qualified candidates through established recruitment networks, compared to 60-90 days for US positions.</p>\\n\\n\\n\\n<p><strong>Retention Rates</strong>: 85-90% annual retention rates, significantly higher than US industry averages of 68-72%.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Value-Added Benefits Beyond Cost Savings</h3>\\n\\n\\n\\n<p>Brazilian developers provide value that extends beyond immediate cost reductions. The favorable time zone alignment (GMT-3) with US business hours enables continuous development cycles and real-time collaboration that can accelerate project timelines by 25-30%.</p>\\n\\n\\n\\n<p>The technical quality delivered by Brazilian developers consistently matches or exceeds US standards across most technology domains. Many companies report that their Brazilian team members contribute innovative solutions, process improvements, and strategic insights that add measurable business value.</p>\\n\\n\\n\\n<p>Cultural compatibility between Brazilian and US work styles reduces integration friction and management overhead compared to other international hiring options. This compatibility translates into faster onboarding, better team dynamics, and reduced management complexity.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Comparative Analysis: Brazil vs Other Nearshore Markets</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Mexico: Geographic Proximity with Limitations</h3>\\n\\n\\n\\n<p>Mexico offers the closest geographic proximity to the US market, with total employment costs averaging $78,000 annually for senior developers. However, several factors limit Mexico&#8217;s value proposition compared to Brazil.</p>\\n\\n\\n\\n<p><strong>Technical Depth</strong>: While Mexico has a growing tech sector, the depth of technical expertise, particularly in advanced technologies like AI/ML, cloud architecture, and modern development frameworks, remains limited compared to Brazil&#8217;s mature tech ecosystem.</p>\\n\\n\\n\\n<p><strong>Talent Pool Size</strong>: Mexico&#8217;s available talent pool is significantly smaller than Brazil&#8217;s, creating supply constraints that drive up costs and limit scaling opportunities.</p>\\n\\n\\n\\n<p><strong>Time Zone Challenges</strong>: While Mexico shares time zones with the US, this creates competition for working hours rather than the extended development cycles possible with Brazilian teams.</p>\\n\\n\\n\\n<p><strong>Cost Trend Analysis</strong>: Mexican developer costs have increased 15-20% annually over the past three years due to growing demand and limited supply, suggesting less sustainable long-term cost advantages.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Argentina: Technical Excellence with Economic Volatility</h3>\\n\\n\\n\\n<p>Argentina offers exceptional technical talent with total employment costs averaging $85,000 annually for senior developers. However, economic instability creates significant challenges for long-term planning.</p>\\n\\n\\n\\n<p><strong>Economic Volatility</strong>: Argentina&#8217;s economic instability affects currency exchange rates, inflation rates, and overall business predictability. Companies often face unexpected cost increases due to monetary policy changes.</p>\\n\\n\\n\\n<p><strong>Regulatory Complexity</strong>: Argentina&#8217;s employment regulations are complex and frequently changing, creating compliance challenges and administrative overhead that increases total cost of ownership.</p>\\n\\n\\n\\n<p><strong>Talent Retention</strong>: Economic uncertainty and limited career advancement opportunities drive emigration among top technical talent, creating retention challenges for international employers.</p>\\n\\n\\n\\n<p><strong>Infrastructure Limitations</strong>: Inconsistent internet connectivity and power supply issues in some regions can affect productivity and reliability.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Colombia: Emerging Market with Growing Potential</h3>\\n\\n\\n\\n<p>Colombia represents an emerging nearshore option with average costs of $72,000 annually for senior developers. While costs are attractive, several limitations affect overall value propositions.</p>\\n\\n\\n\\n<p><strong>Limited Technical Ecosystem</strong>: Colombia&#8217;s tech ecosystem is still developing, with fewer experienced senior developers and limited expertise in cutting-edge technologies.</p>\\n\\n\\n\\n<p><strong>English Proficiency</strong>: Language barriers remain more significant in Colombia compared to Brazil, potentially affecting communication efficiency and collaboration quality.</p>\\n\\n\\n\\n<p><strong>Scalability Constraints</strong>: The available talent pool for specialized technologies remains limited, making it difficult to scale teams beyond basic development needs.</p>\\n\\n\\n\\n<p><strong>Infrastructure Development</strong>: While improving, Colombia&#8217;s tech infrastructure and support ecosystem lag behind more mature markets like Brazil.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Eastern Europe: High Quality with Geographic Challenges</h3>\\n\\n\\n\\n<p>Countries like Poland, Ukraine, and Romania offer excellent technical talent with costs averaging $95,000 &#8211; $110,000 annually. However, geographic and cultural factors create challenges for US companies.</p>\\n\\n\\n\\n<p><strong>Time Zone Misalignment</strong>: 6-9 hour time differences with the US create significant collaboration challenges and limit real-time interaction opportunities.</p>\\n\\n\\n\\n<p><strong>Cultural Differences</strong>: Greater cultural and business practice differences require more extensive management adaptation and longer integration periods.</p>\\n\\n\\n\\n<p><strong>Geopolitical Risks</strong>: Recent events in Eastern Europe have highlighted geopolitical risks that can affect business continuity and long-term planning.</p>\\n\\n\\n\\n<p><strong>Higher Costs</strong>: While still below US levels, Eastern European developer costs are approaching levels that reduce the financial advantages of international hiring.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">ROI Analysis: Quantifying Brazilian Advantages</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Five-Year Total Cost of Ownership</h3>\\n\\n\\n\\n<p>A comprehensive five-year analysis demonstrates the substantial financial advantages of Brazilian hiring:</p>\\n\\n\\n\\n<p><strong>US Team (5 developers)</strong>: $835,000 total cost</p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Annual employment costs: $167,000 × 5 = $835,000/year</li>\\n\\n\\n\\n<li>Five-year total: $4,175,000</li>\\n</ul>\\n\\n\\n\\n<p><strong>Brazilian Team (5 developers)</strong>: $460,000 total cost</p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Annual employment costs: $92,000 × 5 = $460,000/year</li>\\n\\n\\n\\n<li>Five-year total: $2,300,000</li>\\n</ul>\\n\\n\\n\\n<p><strong>Net Savings</strong>: $1,875,000 over five years, representing a 45% cost reduction.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Productivity and Quality Factors</h3>\\n\\n\\n\\n<p>Brazilian teams often exceed productivity expectations due to several factors:</p>\\n\\n\\n\\n<p><strong>Extended Development Hours</strong>: Time zone overlap allows for effective 10-12 hour development cycles, increasing output by 25-30% compared to single-location teams.</p>\\n\\n\\n\\n<p><strong>Reduced Management Overhead</strong>: Cultural compatibility and strong work ethics reduce management requirements, allowing US-based leaders to focus on strategy rather than day-to-day oversight.</p>\\n\\n\\n\\n<p><strong>Innovation Contributions</strong>: Brazilian developers frequently contribute ideas and improvements that add business value beyond their immediate technical responsibilities.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Risk-Adjusted Returns</h3>\\n\\n\\n\\n<p>When factoring in risk considerations, Brazilian hiring offers superior risk-adjusted returns:</p>\\n\\n\\n\\n<p><strong>Economic Stability</strong>: Brazil&#8217;s stable democracy and mature economy provide predictable business environment with manageable risks.</p>\\n\\n\\n\\n<p><strong>Legal Framework</strong>: Strong intellectual property protections and established business law create secure contracting environments.</p>\\n\\n\\n\\n<p><strong>Currency Stability</strong>: While the Brazilian Real fluctuates against the US Dollar, variations are generally moderate and predictable compared to other emerging markets.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Strategic Cost Considerations</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Scaling Economics</h3>\\n\\n\\n\\n<p>Brazilian hiring offers favorable scaling economics that improve with team size:</p>\\n\\n\\n\\n<p><strong>Small Teams (1-3 developers)</strong>: 40-45% cost savings compared to US hiring <strong>Medium Teams (4-10 developers)</strong>: 45-50% cost savings with improved operational efficiency <strong>Large Teams (10+ developers)</strong>: 50-55% cost savings with dedicated management and infrastructure optimization</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Hidden Value Creation</h3>\\n\\n\\n\\n<p>Brazilian teams often create value that doesn&#8217;t appear in direct cost comparisons:</p>\\n\\n\\n\\n<p><strong>Market Intelligence</strong>: Brazilian developers provide insights into Latin American markets, which represent significant growth opportunities for US companies.</p>\\n\\n\\n\\n<p><strong>Process Innovation</strong>: International perspective often leads to process improvements and efficiency gains that benefit entire organizations.</p>\\n\\n\\n\\n<p><strong>Cultural Diversity</strong>: Diverse teams consistently outperform homogeneous teams in innovation metrics and problem-solving effectiveness.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Implementation Cost Analysis</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Setup and Onboarding Costs</h3>\\n\\n\\n\\n<p><strong>Direct Hiring Approach</strong>: $25,000 &#8211; $40,000 in legal, compliance, and setup costs per team <strong>Recruitment Partner Approach</strong>: $5,000 &#8211; $10,000 in setup costs with ongoing service fees included in monthly rates</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Ongoing Management Costs</h3>\\n\\n\\n\\n<p><strong>Internal Management</strong>: Requires dedicated international HR capabilities and legal compliance expertise <strong>Partner-Managed Services</strong>: Comprehensive management included in service fees, reducing internal overhead</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Technology and Infrastructure Costs</h3>\\n\\n\\n\\n<p><strong>Communication Tools</strong>: $50 &#8211; $100 per developer per month for collaboration platforms <strong>Development Infrastructure</strong>: Cloud-based development environments reduce geographic barriers <strong>Security and Compliance</strong>: VPN access and security protocols add minimal ongoing costs</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Long-term Financial Strategy</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Investment vs. Operational Expense Considerations</h3>\\n\\n\\n\\n<p>Brazilian hiring can be structured as either investment in long-term team building or operational expense for project-based work. Long-term team building approaches often yield higher returns through improved retention, deeper business knowledge, and enhanced innovation contributions.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Currency Hedging and Financial Risk Management</h3>\\n\\n\\n\\n<p>Companies working with Brazilian teams can implement currency hedging strategies to manage exchange rate risk. However, the Brazilian Real&#8217;s relative stability makes aggressive hedging unnecessary for most businesses.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Tax Optimization Opportunities</h3>\\n\\n\\n\\n<p>Working with Brazilian developers through proper legal structures can create tax optimization opportunities while ensuring full compliance with international tax regulations. </p>\\n\\n\\n\\n<div style=\\"background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); padding: 40px; border-radius: 12px; color: white; text-align: center; margin: 40px 0;\\"> <h3 style=\\"color: white; margin-bottom: 20px; font-size: 28px;\\">Calculate Your Potential Savings</h3> <p style=\\"font-size: 18px; margin-bottom: 30px; line-height: 1.6;\\">Discover how much your company can save by hiring Brazilian developers. Our cost analysis specialists will provide a customized comparison based on your specific hiring needs and current costs.</p> <div style=\\"display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;\\"> <a href=\\"https://kaptasglobal.io/mapping-service/\\" style=\\"background: white; color: #11998e; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;\\">Get Custom Analysis</a> <a href=\\"https://kaptasglobal.io/global-executive-search/\\" style=\\"background: rgba(255,255,255,0.2); color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; border: 2px solid white;\\">Explore Executive Options</a> </div> </div>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Industry-Specific Cost Considerations</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">FinTech and Financial Services</h3>\\n\\n\\n\\n<p>Financial services companies benefit particularly from Brazilian developers&#8217; experience with Brazil&#8217;s advanced digital payment ecosystem and mobile banking technologies. Cost savings average 50-55% due to specialized expertise that commands premium rates in the US market.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">E-commerce and Retail Technology</h3>\\n\\n\\n\\n<p>Brazilian developers often have deep experience with international e-commerce platforms and multi-currency systems, providing specialized value for retail technology companies. The international perspective also helps companies avoid costly localization mistakes when expanding globally.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Healthcare Technology</h3>\\n\\n\\n\\n<p>Healthcare technology companies find significant value in Brazilian developers&#8217; experience with diverse healthcare systems and regulatory environments. Cost savings typically range from 45-50% while gaining expertise in international healthcare IT compliance.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Enterprise Software</h3>\\n\\n\\n\\n<p>Enterprise software companies benefit from Brazilian developers&#8217; experience working with diverse business environments and multinational corporations. The cultural adaptability of Brazilian professionals makes them particularly effective for enterprise software that must work across different business cultures.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Risk Assessment and Mitigation</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Financial Risk Factors</h3>\\n\\n\\n\\n<p><strong>Currency Exchange Risk</strong>: Brazilian Real exchange rates can affect costs, but historical volatility is manageable through proper financial planning.</p>\\n\\n\\n\\n<p><strong>Economic Risk</strong>: Brazil&#8217;s stable economy and democratic institutions provide predictable business environment with manageable risks.</p>\\n\\n\\n\\n<p><strong>Inflation Risk</strong>: Brazilian inflation rates are generally predictable and can be factored into long-term financial planning.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Operational Risk Mitigation</h3>\\n\\n\\n\\n<p><strong>Communication Risk</strong>: Strong English proficiency among professional Brazilian developers minimizes communication-related risks.</p>\\n\\n\\n\\n<p><strong>Time Zone Risk</strong>: Favorable time zone overlap reduces coordination risks compared to other international hiring options.</p>\\n\\n\\n\\n<p><strong>Cultural Risk</strong>: Cultural compatibility between Brazilian and US business practices reduces integration and management risks.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Legal and Compliance Risk Management</h3>\\n\\n\\n\\n<p><strong>Contract Risk</strong>: Brazilian legal system provides strong contract enforcement and intellectual property protection.</p>\\n\\n\\n\\n<p><strong>Compliance Risk</strong>: Established legal frameworks and compliance procedures minimize regulatory risks.</p>\\n\\n\\n\\n<p><strong>Data Protection Risk</strong>: Brazil&#8217;s LGPD data protection law aligns with international standards, reducing compliance complexity.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Future Cost Projections and Market Trends</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Brazilian Market Outlook</h3>\\n\\n\\n\\n<p>The Brazilian developer market is expected to continue growing, with supply increasing faster than demand, suggesting stable or improving cost advantages over the next 3-5 years. Government investments in technology education and infrastructure support continued market development.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Competitive Market Analysis</h3>\\n\\n\\n\\n<p>As more companies discover Brazilian talent advantages, demand will increase, but the large talent pool and growing supply suggest that cost advantages will remain significant for the foreseeable future.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Technology Trend Impact</h3>\\n\\n\\n\\n<p>Brazilian developers&#8217; rapid adoption of emerging technologies ensures continued relevance and value as technology stacks evolve. Investment in AI/ML education and cloud technologies positions Brazilian developers well for future market needs.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Conclusion: The Clear Financial Case for Brazilian Talent</h2>\\n\\n\\n\\n<p>The comprehensive cost analysis reveals that Brazilian developers offer the most compelling value proposition in today&#8217;s nearshore market. With 45% cost savings compared to US hiring, superior technical quality, favorable time zone alignment, and cultural compatibility, Brazilian talent provides both immediate financial benefits and long-term strategic advantages.</p>\\n\\n\\n\\n<p>While other nearshore options exist, none match Brazil&#8217;s combination of cost efficiency, technical excellence, market stability, and scalability potential. For companies seeking to optimize their development costs while maintaining or improving technical capabilities, Brazilian developers represent the optimal choice in 2025&#8217;s competitive talent landscape.</p>\\n\\n\\n\\n<p>The question for business leaders isn&#8217;t whether to consider Brazilian talent, but how quickly they can begin realizing these cost advantages while building stronger, more capable development teams. In an environment where every efficiency gain creates competitive advantage, Brazilian developers offer one of the most accessible and impactful opportunities for immediate and sustained cost optimization.</p>\\n\\n\\n\\n<p></p>\\n","featured_image":"","categories":["Blog"]},{"id":9656,"slug":"integrating-brazilian-developers-into-your-us-tech-team","date":"2025-09-07","title":"Cultural Bridge: Integrating Brazilian Developers into Your US Tech Team","excerpt":"<p>The technical skills and cost advantages of Brazilian developers are well-documented, but the most successful international hiring initiatives go beyond these basics to create genuine cultural integration that enhances entire team dynamics. Companies that master the art of cultural bridge-building often discover that their Brazilian team members become catalysts for improved collaboration, innovation, and team [&hellip;]</p>\\n","content":"\\n<p>The technical skills and cost advantages of Brazilian developers are well-documented, but the most successful international hiring initiatives go beyond these basics to create genuine cultural integration that enhances entire team dynamics. Companies that master the art of cultural bridge-building often discover that their Brazilian team members become catalysts for improved collaboration, innovation, and team cohesion that benefits all participants.</p>\\n\\n\\n\\n<p>Understanding and leveraging cultural differences—rather than simply managing them—transforms potential challenges into competitive advantages that strengthen teams and improve business outcomes.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Understanding Brazilian Professional Culture</h2>\\n\\n\\n\\n<p>Brazilian workplace culture reflects broader cultural values that emphasize relationships, collaboration, and creative problem-solving. These characteristics, when properly understood and integrated, become significant assets in modern software development environments.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">The Relationship-First Approach</h3>\\n\\n\\n\\n<p>Brazilian professionals typically invest time in building personal relationships with colleagues before diving into purely task-focused work. This approach, sometimes misunderstood by US managers as inefficiency, actually creates stronger team bonds that improve long-term productivity and collaboration.</p>\\n\\n\\n\\n<p>Brazilian team members often excel at understanding the human dynamics within projects—identifying stakeholder concerns, anticipating user needs, and recognizing potential team friction before it becomes problematic. This emotional intelligence contributes to smoother project execution and better final outcomes.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Collaborative Problem-Solving Philosophy</h3>\\n\\n\\n\\n<p>The Brazilian concept of &#8220;jeitinho brasileiro&#8221;—finding creative, resourceful solutions to complex problems—encourages thinking beyond conventional boundaries. Brazilian developers often approach technical challenges from unique angles, proposing alternative solutions that wouldn&#8217;t occur to teams with more homogeneous backgrounds.</p>\\n\\n\\n\\n<p>This collaborative approach extends to code reviews, architectural decisions, and product strategy discussions. Brazilian developers typically contribute ideas that consider multiple perspectives and stakeholder needs, leading to more robust and user-friendly solutions.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Communication Styles and Preferences</h3>\\n\\n\\n\\n<p>Brazilian communication tends to be more context-rich and relationship-aware than typical US business communication. Brazilian professionals often provide additional background information, consider multiple stakeholder perspectives, and frame technical discussions within broader business contexts.</p>\\n\\n\\n\\n<p>This communication style, while sometimes requiring adjustment, often leads to better project outcomes through more thorough consideration of requirements, constraints, and implications.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Creating Inclusive Integration Strategies</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Onboarding That Honors Cultural Differences</h3>\\n\\n\\n\\n<p>Effective onboarding for Brazilian developers extends beyond technical training to include cultural orientation that helps both Brazilian team members and existing staff understand how to work together effectively.</p>\\n\\n\\n\\n<p>Create onboarding programs that allow Brazilian developers to share their perspectives, experiences, and working preferences while learning about your company culture and expectations. This bidirectional exchange creates mutual understanding rather than one-way adaptation.</p>\\n\\n\\n\\n<p>Include sessions where Brazilian team members can explain their problem-solving approaches, communication preferences, and cultural perspectives that might influence their work style. Similarly, provide clear explanations of US business culture, decision-making processes, and communication norms.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Establishing Communication Protocols</h3>\\n\\n\\n\\n<p>Develop communication guidelines that accommodate different cultural styles while maintaining efficiency and clarity. Brazilian professionals often appreciate more context in project communications, so provide comprehensive project briefs that explain not just what needs to be done, but why it matters and how it fits into larger objectives.</p>\\n\\n\\n\\n<p>Encourage questions and clarifications during meetings rather than assuming that silence indicates understanding. Brazilian culture often emphasizes respect for authority, which might prevent some team members from interrupting with questions even when clarification would be helpful.</p>\\n\\n\\n\\n<p>Create multiple communication channels that support different interaction styles—formal project updates, informal check-ins, collaborative brainstorming sessions, and one-on-one relationship-building conversations.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Building Trust Through Transparency</h3>\\n\\n\\n\\n<p>Brazilian professionals typically respond well to transparency about business objectives, company challenges, and strategic decision-making processes. Including Brazilian team members in strategic discussions demonstrates trust while leveraging their international perspectives.</p>\\n\\n\\n\\n<p>Share company context, market challenges, and business goals in ways that help Brazilian team members understand how their work contributes to larger objectives. This context often leads to more thoughtful technical decisions and innovative solution suggestions.</p>\\n\\n\\n\\n<p>Be honest about cultural differences and potential challenges while emphasizing the value that diverse perspectives bring to the team. Address cultural integration as a mutual learning opportunity rather than a one-way accommodation process.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Leveraging Cultural Strengths for Team Enhancement</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Innovation Through Diverse Perspectives</h3>\\n\\n\\n\\n<p>Brazilian developers often bring fresh perspectives to technical challenges, user experience considerations, and product strategy discussions. Their international experience and different cultural background can reveal assumptions that US-based teams might not recognize.</p>\\n\\n\\n\\n<p>Create structured opportunities for Brazilian team members to contribute to product planning, architectural decisions, and process improvements. Their insights often lead to solutions that are more inclusive, user-friendly, and internationally viable.</p>\\n\\n\\n\\n<p>Encourage Brazilian developers to share insights from the Brazilian tech ecosystem, including emerging technologies, innovative approaches, and market trends that might be relevant to your business.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Enhanced Team Dynamics</h3>\\n\\n\\n\\n<p>Brazilian professionals often excel at team building and collaborative relationships. Their relationship-first approach can improve overall team dynamics by creating stronger personal connections between all team members.</p>\\n\\n\\n\\n<p>Brazilian team members frequently become valuable mediators during conflicts, helping to resolve technical disagreements through collaborative problem-solving approaches that preserve relationships while finding effective solutions.</p>\\n\\n\\n\\n<p>The positive, solution-oriented attitude common in Brazilian culture often improves team morale and resilience during challenging projects or difficult periods.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Global Market Insights</h3>\\n\\n\\n\\n<p>Brazilian developers provide valuable perspectives for companies considering international expansion, particularly in Latin American markets. Their understanding of international business practices, cultural considerations, and technical requirements can inform strategic decisions.</p>\\n\\n\\n\\n<p>Many Brazilian professionals have experience working with diverse international clients, providing insights into different business cultures, technical preferences, and market requirements that can be valuable for global product development.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Addressing Common Integration Challenges</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Communication Style Differences</h3>\\n\\n\\n\\n<p>While Brazilian developers typically have strong English skills, communication style differences can create initial misunderstandings. Address these proactively through clear communication protocols and cultural awareness training for all team members.</p>\\n\\n\\n\\n<p>Brazilian communication often includes more context and relationship considerations than typical US business communication. Rather than viewing this as inefficiency, recognize it as valuable perspective that can improve project outcomes through more thorough consideration of stakeholder needs.</p>\\n\\n\\n\\n<p>Encourage direct communication while respecting cultural preferences for relationship preservation. Create safe spaces for honest feedback and clarification that allow all team members to express concerns or ask questions without cultural barriers.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Time Zone and Work Schedule Coordination</h3>\\n\\n\\n\\n<p>While time zone alignment between Brazil and the US is generally favorable, different cultural approaches to work-life balance and schedule flexibility require thoughtful coordination.</p>\\n\\n\\n\\n<p>Brazilian professionals often appreciate flexible scheduling that accommodates personal commitments and cultural preferences. This flexibility, when properly managed, often leads to higher productivity and job satisfaction.</p>\\n\\n\\n\\n<p>Establish core collaboration hours that work for all team members while allowing flexibility outside those hours. Use the time zone overlap strategically for collaborative work while enabling independent productivity during non-overlapping hours.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Decision-Making Process Integration</h3>\\n\\n\\n\\n<p>Brazilian culture often emphasizes consensus-building and collaborative decision-making, which can differ from more hierarchical US business approaches. Leverage these differences to create more inclusive and thorough decision-making processes.</p>\\n\\n\\n\\n<p>Include Brazilian team members in architectural decisions, product planning, and process improvements. Their collaborative approach often leads to more thoroughly considered decisions with better stakeholder buy-in.</p>\\n\\n\\n\\n<p>Be explicit about decision-making processes, authority levels, and approval requirements to help Brazilian team members understand how to contribute effectively within your organizational structure.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Building Long-term Cultural Integration</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Career Development and Growth Opportunities</h3>\\n\\n\\n\\n<p>Brazilian professionals often have strong career ambitions and appreciate employers who invest in their long-term professional development. Create clear advancement pathways that allow Brazilian team members to grow within your organization.</p>\\n\\n\\n\\n<p>Provide access to training resources, conference attendance, certification programs, and learning stipends. Many companies find that modest investments in professional development yield significant returns through improved skills, higher motivation, and stronger team loyalty.</p>\\n\\n\\n\\n<p>Consider how exceptional Brazilian professionals can grow into leadership roles, technical specialization areas, or strategic advisory positions within your organization.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Cultural Exchange and Team Building</h3>\\n\\n\\n\\n<p>Organize cultural exchange activities that allow Brazilian team members to share aspects of their culture while learning about US business culture and regional traditions. These activities often strengthen team bonds while increasing cultural awareness.</p>\\n\\n\\n\\n<p>Consider virtual cultural events, international food sharing, language exchange sessions, or presentations about Brazilian business practices and cultural perspectives. These activities often become valuable team-building experiences that benefit all participants.</p>\\n\\n\\n\\n<p>Encourage Brazilian team members to become cultural ambassadors who can help guide future hiring decisions, cultural integration strategies, or international business development efforts.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Recognition and Appreciation Systems</h3>\\n\\n\\n\\n<p>Implement recognition systems that acknowledge the unique contributions that Brazilian team members bring to the organization. Recognize not just technical achievements, but also cultural integration efforts, relationship building, and collaborative contributions.</p>\\n\\n\\n\\n<p>Brazilian culture values recognition and appreciation, but the approach should be genuine and specific rather than generic praise. Acknowledge specific contributions, innovative solutions, and collaborative efforts that Brazilian team members provide.</p>\\n\\n\\n\\n<p>Create peer recognition systems that allow team members to acknowledge each other&#8217;s contributions. Brazilian professionals often excel at recognizing and appreciating their colleagues&#8217; work, creating positive team dynamics when properly facilitated.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Measuring Integration Success</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Quantitative Metrics</h3>\\n\\n\\n\\n<p>Track retention rates, performance scores, and productivity metrics for Brazilian team members compared to overall team averages. Successful integration typically results in above-average performance and retention rates.</p>\\n\\n\\n\\n<p>Monitor project delivery timelines, code quality scores, and innovation contributions to assess the technical impact of cultural integration efforts.</p>\\n\\n\\n\\n<p>Measure team collaboration effectiveness through surveys, 360-degree feedback, and project retrospective assessments that evaluate how well Brazilian team members are integrated into existing workflows.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Qualitative Assessment</h3>\\n\\n\\n\\n<p>Conduct regular feedback sessions with both Brazilian team members and existing staff to assess integration progress and identify areas for improvement.</p>\\n\\n\\n\\n<p>Evaluate team dynamics, communication effectiveness, and overall job satisfaction scores to ensure that cultural integration is creating positive outcomes for all team members.</p>\\n\\n\\n\\n<p>Assess the broader impact of cultural diversity on innovation, problem-solving effectiveness, and team resilience during challenging periods.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Long-term Impact Evaluation</h3>\\n\\n\\n\\n<p>Monitor how cultural integration affects company culture, international business capabilities, and strategic decision-making processes over time.</p>\\n\\n\\n\\n<p>Evaluate whether Brazilian team members become valuable contributors to business strategy, product development, and organizational growth beyond their immediate technical responsibilities.</p>\\n\\n\\n\\n<p>Assess how experience managing cultural integration improves overall organizational capabilities for international expansion and global team management.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Advanced Integration Strategies</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Mentorship and Buddy Systems</h3>\\n\\n\\n\\n<p>Implement mentorship programs that pair Brazilian developers with experienced US team members for cultural and professional guidance. These relationships often become valuable for both participants, creating cross-cultural learning opportunities.</p>\\n\\n\\n\\n<p>Consider reverse mentorship arrangements where Brazilian professionals share international perspectives, emerging technologies, or alternative problem-solving approaches with US team members.</p>\\n\\n\\n\\n<p>Establish buddy systems for new Brazilian hires that provide both practical support and cultural guidance during the initial integration period.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Cross-Cultural Training</h3>\\n\\n\\n\\n<p>Provide cultural awareness training for all team members, not just international hires. This bidirectional approach creates better understanding and more effective collaboration across cultural differences.</p>\\n\\n\\n\\n<p>Include training on communication styles, decision-making preferences, conflict resolution approaches, and work style differences that can affect team dynamics.</p>\\n\\n\\n\\n<p>Develop internal cultural competency that allows your organization to successfully integrate future international hires and expand global operations.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Strategic Cultural Leverage</h3>\\n\\n\\n\\n<p>Position cultural diversity as a strategic advantage that improves product development, market understanding, and innovative capability rather than simply managing it as a compliance requirement.</p>\\n\\n\\n\\n<p>Use insights from Brazilian team members to inform international expansion strategies, product localization efforts, and global market development initiatives.</p>\\n\\n\\n\\n<p>Consider how cultural integration success can become a competitive advantage in attracting top international talent and building globally competitive teams. </p>\\n\\n\\n\\n<div style=\\"background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); padding: 40px; border-radius: 12px; color: #333; text-align: center; margin: 40px 0;\\"> <h3 style=\\"color: #333; margin-bottom: 20px; font-size: 28px;\\">Build Your Culturally Integrated Team</h3> <p style=\\"font-size: 18px; margin-bottom: 30px; line-height: 1.6; color: #555;\\">Create a thriving, diverse team with Brazilian developers who enhance your company culture while delivering exceptional technical results. Our integration specialists provide ongoing support to ensure successful cultural bridge-building.</p> <div style=\\"display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;\\"> <a href=\\"https://kaptasglobal.io/hire-brazilians-with-u-s-or-canada-work-visas/\\" style=\\"background: #333; color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;\\">Hire Visa-Ready Talent</a> <a href=\\"https://kaptasglobal.io/build-a-nearshoring-squad/\\" style=\\"background: rgba(51,51,51,0.1); color: #333; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; border: 2px solid #333;\\">Build Your Squad</a> </div> </div>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Common Cultural Integration Mistakes and How to Avoid Them</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Over-Managing and Micro-Management</h3>\\n\\n\\n\\n<p>Brazilian professionals typically respond better to outcome-based management than micro-management approaches. Avoid excessive oversight that can be interpreted as lack of trust or respect for professional competence.</p>\\n\\n\\n\\n<p>Focus on clear expectations and deliverable requirements while providing autonomy in implementation approaches. This balance allows Brazilian team members to leverage their creative problem-solving skills while ensuring alignment with business objectives.</p>\\n\\n\\n\\n<p>Trust professional competence while providing support and guidance when requested. Brazilian developers often prefer collaborative problem-solving to directive management approaches.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Ignoring Cultural Contributions</h3>\\n\\n\\n\\n<p>Failing to recognize and leverage the unique perspectives that Brazilian team members bring represents a significant missed opportunity. Brazilian professionals often have valuable insights about international markets, alternative technical approaches, and innovative solutions.</p>\\n\\n\\n\\n<p>Create structured opportunities for Brazilian team members to contribute beyond their immediate technical responsibilities. Their international perspective often improves product decisions and strategic planning.</p>\\n\\n\\n\\n<p>Value cultural diversity as a business asset rather than simply tolerating cultural differences as necessary accommodations.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">One-Way Cultural Adaptation</h3>\\n\\n\\n\\n<p>Expecting Brazilian team members to fully adapt to US culture without any reciprocal adjustment from existing team members creates integration barriers and limits potential benefits.</p>\\n\\n\\n\\n<p>Implement bidirectional cultural adaptation where all team members learn to work effectively across cultural differences. This approach often results in improved team dynamics and better collaboration practices.</p>\\n\\n\\n\\n<p>View cultural integration as organizational improvement rather than accommodation of international hires.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Future-Proofing Cultural Integration</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Scaling Integration Practices</h3>\\n\\n\\n\\n<p>As Brazilian teams grow, develop scalable integration practices that maintain cultural awareness and relationship focus while accommodating larger team sizes.</p>\\n\\n\\n\\n<p>Consider establishing Brazilian team leads who can help manage cultural integration for new hires while serving as cultural ambassadors within the broader organization.</p>\\n\\n\\n\\n<p>Document successful integration practices and develop internal expertise that can support continued growth in international team collaboration.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Building Global Competency</h3>\\n\\n\\n\\n<p>Use experience with Brazilian cultural integration to develop broader global team management capabilities that position your organization for international expansion and global talent acquisition.</p>\\n\\n\\n\\n<p>Develop internal cultural competency that allows your organization to successfully integrate talent from multiple international markets and build truly global teams.</p>\\n\\n\\n\\n<p>Position your cultural integration success as a competitive advantage in attracting top international talent and building globally competitive capabilities.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Continuous Improvement and Evolution</h3>\\n\\n\\n\\n<p>Regularly assess and refine cultural integration practices based on feedback from both Brazilian team members and existing staff. Successful integration approaches evolve over time as teams grow and organizational cultures develop.</p>\\n\\n\\n\\n<p>Stay current with evolving work practices, collaboration technologies, and cultural awareness best practices that can improve international team integration.</p>\\n\\n\\n\\n<p>Share successful practices with other organizations and contribute to the broader development of global team management expertise.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Conclusion: The Strategic Value of Cultural Integration</h2>\\n\\n\\n\\n<p>Successfully integrating Brazilian developers into US tech teams requires more than technical onboarding—it demands thoughtful cultural bridge-building that honors differences while creating synergies. Companies that invest in genuine cultural integration often discover that their Brazilian team members become catalysts for improved collaboration, enhanced innovation, and stronger team dynamics that benefit all participants.</p>\\n\\n\\n\\n<p>The goal isn&#8217;t cultural assimilation, but rather cultural integration that leverages diverse perspectives to create stronger, more capable, and more innovative teams. Brazilian professionals bring unique strengths that, when properly integrated, enhance entire organizational capabilities.</p>\\n\\n\\n\\n<p>The strategic value of cultural integration extends far beyond managing international hires. Organizations that excel at cultural bridge-building develop global competencies that serve them well in international expansion, global talent acquisition, and building competitive advantages in increasingly global markets.</p>\\n\\n\\n\\n<p>For companies committed to building world-class teams that combine technical excellence with cultural intelligence, Brazilian developers represent not just a hiring opportunity, but a pathway to organizational transformation that creates lasting competitive advantages in today&#8217;s global business environment.</p>\\n\\n\\n\\n<p></p>\\n","featured_image":"","categories":["Blog"]},{"id":9640,"slug":"employer-of-record-vs-contractor-pj-brazil","date":"2025-09-04","title":"Employer of Record (EOR) in Brazil or Contractor (PJ) &#8211; Which structure fits your remote team","excerpt":"<p>Many international companies plan to hire developers in Brazil as part of a nearshore strategy in Latam. The decision often comes down to two models. Employer of Record provides an employment wrapper with payroll and statutory benefits. Contractor PJ provides a service based route with flexibility and cost efficiency. The right choice depends on compliance [&hellip;]</p>\\n","content":"\\t\\t<div data-elementor-type=\\"wp-post\\" data-elementor-id=\\"9640\\" class=\\"elementor elementor-9640\\" data-elementor-post-type=\\"post\\">\\n\\t\\t\\t\\t<div class=\\"elementor-element elementor-element-772296d8 e-flex e-con-boxed e-con e-parent\\" data-id=\\"772296d8\\" data-element_type=\\"container\\" data-e-type=\\"container\\" data-settings=\\"{&quot;jet_parallax_layout_list&quot;:[]}\\">\\n\\t\\t\\t\\t\\t<div class=\\"e-con-inner\\">\\n\\t\\t\\t\\t<div class=\\"elementor-element elementor-element-2c0e73f elementor-widget elementor-widget-text-editor\\" data-id=\\"2c0e73f\\" data-element_type=\\"widget\\" data-e-type=\\"widget\\" data-widget_type=\\"text-editor.default\\">\\n\\t\\t\\t\\t<div class=\\"elementor-widget-container\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\n<p>Many international companies plan to <strong>hire developers in Brazil</strong> as part of a <strong>nearshore</strong> strategy in <strong>Latam</strong>. The decision often comes down to two models. <strong>Employer of Record</strong> provides an employment wrapper with payroll and statutory benefits. <strong>Contractor PJ</strong> provides a service based route with flexibility and cost efficiency. The right choice depends on compliance needs, speed, control, and retention. For full context on the market and process, keep the pillar guide on<a href=\\"https://kaptasglobal.io/blog/hiring-software-engineers-brazil-latam-complete-guide/?utm_source=chatgpt.com\\"> <strong>hiring software engineers in Brazil and Latam</strong></a> close by.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>What Employer of Record provides</strong></h2>\\n\\n\\n\\n<p>An Employer of Record becomes the legal employer for your professional in Brazil. The provider runs payroll, pays taxes and mandatory benefits, and maintains employment compliance. EOR reduces legal exposure in sensitive cases and is familiar to internal HR teams that prefer employment contracts and benefit packages.</p>\\n\\n\\n\\n<p><strong>Where EOR tends to fit</strong><strong><br></strong> Teams that need employment protections, health benefits, or strict policy alignment<br>Situations with higher risk tolerance needs or heavy internal compliance requirements<br>Roles where stability and benefits are a key part of the employee value proposition</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>What Contractor PJ provides</strong></h2>\\n\\n\\n\\n<p>Contractor PJ is a service relationship between your company and a professional who invoices through their own legal entity. This model is common in technology and can be fully compliant when the engagement reflects service delivery. Success depends on clear scope, results orientation, and a reliable local partner for contracts and payments.</p>\\n\\n\\n\\n<p><strong>Where Contractor PJ tends to fit</strong><strong><br></strong> Product or platform teams that want speed and flexibility<br>Companies testing new lines or expanding quickly without a local entity<br>Scenarios where total cost of ownership must stay lean and variable</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Cost and compliance reality</strong></h2>\\n\\n\\n\\n<p>Total cost under EOR is usually higher because of payroll taxes, social security contributions, and statutory benefits required by employment law. Contractor PJ often delivers a lower total cost of ownership when the relationship is structured correctly and focused on deliverables. For benchmarks and drivers, review the analysis on the<a href=\\"https://kaptasglobal.io/blog/cost-hire-software-engineer-brazil/?utm_source=chatgpt.com\\"> <strong>cost to hire a software engineer in Brazil</strong></a>. If you are comparing legal foundations for contracts and benefits, this overview of<a href=\\"https://kaptasglobal.io/blog/hiring-models-brazil-pj-vs-clt/?utm_source=chatgpt.com\\"> <strong>hiring models in Brazil</strong></a> helps clarify PJ and CLT.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Speed, control, and retention</strong></h2>\\n\\n\\n\\n<p>EOR and Contractor PJ can both onboard quickly through experienced partners. Contractor PJ usually moves faster because there is no employer setup and fewer fixed policies. Day to day control is similar when teams use clear objectives, code review, and documentation standards. For senior talent, retention correlates strongly with impact, autonomy, and growth more than with contract type, provided that compensation is competitive and expectations are explicit.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>How recruitment workflow changes by model</strong></h2>\\n\\n\\n\\n<p><strong>Sourcing</strong><strong><br></strong> For EOR, highlight benefits and career development inside your environment. For PJ, emphasize scope, autonomy, and delivery outcomes.</p>\\n\\n\\n\\n<p><strong>Interview loop</strong><strong><br></strong> For EOR, align values and long term expectations that mirror an employee journey. For PJ, evaluate ownership, estimation accuracy, and async communication.</p>\\n\\n\\n\\n<p><strong>Compensation and offer</strong><strong><br></strong> For EOR, use salary bands compatible with employment law. For PJ, align service rates to impact and seniority. Avoid inflating anchors early and validate expectations after the technical loop.</p>\\n\\n\\n\\n<p><strong>Onboarding</strong><strong><br></strong> For EOR, confirm benefit enrollment and HR policies. For PJ, confirm service scope, collaboration windows, and invoicing cadence.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Decision framework you can apply today</strong></h2>\\n\\n\\n\\n<p>Choose EOR when the role demands statutory benefits, internal HR alignment, or high compliance confidence<br>Choose Contractor PJ when you need faster time to hire, leaner total cost, and flexibility to scale<br>If you are still unsure, this summary on the<a href=\\"https://kaptasglobal.io/blog/best-hiring-model-remote-team-brazil/?utm_source=chatgpt.com\\"> <strong>best hiring model for a remote team in Brazil</strong></a> can help map scenarios by risk, cost, and speed</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Quick comparison</strong></h2>\\n\\n\\n\\n<figure class=\\"wp-block-table\\"><table class=\\"has-fixed-layout\\"><thead><tr><th>Aspect</th><th>Employer of Record</th><th>Contractor PJ</th></tr></thead><tbody><tr><td><strong>Legal basis</strong></td><td>Employment with statutory benefits</td><td>Service contract through personal entity</td></tr><tr><td><strong>Local entity required</strong></td><td>No</td><td>No</td></tr><tr><td><strong>Total cost of ownership</strong></td><td>Higher due to taxes and benefits</td><td>Lean when scoped to deliverables</td></tr><tr><td><strong>Speed of onboarding</strong></td><td>Fast with provider</td><td>Very fast</td></tr><tr><td><strong>Administrative burden</strong></td><td>Low, handled by provider</td><td>Low when supported by a local partner</td></tr><tr><td><strong>Best for</strong></td><td>Benefits-heavy roles and strict compliance</td><td>Agile teams and rapid scaling</td></tr></tbody></table></figure>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Where to go from here</strong></h2>\\n\\n\\n\\n<p>If you plan to move quickly with contractors and want a managed setup, review the outline of<a href=\\"https://kaptasglobal.io/contractor-services/?utm_source=chatgpt.com\\"> <strong>contractor services</strong></a>. If you expect to turn leadership roles into employees later, keep<a href=\\"https://kaptasglobal.io/direct-hire-services/?utm_source=chatgpt.com\\"> <strong>direct hire services</strong></a> in mind for senior and executive searches. When in doubt, align contract type to the working reality you need and keep expectations explicit from the first conversation.</p>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"elementor-element elementor-element-6b0a5b2 elementor-widget elementor-widget-html\\" data-id=\\"6b0a5b2\\" data-element_type=\\"widget\\" data-e-type=\\"widget\\" data-widget_type=\\"html.default\\">\\n\\t\\t\\t\\t<div class=\\"elementor-widget-container\\">\\n\\t\\t\\t\\t\\t<script type=\\"application/ld+json\\">\\n{\\n  \\"@context\\":\\"https://schema.org\\",\\n  \\"@type\\":\\"Organization\\",\\n  \\"name\\":\\"Kaptas Global\\",\\n  \\"url\\":\\"https://kaptasglobal.io/\\",\\n  \\"logo\\":\\"https://kaptasglobal.io/path-to-logo.png\\",\\n  \\"sameAs\\":[\\n    \\"https://www.linkedin.com/company/YOUR-LINKEDIN\\",\\n    \\"https://www.crunchbase.com/organization/YOUR-CRUNCHBASE\\",\\n    \\"https://clutch.co/profile/YOUR-CLUTCH\\",\\n    \\"https://g2.com/your-profile\\"\\n  ],\\n  \\"contactPoint\\":[\\n    {\\"@type\\":\\"ContactPoint\\",\\"contactType\\":\\"sales\\",\\"email\\":\\"contact@kaptasglobal.io\\",\\"areaServed\\":\\"US, Brazil, Latam\\",\\"availableLanguage\\":[\\"English\\",\\"Portuguese\\",\\"Spanish\\"]}\\n  ]\\n}\\n<\/script>\\n\\n<script type=\\"application/ld+json\\">\\n{\\n  \\"@context\\":\\"https://schema.org\\",\\n  \\"@type\\":\\"WebSite\\",\\n  \\"url\\":\\"https://kaptasglobal.io/\\",\\n  \\"name\\":\\"Kaptas Global\\",\\n  \\"potentialAction\\":{\\n    \\"@type\\":\\"SearchAction\\",\\n    \\"target\\":\\"https://kaptasglobal.io/?s={search_term_string}\\",\\n    \\"query-input\\":\\"required name=search_term_string\\"\\n  }\\n}\\n<\/script>\\n\\n<script type=\\"application/ld+json\\">\\n{\\n  \\"@context\\":\\"https://schema.org\\",\\n  \\"@graph\\":[\\n    {\\n      \\"@type\\":\\"WebPage\\",\\n      \\"@id\\":\\"https://kaptasglobal.io/blog/employer-of-record-brazil-or-contractor-pj-which-structure-fits-your-remote-team/\\",\\n      \\"url\\":\\"https://kaptasglobal.io/blog/employer-of-record-brazil-or-contractor-pj-which-structure-fits-your-remote-team/\\",\\n      \\"name\\":\\"Employer of Record in Brazil or Contractor PJ Which structure fits your remote team\\",\\n      \\"isPartOf\\":{\\"@id\\":\\"https://kaptasglobal.io/\\"},\\n      \\"about\\":[\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"employer of record Brazil\\"},\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"contractor Brazil\\"},\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"hire developers in Brazil\\"},\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"Brazil tech talent\\"},\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"nearshore\\"}\\n      ],\\n      \\"primaryImageOfPage\\":{\\"@type\\":\\"ImageObject\\",\\"url\\":\\"FEATURED-IMAGE-URL\\"},\\n      \\"datePublished\\":\\"2025-09-03\\",\\n      \\"dateModified\\":\\"2025-09-03\\",\\n      \\"inLanguage\\":\\"en\\"\\n    },\\n    {\\n      \\"@type\\":\\"Article\\",\\n      \\"headline\\":\\"Employer of Record in Brazil or Contractor PJ Which structure fits your remote team\\",\\n      \\"alternativeHeadline\\":\\"A clear decision guide for nearshore teams in Latam\\",\\n      \\"description\\":\\"Employer of Record in Brazil or Contractor PJ Understand compliance cost speed and retention to choose the right structure for your nearshore team in Latam.\\",\\n      \\"author\\":{\\"@type\\":\\"Organization\\",\\"name\\":\\"Kaptas Global\\"},\\n      \\"publisher\\":{\\"@type\\":\\"Organization\\",\\"name\\":\\"Kaptas Global\\",\\"logo\\":{\\"@type\\":\\"ImageObject\\",\\"url\\":\\"https://kaptasglobal.io/path-to-logo.png\\"}},\\n      \\"mainEntityOfPage\\":{\\"@id\\":\\"https://kaptasglobal.io/blog/employer-of-record-brazil-or-contractor-pj-which-structure-fits-your-remote-team/\\"},\\n      \\"image\\":\\"FEATURED-IMAGE-URL\\",\\n      \\"articleSection\\":[\\n        \\"What Employer of Record provides\\",\\n        \\"What Contractor PJ provides\\",\\n        \\"Cost and compliance reality\\",\\n        \\"Speed control and retention\\",\\n        \\"How recruitment workflow changes by model\\",\\n        \\"Decision framework you can apply today\\",\\n        \\"Quick comparison\\",\\n        \\"Where to go from here\\"\\n      ],\\n      \\"about\\":[\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"Brazilian software engineers\\"},\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"Latam tech market\\"}\\n      ],\\n      \\"inLanguage\\":\\"en\\",\\n      \\"datePublished\\":\\"2025-09-03\\",\\n      \\"dateModified\\":\\"2025-09-03\\"\\n    }\\n  ]\\n}\\n<\/script>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t","featured_image":"https://kaptasglobal.io/wp-content/uploads/2025/09/employer_of_record-768x403.webp","categories":["Hiring in Brazil"]},{"id":9630,"slug":"recruitment-agency-brazil-hire-developers","date":"2025-08-28","title":"Do you need a recruitment agency in Brazil to hire developers","excerpt":"<p>What a local recruitment agency sees that you might miss Many international companies can hire developers in Brazil on their own. Processes look solid on paper and the Latam tech market is full of motivated Brazilian software engineers. Yet a local recruitment agency often sees patterns earlier and more clearly. The result is faster hiring, [&hellip;]</p>\\n","content":"\\t\\t<div data-elementor-type=\\"wp-post\\" data-elementor-id=\\"9630\\" class=\\"elementor elementor-9630\\" data-elementor-post-type=\\"post\\">\\n\\t\\t\\t\\t<div class=\\"elementor-element elementor-element-1b08528c e-flex e-con-boxed e-con e-parent\\" data-id=\\"1b08528c\\" data-element_type=\\"container\\" data-e-type=\\"container\\" data-settings=\\"{&quot;jet_parallax_layout_list&quot;:[]}\\">\\n\\t\\t\\t\\t\\t<div class=\\"e-con-inner\\">\\n\\t\\t\\t\\t<div class=\\"elementor-element elementor-element-651ee7df elementor-widget elementor-widget-text-editor\\" data-id=\\"651ee7df\\" data-element_type=\\"widget\\" data-e-type=\\"widget\\" data-widget_type=\\"text-editor.default\\">\\n\\t\\t\\t\\t<div class=\\"elementor-widget-container\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\n<h2 class=\\"wp-block-heading\\"><strong>What a local recruitment agency sees that you might miss</strong></h2>\\n\\n\\n\\n<p>Many international companies can <strong>hire developers in Brazil</strong> on their own. Processes look solid on paper and the <strong>Latam tech market</strong> is full of motivated <strong>Brazilian software engineers</strong>. Yet a local <strong>recruitment agency</strong> often sees patterns earlier and more clearly. The result is faster hiring, fewer surprises, and better retention in <strong>nearshore</strong> teams.</p>\\n\\n\\n\\n<p>Below are four risk areas where experience in Brazil makes a measurable difference and how to address them through the recruitment process, before an offer is signed.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Double job risk</strong></h2>\\n\\n\\n\\n<p>Moonlighting is not unique to Brazil, but it can be avoided when the screening process actively looks for it.</p>\\n\\n\\n\\n<p><strong>How to map this risk during recruiting</strong><strong><br></strong> • Ask for current engagements with time allocation by week and the expected end date of each engagement. Confirm overlap intentions in a structured availability interview.<br>• Run two live conversations on different days and times to verify realistic overlap and responsiveness.<br>• Include a short timed work simulation with a defined window. You are not measuring code quality alone, you are validating presence and attention in the agreed window.<br>• Request two recent references that can confirm typical working hours, communication habits, and focus. Prioritize direct managers and tech leads from the last twelve to twenty four months.<br>• Use red flag questions that reveal intent, for example how the candidate balances commitments across clients and how they would handle a new urgent request during agreed collaboration hours.<br>• Align the engagement model early so expectations are explicit. For legal context and compliance choices, see this explainer on<a href=\\"https://kaptasglobal.io/blog/hiring-models-brazil-pj-vs-clt/\\"> hiring models in Brazil</a>.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Verifying real English fluency</strong></h2>\\n\\n\\n\\n<p>Everyone looks fluent on Linkedin until the first live conversation. Validate comprehension and clarity with structured steps that simulate real work.</p>\\n\\n\\n\\n<p><strong>How to validate during recruiting</strong><strong><br></strong> • Ask for a short asynchronous writing or voice sample. A design trade off summary or a bug postmortem reveals clarity of thought, structure, and tone.<br>• Mix conversation modes. Start with a short free conversation, then a role play about a recent ticket or incident, followed by a brief technical explanation of a design decision.<br>• Add a ten minute pair review on a small diff. This shows listening, turn taking, and precision under pressure.<br>• Confirm the expected daily overlap and agree on meeting language and documentation standards before proceeding to the offer stage. For collaboration windows, see why the<a href=\\"https://kaptasglobal.io/blog/why-brazils-time-zone-is-an-ideal-fit-for-international-teams/\\"> Brazil time zone is an ideal fit</a>.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Finding salary reality</strong></h2>\\n\\n\\n\\n<p>Candidates track global compensation and may anchor to averages abroad. You want a sustainable middle ground where the professional makes a meaningful leap in Brazil while your company still reduces total cost.</p>\\n\\n\\n\\n<p><strong>How to reach fair numbers without inflating expectations</strong><strong><br></strong> • Do not share ranges early. Ask for the candidate’s current compensation and target by contract type, for example PJ or CLT, and in a single currency for apples to apples comparison.<br>• Keep your internal bands by seniority and stack and anchor the final offer to impact and scope rather than external averages.<br>• Use market data from recent placements and reliable guides to pressure test outliers before extending an offer. For context, review the<a href=\\"https://kaptasglobal.io/blog/cost-hire-software-engineer-brazil/\\"> cost to hire a software engineer in Brazil</a>.<br>• When an expectation is far from reality, give a brief rationale tied to impact, scope, and collaboration model. Offer a review checkpoint linked to measurable outcomes instead of raising the range mid process.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>Candidate questions that reveal red flags</strong></h2>\\n\\n\\n\\n<p>This is not about trick questions you ask. It is about the questions the candidate asks and what they may signal. One question is rarely decisive by itself, but patterns deserve a deeper look during interviews.</p>\\n\\n\\n\\n<p><strong>What to listen for and why</strong><strong><br></strong> • Can I work for more than one company at the same time<br>Signals potential double job risk or divided attention.<br>• Do you track hours or is it trust only<br>On its own it is neutral. Combined with vague availability it may indicate misalignment on accountability.<br>• Is it okay if I use my current employer’s laptop for this role<br>Possible conflict of interest and data security issues.<br>• Can I be paid in USD directly to crypto or through informal channels<br>Compliance and payroll red flags.<br>• Can I work fully asynchronous with no overlap<br>Time zone misfit for teams that require real time interaction.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\"><strong>When to bring in a local recruitment agency</strong></h2>\\n\\n\\n\\n<p>A <strong>recruitment agency in Brazil</strong> does not replace your judgment. It adds a second set of eyes trained for <strong>Brazil tech talent</strong> patterns. During recruiting, a local team can run <strong>talent mapping</strong> by city, calibrate compensation against current offer data, conduct structured references, and organize contractor ready operations when you need to hire developers in Brazil at speed. If you are deciding between models, compare approaches in this overview of the<a href=\\"https://kaptasglobal.io/blog/best-hiring-model-remote-team-brazil/\\"> best hiring model for a remote team in Brazil</a>. For location strategy, see <strong>where the senior talent is</strong> in this guide on<a href=\\"https://kaptasglobal.io/blog/where-to-find-top-tech-talent-in-brazil/\\"> where to find top tech talent in Brazil</a>. For a complete view of the market and process, bookmark the <strong>pillar guide</strong> on<a href=\\"https://kaptasglobal.io/blog/hiring-software-engineers-brazil-latam-complete-guide/\\"> hiring software engineers in Brazil and Latam</a>.</p>\\n\\n\\n\\n<p><strong>A few tips to find the right agency</strong><strong><br></strong> • Look for a recruitment agency in Brazil that works mainly in this market. Many agencies recruit across Latam without deep expertise in the Brazilian context.<br>• Identify in the meeting whether they want to be a partner or only sell a service. No one benefits from agencies that push candidates without fit.<br>• Their level of English may reflect the candidates they reach and the quality of screening.</p>\\n\\n\\n\\n<p>A recruitment agency in Brazil can be a strategic decision, especially if you are starting to build your operations or making your first hires. Picking the right partner that focuses on quality and long term relationship is key for structuring your operations in a new country.</p>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"elementor-element elementor-element-ca85ad9 elementor-widget elementor-widget-html\\" data-id=\\"ca85ad9\\" data-element_type=\\"widget\\" data-e-type=\\"widget\\" data-widget_type=\\"html.default\\">\\n\\t\\t\\t\\t<div class=\\"elementor-widget-container\\">\\n\\t\\t\\t\\t\\t<script type=\\"application/ld+json\\">\\n{\\n  \\"@context\\":\\"https://schema.org\\",\\n  \\"@type\\":\\"Organization\\",\\n  \\"name\\":\\"Kaptas Global\\",\\n  \\"url\\":\\"https://kaptasglobal.io/\\",\\n  \\"logo\\":\\"https://kaptasglobal.io/path-to-logo.png\\",\\n  \\"sameAs\\":[\\n    \\"https://www.linkedin.com/company/YOUR-LINKEDIN\\",\\n    \\"https://www.crunchbase.com/organization/YOUR-CRUNCHBASE\\",\\n    \\"https://clutch.co/profile/YOUR-CLUTCH\\",\\n    \\"https://g2.com/your-profile\\"\\n  ],\\n  \\"contactPoint\\":[\\n    {\\n      \\"@type\\":\\"ContactPoint\\",\\n      \\"contactType\\":\\"sales\\",\\n      \\"email\\":\\"contact@kaptasglobal.io\\",\\n      \\"areaServed\\":\\"US, Brazil, Latam\\",\\n      \\"availableLanguage\\":[\\"English\\",\\"Portuguese\\",\\"Spanish\\"]\\n    }\\n  ]\\n}\\n<\/script>\\n\\n<script type=\\"application/ld+json\\">\\n{\\n  \\"@context\\":\\"https://schema.org\\",\\n  \\"@type\\":\\"WebSite\\",\\n  \\"url\\":\\"https://kaptasglobal.io/\\",\\n  \\"name\\":\\"Kaptas Global\\",\\n  \\"potentialAction\\":{\\n    \\"@type\\":\\"SearchAction\\",\\n    \\"target\\":\\"https://kaptasglobal.io/?s={search_term_string}\\",\\n    \\"query-input\\":\\"required name=search_term_string\\"\\n  }\\n}\\n<\/script>\\n\\n<script type=\\"application/ld+json\\">\\n{\\n  \\"@context\\":\\"https://schema.org\\",\\n  \\"@graph\\":[\\n    {\\n      \\"@type\\":\\"WebPage\\",\\n      \\"@id\\":\\"https://kaptasglobal.io/blog/do-you-need-a-recruitment-agency-in-brazil-to-hire-developers/\\",\\n      \\"url\\":\\"https://kaptasglobal.io/blog/do-you-need-a-recruitment-agency-in-brazil-to-hire-developers/\\",\\n      \\"name\\":\\"Do you need a recruitment agency in Brazil to hire developers\\",\\n      \\"isPartOf\\":{\\"@id\\":\\"https://kaptasglobal.io/\\"},\\n      \\"about\\":[\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"hire developers in Brazil\\"},\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"Brazil tech talent\\"},\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"nearshore\\"},\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"Latam tech market\\"},\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"recruitment agency Brazil\\"}\\n      ],\\n      \\"primaryImageOfPage\\":{\\"@type\\":\\"ImageObject\\",\\"url\\":\\"https://kaptasglobal.io/wp-content/uploads/2025/08/recruitment_agency_brazil_hire_developer.webp\\"},\\n      \\"datePublished\\":\\"2025-08-26\\",\\n      \\"dateModified\\":\\"2025-08-26\\",\\n      \\"inLanguage\\":\\"en\\"\\n    },\\n    {\\n      \\"@type\\":\\"Article\\",\\n      \\"headline\\":\\"Do you need a recruitment agency in Brazil to hire developers\\",\\n      \\"alternativeHeadline\\":\\"What a local recruitment agency sees that you might miss\\",\\n      \\"description\\":\\"Do you need a recruitment agency in Brazil to hire developers Learn how to avoid double job risk verify real English fluency and find salary reality during recruiting for nearshore teams.\\",\\n      \\"author\\":{\\"@type\\":\\"Organization\\",\\"name\\":\\"Kaptas Global\\"},\\n      \\"publisher\\":{\\"@type\\":\\"Organization\\",\\"name\\":\\"Kaptas Global\\",\\"logo\\":{\\"@type\\":\\"ImageObject\\",\\"url\\":\\"https://kaptasglobal.io/path-to-logo.png\\"}},\\n      \\"mainEntityOfPage\\":{\\"@id\\":\\"https://kaptasglobal.io/blog/do-you-need-a-recruitment-agency-in-brazil-to-hire-developers/\\"},\\n      \\"image\\":\\"https://kaptasglobal.io/wp-content/uploads/2025/08/recruitment_agency_brazil_hire_developer.webp\\",\\n      \\"articleSection\\":[\\n        \\"Double job risk\\",\\n        \\"Verifying real English fluency\\",\\n        \\"Finding salary reality\\",\\n        \\"Candidate questions that reveal red flags\\",\\n        \\"When to bring in a local recruitment agency\\",\\n        \\"Quick checklist for recruitment in Brazil\\"\\n      ],\\n      \\"about\\":[\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"Brazilian software engineers\\"},\\n        {\\"@type\\":\\"Thing\\",\\"name\\":\\"talent mapping Brazil\\"}\\n      ],\\n      \\"inLanguage\\":\\"en\\",\\n      \\"datePublished\\":\\"2025-08-26\\",\\n      \\"dateModified\\":\\"2025-08-26\\"\\n    }\\n  ]\\n}\\n<\/script>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t","featured_image":"https://kaptasglobal.io/wp-content/uploads/2025/08/recruitment_agency_brazil_hire_developer-768x403.webp","categories":["Hiring in Brazil"]},{"id":9460,"slug":"hiring-software-engineers-brazil-latam-complete-guide","date":"2025-08-21","title":"Hiring software engineers in Brazil and Latam","excerpt":"<p>A complete guide to build hire and manage remote teams Expanding your remote development team in Latin America gives you access to a highly skilled talent pool. Your choice of engagement model will shape costs, compliance, administrative effort, and long term results. One important challenge to consider is salary negotiation. Candidates in the technology market, [&hellip;]</p>\\n","content":"\\n<h2 class=\\"wp-block-heading\\">A complete guide to build hire and manage remote teams</h2>\\n\\n\\n\\n<p>Expanding your remote development team in Latin America gives you access to a highly skilled talent pool. Your choice of engagement model will shape costs, compliance, administrative effort, and long term results.</p>\\n\\n\\n\\n<p>One important challenge to consider is salary negotiation. Candidates in the technology market, especially when dealing with international companies, often set high expectations for compensation. This can add a layer of complexity to the hiring process and makes it even more important to approach recruitment with a clear strategy. The main engagement models available and how they work are shown below.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Brazil’s expanding tech talent pool</h2>\\n\\n\\n\\n<p>Brazil has one of the largest concentrations of developers in Latam, with active communities in web, mobile, cloud, data, and DevOps. The country combines scale with depth, from enterprise backgrounds to product led startups. Near time zone alignment with North America enables real time collaboration and shorter feedback loops for distributed teams. Senior professionals are accustomed to remote work practices, daily standups, documentation discipline, and async collaboration.</p>\\n\\n\\n\\n<p>Helpful read for regional context: why the <a href=\\"https://kaptasglobal.io/blog/why-brazils-time-zone-is-an-ideal-fit-for-international-teams/\\">Brazil time zone is an ideal fit</a> for international teams.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Education and technical background of Brazilian engineers</h2>\\n\\n\\n\\n<p>Computer science and engineering programs emphasize data structures, algorithms, systems design, and software engineering disciplines. Many professionals start coding early and build practical skills through internships, open source contributions, hackathons, and startup experience. Common stacks include JavaScript, Python, Java, Node, React, React Native, and cloud platforms. There is growing maturity in modern DevOps, infrastructure as code, observability, and platform engineering.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Work culture and soft skills</h2>\\n\\n\\n\\n<p>Communication, ownership, and adaptability are consistent strengths among senior engineers. Professionals are used to collaborating in English with international teams, writing clear documentation, and operating in fast moving environments. The culture values accountability and proactive problem solving which supports remote first and outcome based delivery. Cultural proximity and overlapping hours make cross border management simpler compared to other global regions.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Cost comparison and efficiency</h2>\\n\\n\\n\\n<p>Compensation in Brazil is typically more cost effective than in the United States and Western Europe at similar seniority, especially for product oriented engineers and high demand roles. Total cost varies by city, seniority, and contract structure. The PJ contractor path can optimize costs by avoiding payroll taxes and mandatory benefits under employment law when supported by sound contracts and a reliable local partner. For a practical view of drivers, see the analysis on the <a href=\\"https://kaptasglobal.io/blog/cost-hire-software-engineer-brazil/\\">cost to hire a software engineer in Brazil</a>.</p>\\n\\n\\n\\n<p>Helpful read for structure and compliance: models explained in this guide to <a href=\\"https://kaptasglobal.io/blog/hiring-models-brazil-pj-vs-clt/\\">hiring models in Brazil</a>.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">How to hire in Brazil and Latam</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Contractor PJ: flexibility and speed with structured compliance</h3>\\n\\n\\n\\n<p>The contractor PJ model is the preferred route for many companies looking to hire remote developers. Professionals operate as independent service providers and invoice through their own legal entities. A crucial element for success with this model is the involvement of a local partner specializing in payroll, contract management, and compliance. The partner acts as an intermediary, ensuring that every contract is fully compliant with law, that payments are made promptly, and that both the company and the contractor receive ongoing support. The partner also plays a key role in negotiating and balancing fair salaries with candidates, bringing market knowledge to the table, especially since candidates in the tech market often set high expectations in compensation discussions mainly with abroad companies.</p>\\n\\n\\n\\n<p><strong>Key considerations</strong></p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Fast onboarding without a local entity</li>\\n\\n\\n\\n<li>Cost efficiency since payroll taxes and mandatory benefits of employment do not apply</li>\\n\\n\\n\\n<li>Flexibility to scale and to test markets with minimal commitment</li>\\n\\n\\n\\n<li>Requires solid contracts and a dependable partner to avoid misclassification risks</li>\\n</ul>\\n\\n\\n\\n<p><strong>Best fit</strong><br><br>• Companies that want agility, control over delivery, and minimal administrative burden</p>\\n\\n\\n\\n<p>Helpful read: overview of <strong>PJ versus CLT</strong> in <a href=\\"https://kaptasglobal.io/blog/hiring-models-brazil-pj-vs-clt/\\">hiring models in Brazil</a>.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Direct hire: full control with flexible contracting and recruitment support</h3>\\n\\n\\n\\n<p>Direct hire means your company manages the professional relationship directly. You can hire as employees which usually requires a local entity and full management of payroll statutory benefits and compliance or you can engage talent as direct contractors through a PJ agreement. A recruitment partner can be engaged to identify and assess candidates in any scenario. What changes between models is the contract type and who handles ongoing administration and compliance after onboarding.</p>\\n\\n\\n\\n<p><strong>Key considerations</strong></p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Full control over recruitment compensation and day to day management</li>\\n\\n\\n\\n<li>Flexible to structure as employment or direct contractor agreements</li>\\n\\n\\n\\n<li>Internal ownership of payroll compliance and HR processes</li>\\n\\n\\n\\n<li>Stronger team integration with higher operational workload</li>\\n</ul>\\n\\n\\n\\n\\n\\n<p>Helpful reads: senior focused searches via <a href=\\"https://kaptasglobal.io/direct-hire-services/\\">direct hire services</a> and leadership roles through <a href=\\"https://kaptasglobal.io/global-executive-search/\\">global executive search</a>.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Employer of record EOR: compliance and convenience at a premium</h3>\\n\\n\\n\\n<p>An EOR provider is the legal employer on your behalf and manages contracts payroll taxes and statutory benefits under employment law. EOR ensures full compliance and can reduce legal risk. Total cost is usually higher than the contractor model because of payroll taxes social security contributions and mandatory benefits that an employer must provide.</p>\\n\\n\\n\\n<p><strong>Key considerations</strong></p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Maximum compliance with employment protections and benefits</li>\\n\\n\\n\\n<li>Simplified administration and payroll handled by the provider</li>\\n\\n\\n\\n<li>Higher cost relative to a contractor setup</li>\\n</ul>\\n\\n\\n\\n\\n\\n<p>Context: understand cost dynamics between markets with this comparison of the <a href=\\"https://kaptasglobal.io/blog/cost-hire-software-engineer-brazil/\\">cost to hire a software engineer in Brazil</a>.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Outsourcing: speed and simplicity for projects or squads</h3>\\n\\n\\n\\n<p>Outsourcing is engaging a third party to deliver projects or squads. The provider handles recruitment contracts HR payroll and performance management. This path is efficient for project based or fluctuating demand though control over team culture can be lower.</p>\\n\\n\\n\\n<p><strong>Key considerations</strong></p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Rapid access to assembled teams or niche expertise</li>\\n\\n\\n\\n<li>HR and compliance responsibilities handled by the provider</li>\\n\\n\\n\\n<li>Suitable for project based or rapidly changing roadmaps</li>\\n</ul>\\n\\n\\n\\n\\n\\n<p>Helpful read: planning a nearshore unit with <a href=\\"https://kaptasglobal.io/build-a-nearshoring-squad/\\">build a nearshoring squad</a>.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Quick comparison</h2>\\n\\n\\n\\n<figure>\\n<table>\\n<tbody>\\n<tr>\\n<td><strong>Aspect</strong></td>\\n<td><strong>Contractor (PJ)</strong></td>\\n<td><strong>Direct Hire</strong></td>\\n<td><strong>EOR</strong></td>\\n<td><strong>Outsourcing</strong></td>\\n</tr>\\n<tr>\\n<td>Local entity required</td>\\n<td>No</td>\\n<td>Usually required for employment</td>\\n<td>No</td>\\n<td>No</td>\\n</tr>\\n<tr>\\n<td>Payroll responsibility</td>\\n<td>Partner or intermediary</td>\\n<td>Your company</td>\\n<td>EOR provider</td>\\n<td>Outsourcing partner</td>\\n</tr>\\n<tr>\\n<td>Statutory benefits</td>\\n<td>Not required</td>\\n<td>Required if employment regime</td>\\n<td>Mandatory under law</td>\\n<td>Included in service fee</td>\\n</tr>\\n<tr>\\n<td>Compliance risk</td>\\n<td>Low with good partner</td>\\n<td>High</td>\\n<td>Low</td>\\n<td>Low</td>\\n</tr>\\n<tr>\\n<td>Administrative burden</td>\\n<td>Low</td>\\n<td>High</td>\\n<td>Low</td>\\n<td>Low</td>\\n</tr>\\n<tr>\\n<td>Cost efficiency</td>\\n<td>High</td>\\n<td>Variable</td>\\n<td>Lower due to taxes</td>\\n<td>Variable</td>\\n</tr>\\n<tr>\\n<td>Speed of onboarding</td>\\n<td>Very fast</td>\\n<td>Fast</td>\\n<td>Fast</td>\\n<td>Very fast</td>\\n</tr>\\n<tr>\\n<td>Best for</td>\\n<td>Flexible remote teams</td>\\n<td>Internalization and direct relationship</td>\\n<td>Full compliance or benefits</td>\\n<td>Projects or rapid scaling</td>\\n</tr>\\n</tbody>\\n</table>\\n</figure>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Where to find the best talent</h2>\\n\\n\\n\\n<p>While São Paulo is the largest hub several cities offer strong senior pools and distinct strengths.</p>\\n\\n\\n\\n<p>• <strong>São Paulo</strong>: Broadest pool in product and platform roles and intense competition. Useful for specialized stacks and scale.</p>\\n\\n\\n\\n<p>• <strong>Recife</strong>: Home to Porto Digital with strong ties to UFPE good availability in web mobile and data. Competitive rates for senior talent.</p>\\n\\n\\n\\n<p>• <strong>Porto Alegre</strong>: Mature ecosystem for backend DevOps and infrastructure. English proficiency is often above average and retention can be strong.</p>\\n\\n\\n\\n<p>• <strong>Belo Horizonte</strong>: UFMG drives senior engineering and research. Less saturated than São Paulo which favors retention.</p>\\n\\n\\n\\n<p>• <strong>Florianópolis</strong>: High quality of life and a dense startup scene. Many remote ready seniors with prior international experience.</p>\\n\\n\\n\\n<p>• <strong>Manaus</strong>: Niche skills in mobile embedded and hardware software integration due to local R and D centers.</p>\\n\\n\\n\\n<p>When location precision is important consider a structured <a href=\\"https://kaptasglobal.io/mapping-service/\\">talent mapping</a> before opening roles.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">How to approach and recruit top engineers</h2>\\n\\n\\n\\n<p>Adopt an outbound consultative motion and think value first. Be clear about the problem your team is solving the stack and the level of responsibility. Share compensation ranges early and align expectations through market data. Emphasize impact code quality autonomy and career progression rather than only title. Keep your process predictable mobile friendly and asynchronous friendly to reduce friction.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">What to watch out for</h2>\\n\\n\\n\\n<p>• <strong>Compliance and contract structure</strong>: Misclassification risk exists when the legal structure does not match the working reality. Use proper contracts and a partner to manage details.</p>\\n\\n\\n\\n<p>• <strong>Compensation and currency</strong>: Exchange rate swings and inflation can affect expectations and renewals. Set clear review cycles and currency terms from the start.</p>\\n\\n\\n\\n<p>• <strong>Retention and engagement</strong>: Avoid roles that are pure staff augmentation without product context. Engineers value impact technical direction and growth.</p>\\n\\n\\n\\n<p>• <strong>Process quality</strong>: Slow steps vague feedback or unclear expectations reduce acceptance rates. Keep response times short and interviews purposeful.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">When a partner can help</h2>\\n\\n\\n\\n<p>A specialist partner can streamline sourcing interviewing compensation benchmarking contract structure invoicing and payroll while your team focuses on delivery. This is especially useful when building multi city teams when entering new markets or when you need to compare contractor direct hire EOR and outsourcing paths for different roles.</p>\\n\\n\\n\\n<p>Useful service pages for reference when you need full support: <a href=\\"https://kaptasglobal.io/contractor-services/\\">contractor services</a> and <a href=\\"https://kaptasglobal.io/direct-hire-services/\\">direct hire services</a>.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Frequently asked questions</h2>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Can I hire without a local entity</strong></h3>\\n\\n\\n\\n<p>Yes. Contractor PJ and EOR do not require a local entity. The choice depends on compliance needs and cost structure.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Is EOR more compliant than contractor</strong></h3>\\n\\n\\n\\n<p>EOR uses employment law and includes statutory benefits. Contractor is a service based relationship and is compliant when contracts and operations are structured correctly with a local partner.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Which model is the most cost efficient</strong></h3>\\n\\n\\n\\n<p>Contractor PJ typically has the lowest total cost of ownership. EOR is usually higher due to payroll taxes and benefits required by employment law.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Where are the strongest tech hubs</strong></h3>\\n\\n\\n\\n<p>São Paulo Recife Porto Alegre Belo Horizonte Florianópolis and Manaus are consistent sources of senior talent.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>How do time zones affect delivery</strong></h3>\\n\\n\\n\\n<p>Overlap with North America and Europe favors real time collaboration for discovery reviews and incident response. Learn more about why the <a href=\\"https://kaptasglobal.io/blog/why-brazils-time-zone-is-an-ideal-fit-for-international-teams/\\">Brazil time zone is an ideal fit</a>.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading\\">Final thoughts</h2>\\n\\n\\n\\n<p>No hiring model delivers results in isolation. Whether you choose contractor direct hire EOR or outsourcing the long term success of your remote team will always depend on the quality of your recruitment process. A reliable and assertive talent acquisition strategy is fundamental to ensure that you consistently hire excellent professionals and that your chosen model truly supports performance retention and growth.</p>\\n","featured_image":"https://kaptasglobal.io/wp-content/uploads/2025/08/Map-of-tech-hubs-768x430.jpg","categories":["Hiring in Brazil"]},{"id":9438,"slug":"best-hiring-model-remote-team-brazil","date":"2025-08-14","title":"Best hiring model for remote teams in Brazil","excerpt":"<p>Hiring a remote tech team in Brazil gives your company access to highly skilled professionals in one of the most vibrant nearshore markets in Latin America. Expanding your remote development team in Latin America gives you access to a highly skilled talent pool and one of the most dynamic nearshore markets. Your choice of engagement [&hellip;]</p>\\n","content":"\\n<p><strong>Hiring a remote tech team in Brazil</strong> gives your company access to highly skilled professionals in one of the most vibrant nearshore markets in Latin America. Expanding your remote development team in Latin America gives you access to a highly skilled talent pool and one of the most dynamic nearshore markets. Your choice of engagement model will shape costs, compliance, administrative effort, and long term results when building remote teams with Brazil tech talent.</p>\\n\\n\\n\\n<p>One important challenge to consider is salary negotiation. Candidates in the technology market, especially when dealing with international companies, often set high expectations for compensation. This is especially true for Brazilian engineers and developers, given the growing demand for remote jobs in the Latam tech market. This can add a layer of complexity to the hiring process and makes it even more important to approach recruitment with a clear strategy. The main engagement models available for companies looking to hire developers in Brazil and across the region are shown below.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Contractor (PJ): Flexibility and speed with structured compliance</strong></h3>\\n\\n\\n\\n<p>The contractor PJ model is the preferred route for many companies looking to<a href=\\"https://kaptasglobal.io/blog/hiring-models-brazil-pj-vs-clt/\\"> hire developers in Brazil</a> and tap into Brazil tech talent. In this approach, professionals operate as independent service providers, issuing invoices for their work through their own legal entities, known as Pessoa Jurídica. This structure is common in the technology sector and enables companies to access top talent rapidly, without having to establish a local subsidiary or entity in a Brazilian tech hub.</p>\\n\\n\\n\\n<p>A crucial element for success with this model is the involvement of a local partner specializing in payroll, contract management, and compliance. The partner acts as an intermediary, ensuring that every contract is fully compliant with local law, that payments are made promptly, and that both the company and the contractor receive ongoing support. The partner also plays a key role in negotiating and balancing fair salaries with candidates, bringing market knowledge to the table, especially since candidates in the tech market often set high expectations in compensation discussions mainly with abroad companies.</p>\\n\\n\\n\\n<p>Key considerations:</p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Enables fast and compliant onboarding of professionals even without a local entity<br></li>\\n\\n\\n\\n<li>Highly cost efficient since there are no payroll taxes or mandatory employee benefits, and fees are transparent<br></li>\\n\\n\\n\\n<li>Flexibility to scale your team up or down or to<a href=\\"https://kaptasglobal.io/blog/how-brazilians-are-embracing-global-professionalism/\\"> test new markets with minimal commitment<br></a></li>\\n\\n\\n\\n<li>Requires a solid contract structure and reliable partner to avoid misclassification risks and ensure smooth operations<br></li>\\n</ul>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Direct Hire: Full control with flexible contracting and recruitment support</strong></h3>\\n\\n\\n\\n<p>Direct hire means your company is responsible for managing the professional relationship directly. You can choose to contract talent as formal employees, which often requires a local entity and full management of payroll, statutory benefits, and compliance, or you may engage professionals as contractors (PJ) through a direct agreement. Both models are commonly used for hiring Brazilian engineers and other remote talent.</p>\\n\\n\\n\\n<p>A<a href=\\"https://kaptasglobal.io/direct-hire-services/\\"> recruitment partner</a> can be engaged to help identify, assess, and present the best candidates, streamlining the hiring process. This is true for direct hire as well as for contractor, EOR, and outsourcing models. What changes is the contract structure and who is responsible for ongoing administration and compliance after the hire.</p>\\n\\n\\n\\n<p>Key considerations:</p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Full control over recruitment, compensation, and daily management<br></li>\\n\\n\\n\\n<li>Flexibility to contract talent as either employees or direct contractors<br></li>\\n\\n\\n\\n<li>Recruitment partners can add value by<a href=\\"https://kaptasglobal.io/global-executive-search/\\"> sourcing and vetting candidates, regardless of the contract type<br></a></li>\\n\\n\\n\\n<li>Requires managing all legal, payroll, and compliance processes internally after onboarding<br></li>\\n\\n\\n\\n<li>Enables stronger integration with internal teams but can increase complexity and workload<br></li>\\n</ul>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Employer of Record (EOR): Compliance and convenience at a premium</strong></h3>\\n\\n\\n\\n<p>The EOR model allows companies to employ professionals through a third party provider who acts as the legal employer. The EOR manages employment contracts, payroll, taxes, and all statutory benefits required by law. This approach is especially useful for companies entering the Brazilian market or hiring in Latam tech hubs without a local entity.</p>\\n\\n\\n\\n<p>This model guarantees full compliance, making it attractive for companies that require formal employment relationships and want to minimize legal risks. However, EOR solutions are typically more expensive than the contractor model. This is due to government payroll taxes, social security contributions, and mandatory benefits that the EOR is legally required to provide. All of these factors are reflected in the total cost.</p>\\n\\n\\n\\n<p>Key considerations:</p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Ensures maximum legal protection and peace of mind with all statutory benefits such as social security, vacation, and severance<br></li>\\n\\n\\n\\n<li>Simplifies onboarding and ongoing administration since the EOR handles everything related to employment<br></li>\\n\\n\\n\\n<li>Higher cost compared to the contractor model due to required taxes, benefits, and provider administrative fees<br></li>\\n\\n\\n\\n<li>Best suited for companies operating in highly regulated industries or needing to offer a full benefits package<br></li>\\n</ul>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Outsourcing: Speed and simplicity for projects or squads</strong></h3>\\n\\n\\n\\n<p>Outsourcing means contracting a third party company to deliver<a href=\\"https://kaptasglobal.io/build-a-nearshoring-squad/\\"> technology projects or manage complete teams</a> in Brazil or Latam. The outsourcing provider handles recruitment, HR, contracts, payroll, and performance management, delivering either on a project basis or through ongoing engagement.</p>\\n\\n\\n\\n<p>Key considerations:</p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>Enables rapid access to assembled teams or niche skills in Brazilian tech hubs, without the burden of internal HR management<br></li>\\n\\n\\n\\n<li>Shifts responsibility for compliance and payroll to the provider<br></li>\\n\\n\\n\\n<li>Best for organizations with short term, project based, or highly fluctuating demands<br></li>\\n\\n\\n\\n<li>Direct influence over day to day team culture may be limited<br></li>\\n</ul>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Comparison table: Contractor, Direct Hire, EOR, Outsourcing</strong></h3>\\n\\n\\n\\n<figure class=\\"wp-block-table\\"><table class=\\"has-fixed-layout\\"><tbody><tr><td><strong>Aspect</strong></td><td><strong>Contractor (PJ)</strong></td><td><strong>Direct Hire</strong></td><td><strong>EOR</strong></td><td><strong>Outsourcing</strong></td></tr><tr><td>Local entity required</td><td>No</td><td>Usually required for employment</td><td>No</td><td>No</td></tr><tr><td>Payroll responsibility</td><td>Partner or intermediary</td><td>Your company</td><td>EOR provider</td><td>Outsourcing partner</td></tr><tr><td>Statutory benefits</td><td>Not required</td><td>Required if employment regime</td><td>Mandatory under law</td><td>Included in service fee</td></tr><tr><td>Compliance risk</td><td>Low with good partner</td><td>High</td><td>Low</td><td>Low</td></tr><tr><td>Administrative burden</td><td>Low</td><td>High</td><td>Low</td><td>Low</td></tr><tr><td>Cost efficiency</td><td>High</td><td>Variable</td><td>Lower due to taxes</td><td>Variable</td></tr><tr><td>Speed of onboarding</td><td>Very fast</td><td>Fast</td><td>Fast</td><td>Very fast</td></tr><tr><td>Best for</td><td>Flexible remote teams</td><td>Internalization and direct relationship</td><td>Full compliance or benefits</td><td>Projects or rapid scaling</td></tr></tbody></table></figure>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Questions to ask before deciding</strong></h3>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>What level of compliance and statutory benefits is required for your business or industry<br></li>\\n\\n\\n\\n<li>How important are speed and flexibility in your remote hiring strategy<br></li>\\n\\n\\n\\n<li>Does your organization have the capacity or desire to manage HR, payroll, and compliance internally<br></li>\\n\\n\\n\\n<li>Are your needs long term and strategic, or project based and temporary<br></li>\\n\\n\\n\\n<li>How much operational control do you want over your remote team members<br></li>\\n</ul>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Final thoughts</strong></h3>\\n\\n\\n\\n<p>No hiring model delivers results in isolation. Whether you choose contractor, direct hire, EOR, or outsourcing, the long term success of your remote team will always depend on the quality of your recruitment process. A reliable and assertive talent acquisition strategy is fundamental to ensuring that you consistently hire excellent professionals and that your chosen model truly supports your goals for performance, retention, and growth in Brazil and the nearshore Latam market.</p>\\n","featured_image":"https://kaptasglobal.io/wp-content/uploads/2025/08/contractor_direct_hire_eor_outsourcing_remote_team_brazil-768x403.webp","categories":["Hiring in Brazil"]},{"id":9435,"slug":"where-to-find-top-tech-talent-in-brazil","date":"2025-08-07","title":"Where to find top tech talent in Brazil","excerpt":"<p>When building remote engineering teams in Latin America, many companies start by looking at Brazil. As the region’s largest tech hub, Brazil offers both scale and depth for international hiring. However, understanding where the tech talent is concentrated helps companies make smarter hiring decisions and optimize for retention and cost. Brazil is not a single [&hellip;]</p>\\n","content":"\\n<p>When building remote engineering teams in Latin America, many companies start by looking at Brazil. As the region’s largest tech hub, Brazil offers both scale and depth for international hiring. However, understanding where the tech talent is concentrated helps companies make smarter hiring decisions and optimize for retention and cost.</p>\\n\\n\\n\\n<p>Brazil is not a single market when it comes to technology. Each region has its own tech ecosystem and advantages, from cost-effective hubs to advanced research centers and high retention locations. Below are six key cities every global company should consider when hiring software engineers in Brazil.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>São Paulo</strong></h3>\\n\\n\\n\\n<p>São Paulo is the largest technology market in Brazil and attracts companies like Google, Amazon, Microsoft, and numerous local unicorns. With the widest talent pool and an established startup scene, it is also the most competitive in terms of demand and compensation. For U.S. companies, the<a href=\\"https://kaptasglobal.io/blog/cost-hire-software-engineer-brazil/\\"> cost of hiring software engineers in Brazil</a> is a crucial part of the decision process, especially when compared to local salary standards and the financial advantages of the PJ model.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Recife</strong></h3>\\n\\n\\n\\n<p>Located in the northeast, Recife is home to Porto Digital, one of Latin America’s largest innovation districts. The city’s strong ties with universities, like the Federal University of Pernambuco, produce a steady pipeline of tech talent. Many U.S. and European companies already tap into Recife for skilled software engineers at competitive rates. Companies often succeed here by leveraging<a href=\\"https://kaptasglobal.io/blog/hiring-models-brazil-pj-vs-clt/\\"> flexible hiring models and compliance with local regulations</a>, particularly when working with contractors (PJ). For organizations interested in the practical aspects of onboarding contractors, more details are available on our<a href=\\"https://kaptasglobal.io/contractor-services/\\"> contractor hiring services</a> page.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Porto Alegre</strong></h3>\\n\\n\\n\\n<p>Porto Alegre is known for its mature tech ecosystem, global companies, and a large community of backend, DevOps, and infrastructure specialists.<br>Engineers here tend to value stability and long-term relationships with employers, making Porto Alegre a good choice for companies prioritizing retention. The region’s<a href=\\"https://kaptasglobal.io/blog/why-brazils-time-zone-is-an-ideal-fit-for-international-teams/\\"> time zone</a> also aligns well with U.S. business hours, making collaboration more efficient for distributed teams.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Belo Horizonte</strong></h3>\\n\\n\\n\\n<p>Belo Horizonte is home to UFMG, one of the nation’s best universities in computer science. The local ecosystem is rapidly expanding, with startups, research centers, and R&amp;D hubs from companies like Google and LocalizaLabs. As the market is less saturated than São Paulo, companies often find it easier to retain senior developers who are motivated by challenging projects and opportunities to participate in the<a href=\\"https://kaptasglobal.io/blog/how-brazilians-are-embracing-global-professionalism/\\"> global market</a>.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Florianópolis</strong></h3>\\n\\n\\n\\n<p>Florianópolis stands out for its lifestyle, quality of life, and thriving startup environment led by ACATE. Many experienced engineers here have worked internationally and are attracted to remote-first roles. The city is well known for its high density of remote-ready, English-speaking professionals. For companies looking for highly independent, senior engineers who excel in distributed teams, Florianópolis is a prime location. Professionals who work as contractors here often benefit from a<a href=\\"https://kaptasglobal.io/blog/7-advantages-of-working-as-a-contractor-for-american-companies/\\"> structure that offers both flexibility and international exposure</a>.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Manaus</strong></h3>\\n\\n\\n\\n<p>Manaus, in the North, is often overlooked but plays a strategic role thanks to the presence of Samsung’s R&amp;D center. It attracts engineers specialized in embedded systems and mobile technologies. The city offers access to unique skillsets that are not always found in the larger tech markets.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Why geography matters</strong></h3>\\n\\n\\n\\n<p>Knowing where to look allows companies to optimize their hiring process — whether to reduce costs, target niche expertise, or maximize retention.<br>Each Brazilian region has different salary expectations, communication styles, and engagement patterns. Local<a href=\\"https://kaptasglobal.io/blog/how-brazilian-professionals-save-up-to-70-in-taxes-by-working-remotely-for-international-companies/\\"> tax regulations</a> and hiring structures can also impact the cost-effectiveness of building a nearshore team.<br>Professionals across the country are increasingly seeking global opportunities, embracing new ways of working and finding innovative paths to boost their income through remote contracts with international companies.</p>\\n\\n\\n\\n<p>For a complete guide on<a href=\\"https://kaptasglobal.io/blog/hiring-models-brazil-pj-vs-clt/\\"> hiring structures, cost comparisons, compliance</a>, and maximizing your investment in Brazilian tech talent,<a href=\\"https://kaptasglobal.io/\\"> download our ebook</a> below.</p>\\n","featured_image":"https://kaptasglobal.io/wp-content/uploads/2025/08/where_to_find_top_tech_talent_in_brazil-768x403.webp","categories":["Hiring in Brazil"]},{"id":9426,"slug":"hiring-models-brazil-pj-vs-clt","date":"2025-07-02","title":"How hiring models work in Brazil: PJ vs CLT","excerpt":"<p>When hiring remote software engineers in Latin America, understanding how local employment models work can save you time, reduce legal risk, and simplify operations. Brazil, the region’s largest tech market, offers two primary ways of engaging professionals: CLT and PJ. For international companies, choosing the right model is not just about cost. It directly impacts [&hellip;]</p>\\n","content":"\\n<p>When hiring remote software engineers in Latin America, understanding how local employment models work can save you time, reduce legal risk, and simplify operations. Brazil, the region’s largest tech market, offers two primary ways of engaging professionals: CLT and PJ. For international companies, choosing the right model is not just about cost. It directly impacts flexibility, compliance, and scalability.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading has-medium-font-size\\"><strong>Understanding CLT (W2): Brazil’s full-time employment model</strong></h2>\\n\\n\\n\\n<p>CLT, short for Consolidação das Leis do Trabalho, is Brazil’s standard labor contract. It is comparable to the W2 structure in the United States. Under CLT, employers are responsible for a range of benefits including vacation pay, government pension, health insurance, and severance. This model provides stability for the employee, but it also comes with high employer costs and regulatory obligations.</p>\\n\\n\\n\\n<p>CLT can be a good fit for local companies hiring in-office staff. However, for international organizations, the administrative and legal demands often outweigh the benefits. CLT requires setting up a legal entity in Brazil, managing in-country HR, and complying with local labor laws, which are typically not aligned with the structure of cross-border hiring.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading has-medium-font-size\\"><strong>Understanding PJ (1099): The contractor model</strong></h2>\\n\\n\\n\\n<p>PJ, or Pessoa Jurídica, is the preferred model for hiring remote engineers in Brazil. It is similar to the 1099 contractor approach in the U.S. Under this model, professionals operate through their own legal entity (such as MEI or LTDA), issue monthly invoices, and handle their own taxes and benefits.</p>\\n\\n\\n\\n<p>The PJ model offers several clear advantages:</p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>No local entity or employer obligations<br></li>\\n\\n\\n\\n<li>Fixed and predictable monthly costs<br></li>\\n\\n\\n\\n<li>Full compliance through a contractor framework<br></li>\\n\\n\\n\\n<li>Greater flexibility to scale your team<br></li>\\n</ul>\\n\\n\\n\\n<p>Most Brazilian developers working with U.S. and European clients are already familiar with the PJ model and often prefer it. It gives them access to international opportunities and more autonomy over their careers.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading has-medium-font-size\\"><strong>Why PJ aligns with global hiring strategies</strong></h2>\\n\\n\\n\\n<p>The PJ structure is consistent with contractor-first hiring practices in other Latin American markets like Argentina, Colombia, and Mexico. For U.S. companies, this approach provides important benefits:</p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li>No need to offer local benefits like health insurance or 401(k)<br></li>\\n\\n\\n\\n<li>No Brazilian payroll taxes or employer liabilities<br></li>\\n\\n\\n\\n<li>Flexibility to ramp teams up or down as needed<br></li>\\n\\n\\n\\n<li>Compatibility with standard contractor management systems<br></li>\\n</ul>\\n\\n\\n\\n<p>This is particularly relevant for building nearshore teams in roles such as backend development, QA, DevOps, or design, where timezone compatibility and fast onboarding are essential.</p>\\n\\n\\n\\n<h2 class=\\"wp-block-heading has-medium-font-size\\"><strong>The role of a local partner</strong></h2>\\n\\n\\n\\n<p>Companies can engage contractors through a direct hire or work with a local partner. Even with the PJ model, managing contracts, compliance, and payments correctly is key. A trusted local partner brings the legal infrastructure and operational knowledge to ensure all documentation and onboarding are aligned with Brazilian regulations.</p>\\n\\n\\n\\n<p>There are also cultural and practical considerations. For example, expectations around PTO, national holidays, and sick leave may differ from other countries. A local partner can help manage these nuances, providing a smoother experience for both the company and the professional.</p>\\n\\n\\n\\n<p>This model allows international companies to tap into top-tier Brazilian talent without setting up local operations, while maintaining legal clarity and operational efficiency.</p>\\n","featured_image":"https://kaptasglobal.io/wp-content/uploads/2025/07/PJ-vs-CLT-for-remote-teams-768x512.jpg","categories":["Blog"]},{"id":9409,"slug":"cost-hire-software-engineer-brazil","date":"2025-06-25","title":"How much does it cost to hire a Software Engineer in Brazil?","excerpt":"<p>In a competitive market where top U.S. based engineers can cost between $220,000 and $250,000 annually, many startups and tech companies are exploring Latin America, especially Brazil, as a smarter and more scalable alternative. But what does hiring in Brazil actually cost? A side-by-side cost comparison Here’s how hiring a senior software engineer compares in [&hellip;]</p>\\n","content":"\\n<p>In a competitive market where top U.S. based engineers can cost between <strong>$220,000 and $250,000 annually</strong>, many startups and tech companies are exploring Latin America, especially Brazil, as a smarter and more scalable alternative. But what does hiring in Brazil actually cost?</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>A side-by-side cost comparison</strong></h3>\\n\\n\\n\\n<p>Here’s how hiring a senior software engineer compares in Brazil versus the U.S.:</p>\\n\\n\\n\\n<figure class=\\"wp-block-table\\"><table class=\\"has-fixed-layout\\"><tbody><tr><td><strong>Cost Category</strong></td><td><strong>United States (W2)</strong></td><td><strong>Brazil (Contractor)</strong></td></tr><tr><td>Base salary</td><td>$160,000 – $200,000</td><td>$50,000 – $80,000</td></tr><tr><td>Bonuses and equity</td><td>$10,000 – $25,000</td><td>Not typical</td></tr><tr><td>Health insurance</td><td>$7,000 – $15,000</td><td>N/A</td></tr><tr><td>Payroll taxes</td><td>$10,000 – $15,000</td><td>N/A</td></tr><tr><td>Retirement and benefits</td><td>$5,000 – $10,000</td><td>N/A</td></tr><tr><td><strong>Total</strong></td><td><strong>$220,000 – $250,000</strong></td><td><strong>$50,000 – $80,000</strong></td></tr></tbody></table></figure>\\n\\n\\n\\n<p>That’s <strong>up to 70% in cost savings</strong> without compromising on experience or capability.</p>\\n\\n\\n\\n<p>This comparison is part of a broader guide we created. <a href=\\"https://kaptasglobal.io/ebook/\\">Check out the full ebook for more details</a>.</p>\\n\\n\\n\\n<p><strong>Why the cost is lower without lowering quality</strong></p>\\n\\n\\n\\n<p>Salaries for senior engineers in Brazil typically range from $30,000 to $45,000 when working locally. Working with international clients allows them to <strong>double or even triple their income</strong> while still offering U.S. companies a lower total cost of hiring. It’s a win-win model that benefits both sides.</p>\\n\\n\\n\\n<p>Brazilian professionals also often work under the <strong>PJ model</strong> (Pessoa Jurídica), which is similar to the <strong>1099 contractor structure</strong> in the U.S. This means you do not need to worry about benefits, payroll taxes, or local employment law. If you work with the right partner.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>You do not need to set up a legal entity</strong></h3>\\n\\n\\n\\n<p>Many companies think they need to establish operations locally to hire in Brazil. You don’t. Most companies work with a local partner who already has a legal entity and <a href=\\"https://kaptasglobal.io/contractor-services/\\">infrastructure to handle contracts</a>, compliance, and payments.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Time zones and integration are on your side</strong></h3>\\n\\n\\n\\n<p>Hiring in Brazil gives you <strong>time zone alignment with EST and CST</strong>, which means your engineers are available when your teams are online. Unlike other offshore destinations, Brazil offers real-time collaboration and faster team integration.</p>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\"><strong>Takeaway</strong></h3>\\n\\n\\n\\n<p>Hiring in Brazil can reduce your costs by more than half while giving you access to experienced, English-speaking engineers who are used to working remotely with U.S. companies. If you are scaling and need strong developers without the long hiring cycles or salary pressure of the U.S. market, Brazil may be the best move you have not made yet.</p>\\n\\n\\n\\n<p></p>\\n","featured_image":"https://kaptasglobal.io/wp-content/uploads/2025/06/How-much-does-it-cost-to-hire-a-Software-Engineer-in-Brazil-768x512.jpg","categories":["Blog","Hiring in Brazil"]},{"id":8633,"slug":"7-advantages-of-working-as-a-contractor-for-american-companies","date":"2024-11-14","title":"7 Advantages of Working as a Contractor for American Companies","excerpt":"<p>The Seventh Will Surprise You!Many say that one year working as a contractor for American companies can be equivalent to three years of experience at Brazilian companies. For Brazilian professionals, this is a unique opportunity to strengthen their careers, achieve financial growth, and expand their professional reach on a global scale. Discover the immense advantages! [&hellip;]</p>\\n","content":"\\n<p>The Seventh Will Surprise You!<br>Many say that one year working as a contractor for American companies can be equivalent to three years of experience at Brazilian companies. For Brazilian professionals, this is a unique opportunity to strengthen their careers, achieve financial growth, and expand their professional reach on a global scale. Discover the immense advantages!</p>\\n\\n\\n\\n<p><strong>1.⁠ ⁠</strong>Competitive Salary and Dollar Shielding<br>Working for American companies allows Brazilian professionals to earn in dollars, providing a &#8220;shield&#8221; against Brazil&#8217;s economic instability. Receiving income in a strong currency not only brings financial security but also boosts purchasing power in the local market and allows for career planning that’s less dependent on domestic economic fluctuations.</p>\\n\\n\\n\\n<p><strong>2.⁠ </strong>⁠Flexibility and Quality of Life<br>Remote work provides the freedom to choose where and how to work, without wasting hours on commutes. This flexibility offers a better work-life balance, giving professionals more time for hobbies, family, and self-care. Flexible hours also allow them to perform better in various projects and environments, increasing productivity.</p>\\n\\n\\n\\n<p><strong>3.⁠</strong> ⁠Accelerated Development and Becoming a Global Professional<br>Working with American companies offers a fast-paced and deep development experience. Brazilian professionals have the opportunity to use English daily, improving their fluency and building confidence to work in an international environment. Additionally, exposure to cutting-edge practices, methodologies, and technologies drives continuous learning, helping them develop a global perspective and become more competitive in the market.</p>\\n\\n\\n\\n<p><strong>4.</strong>⁠ ⁠Ongoing Learning and Development<br>American companies highly value continuous development, motivating many Brazilian professionals to invest in English courses, certifications, and other specializations to stay aligned with global demands. This dedication to knowledge strengthens their resumes and prepares them for higher-responsibility roles, widening their career opportunities.</p>\\n\\n\\n\\n<p><strong>5.⁠</strong> ⁠Diverse Experience<br>As contractors, Brazilian professionals have the opportunity to work on diverse, multidisciplinary projects, enriching their professional experience. Exposure to different fields allows them to develop new skills and build a versatile repertoire, helping them adapt to various challenges and making them more resilient and well-rounded.</p>\\n\\n\\n\\n<p><strong>6.⁠ </strong>⁠Tax Advantage: Pay Up to 80% Less in Taxes<br>Brazilian professionals working as contractors for foreign companies can benefit from significantly lower tax burdens, paying up to 80% less in taxes compared to the traditional CLT employment model. With reduced mandatory taxes and no requirement to contribute to social security funds like INSS or FGTS, they retain a larger portion of their income, maximizing financial returns and enhancing quality of life.</p>\\n\\n\\n\\n<p><strong>7.⁠ </strong>⁠Building a Connection with the American Market: A Step Toward the Green Card<br>Working remotely for American companies can also be the first step in building a strong relationship with the U.S. job market. This experience facilitates future job searches within the United States, creating a competitive edge for obtaining a work visa and, potentially, a pathway to a Green Card. A proven track record with American companies and strong references can open doors and increase the chances of a successful transition to the U.S. in the future.</p>\\n\\n\\n\\n<p>Working as a contractor for American companies provides invaluable advantages for Brazilian professionals. From accelerated development to earning in dollars, this choice opens the door to a promising future with benefits that go beyond financial gain. Not only does this experience strengthen careers in Brazil, but it can also be the first step for those dreaming of building a life in the United States.</p>\\n","featured_image":"https://kaptasglobal.io/wp-content/uploads/2024/11/7-Advantages-of-Working-as-a-Contractor-for-American-Companies-768x512.jpg","categories":["Blog"]},{"id":7591,"slug":"how-brazilian-professionals-save-up-to-70-in-taxes-by-working-remotely-for-international-companies","date":"2024-09-05","title":"How Brazilian professionals save up to 70% in taxes by working remotely for international companies","excerpt":"<p>Why Brazilian Professionals Working Remotely for Internacional Companies Pay Up to 70% Less in Taxes Compared to Working for Brazilian CompaniesDid you know that Brazilian professionals working for American and European companies can save up to 70% on taxes compared to working for Brazilian employers? This substantial tax advantage makes remote work for international clients [&hellip;]</p>\\n","content":"\\n<p>Why Brazilian Professionals Working Remotely for Internacional Companies Pay Up to 70% Less in Taxes Compared to Working for Brazilian Companies<br>Did you know that Brazilian professionals working for American and European companies can save up to 70% on taxes compared to working for Brazilian employers? This substantial tax advantage makes remote work for international clients not just a career opportunity, but a financially smart choice.</p>\\n\\n\\n\\n<p>Many professionals are surprised to learn that working for companies based outside Brazil can result in up to a 70% reduction in their tax burden compared to working for Brazilian employers.</p>\\n\\n\\n\\n<p>This article explores the stark differences in tax obligations between traditional employment in Brazil and operating as an independent contractor (self-employed) providing services in technology to international clients. Understanding these tax implications can not only offer peace of mind but also lead to significant financial savings.</p>\\n\\n\\n\\n<p>Tax Comparison: Traditional Employment in Brazil vs. Self-Employed Exporting Services to International Companies<br>Scenario 1: Traditional Employment in Brazil</p>\\n\\n\\n\\n<p>For a professional employed under Brazil’s standard labor laws earning a gross salary of $5,000 USD per month, the tax burden is quite substantial. Here’s how the taxes and contributions break down:</p>\\n\\n\\n\\n<p>Income Tax: The highest income tax rate of 27.5% is applied, resulting in a withholding tax of approximately $1,375 USD.</p>\\n\\n\\n\\n<p>Social Security Contributions: Calculated on the maximum contribution limit, leading to a social security contribution of around $200 USD.</p>\\n\\n\\n\\n<p>Total Taxes and Contributions: The total tax and social security burden amounts to approximately $1,575 USD, which represents around 31.7% of the gross salary.<br>Scenario 2: Self-Employed Professional Exporting Services</p>\\n\\n\\n\\n<p>When operating as a self-employed individual or contractor providing services to international clients, Brazilian professionals can benefit from reduced tax rates for services rendered abroad. For the same gross income of $5,000 USD per month, the taxation typically includes:</p>\\n\\n\\n\\n<p>Income Tax on Services Exported: Brazilian tax law offers significant reductions in tax rates for services exported to foreign clients. In this case, the effective tax rate can be as low as 11.7%, translating to approximately $585 USD in taxes.</p>\\n\\n\\n\\n<p>Additional Obligations: Aside from income tax, the only other tax applicable is the Export Tax on Services, which is generally minimal or even zero, depending on specific agreements and exemptions.</p>\\n\\n\\n\\n<p>Total Taxes and Contributions: For self-employed professionals exporting services, the total tax burden can be around $585 USD, which is about 11.7% of the gross income.</p>\\n\\n\\n\\n<p>Significant Tax Savings: By working for international clients, Brazilian professionals can reduce their tax burden by up to 70% compared to traditional employment. For a gross income of $5,000 USD, this represents a potential saving of about $990 USD in taxes.</p>\\n","featured_image":"https://kaptasglobal.io/wp-content/uploads/2024/09/How-Brazilian-Professionals-Save-Up-to-70-in-Taxes-by-Working-Remotely-for-International-Companies-768x512.jpg","categories":["Blog"]},{"id":7532,"slug":"how-brazilians-are-embracing-global-professionalism","date":"2024-09-03","title":"How Brazilians are embracing global job opportunities","excerpt":"<p>Brazilian professionals are making significant strides in the global job market, capitalizing on the opportunities presented by remote work and digital transformation. This shift is evident in several areas, from the growing emphasis on qualifications to the economic and tax benefits that come with working for foreign companies. Rising Demand for English Proficiency A clear [&hellip;]</p>\\n","content":"\\n<p>Brazilian professionals are making significant strides in the global job market, capitalizing on the opportunities presented by remote work and digital transformation. This shift is evident in several areas, from the growing emphasis on qualifications to the economic and tax benefits that come with working for foreign companies.</p>\\n\\n\\n\\n<div style=\\"height:20px\\" aria-hidden=\\"true\\" class=\\"wp-block-spacer\\"></div>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Rising Demand for English Proficiency</h3>\\n\\n\\n\\n<p>A clear indicator of this trend is the sharp increase in demand for English language courses in Brazil. Notably, the number of technology professionals studying English has increased fivefold since 2020. This highlights the growing awareness of English as a key skill for accessing global opportunities and participating in international projects.</p>\\n\\n\\n\\n<div style=\\"height:20px\\" aria-hidden=\\"true\\" class=\\"wp-block-spacer\\"></div>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Salary Comparisons: Brazil vs. United States and Europe</h3>\\n\\n\\n\\n<p>The technology sector in Brazil is thriving, yet there remains a notable disparity between salaries in Brazil and those in the United States and Europe. For example:</p>\\n\\n\\n\\n<ul class=\\"wp-block-list\\">\\n<li><strong>Software Developers</strong>: In Brazil, the average monthly salary is around $2,000. In the United States, it can reach up to $8,000, and in Europe, approximately $5,500.</li>\\n\\n\\n\\n<li><strong>Sales Development Representatives (SDRs)</strong>: In Brazil, an SDR earns an average of about $1,500 per month, while in the United States, it is around $4,500, and in Europe, about $3,500.</li>\\n\\n\\n\\n<li><strong>Designers</strong>: A designer in Brazil earns an average of $1,800 per month. In the United States, this can go up to $6,500, and in Europe, approximately $4,000.</li>\\n</ul>\\n\\n\\n\\n<p>These salary differences motivate many Brazilian professionals to pursue opportunities with international companies, where they can earn in foreign currencies and, in some cases, achieve a higher standard of living than they would in local employment.</p>\\n\\n\\n\\n<div style=\\"height:20px\\" aria-hidden=\\"true\\" class=\\"wp-block-spacer\\"></div>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Tax Benefits for Brazilian Professionals</h3>\\n\\n\\n\\n<p>In addition to attractive salaries, working remotely for American companies offers significant tax advantages for Brazilian professionals. By providing services to foreign companies, they can benefit from a reduced tax burden compared to working locally. This allows them to retain more of their earnings, boosting both their purchasing power and ability to invest in their careers.</p>\\n\\n\\n\\n<div style=\\"height:20px\\" aria-hidden=\\"true\\" class=\\"wp-block-spacer\\"></div>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Brazil’s Adaptability to Emerging Technologies</h3>\\n\\n\\n\\n<p>Beyond financial incentives, Brazil has shown a strong ability to adopt and adapt to new technologies. Brazilian companies and professionals are increasingly embracing innovations such as artificial intelligence, machine learning, and blockchain to remain competitive. This adaptability positions Brazil as a key source of talent for global companies seeking innovation and efficiency.</p>\\n\\n\\n\\n<div style=\\"height:20px\\" aria-hidden=\\"true\\" class=\\"wp-block-spacer\\"></div>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Conclusion</h3>\\n\\n\\n\\n<p>Brazil stands out as a country with professionals increasingly prepared to take on leadership roles in the global market. The growing demand for English proficiency, significant tax benefits, and rapid adoption of new technologies make Brazil an attractive location for international companies seeking top talent. Kaptas Global is here to connect your company with the best Brazilian professionals ready to excel in the global arena.</p>\\n","featured_image":"https://kaptasglobal.io/wp-content/uploads/2024/09/How-Brazilians-are-embracing-global-professionalism-768x512.jpg","categories":["Blog"]},{"id":7342,"slug":"why-brazils-time-zone-is-an-ideal-fit-for-international-teams","date":"2024-08-29","title":"Why Brazil’s time zone is an ideal fit for international teams","excerpt":"<p>As companies continue to source talent across borders, aligning time zones has become a key factor in the success of remote teams. Brazil, with its advantageous location, offers a valuable alignment for American and Canadian companies. The country is just 4 hours ahead of San Francisco, 2 hours ahead of Austin, and only 1 hour [&hellip;]</p>\\n","content":"\\n<p>As companies continue to source talent across borders, aligning time zones has become a key factor in the success of remote teams. Brazil, with its advantageous location, offers a valuable alignment for American and Canadian companies. The country is just 4 hours ahead of San Francisco, 2 hours ahead of Austin, and only 1 hour ahead of New York. This proximity simplifies communication and coordination, making Brazil a strategic choice for enhancing team efficiency and productivity.</p>\\n\\n\\n\\n<div style=\\"height:20px\\" aria-hidden=\\"true\\" class=\\"wp-block-spacer\\"></div>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Understanding Time Zone Alignment</h3>\\n\\n\\n\\n<p>Research from leading American universities highlights the impact of time zones on the effectiveness of international teams. A study from Harvard Business School, led by Professor Tsedal Neeley, found that teams operating within similar time zones experience smoother communication and fewer collaboration challenges. Published in the Harvard Business Review, the study demonstrates how time synchronization can reduce meeting delays, improve response times, and streamline communication.</p>\\n\\n\\n\\n<p>Similarly, research from Stanford University, led by Professor Nicholas Bloom, revealed that large time zone differences can negatively affect productivity and problem-solving. Bloom points out that teams working 6 or more hours apart often face challenges such as delayed responses to critical emails, difficulties in scheduling meetings, and a sense of disconnection among team members.</p>\\n\\n\\n\\n<div style=\\"height:20px\\" aria-hidden=\\"true\\" class=\\"wp-block-spacer\\"></div>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Practical Benefits for Daily Operations</h3>\\n\\n\\n\\n<p>When teams operate in nearby time zones, as is the case with Brazil and North America, several practical benefits emerge:</p>\\n\\n\\n\\n<ol class=\\"wp-block-list\\">\\n<li><strong>Simplified Meeting Coordination</strong>: Scheduling meetings becomes more straightforward, reducing time spent finding mutually convenient times and minimizing the need for after-hours commitments.</li>\\n\\n\\n\\n<li><strong>Faster Resolution of Urgent Issues</strong>: Technical or operational challenges can be addressed more swiftly, avoiding delays that might impact business operations.</li>\\n\\n\\n\\n<li><strong>Timely Responses to Communications</strong>: Team members can respond to communications in real-time, accelerating decision-making processes.</li>\\n</ol>\\n\\n\\n\\n<div style=\\"height:20px;width:0px\\" aria-hidden=\\"true\\" class=\\"wp-block-spacer\\"></div>\\n\\n\\n\\n<div class=\\"wp-block-group is-nowrap is-layout-flex wp-container-core-group-is-layout-6c531013 wp-block-group-is-layout-flex\\">\\n<h3 class=\\"wp-block-heading\\">Challenges of Time Zone Discrepancy</h3>\\n</div>\\n\\n\\n\\n<p>Time zone differences can present significant challenges, often more impactful than physical distance. Technology leaders with experience managing teams in Asia, for example, frequently report difficulties in maintaining team cohesion. A 10-hour or more time difference can result in delayed responses and project delivery issues.</p>\\n\\n\\n\\n<p>Consider a technology leader in the United States coordinating a team spread across North America and Asia. Daily meetings become difficult to schedule, with some team members required to participate outside regular business hours, potentially leading to burnout. Additionally, issues that arise outside of local working hours may not be addressed until the Asian team returns to work, creating operational bottlenecks that affect the entire organization.</p>\\n\\n\\n\\n<div style=\\"height:20px;width:0px\\" aria-hidden=\\"true\\" class=\\"wp-block-spacer\\"></div>\\n\\n\\n\\n<h3 class=\\"wp-block-heading\\">Conclusion</h3>\\n\\n\\n\\n<p>As the 4th largest technology talent market globally, and with a time zone closely aligned with the United States, Brazil offers a strategic solution for companies aiming to enhance the efficiency of their international teams. Kaptas Global can assist you in building nearshore teams in Brazil, enabling faster communication, better coordination, and increased productivity. By choosing Brazil as a base for your remote teams, your company is well-positioned to address the challenges of the global market and fully leverage the advantages of a synchronized workforce.</p>\\n","featured_image":"https://kaptasglobal.io/wp-content/uploads/2024/08/KGlobal-Why-Brazils-Time-Zone-is-an-Ideal-Fit-for-International-Teams-768x430.jpg","categories":["Blog"]}]');
const ACCENT_COLORS = ["kaptas-green", "kaptas-purple", "neon-blue"];
function BlogInsights() {
  const latest = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
  return /* @__PURE__ */ jsxs(motion.section, { ...fadeIn$6, className: "px-6 md:px-12 max-w-7xl mx-auto w-full pt-[100px] mb-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-kaptas-purple" }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]", children: "Insights" })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white", children: "The Brazil Playbook" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 font-medium leading-relaxed", children: "Strategic insights on building, scaling, and managing tech teams in Brazil." })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-sm font-medium text-white hover:text-kaptas-purple transition-colors group shrink-0", children: [
        "View all articles",
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: staggerContainer$5,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-50px" },
        className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8",
        children: latest.map((post, i) => {
          const color = ACCENT_COLORS[i % ACCENT_COLORS.length];
          const category = post.categories[0] || "Blog";
          const plainExcerpt = post.excerpt.replace(/<[^>]+>/g, "").replace(/\[&hellip;\]|\[&#8230;\]/g, "…").trim();
          return /* @__PURE__ */ jsx(motion.div, { variants: staggerItem$5, className: "group", children: /* @__PURE__ */ jsxs(Link, { to: `/blog/${post.slug}`, className: "block", children: [
            /* @__PURE__ */ jsxs("div", { className: "aspect-[16/10] bg-[#111111] rounded-2xl mb-6 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-colors", children: [
              post.featured_image ? /* @__PURE__ */ jsx(
                "img",
                {
                  src: post.featured_image,
                  alt: post.title,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                }
              ) : /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-br from-${color}/10 to-transparent flex items-center justify-center`, children: /* @__PURE__ */ jsx("span", { className: "text-gray-600 font-mono text-sm", children: "Kaptas Global" }) }),
              /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-br from-${color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500` })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
              /* @__PURE__ */ jsx("span", { className: `text-xs font-mono text-${color} uppercase tracking-wider`, children: category }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-600 text-xs", children: "•" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs", children: new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) })
            ] }),
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: `text-xl font-semibold text-white mb-3 group-hover:text-${color} transition-colors`,
                dangerouslySetInnerHTML: { __html: post.title }
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2", children: plainExcerpt })
          ] }) }, post.id);
        })
      }
    )
  ] });
}
const faqs$1 = [
  {
    q: "What services does Kaptas Global offer?",
    a: "Kaptas Global offers four hiring services for companies building teams with Brazilian professionals. Direct Hire places full-time employees for a one-time fee of 18% of first-year salary, with no retainer or deposit. Outsourcing & Staffing provides dedicated professionals at a flat monthly cost that covers salary, Brazilian employment charges, and Kaptas Global fees in a single invoice. Executive Mapping delivers a research-backed report with candidate profiles, compensation benchmarks, and competitor analysis within 10 to 15 business days. Hire in Brazil is a custom engagement for companies entering the Brazilian market for the first time, covering hiring-model consulting (CLT, PJ, or EOR), market intelligence, and end-to-end recruitment."
  },
  {
    q: "Is there any upfront cost to work with Kaptas Global?",
    a: "No. For Direct Hire, there is no retainer and no deposit. You pay only after the professional is hired and starts working. For Outsourcing & Staffing, billing begins only when the professional is active on your team. Executive Mapping and Hire in Brazil are scoped as custom projects with fees agreed before work begins, but no speculative charges. Kaptas Global operates on a performance-based model across all services."
  },
  {
    q: "How much does it cost to hire a Brazilian professional?",
    a: "It depends on the model. Direct Hire is 18% of the professional's first-year salary, paid once. Outsourcing & Staffing is a flat monthly cost per professional (for reference, a Senior Full-Stack Engineer typically ranges from $4,000 to $6,000/month fully loaded). Companies typically save 40-60% compared to equivalent US-based hires. Kaptas Global provides role-specific cost projections before the search begins so you can plan budgets with precision, not generic estimates."
  },
  {
    q: "How quickly can Kaptas Global deliver candidates?",
    a: "For Direct Hire and Outsourcing & Staffing, Kaptas Global delivers a shortlist of pre-vetted, headhunted candidates within 5 business days of the intake call. The full placement cycle, from kickoff to hire, typically takes 2 to 4 weeks depending on role complexity. Executive Mapping reports are delivered in 10 to 15 business days. For Hire in Brazil (market entry), the full cycle from market analysis to first placement takes 3 to 6 weeks."
  },
  {
    q: "What happens if a hire does not work out?",
    a: "Kaptas Global includes a replacement guarantee on every placement. For Direct Hire, the guarantee covers 90 to 180 days depending on role level. If the professional leaves or is terminated within that period, Kaptas Global restarts the search at no additional cost. For Outsourcing & Staffing, replacement is unlimited for the entire duration of the contract. This matters because a bad hire can cost over 200% of the role's annual salary when factoring lost productivity, severance, and restart time."
  },
  {
    q: "Why hire Brazilian professionals instead of US-based talent?",
    a: "Three practical reasons. Cost: companies save 40-60% on total compensation while accessing senior-level talent. Time zone: Brazil overlaps 5 to 8 hours with US business hours (1 hour from EST, 4 from PST), enabling real-time collaboration without async delays. Talent depth: Brazil has over 1.5 million tech graduates, the largest IT community in Latin America, and growing bilingual proficiency. Kaptas Global vets every candidate for English fluency, technical skills, and cultural fit before presenting them to your team."
  },
  {
    q: "What types of roles can Kaptas Global fill?",
    a: "Kaptas Global places professionals across technology, finance, sales, marketing, operations, HR, and executive leadership. Common roles include Software Engineers (backend, frontend, full-stack, mobile), QA Engineers, Data Engineers, Product Managers, DevOps/SRE, as well as Country Managers, General Managers, Head of Sales, Marketing Managers, and HR leads. The process adapts to the role, not the other way around."
  },
  {
    q: "Do I need a legal entity in Brazil to hire through Kaptas Global?",
    a: "No. With Outsourcing & Staffing, Kaptas Global acts as the employer of record in Brazil. The professional works dedicated to your team, but all employment contracts, payroll, taxes, and compliance are handled by Kaptas Global. You receive one monthly invoice in USD. For Direct Hire, the professional joins your company directly (you or your EOR provider handle the employment relationship). For companies that want to establish their own entity in Brazil, the Hire in Brazil service provides guidance on the best structure."
  },
  {
    q: "How does Kaptas Global vet candidates?",
    a: "Every candidate goes through a multi-step process: profile screening against your specific requirements, English proficiency interview, technical assessment by Kaptas Global specialists in the relevant stack, and cultural fit evaluation. Only candidates who pass all stages are presented. Kaptas Global does not source from job boards or databases. Every profile is headhunted and individually evaluated. This process supports the company's 75% repeat-client rate across 300+ placements."
  },
  {
    q: "What makes Kaptas Global different from other recruitment agencies?",
    a: "Kaptas Global is a US-incorporated company founded by Brazilians with over 20 years of combined experience in Brazil's tech and professional market. The team of two means every engagement is handled directly by the founders, with no account managers or layers in between. Kaptas Global serves 30+ clients across the US, UK, Germany, China, and other markets. The operational model is built around quality, efficiency, and cost reduction: transparent pricing, no hidden fees, replacement guarantees on every placement, and a 75% repeat-client rate that reflects consistent delivery."
  }
];
function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  return /* @__PURE__ */ jsx("section", { className: "py-24 px-6 md:px-12 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-lg", children: "Everything you need to know about partnering with Kaptas Global." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs$1.map((faq, index) => {
      const isOpen = openIndex === index;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden transition-colors hover:bg-white/[0.04]",
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setOpenIndex(isOpen ? null : index),
                className: "w-full flex items-center justify-between p-6 text-left focus:outline-none group",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-lg font-medium text-white group-hover:text-kaptas-green transition-colors pr-8", children: faq.q }),
                  /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-kaptas-green group-hover:bg-kaptas-green/10 transition-all", children: isOpen ? /* @__PURE__ */ jsx(Minus, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.3, ease: "easeInOut" },
                children: /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 pt-2 text-gray-400 leading-relaxed text-base", "data-speakable": "true", children: faq.a })
              }
            ) })
          ]
        },
        index
      );
    }) })
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-32 pb-24", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Hire Developers in Brazil — Kaptas Global | Outsourcing, Direct Hire & Staffing",
        description: "Hire senior Brazilian developers, engineers, and specialists for your US team. Outsourcing & Staffing, Direct Hire, Executive Mapping, and market entry support. 60% cost reduction, US timezone overlap, candidates in 5 days.",
        keywords: "hire developers brazil, outsourcing brazil, direct hire brazil, nearshore developers, employer of record brazil, brazil tech talent, cost to hire developers brazil, remote developers brazil, brazilian engineers, kaptas global",
        canonical: "https://kaptasglobal.io/",
        schemas: [websiteSchema, organizationSchema, homeServiceSchema, homeHowToSchema, homeFaqSchema]
      }
    ),
    /* @__PURE__ */ jsx(AEOContent, { paragraph: AEO_PARAGRAPHS.home, label: "Kaptas Global overview" }),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(WhyBrazil, {}),
    /* @__PURE__ */ jsx(Differentiation, {}),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "h-4 bg-gradient-to-b from-[#111111] to-[#F9FAFB] w-full relative z-10" }),
      /* @__PURE__ */ jsx(EnterpriseSegment, {}),
      /* @__PURE__ */ jsx("div", { className: "h-4 bg-gradient-to-b from-[#F9FAFB] to-[#111111] w-full relative z-10" })
    ] }),
    /* @__PURE__ */ jsx(HowItWorks, {}),
    /* @__PURE__ */ jsxs("div", { className: "text-white w-full relative z-10", children: [
      /* @__PURE__ */ jsx(CostComparison, {}),
      /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-gradient-to-b from-[#111111] to-[#F9FAFB] w-full relative z-10" }),
        /* @__PURE__ */ jsx(TalentMapping, {}),
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-gradient-to-b from-[#F9FAFB] to-[#111111] w-full relative z-10" })
      ] }),
      /* @__PURE__ */ jsx(CaseResults, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col", children: [
      /* @__PURE__ */ jsx(ServiceNavigation, {}),
      /* @__PURE__ */ jsx("div", { className: "h-4 bg-gradient-to-b from-[#111111] to-[#F9FAFB] w-full relative z-10" }),
      /* @__PURE__ */ jsx(LeadGenerationForm, {}),
      /* @__PURE__ */ jsx("div", { className: "h-4 bg-gradient-to-b from-[#F9FAFB] to-[#111111] w-full relative z-10" })
    ] }),
    /* @__PURE__ */ jsx(BlogInsights, {}),
    /* @__PURE__ */ jsx(HomeFAQ, {})
  ] });
}
function SocialProof() {
  return /* @__PURE__ */ jsx(motion.section, { ...fadeIn$6, className: "w-full border-y border-gray-200 bg-[#F9FAFB] py-12 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-8 text-center", children: "trusted by startups building fast" }),
    /* @__PURE__ */ jsx("div", { className: "w-full relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "flex items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500 whitespace-nowrap w-max",
        animate: { x: ["0%", "-50%"] },
        transition: { repeat: Infinity, ease: "linear", duration: 30 },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-12 md:gap-24 pr-12 md:pr-24", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xl font-black font-serif tracking-tight text-[#111111] hover:opacity-100 cursor-default transition-opacity", children: "Acme Corp" }),
            /* @__PURE__ */ jsx("div", { className: "text-xl font-black tracking-tighter text-[#111111] hover:opacity-100 cursor-default transition-opacity", children: "GLOBAL" }),
            /* @__PURE__ */ jsx("div", { className: "text-xl font-black italic text-[#111111] hover:opacity-100 cursor-default transition-opacity", children: "TechFlow" }),
            /* @__PURE__ */ jsx("div", { className: "text-xl font-black uppercase text-[#111111] hover:opacity-100 cursor-default transition-opacity", children: "NEXUS" }),
            /* @__PURE__ */ jsx("div", { className: "text-xl font-black text-[#111111] hover:opacity-100 cursor-default transition-opacity", children: "Vanguard" }),
            /* @__PURE__ */ jsx("div", { className: "text-xl font-black font-mono tracking-tighter text-[#111111] hover:opacity-100 cursor-default transition-opacity", children: "SYNAPSE" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-12 md:gap-24 pr-12 md:pr-24", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xl font-black font-serif tracking-tight text-[#111111] hover:opacity-100 cursor-default transition-opacity", children: "Acme Corp" }),
            /* @__PURE__ */ jsx("div", { className: "text-xl font-black tracking-tighter text-[#111111] hover:opacity-100 cursor-default transition-opacity", children: "GLOBAL" }),
            /* @__PURE__ */ jsx("div", { className: "text-xl font-black italic text-[#111111] hover:opacity-100 cursor-default transition-opacity", children: "TechFlow" }),
            /* @__PURE__ */ jsx("div", { className: "text-xl font-black uppercase text-[#111111] hover:opacity-100 cursor-default transition-opacity", children: "NEXUS" }),
            /* @__PURE__ */ jsx("div", { className: "text-xl font-black text-[#111111] hover:opacity-100 cursor-default transition-opacity", children: "Vanguard" }),
            /* @__PURE__ */ jsx("div", { className: "text-xl font-black font-mono tracking-tighter text-[#111111] hover:opacity-100 cursor-default transition-opacity", children: "SYNAPSE" })
          ] })
        ]
      }
    ) })
  ] }) });
}
const faqs = [
  {
    q: "Are there any upfront fees?",
    a: "No. Kaptas Global does not charge upfront fees for Direct Hire or Outsourcing & Staffing. Payment happens only after a successful placement or as part of the agreed monthly invoice. Over 300 placements have been delivered this way. Executive Mapping and Hire in Brazil are custom projects with pricing defined before work begins."
  },
  {
    q: "How is the 18% Direct Hire fee calculated?",
    a: "Kaptas Global charges 18% of the hired professional's first-year annual salary as a one-time placement fee. Payment is due after the candidate accepts the offer and starts. There is no retainer, no deposit, and no cost if the search does not result in a hire."
  },
  {
    q: "What exactly is included in the Outsourcing & Staffing monthly cost?",
    a: "Kaptas Global charges one flat amount per professional per month. It covers the candidate's full compensation and all service fees. There are no separate invoices for payroll, compliance, taxes, or administration. For example, a Senior Full-stack Engineer in Brazil ranges from $4k to $6k per month, all-in."
  },
  {
    q: "How does 18% compare to other recruitment agencies?",
    a: "US-based recruitment agencies typically charge 20-30% of first-year salary for contingency placements and 25-35% for retained searches. Kaptas Global charges 18% with no retainer, a 90 to 180-day replacement guarantee, and access to Brazil's talent market where salary benchmarks are 40-60% lower than US equivalents. The total cost to hire in Brazil through Kaptas is a fraction of a comparable US search."
  },
  {
    q: "What does the replacement guarantee cover?",
    a: "For Direct Hire, if the professional leaves or does not meet expectations within 90 to 180 days (defined in your agreement), Kaptas Global restarts the search and places a replacement at no additional cost. For Outsourcing & Staffing, replacements are unlimited and included as part of the ongoing service. This applies to all placements regardless of role or seniority."
  },
  {
    q: "Can I switch from Outsourcing & Staffing to Direct Hire?",
    a: "Yes. Kaptas Global helps transition contractor relationships into permanent roles when needed. This includes adjusting the hiring model, compensation structure, and compliance requirements. Over 30% of long-term Outsourcing clients have converted at least one professional to a Direct Hire arrangement."
  },
  {
    q: "How are Outsourcing & Staffing monthly costs determined for each role?",
    a: "Kaptas Global determines the monthly cost based on role type, seniority, and required skill set. When a candidate profile is presented, the all-in cost is included alongside qualifications and experience. Current ranges for common roles: QA Engineer $3k-$5k/month, Senior Full-stack Engineer $4k-$6k/month, Data Engineer $4.5k-$7k/month."
  },
  {
    q: "What if I need to scale or reduce my team?",
    a: "Kaptas Global supports flexible team sizing. For Outsourcing & Staffing, professionals can be added or removed as needs change with no long-term contracts or penalties. For Direct Hire, each placement is an independent engagement with no volume commitments. Many clients start with one hire and scale to 5-10 professionals within the first year."
  },
  {
    q: "How is Executive Mapping and Hire in Brazil priced?",
    a: "Kaptas Global scopes both as custom projects. Executive Mapping pricing depends on role seniority, number of competitors to analyze, geographic coverage, and depth of intelligence, with reports typically delivered in 10-15 business days. Hire in Brazil is scoped to the number of roles, market analysis complexity, and hiring-model consulting involved. Both include a detailed proposal with clear deliverables before any work starts."
  },
  {
    q: "Is there a minimum number of hires required?",
    a: "No. Kaptas Global works with companies hiring a single professional or building a full team. There is no minimum volume, no long-term contract, and no commitment beyond the specific engagement. Over 75% of clients return to hire again after their first placement."
  }
];
function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  return /* @__PURE__ */ jsx("section", { className: "bg-[#111111] py-24 px-6 md:px-12 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-lg", children: "Everything you need to know about our pricing and models." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => {
      const isOpen = openIndex === index;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden transition-colors hover:bg-white/[0.04]",
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setOpenIndex(isOpen ? null : index),
                className: "w-full flex items-center justify-between p-6 text-left focus:outline-none group",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-lg font-medium text-white group-hover:text-kaptas-green transition-colors pr-8", children: faq.q }),
                  /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-kaptas-green group-hover:bg-kaptas-green/10 transition-all", children: isOpen ? /* @__PURE__ */ jsx(Minus, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.3, ease: "easeInOut" },
                children: /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 pt-2 text-gray-400 leading-relaxed text-base", "data-speakable": "true", children: faq.a })
              }
            ) })
          ]
        },
        index
      );
    }) })
  ] }) });
}
const pricingCases = [
  defaultCases[0],
  {
    tag: "Case 02 // Market Entry",
    metricPrefix: "0→",
    metric: "5",
    title: "First hires in a new market",
    description: "A Chinese oil company needed to build their entire Brazil operation from scratch. No local knowledge, no network, no compensation benchmarks. We mapped the market, defined the hiring structure, and placed five key roles including General Manager, Marketing Manager, and HR. Every hire came with the local network needed to generate new business from day one.",
    colorClass: "bg-kaptas-purple",
    glowClass: "bg-neon-blue/10"
  },
  defaultCases[2]
];
const fadeIn$5 = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};
const staggerContainer$4 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
const staggerItem$4 = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};
const pricingBreadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: `${SITE_URL}/` },
  { name: "Pricing", url: `${SITE_URL}/pricing` }
]);
function Pricing() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-32 pb-24", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Pricing — Kaptas Global | Hire Brazilian Talent at 18% or Flat Monthly Cost",
        description: "Transparent pricing for hiring Brazilian professionals. Direct Hire at 18% one-time fee, Outsourcing & Staffing at a flat monthly cost. No retainers, no hidden fees. Replacement guarantee included.",
        keywords: "hire brazilian talent pricing, outsourcing brazil cost, direct hire fee brazil, staffing brazil monthly cost, recruitment brazil pricing, nearshore hiring cost, brazilian developer salary, hire in brazil cost, executive mapping pricing, kaptas global pricing",
        canonical: "https://kaptasglobal.io/pricing",
        schemas: [organizationSchema, pricingServiceSchema, pricingFaqSchema, pricingBreadcrumb]
      }
    ),
    /* @__PURE__ */ jsx(AEOContent, { paragraph: AEO_PARAGRAPHS.pricing, label: "Pricing overview" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-40 lg:pt-48 lg:pb-64 px-6 md:px-12 overflow-hidden flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_top_right,_#0047FF33,transparent_80%)] blur-[120px] pointer-events-none" }),
        /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
            className: "flex flex-col items-center -mt-[120px]",
            children: [
              /* @__PURE__ */ jsxs("h1", { className: "font-semibold tracking-tight leading-[1.1] mb-8 mt-10", children: [
                /* @__PURE__ */ jsx("span", { className: "block text-[48px] md:text-[64px] text-white", children: "Know exactly what you pay" }),
                /* @__PURE__ */ jsx("span", { className: "block mt-2 text-[48px] md:text-[64px] text-transparent bg-clip-text bg-gradient-to-r from-kaptas-green to-kaptas-purple", children: "before you hire" })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "relative text-xl md:text-2xl leading-relaxed font-light text-transparent bg-clip-text bg-[linear-gradient(110deg,#9ca3af_35%,#e2e8f0_45%,#ffffff_50%,#e2e8f0_55%,#9ca3af_65%)] animate-shimmer max-w-2xl text-center", children: [
                "No upfront or hidden costs. Your trusted partner in Brazil.",
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "absolute inset-0 text-transparent bg-clip-text bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.5)_45%,#ffffff_50%,rgba(255,255,255,0.5)_55%,transparent_65%)] animate-shimmer blur-[6px] pointer-events-none",
                    "aria-hidden": "true",
                    children: "No upfront or hidden costs. Your trusted partner in Brazil."
                  }
                )
              ] })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(
        motion.section,
        {
          variants: staggerContainer$4,
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true, margin: "-100px" },
          className: "px-6 md:px-12 max-w-7xl mx-auto w-full relative z-20 -mt-24 lg:-mt-48",
          children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 mt-[60px]", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: staggerItem$4,
                className: "group relative bg-[#0047FF]/20 rounded-[2rem] p-[1px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,71,255,0.15)]",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-[#0047FF]/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-700", style: { backgroundSize: "200% 100%" } }),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-[#0047FF]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 group-hover:bg-[#0047FF]/15 transition-colors duration-700 pointer-events-none" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative bg-[#0A0A0A] rounded-[calc(2rem-1px)] p-8 md:p-10 h-full flex flex-col z-10", children: [
                    /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-2 text-white", children: "Outsourcing & Staffing" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3 mb-8 pb-8 border-b border-white/10", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-kaptas-green to-[#00d26a] tracking-tight", children: "Flat" }),
                      /* @__PURE__ */ jsx("span", { className: "text-base text-gray-400 font-light", children: "monthly cost" })
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-4 mb-10 flex-1", children: [
                      "One monthly cost including salary and fees",
                      "Full-time contractors integrated into your team",
                      "Unlimited replacement at no cost",
                      "Every candidate interviewed by a founder"
                    ].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-kaptas-green/70 shrink-0", strokeWidth: 1.5 }) }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-base leading-relaxed", children: item })
                    ] }, i)) }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-white/[0.02] border border-white/5 rounded-2xl p-6 mb-8 backdrop-blur-sm", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4", children: "EXAMPLES" }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                        { role: "Senior Full-stack Engineer", cost: "$4k - $6k/month" },
                        { role: "QA Engineer", cost: "$3k - $5k/month" },
                        { role: "Mobile Engineer", cost: "$4k - $6k/month" },
                        { role: "Data Engineer", cost: "$4.5k - $7k/month" }
                      ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: item.role }),
                        /* @__PURE__ */ jsx("span", { className: "font-mono text-white", children: item.cost })
                      ] }, i)) })
                    ] }),
                    /* @__PURE__ */ jsxs(Link, { to: "/contractor-staffing", className: "inline-flex items-center justify-between w-full bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4 rounded-xl text-white font-medium transition-all group/btn", children: [
                      /* @__PURE__ */ jsx("span", { children: "Learn more about Staffing" }),
                      /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 text-kaptas-green group-hover/btn:translate-x-1 transition-transform" })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: staggerItem$4,
                className: "group relative bg-kaptas-purple/20 rounded-[2rem] p-[1px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(232,185,35,0.15)]",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-kaptas-purple/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-700", style: { backgroundSize: "200% 100%" } }),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-kaptas-purple/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 group-hover:bg-kaptas-purple/15 transition-colors duration-700 pointer-events-none" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative bg-[#0A0A0A] rounded-[calc(2rem-1px)] p-8 md:p-10 h-full flex flex-col z-10", children: [
                    /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-2 text-white", children: "Direct Hire" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3 mb-8 pb-8 border-b border-white/10", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-kaptas-green to-[#00d26a] tracking-tight", children: "18%" }),
                      /* @__PURE__ */ jsx("span", { className: "text-base text-gray-400 font-light", children: "one-time fee" })
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-4 mb-10 flex-1", children: [
                      "Pay only after a successful hire",
                      "90 to 180-day replacement at no cost",
                      "Full candidate vetting and screening",
                      "Every candidate interviewed by a founder"
                    ].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-kaptas-green/70 shrink-0", strokeWidth: 1.5 }) }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-base leading-relaxed", children: item })
                    ] }, i)) }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-white/[0.02] border border-white/5 rounded-2xl p-6 mb-8 backdrop-blur-sm", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4", children: "WHAT'S INCLUDED" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                        "Dedicated search for your role",
                        "English proficiency screening",
                        "Technical and cultural-fit evaluation",
                        "Shortlist delivered within 5 days",
                        "Onboarding support after placement"
                      ].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-sm text-gray-400", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white/20" }),
                        item
                      ] }, i)) })
                    ] }),
                    /* @__PURE__ */ jsxs(Link, { to: "/direct-hire", className: "inline-flex items-center justify-between w-full bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4 rounded-xl text-white font-medium transition-all group/btn", children: [
                      /* @__PURE__ */ jsx("span", { children: "Learn more about Direct Hire" }),
                      /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 text-kaptas-green group-hover/btn:translate-x-1 transition-transform" })
                    ] })
                  ] })
                ]
              }
            )
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(SocialProof, {}),
    /* @__PURE__ */ jsxs(motion.section, { ...fadeIn$5, className: "px-6 md:px-12 max-w-7xl mx-auto w-full relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-kaptas-purple/5 rounded-full blur-[120px] pointer-events-none" }),
      /* @__PURE__ */ jsxs("div", { className: "relative bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-10 md:p-16 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-16 max-w-3xl relative z-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight", children: "Need market intelligence or help entering Brazil?" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-lg leading-relaxed", children: "Executive Mapping and Hire in Brazil are scoped as custom projects. Pricing depends on role complexity, competitor coverage, geographic reach, and depth of analysis." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "group relative bg-white/[0.02] border border-white/5 hover:border-kaptas-purple/30 rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.04]", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-kaptas-purple/10 rounded-full blur-2xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4 text-white group-hover:text-kaptas-purple transition-colors duration-300", children: "Executive Mapping" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-8 leading-relaxed text-sm", children: "Custom project. 20-30 leadership profiles, compensation benchmarks, competitor analysis, and a ranked shortlist delivered in 10-15 business days." }),
              /* @__PURE__ */ jsxs(Link, { to: "/executive-mapping", className: "inline-flex items-center gap-2 text-white font-medium hover:text-kaptas-purple transition-colors group/link text-sm uppercase tracking-wider", children: [
                "Request a proposal ",
                /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 text-kaptas-purple group-hover/link:translate-x-1 transition-transform" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "group relative bg-white/[0.02] border border-white/5 hover:border-[#0047FF]/30 rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.04]", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-[#0047FF]/10 rounded-full blur-2xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4 text-white group-hover:text-[#0047FF] transition-colors duration-300", children: "Hire in Brazil" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-8 leading-relaxed text-sm", children: "Custom engagement. Competitor landscape, compensation benchmarking, hiring-model recommendation, and end-to-end recruitment for your first local hire." }),
              /* @__PURE__ */ jsxs(Link, { to: "/start-operation", className: "inline-flex items-center gap-2 text-white font-medium hover:text-[#0047FF] transition-colors group/link text-sm uppercase tracking-wider", children: [
                "Request a proposal ",
                /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 text-[#0047FF] group-hover/link:translate-x-1 transition-transform" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-white w-full relative z-10", children: /* @__PURE__ */ jsx(CaseResults, { cases: pricingCases }) }),
    /* @__PURE__ */ jsxs("div", { id: "lead-form", className: "w-full flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "h-4 bg-gradient-to-b from-[#111111] to-[#F9FAFB] w-full relative z-10" }),
      /* @__PURE__ */ jsx(
        LeadGenerationForm,
        {
          headline: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Let's build your ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#111111]", children: "hiring strategy" }),
            " for Brazil"
          ] }),
          subtext: "Let us know what you need, and we'll get back to you with a tailored proposal.",
          ctaText: "Start for free"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "h-4 bg-gradient-to-b from-[#F9FAFB] to-[#111111] w-full relative z-10" })
    ] }),
    /* @__PURE__ */ jsx(PricingFAQ, {})
  ] });
}
const fadeIn$4 = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};
const staggerContainer$3 = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};
const staggerItem$3 = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
function Blog() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const { form: nlForm, handleChange: handleNlChange, handleSubmit: handleNlSubmit, isSubmitting: nlSubmitting, showModal: nlModal, setShowModal: setNlModal, error: nlError } = useContactForm("Blog — Newsletter");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ThankYouModal, { isOpen: nlModal, onClose: () => setNlModal(false) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-32 pb-24", children: [
      /* @__PURE__ */ jsx(
        SEO,
        {
          title: "Blog — Kaptas Global | Insights on Hiring in Brazil & Latin America",
          description: "Actionable advice for startup founders and engineering leaders hiring in Brazil. Salary guides, hiring models, market insights, and compliance tips.",
          keywords: "hiring in brazil blog, nearshore hiring insights, brazil developer salary, latam hiring guide, kaptas global blog",
          canonical: "https://kaptasglobal.io/blog",
          schemas: [
            organizationSchema,
            buildBreadcrumbSchema([
              { name: "Home", url: `${SITE_URL}/` },
              { name: "Blog", url: `${SITE_URL}/blog` }
            ])
          ]
        }
      ),
      /* @__PURE__ */ jsx(AEOContent, { paragraph: AEO_PARAGRAPHS.blog, label: "Kaptas Global blog overview" }),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: "easeOut" },
          className: "pt-32 lg:pt-48 px-6 md:px-12 max-w-7xl mx-auto w-full text-center relative",
          children: [
            /* @__PURE__ */ jsxs("h1", { className: "-mt-[100px] text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 max-w-4xl mx-auto text-white", children: [
              "Insights on hiring ",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-kaptas-green to-yellow-400", children: "in Brazil" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl leading-relaxed font-light text-gray-400 max-w-2xl mx-auto mb-4", children: "Actionable advice for startup founders and engineering leaders." }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500 font-mono", children: [
              posts.length,
              " articles"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.section,
        {
          variants: staggerContainer$3,
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true, margin: "-50px" },
          className: "-mt-[70px] px-6 md:px-12 max-w-7xl mx-auto w-full",
          children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: posts.map((post) => {
            const category = post.categories[0] || "Blog";
            const plainExcerpt = post.excerpt.replace(/<[^>]+>/g, "").replace(/\[&hellip;\]|\[&#8230;\]/g, "…").trim();
            const dateFormatted = new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            });
            return /* @__PURE__ */ jsxs(
              motion.article,
              {
                variants: staggerItem$3,
                className: "group relative bg-[#0A0A0A] border border-white/10 hover:border-white/30 rounded-[2rem] overflow-hidden flex flex-col transition-all duration-500",
                children: [
                  post.featured_image && /* @__PURE__ */ jsx("div", { className: "w-full h-48 overflow-hidden", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: post.featured_image,
                      alt: post.title,
                      className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { className: "p-8 flex flex-col flex-1", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono uppercase tracking-widest text-white bg-white/5 px-3 py-1 rounded-full border border-white/10", children: category }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500 font-mono", children: dateFormatted })
                    ] }),
                    /* @__PURE__ */ jsx(
                      "h2",
                      {
                        className: "text-xl font-semibold mb-4 text-white group-hover:text-kaptas-green transition-colors duration-300 leading-snug",
                        dangerouslySetInnerHTML: { __html: post.title }
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-8 flex-1 leading-relaxed text-sm line-clamp-3", children: plainExcerpt }),
                    /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: `/blog/${post.slug}`,
                        className: "flex items-center text-sm font-medium text-white group-hover:text-kaptas-green transition-colors mt-auto",
                        children: [
                          "Read article ",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" })
                        ]
                      }
                    )
                  ] })
                ]
              },
              post.id
            );
          }) })
        }
      ),
      /* @__PURE__ */ jsxs(motion.section, { ...fadeIn$4, className: "px-6 md:px-12 max-w-7xl mx-auto w-full relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-kaptas-green/5 rounded-full blur-[120px] pointer-events-none" }),
        /* @__PURE__ */ jsxs("div", { className: "relative bg-[#0A0A0A] rounded-[2rem] p-10 md:p-16 border border-white/10 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-xl", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white", children: "Get hiring insights delivered to your inbox" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-lg leading-relaxed", children: "Join 2,000+ founders and engineering leaders receiving our monthly updates on the LATAM talent market." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full md:w-auto flex-1 max-w-md", children: [
            /* @__PURE__ */ jsxs("form", { className: "flex flex-col sm:flex-row gap-3", onSubmit: handleNlSubmit, children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  name: "email",
                  value: nlForm.email,
                  onChange: handleNlChange,
                  placeholder: "Enter your email",
                  className: "bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-kaptas-green focus:bg-white/10 transition-all flex-1",
                  required: true
                }
              ),
              /* @__PURE__ */ jsx("button", { type: "submit", disabled: nlSubmitting, className: "bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed", children: nlSubmitting ? "Subscribing..." : "Subscribe" })
            ] }),
            nlError && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-xs mt-2", children: nlError }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-4 font-mono", children: "We respect your privacy. Unsubscribe at any time." })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const NAMED_ENTITIES = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "...",
  mdash: "—",
  ndash: "–",
  rsquo: "’",
  lsquo: "‘",
  rdquo: "”",
  ldquo: "“"
};
function decodeHtmlEntities(input) {
  return input.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10))).replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCharCode(parseInt(code, 16))).replace(/&([a-zA-Z]+);/g, (match, name) => NAMED_ENTITIES[name] ?? match);
}
function stripHtml(input) {
  return decodeHtmlEntities(input.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
}
function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return /* @__PURE__ */ jsx(Navigate, { to: "/blog", replace: true });
  const category = post.categories[0] || "Blog";
  const dateFormatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const plainTitle = stripHtml(post.title);
  const plainExcerpt = stripHtml(post.excerpt).replace(/\[\.\.\.\]$/, "").trim();
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": plainTitle,
    "description": plainExcerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "image": post.featured_image || "https://kaptasglobal.io/logo-branco.png",
    "author": { "@type": "Organization", "name": "Kaptas Global", "url": "https://kaptasglobal.io" },
    "publisher": { "@type": "Organization", "name": "Kaptas Global", "logo": { "@type": "ImageObject", "url": "https://kaptasglobal.io/logo-branco.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
    "url": `${SITE_URL}/blog/${post.slug}`
  };
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: plainTitle, url: `${SITE_URL}/blog/${post.slug}` }
  ]);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col pb-24", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: `${plainTitle} | Kaptas Global Blog`,
        description: plainExcerpt.slice(0, 160),
        canonical: `https://kaptasglobal.io/blog/${post.slug}`,
        ogImage: post.featured_image || void 0,
        schemas: [organizationSchema, articleSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.section,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
        className: "pt-36 px-6 md:px-12 max-w-4xl mx-auto w-full",
        children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/blog",
              className: "inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-10",
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
                " Back to Blog"
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono uppercase tracking-widest text-white bg-white/5 px-3 py-1 rounded-full border border-white/10", children: category }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-sm text-gray-500 font-mono", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-3.5 h-3.5" }),
              " ",
              dateFormatted
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "h1",
            {
              className: "text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-8",
              dangerouslySetInnerHTML: { __html: post.title }
            }
          ),
          post.featured_image && /* @__PURE__ */ jsx(
            "img",
            {
              src: post.featured_image,
              alt: post.title,
              className: "w-full rounded-2xl object-cover max-h-[480px] mb-12 border border-white/10"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.section,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.7, delay: 0.2 },
        className: "px-6 md:px-12 max-w-4xl mx-auto w-full",
        children: /* @__PURE__ */ jsx(
          "article",
          {
            className: "prose prose-invert prose-lg max-w-none\r\n            prose-headings:font-bold prose-headings:tracking-tight\r\n            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4\r\n            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3\r\n            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6\r\n            prose-a:text-kaptas-green prose-a:no-underline hover:prose-a:underline\r\n            prose-strong:text-white\r\n            prose-ul:text-gray-300 prose-ol:text-gray-300\r\n            prose-li:mb-2\r\n            prose-img:rounded-xl prose-img:border prose-img:border-white/10\r\n            prose-blockquote:border-l-kaptas-green prose-blockquote:text-gray-400\r\n            prose-code:text-kaptas-green prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded\r\n            prose-pre:bg-[#0A0A0A] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl",
            dangerouslySetInnerHTML: { __html: post.content }
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      motion.section,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "px-6 md:px-12 max-w-4xl mx-auto w-full mt-20",
        children: /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] border border-white/10 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Ready to hire in Brazil?" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Pre-vetted shortlist in 5 days. Zero upfront cost." })
          ] }),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/pricing",
              className: "bg-kaptas-green text-kaptas-black px-8 py-3 rounded-full font-semibold text-sm hover:brightness-90 transition-all whitespace-nowrap",
              children: "Get Started"
            }
          )
        ] })
      }
    )
  ] });
}
const fadeIn$3 = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};
const staggerContainer$2 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
const staggerItem$2 = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
function DirectHire() {
  const [openFaq, setOpenFaq] = useState(0);
  const { form: heroForm, handleChange: handleHeroChange, handleSubmit: handleHeroSubmit, isSubmitting: heroSubmitting, showModal: heroModal, setShowModal: setHeroModal, error: heroError } = useContactForm("Direct Hire — Hero");
  const faqs2 = [
    {
      q: "How does direct hire work when hiring remote talent in Brazil?",
      a: "Kaptas Global sources, screens, and presents a shortlist of pre-vetted candidates for your open role. You interview the finalists, choose who to hire, and bring them onto your own team. We charge a one-time finder's fee paid only after the professional starts. After placement, there are no ongoing fees, no middleman, and no dependency on Kaptas Global. You run the payroll, you manage the person, you own the relationship."
    },
    {
      q: "How long does it take to hire through Kaptas Global?",
      a: "Most clients receive a shortlist of 3 to 5 pre-vetted candidates within 5 business days. The average time from kickoff to signed hire is 14 days. For context, the industry average to hire a senior engineer is 35 to 45 days when recruiting internally, and up to 90 days for hard-to-fill roles."
    },
    {
      q: "How much does direct hire cost, and when do I pay?",
      a: "Kaptas Global charges a one-time finder's fee of 18% of the candidate's annual salary. There is no upfront payment. You pay nothing until the professional starts working. If you interview our candidates and decide not to hire, the cost is zero."
    },
    {
      q: "What happens if the hire does not work out?",
      a: "Every placement through Kaptas Global includes a 90 to 180-day replacement warranty at no additional cost. If the professional leaves or underperforms during the warranty period, we restart the search and present new candidates within the same 5-day shortlist timeline. The U.S. Department of Labor estimates a bad hire costs roughly 30% of annual salary. Our warranty exists to eliminate that risk."
    },
    {
      q: "Can I hire as a contractor or for a permanent role?",
      a: "Both. Kaptas Global supports contractor (PJ) and permanent (CLT) placements in Brazil. Most US companies hire Brazilian professionals as independent contractors, which avoids the need for a local entity. We help you choose the right structure based on your needs and walk you through the differences."
    },
    {
      q: "Do I need to open a company in Brazil to hire directly?",
      a: "No. Most clients hire Brazilian professionals as independent contractors without a local entity. The professional invoices your company directly, and you pay in USD or BRL depending on your preference. If you prefer a formal employment relationship, an Employer of Record (EOR) can handle local compliance on your behalf. Kaptas Global advises on the best path but does not act as an EOR."
    },
    {
      q: "How does Kaptas Global vet candidates before I interview them?",
      a: "We evaluate every candidate across five dimensions: technical and functional fit for your stack, business-level English through a live assessment, remote work maturity, understanding of the contractor model, and cultural alignment with your team. Only candidates who pass all five are presented. You interview finalists, not raw applicants."
    },
    {
      q: "Who owns the intellectual property after a direct hire placement?",
      a: "You do. Since the professional joins your team directly, all code, data, designs, and deliverables belong to your company. Kaptas Global recommends including IP assignment clauses in your contract with the hire, and we can share templates that our clients use."
    },
    {
      q: "What is the timezone overlap between Brazil and the United States?",
      a: "Brazil is 1 to 4 hours ahead of US Eastern Time, depending on the region. Teams on the East Coast get near-full overlap. West Coast teams typically share 4 to 6 hours of synchronous working time, which is enough for daily standups, code reviews, and real-time collaboration without overnight handoffs."
    },
    {
      q: "What makes Kaptas Global different from other recruitment firms hiring in Brazil?",
      a: "Kaptas Global is a US-incorporated company founded by Brazilians with direct access to the Brazilian talent market. We headhunt employed professionals from top-tier companies rather than pulling from job boards or recycled databases. Every search is built around your specific stack, seniority level, and team culture. With over 300 placements, a 14-day average time to hire, and a replacement warranty on every placement, we operate as a strategic hiring partner, not a resume vendor."
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ThankYouModal, { isOpen: heroModal, onClose: () => setHeroModal(false) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-32 pb-24", children: [
      /* @__PURE__ */ jsx(
        SEO,
        {
          title: "Direct Hire in Brazil — Kaptas Global | One-Time 18% Fee, No Retainer",
          description: "Hire Brazilian professionals directly on your team. Pre-vetted shortlist in 5 days. 18% one-time fee, paid after hire. Replacement warranty included.",
          keywords: "direct hire brazil, hire developers brazil, one-time recruitment fee brazil, hire brazilian engineers, direct placement brazil, tech talent brazil, 18% hiring fee, pre-vetted developers brazil, replacement guarantee hiring, remote developers brazil",
          canonical: "https://kaptasglobal.io/direct-hire",
          schemas: [
            organizationSchema,
            directHireServiceSchema,
            directHireFaqSchema,
            buildBreadcrumbSchema([
              { name: "Home", url: `${SITE_URL}/` },
              { name: "Direct Hire", url: `${SITE_URL}/direct-hire` }
            ])
          ]
        }
      ),
      /* @__PURE__ */ jsx(AEOContent, { paragraph: AEO_PARAGRAPHS.directHire, label: "Direct Hire service overview" }),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1 },
          className: "relative w-full min-h-[85vh] flex items-start pt-32 md:pt-40 px-6 md:px-12 overflow-hidden",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_top_right,_#0047FF33,transparent_80%)] blur-[120px] pointer-events-none" }),
            /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
                  className: "max-w-3xl -mt-[80px]",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-kaptas-green/10 text-kaptas-green px-4 py-2 rounded-sm text-xs font-bold border border-kaptas-green/20 mb-8 tracking-widest uppercase backdrop-blur-md", children: [
                      /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-kaptas-green rounded-full animate-pulse" }),
                      "DIRECT HIRE"
                    ] }),
                    /* @__PURE__ */ jsxs("h1", { className: "font-semibold tracking-tight leading-[1.1] mb-8", children: [
                      /* @__PURE__ */ jsx("span", { className: "block mt-[6px] text-[30px] text-[#6a7282]", children: "Hire remote Talent in Brazil" }),
                      /* @__PURE__ */ jsx("span", { className: "block mt-1 -mr-[500px] whitespace-nowrap text-[52px] text-white", children: "We find the Talent" }),
                      /* @__PURE__ */ jsx("span", { className: "block mt-1 text-[52px] text-transparent bg-clip-text bg-gradient-to-r from-kaptas-green to-kaptas-purple", children: "You hire them directly" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 mb-6 leading-relaxed font-light max-w-xl", children: "Get a shortlist of vetted candidates in 5 business days. For contractor or permanent roles. One-time fee, paid only after you hire." }),
                    /* @__PURE__ */ jsx("div", { className: "border-l-2 border-kaptas-purple/50 pl-5 max-w-xl mb-12 mt-[120px]", children: /* @__PURE__ */ jsx("p", { className: "text-base text-gray-400 leading-relaxed font-light", children: "Kaptas Global is a US-incorporated company founded by Brazilians. Every placement includes a 90 to 180-day replacement warranty." }) }),
                    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mt-[50px] max-w-lg", children: [
                      "Vetted for your stack",
                      "Zero cost until you hire",
                      "Shortlist in 5 business days",
                      "90-180 day replacement warranty"
                    ].map((text, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm text-gray-300 font-medium w-full", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-kaptas-green shrink-0" }),
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: "truncate",
                          style: i === 3 ? { paddingRight: "0px", paddingLeft: "1px", marginRight: "-20px" } : void 0,
                          children: text
                        }
                      )
                    ] }, i)) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: 30 },
                  animate: { opacity: 1, x: 0, y: [0, -10, 0] },
                  transition: {
                    opacity: { duration: 0.8, delay: 0.4, ease: "easeOut" },
                    x: { duration: 0.8, delay: 0.4, ease: "easeOut" },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  },
                  className: "relative w-full max-w-[500px] mx-auto mt-12 lg:mt-0 -mt-[30px]",
                  children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
                    /* @__PURE__ */ jsxs("div", { className: "absolute -inset-[1px] rounded-3xl overflow-hidden blur-md opacity-60 pointer-events-none", children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_12s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#0047FF1A_200deg,#0047FF_280deg,#00B356_360deg)]", style: { animationDuration: "7s" } }) }),
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_17s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#00B3561A_200deg,#00B356_260deg,#E8B923_310deg,#E8B923_360deg)]", style: { animationDuration: "11s" } }) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl p-[1px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-gray-200/10", children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_12s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#0047FF1A_200deg,#0047FF_280deg,#00B356_360deg)]", style: { animationDuration: "7s" } }) }),
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_17s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#00B3561A_200deg,#00B356_260deg,#E8B923_310deg,#E8B923_360deg)]", style: { animationDuration: "11s" } }) }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-[#111111] rounded-[23px] p-8 md:p-10 relative z-10 h-full w-full", children: [
                        /* @__PURE__ */ jsx("div", { className: "mb-6 text-center", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white -mt-[5px]", children: "See your candidates" }) }),
                        /* @__PURE__ */ jsxs("form", { className: "space-y-4 mt-1", onSubmit: handleHeroSubmit, children: [
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("label", { htmlFor: "hero-name", className: "block text-xs font-semibold text-gray-300 uppercase tracking-wider mt-0 mb-[6px]", children: "Name" }),
                              /* @__PURE__ */ jsx(
                                "input",
                                {
                                  type: "text",
                                  id: "hero-name",
                                  name: "name",
                                  value: heroForm.name,
                                  onChange: handleHeroChange,
                                  required: true,
                                  className: "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-kaptas-green focus:border-kaptas-green transition-all placeholder:text-gray-400 mt-1",
                                  placeholder: "John Doe"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("label", { htmlFor: "hero-company", className: "block text-xs font-semibold text-gray-300 uppercase tracking-wider mt-0 mb-[6px]", children: "Company Name" }),
                              /* @__PURE__ */ jsx(
                                "input",
                                {
                                  type: "text",
                                  id: "hero-company",
                                  name: "company",
                                  value: heroForm.company,
                                  onChange: handleHeroChange,
                                  className: "w-full bg-white/10 border border-white/20 rounded-lg pr-4 pl-[17px] py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-kaptas-green focus:border-kaptas-green transition-all placeholder:text-gray-400 mt-1",
                                  placeholder: "Acme Corp"
                                }
                              )
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("label", { htmlFor: "hero-email", className: "block text-xs font-semibold text-gray-300 uppercase tracking-wider mt-0 mb-[6px]", children: "Work Email" }),
                            /* @__PURE__ */ jsx(
                              "input",
                              {
                                type: "email",
                                id: "hero-email",
                                name: "email",
                                value: heroForm.email,
                                onChange: handleHeroChange,
                                required: true,
                                className: "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-kaptas-green focus:border-kaptas-green transition-all placeholder:text-gray-400 mt-1",
                                placeholder: "john@acmecorp.com"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("label", { htmlFor: "hero-comment", className: "block text-xs font-semibold text-gray-300 uppercase tracking-wider mt-0 mb-[6px]", children: "How can we help?" }),
                            /* @__PURE__ */ jsx(
                              "textarea",
                              {
                                id: "hero-comment",
                                name: "message",
                                value: heroForm.message,
                                onChange: handleHeroChange,
                                rows: 3,
                                className: "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-kaptas-green focus:border-kaptas-green transition-all resize-none placeholder:text-gray-400 mt-1",
                                placeholder: "Tell us about your hiring needs..."
                              }
                            )
                          ] }),
                          heroError && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: heroError }),
                          /* @__PURE__ */ jsxs(
                            "button",
                            {
                              type: "submit",
                              disabled: heroSubmitting,
                              className: "w-full bg-kaptas-green text-[#111111] font-semibold text-sm rounded-lg px-6 py-3.5 hover:bg-[#00994A] transition-all flex items-center justify-center gap-2 group mt-[25px] shadow-[0_0_20px_rgba(0,179,86,0.15)] hover:shadow-[0_0_25px_rgba(0,179,86,0.3)] disabled:opacity-60 disabled:cursor-not-allowed",
                              children: [
                                heroSubmitting ? "Sending..." : "Start for free",
                                !heroSubmitting && /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
                              ]
                            }
                          )
                        ] })
                      ] })
                    ] })
                  ] })
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "w-full py-16 relative z-10 flex flex-col items-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-full max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 -mt-[90px] relative z-10" }),
            /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 w-full", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8 w-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[40px] leading-[48px] font-semibold text-kaptas-green mb-2 tracking-tight", children: "20+" }),
                /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300 mb-1", children: "Years" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: [
                  "Combined experience in",
                  /* @__PURE__ */ jsx("br", {}),
                  "Brazil's tech market"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[40px] leading-[48px] font-semibold text-kaptas-green mb-2 tracking-tight", children: "30+" }),
                /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300 mb-1", children: "Clients" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: [
                  "US and global",
                  /* @__PURE__ */ jsx("br", {}),
                  "companies served"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[40px] leading-[48px] font-semibold text-kaptas-green mb-2 tracking-tight", children: "300+" }),
                /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300 mb-1", children: "Placements" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: [
                  "Engineers and specialists",
                  /* @__PURE__ */ jsx("br", {}),
                  "hired and placed"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[40px] leading-[48px] font-semibold text-kaptas-green mb-2 tracking-tight", children: "75%" }),
                /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300 mb-1", children: "Rate" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: [
                  "Placement on",
                  /* @__PURE__ */ jsx("br", {}),
                  "presented finalists"
                ] })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "-mt-[50px] relative z-10", children: /* @__PURE__ */ jsx(SocialProof, {}) }),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 1 },
          className: "px-6 md:px-12 max-w-7xl mx-auto w-full py-12 md:py-24 relative flex flex-col items-center",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "max-w-3xl text-center mb-16 relative z-10", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-white leading-[1.1]", children: [
                "Your open role ",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Costs more than you think" })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "relative text-lg md:text-xl leading-relaxed font-light text-transparent bg-clip-text bg-[linear-gradient(110deg,#9ca3af_35%,#e2e8f0_45%,#ffffff_50%,#e2e8f0_55%,#9ca3af_65%)] animate-shimmer", children: [
                "Same seniority and timezone. A fraction of the time and cost of doing it yourself.",
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "absolute inset-0 text-transparent bg-clip-text bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.5)_45%,#ffffff_50%,rgba(255,255,255,0.5)_55%,transparent_65%)] animate-shimmer blur-[6px] pointer-events-none",
                    "aria-hidden": "true",
                    children: "Same seniority and timezone. A fraction of the time and cost of doing it yourself."
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: staggerContainer$2,
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, margin: "-50px" },
                className: "w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10",
                children: [
                  /* @__PURE__ */ jsxs(motion.div, { variants: staggerItem$2, className: "flex flex-col group", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 hover:border-white/20", children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-gray-600 transition-all duration-500 group-hover:bg-gray-400" }),
                      /* @__PURE__ */ jsx("div", { className: "flex justify-between items-start mb-8 border-b border-white/10 pb-6", children: /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-1", children: "Hiring on Your Own" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Internal recruitment" })
                      ] }) }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col gap-6 py-4", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                            /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-gray-500 uppercase tracking-widest", children: "The search" }),
                            /* @__PURE__ */ jsx("span", { className: "text-[10px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded uppercase tracking-wider", children: "Senior Engineer +8 years xp" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Time to hire" }),
                              /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "45-90 days" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Candidates screened - job boards" }),
                              /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "100+" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Interviews conducted" }),
                              /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "15-20" })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-gray-500 uppercase tracking-widest mb-3", children: "The cost" }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Base salary (US)" }),
                              /* @__PURE__ */ jsx("span", { className: "text-white font-medium text-sm", children: "$160K-200K/yr" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Taxes, benefits & equity" }),
                              /* @__PURE__ */ jsx("span", { className: "text-white font-medium text-sm", children: "$40K-60K/yr" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Recruiting (recruiter, job boards, tools)" }),
                              /* @__PURE__ */ jsx("span", { className: "text-white font-medium text-sm", children: "$15K-30K" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-2 border-t border-white/10", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm font-medium", children: "Total first-year cost" }),
                              /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-sm", children: "$215K-290K" })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-gray-500 uppercase tracking-widest mb-3", children: "The risk" }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "If you don't make a hire" }),
                              /* @__PURE__ */ jsx("span", { className: "text-white font-medium text-sm text-right", children: "You still paid for the search" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "If the hire doesn't work out" }),
                              /* @__PURE__ */ jsx("span", { className: "text-white font-medium text-sm", children: "Start over from zero" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Estimated loss from a bad hire" }),
                              /* @__PURE__ */ jsx("span", { className: "text-white font-medium text-sm", children: "$48K-60K" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Replacement guarantee" }),
                              /* @__PURE__ */ jsx("span", { className: "text-white font-medium text-sm", children: "None" })
                            ] })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-6 border-t border-white/10 flex justify-between items-start", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm mt-1", children: "Outcome" }),
                        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end text-right", children: [
                          /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-lg", children: "1 hire, no guarantee" }),
                          /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-[15px]", children: "Total first-year cost: $215K-$290K" }),
                          /* @__PURE__ */ jsx("span", { className: "mt-2 text-xs px-3 py-1 border border-transparent opacity-0 select-none pointer-events-none", "aria-hidden": "true", children: "Spacer" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-4 text-xs text-gray-500 text-center px-4", children: "* US salary estimates for senior engineers (8+ yrs). US Dept. of Labor estimates the cost of a bad hire at 30% of annual salary." })
                  ] }),
                  /* @__PURE__ */ jsxs(motion.div, { variants: staggerItem$2, className: "flex flex-col group", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A]/80 backdrop-blur-xl border border-kaptas-green/30 rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(0,179,86,0.1)] h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,179,86,0.2)] hover:border-kaptas-green/50", children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-kaptas-green shadow-[0_0_15px_#00B356] transition-all duration-500 group-hover:shadow-[0_0_25px_#00B356]" }),
                      /* @__PURE__ */ jsx("div", { className: "flex justify-between items-start mb-8 border-b border-white/10 pb-6", children: /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-1 flex items-center gap-2", children: [
                          "Hiring in Brazil ",
                          /* @__PURE__ */ jsx("span", { className: "text-[10px] bg-kaptas-green/20 text-kaptas-green px-2 py-0.5 rounded uppercase tracking-wider", children: "Kaptas Global" })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Strategic hiring partner" })
                      ] }) }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col gap-6 py-4", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                            /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-kaptas-green/70 uppercase tracking-widest", children: "The search" }),
                            /* @__PURE__ */ jsx("span", { className: "text-[10px] bg-kaptas-green/10 text-kaptas-green px-2 py-0.5 rounded uppercase tracking-wider", children: "Senior Engineer +8 years xp" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Time to hire" }),
                              /* @__PURE__ */ jsx("span", { className: "text-kaptas-green font-bold", children: "14 days" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Candidates screened - Headhunted" }),
                              /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "50+" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Interviews you conduct" }),
                              /* @__PURE__ */ jsx("span", { className: "text-kaptas-green font-bold", children: "3 to 5 pre-vetted finalists" })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-kaptas-green/70 uppercase tracking-widest mb-3", children: "The cost" }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Base salary (Brazil)" }),
                              /* @__PURE__ */ jsx("span", { className: "text-white font-medium text-sm", children: "$60K-80K/yr" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Taxes & benefits" }),
                              /* @__PURE__ */ jsx("span", { className: "text-white font-medium text-sm", children: "Already included" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Finder's fee (18% of annual salary)" }),
                              /* @__PURE__ */ jsx("span", { className: "text-white font-medium text-sm text-right max-w-[150px]", children: "$10.8K-14.4K" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-2 border-t border-white/10", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm font-medium", children: "Total first-year cost" }),
                              /* @__PURE__ */ jsx("span", { className: "text-kaptas-green font-bold text-sm", children: "$70.8K-94.4K" })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-kaptas-green/70 uppercase tracking-widest mb-3", children: "The risk" }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "If you don't make a hire" }),
                              /* @__PURE__ */ jsx("span", { className: "text-kaptas-green font-bold text-sm", children: "Zero. You pay nothing." })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "If the hire doesn't work out" }),
                              /* @__PURE__ */ jsx("span", { className: "text-kaptas-green font-bold text-sm", children: "Replaced at no cost" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Estimated loss from a bad hire" }),
                              /* @__PURE__ */ jsx("span", { className: "text-kaptas-green font-bold text-sm", children: "$0" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Replacement guarantee" }),
                              /* @__PURE__ */ jsx("span", { className: "text-kaptas-green font-bold text-sm", children: "90-180 days" })
                            ] })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-6 border-t border-white/10 flex justify-between items-start", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm mt-1", children: "Outcome" }),
                        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end text-right", children: [
                          /* @__PURE__ */ jsx("span", { className: "text-kaptas-green font-bold text-lg", children: "1 hire, vetted and validated" }),
                          /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-[14px]", children: "Total first-year cost: $70K-$94K" }),
                          /* @__PURE__ */ jsx("span", { className: "mt-2 text-xs font-bold bg-kaptas-green/10 border border-kaptas-green/20 text-kaptas-green px-3 py-1 rounded-full uppercase tracking-wider", children: "Up to 67% less" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-4 text-xs text-gray-500 text-center px-4", children: "* That is up to 67% lower than hiring the same seniority in the US, with zero risk if the hire does not work out." })
                  ] })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(motion.section, { ...fadeIn$3, className: "px-6 md:px-12 max-w-7xl mx-auto w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4", children: "What makes this different" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 font-light", children: `Everything between "we need an engineer" and "they're shipping code."` })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(59,130,246,0.15),_transparent_50%)]" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-kaptas-purple font-mono text-[10px] font-bold tracking-widest uppercase mb-4 bg-kaptas-purple/10 px-2.5 py-1 rounded-full border border-kaptas-purple/20", children: [
                  /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-kaptas-purple rounded-full animate-pulse" }),
                  "Strategic Partner"
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold text-white mb-3", children: "Your hiring shortcut in Brazil and Latin America" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-base leading-relaxed max-w-xl font-light", children: "We know the market, the salaries, the talent pools, and the red flags. You skip months of trial and error and go straight to qualified finalists." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 opacity-60", children: [
                /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx("div", { className: `w-1 h-3 rounded-full ${i === 2 ? "bg-kaptas-purple" : "bg-white/20"}` }, i)) }),
                /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono text-gray-500 tracking-widest", children: "MARKET_INTELLIGENCE_ACTIVE" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-kaptas-green/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-kaptas-green/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,_rgba(0,179,86,0.1),_transparent_60%)]" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Same working hours" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed font-light", children: "1-4h from EST. Your team works when you work. No async delays." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono text-gray-500 w-6", children: "US" }),
                  /* @__PURE__ */ jsx("div", { className: "flex-1 grid grid-cols-8 gap-1", children: [...Array(8)].map((_, i) => /* @__PURE__ */ jsx("div", { className: `h-2 rounded-sm ${i > 1 && i < 7 ? "bg-white/30" : "bg-white/5"}` }, `us-${i}`)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono text-kaptas-green w-6", children: "BR" }),
                  /* @__PURE__ */ jsx("div", { className: "flex-1 grid grid-cols-8 gap-1", children: [...Array(8)].map((_, i) => /* @__PURE__ */ jsx("div", { className: `h-2 rounded-sm ${i > 2 ? "bg-kaptas-green shadow-[0_0_8px_rgba(0,179,86,0.4)]" : "bg-white/5"}` }, `br-${i}`)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[8px] font-mono text-gray-600 mt-1 px-9", children: [
                  /* @__PURE__ */ jsx("span", { children: "9AM" }),
                  /* @__PURE__ */ jsx("span", { children: "1PM" }),
                  /* @__PURE__ */ jsx("span", { children: "5PM" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Fluent English" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed font-light", children: "Every candidate is screened for business-level English before you meet them." })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-8 text-4xl font-black text-white/5 tracking-tighter group-hover:text-white/10 transition-colors", children: "EN_US" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Your team. Your payroll. Your terms." }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed font-light", children: "After placement, the professional joins your team directly. No ongoing fees, no intermediary, no lock-in. You run payroll, management, and operations on your terms." })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-col gap-2", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] font-mono text-gray-500", children: [
                /* @__PURE__ */ jsx("span", { children: "DIRECT_CONTRACT" }),
                /* @__PURE__ */ jsx("span", { className: "text-blue-500", children: "● ACTIVE" })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-kaptas-green/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-kaptas-green/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-kaptas-green/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "You own everything" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed font-light", children: "Code, data, IP, and deliverables. Full ownership. No exceptions." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-between border border-white/10 rounded-lg p-3 bg-white/5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-gray-500 tracking-widest", children: "IP_TRANSFER" }),
                /* @__PURE__ */ jsx("div", { className: "w-8 h-4 bg-kaptas-green/20 rounded-full p-0.5 relative border border-kaptas-green/30", children: /* @__PURE__ */ jsx("div", { className: "absolute right-0.5 top-0.5 w-2.5 h-2.5 bg-kaptas-green rounded-full shadow-[0_0_8px_rgba(0,179,86,0.8)]" }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxs("a", { href: "#lead-form", className: "bg-kaptas-green text-[#111111] hover:bg-[#00994A] px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-2", children: [
          "Start hiring in Brazil ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(CaseResults, {}),
      /* @__PURE__ */ jsxs("div", { id: "lead-form", className: "w-full flex flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-gradient-to-b from-[#111111] to-[#F9FAFB] w-full relative z-10" }),
        /* @__PURE__ */ jsx(
          LeadGenerationForm,
          {
            source: "Direct Hire — Bottom",
            headline: "Let's Find Your Next Hire in Brazil.",
            subtext: "Get a shortlist of pre-vetted professionals ready to join your team. No ongoing fees, no middleman after the hire."
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-gradient-to-b from-[#F9FAFB] to-[#111111] w-full relative z-10" })
      ] }),
      /* @__PURE__ */ jsxs(motion.section, { ...fadeIn$3, className: "px-6 md:px-12 max-w-3xl mx-auto w-full mb-32", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Everything you need to know about hiring with Kaptas Global." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs2.map((faq, i) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `border rounded-2xl overflow-hidden transition-colors duration-300 ${openFaq === i ? "bg-[#111111] border-white/20" : "bg-transparent border-white/5 hover:border-white/10"}`,
            children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setOpenFaq(openFaq === i ? null : i),
                  className: "w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: `font-medium transition-colors ${openFaq === i ? "text-white" : "text-gray-300"}`, children: faq.q }),
                    /* @__PURE__ */ jsx("div", { className: `shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === i ? "bg-white/10 text-white" : "bg-transparent text-gray-500"}`, children: openFaq === i ? /* @__PURE__ */ jsx(Minus, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { children: openFaq === i && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.3, ease: "easeInOut" },
                  children: /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 text-gray-400 text-sm leading-relaxed", "data-speakable": "true", children: faq.a })
                }
              ) })
            ]
          },
          i
        )) })
      ] })
    ] })
  ] });
}
const fadeIn$2 = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};
const staggerContainer$1 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
const staggerItem$1 = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
function ContractorStaffing() {
  const [openFaq, setOpenFaq] = useState(0);
  const { form: heroForm, handleChange: handleHeroChange, handleSubmit: handleHeroSubmit, isSubmitting: heroSubmitting, showModal: heroModal, setShowModal: setHeroModal, error: heroError } = useContactForm("Outsourcing & Staffing — Hero");
  const faqs2 = [
    {
      q: "How does outsourcing and staffing work when hiring remote talent in Brazil and Latin America?",
      a: "Outsourcing and staffing through Kaptas Global means we source, vet, and place a remote professional on your team while handling payroll, taxes, and compliance on an ongoing basis. You manage the talent's daily work, own everything they produce, and receive one monthly invoice in USD. There is no need to open a local entity in Brazil or any other Latin American country, which makes this the simplest nearshore hiring model available. This model works for engineering, finance, operations, design, and any other function where remote collaboration is viable."
    },
    {
      q: "How does Kaptas Global find and source talent in Brazil and Latin America?",
      a: "Kaptas Global sources professionals through direct outreach, not job boards or inbound databases. Every search is built from scratch around the client's requirements, including tech stack, seniority, function, and team culture. We target professionals who are currently employed at strong companies across Brazil and Latin America and reach them with credibility, context, and clarity from the first message. No profiles are recycled between searches. Being a US company founded by Brazilians gives Kaptas Global native access to local networks, cultural nuance, and market intelligence that foreign agencies cannot replicate."
    },
    {
      q: "What does Kaptas Global validate beyond the resume when screening candidates from Brazil and Latin America?",
      a: "Kaptas Global validates five dimensions beyond the resume before presenting any candidate: functional and technical fit for the client's specific needs, business-level English through live assessment, remote maturity and async communication habits, understanding of the contractor engagement model, and cultural alignment with the client's team. A strong resume alone is never enough to pass screening. Kaptas Global only presents candidates who have been validated across all five dimensions, regardless of whether the role is in engineering, finance, design, or operations."
    },
    {
      q: "How long does it take to hire remote professionals in Brazil or Latin America through Kaptas Global?",
      a: "Kaptas Global typically delivers a shortlist of three pre-vetted candidates within five business days of kickoff. The average time from the first alignment call to a signed hire is 14 days. Kaptas Global achieves this speed through direct sourcing and a structured screening process that eliminates wasted interviews and low-signal candidates."
    },
    {
      q: "How much does it cost to hire professionals in Brazil compared to the United States?",
      a: "Kaptas Global charges one monthly invoice in USD that covers the professional's compensation, Brazilian taxes, and the service fee. There are no hidden charges, no setup fees, and no currency conversion on the client's side. The total loaded cost for a senior professional hired in Brazil through Kaptas Global is typically 40 to 60 percent lower than a comparable US hire at the same seniority level, without sacrificing quality or timezone overlap. A detailed salary comparison by role and seniority is available on the cost comparison section of this page."
    },
    {
      q: "Is there any upfront cost to start hiring talent in Brazil through Kaptas Global?",
      a: "Kaptas Global charges zero upfront cost to begin an engagement. Sourcing, vetting, and candidate presentations are completely free. Clients pay nothing until they decide to hire and the professional starts working. This zero-risk model applies to every engagement regardless of the number of roles or the function being hired, and no local entity is required to get started."
    },
    {
      q: "What is Kaptas Global's replacement guarantee if a professional leaves or underperforms?",
      a: "Kaptas Global's replacement guarantee has no time limit and no additional cost. Because the service fee is billed monthly, replacements are fully covered for as long as the engagement lasts. If a professional leaves or underperforms, Kaptas Global begins a new search immediately and presents replacement candidates within the same five-day shortlist timeline. There is no additional placement fee and no gap in coverage."
    },
    {
      q: "Who owns the intellectual property and code produced by remote professionals hired through Kaptas Global?",
      a: "The client owns 100 percent of all code, data, designs, documents, and deliverables produced by the professional hired through Kaptas Global. Full IP ownership and code ownership are written into every Kaptas Global contract. There are no exceptions, no shared ownership clauses, and no transfer fees. The talent works under the client's direction, and everything they build belongs to the client from day one."
    },
    {
      q: "What is the timezone overlap between Brazil, Latin America, and the United States for nearshore remote teams?",
      a: "Brazil is one to four hours ahead of US Eastern Time, which provides full overlap during standard US business hours. Professionals hired through Kaptas Global in Brazil and across Latin America join standups, sprint reviews, syncs, and collaborative sessions on the client's regular schedule. West Coast teams get four to six hours of direct overlap, which is enough for full synchronous collaboration without overnight handoffs. This nearshore timezone proximity is one of the key advantages of hiring remote teams in Latin America over offshore regions like Eastern Europe or Asia."
    },
    {
      q: "Can I cancel my outsourcing and staffing engagement with Kaptas Global at any time?",
      a: "Kaptas Global requires no minimum contract term, no lock-in period, and no cancellation penalty. Clients can scale down the number of professionals or end the engagement entirely at any time with no financial consequence. There is no long-term commitment required to work with Kaptas Global."
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ThankYouModal, { isOpen: heroModal, onClose: () => setHeroModal(false) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-32 pb-24", children: [
      /* @__PURE__ */ jsx(
        SEO,
        {
          title: "Outsourcing & Staffing in Brazil and Latin America | Hire Remote Talent | Kaptas Global",
          description: "Kaptas Global helps US companies hire senior remote professionals in Brazil and Latin America. We handle sourcing, payroll, and compliance. Zero upfront cost. 14-day average time to hire. Full IP ownership. One monthly invoice in USD.",
          keywords: "outsourcing staffing Brazil, hire remote talent Latin America, nearshore hiring Brazil, contractor payroll Brazil, hire engineers Brazil, Kaptas Global, nearshore staffing, remote professionals Latin America, IP ownership contractor Brazil",
          canonical: "https://kaptasglobal.io/contractor-staffing",
          schemas: [
            organizationSchema,
            outsourcingServiceSchema,
            outsourcingFaqSchema,
            buildBreadcrumbSchema([
              { name: "Home", url: `${SITE_URL}/` },
              { name: "Outsourcing & Staffing", url: `${SITE_URL}/contractor-staffing` }
            ])
          ]
        }
      ),
      /* @__PURE__ */ jsx(AEOContent, { paragraph: AEO_PARAGRAPHS.outsourcingStaffing, label: "Outsourcing & Staffing service overview" }),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1 },
          className: "relative w-full min-h-[85vh] flex items-start pt-32 md:pt-40 px-6 md:px-12 overflow-hidden",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_top_right,_#0047FF33,transparent_80%)] blur-[120px] pointer-events-none" }),
            /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
                  className: "max-w-3xl -mt-[80px]",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-kaptas-green/10 text-kaptas-green px-4 py-2 rounded-sm text-xs font-bold border border-kaptas-green/20 mb-8 tracking-widest uppercase backdrop-blur-md", children: [
                      /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-kaptas-green rounded-full animate-pulse" }),
                      "Outsourcing & Staffing"
                    ] }),
                    /* @__PURE__ */ jsxs("h1", { className: "font-semibold tracking-tight leading-[1.1] mb-8", children: [
                      /* @__PURE__ */ jsx("span", { className: "block mt-[6px] text-[30px] text-[#6a7282]", children: "Hire Engineers in Brazil" }),
                      /* @__PURE__ */ jsx("span", { className: "block mt-1 -mr-[500px] whitespace-nowrap text-[52px] text-white", children: "We Source and Run Payroll" }),
                      /* @__PURE__ */ jsx("span", { className: "block mt-1 text-[52px] text-transparent bg-clip-text bg-gradient-to-r from-kaptas-green to-kaptas-purple", children: "You Run the Team" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 mb-6 leading-relaxed font-light max-w-xl", children: "Test the process, meet the engineers, and pay only if you hire. If anyone ever leaves, we replace them on us." }),
                    /* @__PURE__ */ jsx("div", { className: "border-l-2 border-kaptas-purple/50 pl-5 max-w-xl mb-12 mt-[120px]", children: /* @__PURE__ */ jsx("p", { className: "text-base text-gray-400 leading-relaxed font-light", children: "We are US-incorporated, so there are no foreign contracts, no currency risk, and no surprises, just one monthly invoice in USD." }) }),
                    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mt-[50px] max-w-lg", children: [
                      "Same working hours",
                      "Zero upfront cost",
                      "Replacements always covered",
                      "Highly qualified talent"
                    ].map((text, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm text-gray-300 font-medium w-full", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-kaptas-green shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "truncate", children: text })
                    ] }, i)) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: 30 },
                  animate: { opacity: 1, x: 0, y: [0, -10, 0] },
                  transition: {
                    opacity: { duration: 0.8, delay: 0.4, ease: "easeOut" },
                    x: { duration: 0.8, delay: 0.4, ease: "easeOut" },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  },
                  className: "relative w-full max-w-[500px] mx-auto mt-12 lg:mt-0 -mt-[30px]",
                  children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
                    /* @__PURE__ */ jsxs("div", { className: "absolute -inset-[1px] rounded-3xl overflow-hidden blur-md opacity-60 pointer-events-none", children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_12s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#0047FF1A_200deg,#0047FF_280deg,#00B356_360deg)]", style: { animationDuration: "7s" } }) }),
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_17s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#00B3561A_200deg,#00B356_260deg,#E8B923_310deg,#E8B923_360deg)]", style: { animationDuration: "11s" } }) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl p-[1px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-gray-200/10", children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_12s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#0047FF1A_200deg,#0047FF_280deg,#00B356_360deg)]", style: { animationDuration: "7s" } }) }),
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_17s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#00B3561A_200deg,#00B356_260deg,#E8B923_310deg,#E8B923_360deg)]", style: { animationDuration: "11s" } }) }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-[#111111] rounded-[23px] p-8 md:p-10 relative z-10 h-full w-full", children: [
                        /* @__PURE__ */ jsx("div", { className: "mb-6 text-center", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white -mt-[5px]", children: "See your candidates" }) }),
                        /* @__PURE__ */ jsxs("form", { className: "space-y-4 mt-1", onSubmit: handleHeroSubmit, children: [
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("label", { htmlFor: "hero-name", className: "block text-xs font-semibold text-gray-300 uppercase tracking-wider mt-0 mb-[6px]", children: "Name" }),
                              /* @__PURE__ */ jsx(
                                "input",
                                {
                                  type: "text",
                                  id: "hero-name",
                                  name: "name",
                                  value: heroForm.name,
                                  onChange: handleHeroChange,
                                  required: true,
                                  className: "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-kaptas-green focus:border-kaptas-green transition-all placeholder:text-gray-400 mt-1",
                                  placeholder: "John Doe"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("label", { htmlFor: "hero-company", className: "block text-xs font-semibold text-gray-300 uppercase tracking-wider mt-0 mb-[6px]", children: "Company Name" }),
                              /* @__PURE__ */ jsx(
                                "input",
                                {
                                  type: "text",
                                  id: "hero-company",
                                  name: "company",
                                  value: heroForm.company,
                                  onChange: handleHeroChange,
                                  className: "w-full bg-white/10 border border-white/20 rounded-lg pr-4 pl-[17px] py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-kaptas-green focus:border-kaptas-green transition-all placeholder:text-gray-400 mt-1",
                                  placeholder: "Acme Corp"
                                }
                              )
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("label", { htmlFor: "hero-email", className: "block text-xs font-semibold text-gray-300 uppercase tracking-wider mt-0 mb-[6px]", children: "Work Email" }),
                            /* @__PURE__ */ jsx(
                              "input",
                              {
                                type: "email",
                                id: "hero-email",
                                name: "email",
                                value: heroForm.email,
                                onChange: handleHeroChange,
                                required: true,
                                className: "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-kaptas-green focus:border-kaptas-green transition-all placeholder:text-gray-400 mt-1",
                                placeholder: "john@acmecorp.com"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("label", { htmlFor: "hero-comment", className: "block text-xs font-semibold text-gray-300 uppercase tracking-wider mt-0 mb-[6px]", children: "How can we help?" }),
                            /* @__PURE__ */ jsx(
                              "textarea",
                              {
                                id: "hero-comment",
                                name: "message",
                                value: heroForm.message,
                                onChange: handleHeroChange,
                                rows: 3,
                                className: "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-kaptas-green focus:border-kaptas-green transition-all resize-none placeholder:text-gray-400 mt-1",
                                placeholder: "Tell us about your hiring needs..."
                              }
                            )
                          ] }),
                          heroError && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: heroError }),
                          /* @__PURE__ */ jsxs(
                            "button",
                            {
                              type: "submit",
                              disabled: heroSubmitting,
                              className: "w-full bg-kaptas-green text-[#111111] font-semibold text-sm rounded-lg px-6 py-3.5 hover:bg-[#00994A] transition-all flex items-center justify-center gap-2 group mt-[25px] shadow-[0_0_20px_rgba(0,179,86,0.15)] hover:shadow-[0_0_25px_rgba(0,179,86,0.3)] disabled:opacity-60 disabled:cursor-not-allowed",
                              children: [
                                heroSubmitting ? "Sending..." : "Start for free",
                                !heroSubmitting && /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
                              ]
                            }
                          )
                        ] })
                      ] })
                    ] })
                  ] })
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "w-full py-16 relative z-10 flex flex-col items-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-full max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 -mt-[90px] relative z-10" }),
            /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 w-full", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8 w-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[40px] leading-[48px] font-semibold text-kaptas-green mb-2 tracking-tight", children: "20+" }),
                /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300 mb-1", children: "Years" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: [
                  "Combined experience in",
                  /* @__PURE__ */ jsx("br", {}),
                  "Brazil's tech market"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[40px] leading-[48px] font-semibold text-kaptas-green mb-2 tracking-tight", children: "30+" }),
                /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300 mb-1", children: "Clients" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: [
                  "US and global",
                  /* @__PURE__ */ jsx("br", {}),
                  "companies served"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[40px] leading-[48px] font-semibold text-kaptas-green mb-2 tracking-tight", children: "300+" }),
                /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300 mb-1", children: "Placements" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: [
                  "Engineers and specialists",
                  /* @__PURE__ */ jsx("br", {}),
                  "hired and placed"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[40px] leading-[48px] font-semibold text-kaptas-green mb-2 tracking-tight", children: "75%" }),
                /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300 mb-1", children: "Rate" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: [
                  "Placement on",
                  /* @__PURE__ */ jsx("br", {}),
                  "presented finalists"
                ] })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "-mt-[50px] relative z-10", children: /* @__PURE__ */ jsx(SocialProof, {}) }),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 1 },
          className: "px-6 md:px-12 max-w-7xl mx-auto w-full py-12 md:py-24 relative flex flex-col items-center",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "max-w-3xl text-center mb-16 relative z-10", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-white leading-[1.1]", children: [
                "Same budget ",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Double output" })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "relative text-lg md:text-xl leading-relaxed font-light text-transparent bg-clip-text bg-[linear-gradient(110deg,#9ca3af_35%,#e2e8f0_45%,#ffffff_50%,#e2e8f0_55%,#9ca3af_65%)] animate-shimmer", children: [
                "You get the exact same seniority and skill level, but you ship twice as fast.",
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "absolute inset-0 text-transparent bg-clip-text bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.5)_45%,#ffffff_50%,rgba(255,255,255,0.5)_55%,transparent_65%)] animate-shimmer blur-[6px] pointer-events-none",
                    "aria-hidden": "true",
                    children: "You get the exact same seniority and skill level, but you ship twice as fast."
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: staggerContainer$1,
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, margin: "-50px" },
                className: "w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10",
                children: [
                  /* @__PURE__ */ jsxs(motion.div, { variants: staggerItem$1, className: "flex flex-col group", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 hover:border-white/20", children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-gray-600 transition-all duration-500 group-hover:bg-gray-400" }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-8", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-1", children: "North America e Europe Teams" }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Standard local hiring" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                          /* @__PURE__ */ jsxs("div", { className: "text-2xl font-black text-white", children: [
                            "$45,000",
                            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500 font-medium", children: "/mo" })
                          ] }),
                          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 uppercase tracking-widest font-bold mt-1", children: "Est. Burn Rate*" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center justify-center py-8", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center z-10", children: [
                          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-bold text-base", children: "US" }) }),
                          /* @__PURE__ */ jsx("div", { className: "text-white font-bold text-base", children: "Sarah" }),
                          /* @__PURE__ */ jsx("div", { className: "text-gray-500 text-sm", children: "Engineering Manager" })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "w-full max-w-[280px] mx-auto h-8 relative my-2", children: /* @__PURE__ */ jsxs("svg", { className: "absolute inset-0 w-full h-full", preserveAspectRatio: "none", children: [
                          /* @__PURE__ */ jsx("line", { x1: "50%", y1: "0", x2: "50%", y2: "50%", stroke: "rgba(255,255,255,0.15)", strokeWidth: "1.5" }),
                          /* @__PURE__ */ jsx("line", { x1: "16.66%", y1: "50%", x2: "83.33%", y2: "50%", stroke: "rgba(255,255,255,0.15)", strokeWidth: "1.5" }),
                          /* @__PURE__ */ jsx("line", { x1: "16.66%", y1: "50%", x2: "16.66%", y2: "100%", stroke: "rgba(255,255,255,0.15)", strokeWidth: "1.5" }),
                          /* @__PURE__ */ jsx("line", { x1: "50%", y1: "50%", x2: "50%", y2: "100%", stroke: "rgba(255,255,255,0.15)", strokeWidth: "1.5" }),
                          /* @__PURE__ */ jsx("line", { x1: "83.33%", y1: "50%", x2: "83.33%", y2: "100%", stroke: "rgba(255,255,255,0.15)", strokeWidth: "1.5" })
                        ] }) }),
                        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 w-full max-w-[320px] mx-auto z-10", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-bold text-sm", children: "US" }) }),
                            /* @__PURE__ */ jsx("div", { className: "text-gray-300 font-bold text-sm", children: "Frontend" }),
                            /* @__PURE__ */ jsx("div", { className: "text-gray-500 text-xs mt-0.5", children: "8+ Years" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-bold text-sm", children: "US" }) }),
                            /* @__PURE__ */ jsx("div", { className: "text-gray-300 font-bold text-sm", children: "Senior Dev" }),
                            /* @__PURE__ */ jsx("div", { className: "text-gray-500 text-xs mt-0.5", children: "10+ Years" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-bold text-sm", children: "US" }) }),
                            /* @__PURE__ */ jsx("div", { className: "text-gray-300 font-bold text-sm", children: "Backend" }),
                            /* @__PURE__ */ jsx("div", { className: "text-gray-500 text-xs mt-0.5", children: "9+ Years" })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-6 border-t border-white/10 flex justify-between items-center", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Team Size" }),
                        /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-lg", children: "3 Engineers" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-4 text-xs text-gray-500 text-center px-4", children: "* Cost estimated for salary only. Real costs are higher due to taxes and benefits." })
                  ] }),
                  /* @__PURE__ */ jsxs(motion.div, { variants: staggerItem$1, className: "flex flex-col group", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A]/80 backdrop-blur-xl border border-kaptas-green/30 rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(0,179,86,0.1)] h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,179,86,0.2)] hover:border-kaptas-green/50", children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-kaptas-green shadow-[0_0_15px_#00B356] transition-all duration-500 group-hover:shadow-[0_0_25px_#00B356]" }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-8", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-1 flex items-center gap-2", children: [
                            "Brazil Team ",
                            /* @__PURE__ */ jsx("span", { className: "text-[10px] bg-kaptas-green/20 text-kaptas-green px-2 py-0.5 rounded uppercase tracking-wider", children: "Kaptas Global" })
                          ] }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Strategic execution partner" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                          /* @__PURE__ */ jsxs("div", { className: "text-2xl font-black text-kaptas-green", children: [
                            "$45,000",
                            /* @__PURE__ */ jsx("span", { className: "text-sm text-kaptas-green/60 font-medium", children: "/mo" })
                          ] }),
                          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 uppercase tracking-widest font-bold mt-1", children: "Est. Burn Rate*" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center justify-center py-4", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center z-10", children: [
                          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-bold text-base", children: "US" }) }),
                          /* @__PURE__ */ jsx("div", { className: "text-white font-bold text-base", children: "Sarah" }),
                          /* @__PURE__ */ jsx("div", { className: "text-gray-500 text-sm", children: "Engineering Manager" })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "w-full max-w-[400px] mx-auto h-8 relative my-2", children: /* @__PURE__ */ jsxs("svg", { className: "absolute inset-0 w-full h-full", preserveAspectRatio: "none", children: [
                          /* @__PURE__ */ jsx("line", { x1: "50%", y1: "0", x2: "50%", y2: "50%", stroke: "rgba(0,179,86,0.3)", strokeWidth: "1.5" }),
                          /* @__PURE__ */ jsx("line", { x1: "8.33%", y1: "50%", x2: "91.66%", y2: "50%", stroke: "rgba(0,179,86,0.3)", strokeWidth: "1.5" }),
                          /* @__PURE__ */ jsx("line", { x1: "8.33%", y1: "50%", x2: "8.33%", y2: "100%", stroke: "rgba(0,179,86,0.3)", strokeWidth: "1.5" }),
                          /* @__PURE__ */ jsx("line", { x1: "25%", y1: "50%", x2: "25%", y2: "100%", stroke: "rgba(0,179,86,0.3)", strokeWidth: "1.5" }),
                          /* @__PURE__ */ jsx("line", { x1: "41.66%", y1: "50%", x2: "41.66%", y2: "100%", stroke: "rgba(0,179,86,0.3)", strokeWidth: "1.5" }),
                          /* @__PURE__ */ jsx("line", { x1: "58.33%", y1: "50%", x2: "58.33%", y2: "100%", stroke: "rgba(0,179,86,0.3)", strokeWidth: "1.5" }),
                          /* @__PURE__ */ jsx("line", { x1: "75%", y1: "50%", x2: "75%", y2: "100%", stroke: "rgba(0,179,86,0.3)", strokeWidth: "1.5" }),
                          /* @__PURE__ */ jsx("line", { x1: "91.66%", y1: "50%", x2: "91.66%", y2: "100%", stroke: "rgba(0,179,86,0.3)", strokeWidth: "1.5" })
                        ] }) }),
                        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-6 gap-1 md:gap-3 w-full max-w-[480px] mx-auto z-10", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#111111] border border-kaptas-green/50 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(0,179,86,0.1)]", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-xs md:text-sm", children: "BR" }) }),
                            /* @__PURE__ */ jsx("div", { className: "text-white font-bold text-[10px] md:text-xs text-center leading-tight", children: "Frontend" }),
                            /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-[9px] md:text-[10px] mt-0.5 whitespace-nowrap", children: "8+ Years" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#111111] border border-kaptas-green/50 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(0,179,86,0.1)]", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-xs md:text-sm", children: "BR" }) }),
                            /* @__PURE__ */ jsx("div", { className: "text-white font-bold text-[10px] md:text-xs text-center leading-tight", children: "Senior Dev" }),
                            /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-[9px] md:text-[10px] mt-0.5 whitespace-nowrap", children: "10+ Years" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#111111] border border-kaptas-green/50 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(0,179,86,0.1)]", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-xs md:text-sm", children: "BR" }) }),
                            /* @__PURE__ */ jsx("div", { className: "text-white font-bold text-[10px] md:text-xs text-center leading-tight", children: "Backend" }),
                            /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-[9px] md:text-[10px] mt-0.5 whitespace-nowrap", children: "9+ Years" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center relative", children: [
                            /* @__PURE__ */ jsx("div", { className: "absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-kaptas-purple rounded-full animate-pulse" }),
                            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#111111] border border-kaptas-purple/50 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(125,67,197,0.2)]", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-xs md:text-sm", children: "BR" }) }),
                            /* @__PURE__ */ jsx("div", { className: "text-kaptas-purple font-bold text-[10px] md:text-xs text-center leading-tight", children: "QA Eng." }),
                            /* @__PURE__ */ jsx("div", { className: "text-kaptas-purple/70 text-[9px] md:text-[10px] mt-0.5 whitespace-nowrap", children: "7+ Years" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center relative", children: [
                            /* @__PURE__ */ jsx("div", { className: "absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-kaptas-purple rounded-full animate-pulse" }),
                            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#111111] border border-kaptas-purple/50 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(125,67,197,0.2)]", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-xs md:text-sm", children: "BR" }) }),
                            /* @__PURE__ */ jsx("div", { className: "text-kaptas-purple font-bold text-[10px] md:text-xs text-center leading-tight", children: "Architect" }),
                            /* @__PURE__ */ jsx("div", { className: "text-kaptas-purple/70 text-[9px] md:text-[10px] mt-0.5 whitespace-nowrap", children: "12+ Years" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center relative", children: [
                            /* @__PURE__ */ jsx("div", { className: "absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-kaptas-purple rounded-full animate-pulse" }),
                            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#111111] border border-kaptas-purple/50 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(125,67,197,0.2)]", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-xs md:text-sm", children: "BR" }) }),
                            /* @__PURE__ */ jsx("div", { className: "text-kaptas-purple font-bold text-[10px] md:text-xs text-center leading-tight", children: "DevOps" }),
                            /* @__PURE__ */ jsx("div", { className: "text-kaptas-purple/70 text-[9px] md:text-[10px] mt-0.5 whitespace-nowrap", children: "8+ Years" })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-6 border-t border-white/10 flex justify-between items-center", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Team Size" }),
                        /* @__PURE__ */ jsx("span", { className: "text-kaptas-green font-bold text-lg", children: "6 Engineers (2x Velocity)" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-4 text-xs text-gray-500 text-center px-4", children: "* All-in costs including salary and fees." })
                  ] })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(motion.section, { ...fadeIn$2, className: "px-6 md:px-12 max-w-7xl mx-auto w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4", children: "What makes this different" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 font-light", children: `Everything between "we need an engineer" and "they're shipping code."` })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(59,130,246,0.15),_transparent_50%)]" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-kaptas-purple font-mono text-[10px] font-bold tracking-widest uppercase mb-4 bg-kaptas-purple/10 px-2.5 py-1 rounded-full border border-kaptas-purple/20", children: [
                  /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-kaptas-purple rounded-full animate-pulse" }),
                  "Strategic Partner"
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold text-white mb-3", children: "Your eyes in Brazil" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-base leading-relaxed max-w-xl font-light", children: "Entering a new market is easier with a partner already on the ground. We handle the local complexity so you can hire with confidence, not guesswork." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 opacity-60", children: [
                /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx("div", { className: `w-1 h-3 rounded-full ${i === 2 ? "bg-kaptas-purple" : "bg-white/20"}` }, i)) }),
                /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono text-gray-500 tracking-widest", children: "LOCAL_PRESENCE_ACTIVE" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-kaptas-green/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-kaptas-green/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,_rgba(0,179,86,0.1),_transparent_60%)]" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Same working hours" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed font-light", children: "1-4h from EST. Your team works when you work. No async delays." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono text-gray-500 w-6", children: "US" }),
                  /* @__PURE__ */ jsx("div", { className: "flex-1 grid grid-cols-8 gap-1", children: [...Array(8)].map((_, i) => /* @__PURE__ */ jsx("div", { className: `h-2 rounded-sm ${i > 1 && i < 7 ? "bg-white/30" : "bg-white/5"}` }, `us-${i}`)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono text-kaptas-green w-6", children: "BR" }),
                  /* @__PURE__ */ jsx("div", { className: "flex-1 grid grid-cols-8 gap-1", children: [...Array(8)].map((_, i) => /* @__PURE__ */ jsx("div", { className: `h-2 rounded-sm ${i > 2 ? "bg-kaptas-green shadow-[0_0_8px_rgba(0,179,86,0.4)]" : "bg-white/5"}` }, `br-${i}`)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[8px] font-mono text-gray-600 mt-1 px-9", children: [
                  /* @__PURE__ */ jsx("span", { children: "9AM" }),
                  /* @__PURE__ */ jsx("span", { children: "1PM" }),
                  /* @__PURE__ */ jsx("span", { children: "5PM" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Fluent English" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed font-light", children: "Every candidate is screened for business-level English before you meet them." })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-8 text-4xl font-black text-white/5 tracking-tighter group-hover:text-white/10 transition-colors", children: "EN_US" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Payroll & compliance" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed font-light", children: "One monthly invoice. Contracts, taxes, and Brazilian labor compliance handled." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col gap-2", children: [
                /* @__PURE__ */ jsx("div", { className: "h-1.5 w-full bg-white/5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full w-full bg-kaptas-green rounded-full" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[9px] font-mono text-gray-500", children: [
                  /* @__PURE__ */ jsx("span", { children: "COMPLIANCE" }),
                  /* @__PURE__ */ jsx("span", { className: "text-kaptas-green", children: "100% SECURE" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-kaptas-green/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-kaptas-green/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-kaptas-green/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "You own everything" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed font-light", children: "Code, data, IP, and deliverables. Full ownership. No exceptions." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-between border border-white/10 rounded-lg p-3 bg-white/5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-gray-500 tracking-widest", children: "IP_TRANSFER" }),
                /* @__PURE__ */ jsx("div", { className: "w-8 h-4 bg-kaptas-green/20 rounded-full p-0.5 relative border border-kaptas-green/30", children: /* @__PURE__ */ jsx("div", { className: "absolute right-0.5 top-0.5 w-2.5 h-2.5 bg-kaptas-green rounded-full shadow-[0_0_8px_rgba(0,179,86,0.8)]" }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxs("a", { href: "#lead-form", className: "bg-kaptas-green text-[#111111] hover:bg-[#00994A] px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-2", children: [
          "Start building your team ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(CaseResults, {}),
      /* @__PURE__ */ jsxs("div", { id: "lead-form", className: "w-full flex flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-gradient-to-b from-[#111111] to-[#F9FAFB] w-full relative z-10" }),
        /* @__PURE__ */ jsx(LeadGenerationForm, { source: "Outsourcing & Staffing — Bottom" }),
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-gradient-to-b from-[#F9FAFB] to-[#111111] w-full relative z-10" })
      ] }),
      /* @__PURE__ */ jsxs(motion.section, { ...fadeIn$2, className: "px-6 md:px-12 max-w-3xl mx-auto w-full mb-32", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Everything you need to know about hiring with Kaptas Global." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs2.map((faq, i) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `border rounded-2xl overflow-hidden transition-colors duration-300 ${openFaq === i ? "bg-[#111111] border-white/20" : "bg-transparent border-white/5 hover:border-white/10"}`,
            children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setOpenFaq(openFaq === i ? null : i),
                  className: "w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: `font-medium transition-colors ${openFaq === i ? "text-white" : "text-gray-300"}`, children: faq.q }),
                    /* @__PURE__ */ jsx("div", { className: `shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === i ? "bg-white/10 text-white" : "bg-transparent text-gray-500"}`, children: openFaq === i ? /* @__PURE__ */ jsx(Minus, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { children: openFaq === i && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.3, ease: "easeInOut" },
                  children: /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 text-gray-400 text-sm leading-relaxed", "data-speakable": "true", children: faq.a })
                }
              ) })
            ]
          },
          i
        )) })
      ] })
    ] })
  ] });
}
const fadeIn$1 = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};
function ExecutiveMapping() {
  const [openFaq, setOpenFaq] = useState(0);
  const { form: heroForm, handleChange: handleHeroChange, handleSubmit: handleHeroSubmit, isSubmitting: heroSubmitting, showModal: heroModal, setShowModal: setHeroModal, error: heroError } = useContactForm("Executive Mapping — Hero");
  const faqs2 = [
    {
      q: "What is executive mapping and why does it matter before a leadership hire?",
      a: "Executive mapping is a market intelligence engagement that gives you a complete picture of the leadership talent available for a specific role before you commit to a search. Kaptas Global maps 20 to 30 real professionals for a target position in Brazil or Latin America, delivering competitor compensation analysis, team structures, salary benchmarks, and a ranked shortlist of the strongest candidates. It matters because at the leadership level, hiring without data leads to misaligned offers, missed candidates, and costly wrong hires. Instead of starting a 3 to 6 month executive search blind, you enter the process knowing exactly who is out there, what they earn, and who is worth pursuing. The mapping report is a standalone product. You receive the full intelligence, own everything, and decide what to do next."
    },
    {
      q: "What does an executive mapping report include?",
      a: "A Kaptas Global executive mapping report covers seven core deliverables, each tailored to the client's specific role, industry, and competitive landscape. First, we map 20 to 30 qualified professionals currently holding the target role or an adjacent one in Brazil or Latin America, with validated profiles including company, seniority, experience, and estimated compensation. Second, we identify the top candidates and rank them based on experience depth, leadership scope, cultural fit, and availability. The report also includes competitor compensation analysis broken down by salary, bonuses, equity, and benefits across company sizes and stages; salary and benefits benchmarks for the specific role using real sourcing data, not surveys; team structure intelligence covering reporting lines, team size, and seniority mix at comparable organizations; a hiring landscape overview with candidate concentration by city, industry competitiveness, and realistic hiring timelines; and a hiring model recommendation, whether PJ contractor, CLT permanent, or EOR, based on the client's structure and goals. Every engagement is custom-scoped. There are no template reports."
    },
    {
      q: "Who is executive mapping for?",
      a: "Executive mapping is designed for companies that need to hire C-level executives, country managers, VPs, directors, or other senior leadership roles in Brazil or Latin America and want real market data before committing to a search. Kaptas Global works with US-based companies, European firms, and any organization worldwide that is expanding into or operating in Brazil and needs to understand the leadership talent landscape. Typical clients include companies opening a Brazil operation for the first time, boards evaluating compensation for an incoming executive, and leadership teams benchmarking their structure against competitors. If the role carries strategic weight and the cost of a wrong hire is measured in quarters rather than weeks, executive mapping is the right starting point."
    },
    {
      q: "How long does an executive mapping engagement take?",
      a: "Kaptas Global delivers a completed executive mapping report in 10 to 15 business days after the intro call. This is significantly faster than a traditional executive search, which typically runs 3 to 6 months from kickoff to offer acceptance. The timeline reflects the depth of the work: every mapped professional is sourced and validated directly through active outreach, not pulled from a static database. Kaptas Global analyses competitor structures, verifies compensation data, and ranks candidates before delivering the final report. The intro call typically covers the target role, seniority level, key competitors to benchmark, and any specific intelligence questions the client needs answered."
    },
    {
      q: "How much does executive mapping cost?",
      a: "There is no fixed price for Kaptas Global's executive mapping service. Each engagement is scoped as a custom project based on the target role, seniority level, number of competitors to benchmark, geographic coverage, and the depth of intelligence required. After the intro call, Kaptas Global builds a tailored proposal that reflects exactly what the client needs, with no unnecessary steps or inflated scope. Pricing is structured as a retainer and discussed directly during the first conversation."
    },
    {
      q: "What happens after I receive the mapping report?",
      a: "The report and all data belong to you. Kaptas Global transfers full ownership of the candidate profiles, compensation benchmarks, team structure analysis, and strategic recommendations. After delivery, you have three options: activate a search through Kaptas Global to engage and place one of the identified candidates; run your own hiring process using the mapped shortlist and market data; or hold the intelligence for a future hire, internal benchmarking, or board presentation. There is no lock-in, no contingency fee tied to future hires, and no obligation to continue with Kaptas Global beyond the mapping engagement."
    },
    {
      q: "Why should I map the market before making a leadership hire in Brazil?",
      a: "A wrong executive hire costs more than salary. Research shows it can reach 200% or more of the role's annual compensation when factoring in lost productivity, team disruption, strategic delays, and the cost of restarting the search. Studies also indicate that 46% of newly hired executives fail within 18 months, most often due to poor cultural or strategic fit rather than lack of technical ability. Executive mapping reduces that risk by giving you a clear view of who is available, what they earn, how competitor teams are structured, and which candidates are the strongest fit for your specific context, all before you invest in a full search. Kaptas Global's mapping provides competitive intelligence delivered as a standalone product in 10 to 15 business days."
    },
    {
      q: "Can Kaptas Global map roles beyond Brazil?",
      a: "Yes. While Kaptas Global's deepest network and sourcing capability is in Brazil, executive mapping engagements can cover leadership roles across Latin America, including Argentina, Mexico, Colombia, and Chile. If the target role involves a regional scope or the client needs to compare talent availability across multiple markets, the mapping report can be expanded accordingly. The scope, timeline, and pricing are adjusted during the intro call based on the number of markets and the complexity of the role."
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ThankYouModal, { isOpen: heroModal, onClose: () => setHeroModal(false) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-32 pb-24", children: [
      /* @__PURE__ */ jsx(
        SEO,
        {
          title: "Executive Mapping in Brazil and Latin America | Talent Intelligence | Kaptas Global",
          description: "Kaptas Global maps 20-30 leadership professionals for your target role in Brazil and Latin America. Competitor compensation analysis, team structures, salary benchmarks, and a ranked shortlist of top candidates. Delivered in 10-15 business days.",
          keywords: "executive mapping Brazil, executive talent mapping Latin America, leadership hiring Brazil, competitor compensation analysis Brazil, C-level salary benchmarks Brazil, talent intelligence Brazil, hire country manager Brazil, executive search Brazil, Kaptas Global, talent mapping Latin America",
          canonical: "https://kaptasglobal.io/executive-mapping",
          schemas: [
            organizationSchema,
            executiveMappingServiceSchema,
            executiveMappingFaqSchema,
            buildBreadcrumbSchema([
              { name: "Home", url: `${SITE_URL}/` },
              { name: "Executive Mapping", url: `${SITE_URL}/executive-mapping` }
            ])
          ]
        }
      ),
      /* @__PURE__ */ jsx(AEOContent, { paragraph: AEO_PARAGRAPHS.executiveMapping, label: "Executive Mapping service overview" }),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1 },
          className: "relative w-full min-h-[85vh] flex items-start pt-32 md:pt-40 px-6 md:px-12 overflow-hidden",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_top_right,_#0047FF33,transparent_80%)] blur-[120px] pointer-events-none" }),
            /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
                  className: "max-w-3xl -mt-[80px]",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-kaptas-green/10 text-kaptas-green px-4 py-2 rounded-sm text-xs font-bold border border-kaptas-green/20 mb-8 tracking-widest uppercase backdrop-blur-md", children: [
                      /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-kaptas-green rounded-full animate-pulse" }),
                      "EXECUTIVE MAPPING"
                    ] }),
                    /* @__PURE__ */ jsxs("h1", { className: "font-semibold tracking-tight leading-[1.1] mb-8", children: [
                      /* @__PURE__ */ jsx("span", { className: "block mt-[6px] text-[30px] text-[#6a7282]", children: "Executive talent intel in Brazil" }),
                      /* @__PURE__ */ jsx("span", { className: "block mt-1 -mr-[500px] whitespace-nowrap text-[52px] text-white", children: "Know the market" }),
                      /* @__PURE__ */ jsx("span", { className: "block mt-1 text-[52px] text-transparent bg-clip-text bg-gradient-to-r from-kaptas-green to-kaptas-purple", children: "before making a move" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 mb-6 leading-relaxed font-light max-w-xl", children: "We map 20-30 professionals for your target role. Competitor analysis, compensation benchmarks, and top candidates identified." }),
                    /* @__PURE__ */ jsx("div", { className: "border-l-2 border-kaptas-purple/50 pl-5 max-w-xl mb-12 mt-[120px]", children: /* @__PURE__ */ jsx("p", { className: "text-base text-gray-400 leading-relaxed font-light", children: "Kaptas Global is a US-incorporated company founded by Brazilians. Every mapping engagement is built from scratch using real market intelligence, not recycled reports." }) }),
                    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mt-[50px] max-w-2xl", children: [
                      "20-30 professionals mapped per role",
                      "Competitor compensation analysis",
                      "Top candidates identified",
                      "Delivered in 10-15 business days"
                    ].map((text, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm text-gray-300 font-medium w-full", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-kaptas-green shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: text })
                    ] }, i)) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: 30 },
                  animate: { opacity: 1, x: 0, y: [0, -10, 0] },
                  transition: {
                    opacity: { duration: 0.8, delay: 0.4, ease: "easeOut" },
                    x: { duration: 0.8, delay: 0.4, ease: "easeOut" },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  },
                  className: "relative w-full max-w-[500px] mx-auto mt-12 lg:mt-0 -mt-[30px]",
                  children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
                    /* @__PURE__ */ jsxs("div", { className: "absolute -inset-[1px] rounded-3xl overflow-hidden blur-md opacity-60 pointer-events-none", children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_12s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#0047FF1A_200deg,#0047FF_280deg,#00B356_360deg)]", style: { animationDuration: "7s" } }) }),
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_17s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#00B3561A_200deg,#00B356_260deg,#E8B923_310deg,#E8B923_360deg)]", style: { animationDuration: "11s" } }) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl p-[1px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-gray-200/10", children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_12s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#0047FF1A_200deg,#0047FF_280deg,#00B356_360deg)]", style: { animationDuration: "7s" } }) }),
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_17s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#00B3561A_200deg,#00B356_260deg,#E8B923_310deg,#E8B923_360deg)]", style: { animationDuration: "11s" } }) }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-[#111111] rounded-[23px] p-8 md:p-10 relative z-10 h-full w-full", children: [
                        /* @__PURE__ */ jsx("div", { className: "mb-6 text-center", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white -mt-[5px]", children: "Get your market intel" }) }),
                        /* @__PURE__ */ jsxs("form", { className: "space-y-4 mt-1", onSubmit: handleHeroSubmit, children: [
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("label", { htmlFor: "hero-name", className: "block text-xs font-semibold text-gray-300 uppercase tracking-wider mt-0 mb-[6px]", children: "Name" }),
                              /* @__PURE__ */ jsx(
                                "input",
                                {
                                  type: "text",
                                  id: "hero-name",
                                  name: "name",
                                  value: heroForm.name,
                                  onChange: handleHeroChange,
                                  required: true,
                                  className: "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-kaptas-green focus:border-kaptas-green transition-all placeholder:text-gray-400 mt-1",
                                  placeholder: "John Doe"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("label", { htmlFor: "hero-company", className: "block text-xs font-semibold text-gray-300 uppercase tracking-wider mt-0 mb-[6px]", children: "Company Name" }),
                              /* @__PURE__ */ jsx(
                                "input",
                                {
                                  type: "text",
                                  id: "hero-company",
                                  name: "company",
                                  value: heroForm.company,
                                  onChange: handleHeroChange,
                                  className: "w-full bg-white/10 border border-white/20 rounded-lg pr-4 pl-[17px] py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-kaptas-green focus:border-kaptas-green transition-all placeholder:text-gray-400 mt-1",
                                  placeholder: "Acme Corp"
                                }
                              )
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("label", { htmlFor: "hero-email", className: "block text-xs font-semibold text-gray-300 uppercase tracking-wider mt-0 mb-[6px]", children: "Work Email" }),
                            /* @__PURE__ */ jsx(
                              "input",
                              {
                                type: "email",
                                id: "hero-email",
                                name: "email",
                                value: heroForm.email,
                                onChange: handleHeroChange,
                                required: true,
                                className: "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-kaptas-green focus:border-kaptas-green transition-all placeholder:text-gray-400 mt-1",
                                placeholder: "john@acmecorp.com"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("label", { htmlFor: "hero-comment", className: "block text-xs font-semibold text-gray-300 uppercase tracking-wider mt-0 mb-[6px]", children: "How can we help?" }),
                            /* @__PURE__ */ jsx(
                              "textarea",
                              {
                                id: "hero-comment",
                                name: "message",
                                value: heroForm.message,
                                onChange: handleHeroChange,
                                rows: 3,
                                className: "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-kaptas-green focus:border-kaptas-green transition-all resize-none placeholder:text-gray-400 mt-1",
                                placeholder: "Tell us about your hiring needs..."
                              }
                            )
                          ] }),
                          heroError && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: heroError }),
                          /* @__PURE__ */ jsxs(
                            "button",
                            {
                              type: "submit",
                              disabled: heroSubmitting,
                              className: "w-full bg-kaptas-green text-[#111111] font-semibold text-sm rounded-lg px-6 py-3.5 hover:bg-[#00994A] transition-all flex items-center justify-center gap-2 group mt-[25px] shadow-[0_0_20px_rgba(0,179,86,0.15)] hover:shadow-[0_0_25px_rgba(0,179,86,0.3)] disabled:opacity-60 disabled:cursor-not-allowed",
                              children: [
                                heroSubmitting ? "Sending..." : "Book a call",
                                !heroSubmitting && /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
                              ]
                            }
                          )
                        ] })
                      ] })
                    ] })
                  ] })
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "w-full py-16 relative z-10 flex flex-col items-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-full max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 -mt-[90px] relative z-10" }),
            /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 w-full", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8 w-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[40px] leading-[48px] font-semibold text-kaptas-green mb-2 tracking-tight", children: "20+" }),
                /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300 mb-1", children: "Years" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: [
                  "Combined experience in",
                  /* @__PURE__ */ jsx("br", {}),
                  "Brazil's tech market"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[40px] leading-[48px] font-semibold text-kaptas-green mb-2 tracking-tight", children: "30+" }),
                /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300 mb-1", children: "Clients" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: [
                  "US and global",
                  /* @__PURE__ */ jsx("br", {}),
                  "companies served"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[40px] leading-[48px] font-semibold text-kaptas-green mb-2 tracking-tight", children: "300+" }),
                /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300 mb-1", children: "Placements" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: [
                  "Engineers and specialists",
                  /* @__PURE__ */ jsx("br", {}),
                  "hired and placed"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[40px] leading-[48px] font-semibold text-kaptas-green mb-2 tracking-tight", children: "75%" }),
                /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300 mb-1", children: "Rate" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: [
                  "Placement on",
                  /* @__PURE__ */ jsx("br", {}),
                  "presented finalists"
                ] })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "-mt-[50px] relative z-10", children: /* @__PURE__ */ jsx(SocialProof, {}) }),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 1 },
          className: "px-6 md:px-12 max-w-7xl mx-auto w-full py-12 md:py-24 relative flex flex-col items-center",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "max-w-3xl text-center mb-16 relative z-10", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-white leading-[1.1]", children: [
                "It's not about candidates ",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "It's about strategy" })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "relative text-lg md:text-xl leading-relaxed font-light text-transparent bg-clip-text bg-[linear-gradient(110deg,#9ca3af_35%,#e2e8f0_45%,#ffffff_50%,#e2e8f0_55%,#9ca3af_65%)] animate-shimmer", children: [
                "We show you the market so you make a data-driven call",
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "absolute inset-0 text-transparent bg-clip-text bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.5)_45%,#ffffff_50%,rgba(255,255,255,0.5)_55%,transparent_65%)] animate-shimmer blur-[6px] pointer-events-none",
                    "aria-hidden": "true",
                    children: "We show you the market so you make a data-driven call"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-full relative z-10 mb-16", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "Candidate mapping preview" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10", children: "Role mapped: Country Manager, Brazil" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl", children: [
                /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm text-gray-400 min-w-[1100px]", children: [
                  /* @__PURE__ */ jsx("thead", { className: "text-xs text-gray-500 uppercase bg-white/5 border-b border-white/10", children: /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("th", { className: "px-5 py-4 font-semibold", children: "Candidate" }),
                    /* @__PURE__ */ jsx("th", { className: "px-5 py-4 font-semibold", children: "Role & Industry" }),
                    /* @__PURE__ */ jsx("th", { className: "px-5 py-4 font-semibold", children: "YoE" }),
                    /* @__PURE__ */ jsx("th", { className: "px-5 py-4 font-semibold", children: "Base" }),
                    /* @__PURE__ */ jsx("th", { className: "px-5 py-4 font-semibold", children: "Comp Package" }),
                    /* @__PURE__ */ jsx("th", { className: "px-5 py-4 font-semibold", children: "Team Managed" }),
                    /* @__PURE__ */ jsx("th", { className: "px-5 py-4 font-semibold", children: "Status" }),
                    /* @__PURE__ */ jsx("th", { className: "px-5 py-4 font-semibold", children: "Fit" })
                  ] }) }),
                  /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-white/5", children: [
                    { name: "Ricardo Almeida", role: "Country Manager", industry: "Consumer goods", yoe: 19, salary: "$92K", comp: "2x bonus + company car + profit sharing", team: "64 employees, 6 direct reports", availability: "Open to conversations", fit: 5 },
                    { name: "Fernanda Lopes", role: "Head of LATAM Ops", industry: "SaaS / B2B", yoe: 15, salary: "$85K", comp: "3x bonus + stock options (4-yr vest)", team: "38 employees, 5 direct reports", availability: "Actively exploring", fit: 5 },
                    { name: "Bruno Carvalho", role: "General Manager, Brazil", industry: "Logistics / Supply chain", yoe: 17, salary: "$78K", comp: "2x bonus + company car + fuel allowance", team: "72 employees, 4 direct reports", availability: "Passive, reachable", fit: 4 },
                    { name: "Daniela Ribeiro", role: "VP of Business Dev", industry: "Fintech", yoe: 13, salary: "$72K", comp: "2.5x bonus + stock options + health premium", team: "22 employees, 3 direct reports", availability: "Open to conversations", fit: 3, blurred: true },
                    { name: "Marcos Teixeira", role: "Dir. of Commercial Strategy", industry: "Retail / E-commerce", yoe: 21, salary: "$98K", comp: "4x bonus + RSUs + company car", team: "85 employees, 8 direct reports", availability: "Not actively looking", fit: 4, blurred: true }
                  ].map((c, i) => /* @__PURE__ */ jsxs("tr", { className: `group transition-colors hover:bg-white/[0.02] ${c.blurred ? "blur-[4px] opacity-40 select-none" : ""}`, children: [
                    /* @__PURE__ */ jsx("td", { className: "px-5 py-4 font-medium text-white whitespace-nowrap", children: c.name }),
                    /* @__PURE__ */ jsxs("td", { className: "px-5 py-4", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 block font-medium whitespace-nowrap", children: c.role }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-600 text-xs mt-0.5 block whitespace-nowrap", children: c.industry })
                    ] }),
                    /* @__PURE__ */ jsx("td", { className: "px-5 py-4 whitespace-nowrap", children: c.yoe }),
                    /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-white font-medium whitespace-nowrap", children: c.salary }),
                    /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-xs leading-relaxed max-w-[220px]", children: c.comp }),
                    /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-xs leading-relaxed max-w-[200px]", children: c.team }),
                    /* @__PURE__ */ jsx("td", { className: "px-5 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/5 text-gray-300 border border-white/10", children: c.availability }) }),
                    /* @__PURE__ */ jsxs("td", { className: "px-5 py-4 text-kaptas-green tracking-widest text-lg whitespace-nowrap", children: [
                      "★".repeat(c.fit),
                      "☆".repeat(5 - c.fit)
                    ] })
                  ] }, i)) })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "bg-white/5 border-t border-white/10 px-6 py-3 text-xs text-gray-500 text-center font-medium", children: "5 of 24 professionals mapped for this role" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-full relative z-10", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Market intelligence snapshot" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-6 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-blue-500" }),
                    "Compensation"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-sm text-gray-400", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Role" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "Country Manager, Brazil" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Market" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Consumer goods, SaaS, Fintech, Logistics, Retail" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Base salary range" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-white font-medium text-base", children: "$72,000 - $98,000/yr" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Most common bonus structure" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "2x to 4x base salary tied to revenue or EBITDA targets" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Equity/stock" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Offered by 40% of mapped companies (mostly SaaS and Fintech)" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Additional benefits" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Company car (60% of roles), international health plan (85%), annual travel budget (35%), relocation support (15%)" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "pt-4 mt-2 border-t border-white/10", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-kaptas-purple font-semibold text-xs uppercase tracking-wider block mb-1", children: "Key insight" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "Candidates currently receiving stock options require 15-25% higher base offers from companies that don't offer equity." })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-6 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-yellow-500" }),
                    "Team Structure"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-sm text-gray-400", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Typically reports to" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "CEO, COO, or VP of International" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Direct reports" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "3-8 depending on company size and stage" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Average local team size" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-white font-medium text-base", children: "22-85 employees" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Common org model" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Full P&L ownership with regional autonomy on hiring, budget, and vendor contracts" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "pt-4 mt-2 border-t border-white/10", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 font-semibold text-xs uppercase tracking-wider block mb-1", children: "Industry variance" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "SaaS companies run leaner (20-40 people, flat structure); consumer goods and logistics run deeper (60-85 people, layered hierarchy)." })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-6 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-pink-500" }),
                    "Landscape"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-sm text-gray-400", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Highest concentration" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "São Paulo (58%), Rio de Janeiro (18%), Remote/flexible (14%), Other capitals (10%)" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Market competitiveness" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "High. Professionals at this level change roles every 3-4 years" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Best sourcing window" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Q1 (post-bonus) and early Q4 (pre-budget planning)" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Language" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "92% fluent English, 35% also speak Spanish" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "pt-4 mt-2 border-t border-white/10", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 font-semibold text-xs uppercase tracking-wider block mb-1", children: "Biggest competitor for talent" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Multinational consumer goods and fintech companies offering aggressive retention packages." })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-[#111111] border border-white/10 border-l-4 border-l-kaptas-green rounded-3xl p-8 shadow-[0_0_30px_rgba(0,179,86,0.05)]", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-[10px] font-bold tracking-widest text-kaptas-green uppercase mb-6 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-kaptas-green animate-pulse" }),
                    "Kaptas Global Recommendation"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-sm text-gray-400", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Recommended hiring model" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "CLT (full employment) due to P&L responsibility, team management, and legal representation" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Recommended package to attract top 3" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-kaptas-green font-bold text-base", children: "$88,000-$98,000 base + 2.5x-3x bonus + company car or equivalent allowance" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Estimated time to close" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "25-35 days from search activation" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: "Confidence level" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "High (6 of 24 rated 4+ stars, 2 rated 5 stars)" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "pt-4 mt-2 border-t border-white/10", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-kaptas-green font-semibold text-xs uppercase tracking-wider block mb-1", children: "Key insight" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Candidates from consumer goods and logistics show higher openness to new roles than SaaS/fintech candidates, who tend to have stronger retention packages with unvested equity acting as a golden handcuff." })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 max-w-3xl mx-auto leading-relaxed", children: "* This is a sample based on a real engagement structure. Your report is built from scratch for your specific role, market, and competitors. No templates, no recycled data." }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(motion.section, { ...fadeIn$1, className: "px-6 md:px-12 max-w-7xl mx-auto w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4", children: "Why map before you hire" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 font-light", children: "The stakes are higher and the cost of a wrong hire is measured in quarters, not weeks" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(59,130,246,0.15),_transparent_50%)]" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-kaptas-purple font-mono text-[10px] font-bold tracking-widest uppercase mb-4 bg-kaptas-purple/10 px-2.5 py-1 rounded-full border border-kaptas-purple/20", children: [
                  /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-kaptas-purple rounded-full animate-pulse" }),
                  "STRATEGIC PARTNER"
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold text-white mb-3", children: "Built from scratch, tailored to your strategy" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-base leading-relaxed max-w-xl font-light", children: "We don't build generic industry reports. Every mapping engagement is a custom, targeted deep-dive into your specific competitors and the exact leadership profile you need to hire in Brazil or Latin America. You receive 20-30 mapped professionals with our recommendation of who to pursue first." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 opacity-60", children: [
                /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx("div", { className: `w-1 h-3 rounded-full ${i === 2 ? "bg-kaptas-purple" : "bg-white/20"}` }, i)) }),
                /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono text-gray-500 tracking-widest", children: "DATA_EXTRACTION" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-kaptas-green/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-kaptas-green/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,_rgba(0,179,86,0.1),_transparent_60%)]" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Aligned with your operation" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed font-light", children: "We target executives who already work in your timezone, operate in your industry, and have the network you need. So you can hit the ground running." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono text-gray-500 w-6", children: "US" }),
                  /* @__PURE__ */ jsx("div", { className: "flex-1 grid grid-cols-8 gap-1", children: [...Array(8)].map((_, i) => /* @__PURE__ */ jsx("div", { className: `h-2 rounded-sm ${i > 1 && i < 7 ? "bg-white/30" : "bg-white/5"}` }, `us-${i}`)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono text-kaptas-green w-6", children: "BR" }),
                  /* @__PURE__ */ jsx("div", { className: "flex-1 grid grid-cols-8 gap-1", children: [...Array(8)].map((_, i) => /* @__PURE__ */ jsx("div", { className: `h-2 rounded-sm ${i > 2 ? "bg-kaptas-green shadow-[0_0_8px_rgba(0,179,86,0.4)]" : "bg-white/5"}` }, `br-${i}`)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[8px] font-mono text-gray-600 mt-1 px-9", children: [
                  /* @__PURE__ */ jsx("span", { children: "9AM" }),
                  /* @__PURE__ */ jsx("span", { children: "1PM" }),
                  /* @__PURE__ */ jsx("span", { children: "5PM" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Know your competitors" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed font-light", children: "Reduce risks by understanding the market. See how competitors in Brazil and Latin America structure their teams, what they pay their leadership, and where their gaps are." })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-8 text-4xl font-black text-white/5 tracking-tighter group-hover:text-white/10 transition-colors", children: "100% YOURS" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Real-time market data" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed font-light", children: "We bypass outdated salary surveys. Our compensation benchmarks come directly from live conversations with executives currently in the Brazilian and Latin American market." })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-col gap-2", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] font-mono text-gray-500", children: [
                /* @__PURE__ */ jsx("span", { children: "LIVE_INSIGHTS" }),
                /* @__PURE__ */ jsx("span", { className: "text-blue-500", children: "● ACTIVE" })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-kaptas-green/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-kaptas-green/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-kaptas-green/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Ready for execution" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed font-light", children: "We don't just give you a spreadsheet. We deliver 20-30 mapped professionals with a validated shortlist of top-tier candidates, ready for you to interview and hire immediately." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-between border border-white/10 rounded-lg p-3 bg-white/5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-gray-500 tracking-widest", children: "ACTIONABLE_PIPELINE" }),
                /* @__PURE__ */ jsx("div", { className: "w-8 h-4 bg-kaptas-green/20 rounded-full p-0.5 relative border border-kaptas-green/30", children: /* @__PURE__ */ jsx("div", { className: "absolute right-0.5 top-0.5 w-2.5 h-2.5 bg-kaptas-green rounded-full shadow-[0_0_8px_rgba(0,179,86,0.8)]" }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxs("a", { href: "#lead-form", className: "bg-kaptas-green text-[#111111] hover:bg-[#00994A] px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-2", children: [
          "Start your mapping ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "lead-form", className: "w-full flex flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-gradient-to-b from-[#111111] to-[#F9FAFB] w-full relative z-10" }),
        /* @__PURE__ */ jsx(
          LeadGenerationForm,
          {
            source: "Executive Mapping — Bottom",
            headline: /* @__PURE__ */ jsxs(Fragment, { children: [
              "Know the market, ",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#111111]", children: "find the right leader" })
            ] }),
            subtext: "Describe the role and we'll map the market for you.",
            steps: [
              { number: "1", title: "Intro call.", desc: "Project scope, role, and competitors to benchmark." },
              { number: "2", title: "Mapping.", desc: "We source and rank 20-30 professionals for your target role." },
              { number: "3", title: "Report delivered.", desc: "Full market intelligence and a shortlist ready to activate." }
            ],
            trustSignals: [
              "Competitors benchmarked",
              "Real compensation data",
              "Top candidates ranked"
            ],
            ctaText: "Book a call"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-gradient-to-b from-[#F9FAFB] to-[#111111] w-full relative z-10" })
      ] }),
      /* @__PURE__ */ jsxs(motion.section, { ...fadeIn$1, className: "px-6 md:px-12 max-w-3xl mx-auto w-full mb-32", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Everything you need to know about our executive mapping process." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs2.map((faq, i) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `border rounded-2xl overflow-hidden transition-colors duration-300 ${openFaq === i ? "bg-[#111111] border-white/20" : "bg-transparent border-white/5 hover:border-white/10"}`,
            children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setOpenFaq(openFaq === i ? null : i),
                  className: "w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: `font-medium transition-colors ${openFaq === i ? "text-white" : "text-gray-300"}`, children: faq.q }),
                    /* @__PURE__ */ jsx("div", { className: `shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === i ? "bg-white/10 text-white" : "bg-transparent text-gray-500"}`, children: openFaq === i ? /* @__PURE__ */ jsx(Minus, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { children: openFaq === i && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.3, ease: "easeInOut" },
                  children: /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 text-gray-400 text-sm leading-relaxed", "data-speakable": "true", children: faq.a })
                }
              ) })
            ]
          },
          i
        )) })
      ] })
    ] })
  ] });
}
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
function StartOperation() {
  const [openFaq, setOpenFaq] = useState(0);
  const { form: heroForm, handleChange: handleHeroChange, handleSubmit: handleHeroSubmit, isSubmitting: heroSubmitting, showModal: heroModal, setShowModal: setHeroModal, error: heroError } = useContactForm("Hire in Brazil — Hero");
  const faqs2 = [
    {
      q: "How can a foreign company hire employees in Brazil without a local entity?",
      a: "A foreign company can hire in Brazil through an Employer of Record (EOR), a PJ contractor model, or by partnering with a recruitment firm that manages the process end-to-end. Kaptas Global helps companies from the US, UK, Germany, China, and other markets make their first hire in Brazil without requiring entity setup. We recommend the right hiring model (EOR, PJ, or CLT) based on the role, budget, and long-term plan, then handle recruitment and onboarding. The same approach applies to other Latin American markets when expansion goes beyond Brazil."
    },
    {
      q: "What does the hiring process look like when expanding to Brazil for the first time?",
      a: "Kaptas Global runs a structured process: competitor landscape analysis, compensation benchmarking, work-model recommendation (PJ, CLT, or EOR), candidate sourcing, vetting, and placement. The entire cycle typically takes 3 to 6 weeks depending on role complexity. Companies receive market data and a clear hiring structure before any candidate is presented, reducing the risk of misaligned offers or wrong hires. For companies entering Latin America, Brazil is often the first and largest market, and this process sets the foundation for scaling to other countries."
    },
    {
      q: "What is the difference between CLT, PJ, and EOR hiring models in Brazil?",
      a: "CLT is Brazil's formal employment contract with full labor protections (13th salary, FGTS, paid vacation). PJ is a contractor model where the professional invoices through their own company, offering flexibility and lower employer costs. EOR allows a foreign company to hire a CLT employee without setting up a Brazilian entity. Kaptas Global evaluates each role and recommends the best model based on cost, compliance risk, and operational needs. A detailed comparison is available at kaptasglobal.io/blog/hiring-models-brazil-pj-vs-clt/."
    },
    {
      q: "How much does it cost to hire an employee in Brazil?",
      a: "Total employer cost in Brazil typically runs 70-80% above gross salary when using CLT, accounting for 13th salary, vacation bonus, FGTS (8% monthly), INSS (~20%), meal and transport vouchers, and health insurance. Under PJ or EOR models, cost structures differ significantly. Kaptas Global provides a role-specific compensation benchmark before the search begins so companies can plan budgets accurately, not based on generic ranges."
    },
    {
      q: "How long does it take to make a first hire in Brazil?",
      a: "With Kaptas Global, the full cycle from market analysis to placement typically takes 3 to 6 weeks. EOR onboarding after candidate selection adds 3 to 7 business days; PJ contractors can start within 1 to 3 days after contract agreement. Traditional hiring processes without local expertise often stretch to 60-90 days or longer. The difference is having market data, compensation benchmarks, and a vetted candidate pipeline ready before the search starts."
    },
    {
      q: "What mandatory benefits must employers provide in Brazil?",
      a: "Brazilian labor law (CLT) requires 13th salary (one extra month of pay, split into two installments), 30 days of paid vacation plus a one-third vacation bonus, FGTS deposits (8% of monthly salary), INSS employer contributions (~20% of payroll), and transportation vouchers. Many companies also offer meal vouchers and health insurance to remain competitive. Kaptas Global benchmarks benefit packages against local competitors so offers attract the right talent without overspending."
    },
    {
      q: "Can Kaptas Global help hire for any role or industry, not just tech?",
      a: "Yes. While many firms entering Brazil and Latin America focus on technology roles, Kaptas Global supports hiring across all functions: sales, operations, marketing, HR, finance, general management, and executive leadership. We have placed General Managers, Marketing Managers, HR leads, SAP specialists, and Community Managers for companies expanding into the Brazilian and broader Latin American markets. The process adapts to the role, not the other way around."
    },
    {
      q: "What happens if a hire does not work out?",
      a: "Kaptas Global offers a replacement guarantee on every placement. If a hire does not meet expectations within the guarantee period, we restart the search at no additional recruitment cost. This protects companies making their first move into Brazil, where replacing a bad hire can cost over 200% of the role's annual salary when factoring lost productivity, severance, and restart time."
    },
    {
      q: "Why hire in Brazil instead of other Latin American countries?",
      a: "Brazil has the largest professional talent pool in Latin America, with over 1.5 million tech graduates alone and deep executive pipelines in cities like Sao Paulo, Curitiba, and Belo Horizonte. Salary expectations for mid-to-senior roles are significantly lower than US equivalents while maintaining strong technical and business competency. Time zone alignment with US East Coast (1-2 hours difference) and growing bilingual proficiency make Brazil a practical first step for companies expanding into Latin America. Kaptas Global operates across Brazil and can extend searches to Argentina, Mexico, Colombia, and Chile when needed."
    },
    {
      q: "Can Kaptas Global help hire in other Latin American countries beyond Brazil?",
      a: "Yes. While Brazil is the primary market and where Kaptas Global has the deepest network, we support hiring in Argentina, Mexico, Colombia, and Chile. Each country has a different labor framework, compensation structure, and talent profile. Companies expanding across Latin America often start with Brazil as the largest and most strategic market, then scale to neighboring countries. Kaptas Global adapts the process (competitor analysis, compensation benchmarking, model recommendation, and recruitment) to each country's specifics."
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ThankYouModal, { isOpen: heroModal, onClose: () => setHeroModal(false) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-32 pb-24", children: [
      /* @__PURE__ */ jsx(
        SEO,
        {
          title: "Hire in Brazil — Kaptas Global | Market Entry Recruitment & First Hires",
          description: "Hire your first employees in Brazil without a local entity. Kaptas Global provides market analysis, compensation benchmarks, hiring-model consulting (CLT, PJ, EOR), and end-to-end recruitment for companies entering Brazil.",
          keywords: "hire in brazil, hire employees brazil, market entry brazil, first hire brazil, employer of record brazil, EOR brazil, CLT vs PJ brazil, hiring costs brazil, recruit in brazil, expand to brazil, kaptas global, nearshore hiring brazil, brazil talent acquisition, hire without entity brazil, latin america market entry",
          canonical: "https://kaptasglobal.io/start-operation",
          schemas: [
            organizationSchema,
            hireInBrazilServiceSchema,
            hireInBrazilFaqSchema,
            buildBreadcrumbSchema([
              { name: "Home", url: `${SITE_URL}/` },
              { name: "Hire in Brazil", url: `${SITE_URL}/start-operation` }
            ])
          ]
        }
      ),
      /* @__PURE__ */ jsx(AEOContent, { paragraph: AEO_PARAGRAPHS.hireInBrazil, label: "Hire in Brazil service overview" }),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1 },
          className: "relative w-full min-h-[85vh] flex items-start pt-32 md:pt-40 px-6 md:px-12 overflow-hidden",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_top_right,_#0047FF33,transparent_80%)] blur-[120px] pointer-events-none" }),
            /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
                  className: "max-w-3xl -mt-[80px]",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-kaptas-green/10 text-kaptas-green px-4 py-2 rounded-sm text-xs font-bold border border-kaptas-green/20 mb-8 tracking-widest uppercase backdrop-blur-md", children: [
                      /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-kaptas-green rounded-full animate-pulse" }),
                      "HIRE IN BRAZIL"
                    ] }),
                    /* @__PURE__ */ jsxs("h1", { className: "font-semibold tracking-tight leading-[1.1] mb-8", children: [
                      /* @__PURE__ */ jsx("span", { className: "block mt-[6px] text-[30px] text-[#6a7282]", children: "Market entry recruitment" }),
                      /* @__PURE__ */ jsx("span", { className: "block mt-1 -mr-[500px] whitespace-nowrap text-[52px] text-white", children: "Hire in Brazil" }),
                      /* @__PURE__ */ jsx("span", { className: "block mt-1 text-[52px] text-transparent bg-clip-text bg-gradient-to-r from-kaptas-green to-kaptas-purple", children: "with the right partner" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 mb-6 leading-relaxed font-light max-w-xl", children: "From competitor analysis to compensation benchmarks to the actual hire. We guide your market entry and handle recruitment end to end." }),
                    /* @__PURE__ */ jsx("div", { className: "border-l-2 border-kaptas-purple/50 pl-5 max-w-xl mb-12 mt-[120px]", children: /* @__PURE__ */ jsx("p", { className: "text-base text-gray-400 leading-relaxed font-light", children: "Kaptas Global is a US-incorporated company founded by Brazilians. Companies from the US, UK, Germany, China, and other markets trust us to make their first hire in Brazil." }) }),
                    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mt-[50px] max-w-lg", children: [
                      "Market intel included",
                      "EOR or direct recruitment",
                      "No entity required",
                      "90 to 180-day guarantee"
                    ].map((text, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm text-gray-300 font-medium w-full", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-kaptas-green shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "truncate", children: text })
                    ] }, i)) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: 30 },
                  animate: { opacity: 1, x: 0, y: [0, -10, 0] },
                  transition: {
                    opacity: { duration: 0.8, delay: 0.4, ease: "easeOut" },
                    x: { duration: 0.8, delay: 0.4, ease: "easeOut" },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  },
                  className: "relative w-full max-w-[500px] mx-auto mt-12 lg:mt-0 -mt-[30px]",
                  children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
                    /* @__PURE__ */ jsxs("div", { className: "absolute -inset-[1px] rounded-3xl overflow-hidden blur-md opacity-60 pointer-events-none", children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_12s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#0047FF1A_200deg,#0047FF_280deg,#00B356_360deg)]", style: { animationDuration: "7s" } }) }),
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_17s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#00B3561A_200deg,#00B356_260deg,#E8B923_310deg,#E8B923_360deg)]", style: { animationDuration: "11s" } }) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl p-[1px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-gray-200/10", children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_12s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#0047FF1A_200deg,#0047FF_280deg,#00B356_360deg)]", style: { animationDuration: "7s" } }) }),
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-[-100%] animate-[spin_17s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full animate-pulse bg-[conic-gradient(from_0deg,transparent_0_120deg,#00B3561A_200deg,#00B356_260deg,#E8B923_310deg,#E8B923_360deg)]", style: { animationDuration: "11s" } }) }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-[#111111] rounded-[23px] p-8 md:p-10 relative z-10 h-full w-full", children: [
                        /* @__PURE__ */ jsx("div", { className: "mb-6 text-center", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white -mt-[5px]", children: "Plan your first on-site hire" }) }),
                        /* @__PURE__ */ jsxs("form", { className: "space-y-4 mt-1", onSubmit: handleHeroSubmit, children: [
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("label", { htmlFor: "hero-name", className: "block text-xs font-semibold text-gray-300 uppercase tracking-wider mt-0 mb-[6px]", children: "Name" }),
                              /* @__PURE__ */ jsx(
                                "input",
                                {
                                  type: "text",
                                  id: "hero-name",
                                  name: "name",
                                  value: heroForm.name,
                                  onChange: handleHeroChange,
                                  required: true,
                                  className: "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-kaptas-green focus:border-kaptas-green transition-all placeholder:text-gray-400 mt-1",
                                  placeholder: "John Doe"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("label", { htmlFor: "hero-company", className: "block text-xs font-semibold text-gray-300 uppercase tracking-wider mt-0 mb-[6px]", children: "Company Name" }),
                              /* @__PURE__ */ jsx(
                                "input",
                                {
                                  type: "text",
                                  id: "hero-company",
                                  name: "company",
                                  value: heroForm.company,
                                  onChange: handleHeroChange,
                                  className: "w-full bg-white/10 border border-white/20 rounded-lg pr-4 pl-[17px] py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-kaptas-green focus:border-kaptas-green transition-all placeholder:text-gray-400 mt-1",
                                  placeholder: "Acme Corp"
                                }
                              )
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("label", { htmlFor: "hero-email", className: "block text-xs font-semibold text-gray-300 uppercase tracking-wider mt-0 mb-[6px]", children: "Work Email" }),
                            /* @__PURE__ */ jsx(
                              "input",
                              {
                                type: "email",
                                id: "hero-email",
                                name: "email",
                                value: heroForm.email,
                                onChange: handleHeroChange,
                                required: true,
                                className: "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-kaptas-green focus:border-kaptas-green transition-all placeholder:text-gray-400 mt-1",
                                placeholder: "john@acmecorp.com"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("label", { htmlFor: "hero-comment", className: "block text-xs font-semibold text-gray-300 uppercase tracking-wider mt-0 mb-[6px]", children: "How can we help?" }),
                            /* @__PURE__ */ jsx(
                              "textarea",
                              {
                                id: "hero-comment",
                                name: "message",
                                value: heroForm.message,
                                onChange: handleHeroChange,
                                rows: 3,
                                className: "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-kaptas-green focus:border-kaptas-green transition-all resize-none placeholder:text-gray-400 mt-1",
                                placeholder: "Tell us about your hiring needs..."
                              }
                            )
                          ] }),
                          heroError && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: heroError }),
                          /* @__PURE__ */ jsxs(
                            "button",
                            {
                              type: "submit",
                              disabled: heroSubmitting,
                              className: "w-full bg-kaptas-green text-[#111111] font-semibold text-sm rounded-lg px-6 py-3.5 hover:bg-[#00994A] transition-all flex items-center justify-center gap-2 group mt-[25px] shadow-[0_0_20px_rgba(0,179,86,0.15)] hover:shadow-[0_0_25px_rgba(0,179,86,0.3)] disabled:opacity-60 disabled:cursor-not-allowed",
                              children: [
                                heroSubmitting ? "Sending..." : "Book a call",
                                !heroSubmitting && /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
                              ]
                            }
                          )
                        ] })
                      ] })
                    ] })
                  ] })
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "w-full py-16 relative z-10 flex flex-col items-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-full max-w-7xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 -mt-[90px] relative z-10" }),
            /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-12 w-full", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8 w-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[40px] leading-[48px] font-semibold text-kaptas-green mb-2 tracking-tight", children: "20+" }),
                /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300 mb-1", children: "Years" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: [
                  "Combined experience in",
                  /* @__PURE__ */ jsx("br", {}),
                  "Brazil's tech market"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[40px] leading-[48px] font-semibold text-kaptas-green mb-2 tracking-tight", children: "30+" }),
                /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300 mb-1", children: "Clients" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: [
                  "US and global",
                  /* @__PURE__ */ jsx("br", {}),
                  "companies served"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[40px] leading-[48px] font-semibold text-kaptas-green mb-2 tracking-tight", children: "300+" }),
                /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300 mb-1", children: "Placements" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: [
                  "Engineers and specialists",
                  /* @__PURE__ */ jsx("br", {}),
                  "hired and placed"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[40px] leading-[48px] font-semibold text-kaptas-green mb-2 tracking-tight", children: "75%" }),
                /* @__PURE__ */ jsx("span", { className: "text-base font-medium text-gray-300 mb-1", children: "Rate" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-500 text-xs uppercase tracking-wider", children: [
                  "Placement on",
                  /* @__PURE__ */ jsx("br", {}),
                  "presented finalists"
                ] })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "-mt-[50px] relative z-10", children: /* @__PURE__ */ jsx(SocialProof, {}) }),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 1 },
          className: "px-6 md:px-12 max-w-7xl mx-auto w-full py-12 md:py-24 relative flex flex-col items-center",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "max-w-3xl text-center mb-16 relative z-10", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-white leading-[1.1]", children: [
                "Market entry strategy ",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[50px]", children: "With data-backed hiring" })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "relative text-[18px] leading-relaxed font-light text-transparent bg-clip-text bg-[linear-gradient(110deg,#9ca3af_35%,#e2e8f0_45%,#ffffff_50%,#e2e8f0_55%,#9ca3af_65%)] animate-shimmer", children: [
                "Strategic guidance, competitor mapping, and end-to-end recruitment in one motion.",
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "absolute inset-0 text-transparent bg-clip-text bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.5)_45%,#ffffff_50%,rgba(255,255,255,0.5)_55%,transparent_65%)] animate-shimmer blur-[6px] pointer-events-none",
                    "aria-hidden": "true",
                    children: "Strategic guidance, competitor mapping, and end-to-end recruitment in one motion."
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                variants: staggerContainer,
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, margin: "-50px" },
                className: "w-full relative z-10",
                children: /* @__PURE__ */ jsxs(motion.div, { variants: staggerItem, className: "bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl group hover:border-kaptas-green/30 transition-all duration-500", children: [
                  /* @__PURE__ */ jsx("div", { className: "px-6 md:px-8 py-4 border-b border-white/10 flex justify-between items-center bg-white/[0.02]", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-kaptas-green animate-pulse" }),
                    /* @__PURE__ */ jsx("span", { className: "text-[10px] md:text-xs font-mono text-gray-400 tracking-widest", children: "MARKET_INTELLIGENCE // ROLE: COUNTRY MANAGER_BR" })
                  ] }) }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-0", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10 relative", children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,179,86,0.03)_0%,transparent_70%)] pointer-events-none" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4", children: "Base Compensation" }),
                      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mb-2", children: [
                          /* @__PURE__ */ jsxs("span", { className: "text-2xl font-light text-white", children: [
                            "R$250k ",
                            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "($50k)" })
                          ] }),
                          /* @__PURE__ */ jsx("span", { className: "text-[10px] text-gray-600 font-mono mb-1", children: "TO" }),
                          /* @__PURE__ */ jsxs("span", { className: "text-2xl font-light text-white", children: [
                            "R$350k ",
                            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "($70k)" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative", children: /* @__PURE__ */ jsx("div", { className: "absolute left-[20%] right-[15%] h-full bg-gradient-to-r from-kaptas-green/40 via-kaptas-green to-kaptas-green/40 rounded-full" }) }),
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[9px] font-mono text-gray-500 mt-1.5", children: [
                          /* @__PURE__ */ jsx("span", { children: "MIN / YR" }),
                          /* @__PURE__ */ jsx("span", { children: "MAX / YR" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8 pb-8 border-b border-white/5", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h3", { className: "text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1", children: "Competitor Landscape" }),
                          /* @__PURE__ */ jsx("span", { className: "text-[10px] text-gray-500", children: "5 Direct Competitors Mapped" })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "flex -space-x-2", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxs("div", { className: "w-7 h-7 rounded-full border-2 border-[#0A0A0A] bg-gray-800 flex items-center justify-center relative overflow-hidden", children: [
                          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" }),
                          /* @__PURE__ */ jsxs("span", { className: "text-[9px] font-mono text-gray-400 relative z-10", children: [
                            "C",
                            i
                          ] })
                        ] }, i)) })
                      ] }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4", children: "Finalists Selected" }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: [
                        { name: "Rafael Silva", role: "Country Manager", prev: "Ex-Uber", exp: "12y exp", ask: "$65k" },
                        { name: "Mariana Costa", role: "Head of Latam", prev: "Ex-Rappi", exp: "10y exp", ask: "$68k" },
                        { name: "Thiago Mendes", role: "GM Brazil", prev: "Ex-WeWork", exp: "14y exp", ask: "$70k" }
                      ].map((c, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsxs("div", { className: "w-8 h-8 rounded-full bg-kaptas-green/10 flex items-center justify-center text-kaptas-green text-xs font-bold border border-kaptas-green/20", children: [
                            c.name.charAt(0),
                            c.name.split(" ")[1].charAt(0)
                          ] }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-white", children: c.name }),
                            /* @__PURE__ */ jsxs("div", { className: "text-[10px] text-gray-500 flex items-center gap-2", children: [
                              /* @__PURE__ */ jsx("span", { children: c.role }),
                              /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-gray-700" }),
                              /* @__PURE__ */ jsx("span", { children: c.exp })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end gap-1", children: [
                          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-gray-400 bg-black/50 px-2 py-0.5 rounded border border-white/5", children: c.prev }),
                          /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-mono text-kaptas-green", children: [
                            c.ask,
                            " ask"
                          ] })
                        ] })
                      ] }, i)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-6 lg:p-8 relative flex flex-col", children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,67,197,0.03)_0%,transparent_70%)] pointer-events-none" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4", children: "Mandatory Local Costs (EOR/CLT)" }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-0.5 flex-grow", children: [
                        { label: "Meal Voucher", value: "R$2,000 (~$400) / mo" },
                        { label: "Health Plan", value: "R$1,500 (~$300) / mo" },
                        { label: "13th Salary", value: "1 extra monthly salary / yr" },
                        { label: "Vacation", value: "30 days + 1/3 monthly salary bonus" },
                        { label: "FGTS (Severance)", value: "8% of monthly salary" },
                        { label: "INSS (Social Security)", value: "Varies by salary tier" },
                        { label: "Income Tax (IRRF)", value: "Varies by salary tier" },
                        { label: "Mobility", value: "Based on LATAM travel" }
                      ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-3 border-b border-white/5 last:border-0 group/item", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400 group-hover/item:text-gray-300 transition-colors", children: item.label }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-white text-right", children: item.value })
                      ] }, i)) }),
                      /* @__PURE__ */ jsx("div", { className: "mt-8 pt-6 border-t border-white/10", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-400 leading-relaxed", children: [
                        /* @__PURE__ */ jsx("strong", { className: "text-white font-medium", children: "Brazilian labor law is complex." }),
                        " We help you navigate the bureaucracy, structure the most efficient offer, and ensure total compliance so you can focus on scaling."
                      ] }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "px-6 md:px-8 py-5 border-t border-white/10 bg-gradient-to-r from-kaptas-green/5 to-transparent flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4", children: [
                    /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-300 font-light", children: [
                      /* @__PURE__ */ jsx("strong", { className: "text-white font-medium", children: "Structure Defined." }),
                      " EOR Model Selected. Commencing Headhunting."
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-kaptas-green/10 border border-kaptas-green/20 px-3 py-1.5 rounded-full", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-kaptas-green animate-pulse" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono font-bold text-kaptas-green tracking-wider", children: "ACTIVE" })
                    ] })
                  ] })
                ] })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(motion.section, { ...fadeIn, className: "px-6 md:px-12 max-w-7xl mx-auto w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4", children: "Your local operating partner" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 font-light", children: "We know the market. We'll help you navigate the complexities of hiring in Brazil." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-kaptas-purple/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-kaptas-purple/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(125,67,197,0.15),_transparent_50%)]" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-kaptas-purple font-mono text-[10px] font-bold tracking-widest uppercase mb-4 bg-kaptas-purple/10 px-2.5 py-1 rounded-full border border-kaptas-purple/20", children: [
                  /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-kaptas-purple rounded-full animate-pulse" }),
                  "Strategic Partner"
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold text-white mb-3", children: "The blueprint for your first local hire" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-base leading-relaxed max-w-xl font-light", children: "We map competitors, benchmark compensation, and define the optimal hiring structure while we headhunt your foundational team. Whether you use your own EOR provider or partner with us, our primary focus is securing the exact talent you need to scale." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 opacity-60", children: [
                /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx("div", { className: `w-1 h-3 rounded-full ${i === 2 ? "bg-kaptas-purple" : "bg-white/20"}` }, i)) }),
                /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono text-gray-500 tracking-widest", children: "STRATEGY_AND_EXECUTION" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-kaptas-green/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-kaptas-green/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,_rgba(0,179,86,0.1),_transparent_60%)]" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "90 to 180-day guarantee" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed font-light", children: "We eliminate the risk of entering a new market. If a hire doesn't work out within the first 90 to 180 days, we execute a full replacement search at absolutely no additional cost." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border border-white/10 rounded-lg p-3 bg-white/5", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-gray-500 tracking-widest", children: "REPLACEMENT_FEE" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-kaptas-green font-bold", children: "$0.00" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border border-kaptas-green/30 rounded-lg p-3 bg-kaptas-green/5", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-kaptas-green tracking-widest", children: "GUARANTEE_PERIOD" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-kaptas-green", children: "ACTIVE" }),
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-kaptas-green rounded-full shadow-[0_0_8px_rgba(0,179,86,0.8)] animate-pulse" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Local market mastery" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed font-light", children: "Brazilian labor law (CLT) is notoriously complex. We navigate the mandatory benefits, 13th salaries, and severance rules to protect your operation." })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-8 text-3xl font-black text-white/5 tracking-tighter group-hover:text-white/10 transition-colors", children: "BR_COMPLIANCE" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Foundational hires" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed font-light", children: "We specialize in the critical first hires, Country Managers, GMs, and Head of Sales, who will build and scale your physical presence in the Brazilian market." })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-col gap-2", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] font-mono text-gray-500", children: [
                /* @__PURE__ */ jsx("span", { children: "LEADERSHIP_NODE" }),
                /* @__PURE__ */ jsx("span", { className: "text-blue-500", children: "● SECURED" })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#0A0A0A] p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-kaptas-green/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-kaptas-green/10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-kaptas-green/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Physical & On-site focus" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed font-light", children: "Unlike our remote staffing services, this is built for companies establishing a physical footprint or local market presence in Brazil." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-between border border-white/10 rounded-lg p-3 bg-white/5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-gray-500 tracking-widest", children: "ON_SITE_BR" }),
                /* @__PURE__ */ jsx("div", { className: "w-8 h-4 bg-kaptas-green/20 rounded-full p-0.5 relative border border-kaptas-green/30", children: /* @__PURE__ */ jsx("div", { className: "absolute right-0.5 top-0.5 w-2.5 h-2.5 bg-kaptas-green rounded-full shadow-[0_0_8px_rgba(0,179,86,0.8)]" }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxs("a", { href: "#lead-form", className: "bg-kaptas-green text-[#111111] hover:bg-[#00994A] px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-2", children: [
          "Plan your market entry ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(
        CaseResults,
        {
          title: "Results from companies entering Brazil",
          subtitle: "Real outcomes from companies that hired their first local teams through Kaptas Global.",
          badges: [
            "MARKET ENTRY EXPERTISE",
            "FIRST HIRE TO FULL TEAM",
            "GLOBAL COMPANIES SERVED"
          ],
          cases: [
            {
              tag: "Case 01 // MARKET ENTRY",
              metricPrefix: "0 → ",
              metric: "5",
              title: "First hires in a new market",
              description: "A Chinese oil company needed to build their entire Brazil operation from scratch. No local knowledge, no network, no compensation benchmarks. We mapped the market, defined the hiring structure, and placed five key roles including General Manager, Marketing Manager, and HR. Every hire came with the local network needed to generate new business from day one.",
              colorClass: "bg-kaptas-green",
              glowClass: "bg-kaptas-green/5"
            },
            {
              tag: "Case 02 // SPEED",
              metric: "30",
              metricSuffix: " days",
              title: "Full team migrated",
              description: "A global food and beverage company needed to relocate part of their tech operation to Brazil. SAP specialists, management roles, and technical positions. We sourced, vetted, and placed the entire team in one month.",
              colorClass: "bg-kaptas-purple",
              glowClass: "bg-kaptas-purple/10"
            },
            {
              tag: "Case 03 // MARKET ACCESS",
              metric: "1",
              metricSuffix: " hire",
              title: "Instant market entry",
              description: "A cryptocurrency company needed a Community Manager with deep knowledge of the Brazilian and Latin American market. We found a professional with the exact network and local credibility to accelerate their regional expansion.",
              colorClass: "bg-blue-500",
              glowClass: "bg-blue-500/5"
            }
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { id: "lead-form", className: "w-full flex flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-gradient-to-b from-[#111111] to-[#F9FAFB] w-full relative z-10" }),
        /* @__PURE__ */ jsx(
          LeadGenerationForm,
          {
            source: "Hire in Brazil — Bottom",
            headline: /* @__PURE__ */ jsxs(Fragment, { children: [
              "Let's make your first hire ",
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#111111]", children: "in Brazil." })
            ] }),
            subtext: "Get a shortlist of pre-vetted foundational leaders ready to scale your presence. No ongoing fees, no middleman after the hire."
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-gradient-to-b from-[#F9FAFB] to-[#111111] w-full relative z-10" })
      ] }),
      /* @__PURE__ */ jsxs(motion.section, { ...fadeIn, className: "px-6 md:px-12 max-w-3xl mx-auto w-full mb-32", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Everything you need to know about starting your operation in Brazil." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs2.map((faq, i) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `border rounded-2xl overflow-hidden transition-colors duration-300 ${openFaq === i ? "bg-[#111111] border-white/20" : "bg-transparent border-white/5 hover:border-white/10"}`,
            children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setOpenFaq(openFaq === i ? null : i),
                  className: "w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: `font-medium transition-colors ${openFaq === i ? "text-white" : "text-gray-300"}`, children: faq.q }),
                    /* @__PURE__ */ jsx("div", { className: `shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === i ? "bg-white/10 text-white" : "bg-transparent text-gray-500"}`, children: openFaq === i ? /* @__PURE__ */ jsx(Minus, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { children: openFaq === i && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.3, ease: "easeInOut" },
                  children: /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 text-gray-400 text-sm leading-relaxed", "data-speakable": "true", children: faq.a })
                }
              ) })
            ]
          },
          i
        )) })
      ] })
    ] })
  ] });
}
const EBOOK_URL = "https://ebook-22gajw1.gamma.site/";
const EBOOK_TITLE = "The Smart Guide to Hiring Brazilian Engineers";
const EBOOK_SUBTITLE = "A founder's playbook for hiring senior remote engineering talent in Brazil — costs, contract models, vetting, and the operational reality of running a nearshore engineering team in 2026.";
const WEB3FORMS_KEY = "";
const valueProps = [
  { icon: DollarSign, text: "What a senior Brazilian engineer actually costs in 2026 — loaded cost, not just gross salary" },
  { icon: FileText, text: "CLT vs PJ vs EOR — choosing the right contract model for your stage" },
  { icon: Users, text: "How to evaluate technical depth and business English beyond the resume" },
  { icon: Globe, text: "Time zone, async communication, and remote-readiness — what to expect day-to-day" },
  { icon: Clock, text: "The 5 most common pitfalls on a first Brazilian hire — and how to avoid them" }
];
const ebookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  "name": EBOOK_TITLE,
  "url": `${SITE_URL}/ebook`,
  "description": EBOOK_SUBTITLE,
  "inLanguage": "en-US",
  "bookFormat": "https://schema.org/EBook",
  "publisher": { "@id": ORG_ID },
  "author": { "@id": ORG_ID },
  "isAccessibleForFree": false,
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": `${SITE_URL}/ebook`,
    "eligibleRegion": { "@type": "Place", "name": "Worldwide" }
  }
};
const ebookBreadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: `${SITE_URL}/` },
  { name: "Ebook", url: `${SITE_URL}/ebook` }
]);
const INITIAL_FORM = { name: "", email: "", company: "", role: "" };
function Ebook() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [error, setError] = useState("");
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.company || !form.role) {
      setError("Please fill in all fields so we can deliver the guide.");
      return;
    }
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Ebook download — ${form.name} (${form.role} at ${form.company})`,
          from_name: "Kaptas Global Website — Ebook",
          source: "Ebook — The Smart Guide to Hiring Brazilian Engineers",
          name: form.name,
          email: form.email,
          company: form.company,
          role: form.role,
          page_url: typeof window !== "undefined" ? window.location.href : `${SITE_URL}/ebook`
        })
      });
      const data = await res.json();
      if (data.success) {
        setDownloaded(true);
        window.open(EBOOK_URL, "_blank", "noopener,noreferrer");
      } else {
        setError(data.message || "Something went wrong. Please email us at support@kaptasglobal.io and we will send the guide.");
      }
    } catch {
      setError("Network error. Please check your connection and try again, or email support@kaptasglobal.io.");
    } finally {
      setIsSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "The Smart Guide to Hiring Brazilian Engineers — Free Guide | Kaptas Global",
        description: "Free interactive guide for founders and CTOs hiring senior remote engineers in Brazil. Costs, contract models (CLT, PJ, EOR), vetting, time zone reality, common pitfalls. 2026 edition.",
        keywords: "hiring brazilian engineers guide, hire brazil developers ebook, CLT PJ EOR guide, nearshore brazil hiring guide, brazilian developer salary guide, kaptas global ebook",
        canonical: "https://kaptasglobal.io/ebook",
        schemas: [organizationSchema, ebookSchema, ebookBreadcrumb]
      }
    ),
    /* @__PURE__ */ jsx(AEOContent, { paragraph: AEO_PARAGRAPHS.ebook, label: "Hiring Brazilian Engineers guide overview" }),
    /* @__PURE__ */ jsxs(
      motion.section,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
        className: "relative pt-8 lg:pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_top_right,_#0047FF22,transparent_70%)] blur-[120px] pointer-events-none" }),
          /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95, rotateY: -8 },
                animate: { opacity: 1, scale: 1, rotateY: -6 },
                transition: { duration: 0.9, delay: 0.1, ease: "easeOut" },
                className: "relative mx-auto lg:mx-0 [perspective:1500px]",
                style: { transformStyle: "preserve-3d" },
                children: /* @__PURE__ */ jsxs("div", { className: "relative w-[280px] sm:w-[340px] aspect-[3/4] rounded-r-2xl rounded-l-md overflow-hidden border border-white/10 shadow-[20px_30px_80px_-20px_rgba(0,0,0,0.8),_4px_4px_0_rgba(255,255,255,0.04)]", style: { transform: "rotateY(-6deg)" }, children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#050505]" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--color-kaptas-green)_0%,transparent_45%)] opacity-20" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-kaptas-purple)_0%,transparent_55%)] opacity-15" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-kaptas-green via-kaptas-purple to-kaptas-green" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative z-10 h-full flex flex-col p-7 sm:p-9", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded border border-kaptas-green/40 bg-kaptas-green/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-3 h-3 text-kaptas-green", strokeWidth: 2 }) }),
                      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold uppercase tracking-[0.25em] text-kaptas-green", children: "Free Guide · 2026 Edition" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col justify-center", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500 mb-3", children: "The Smart Guide to" }),
                      /* @__PURE__ */ jsx("h2", { className: "text-[34px] sm:text-[42px] font-extrabold tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-3", children: "Hiring Brazilian Engineers" }),
                      /* @__PURE__ */ jsx("div", { className: "h-[2px] w-12 bg-gradient-to-r from-kaptas-green to-kaptas-purple mb-3" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 leading-relaxed max-w-[240px]", children: "A founder's playbook for senior remote engineering hires." })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60", children: "Kaptas Global" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-gray-600", children: "kaptasglobal.io" })
                    ] })
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "max-w-xl w-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center text-kaptas-green backdrop-blur-sm", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-5 h-5", strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-gray-400", children: "Free Ebook" })
              ] }),
              /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-5 text-white", children: [
                "The Smart Guide to",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-kaptas-green to-kaptas-purple", children: "Hiring Brazilian Engineers" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 mb-8 leading-relaxed font-light", children: EBOOK_SUBTITLE }),
              /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-3 mb-10", children: valueProps.map((vp, i) => /* @__PURE__ */ jsxs(
                motion.li,
                {
                  initial: { opacity: 0, x: -8 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.4, delay: 0.15 + i * 0.06 },
                  className: "flex items-start gap-3 text-sm text-gray-300",
                  children: [
                    /* @__PURE__ */ jsx(vp.icon, { className: "w-4 h-4 mt-0.5 text-kaptas-green shrink-0", strokeWidth: 2 }),
                    /* @__PURE__ */ jsx("span", { children: vp.text })
                  ]
                },
                i
              )) }),
              !downloaded ? /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-3 p-6 border border-white/10 bg-white/[0.02] rounded-2xl backdrop-blur-sm", children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-1", children: "Get the guide" }),
                /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "name",
                      value: form.name,
                      onChange: handleChange,
                      placeholder: "Full name",
                      autoComplete: "name",
                      required: true,
                      className: "bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-kaptas-green focus:bg-white/10 transition"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      name: "email",
                      value: form.email,
                      onChange: handleChange,
                      placeholder: "Work email",
                      autoComplete: "email",
                      required: true,
                      className: "bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-kaptas-green focus:bg-white/10 transition"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "company",
                      value: form.company,
                      onChange: handleChange,
                      placeholder: "Company",
                      autoComplete: "organization",
                      required: true,
                      className: "bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-kaptas-green focus:bg-white/10 transition"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "role",
                      value: form.role,
                      onChange: handleChange,
                      placeholder: "Your role (e.g. CTO, Founder)",
                      autoComplete: "organization-title",
                      required: true,
                      className: "bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-kaptas-green focus:bg-white/10 transition"
                    }
                  )
                ] }),
                error && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-400 mt-1", role: "alert", children: error }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: isSubmitting,
                    className: "mt-2 bg-kaptas-green text-kaptas-black px-5 py-3 rounded-lg border border-kaptas-green text-sm font-semibold hover:brightness-90 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_18px_var(--color-kaptas-green)] disabled:opacity-60 disabled:cursor-not-allowed",
                    children: isSubmitting ? "Opening your guide…" : /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" }),
                      "Get the guide"
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 mt-1 leading-relaxed", children: [
                  "We use your details to unlock the guide and the occasional follow-up if relevant. See our ",
                  /* @__PURE__ */ jsx(Link, { to: "/privacy-policy", className: "underline hover:text-kaptas-green", children: "Privacy Policy" }),
                  "."
                ] })
              ] }) : /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5 },
                  className: "p-7 border border-kaptas-green/30 bg-kaptas-green/[0.05] rounded-2xl backdrop-blur-sm",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-5", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-kaptas-green shrink-0 mt-0.5", strokeWidth: 2 }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h2", { className: "text-white font-bold text-lg mb-1", children: "Your guide is ready" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 leading-relaxed", children: "The guide opens in a new tab. If it did not open automatically, use the button below." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: EBOOK_URL,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "bg-kaptas-green text-kaptas-black px-5 py-3 rounded-lg border border-kaptas-green text-sm font-semibold hover:brightness-90 transition-all duration-300 inline-flex items-center gap-2 hover:shadow-[0_0_18px_var(--color-kaptas-green)]",
                        children: [
                          "Open the guide",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-5 border-t border-white/10", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 mb-3", children: "While you have a moment:" }),
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
                        /* @__PURE__ */ jsx(
                          Link,
                          {
                            to: "/pricing",
                            className: "text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition",
                            children: "See pricing"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          Link,
                          {
                            to: "/direct-hire",
                            className: "text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition",
                            children: "Direct Hire"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          Link,
                          {
                            to: "/contractor-staffing",
                            className: "text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition",
                            children: "Outsourcing & Staffing"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          Link,
                          {
                            to: "/blog",
                            className: "text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition",
                            children: "Read the blog"
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-24 text-center", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.2em] text-gray-500 mb-4 font-semibold", children: "Ready to skip the guide and talk to someone?" }),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/pricing",
                className: "inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-lg border border-white/20 text-sm font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300",
                children: [
                  "See pricing",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
}
const LAST_UPDATED$1 = "May 18, 2026";
const EFFECTIVE_DATE$1 = "May 18, 2026";
const sections$1 = [
  { id: "introduction", label: "1. Introduction" },
  { id: "scope", label: "2. Who This Policy Applies To" },
  { id: "information-we-collect", label: "3. Information We Collect" },
  { id: "how-we-use", label: "4. How We Use Information" },
  { id: "legal-bases", label: "5. Legal Bases for Processing" },
  { id: "how-we-share", label: "6. How We Share Information" },
  { id: "service-providers", label: "7. Service Providers and Sub-Processors" },
  { id: "international-transfers", label: "8. International Data Transfers" },
  { id: "retention", label: "9. Data Retention" },
  { id: "security", label: "10. Information Security" },
  { id: "your-rights", label: "11. Your Rights" },
  { id: "rights-lgpd", label: "11.1 Rights Under LGPD (Brazil)" },
  { id: "rights-gdpr", label: "11.2 Rights Under GDPR (EEA / UK)" },
  { id: "rights-ccpa", label: "11.3 Rights Under CCPA/CPRA (California)" },
  { id: "how-to-exercise", label: "12. How to Exercise Your Rights" },
  { id: "cookies", label: "13. Cookies and Similar Technologies" },
  { id: "ai", label: "14. Artificial Intelligence Features" },
  { id: "children", label: "15. Children's Privacy" },
  { id: "changes", label: "16. Changes to This Policy" },
  { id: "contact", label: "17. Contact and Data Protection Inquiries" }
];
const privacyPolicySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy — Kaptas Global",
  "url": "https://kaptasglobal.io/privacy-policy",
  "description": "How Kaptas Global collects, uses, and protects personal information. Covers LGPD (Brazil), GDPR (EEA/UK), and CCPA/CPRA (California) rights.",
  "inLanguage": "en-US",
  "dateModified": "2026-05-18",
  "publisher": { "@type": "Organization", "name": "Kaptas Global", "url": "https://kaptasglobal.io" },
  "about": { "@type": "Thing", "name": "Privacy practices and data protection rights" }
};
function PrivacyPolicy() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Privacy Policy — Kaptas Global",
        description: "How Kaptas Global collects, uses, shares, and protects personal information. Includes data subject rights under LGPD (Brazil), GDPR (EEA/UK), and CCPA/CPRA (California).",
        keywords: "kaptas global privacy policy, data protection, LGPD, GDPR, CCPA, personal data, data subject rights",
        canonical: "https://kaptasglobal.io/privacy-policy",
        schemas: [
          organizationSchema,
          privacyPolicySchema,
          buildBreadcrumbSchema([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Privacy Policy", url: `${SITE_URL}/privacy-policy` }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.section,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
        className: "relative pt-8 lg:pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_top_right,_#0047FF22,transparent_70%)] blur-[120px] pointer-events-none" }),
          /* @__PURE__ */ jsxs("header", { className: "mb-12 lg:mb-16 max-w-4xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center text-kaptas-green backdrop-blur-sm", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5", strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-gray-400", children: "Legal" })
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white", children: [
              "Privacy",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-kaptas-green to-kaptas-purple", children: "Policy" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light mb-6", children: "How Kaptas Global collects, uses, shares, and protects personal information — and the rights you have over it." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-white font-medium", children: "Effective:" }),
                " ",
                EFFECTIVE_DATE$1
              ] }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-white font-medium", children: "Last Updated:" }),
                " ",
                LAST_UPDATED$1
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-12 lg:gap-16", children: [
            /* @__PURE__ */ jsx("aside", { className: "lg:w-64 lg:shrink-0", children: /* @__PURE__ */ jsxs("div", { className: "lg:sticky lg:top-32 border border-white/10 rounded-2xl p-6 bg-white/[0.02] backdrop-blur-sm", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4", children: "On this page" }),
              /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2.5 text-sm", children: sections$1.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `#${s.id}`,
                  className: `text-gray-400 hover:text-kaptas-green transition-colors block ${s.id.startsWith("rights-") ? "pl-3 text-xs text-gray-500" : ""}`,
                  children: s.label
                }
              ) }, s.id)) }) })
            ] }) }),
            /* @__PURE__ */ jsxs(
              "article",
              {
                className: "flex-1 max-w-3xl prose prose-invert prose-lg\n              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white\n              prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:scroll-mt-32\n              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-3 prose-h3:scroll-mt-32 prose-h3:text-white\n              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-5\n              prose-a:text-kaptas-green prose-a:no-underline hover:prose-a:underline\n              prose-strong:text-white prose-strong:font-semibold\n              prose-ul:text-gray-300 prose-ul:my-5\n              prose-li:mb-2 prose-li:marker:text-gray-600\n              prose-table:text-sm\n              prose-th:text-white prose-th:font-semibold\n              prose-td:text-gray-300 prose-td:border-white/10\n              max-w-none",
                children: [
                  /* @__PURE__ */ jsx("h2", { id: "introduction", children: "1. Introduction" }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "HR Technology LLC, a Florida limited liability company doing business as ",
                    /* @__PURE__ */ jsx("strong", { children: "Kaptas Global" }),
                    " (",
                    /* @__PURE__ */ jsx("strong", { children: '"Kaptas Global,"' }),
                    " ",
                    /* @__PURE__ */ jsx("strong", { children: '"we,"' }),
                    " ",
                    /* @__PURE__ */ jsx("strong", { children: '"us,"' }),
                    " or ",
                    /* @__PURE__ */ jsx("strong", { children: '"our"' }),
                    "), provides recruitment, staffing, and market-entry services that connect companies — primarily in the United States — with senior professionals based in Brazil and other Latin American countries. We operate the website at ",
                    /* @__PURE__ */ jsx("a", { href: "https://kaptasglobal.io", children: "kaptasglobal.io" }),
                    " (the ",
                    /* @__PURE__ */ jsx("strong", { children: '"Site"' }),
                    ") and offer related services described at that address (collectively, the ",
                    /* @__PURE__ */ jsx("strong", { children: '"Services"' }),
                    ")."
                  ] }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "This Privacy Policy describes how we collect, use, share, and protect personal information when you interact with the Site or Services. It also explains the rights you have over your personal information under the General Data Protection Law of Brazil (",
                    /* @__PURE__ */ jsx("strong", { children: "LGPD" }),
                    "), the General Data Protection Regulation of the European Union and United Kingdom (",
                    /* @__PURE__ */ jsx("strong", { children: "GDPR / UK GDPR" }),
                    "), and the California Consumer Privacy Act as amended by the California Privacy Rights Act (",
                    /* @__PURE__ */ jsx("strong", { children: "CCPA/CPRA" }),
                    "), where applicable."
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "We have written this Policy to be as clear and specific as possible. If anything is unclear, please contact us using the information in Section 17." }),
                  /* @__PURE__ */ jsx("h2", { id: "scope", children: "2. Who This Policy Applies To" }),
                  /* @__PURE__ */ jsx("p", { children: "This Policy applies to personal information we process about:" }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Clients and prospects" }),
                      " — representatives of companies that hire (or consider hiring) talent through Kaptas Global."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Candidates and professionals" }),
                      " — individuals we source, screen, present to clients, or place with clients."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Site visitors" }),
                      " — anyone who browses our website, downloads materials, or fills out a contact form."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Subscribers" }),
                      " — recipients of our newsletter and other marketing communications."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "This Policy does not apply to personal information our clients process under their own privacy notices once a candidate has been hired and an employment, contractor, or service relationship is established with the client." }),
                  /* @__PURE__ */ jsx("h2", { id: "information-we-collect", children: "3. Information We Collect" }),
                  /* @__PURE__ */ jsx("p", { children: "We collect the following categories of personal information:" }),
                  /* @__PURE__ */ jsx("h3", { children: "3.1 Information You Provide Directly" }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Contact data" }),
                      ": full name, business email, company, role, country, phone (when provided)."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Hiring-need data" }),
                      ": information you share through our forms about roles you want to fill, seniority, tech stack, budget range, timeline, and preferred hiring model."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Candidate data" }),
                      ": when you apply or are sourced — name, email, location, professional profile, resume content, work history, language proficiency, salary expectations, and references."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Communications" }),
                      ": messages, attachments, and notes from emails, calls, video meetings, and chat exchanges with our team."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { children: "3.2 Information Collected Automatically" }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Device and usage data" }),
                      ": IP address, browser type and version, operating system, referring URL, pages viewed, time on page, and links clicked."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Approximate location" }),
                      ": derived from IP address (city/country level), not precise GPS."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Cookies and similar technologies" }),
                      ": see Section 13."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { children: "3.3 Information From Other Sources" }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Public professional profiles" }),
                      ": when we source candidates, we may collect information from publicly available sources such as LinkedIn, GitHub, professional directories, and personal websites."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "References" }),
                      ": information shared by professional references with the candidate's consent."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Business partners" }),
                      ": lead-generation, analytics, and outreach tools we use to identify and engage prospective clients."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "We do not knowingly collect ",
                    /* @__PURE__ */ jsx("strong", { children: "sensitive personal data" }),
                    " (such as data about racial origin, religion, health, sexual orientation, political opinions, or trade-union membership). If such information is incidentally included in a candidate's profile or resume, we do not use it for screening and we remove it where reasonably possible."
                  ] }),
                  /* @__PURE__ */ jsx("h2", { id: "how-we-use", children: "4. How We Use Information" }),
                  /* @__PURE__ */ jsx("p", { children: "We use personal information for the following purposes:" }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "To deliver our Services" }),
                      ": sourcing, screening, presenting candidates to clients, coordinating interviews, managing placements, and supporting payroll and compliance."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "To communicate with you" }),
                      ": respond to inquiries, schedule calls, send proposals and contracts, and follow up on ongoing engagements."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "To market our Services" }),
                      ": send relevant content and offers to prospective clients, subject to applicable opt-out and consent requirements."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "To improve the Site and Services" }),
                      ": understand how visitors use the Site, troubleshoot issues, and refine our content and product strategy."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "To comply with law and protect rights" }),
                      ": meet legal obligations, enforce our Terms of Service, prevent fraud, and protect the safety of users and third parties."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "We do not sell personal information for monetary consideration, and we do not engage in profiling that produces legal or similarly significant effects on you without human review." }),
                  /* @__PURE__ */ jsx("h2", { id: "legal-bases", children: "5. Legal Bases for Processing" }),
                  /* @__PURE__ */ jsx("p", { children: "Where the LGPD, GDPR, or UK GDPR applies, we rely on the following legal bases:" }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Contract performance" }),
                      " — to provide the Services you or your employer have requested."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Legitimate interests" }),
                      " — to run, secure, and grow our business (including B2B outreach to professional contacts at companies that match our ideal client profile), balanced against your interests and rights."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Consent" }),
                      " — for marketing communications where consent is required, for non-essential cookies, and for processing in jurisdictions where consent is the appropriate basis."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Legal obligation" }),
                      " — to comply with applicable law, regulation, court order, or government request."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "You can withdraw consent at any time without affecting the lawfulness of processing carried out before withdrawal." }),
                  /* @__PURE__ */ jsx("h2", { id: "how-we-share", children: "6. How We Share Information" }),
                  /* @__PURE__ */ jsx("p", { children: "We share personal information only as described below:" }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "With clients" }),
                      " — when we present qualified candidates, we share the candidate's professional profile and screening notes with the prospective employer. Candidates are informed before their profile is shared."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "With service providers" }),
                      " — vendors that help us run the Site and the Services (see Section 7)."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "With professional and legal advisors" }),
                      " — accountants, lawyers, and auditors under confidentiality obligations."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "In business transactions" }),
                      " — if we are involved in a merger, acquisition, financing, or sale of assets, personal information may be disclosed to the counterparty under appropriate safeguards."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "For legal reasons" }),
                      " — to comply with law, respond to lawful requests, enforce our agreements, or protect rights, property, and safety."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "We do not share personal information with third parties for their own independent marketing without your consent." }),
                  /* @__PURE__ */ jsx("h2", { id: "service-providers", children: "7. Service Providers and Sub-Processors" }),
                  /* @__PURE__ */ jsx("p", { children: "We use a limited set of trusted vendors to operate the Site and Services. As of the Last Updated date above, these include:" }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Vercel Inc." }),
                      " — website hosting and content delivery."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Web3Forms" }),
                      " — secure transmission of contact-form submissions to our team."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Google LLC" }),
                      " — Gemini AI API for the AI-assisted features on the Site, and Google Workspace for internal email and file storage."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "LinkedIn" }),
                      " — sourcing and professional outreach."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Email and CRM tools" }),
                      " — to manage sales pipeline and client relationships."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "Each provider processes personal information only on our instructions and under contractual obligations that include security, confidentiality, and data-protection requirements appropriate to the processing." }),
                  /* @__PURE__ */ jsx("h2", { id: "international-transfers", children: "8. International Data Transfers" }),
                  /* @__PURE__ */ jsx("p", { children: "Kaptas Global is incorporated in the United States and operates a distributed team that includes Brazil and other Latin American countries. As a result, personal information may be transferred to, processed in, and stored in countries other than the country where it was collected — including the United States and Brazil — which may have data-protection laws that differ from those in your jurisdiction." }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "When we transfer personal information from the European Economic Area, the United Kingdom, Switzerland, or Brazil to countries that have not been recognized as offering an adequate level of protection, we use appropriate safeguards, including ",
                    /* @__PURE__ */ jsx("strong", { children: "Standard Contractual Clauses" }),
                    " approved by the European Commission and equivalent mechanisms recognized by the ANPD in Brazil."
                  ] }),
                  /* @__PURE__ */ jsx("h2", { id: "retention", children: "9. Data Retention" }),
                  /* @__PURE__ */ jsx("p", { children: "We retain personal information only as long as necessary for the purposes described in this Policy or as required by law. In general:" }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Client and prospect data" }),
                      " — for the duration of the relationship and up to ",
                      /* @__PURE__ */ jsx("strong", { children: "five (5) years" }),
                      " after the last interaction, to support repeat engagements and comply with commercial-record obligations."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Candidate data" }),
                      " — up to ",
                      /* @__PURE__ */ jsx("strong", { children: "two (2) years" }),
                      " after the last interaction, unless the candidate has been placed (in which case we retain the engagement record for the period required by labor and tax law)."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Marketing-list data" }),
                      " — until you unsubscribe or otherwise withdraw consent."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Site analytics" }),
                      " — typically up to ",
                      /* @__PURE__ */ jsx("strong", { children: "fourteen (14) months" }),
                      " in identifiable form."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Records required by law" }),
                      " — for the legally mandated retention period (for example, tax and accounting records)."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "After the applicable retention period, we delete, anonymize, or aggregate the information." }),
                  /* @__PURE__ */ jsx("h2", { id: "security", children: "10. Information Security" }),
                  /* @__PURE__ */ jsx("p", { children: "We apply technical and organizational measures designed to protect personal information against unauthorized access, alteration, disclosure, and destruction. These measures include encryption of data in transit (HTTPS/TLS), access controls, the principle of least privilege, regular software updates, and ongoing review of our security posture." }),
                  /* @__PURE__ */ jsx("p", { children: "No system can be guaranteed to be completely secure. If we become aware of a personal-data breach that is likely to result in a risk to your rights and freedoms, we will notify affected individuals and the competent authorities as required by applicable law." }),
                  /* @__PURE__ */ jsx("h2", { id: "your-rights", children: "11. Your Rights" }),
                  /* @__PURE__ */ jsx("p", { children: "You have rights over your personal information. The specific rights depend on where you live and the law that applies. The sections below summarize the most common frameworks. We honor verified requests from any individual, regardless of jurisdiction, to the extent feasible." }),
                  /* @__PURE__ */ jsx("h3", { id: "rights-lgpd", children: "11.1 Rights Under LGPD (Brazil)" }),
                  /* @__PURE__ */ jsx("p", { children: "If you are in Brazil, you have the right to:" }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    /* @__PURE__ */ jsx("li", { children: "Confirm the existence of processing of your personal data." }),
                    /* @__PURE__ */ jsx("li", { children: "Access your personal data." }),
                    /* @__PURE__ */ jsx("li", { children: "Correct incomplete, inaccurate, or outdated data." }),
                    /* @__PURE__ */ jsx("li", { children: "Anonymize, block, or delete unnecessary, excessive, or unlawfully processed data." }),
                    /* @__PURE__ */ jsx("li", { children: "Request the portability of your data to another service or product provider." }),
                    /* @__PURE__ */ jsx("li", { children: "Delete personal data processed on the basis of consent." }),
                    /* @__PURE__ */ jsx("li", { children: "Receive information about the public and private entities with which we share your data." }),
                    /* @__PURE__ */ jsx("li", { children: "Be informed about the possibility of denying consent and the consequences of that denial." }),
                    /* @__PURE__ */ jsx("li", { children: "Withdraw consent at any time." }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      "File a complaint with the Brazilian Data Protection Authority (",
                      /* @__PURE__ */ jsx("strong", { children: "ANPD" }),
                      ")."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { id: "rights-gdpr", children: "11.2 Rights Under GDPR (EEA / UK)" }),
                  /* @__PURE__ */ jsx("p", { children: "If you are in the European Economic Area, the United Kingdom, or Switzerland, you have the right to:" }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    /* @__PURE__ */ jsx("li", { children: "Access your personal data." }),
                    /* @__PURE__ */ jsx("li", { children: "Request rectification of inaccurate data." }),
                    /* @__PURE__ */ jsx("li", { children: 'Request erasure ("the right to be forgotten") in certain circumstances.' }),
                    /* @__PURE__ */ jsx("li", { children: "Restrict processing in certain circumstances." }),
                    /* @__PURE__ */ jsx("li", { children: "Object to processing carried out on the basis of legitimate interests, including for direct marketing." }),
                    /* @__PURE__ */ jsx("li", { children: "Receive your personal data in a portable format." }),
                    /* @__PURE__ */ jsx("li", { children: "Withdraw consent at any time." }),
                    /* @__PURE__ */ jsx("li", { children: "Lodge a complaint with your local data-protection supervisory authority." })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { id: "rights-ccpa", children: "11.3 Rights Under CCPA/CPRA (California)" }),
                  /* @__PURE__ */ jsx("p", { children: "If you are a California resident, you have the right to:" }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    /* @__PURE__ */ jsx("li", { children: 'Know what personal information we collect, use, disclose, and (where applicable) "share" or "sell" — as those terms are defined under California law.' }),
                    /* @__PURE__ */ jsx("li", { children: "Access the specific pieces and categories of personal information we have collected." }),
                    /* @__PURE__ */ jsx("li", { children: "Request deletion of personal information, subject to legal exceptions." }),
                    /* @__PURE__ */ jsx("li", { children: "Correct inaccurate personal information." }),
                    /* @__PURE__ */ jsx("li", { children: "Limit the use and disclosure of sensitive personal information." }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      'Opt out of the "sale" or "sharing" of personal information for cross-context behavioral advertising. ',
                      /* @__PURE__ */ jsx("strong", { children: "We do not sell or share personal information as those terms are defined under the CCPA/CPRA." })
                    ] }),
                    /* @__PURE__ */ jsx("li", { children: "Non-discrimination for exercising your privacy rights." })
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "You may designate an authorized agent to make a request on your behalf, subject to verification." }),
                  /* @__PURE__ */ jsx("h2", { id: "how-to-exercise", children: "12. How to Exercise Your Rights" }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "To exercise any of the rights described above, email ",
                    /* @__PURE__ */ jsx("a", { href: "mailto:support@kaptasglobal.io", children: "support@kaptasglobal.io" }),
                    ". Please describe your request and the jurisdiction whose rights you are invoking. We may need to verify your identity before processing the request, which typically requires confirming information we already have on file. We will respond within the timeframe required by applicable law (generally within ",
                    /* @__PURE__ */ jsx("strong", { children: "15 days" }),
                    " under LGPD and ",
                    /* @__PURE__ */ jsx("strong", { children: "30 days" }),
                    " under GDPR and CCPA/CPRA, with one possible extension where permitted)."
                  ] }),
                  /* @__PURE__ */ jsx("h2", { id: "cookies", children: "13. Cookies and Similar Technologies" }),
                  /* @__PURE__ */ jsx("p", { children: "The Site uses cookies and similar technologies (such as local storage and pixel tags) to operate the Site, remember your preferences, and understand how the Site is used. We categorize them as follows:" }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Strictly necessary" }),
                      " — required for the Site to function (e.g., load balancing, form submissions)."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Functional" }),
                      " — remember your choices, such as language or accessibility preferences."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Analytics" }),
                      " — help us understand which pages are visited and how visitors arrive at the Site. We aggregate and pseudonymize this data wherever possible."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "You can control cookies through your browser settings. If you reject non-essential cookies, parts of the Site may not function as intended." }),
                  /* @__PURE__ */ jsx("h2", { id: "ai", children: "14. Artificial Intelligence Features" }),
                  /* @__PURE__ */ jsx("p", { children: "Some features of the Site and Services use AI-assisted tools (including the Google Gemini API) to summarize information, generate first-draft content, and surface insights. When you interact with these features, the content you submit is processed by the AI provider under terms that prohibit the use of your data to train their models, and is not retained by us beyond what is necessary to deliver the requested output." }),
                  /* @__PURE__ */ jsx("p", { children: "We do not use AI to make automated decisions that produce legal or similarly significant effects on you without meaningful human review." }),
                  /* @__PURE__ */ jsx("h2", { id: "children", children: "15. Children's Privacy" }),
                  /* @__PURE__ */ jsx("p", { children: "The Site and Services are intended for use by adults in a professional context. We do not knowingly collect personal information from children under 16. If you believe we have inadvertently collected information from a child, please contact us and we will delete it." }),
                  /* @__PURE__ */ jsx("h2", { id: "changes", children: "16. Changes to This Policy" }),
                  /* @__PURE__ */ jsx("p", { children: 'We may update this Policy from time to time to reflect changes in our practices, the Services, or applicable law. The "Last Updated" date at the top of this page indicates when the Policy was last revised. Material changes will be communicated through prominent notice on the Site or, where appropriate, by email.' }),
                  /* @__PURE__ */ jsx("h2", { id: "contact", children: "17. Contact and Data Protection Inquiries" }),
                  /* @__PURE__ */ jsx("p", { children: "For any privacy-related question or to exercise the rights described in Section 11, contact us at:" }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("strong", { children: "HR Technology LLC" }),
                    " (d/b/a Kaptas Global)",
                    /* @__PURE__ */ jsx("br", {}),
                    "7345 W Sand Lake Rd, Ste 210, Office 460",
                    /* @__PURE__ */ jsx("br", {}),
                    "Orlando, FL 32819, United States",
                    /* @__PURE__ */ jsx("br", {}),
                    "Email: ",
                    /* @__PURE__ */ jsx("a", { href: "mailto:support@kaptasglobal.io", children: "support@kaptasglobal.io" }),
                    /* @__PURE__ */ jsx("br", {}),
                    "Phone: ",
                    /* @__PURE__ */ jsx("a", { href: "tel:+16892939252", children: "+1 (689) 293-9252" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-20 max-w-3xl lg:ml-[19rem]", children: [
            /* @__PURE__ */ jsxs("div", { className: "border border-white/10 bg-white/[0.02] rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center text-kaptas-green shrink-0", children: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5", strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold text-base mb-1", children: "Privacy questions?" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 max-w-md leading-relaxed", children: "Reach our team directly. We respond to data-protection requests within the timeframe required by applicable law." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "mailto:support@kaptasglobal.io",
                  className: "bg-kaptas-green text-kaptas-black px-5 py-2.5 rounded-lg border border-kaptas-green text-sm font-semibold hover:brightness-90 transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_15px_var(--color-kaptas-green)] w-fit whitespace-nowrap",
                  children: [
                    "Contact our team",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsx(Link, { to: "/terms-of-service", className: "hover:text-white transition-colors", children: "Terms of Service" }),
              /* @__PURE__ */ jsx("span", { className: "mx-3", children: "·" }),
              /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-white transition-colors", children: "Back to home" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
const LAST_UPDATED = "May 18, 2026";
const EFFECTIVE_DATE = "May 18, 2026";
const sections = [
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "services", label: "2. Description of Services" },
  { id: "eligibility", label: "3. Eligibility" },
  { id: "engagement", label: "4. Engagement Terms" },
  { id: "user-conduct", label: "5. Acceptable Use" },
  { id: "intellectual-property", label: "6. Intellectual Property" },
  { id: "candidate-content", label: "7. Candidate Information and Confidentiality" },
  { id: "non-circumvention", label: "8. Candidate Non-Circumvention" },
  { id: "third-party", label: "9. Third-Party Services and Links" },
  { id: "fees", label: "10. Fees and Payment" },
  { id: "warranties", label: "11. Disclaimers of Warranties" },
  { id: "liability", label: "12. Limitation of Liability" },
  { id: "indemnification", label: "13. Indemnification" },
  { id: "term-termination", label: "14. Term and Termination" },
  { id: "governing-law", label: "15. Governing Law" },
  { id: "disputes", label: "16. Dispute Resolution and Arbitration" },
  { id: "modifications", label: "17. Modifications to These Terms" },
  { id: "miscellaneous", label: "18. Miscellaneous" },
  { id: "contact", label: "19. Contact" }
];
const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms of Service — Kaptas Global",
  "url": "https://kaptasglobal.io/terms-of-service",
  "description": "Terms governing your use of Kaptas Global's website and recruitment, staffing, and market-entry services.",
  "inLanguage": "en-US",
  "dateModified": "2026-05-18",
  "publisher": { "@type": "Organization", "name": "Kaptas Global", "url": "https://kaptasglobal.io" },
  "about": { "@type": "Thing", "name": "Terms of service and contractual conditions" }
};
function TermsOfService() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Terms of Service — Kaptas Global",
        description: "The terms that govern your use of Kaptas Global's website and recruitment, staffing, and market-entry services. Includes eligibility, fees, intellectual property, warranties, liability, and dispute resolution.",
        keywords: "kaptas global terms of service, recruitment service agreement, staffing terms, hiring terms and conditions",
        canonical: "https://kaptasglobal.io/terms-of-service",
        schemas: [
          organizationSchema,
          termsSchema,
          buildBreadcrumbSchema([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Terms of Service", url: `${SITE_URL}/terms-of-service` }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.section,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
        className: "relative pt-8 lg:pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_top_right,_#0047FF22,transparent_70%)] blur-[120px] pointer-events-none" }),
          /* @__PURE__ */ jsxs("header", { className: "mb-12 lg:mb-16 max-w-4xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center text-kaptas-green backdrop-blur-sm", children: /* @__PURE__ */ jsx(Scale, { className: "w-5 h-5", strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-gray-400", children: "Legal" })
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white", children: [
              "Terms of",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-kaptas-green to-kaptas-purple", children: "Service" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light mb-6", children: "The rules that govern your access to and use of Kaptas Global's website and services." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-white font-medium", children: "Effective:" }),
                " ",
                EFFECTIVE_DATE
              ] }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-white font-medium", children: "Last Updated:" }),
                " ",
                LAST_UPDATED
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-12 lg:gap-16", children: [
            /* @__PURE__ */ jsx("aside", { className: "lg:w-64 lg:shrink-0", children: /* @__PURE__ */ jsxs("div", { className: "lg:sticky lg:top-32 border border-white/10 rounded-2xl p-6 bg-white/[0.02] backdrop-blur-sm", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4", children: "On this page" }),
              /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2.5 text-sm", children: sections.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `#${s.id}`,
                  className: "text-gray-400 hover:text-kaptas-green transition-colors block",
                  children: s.label
                }
              ) }, s.id)) }) })
            ] }) }),
            /* @__PURE__ */ jsxs(
              "article",
              {
                className: "flex-1 max-w-3xl prose prose-invert prose-lg\n              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white\n              prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:scroll-mt-32\n              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-3 prose-h3:scroll-mt-32 prose-h3:text-white\n              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-5\n              prose-a:text-kaptas-green prose-a:no-underline hover:prose-a:underline\n              prose-strong:text-white prose-strong:font-semibold\n              prose-ul:text-gray-300 prose-ul:my-5\n              prose-li:mb-2 prose-li:marker:text-gray-600\n              max-w-none",
                children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 italic mb-8 border-l-2 border-kaptas-green/40 pl-4", children: "Please read these Terms of Service carefully. They contain important information about your legal rights, remedies, and obligations, including a limitation of liability and a binding arbitration provision." }),
                  /* @__PURE__ */ jsx("h2", { id: "acceptance", children: "1. Acceptance of Terms" }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "These Terms of Service (the ",
                    /* @__PURE__ */ jsx("strong", { children: '"Terms"' }),
                    ") are entered into between you (",
                    /* @__PURE__ */ jsx("strong", { children: '"you"' }),
                    " or ",
                    /* @__PURE__ */ jsx("strong", { children: '"Client"' }),
                    ") and HR Technology LLC, a Florida limited liability company doing business as ",
                    /* @__PURE__ */ jsx("strong", { children: "Kaptas Global" }),
                    ", with its principal place of business at 7345 W Sand Lake Rd, Ste 210, Office 460, Orlando, FL 32819 (",
                    /* @__PURE__ */ jsx("strong", { children: '"Kaptas Global,"' }),
                    " ",
                    /* @__PURE__ */ jsx("strong", { children: '"we,"' }),
                    " ",
                    /* @__PURE__ */ jsx("strong", { children: '"us,"' }),
                    " or ",
                    /* @__PURE__ */ jsx("strong", { children: '"our"' }),
                    ")."
                  ] }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "By accessing or using the website at ",
                    /* @__PURE__ */ jsx("a", { href: "https://kaptasglobal.io", children: "kaptasglobal.io" }),
                    " (the ",
                    /* @__PURE__ */ jsx("strong", { children: '"Site"' }),
                    ") or any of the recruitment, staffing, market-intelligence, or related services we offer (collectively, the ",
                    /* @__PURE__ */ jsx("strong", { children: '"Services"' }),
                    "), you agree to be bound by these Terms and by our ",
                    /* @__PURE__ */ jsx(Link, { to: "/privacy-policy", children: "Privacy Policy" }),
                    ". If you do not agree, do not use the Site or the Services."
                  ] }),
                  /* @__PURE__ */ jsx("h2", { id: "services", children: "2. Description of Services" }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "Kaptas Global offers the following Services. Each engagement is governed by an additional written agreement (a ",
                    /* @__PURE__ */ jsx("strong", { children: '"Service Agreement"' }),
                    ") that takes precedence over these Terms in the event of conflict."
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Direct Hire" }),
                      " — sourcing, screening, and presenting pre-vetted candidates for permanent or contractor positions, in exchange for a one-time placement fee."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Outsourcing & Staffing" }),
                      " — placing dedicated professionals on Client teams with Kaptas Global acting as employer of record in Brazil, in exchange for a flat monthly fee."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Executive Mapping" }),
                      " — delivery of a market-intelligence report covering competitor compensation, team structures, salary benchmarks, and a ranked shortlist of leadership candidates."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Hire in Brazil" }),
                      " — market-entry consulting including compensation analysis, hiring-model recommendation, and first-hire support for companies entering Brazil."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "The Site also offers informational content, including blog articles and downloadable resources. Such content is provided for general information only and does not constitute legal, tax, or employment advice." }),
                  /* @__PURE__ */ jsx("h2", { id: "eligibility", children: "3. Eligibility" }),
                  /* @__PURE__ */ jsx("p", { children: "You may use the Services only if you are at least 18 years old (or the age of majority in your jurisdiction) and have the legal authority to enter into a binding contract. If you use the Services on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms." }),
                  /* @__PURE__ */ jsx("h2", { id: "engagement", children: "4. Engagement Terms" }),
                  /* @__PURE__ */ jsx("p", { children: "Communications, proposals, and exchanges with Kaptas Global prior to the execution of a written Service Agreement are non-binding and do not create an obligation to provide or pay for Services. Once a Service Agreement is signed, it governs the scope, deliverables, fees, replacement guarantees, and any service-level commitments applicable to that engagement." }),
                  /* @__PURE__ */ jsx("p", { children: "In the absence of a separate Service Agreement, no Services are deemed to have been engaged regardless of any informal discussions, candidate introductions, or shared materials." }),
                  /* @__PURE__ */ jsx("h2", { id: "user-conduct", children: "5. Acceptable Use" }),
                  /* @__PURE__ */ jsx("p", { children: "You agree not to:" }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    /* @__PURE__ */ jsx("li", { children: "Use the Site or Services for any unlawful, fraudulent, or harmful purpose." }),
                    /* @__PURE__ */ jsx("li", { children: "Misrepresent your identity, affiliation, or hiring intent." }),
                    /* @__PURE__ */ jsx("li", { children: "Approach candidates introduced through Kaptas Global outside the engagement, except as expressly permitted by the applicable Service Agreement." }),
                    /* @__PURE__ */ jsx("li", { children: "Reverse engineer, decompile, scrape, or otherwise extract data from the Site by automated means without our prior written consent." }),
                    /* @__PURE__ */ jsx("li", { children: "Interfere with or disrupt the Site, the Services, or the systems on which they run." }),
                    /* @__PURE__ */ jsx("li", { children: "Submit personal information about third parties without the legal authority to do so." })
                  ] }),
                  /* @__PURE__ */ jsx("h2", { id: "intellectual-property", children: "6. Intellectual Property" }),
                  /* @__PURE__ */ jsx("p", { children: "The Site and its contents — including text, graphics, logos, illustrations, software, and the arrangement and selection of all of the foregoing — are owned by Kaptas Global or its licensors and are protected by intellectual-property laws. We grant you a limited, revocable, non-exclusive, non-transferable license to access and use the Site for your internal business purposes." }),
                  /* @__PURE__ */ jsx("p", { children: "Nothing in these Terms transfers ownership of any of our intellectual property to you. Any feedback or suggestions you provide regarding the Site or Services may be used by us without obligation or compensation." }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("strong", { children: "Work product ownership." }),
                    " Subject to payment of all applicable fees, Client owns the work product produced by a placed professional under an Outsourcing & Staffing engagement, as detailed in the Service Agreement. Under Direct Hire, ownership flows directly to Client through Client's own employment or contractor relationship with the placed professional."
                  ] }),
                  /* @__PURE__ */ jsx("h2", { id: "candidate-content", children: "7. Candidate Information and Confidentiality" }),
                  /* @__PURE__ */ jsx("p", { children: "Candidate profiles, resumes, screening notes, and market-intelligence reports we share with you contain confidential information. You agree to use that information solely for the purpose of evaluating, hiring, or engaging the relevant professionals and to protect it with at least the same degree of care that you use to protect your own confidential information of similar importance." }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "You may not share candidate information with third parties (other than your employees and advisors with a need to know) without the candidate's prior written consent. The processing of candidate personal information is also governed by our ",
                    /* @__PURE__ */ jsx(Link, { to: "/privacy-policy", children: "Privacy Policy" }),
                    " and by data-protection laws including the LGPD, GDPR, and CCPA/CPRA."
                  ] }),
                  /* @__PURE__ */ jsx("h2", { id: "non-circumvention", children: "8. Candidate Non-Circumvention" }),
                  /* @__PURE__ */ jsx("h3", { children: "8.1 Introduced Candidates" }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "An ",
                    /* @__PURE__ */ jsx("strong", { children: '"Introduced Candidate"' }),
                    " is any individual whose name, contact information, professional profile, resume, screening notes, market-mapping data, or any portion thereof Kaptas Global has disclosed, presented, or otherwise made available to Client in connection with the Site or any actual or prospective Service. The introduction is effective on the first date any such information is shared with Client, regardless of medium (email, document, call notes, platform, or otherwise) and regardless of whether the Introduced Candidate is ultimately presented for a specific role."
                  ] }),
                  /* @__PURE__ */ jsx("h3", { children: "8.2 Restriction Period" }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "For a period of ",
                    /* @__PURE__ */ jsx("strong", { children: "twelve (12) months" }),
                    " following the date of first introduction of an Introduced Candidate (the ",
                    /* @__PURE__ */ jsx("strong", { children: '"Restriction Period"' }),
                    "), Client shall not, directly or indirectly — and shall cause its affiliates, subsidiaries, parent companies, and entities under common control not to — (i) hire, employ, engage, retain, or otherwise compensate the Introduced Candidate as an employee, contractor, consultant, advisor, board member, fractional executive, or in any other capacity; (ii) enter into any staffing, employer-of-record, agency, or contracting arrangement that places the Introduced Candidate on Client's team through a third party; or (iii) refer, recommend, or introduce the Introduced Candidate to any third party for the purpose of being hired or engaged by that third party."
                  ] }),
                  /* @__PURE__ */ jsx("h3", { children: "8.3 Permitted Engagements" }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "The Restriction Period does not apply to placements executed through Kaptas Global under a signed Service Agreement with all applicable fees paid. The Restriction Period also does not apply where Client can demonstrate, with written records, that it had an active and documented relationship with the individual ",
                    /* @__PURE__ */ jsx("em", { children: "prior to" }),
                    " Kaptas Global's first introduction."
                  ] }),
                  /* @__PURE__ */ jsx("h3", { children: "8.4 Circumvention Fee" }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "If Client breaches Section 8.2, Client shall pay Kaptas Global a fee (the ",
                    /* @__PURE__ */ jsx("strong", { children: '"Circumvention Fee"' }),
                    ") equal to ",
                    /* @__PURE__ */ jsx("strong", { children: "thirty percent (30%) of the Introduced Candidate's annualized total compensation" }),
                    " — including base compensation, target bonuses, the fair market value of equity granted, and the cash value of recurring benefits — measured as of the date the Introduced Candidate begins providing services to Client or any of its affiliates, with a minimum Circumvention Fee of ",
                    /* @__PURE__ */ jsx("strong", { children: "ten thousand U.S. dollars (USD 10,000)" }),
                    ". The Circumvention Fee is due within fifteen (15) calendar days of Kaptas Global's invoice. Unpaid amounts accrue interest at the maximum rate permitted by applicable law, and Client is responsible for the reasonable collection costs Kaptas Global incurs, including attorneys' fees."
                  ] }),
                  /* @__PURE__ */ jsx("h3", { children: "8.5 Liquidated Damages, Not a Penalty" }),
                  /* @__PURE__ */ jsx("p", { children: "The parties acknowledge that the actual damages caused by circumvention are difficult to ascertain with precision, and that the Circumvention Fee represents a reasonable and good-faith pre-estimate of Kaptas Global's likely loss — including direct placement revenue, sunk sourcing and screening cost, lost repeat-placement opportunity, and damage to candidate-network goodwill. The Circumvention Fee is not, and is not intended to be, a penalty. If any court of competent jurisdiction determines that the stated amount is unenforceable in part, it shall be reduced to the maximum amount permitted by law and the remainder of this Section shall remain in full force." }),
                  /* @__PURE__ */ jsx("h3", { children: "8.6 Cooperation and Verification" }),
                  /* @__PURE__ */ jsx("p", { children: "During the Restriction Period and for six (6) months thereafter, Client shall, upon reasonable written request from Kaptas Global, confirm in writing whether it or any of its affiliates has hired, engaged, or otherwise compensated a specific Introduced Candidate, and provide reasonable supporting documentation. Client shall maintain accurate internal records of its hiring decisions during the Restriction Period sufficient to permit such verification." }),
                  /* @__PURE__ */ jsx("h3", { children: "8.7 Survival" }),
                  /* @__PURE__ */ jsx("p", { children: "This Section 8 survives the termination, expiration, or rescission of these Terms and of any Service Agreement, for the full duration of the Restriction Period applicable to each Introduced Candidate." }),
                  /* @__PURE__ */ jsx("h2", { id: "third-party", children: "9. Third-Party Services and Links" }),
                  /* @__PURE__ */ jsx("p", { children: "The Site and Services may reference, embed, or link to third-party websites, products, or services. We do not control and are not responsible for the content, policies, or practices of third parties. Your use of any third-party service is at your own risk and is governed by the third party's own terms and privacy notices." }),
                  /* @__PURE__ */ jsx("h2", { id: "fees", children: "10. Fees and Payment" }),
                  /* @__PURE__ */ jsx("p", { children: "Fees, billing cadence, currency, applicable taxes, and payment terms are defined in the applicable Service Agreement and are exclusive of any sales, value-added, or similar taxes that may apply." }),
                  /* @__PURE__ */ jsx("p", { children: "Late payments may accrue interest at the maximum rate permitted by applicable law. Client is responsible for collection costs, including reasonable attorneys' fees, incurred to recover amounts not paid when due." }),
                  /* @__PURE__ */ jsx("h2", { id: "warranties", children: "11. Disclaimers of Warranties" }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("strong", { children: 'The Site is provided on an "AS IS" and "AS AVAILABLE" basis.' }),
                    " To the maximum extent permitted by law, Kaptas Global disclaims all warranties, whether express, implied, statutory, or otherwise, including any warranties of merchantability, fitness for a particular purpose, title, non-infringement, and any warranties arising from course of dealing or usage of trade."
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components. We make no warranty regarding any specific result that may be obtained from candidates or any third party. Hiring decisions are made by Client based on Client's own evaluation. Past performance of placements is not a guarantee of future results." }),
                  /* @__PURE__ */ jsx("h2", { id: "liability", children: "12. Limitation of Liability" }),
                  /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "To the maximum extent permitted by law, in no event shall Kaptas Global, its officers, directors, employees, agents, or affiliates be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, including but not limited to loss of profits, revenue, data, business opportunities, goodwill, or other intangible losses, arising out of or in connection with these Terms or the Services, even if advised of the possibility of such damages." }) }),
                  /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "Kaptas Global's aggregate liability arising out of or in connection with the Site, the Services, or these Terms, regardless of the form of the action, shall not exceed the total fees paid by Client to Kaptas Global in the twelve (12) months preceding the event giving rise to the claim." }) }),
                  /* @__PURE__ */ jsx("p", { children: "Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law, including liability for fraud, gross negligence, or willful misconduct." }),
                  /* @__PURE__ */ jsx("h2", { id: "indemnification", children: "13. Indemnification" }),
                  /* @__PURE__ */ jsx("p", { children: "You agree to defend, indemnify, and hold harmless Kaptas Global and its officers, directors, employees, agents, and affiliates from and against any third-party claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or related to:" }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    /* @__PURE__ */ jsx("li", { children: "your breach of these Terms or of any Service Agreement;" }),
                    /* @__PURE__ */ jsx("li", { children: "your violation of applicable law or of the rights of any third party;" }),
                    /* @__PURE__ */ jsx("li", { children: "your employment, engagement, or treatment of any candidate or professional introduced through Kaptas Global; and" }),
                    /* @__PURE__ */ jsx("li", { children: "any information you submit through the Site that is unlawful, false, or infringes any third-party right." })
                  ] }),
                  /* @__PURE__ */ jsx("h2", { id: "term-termination", children: "14. Term and Termination" }),
                  /* @__PURE__ */ jsx("p", { children: "These Terms remain in effect while you use the Site or any Service. Either party may terminate the relationship for material breach if the breach is not cured within thirty (30) days of written notice. Outsourcing & Staffing and other recurring engagements may be terminated as set forth in the applicable Service Agreement." }),
                  /* @__PURE__ */ jsx("p", { children: "Sections that by their nature should survive termination — including Intellectual Property, Confidentiality, Fees due before termination, Disclaimers, Limitation of Liability, Indemnification, Governing Law, and Dispute Resolution — will survive." }),
                  /* @__PURE__ */ jsx("h2", { id: "governing-law", children: "15. Governing Law" }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    "These Terms and any dispute arising out of or related to these Terms or the Services are governed by the laws of the ",
                    /* @__PURE__ */ jsx("strong", { children: "State of Florida" }),
                    ", United States, without regard to its conflict-of-laws principles. The United Nations Convention on Contracts for the International Sale of Goods does not apply."
                  ] }),
                  /* @__PURE__ */ jsx("h2", { id: "disputes", children: "16. Dispute Resolution and Arbitration" }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("strong", { children: "Informal resolution." }),
                    " Before initiating a formal proceeding, you and Kaptas Global agree to attempt to resolve any dispute through good-faith negotiation by contacting ",
                    /* @__PURE__ */ jsx("a", { href: "mailto:support@kaptasglobal.io", children: "support@kaptasglobal.io" }),
                    ". If the dispute is not resolved within thirty (30) days, either party may proceed under the following clause."
                  ] }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("strong", { children: "Binding arbitration." }),
                    " Any dispute, claim, or controversy arising out of or relating to these Terms, the Services, or the Site that is not resolved informally will be settled by binding arbitration administered in Orange County, Florida, under the Commercial Arbitration Rules of the American Arbitration Association (AAA) by one neutral arbitrator. Judgment on the award may be entered in any court of competent jurisdiction."
                  ] }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("strong", { children: "Class-action waiver." }),
                    " You and Kaptas Global agree to bring claims only in an individual capacity and not as a plaintiff or class member in any purported class or representative proceeding. The arbitrator may not consolidate claims or preside over any form of representative or class proceeding."
                  ] }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("strong", { children: "Carve-outs." }),
                    " Either party may bring an action in court for injunctive or equitable relief to protect its intellectual property, confidential information, or business operations. Nothing in this Section limits any non-waivable statutory right."
                  ] }),
                  /* @__PURE__ */ jsx("h2", { id: "modifications", children: "17. Modifications to These Terms" }),
                  /* @__PURE__ */ jsx("p", { children: 'We may modify these Terms from time to time. The "Last Updated" date at the top reflects when changes were made. If a change is material, we will provide reasonable advance notice, either through the Site or, where appropriate, by email. Your continued use of the Site or Services after the effective date of a change constitutes your acceptance of the revised Terms.' }),
                  /* @__PURE__ */ jsx("h2", { id: "miscellaneous", children: "18. Miscellaneous" }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Entire agreement." }),
                      " These Terms, together with the Privacy Policy and any applicable Service Agreement, constitute the entire agreement between you and Kaptas Global regarding the subject matter and supersede all prior or contemporaneous communications and proposals."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Severability." }),
                      " If any provision is found unenforceable, the remaining provisions remain in full force."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "No waiver." }),
                      " A failure to enforce any right or provision is not a waiver of that right or provision."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Assignment." }),
                      " You may not assign or transfer these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, financing, or sale of assets."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Force majeure." }),
                      " Neither party is liable for failure or delay in performance due to causes beyond its reasonable control."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Independent contractors." }),
                      " Nothing in these Terms creates a partnership, joint venture, or employment relationship between you and Kaptas Global. Each party remains an independent contractor."
                    ] }),
                    /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Notices." }),
                      " Legal notices to Kaptas Global must be sent to ",
                      /* @__PURE__ */ jsx("a", { href: "mailto:support@kaptasglobal.io", children: "support@kaptasglobal.io" }),
                      " and to the address in Section 1, with a copy delivered by reputable courier."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("h2", { id: "contact", children: "19. Contact" }),
                  /* @__PURE__ */ jsx("p", { children: "For questions about these Terms, contact us at:" }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("strong", { children: "HR Technology LLC" }),
                    " (d/b/a Kaptas Global)",
                    /* @__PURE__ */ jsx("br", {}),
                    "7345 W Sand Lake Rd, Ste 210, Office 460",
                    /* @__PURE__ */ jsx("br", {}),
                    "Orlando, FL 32819, United States",
                    /* @__PURE__ */ jsx("br", {}),
                    "Email: ",
                    /* @__PURE__ */ jsx("a", { href: "mailto:support@kaptasglobal.io", children: "support@kaptasglobal.io" }),
                    /* @__PURE__ */ jsx("br", {}),
                    "Phone: ",
                    /* @__PURE__ */ jsx("a", { href: "tel:+16892939252", children: "+1 (689) 293-9252" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-20 max-w-3xl lg:ml-[19rem]", children: [
            /* @__PURE__ */ jsxs("div", { className: "border border-white/10 bg-white/[0.02] rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center text-kaptas-green shrink-0", children: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5", strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold text-base mb-1", children: "Questions about these terms?" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 max-w-md leading-relaxed", children: "We're happy to walk you through the engagement model before any commitment." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "mailto:support@kaptasglobal.io",
                  className: "bg-kaptas-green text-kaptas-black px-5 py-2.5 rounded-lg border border-kaptas-green text-sm font-semibold hover:brightness-90 transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_15px_var(--color-kaptas-green)] w-fit whitespace-nowrap",
                  children: [
                    "Talk to our team",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsx(Link, { to: "/privacy-policy", className: "hover:text-white transition-colors", children: "Privacy Policy" }),
              /* @__PURE__ */ jsx("span", { className: "mx-3", children: "·" }),
              /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-white transition-colors", children: "Back to home" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
const popularDestinations = [
  { label: "Direct Hire", to: "/direct-hire" },
  { label: "Contractor & Staffing", to: "/contractor-staffing" },
  { label: "Executive Mapping", to: "/executive-mapping" },
  { label: "Start Operation in Brazil", to: "/start-operation" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" }
];
function NotFound() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Page Not Found — Kaptas Global" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "The page you're looking for doesn't exist or has moved. Head back to Kaptas Global to explore hiring senior Brazilian talent for your team."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, follow" })
    ] }),
    /* @__PURE__ */ jsxs(
      motion.section,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
        className: "relative pt-12 lg:pt-24 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full min-h-[75vh] flex items-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_top_right,_#0047FF33,transparent_80%)] blur-[120px] pointer-events-none" }),
          /* @__PURE__ */ jsxs("div", { className: "max-w-3xl lg:max-w-4xl relative z-10 w-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center text-kaptas-green backdrop-blur-sm", children: /* @__PURE__ */ jsx(Compass, { className: "w-5 h-5", strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-gray-400", children: "Error 404" })
            ] }),
            /* @__PURE__ */ jsx(
              motion.h1,
              {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.9, delay: 0.1, ease: "easeOut" },
                className: "text-[120px] md:text-[180px] lg:text-[220px] font-extrabold tracking-tighter leading-none mb-4 select-none",
                children: /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600", children: "404" })
              }
            ),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white", children: [
              "This page got lost",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-kaptas-green to-kaptas-purple", children: "in transit" }),
              "."
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed font-light", children: "The page you're looking for doesn't exist or has been moved. Let's get you back on track to find senior Brazilian talent." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/",
                  className: "bg-kaptas-green text-kaptas-black px-5 py-2.5 rounded-lg border border-kaptas-green text-sm font-semibold hover:brightness-90 transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_15px_var(--color-kaptas-green)] w-fit",
                  children: [
                    /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
                    "Back to home"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/pricing",
                  className: "text-white px-5 py-2.5 rounded-lg border border-white/20 text-sm font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center gap-2 w-fit",
                  children: [
                    "See pricing",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-10 border-t border-white/10", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-gray-500 mb-5 font-semibold", children: "Popular destinations" }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: popularDestinations.map((item) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: item.to,
                  className: "bg-white/5 border border-white/10 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300",
                  children: item.label
                },
                item.to
              )) })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function Root() {
  return /* @__PURE__ */ jsx(HelmetProvider, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const routes = [
  {
    element: /* @__PURE__ */ jsx(Root, {}),
    children: [
      {
        path: "/",
        element: /* @__PURE__ */ jsx(Layout, {}),
        children: [
          { index: true, element: /* @__PURE__ */ jsx(Home, {}), entry: "src/pages/Home.tsx" },
          { path: "pricing", element: /* @__PURE__ */ jsx(Pricing, {}), entry: "src/pages/Pricing.tsx" },
          { path: "blog", element: /* @__PURE__ */ jsx(Blog, {}), entry: "src/pages/Blog.tsx" },
          {
            path: "blog/:slug",
            element: /* @__PURE__ */ jsx(BlogPost, {}),
            entry: "src/pages/BlogPost.tsx",
            // Pre-render a static HTML file for every blog post slug at build
            // time. Anything not in this list still works (client-side render
            // via BlogPost.tsx), but only these get the SEO benefit of static
            // pre-rendered HTML.
            getStaticPaths: () => blogPosts.map((p) => `/blog/${p.slug}`)
          },
          { path: "direct-hire", element: /* @__PURE__ */ jsx(DirectHire, {}), entry: "src/pages/DirectHire.tsx" },
          { path: "contractor-staffing", element: /* @__PURE__ */ jsx(ContractorStaffing, {}), entry: "src/pages/ContractorStaffing.tsx" },
          { path: "executive-mapping", element: /* @__PURE__ */ jsx(ExecutiveMapping, {}), entry: "src/pages/ExecutiveMapping.tsx" },
          { path: "start-operation", element: /* @__PURE__ */ jsx(StartOperation, {}), entry: "src/pages/StartOperation.tsx" },
          { path: "ebook", element: /* @__PURE__ */ jsx(Ebook, {}), entry: "src/pages/Ebook.tsx" },
          { path: "privacy-policy", element: /* @__PURE__ */ jsx(PrivacyPolicy, {}), entry: "src/pages/PrivacyPolicy.tsx" },
          { path: "terms-of-service", element: /* @__PURE__ */ jsx(TermsOfService, {}), entry: "src/pages/TermsOfService.tsx" },
          { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) }
        ]
      }
    ]
  }
];
const createRoot = ViteReactSSG({ routes });
export {
  createRoot
};
