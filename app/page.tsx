import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import Membership from "@/components/Membership";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <>
      <Navbar />
      <MobileNav activePage="Home" />
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Facilities />
        <Membership />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
