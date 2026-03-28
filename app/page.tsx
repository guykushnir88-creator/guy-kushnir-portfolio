import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import PMAgentChain from "@/components/PMAgentChain";
import CaseStudy from "@/components/CaseStudy";
import Dashboard from "@/components/Dashboard";
import Security from "@/components/Security";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <PMAgentChain />
        <CaseStudy />
        <Dashboard />
        <Security />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
