import SharedHeader from "./SharedHeader";

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[oklch(0.09_0.028_247)] text-foreground">
      <SharedHeader />

      <main className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-2 gradient-text">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            Last updated: March 2026
          </p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">
                1. Introduction
              </h2>
              <p>
                Simlabs Software LLP ("SIMLABS", "we", "our", or "us") is
                committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, and safeguard information when you
                visit our website at www.simlabs.in.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong className="text-foreground">Usage Data:</strong>{" "}
                  Browser type, IP address, pages visited, time spent on pages,
                  and referring URLs collected automatically via standard web
                  server logs.
                </li>
                <li>
                  <strong className="text-foreground">
                    Contact Form Submissions:
                  </strong>{" "}
                  Name, email address, company name, and the message you submit
                  through our contact form.
                </li>
                <li>
                  <strong className="text-foreground">Cookie Data:</strong>{" "}
                  Preference data stored in browser cookies and local storage as
                  described in Section 4.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  To respond to enquiries submitted through the contact form.
                </li>
                <li>
                  To understand how visitors use our website and improve the
                  user experience.
                </li>
                <li>To maintain the security and integrity of our website.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">
                4. Cookies Policy
              </h2>
              <p className="mb-3">
                Our website uses cookies and similar technologies. We use the
                following types:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong className="text-foreground">
                    Essential / Functional Cookies:
                  </strong>{" "}
                  Required for the website to function correctly, such as
                  remembering your cookie consent preference.
                </li>
                <li>
                  <strong className="text-foreground">
                    Analytics Cookies:
                  </strong>{" "}
                  Help us understand visitor behaviour in aggregate so we can
                  improve our content and services.
                </li>
                <li>
                  <strong className="text-foreground">Session Cookies:</strong>{" "}
                  Temporary cookies that expire when you close your browser,
                  used to maintain session continuity.
                </li>
              </ul>
              <p className="mt-3">
                You can control cookie preferences through your browser
                settings. Note that disabling certain cookies may affect website
                functionality. Your cookie consent choice is stored locally
                under the key{" "}
                <code className="text-primary bg-primary/10 px-1 rounded">
                  simlabs_cookie_consent
                </code>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">
                5. Third-Party Services
              </h2>
              <p>
                Our website may include links to third-party websites, such as
                LinkedIn, YouTube, and other social media platforms. We are not
                responsible for the privacy practices of these external sites.
                We encourage you to review their individual privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">
                6. Data Retention
              </h2>
              <p>
                Contact form submissions are retained only as long as necessary
                to respond to your enquiry. Website log data is typically
                retained for up to 90 days. Cookie consent preferences are
                stored in your browser until you clear your browsing data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">
                7. Data Security
              </h2>
              <p>
                We implement appropriate technical and organisational measures
                to protect your personal information against unauthorised
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">
                8. Your Rights
              </h2>
              <p className="mb-3">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  Request access to the personal information we hold about you.
                </li>
                <li>
                  Request correction or deletion of your personal information.
                </li>
                <li>
                  Object to or restrict processing of your personal information.
                </li>
                <li>Withdraw consent where processing is based on consent.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at the email
                address below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of significant changes by updating the "Last updated"
                date at the top of this page. We encourage you to review this
                policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">
                10. Contact Us
              </h2>
              <p>
                If you have any questions or concerns about this Privacy Policy
                or our data practices, please contact us at:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-card border border-border">
                <p className="font-semibold text-foreground">
                  Simlabs Software LLP
                </p>
                <p className="mt-1">Email: info at simlabs dot in</p>
                <p>Website: www.simlabs.in</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8 mt-10">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © {currentYear}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
