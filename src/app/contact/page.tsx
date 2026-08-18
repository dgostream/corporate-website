"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, Mail, MapPin } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";
import { cn } from "@/lib/utils";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function SignalMeter({ filled }: { filled: number }) {
  return (
    <div className="flex items-end gap-1.5" aria-label={`Signal ${filled} of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={cn(
            "w-1 rounded-full transition-all duration-500",
            i <= filled ? "bg-brand-gradient" : "bg-border"
          )}
          style={{ height: `${8 + i * 4}px` }}
        />
      ))}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const valid = {
    firstName: form.firstName.trim().length > 1,
    lastName: form.lastName.trim().length > 1,
    email: isEmail(form.email),
    message: form.message.trim().length > 8,
  };
  const filled = Object.values(valid).filter(Boolean).length + 1;

  const set =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <div className="min-h-screen bg-background pt-40 pb-32">
      <div className="container-custom">
        <div className="mb-24 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-7xl font-bold tracking-tighter text-foreground md:text-8xl"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-normal leading-relaxed text-foreground"
          >
            For partnerships, media, or general inquiries, reach out to Dish Home Digital Pvt. Ltd. in Lalitpur.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 items-start gap-24 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-10 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted">
                Transmission
              </span>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                  Signal
                </span>
                <SignalMeter filled={filled} />
              </div>
            </div>

            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <Field
                  id="firstName"
                  label="First Name"
                  valid={valid.firstName}
                >
                  <input
                    type="text"
                    id="firstName"
                    value={form.firstName}
                    onChange={set("firstName")}
                    className="w-full rounded-none border-b border-border bg-transparent py-4 text-xl text-foreground outline-none transition-colors placeholder-muted/30 focus:border-brand-pink"
                    placeholder="John"
                  />
                </Field>
                <Field id="lastName" label="Last Name" valid={valid.lastName}>
                  <input
                    type="text"
                    id="lastName"
                    value={form.lastName}
                    onChange={set("lastName")}
                    className="w-full rounded-none border-b border-border bg-transparent py-4 text-xl text-foreground outline-none transition-colors placeholder-muted/30 focus:border-brand-pink"
                    placeholder="Doe"
                  />
                </Field>
              </div>

              <Field id="email" label="Email" valid={valid.email}>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={set("email")}
                  className="w-full rounded-none border-b border-border bg-transparent py-4 text-xl text-foreground outline-none transition-colors placeholder-muted/30 focus:border-brand-pink"
                  placeholder="you@email.com"
                />
              </Field>

              <Field id="subject" label="Subject" valid>
                <div className="relative">
                  <select
                    id="subject"
                    value={form.subject}
                    onChange={set("subject")}
                    className="w-full cursor-pointer appearance-none rounded-none border-b border-border bg-transparent py-4 pr-10 text-xl text-foreground outline-none transition-colors focus:border-brand-pink"
                  >
                    <option className="bg-background">General Inquiry</option>
                    <option className="bg-background">Partnership</option>
                    <option className="bg-background">Media / Press</option>
                    <option className="bg-background">Support</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute top-1/2 right-0 h-5 w-5 -translate-y-1/2 text-muted transition-transform duration-300 group-focus-within:rotate-180 group-focus-within:text-brand-pink" />
                </div>
              </Field>

              <Field id="message" label="Message" valid={valid.message}>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={set("message")}
                  className="w-full resize-none rounded-none border-b border-border bg-transparent py-4 text-xl text-foreground outline-none transition-colors placeholder-muted/30 focus:border-brand-pink"
                  placeholder="How can we help?"
                />
              </Field>

              <div className="pt-8">
                <CtaButton type="submit" tone="solid" className="w-full md:w-auto">
                  Send Message
                </CtaButton>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:pl-12"
          >
            <h3 className="mb-8 text-xs font-bold uppercase tracking-widest text-foreground">
              Headquarters
            </h3>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-foreground" />
                <address className="not-italic text-xl font-light leading-relaxed text-foreground">
                  Dish Home Digital Pvt. Ltd.<br />
                  Chhyasikot, Lalitpur<br />
                  Nepal
                </address>
              </div>
              <div className="flex items-center gap-6">
                <Mail className="h-5 w-5 shrink-0 text-foreground" />
                <a
                  href="mailto:contact@dgostream.com"
                  className="text-2xl font-medium text-foreground underline-offset-4 transition-colors hover:text-brand-pink hover:underline"
                >
                  contact@dgostream.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  valid,
  children,
}: {
  id: string;
  label: string;
  valid: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="group space-y-4">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-xs font-bold uppercase tracking-widest text-muted transition-colors group-focus-within:text-brand-pink"
        >
          {label}
        </label>
        <Check
          className={cn(
            "h-4 w-4 transition-all duration-300",
            valid
              ? "scale-100 text-brand-pink opacity-100"
              : "scale-75 text-muted opacity-0"
          )}
        />
      </div>
      {children}
    </div>
  );
}
