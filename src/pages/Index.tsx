
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Mail } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { CaptchaVerification } from "@/components/CaptchaVerification";
export default function Index() {
  const [isCaptchaOpen, setIsCaptchaOpen] = useState(false);
  const [pendingEmailAction, setPendingEmailAction] = useState<{
    source: string;
  }>({
    source: ""
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleContactClick = (e: React.MouseEvent, source: string = "footer") => {
    e.preventDefault();
    setPendingEmailAction({
      source
    });
    setIsCaptchaOpen(true);
  };
  const handleCaptchaSuccess = () => {
    const subject = encodeURIComponent("Contact from Portfolio Website");
    const body = encodeURIComponent(`Hello Bhaumik,\n\nI'm reaching out from your portfolio website (${pendingEmailAction.source} section).\n\n`);
    window.location.href = `mailto:bhaumikkaji@gmail.com?subject=${subject}&body=${body}`;
  };
  return <div className="min-h-screen">
      <section className="container mx-auto px-6 pt-20 pb-32 md:pt-32 md:pb-40 relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }} className="mb-8">
                <span className="text-indigoPurple/70 uppercase tracking-wider text-sm font-medium py-2 inline-block px-0">Senior Product Designer</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-grotesk text-indigoPurple mb-10 leading-tight">
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.1
              }} className="overflow-hidden relative">
                  <span className="block">Designing</span>
                </motion.div>
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.2
              }} className="overflow-hidden relative">
                  <span className="block text-indigoPurple/80">experiences</span>
                </motion.div>
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.3
              }} className="overflow-hidden relative">
                  <span className="block font-bold">that matter</span>
                </motion.div>
              </h1>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.4
            }}>
                <p className="text-lg md:text-xl text-indigoPurple/80 mb-10 max-w-2xl leading-relaxed border-l-4 border-indigoPurple/20 pl-6 py-2">
                  Bhaumik Kaji is currently working on designing agentic capabilities with Microsoft Copilot, driving the future of AI-powered tools.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/projects" className="inline-flex items-center px-8 py-4 bg-indigoPurple text-white rounded-md hover:bg-indigoPurple/90 transition-colors font-medium">
                    View Projects
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                  <a href="#" onClick={e => handleContactClick(e, "hero")} className="inline-flex items-center px-8 py-4 border-2 border-indigoPurple text-indigoPurple rounded-md hover:bg-stone/50 transition-colors font-medium dark:border-cybertext dark:text-cybertext">
                    Get in Touch
                    <Mail size={18} className="ml-2" />
                  </a>
                </div>
              </motion.div>
            </div>
            
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }} className="md:col-span-5 relative">
              <div className="absolute inset-0 bg-indigoPurple/5 rounded-2xl transform rotate-3 scale-105"></div>
              <AspectRatio ratio={4 / 5} className="bg-stone rounded-xl overflow-hidden shadow-lg relative">
                <img src="/lovable-uploads/5dba1127-e2a3-4e51-ad8c-e39267bcf42f.png" alt="Bhaumik Kaji" className="h-full w-full object-cover" />
              </AspectRatio>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="bg-stone py-24" id="featured-section">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl md:text-4xl font-grotesk text-indigoPurple mb-8">Featured Work</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection className="relative overflow-hidden group" delay={100}>
              <Link to="/projects" className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070" alt="Microsoft Copilot" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-grotesk text-indigoPurple group-hover:underline">Microsoft Copilot</h3>
                  <p className="text-indigoPurple/70 mt-2">AI-assisted experiences</p>
                </div>
              </Link>
            </AnimatedSection>
            
            <AnimatedSection className="relative overflow-hidden group" delay={200}>
              <Link to="/projects" className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000" alt="Design System" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-grotesk text-indigoPurple group-hover:underline">Design System Evolution</h3>
                  <p className="text-indigoPurple/70 mt-2">Maintaining consistent experiences</p>
                </div>
              </Link>
            </AnimatedSection>
          </div>
          
          <AnimatedSection className="mt-12 text-center" delay={300}>
            <Link to="/projects" className="inline-flex items-center text-indigoPurple hover:text-indigoPurple/80 transition-colors font-medium">
              View All Projects
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      <section id="about-section" className="container mx-auto py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-grotesk text-indigoPurple mb-6">About Me</h2>
              <p className="text-indigoPurple/80 mb-6">
                I'm a Senior Product Designer at Microsoft with 9 years of experience in creating
                human-centered digital experiences. Currently focused on enhancing Microsoft Copilot,
                I strive to make technology more intuitive and accessible.
              </p>
              <Link to="/about" className="inline-flex items-center text-indigoPurple hover:text-indigoPurple/80 transition-colors font-medium">
                Learn More About Me
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="md:w-1/2 aspect-square max-w-sm">
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img src="/lovable-uploads/5dba1127-e2a3-4e51-ad8c-e39267bcf42f.png" alt="Bhaumik Kaji" className="w-full h-full object-cover" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <section id="contact-section" className="bg-indigoPurple text-white py-24 dark:bg-darkbg">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-grotesk mb-6 dark:text-cybertext">Let's work together</h2>
            <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto dark:text-cybertext/80">
              Have a project in mind or just want to connect? I'm always open to discussing 
              design challenges and opportunities.
            </p>
            <a href="#" onClick={e => handleContactClick(e, "footer")} className="inline-flex items-center px-6 py-3 bg-white text-indigoPurple rounded-md hover:bg-white/90 transition-colors dark:bg-darkbg dark:text-cybertext dark:border dark:border-cybertext dark:hover:bg-cybertext/10">
              Get in Touch
              <Mail size={18} className="ml-2" />
            </a>
          </AnimatedSection>
        </div>
      </section>
      
      <CaptchaVerification isOpen={isCaptchaOpen} onOpenChange={setIsCaptchaOpen} onSuccess={handleCaptchaSuccess} />
    </div>;
}
