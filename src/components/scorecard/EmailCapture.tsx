"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import type { ContactInfo } from "./ScorecardFlow";

const firmSizeOptions = [
  "Solo",
  "2-5",
  "6-10",
  "11-25",
  "26-50",
  "51-100",
  "100+",
];

const sectorOptions = [
  "Accounting",
  "Law",
  "Consulting",
  "Financial Advisory",
  "Recruitment",
  "Other",
];

export default function EmailCapture({
  onSubmit,
}: {
  onSubmit: (info: ContactInfo) => void;
}) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const info: ContactInfo = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: (formData.get("company") as string) || "",
      firmSize: (formData.get("firmSize") as string) || "",
      sector: (formData.get("sector") as string) || "",
    };

    onSubmit(info);
  }

  return (
    <section className="pt-32 pb-28 px-6">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
            <Lock className="text-accent" size={28} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            Your score is ready.
          </h2>
          <p className="text-muted text-lg">
            Enter your email to see your full results, category breakdown, and
            personalised recommendations.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="sc-name"
              className="block text-foreground text-sm font-medium mb-2"
            >
              Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="sc-name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl bg-card-bg border border-card-border text-foreground placeholder-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="sc-email"
              className="block text-foreground text-sm font-medium mb-2"
            >
              Email <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="sc-email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-card-bg border border-card-border text-foreground placeholder-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label
              htmlFor="sc-company"
              className="block text-foreground text-sm font-medium mb-2"
            >
              Company name
            </label>
            <input
              type="text"
              id="sc-company"
              name="company"
              className="w-full px-4 py-3 rounded-xl bg-card-bg border border-card-border text-foreground placeholder-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
              placeholder="Your firm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="sc-firm-size"
                className="block text-foreground text-sm font-medium mb-2"
              >
                Firm size
              </label>
              <select
                id="sc-firm-size"
                name="firmSize"
                className="w-full px-4 py-3 rounded-xl bg-card-bg border border-card-border text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors appearance-none"
              >
                <option value="">Select</option>
                {firmSizeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="sc-sector"
                className="block text-foreground text-sm font-medium mb-2"
              >
                Sector
              </label>
              <select
                id="sc-sector"
                name="sector"
                className="w-full px-4 py-3 rounded-xl bg-card-bg border border-card-border text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors appearance-none"
              >
                <option value="">Select</option>
                {sectorOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {loading ? "Loading results..." : "See my results"}
          </button>

          <p className="text-muted/50 text-xs text-center">
            We&apos;ll send your results by email too. No spam. You can
            unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
}
