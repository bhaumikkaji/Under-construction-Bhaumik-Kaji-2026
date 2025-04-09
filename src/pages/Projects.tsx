
import { useEffect } from "react";
import ProjectCarousel from "@/components/ProjectCarousel";
import { usePasswordProtection } from "@/hooks/usePasswordProtection";
import AnimatedSection from "@/components/AnimatedSection";

export default function Projects() {
  const { isProtected, PasswordForm } = usePasswordProtection();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <PasswordForm />
      
      {!isProtected && (
        <>
          <section className="container mx-auto px-6 pt-8 pb-12">
            <AnimatedSection className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-grotesk text-navy mb-6">Selected Projects</h1>
              <p className="text-navy/80 text-lg">
                A curated selection of my work spanning product design, UX research, 
                and design systems at Microsoft and beyond.
              </p>
            </AnimatedSection>
          </section>
          
          <ProjectCarousel />
          
          <section className="container mx-auto py-24 px-6">
            <AnimatedSection className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-grotesk text-navy mb-8">Design Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border border-stone p-6 rounded-lg">
                  <h3 className="text-xl font-grotesk text-navy mb-3">Research</h3>
                  <p className="text-navy/80">
                    I start every project with a thorough understanding of the user needs, business goals, and technical constraints.
                  </p>
                </div>
                <div className="border border-stone p-6 rounded-lg">
                  <h3 className="text-xl font-grotesk text-navy mb-3">Ideation</h3>
                  <p className="text-navy/80">
                    Collaborating with stakeholders, I generate ideas that address user problems while aligning with business objectives.
                  </p>
                </div>
                <div className="border border-stone p-6 rounded-lg">
                  <h3 className="text-xl font-grotesk text-navy mb-3">Delivery</h3>
                  <p className="text-navy/80">
                    I work closely with engineering teams to ensure the designs are implemented with the intended user experience.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </section>
        </>
      )}
    </div>
  );
}
