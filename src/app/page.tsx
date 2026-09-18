import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Company from "@/components/sections/Company";
import Services from "@/components/sections/Services";
import Technology from "@/components/sections/Technology";
import Solutions from "@/components/sections/Solutions";
import SelectedWork from "@/components/sections/SelectedWork";
import Process from "@/components/sections/Process";
import Founder from "@/components/sections/Founder";
import WhoWeServe from "@/components/sections/WhoWeServe";
import InternationalDelivery from "@/components/sections/InternationalDelivery";
import WhyXMeg from "@/components/sections/WhyXMeg";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top" className="bg-black">
      <Nav />
      <Hero />
      <Company />
      <Services />
      <Technology />
      <Solutions />
      <SelectedWork />
      <Process />
      <Founder />
      <WhoWeServe />
      <InternationalDelivery />
      <WhyXMeg />
      <Contact />
      <Footer />
    </main>
  );
}
