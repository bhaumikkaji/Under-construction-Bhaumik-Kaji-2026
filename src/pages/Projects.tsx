
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { usePasswordProtection } from "@/hooks/usePasswordProtection";
import { ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// Project data
const projectsData = [
  {
    id: 1,
    title: "Microsoft Copilot",
    description: "Leading design initiatives for Microsoft's AI assistant, helping users accomplish more with the power of AI across Microsoft products.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070",
    category: "AI Design"
  },
  {
    id: 2,
    title: "Design System Evolution",
    description: "Developed and maintained a comprehensive design system that ensures consistency across Microsoft's product ecosystem.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
    category: "Design Systems"
  },
  {
    id: 3,
    title: "User Experience Optimization",
    description: "Conducted extensive user research and testing to optimize the experience for Microsoft products, resulting in improved usability metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    category: "UX Research"
  },
  {
    id: 4,
    title: "Cross-Platform Integration",
    description: "Designed seamless experiences that work across devices and platforms, ensuring consistent user experience regardless of access point.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070",
    category: "Responsive Design"
  },
  {
    id: 5,
    title: "Enterprise Dashboard",
    description: "Created an intuitive dashboard for enterprise users, simplifying complex data visualization and decision-making processes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    category: "Enterprise UX"
  },
  {
    id: 6,
    title: "Mobile App Redesign",
    description: "Revamped a major mobile application to improve user engagement metrics and modernize the visual design language.",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=2070",
    category: "Mobile UX"
  },
  {
    id: 7,
    title: "Accessibility Initiative",
    description: "Led an initiative to improve accessibility across Microsoft products, ensuring inclusive design for users with diverse needs.",
    image: "https://images.unsplash.com/photo-1573496528013-454181200d97?auto=format&fit=crop&q=80&w=2069",
    category: "Accessibility"
  },
  {
    id: 8,
    title: "Mixed Reality Interface",
    description: "Designed intuitive user interfaces for mixed reality applications, bridging physical and digital interaction models.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=2070",
    category: "Mixed Reality"
  },
  {
    id: 9,
    title: "Customer Journey Mapping",
    description: "Mapped comprehensive customer journeys to identify pain points and opportunities for improving the end-to-end experience.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
    category: "User Research"
  },
  {
    id: 10,
    title: "Voice Interface Design",
    description: "Created conversation flows and interaction models for voice-first interfaces, enhancing how users interact with AI assistants.",
    image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&q=80&w=2070",
    category: "Voice UI"
  },
  {
    id: 11,
    title: "Design Sprint Facilitation",
    description: "Led cross-functional teams through design sprints to rapidly prototype and validate new product concepts.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2070",
    category: "Design Process"
  },
  {
    id: 12,
    title: "E-commerce Optimization",
    description: "Improved conversion rates for an e-commerce platform through strategic UX improvements and data-driven design decisions.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2070",
    category: "E-commerce"
  }
];

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
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
