
import { ReactNode, useEffect, useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0 
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    section.style.transitionDelay = `${delay}ms`;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('animate');
          observer.unobserve(section);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    observer.observe(section);
    return () => observer.disconnect();
  }, [delay]);
  
  return (
    <div 
      ref={sectionRef}
      className={`animate-on-scroll ${className}`}
    >
      {children}
    </div>
  );
}
