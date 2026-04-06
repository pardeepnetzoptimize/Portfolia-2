import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import AboutServices from "@/components/AboutServices";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen w-full bg-[#0a0a0a]">
      <Navbar />
      <ScrollyCanvas />
      <AboutServices />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <ContactSection />
      <Footer />
    </main>
  );
}
