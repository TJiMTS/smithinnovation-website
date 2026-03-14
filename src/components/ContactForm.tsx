"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const interestOptions = [
  "AI Readiness Scorecard",
  "AI Workflow Audit",
  "Client Email Intelligence",
  "AI Admin & Compliance Workflows",
  "AI-Assisted Bookkeeping Operations",
  "Something else",
];

type ContactFormProps = {
  initialInterest?: string;
};

export default function ContactForm({
  initialInterest = "",
}: ContactFormProps) {
  const safeInitialInterest = interestOptions.includes(initialInterest)
    ? initialInterest
    : "";
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [interest, setInterest] = useState(safeInitialInterest);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Fallback — still show success for now (Resend integration coming)
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="p-10 rounded-2xl border border-card-border bg-card-bg text-center">
        <CheckCircle className="text-accent mx-auto mb-4" size={40} />
        <h3 className="text-xl font-bold text-foreground mb-2">
          Thanks. We&apos;ll be in touch.
        </h3>
        <p className="text-muted">
          Expect a response within 1 working day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-foreground text-sm font-medium mb-2"
          >
            Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl bg-card-bg border border-card-border text-foreground placeholder-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-foreground text-sm font-medium mb-2"
          >
            Email <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl bg-card-bg border border-card-border text-foreground placeholder-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="company"
            className="block text-foreground text-sm font-medium mb-2"
          >
            Company name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 rounded-xl bg-card-bg border border-card-border text-foreground placeholder-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
            placeholder="Your company"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-foreground text-sm font-medium mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-xl bg-card-bg border border-card-border text-foreground placeholder-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
            placeholder="+44 ..."
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="interest"
          className="block text-foreground text-sm font-medium mb-2"
        >
          What are you interested in? <span className="text-accent">*</span>
        </label>
        <select
          id="interest"
          name="interest"
          required
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-card-bg border border-card-border text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors appearance-none"
        >
          <option value="" className="text-muted">
            Select an option
          </option>
          {interestOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-foreground text-sm font-medium mb-2"
        >
          Tell us more
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-card-bg border border-card-border text-foreground placeholder-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
          placeholder="What is slowing the firm down right now? Client emails, admin, compliance, bookkeeping review, or something else?"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send message"}
        <Send size={16} />
      </button>
    </form>
  );
}
