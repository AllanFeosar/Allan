// FormSubmit.co needs no backend, but the FIRST real submission triggers a
// confirmation email to FORM_EMAIL - someone needs to open that email and
// click "Activate Form" once before submissions actually deliver. After
// that, this plain-email action URL can optionally be swapped for the
// hashed one FormSubmit issues, to avoid exposing the raw address in the
// page source (functionally identical, just hides the email from view-source).
const FORM_EMAIL = "allgeofffeosar.lord888@gmail.com";

const SERVICES = [
  "Web Application Development",
  "Website Design",
  "Software Development",
  "API & Integration",
  "Business Automation",
  "Job Consultancy",
  "Other",
];

export default function ContactForm() {
  return (
    <form
      action={`https://formsubmit.co/${FORM_EMAIL}`}
      method="POST"
      className="mt-6 grid gap-5 text-left"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-xs font-bold tracking-widest text-brand-gray uppercase">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            placeholder="Your name"
            className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-brand-gray/60 focus:border-brand-red focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1 block text-xs font-bold tracking-widest text-brand-gray uppercase">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            maxLength={100}
            placeholder="Company name"
            className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-brand-gray/60 focus:border-brand-red focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-xs font-bold tracking-widest text-brand-gray uppercase">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={100}
            placeholder="you@company.com"
            className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-brand-gray/60 focus:border-brand-red focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-xs font-bold tracking-widest text-brand-gray uppercase">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={30}
            placeholder="+91 91764 04239"
            className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-brand-gray/60 focus:border-brand-red focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service_interest" className="mb-1 block text-xs font-bold tracking-widest text-brand-gray uppercase">
          Service Interest
        </label>
        <select
          id="service_interest"
          name="service_interest"
          className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-white focus:border-brand-red focus:outline-none"
        >
          <option className="bg-black">Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s} className="bg-black">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-xs font-bold tracking-widest text-brand-gray uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1000}
          placeholder="Tell us about your project..."
          className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-brand-gray/60 focus:border-brand-red focus:outline-none"
        />
      </div>

      {/* Honeypot spam trap - hidden from real users, bots tend to fill every field */}
      <input type="text" name="_honey" style={{ display: "none" }} autoComplete="off" tabIndex={-1} />
      <input type="hidden" name="_subject" value="New Inquiry from X MEG Website" />
      <input type="hidden" name="_next" value="https://xmeg.dpdns.org/thank-you" />
      <input type="hidden" name="_captcha" value="true" />

      <button
        type="submit"
        className="mt-2 w-full rounded bg-brand-red py-3 font-bold text-white transition-opacity hover:opacity-90"
      >
        Send Inquiry
      </button>
    </form>
  );
}
