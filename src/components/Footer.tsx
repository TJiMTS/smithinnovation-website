"use client";

import Link from "next/link";
import { Linkedin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Workflow Systems", href: "/ai-automation" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "AI Readiness Scorecard", href: "/scorecard" },
  {
    label: "AI Workflow Audit",
    href: "/contact?interest=AI%20Workflow%20Audit",
  },
  {
    label: "Client Email Intelligence",
    href: "/contact?interest=Client%20Email%20Intelligence",
  },
  {
    label: "AI Admin & Compliance Workflows",
    href: "/contact?interest=AI%20Admin%20%26%20Compliance%20Workflows",
  },
  {
    label: "AI-Assisted Bookkeeping Operations",
    href: "/contact?interest=AI-Assisted%20Bookkeeping%20Operations",
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-divider">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo + description */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xs">
                  S
                </span>
              </div>
              <span className="text-foreground font-bold text-xs tracking-wide uppercase leading-tight">
                Smith
                <br />
                Innovation
                <br />
                Studio
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              AI workflow systems for UK accountancy and bookkeeping firms.
              Built from live operational experience inside a real practice.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-foreground font-semibold text-sm mb-4">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted hover:text-foreground text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold text-sm mb-4">
              Services
            </h3>
            <nav className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted hover:text-foreground text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold text-sm mb-4">
              Contact
            </h3>
            <div className="flex flex-col gap-2.5 text-muted text-sm">
              <a
                href="mailto:hello@smithinnovation.studio"
                className="hover:text-foreground transition-colors"
              >
                hello@smithinnovation.studio
              </a>
              <p>Dubai, UAE</p>
              <p className="text-muted/60 text-xs">
                Serving UK accountancy and bookkeeping firms
              </p>
              <div className="flex gap-3 mt-2">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-card-border bg-card-bg flex items-center justify-center text-muted hover:text-foreground hover:border-accent/50 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-divider flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted/50 text-xs">
            &copy; {new Date().getFullYear()} Smith Innovation Studio. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-muted/50 hover:text-muted text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/support"
              className="text-muted/50 hover:text-muted text-xs transition-colors"
            >
              Support
            </Link>
            <Link
              href="/scorecard"
              className="text-accent hover:text-accent-hover text-xs font-medium transition-colors"
            >
              Take the AI Readiness Scorecard →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
