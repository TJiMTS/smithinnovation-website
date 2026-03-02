import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Smith Innovation Studio apps and services. Contact our support team.",
};

export default function SupportPage() {
  return (
    <section className="pt-32 pb-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
          Support
        </h1>
        <p className="text-muted text-lg mb-12 leading-relaxed">
          Need help with one of our apps or services? We&apos;re here to help.
        </p>

        <div className="space-y-8">
          {/* App Support */}
          <div className="p-8 rounded-2xl border border-card-border bg-card-bg">
            <h2 className="text-xl font-bold text-foreground mb-4">
              App Support
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              If you&apos;re experiencing issues with one of our apps (First
              Things First, Financial IQ, or Church CRM), please get in touch
              and include:
            </p>
            <ul className="text-muted space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                The name of the app
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                Your device and operating system version
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>A description of the
                issue
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                Screenshots if applicable
              </li>
            </ul>
            <a
              href="mailto:support@smithinnovation.studio"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors"
            >
              <Mail size={18} />
              support@smithinnovation.studio
            </a>
          </div>

          {/* General Enquiries */}
          <div className="p-8 rounded-2xl border border-card-border bg-card-bg">
            <h2 className="text-xl font-bold text-foreground mb-4">
              General Enquiries
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              For questions about our services, partnerships, or anything else,
              visit our contact page or email us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors"
              >
                <MessageCircle size={18} />
                Contact page
              </Link>
              <a
                href="mailto:hello@smithinnovation.studio"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors"
              >
                <Mail size={18} />
                hello@smithinnovation.studio
              </a>
            </div>
          </div>

          {/* Response Time */}
          <p className="text-muted text-sm">
            We aim to respond to all support requests within 1 working day.
          </p>
        </div>
      </div>
    </section>
  );
}
