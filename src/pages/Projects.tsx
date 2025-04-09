
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { usePasswordProtection } from "@/hooks/usePasswordProtection";
import { ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { projectsData } from "@/data/projectsData";

// LazyLoad component for projects
const LazyProjectCard = ({ project, index }: { project: typeof projectsData[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1 % 0.5, // stagger effect but reset after every 5 items
      }}
      className="mb-8"
    >
      <div className="group relative overflow-hidden rounded-lg">
        <Link to={`/project/${project.id}`} className="block">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 hover-effect-image"
            />
          </div>
          <div className="mt-4">
            <span className="text-xs text-navy/60 dark:text-cybertext/80 uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-xl font-grotesk text-navy dark:text-cybertext mt-1 group-hover:underline">
              {project.title}
            </h3>
            <p className="text-navy/70 dark:text-cybertext/90 mt-2 line-clamp-2">
              {project.description}
            </p>
            <div className="mt-4 inline-flex items-center text-navy dark:text-cybertext font-medium">
              Learn More
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const { isProtected, PasswordForm } = usePasswordProtection();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading time for demonstration
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pb-16 bg-offwhite dark:bg-darkbg">
      <PasswordForm />
      
      {!isProtected && (
        <>
          {/* Move the back button from top left to bottom left by changing its positioning */}
          <div className="fixed bottom-8 left-8 z-10">
            <Link 
              to="/" 
              className="p-3 bg-white/80 dark:bg-darkbg/80 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-cyberborder/30 transition-colors"
              aria-label="Back to home"
            >
              <ArrowLeft size={20} className="text-navy dark:text-cybertext" />
            </Link>
          </div>
          
          <section className="container mx-auto px-6 pt-20 mb-12">
            <AnimatedSection className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-grotesk text-navy dark:text-cybertext mb-6">Projects</h1>
              <p className="text-navy/80 dark:text-cybertext text-lg">
                A curated selection of my work spanning product design, UX research, 
                and design systems at Microsoft and beyond.
              </p>
            </AnimatedSection>
          </section>
          
          <section className="container mx-auto px-6">
            {isLoaded ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {projectsData.map((project, index) => (
                  <LazyProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index} 
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="animate-pulse mb-8">
                    <div className="bg-stone dark:bg-cyberborder/30 aspect-[4/3] rounded-lg"></div>
                    <div className="mt-4">
                      <div className="h-3 bg-stone dark:bg-cyberborder/30 w-16 rounded"></div>
                      <div className="h-6 bg-stone dark:bg-cyberborder/30 w-3/4 rounded mt-2"></div>
                      <div className="h-4 bg-stone dark:bg-cyberborder/30 w-full rounded mt-2"></div>
                      <div className="h-4 bg-stone dark:bg-cyberborder/30 w-1/2 rounded mt-2"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}
