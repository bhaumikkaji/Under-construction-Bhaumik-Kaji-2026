
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Clock, Tag, Users, Lightbulb, Target, PenTool, Puzzle, Layers, CheckCircle, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { projectsData } from "@/data/projectsData";

export default function Project2() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Use the specific project data
  const project = projectsData[1]; // Second project

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-offwhite dark:bg-darkbg">
        <div className="animate-pulse space-y-8 w-full max-w-6xl px-6">
          <div className="h-12 bg-stone dark:bg-cyberborder/30 w-3/4 rounded"></div>
          <div className="h-96 bg-stone dark:bg-cyberborder/30 rounded-lg"></div>
          <div className="h-8 bg-stone dark:bg-cyberborder/30 w-1/3 rounded"></div>
          <div className="h-32 bg-stone dark:bg-cyberborder/30 rounded"></div>
        </div>
      </div>
    );
  }

  // Custom data for this specific project - would be unique content
  const projectDetails = {
    duration: "6 months",
    team: "3 designers, 4 developers, 1 product manager",
    tools: ["Figma", "Sketch", "Adobe Creative Suite", "InVision"],
    deliverables: ["Design System", "Component Library", "Documentation", "Implementation Guidelines"],
    role: "Design System Lead",
    challenges: "Creating a comprehensive design system that would ensure consistency across Microsoft's diverse product ecosystem while still allowing for product-specific customization.",
    process: [
      {
        title: "Audit",
        description: "Conducted a thorough audit of existing design patterns and components across all Microsoft products.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000"
      },
      {
        title: "Standardization",
        description: "Established core design principles and standardized common UI elements and patterns.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
      },
      {
        title: "Component Creation",
        description: "Designed a comprehensive library of reusable components with clear usage guidelines.",
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=2070"
      },
      {
        title: "Documentation",
        description: "Created extensive documentation including implementation guidelines, accessibility requirements, and best practices.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070"
      }
    ],
    userPersonas: [
      {
        name: "Alex, 34",
        role: "Product Designer",
        goals: "Wants to quickly implement consistent interfaces without reinventing the wheel",
        pain_points: "Struggles with maintaining consistency across multiple projects",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974"
      },
      {
        name: "Jordan, 28",
        role: "Frontend Developer",
        goals: "Needs clear implementation guidelines and reusable code patterns",
        pain_points: "Finds design specifications often unclear for technical implementation",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974"
      }
    ],
    designSystem: {
      components: [
        {
          name: "Buttons",
          description: "Standardized button hierarchy with primary, secondary, and tertiary variants",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
        },
        {
          name: "Forms",
          description: "Comprehensive form elements with built-in validation states",
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2070"
        },
        {
          name: "Navigation",
          description: "Consistent navigation patterns for desktop and mobile interfaces",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070"
        },
        {
          name: "Typography",
          description: "Type system with clear hierarchies and responsive scaling",
          image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070"
        }
      ]
    },
    wireframes: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
    ],
    designIterations: [
      {
        version: "1.0",
        description: "Initial component library focusing on core UI elements",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2070",
        feedback: "Good foundation but needed more comprehensive coverage of UI patterns"
      },
      {
        version: "2.0",
        description: "Expanded library with improved accessibility and responsive design",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
        feedback: "Much improved, but implementation guidelines needed enhancement"
      },
      {
        version: "3.0",
        description: "Final system with complete documentation and code examples",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070",
        feedback: "Successfully implemented across products with high adoption rate"
      }
    ],
    testingResults: {
      usabilityScore: 90,
      implementationRate: 85,
      designerSatisfaction: 92,
      keyFindings: [
        "85% reduction in design inconsistencies across products",
        "40% faster implementation time for new features",
        "92% of designers reported improved workflow efficiency"
      ]
    },
    contribution: {
      responsibilities: [
        "Led the design system strategy and implementation roadmap",
        "Established core design principles and component specifications",
        "Created comprehensive documentation and guidelines",
        "Collaborated with development teams on technical implementation",
        "Facilitated design system workshops and training sessions"
      ],
      learnings: [
        "Developed expertise in balancing standardization with flexibility",
        "Improved techniques for scaling design systems across diverse products",
        "Enhanced collaboration methods between design and development teams",
        "Learned effective strategies for driving design system adoption"
      ]
    },
    outcomes: {
      businessImpact: [
        "30% improvement in design-to-development handoff efficiency",
        "40% reduction in UI-related bugs and inconsistencies",
        "Significant improvement in cross-product UX consistency"
      ],
      awards: [
        "Design System Excellence Award, Internal Microsoft Recognition 2022",
        "Featured case study at Design Systems Conference"
      ]
    }
  };

  // Images for project gallery
  const additionalImages = [
    project.image,
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070"
  ];

  return (
    <div className="min-h-screen bg-offwhite dark:bg-darkbg">
      {/* Floating back button */}
      <div className="fixed bottom-8 left-8 z-10">
        <Link 
          to="/projects" 
          className="p-3 bg-white/80 dark:bg-darkbg/80 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-cyberborder/30 transition-colors"
          aria-label="Back to projects"
        >
          <ArrowLeft size={20} className="text-indigoPurple dark:text-cybertext" />
        </Link>
      </div>
      
      {/* Hero section with large image and overlay */}
      <section className="relative w-full h-[80vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="relative w-full h-full">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigoPurple/80 to-transparent dark:from-darkbg/90 dark:to-transparent" />
          </div>
        </motion.div>
        
        <div className="absolute inset-0 flex items-center z-10">
          <AnimatedSection className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="max-w-2xl"
            >
              <Badge variant="secondary" className="mb-4">
                {project.category}
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-grotesk text-white dark:text-cybertext mb-6">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 dark:text-cybertext/90 max-w-xl">
                {project.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="default" size="lg" className="rounded-full">
                  <a href="#overview">Explore Project</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 dark:bg-darkbg/30 dark:border-cybertext/30 dark:text-cybertext dark:hover:bg-cybertext/10">
                  <a href="#gallery">View Gallery</a>
                </Button>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Project overview */}
      <section id="overview" className="py-24 bg-white dark:bg-darkbg/95">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <AnimatedSection className="lg:col-span-2">
              <div className="border-l-4 border-indigoPurple dark:border-cybertext pl-6 mb-8">
                <h2 className="text-3xl md:text-4xl font-grotesk text-indigoPurple dark:text-cybertext">Project Overview</h2>
              </div>
              <div className="prose prose-lg prose-indigoPurple dark:prose-invert max-w-none">
                <p className="text-lg text-indigoPurple/90 dark:text-cybertext/90 leading-relaxed">
                  As the {projectDetails.role}, I was responsible for developing a unified design language
                  that ensured visual consistency while being adaptable enough for Microsoft's diverse product ecosystem.
                </p>
                <p className="text-indigoPurple/80 dark:text-cybertext/80">
                  {projectDetails.challenges}
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="bg-stone/30 dark:bg-cyberborder/10 rounded-xl p-8">
                <h3 className="text-xl font-grotesk text-indigoPurple dark:text-cybertext mb-6 pb-4 border-b border-stone dark:border-cyberborder/30">Project Details</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-stone dark:bg-cyberborder/30 flex items-center justify-center">
                      <Clock className="text-indigoPurple dark:text-cybertext" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm text-indigoPurple/60 dark:text-cybertext/60 uppercase tracking-wider">Duration</h4>
                      <p className="text-indigoPurple dark:text-cybertext font-medium">{projectDetails.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-stone dark:bg-cyberborder/30 flex items-center justify-center">
                      <Users className="text-indigoPurple dark:text-cybertext" size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm text-indigoPurple/60 dark:text-cybertext/60 uppercase tracking-wider">Team</h4>
                      <p className="text-indigoPurple dark:text-cybertext font-medium">{projectDetails.team}</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-stone dark:bg-cyberborder/30 flex items-center justify-center">
                        <Tag className="text-indigoPurple dark:text-cybertext" size={20} />
                      </div>
                      <h4 className="text-sm text-indigoPurple/60 dark:text-cybertext/60 uppercase tracking-wider">Tools</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-14">
                      {projectDetails.tools.map((tool, index) => (
                        <Badge key={index} variant="secondary">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-stone dark:bg-cyberborder/30 flex items-center justify-center">
                        <ExternalLink className="text-indigoPurple dark:text-cybertext" size={20} />
                      </div>
                      <h4 className="text-sm text-indigoPurple/60 dark:text-cybertext/60 uppercase tracking-wider">Deliverables</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-14">
                      {projectDetails.deliverables.map((deliverable, index) => (
                        <Badge key={index} variant="secondary">
                          {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Challenge section */}
      <section className="py-24 bg-stone/20 dark:bg-darkbg">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-full bg-indigoPurple dark:bg-cybertext/20 flex items-center justify-center">
                <Target className="text-white dark:text-cybertext" size={28} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-grotesk text-indigoPurple dark:text-cybertext">The Challenge</h2>
                <p className="text-lg text-indigoPurple/80 dark:text-cybertext/80 mt-2 max-w-2xl">
                  {projectDetails.challenges}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-darkbg/50 shadow-lg dark:shadow-none dark:border dark:border-cyberborder/20 rounded-xl overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=2070" 
                    alt="Challenge visualization"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-indigoPurple dark:text-cybertext mb-3">Product Diversity</h3>
                  <p className="text-indigoPurple/80 dark:text-cybertext/80">
                    Microsoft's ecosystem includes dozens of products with different user bases and requirements.
                    Our design system needed to accommodate this diversity while maintaining brand coherence.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-darkbg/50 shadow-lg dark:shadow-none dark:border dark:border-cyberborder/20 rounded-xl overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2070" 
                    alt="Challenge visualization"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-indigoPurple dark:text-cybertext mb-3">Implementation Consistency</h3>
                  <p className="text-indigoPurple/80 dark:text-cybertext/80">
                    With teams distributed globally, ensuring consistent implementation of the design system
                    required robust documentation and effective communication channels.
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Design Process */}
      <section className="py-24 bg-white dark:bg-darkbg/95">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-16">
              <div className="w-16 h-16 rounded-full bg-indigoPurple dark:bg-cybertext/20 flex items-center justify-center">
                <PenTool className="text-white dark:text-cybertext" size={28} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-grotesk text-indigoPurple dark:text-cybertext">Design Process</h2>
                <p className="text-lg text-indigoPurple/80 dark:text-cybertext/80 mt-2 max-w-2xl">
                  A systematic approach to creating a cohesive design language
                </p>
              </div>
            </div>
            
            <div className="space-y-24">
              {projectDetails.process.map((step, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div className="relative">
                      <span className="absolute -top-10 -left-10 text-8xl font-bold text-indigoPurple/10 dark:text-cybertext/10 select-none">
                        {index + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-grotesk text-indigoPurple dark:text-cybertext mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-indigoPurple/80 dark:text-cybertext/80 mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {[1, 2, 3].map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <div className="mt-1 w-5 h-5 rounded-full bg-stone dark:bg-cybertext/20 flex items-center justify-center">
                              <CheckCircle className="text-indigoPurple dark:text-cybertext" size={12} />
                            </div>
                            <span className="text-indigoPurple/80 dark:text-cybertext/80">
                              {step.title === "Audit" && item === 1 && "Inventory of all interface elements"}
                              {step.title === "Audit" && item === 2 && "Usability evaluation of existing patterns"}
                              {step.title === "Audit" && item === 3 && "User feedback analysis"}
                              
                              {step.title === "Standardization" && item === 1 && "Core design principles definition"}
                              {step.title === "Standardization" && item === 2 && "Common pattern identification"}
                              {step.title === "Standardization" && item === 3 && "Visual language establishment"}
                              
                              {step.title === "Component Creation" && item === 1 && "Atomic design methodology"}
                              {step.title === "Component Creation" && item === 2 && "Interactive prototype development"}
                              {step.title === "Component Creation" && item === 3 && "Visual and functional specifications"}
                              
                              {step.title === "Documentation" && item === 1 && "Comprehensive implementation guides"}
                              {step.title === "Documentation" && item === 2 && "Accessibility requirements"}
                              {step.title === "Documentation" && item === 3 && "Interactive component library"}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div className="rounded-xl overflow-hidden shadow-xl dark:shadow-none dark:border dark:border-cyberborder/20 aspect-[4/3]">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Project Gallery */}
      <section id="gallery" className="py-24 bg-stone/20 dark:bg-darkbg">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-full bg-indigoPurple dark:bg-cybertext/20 flex items-center justify-center">
                <Layers className="text-white dark:text-cybertext" size={28} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-grotesk text-indigoPurple dark:text-cybertext">Design System Components</h2>
                <p className="text-lg text-indigoPurple/80 dark:text-cybertext/80 mt-2 max-w-2xl">
                  Key building blocks of our unified design language
                </p>
              </div>
            </div>
            
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {projectDetails.designSystem.components.map((component, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="border-0 overflow-hidden shadow-lg dark:shadow-none dark:border dark:border-cyberborder/20 bg-white dark:bg-darkbg/50">
                        <CardContent className="p-0">
                          <AspectRatio ratio={16/9}>
                            <img 
                              src={component.image} 
                              alt={component.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                          </AspectRatio>
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-indigoPurple dark:text-cybertext mb-2">{component.name}</h3>
                            <p className="text-indigoPurple/80 dark:text-cybertext/80">{component.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="position-override relative right-auto left-auto translate-y-0 mr-2 dark:bg-darkbg dark:border-cybertext dark:text-cybertext" />
                <CarouselNext className="position-override relative right-auto left-auto translate-y-0 dark:bg-darkbg dark:border-cybertext dark:text-cybertext" />
              </div>
            </Carousel>
          </AnimatedSection>
        </div>
      </section>
      
      {/* User Research */}
      <section className="py-24 bg-white dark:bg-darkbg/95">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-full bg-indigoPurple dark:bg-cybertext/20 flex items-center justify-center">
                <Users className="text-white dark:text-cybertext" size={28} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-grotesk text-indigoPurple dark:text-cybertext">User Research</h2>
                <p className="text-lg text-indigoPurple/80 dark:text-cybertext/80 mt-2 max-w-2xl">
                  Understanding the needs of designers and developers who would use the system
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectDetails.userPersonas.map((persona, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-darkbg/50 shadow-lg dark:shadow-none dark:border dark:border-cyberborder/20 rounded-xl overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="md:w-1/3 h-auto">
                    <img 
                      src={persona.image} 
                      alt={persona.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-stone dark:bg-cybertext/20 flex items-center justify-center">
                        <Users className="text-indigoPurple dark:text-cybertext" size={18} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-indigoPurple dark:text-cybertext">{persona.name}</h3>
                        <p className="text-indigoPurple/60 dark:text-cybertext/60">{persona.role}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-stone/30 dark:bg-cyberborder/10 rounded-lg p-4">
                        <h4 className="font-medium text-indigoPurple dark:text-cybertext mb-1">Goals:</h4>
                        <p className="text-indigoPurple/80 dark:text-cybertext/80">{persona.goals}</p>
                      </div>
                      
                      <div className="bg-stone/30 dark:bg-cyberborder/10 rounded-lg p-4">
                        <h4 className="font-medium text-indigoPurple dark:text-cybertext mb-1">Pain Points:</h4>
                        <p className="text-indigoPurple/80 dark:text-cybertext/80">{persona.pain_points}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Results & Impact */}
      <section className="py-24 bg-stone/20 dark:bg-darkbg">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-full bg-indigoPurple dark:bg-cybertext/20 flex items-center justify-center">
                <CheckCircle className="text-white dark:text-cybertext" size={28} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-grotesk text-indigoPurple dark:text-cybertext">Results & Impact</h2>
                <p className="text-lg text-indigoPurple/80 dark:text-cybertext/80 mt-2 max-w-2xl">
                  Measurable improvements in design consistency and efficiency
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-1 lg:col-span-2 bg-white dark:bg-darkbg/50 shadow-lg dark:shadow-none dark:border dark:border-cyberborder/20 rounded-xl p-8">
                <h3 className="text-2xl font-grotesk text-indigoPurple dark:text-cybertext mb-6">Key Findings</h3>
                <div className="space-y-6">
                  {projectDetails.testingResults.keyFindings.map((finding, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-indigoPurple dark:bg-cybertext/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-white dark:text-cybertext font-bold">{index + 1}</span>
                      </div>
                      <div className="bg-stone/30 dark:bg-cyberborder/10 rounded-lg p-5 flex-1">
                        <p className="text-lg font-medium text-indigoPurple dark:text-cybertext">{finding}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="col-span-1 bg-white dark:bg-darkbg/50 shadow-lg dark:shadow-none dark:border dark:border-cyberborder/20 rounded-xl p-8">
                <h3 className="text-2xl font-grotesk text-indigoPurple dark:text-cybertext mb-6">Success Metrics</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-indigoPurple dark:text-cybertext">Implementation Rate</span>
                      <span className="text-indigoPurple/80 dark:text-cybertext/80 font-bold">{projectDetails.testingResults.implementationRate}%</span>
                    </div>
                    <div className="h-3 bg-stone/50 dark:bg-cyberborder/30 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${projectDetails.testingResults.implementationRate}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="h-full bg-indigoPurple dark:bg-cybertext rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-indigoPurple dark:text-cybertext">Designer Satisfaction</span>
                      <span className="text-indigoPurple/80 dark:text-cybertext/80 font-bold">{projectDetails.testingResults.designerSatisfaction}%</span>
                    </div>
                    <div className="h-3 bg-stone/50 dark:bg-cyberborder/30 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${projectDetails.testingResults.designerSatisfaction}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-full bg-indigoPurple dark:bg-cybertext rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-indigoPurple dark:text-cybertext">Usability Score</span>
                      <span className="text-indigoPurple/80 dark:text-cybertext/80 font-bold">{projectDetails.testingResults.usabilityScore}%</span>
                    </div>
                    <div className="h-3 bg-stone/50 dark:bg-cyberborder/30 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${projectDetails.testingResults.usabilityScore}%` }}
                        transition={{ duration: 1, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="h-full bg-indigoPurple dark:bg-cybertext rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* My Contribution */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-indigoPurple dark:bg-transparent dark:border-y dark:border-cyberborder/30 z-0"></div>
        <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-cyberborder/20 dark:to-transparent z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-full bg-white/20 dark:bg-cybertext/20 flex items-center justify-center">
                <Puzzle className="text-white dark:text-cybertext" size={28} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-grotesk text-white dark:text-cybertext">My Contribution</h2>
                <p className="text-lg text-white/80 dark:text-cybertext/80 mt-2 max-w-2xl">
                  Key responsibilities and learnings from this project
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/10 dark:bg-darkbg/50 backdrop-blur-sm rounded-xl p-8 border border-white/20 dark:border-cyberborder/20">
                <h3 className="text-2xl font-grotesk text-white dark:text-cybertext mb-6">Key Responsibilities</h3>
                <div className="space-y-4">
                  {projectDetails.contribution.responsibilities.map((responsibility, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/20 dark:bg-cybertext/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white dark:text-cybertext font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-white/90 dark:text-cybertext/90">{responsibility}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 dark:bg-darkbg/50 backdrop-blur-sm rounded-xl p-8 border border-white/20 dark:border-cyberborder/20">
                <h3 className="text-2xl font-grotesk text-white dark:text-cybertext mb-6">Learnings & Growth</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectDetails.contribution.learnings.map((learning, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      viewport={{ once: true }}
                      className="bg-white/10 dark:bg-cyberborder/10 rounded-lg p-5"
                    >
                      <p className="text-white/90 dark:text-cybertext/90">{learning}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Outcomes & Recognition */}
      <section className="py-24 bg-white dark:bg-darkbg/95">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-full bg-indigoPurple dark:bg-cybertext/20 flex items-center justify-center">
                <Award className="text-white dark:text-cybertext" size={28} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-grotesk text-indigoPurple dark:text-cybertext">Outcomes & Recognition</h2>
                <p className="text-lg text-indigoPurple/80 dark:text-cybertext/80 mt-2 max-w-2xl">
                  Business impact and industry recognition
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-grotesk text-indigoPurple dark:text-cybertext mb-6">Business Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {projectDetails.outcomes.businessImpact.map((impact, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-stone/30 dark:bg-cyberborder/10 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]"
                    >
                      <div className="w-12 h-12 rounded-full bg-indigoPurple dark:bg-cybertext/20 flex items-center justify-center mb-4">
                        <span className="text-white dark:text-cybertext font-bold">{index + 1}</span>
                      </div>
                      <p className="text-lg font-medium text-indigoPurple dark:text-cybertext">{impact}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-grotesk text-indigoPurple dark:text-cybertext mb-6">Recognition</h3>
                <div className="space-y-6">
                  {projectDetails.outcomes.awards.map((award, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 bg-stone/30 dark:bg-cyberborder/10 rounded-xl p-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-indigoPurple dark:bg-cybertext/20 flex items-center justify-center shrink-0">
                        <Award className="text-white dark:text-cybertext" size={30} />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-indigoPurple dark:text-cybertext">{award}</h4>
                        <p className="text-indigoPurple/70 dark:text-cybertext/70 mt-1">
                          {index === 0 ? "Recognition for excellence in design systems implementation" : "Featured for innovative approach to cross-product consistency"}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Technical details - collapsible section */}
      <section className="py-12 bg-stone/20 dark:bg-darkbg">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <Collapsible 
              open={isOpen} 
              onOpenChange={setIsOpen}
              className="w-full"
            >
              <CollapsibleTrigger asChild>
                <button className="flex items-center justify-between w-full p-6 text-left bg-white dark:bg-darkbg/50 shadow-md dark:shadow-none dark:border dark:border-cyberborder/20 hover:bg-stone/10 dark:hover:bg-cyberborder/10 transition-colors rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-stone dark:bg-cyberborder/30 flex items-center justify-center">
                      <Layers className="text-indigoPurple dark:text-cybertext" size={24} />
                    </div>
                    <h2 className="text-2xl font-grotesk text-indigoPurple dark:text-cybertext">Technical Specifications</h2>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-indigoPurple/20 dark:border-cybertext/20">
                    <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''} text-indigoPurple dark:text-cybertext`}>↓</span>
                  </div>
                </button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="overflow-hidden transition-all duration-300 ease-in-out">
                <div className="p-6 bg-white dark:bg-darkbg/50 shadow-md dark:shadow-none dark:border-x dark:border-b dark:border-cyberborder/20 rounded-b-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-grotesk text-indigoPurple dark:text-cybertext mb-4">Design System Structure</h3>
                      <p className="text-indigoPurple/80 dark:text-cybertext/80 mb-4">
                        The design system was organized into the following key areas:
                      </p>
                      <ul className="space-y-3">
                        {["Core principles and guidelines", "Visual language (typography, color, iconography)", "Component library with 40+ fully documented components", "Pattern library for common interaction flows"].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-stone dark:bg-cyberborder/30 flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle className="text-indigoPurple dark:text-cybertext" size={14} />
                            </div>
                            <span className="text-indigoPurple/80 dark:text-cybertext/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-grotesk text-indigoPurple dark:text-cybertext mb-4">Implementation Approach</h3>
                      <p className="text-indigoPurple/80 dark:text-cybertext/80 mb-4">
                        Key technical considerations in our implementation:
                      </p>
                      <ul className="space-y-3">
                        {["Design tokens for easy theming and customization", "Component API documentation with code examples", "Accessibility compliance built into component specifications", "Version control and release management strategy"].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-stone dark:bg-cyberborder/30 flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle className="text-indigoPurple dark:text-cybertext" size={14} />
                            </div>
                            <span className="text-indigoPurple/80 dark:text-cybertext/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Next project */}
      <section className="py-16 bg-white dark:bg-darkbg/95">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">Continue exploring</Badge>
              <h2 className="text-2xl md:text-3xl font-grotesk text-indigoPurple dark:text-cybertext mb-6">Ready to see more work?</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link to={`/project/3`}>
                    Next Project
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                  <Link to="/projects">
                    All Projects
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
