import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Talk to us about AI automation for your firm or custom app development. We'll be honest about whether we can help.",
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: Form */}
          <div className="lg:col-span-3">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              Let&apos;s talk about what you need.
            </h1>
            <p className="text-muted text-lg mb-10">
              Tell us what you&apos;re working on. We&apos;ll respond within 1
              working day.
            </p>
            <ContactForm />
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
                      Serving UK and GCC clients
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
                  — it&apos;s free and takes 10 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
