
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="container mx-auto py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mb-16">
            <h1 className="text-4xl md:text-5xl font-grotesk text-navy mb-6">About Me</h1>
            <p className="text-navy/80 text-lg">
              I'm Bhaumik Kaji, a Senior Product Designer at Microsoft focusing on Microsoft Copilot.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <AnimatedSection delay={100}>
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/5dba1127-e2a3-4e51-ad8c-e39267bcf42f.png" 
                  alt="Bhaumik Kaji" 
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="flex flex-col justify-center">
              <h2 className="text-2xl font-grotesk text-navy mb-4">My Journey</h2>
              <p className="text-navy/80 mb-4">
                With 9 years of experience in design, I've honed my skills in creating intuitive, accessible, 
                and impactful digital experiences. My career has been focused on understanding user needs
                and translating them into meaningful solutions.
              </p>
              <p className="text-navy/80 mb-4">
                At Microsoft, I lead design initiatives for Copilot, Microsoft's AI assistant, 
                helping users accomplish more with the power of AI across Microsoft products.
              </p>
              <p className="text-navy/80">
                I'm passionate about creating products that are not only beautiful but also 
                solve real problems for users.
              </p>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={300} className="mb-16">
            <h2 className="text-2xl font-grotesk text-navy mb-6">Experience</h2>
            <div className="space-y-8">
              <div className="border-l-2 border-stone pl-6 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-navy"></div>
                <h3 className="text-xl font-grotesk text-navy">Senior Product Designer</h3>
                <p className="text-navy/70 mb-2">Microsoft | 2020 - Present</p>
                <p className="text-navy/80">
                  Leading design initiatives for Microsoft Copilot, focusing on creating intuitive AI-assisted experiences.
                </p>
              </div>
              
              <div className="border-l-2 border-stone pl-6 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-navy"></div>
                <h3 className="text-xl font-grotesk text-navy">Product Designer</h3>
                <p className="text-navy/70 mb-2">Microsoft | 2018 - 2020</p>
                <p className="text-navy/80">
                  Designed user experiences for Microsoft products, collaborating with cross-functional teams.
                </p>
              </div>
              
              <div className="border-l-2 border-stone pl-6 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-navy"></div>
                <h3 className="text-xl font-grotesk text-navy">UX Designer</h3>
                <p className="text-navy/70 mb-2">Previous Company | 2015 - 2018</p>
                <p className="text-navy/80">
                  Created user-centered designs for web and mobile applications, conducted user research and testing.
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <h2 className="text-2xl font-grotesk text-navy mb-6">Skills & Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-stone p-4 rounded-lg">
                <h3 className="font-medium text-navy">Product Design</h3>
              </div>
              <div className="bg-stone p-4 rounded-lg">
                <h3 className="font-medium text-navy">UX Research</h3>
              </div>
              <div className="bg-stone p-4 rounded-lg">
                <h3 className="font-medium text-navy">Design Systems</h3>
              </div>
              <div className="bg-stone p-4 rounded-lg">
                <h3 className="font-medium text-navy">Prototyping</h3>
              </div>
              <div className="bg-stone p-4 rounded-lg">
                <h3 className="font-medium text-navy">User Testing</h3>
              </div>
              <div className="bg-stone p-4 rounded-lg">
                <h3 className="font-medium text-navy">Visual Design</h3>
              </div>
            </div>
            
            <div className="mt-12">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-navy text-white rounded-md hover:bg-navy/90 transition-colors"
              >
                Get in Touch
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
