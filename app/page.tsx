import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CloudSyncBanner from "@/components/CloudSyncBanner";
import SocialProofStrip from "@/components/SocialProofStrip";
import PMAgentChain from "@/components/PMAgentChain";
import About from "@/components/About";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CloudSyncBanner />
        <SocialProofStrip />
        <PMAgentChain />
        <About />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
