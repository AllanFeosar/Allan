import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for X MEG.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-black">
      <Nav />
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-40 text-gray-200 md:px-16">
        <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
        <p className="mt-2 text-brand-gray">Last Updated: September 2026</p>

        <div className="prose-section mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white">1. Introduction</h2>
            <p className="mt-2 text-gray-300">
              X MEG (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) is
              committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard information when you visit our website, contact us, or
              engage us for web, software, or consultancy services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-300">
              <li>
                <strong className="text-white">Contact Data:</strong> name, email, phone number,
                company name, and project details you provide via our contact form, WhatsApp, or
                email.
              </li>
              <li>
                <strong className="text-white">Project Data:</strong> requirements,
                specifications, credentials, or content you share with us for the purpose of
                building, integrating, or maintaining software on your behalf.
              </li>
              <li>
                <strong className="text-white">Usage Data:</strong> pages visited, time spent, and
                general browsing behavior on this website.
              </li>
              <li>
                <strong className="text-white">Technical Data:</strong> IP address, browser type,
                and device information.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-300">
              <li>Respond to inquiries and scope potential engagements</li>
              <li>Deliver, support, and maintain software we build or manage for you</li>
              <li>Improve this website and our services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud, abuse, and security incidents</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">4. Project &amp; Client Data</h2>
            <p className="mt-2 text-gray-300">
              Where a project requires access to your systems, credentials, or business data, that
              data is used solely to deliver the agreed work and is not shared with third parties
              beyond what is necessary to complete the engagement (e.g. hosting providers you
              direct us to use). Specific handling terms for a given engagement are agreed in
              writing before work begins.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">5. Data Protection</h2>
            <p className="mt-2 text-gray-300">
              We take reasonable technical and organizational measures to protect information
              against unauthorized access, alteration, disclosure, or destruction. No method of
              transmission over the internet is completely secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">6. Third-Party Services</h2>
            <p className="mt-2 text-gray-300">
              This website uses third-party services to operate, including form-submission
              handling for the contact form and WhatsApp for direct messaging. These providers
              have their own privacy policies governing how they handle data passed through them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">7. Your Rights</h2>
            <p className="mt-2 text-gray-300">
              You may request access to, correction of, or deletion of personal data we hold about
              you by contacting us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">8. Contact Us</h2>
            <p className="mt-2 text-gray-300">
              X MEG
              <br />
              Chennai, Tamil Nadu, India
              <br />
              Email:{" "}
              <a href="mailto:allgeofffeosar.lord888@gmail.com" className="text-brand-red">
                allgeofffeosar.lord888@gmail.com
              </a>
              <br />
              Phone: +91 91764 04239 / +91 93841 26235
            </p>
          </section>
        </div>
      </article>
      <Contact />
      <Footer />
    </main>
  );
}
