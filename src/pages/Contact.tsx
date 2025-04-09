
import { useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { Mail, Linkedin } from "lucide-react";

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection delay={100}>
              <ContactForm />
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-grotesk text-navy dark:text-cybertext mb-4">Contact Information</h2>
                  <p className="text-navy/80 dark:text-cybertext mb-6">
                    Feel free to reach out through the form or directly via email or LinkedIn.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 text-navy dark:text-cybertext mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-navy dark:text-cybertext">Email</h3>
                    <a 
                      href="mailto:bhaumikkaji@gmail.com" 
                      className="text-navy/80 dark:text-cybertext hover:text-navy dark:hover:text-cybertext/80 transition-colors"
                    >
                      bhaumikkaji@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className="mr-4 text-navy dark:text-cybertext mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-navy dark:text-cybertext">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/bhaumikkaji/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-navy/80 dark:text-cybertext hover:text-navy dark:hover:text-cybertext/80 transition-colors"
                    >
                      linkedin.com/in/bhaumikkaji
                    </a>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-stone dark:border-cyberborder">
                  <p className="text-navy/80 dark:text-cybertext">
                    I'm currently based in Seattle, Washington, working at Microsoft's headquarters.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
