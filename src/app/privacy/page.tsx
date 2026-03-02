import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Smith Innovation Studio websites and applications.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted text-sm mb-12">
          Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <div className="prose-custom space-y-10">
          <PolicySection title="1. Who we are">
            <p>
              Smith Innovation Studio (&ldquo;SIS&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website
              smithinnovation.studio and mobile applications including First
              Things First, Financial IQ, and Church CRM.
            </p>
            <p>
              For any questions about this policy, contact us at{" "}
              <a
                href="mailto:privacy@smithinnovation.studio"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                privacy@smithinnovation.studio
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="2. Information we collect">
            <p>We collect information you provide directly:</p>
            <ul>
              <li>
                <strong>Contact forms:</strong> Name, email address, company
                name, phone number, and message content.
              </li>
              <li>
                <strong>AI Readiness Scorecard:</strong> Your responses, email
                address, and the results generated.
              </li>
              <li>
                <strong>Mobile apps:</strong> Usage data, preferences, and any
                information you enter into the app.
              </li>
            </ul>
            <p>We automatically collect:</p>
            <ul>
              <li>
                Basic analytics data (pages visited, time on site) via privacy-respecting analytics.
              </li>
              <li>
                Device information when using our mobile applications (device
                type, operating system version).
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="3. How we use your information">
            <ul>
              <li>To respond to enquiries and provide our services.</li>
              <li>To generate and deliver your AI Readiness Scorecard results.</li>
              <li>To improve our websites and applications.</li>
              <li>To send service-related communications.</li>
            </ul>
            <p>
              We do not sell your data. We do not use your data for advertising.
            </p>
          </PolicySection>

          <PolicySection title="4. Data storage and security">
            <p>
              Your data is stored securely using industry-standard encryption.
              Contact form submissions and scorecard results are processed via
              secure, encrypted connections.
            </p>
            <p>
              We retain your data only as long as necessary to provide our
              services or as required by law.
            </p>
          </PolicySection>

          <PolicySection title="5. Third-party services">
            <p>
              We use the following third-party services to operate:
            </p>
            <ul>
              <li>
                <strong>Hosting:</strong> Vercel (website hosting and edge
                functions).
              </li>
              <li>
                <strong>Email:</strong> Resend (transactional email delivery).
              </li>
              <li>
                <strong>Database:</strong> Supabase (scorecard data storage).
              </li>
              <li>
                <strong>Analytics:</strong> Google Analytics (anonymised usage
                data).
              </li>
            </ul>
            <p>
              Each third-party service has its own privacy policy governing the
              data they process on our behalf.
            </p>
          </PolicySection>

          <PolicySection title="6. Your rights">
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data.</li>
              <li>Withdraw consent at any time.</li>
            </ul>
            <p>
              To exercise any of these rights, email{" "}
              <a
                href="mailto:privacy@smithinnovation.studio"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                privacy@smithinnovation.studio
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="7. Mobile applications">
            <p>
              Our mobile applications (First Things First, Financial IQ, Church
              CRM) may collect additional data specific to their functionality.
              Each app&apos;s data practices are described within the app and on
              its respective App Store listing.
            </p>
            <p>
              We do not share app usage data with third parties for advertising
              purposes.
            </p>
          </PolicySection>

          <PolicySection title="8. Changes to this policy">
            <p>
              We may update this policy from time to time. Changes will be posted
              on this page with an updated revision date.
            </p>
          </PolicySection>
        </div>
      </div>
    </section>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-foreground mb-4">{title}</h2>
      <div className="text-muted leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-foreground">
        {children}
      </div>
    </div>
  );
}
