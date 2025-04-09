
import { useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-offwhite dark:bg-darkbg">
      <section className="container mx-auto py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-12">
            <h1 className="text-4xl md:text-5xl font-grotesk text-navy dark:text-cybertext mb-6">Get in Touch</h1>
            <p className="text-navy/80 dark:text-cybertext text-lg max-w-2xl">
              Have a project in mind or just want to connect? I'm always open to discussing 
              design challenges and opportunities.
            </p>
          </AnimatedSection>
          
          <div className="flex justify-center">
            <AnimatedSection delay={100} className="max-w-md w-full">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
