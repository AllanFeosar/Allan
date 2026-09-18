import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const WHATSAPP_NUMBER = "919176404239";
const WHATSAPP_MESSAGE = "Hi X MEG! I'd like to know more about your services.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function Contact() {
  return (
    <section id="contact" className="bg-black px-6 py-28 text-center md:px-16">
      <div className="mx-auto max-w-2xl">
        <Image src="/images/logo.png" alt="X MEG" width={130} height={130} className="mx-auto rounded-full" />
        <h2 className="mt-6 text-4xl font-bold text-white">X MEG</h2>
        <p className="mt-2 text-sm font-bold tracking-[0.3em] text-brand-red uppercase">Build Beyond Boundaries</p>
        <p className="mt-1 text-brand-gray">Digital Engineering &amp; Technology Solutions</p>

        <h3 className="mt-12 text-2xl font-bold text-white">Let&apos;s build something useful.</h3>

        <div className="mt-8 space-y-2 text-gray-300">
          <p>Chennai, Tamil Nadu, India</p>
          <p>+91 91764 04239 / +91 93841 26235</p>
          <p>allgeofffeosar.lord888@gmail.com</p>
          <p className="text-sm text-brand-gray">
            linkedin.com/in/allan-feosar-204a6a21a &nbsp;|&nbsp; github.com/AllanFeosar
          </p>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-5xl gap-16 border-t border-white/10 pt-16 text-left md:grid-cols-[240px_1fr] md:gap-12">
        <div className="text-center md:sticky md:top-28 md:self-start">
          <h3 className="text-lg font-bold text-white">Message on WhatsApp</h3>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
            <Image
              src="/images/whatsapp-qr.png"
              alt="Scan to connect on WhatsApp"
              width={180}
              height={180}
              className="mx-auto rounded"
            />
            <p className="mt-3 text-xs font-bold tracking-widest text-brand-red uppercase">
              Scan to connect
            </p>
          </a>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Or send us a message directly</h3>
          <ContactForm />
        </div>
      </div>

      <p className="mt-20 text-center text-xs tracking-widest text-brand-gray/60 uppercase">
        X MEG / Company Profile / 2026
      </p>
    </section>
  );
}
