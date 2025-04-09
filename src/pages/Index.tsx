
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 bg-offwhite dark:bg-darkbg relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center relative z-10">
            {/* Text Content */}
            <div className="md:w-3/5 md:pr-12 relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <span className="text-navy/70 dark:text-cybertext uppercase tracking-wider text-sm">Senior Product Designer</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-grotesk text-navy dark:text-cybertext mb-8 md:mb-12 leading-tight relative">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="block"
                >
                  Designing
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="block"
                >
                  experiences
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="block"
                >
                  that matter
                </motion.span>
              </h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-lg md:text-xl text-navy/80 dark:text-cybertext mb-8 max-w-2xl">
                  I'm Bhaumik Kaji, a Senior Product Designer at Microsoft, focusing on Copilot, 
                  with 9 years of experience creating intuitive and impactful digital experiences.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/projects" 
                    className="inline-flex items-center px-6 py-3 bg-navy dark:bg-cybertext text-white dark:text-darkbg rounded-md hover:bg-navy/90 dark:hover:bg-cybertext/90 transition-colors"
                  >
                    View Projects
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                  <a 
                    href="mailto:bhaumikkaji@gmail.com?subject=Portfolio%20Connect%20-%20New%20Inquiry&body=Hello%20Bhaumik,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20about%20a%20potential%20project.%0A%0ABest%20regards,%0A"
                    className="inline-flex items-center px-6 py-3 border border-navy dark:border-cybertext text-navy dark:text-cybertext rounded-md hover:bg-stone dark:hover:bg-darkbg/50 transition-colors"
                  >
                    Get in Touch
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* Profile Image - Now larger and overlapping */}
            <motion.div 
              className="md:w-3/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl md:h-full md:aspect-auto aspect-square max-w-md mx-auto mt-8 md:mt-0">
                <img 
                  src="/lovable-uploads/5dba1127-e2a3-4e51-ad8c-e39267bcf42f.png" 
                  alt="Bhaumik Kaji" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 border-4 border-white/10 rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Section */}
      <section className="bg-stone dark:bg-darkbg py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl md:text-4xl font-grotesk text-navy dark:text-cybertext mb-8">Featured Work</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection className="relative overflow-hidden group" delay={100}>
              <Link to="/projects" className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070" 
                    alt="Microsoft Copilot" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-grotesk text-navy dark:text-cybertext group-hover:underline">Microsoft Copilot</h3>
                  <p className="text-navy/70 dark:text-cybertext mt-2">AI-assisted experiences</p>
                </div>
              </Link>
            </AnimatedSection>
            
            <AnimatedSection className="relative overflow-hidden group" delay={200}>
              <Link to="/projects" className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000" 
                    alt="Design System" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-grotesk text-navy dark:text-cybertext group-hover:underline">Design System Evolution</h3>
                  <p className="text-navy/70 dark:text-cybertext mt-2">Maintaining consistent experiences</p>
                </div>
              </Link>
            </AnimatedSection>
          </div>
          
          <AnimatedSection className="mt-12 text-center" delay={300}>
            <Link 
              to="/projects" 
              className="inline-flex items-center text-navy dark:text-cybertext hover:text-navy/80 dark:hover:text-cybertext/80 transition-colors font-medium"
            >
              View All Projects
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* About Section Preview */}
      <section id="about-section" className="bg-offwhite dark:bg-darkbg container mx-auto py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-grotesk text-navy dark:text-cybertext mb-6">About Me</h2>
              <p className="text-navy/80 dark:text-cybertext mb-6">
                I'm a Senior Product Designer at Microsoft with 9 years of experience in creating
                human-centered digital experiences. Currently focused on enhancing Microsoft Copilot,
                I strive to make technology more intuitive and accessible.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-navy dark:text-cybertext hover:text-navy/80 dark:hover:text-cybertext/80 transition-colors font-medium"
              >
                Learn More About Me
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="md:w-1/2 aspect-square max-w-sm">
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/5dba1127-e2a3-4e51-ad8c-e39267bcf42f.png" 
                  alt="Bhaumik Kaji" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section id="contact-section" className="bg-navy dark:bg-darkbg text-white dark:text-cybertext py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-grotesk mb-6">Let's work together</h2>
            <p className="text-white/80 dark:text-cybertext mb-8 text-lg max-w-xl mx-auto">
              Have a project in mind or just want to connect? I'm always open to discussing 
              design challenges and opportunities.
            </p>
            <a 
              href="mailto:bhaumikkaji@gmail.com?subject=Portfolio%20Connect%20-%20New%20Inquiry&body=Hello%20Bhaumik,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20about%20a%20potential%20project.%0A%0ABest%20regards,%0A"
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-cybertext text-navy dark:text-darkbg rounded-md hover:bg-white/90 dark:hover:bg-cybertext/90 transition-colors"
            >
              Get in Touch
              <ArrowRight size={18} className="ml-2" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
