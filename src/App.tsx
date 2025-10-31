import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProjectsCarousel } from "@/components/projects-carousel";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Process } from "@/components/process";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <ProjectsCarousel />
        <Services />
        <About />
        <Testimonials />
        <Process />
        <ContactForm />
        <Footer />
      </div>
    </SmoothScroll>
  )
}
