import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Linkedin } from "lucide-react";

type ContactPageProps = {
  searchParams?: Promise<{
    interest?: string | string[];
  }>;
};

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Talk to us about AI workflow systems for your accountancy or bookkeeping firm. We will be honest about whether we can help.",
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const initialInterest =
    typeof resolvedSearchParams?.interest === "string"
      ? resolvedSearchParams.interest
      : "";

  return (
    <section className="pt-32 pb-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: Form */}
          <div className="lg:col-span-3">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              Let&apos;s talk about the first workflow to fix.
            </h1>
            <p className="text-muted text-lg mb-10">
              If you run a UK accountancy or bookkeeping firm and want to reduce
              admin, improve client response quality, or systemise repetitive
              operational work, start here. We&apos;ll respond within 1 working
              day.
            </p>
            <ContactForm initialInterest={initialInterest} key={initialInterest} />
          </div>

          {/* Right: Contact info */}
          <div className="lg:col-span-2 lg:pt-24">
            <div className="space-y-8">
              <div>
                <h3 className="text-foreground font-semibold text-sm mb-3">
                  Email
                </h3>
                <a
                  href="mailto:hello@smithinnovation.studio"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-muted" />
                    <span>hello@smithinnovation.studio</span>
                  </div>
                </a>
              </div>

              <div>
                <h3 className="text-foreground font-semibold text-sm mb-3">
                  Location
                </h3>
                <div className="flex items-center gap-3 text-muted">
                  <MapPin size={18} />
                  <div>
                    <p>Dubai, UAE</p>
                    <p className="text-sm text-muted/60">
                      Serving UK accountancy and bookkeeping firms
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-foreground font-semibold text-sm mb-3">
                  Connect
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 text-muted hover:text-foreground transition-colors"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="pt-6 border-t border-divider">
                <p className="text-muted text-sm leading-relaxed">
                  Not sure where to start? Take the{" "}
                  <a
                    href="/scorecard"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    AI Readiness Scorecard
                  </a>{" "}
                  or book an AI Workflow Audit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
