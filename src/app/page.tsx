import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Principles from "@/components/sections/Principles";
import Articles from "@/components/sections/Articles";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <main className="min-h-screen bg-dark text-white overflow-hidden relative">
      {/* Background glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,.15),transparent_60%)] pointer-events-none" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Principles />
        <Articles />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
