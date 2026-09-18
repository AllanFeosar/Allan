import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for X MEG.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfService() {
  return (
    <main className="bg-black">
      <Nav />
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-40 text-gray-200 md:px-16">
        <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
        <p className="mt-2 text-brand-gray">Last Updated: September 2026</p>

        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
            <p className="mt-2 text-gray-300">
              By accessing this website or engaging X MEG for services, you agree to be bound by
              these Terms of Service. If you do not agree, please do not use this site or engage
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">2. Services</h2>
            <p className="mt-2 text-gray-300">
              X MEG provides web application development, website design, software development,
              API and integration work, business automation, and related technical consultancy.
              The specific scope, deliverables, timeline, and cost of any engagement are agreed in
              writing (proposal, quote, or contract) before work begins - these Terms govern the
              website and our general relationship, not the specifics of any one project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">3. Intellectual Property</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-300">
              <li>
                Unless otherwise agreed in writing, ownership of custom code, designs, and other
                deliverables built specifically for a client transfers to that client upon full
                payment for the engagement.
              </li>
              <li>
                X MEG retains the right to reuse general-purpose tools, components, and know-how
                developed during an engagement that are not specific to the client&apos;s
                confidential business logic.
              </li>
              <li>
                Third-party libraries, frameworks, and services used in a project remain governed
                by their own licenses.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">4. Client Responsibilities</h2>
            <p className="mt-2 text-gray-300">
              Clients are responsible for providing accurate requirements, timely feedback, and
              any credentials or access needed to complete a project. Delays in providing these
              may affect delivery timelines.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">5. Payment</h2>
            <p className="mt-2 text-gray-300">
              Payment terms (amount, schedule, and method) are agreed per engagement before work
              begins. Late or missing payment may result in paused work or withheld deliverables,
              as specified in the relevant agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">6. Disclaimer</h2>
            <p className="mt-2 text-gray-300">
              This website and its content are provided &quot;as is&quot; without warranties of
              any kind, express or implied, including warranties of merchantability, fitness for a
              particular purpose, or non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">7. Limitation of Liability</h2>
            <p className="mt-2 text-gray-300">
              To the fullest extent permitted by law, X MEG shall not be liable for any indirect,
              incidental, or consequential damages, including loss of data, profit, or business
              interruption, arising from use of this website or from services provided, except
              where such liability cannot be excluded under applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">8. Confidentiality</h2>
            <p className="mt-2 text-gray-300">
              Information shared by a client for the purpose of an engagement is treated as
              confidential and is not disclosed to third parties except as necessary to deliver
              the agreed work or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">9. Modifications</h2>
            <p className="mt-2 text-gray-300">
              X MEG may revise these Terms at any time. Continued use of this website after
              changes are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">10. Governing Law</h2>
            <p className="mt-2 text-gray-300">
              These Terms are governed by the laws of India, and any disputes are subject to the
              exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">11. Contact</h2>
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
