
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Mail } from "lucide-react";
import { CaptchaVerification } from "./CaptchaVerification";
import { Button } from "./ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({
  children
}: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isCaptchaOpen, setIsCaptchaOpen] = useState(false);
  const [pendingEmailAction, setPendingEmailAction] = useState<{
    source: string;
  }>({
    source: ""
  });

  const handleContactClick = (e: React.MouseEvent, source: string = "nav") => {
    e.preventDefault();
    setPendingEmailAction({
      source
    });
    setIsCaptchaOpen(true);
  };

  const handleCaptchaSuccess = () => {
    const subject = encodeURIComponent("Contact from Portfolio Website");
    const body = encodeURIComponent(`Hello Bhaumik,\n\nI'm reaching out from your portfolio website (${pendingEmailAction.source} navigation).\n\n`);
    window.location.href = `mailto:bhaumikkaji@gmail.com?subject=${subject}&body=${body}`;
  };

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavigation = (path: string) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', {
        state: {
          scrollTo: id
        }
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        setIsOpen(false);
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const {
        scrollTo
      } = location.state as {
        scrollTo: string;
      };
      const element = document.getElementById(scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth'
          });
          navigate('/', {
            replace: true,
            state: {}
          });
        }, 100);
      }
    }
  }, [location, navigate]);

  return <div className="min-h-screen flex flex-col bg-offwhite dark:bg-darkbg">
      <header className="py-6 px-6 md:py-8 md:px-8 fixed w-full z-40 backdrop-blur-sm bg-offwhite/80 dark:bg-darkbg/80">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5
        }}>
            <Link to="/" className="font-grotesk text-lg md:text-xl font-medium text-indigoPurple dark:text-cybertext">
              Bhaumik Kaji
            </Link>
          </motion.div>
          
          <div className="flex items-center gap-2">
            <nav className="hidden md:flex space-x-8 mr-4">
              <NavLink to="/" label="Home" currentPath={location.pathname} />
              <NavLink to="/projects" label="Projects" currentPath={location.pathname} />
              <NavLink to="/about" label="About" currentPath={location.pathname} />
            </nav>
            
            <ThemeToggle />
            
            <Button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu" 
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-stone/30 dark:hover:bg-cybertext/20"
            >
              <div className="flex flex-col space-y-1.5 items-center justify-center">
                <motion.span 
                  className="w-6 h-0.5 bg-indigoPurple dark:bg-cybertext block" 
                  animate={isOpen ? {
                    rotate: 45,
                    y: 6
                  } : {
                    rotate: 0,
                    y: 0
                  }} 
                  transition={{
                    duration: 0.2
                  }} 
                />
                <motion.span 
                  className="w-6 h-0.5 bg-indigoPurple dark:bg-cybertext block" 
                  animate={isOpen ? {
                    opacity: 0
                  } : {
                    opacity: 1
                  }} 
                  transition={{
                    duration: 0.2
                  }} 
                />
                <motion.span 
                  className="w-6 h-0.5 bg-indigoPurple dark:bg-cybertext block" 
                  animate={isOpen ? {
                    rotate: -45,
                    y: -6
                  } : {
                    rotate: 0,
                    y: 0
                  }} 
                  transition={{
                    duration: 0.2
                  }} 
                />
              </div>
            </Button>
          </div>
        </div>
      </header>
      
      <AnimatePresence>
        {isOpen && <motion.div className="fixed inset-0 bg-offwhite dark:bg-darkbg z-40 flex items-center justify-center" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.3
      }}>
            <nav className="flex flex-col items-center space-y-8 text-xl">
              <MobileNavLink to="/" label="Home" setIsOpen={setIsOpen} />
              <MobileNavLink to="/projects" label="Projects" setIsOpen={setIsOpen} />
              <MobileNavLink to="/about" label="About" setIsOpen={setIsOpen} />
              <a href="#" onClick={e => {
            handleContactClick(e, "mobile-nav");
            setIsOpen(false);
          }} className="text-indigoPurple dark:text-cybertext font-grotesk font-medium text-2xl">
                Contact
              </a>
            </nav>
          </motion.div>}
      </AnimatePresence>
      
      <main className="flex-grow pt-24">
        {mounted && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.5
      }}>
            {children}
          </motion.div>}
      </main>
      
      <footer className="py-8 px-6 border-t border-stone dark:border-cyberborder mt-16 bg-offwhite dark:bg-darkbg">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-indigoPurple/70 dark:text-cybertext mb-4 md:mb-0">
              © {new Date().getFullYear()} Bhaumik Kaji. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-indigoPurple/70 dark:text-cybertext hover:text-indigoPurple dark:hover:text-cybertext/80 transition-colors">
                Resume
              </a>
              <a href="https://www.linkedin.com/in/bhaumikkaji/" target="_blank" rel="noopener noreferrer" className="text-indigoPurple/70 dark:text-cybertext hover:text-indigoPurple dark:hover:text-cybertext/80 transition-colors">
                LinkedIn
              </a>
              <a href="#" onClick={e => handleContactClick(e, "footer")} className="text-indigoPurple/70 dark:text-cybertext hover:text-indigoPurple dark:hover:text-cybertext/80 transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      <CaptchaVerification isOpen={isCaptchaOpen} onOpenChange={setIsCaptchaOpen} onSuccess={handleCaptchaSuccess} />
    </div>;
};

const NavLink = ({
  to,
  label,
  currentPath
}: {
  to: string;
  label: string;
  currentPath: string;
}) => {
  const isActive = currentPath === to || to !== '/' && currentPath.startsWith(to);
  return <Link to={to} className={`relative font-medium text-sm transition-colors ${isActive ? 'text-indigoPurple dark:text-cybertext' : 'text-indigoPurple/70 dark:text-cybertext hover:text-indigoPurple dark:hover:text-cybertext/80'}`}>
      {label}
      {isActive && <motion.span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigoPurple dark:bg-cybertext" layoutId="navIndicator" transition={{
      type: 'spring',
      stiffness: 350,
      damping: 30
    }} />}
    </Link>;
};

const MobileNavLink = ({
  to,
  label,
  setIsOpen
}: {
  to: string;
  label: string;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return <Link to={to} className="text-indigoPurple dark:text-cybertext font-grotesk font-medium text-2xl" onClick={() => setIsOpen(false)}>
      {label}
    </Link>;
};

export default Layout;
