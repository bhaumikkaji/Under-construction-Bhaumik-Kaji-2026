
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Clock, Tag, Users, Lightbulb, Target, PenTool, Puzzle, Layers, CheckCircle, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="min-h-screen bg-offwhite dark:bg-darkbg pb-16">
      {/* Floating back button */}
      <div className="fixed bottom-8 left-8 z-10">
        <Link 
          to="/projects" 
          className="p-3 bg-white/80 dark:bg-darkbg/80 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-cyberborder/30 transition-colors"
          aria-label="Back to projects"
        >
          <ArrowLeft size={20} className="text-navy dark:text-cybertext" />
        </Link>
      </div>
      
      {/* Hero section with large image */}
      <section className="w-full h-[70vh] relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.05, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="w-full h-full"
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <AnimatedSection className="container mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-sm md:text-base uppercase tracking-wider text-navy/70 dark:text-cybertext/80 font-medium mb-2 block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-grotesk text-navy dark:text-cybertext">
                {project.title}
              </h1>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Project details */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <AnimatedSection className="lg:col-span-2">
            <div className="prose prose-navy dark:prose-invert max-w-none">
              <p className="text-lg md:text-xl text-navy/90 dark:text-cybertext/90 leading-relaxed">
                {project.description}
              </p>
              <p className="text-navy/80 dark:text-cybertext/80">
                As the {projectDetails.role}, I was responsible for developing a unified design language
                that ensured visual consistency while being adaptable enough for Microsoft's diverse product ecosystem.
              </p>
              <p className="text-navy/80 dark:text-cybertext/80">
                {projectDetails.challenges}
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="space-y-6">
            <div className="flex items-center space-x-3">
              <Clock className="text-navy/60 dark:text-cybertext/60" size={18} />
              <div>
                <h3 className="text-sm text-navy/60 dark:text-cybertext/60 uppercase tracking-wider">Duration</h3>
                <p className="text-navy dark:text-cybertext font-medium">{projectDetails.duration}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Users className="text-navy/60 dark:text-cybertext/60" size={18} />
              <div>
                <h3 className="text-sm text-navy/60 dark:text-cybertext/60 uppercase tracking-wider">Team</h3>
                <p className="text-navy dark:text-cybertext font-medium">{projectDetails.team}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Tag className="text-navy/60 dark:text-cybertext/60 mt-1" size={18} />
              <div>
                <h3 className="text-sm text-navy/60 dark:text-cybertext/60 uppercase tracking-wider">Tools</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {projectDetails.tools.map((tool, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-stone dark:bg-cyberborder/30 rounded-full text-sm text-navy dark:text-cybertext"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <ExternalLink className="text-navy/60 dark:text-cybertext/60 mt-1" size={18} />
              <div>
                <h3 className="text-sm text-navy/60 dark:text-cybertext/60 uppercase tracking-wider">Deliverables</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {projectDetails.deliverables.map((deliverable, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-stone dark:bg-cyberborder/30 rounded-full text-sm text-navy dark:text-cybertext"
                    >
                      {deliverable}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Project brief & challenge */}
      <section className="container mx-auto px-6 py-12 bg-stone/30 dark:bg-cyberborder/10 rounded-2xl my-12">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-navy dark:text-cybertext" size={28} />
              <h2 className="text-2xl md:text-3xl font-grotesk text-navy dark:text-cybertext">Project Brief & Challenge</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 dark:bg-darkbg/80 p-6 rounded-xl">
                <h3 className="text-xl font-grotesk text-navy dark:text-cybertext mb-3">The Brief</h3>
                <p className="text-navy/80 dark:text-cybertext/80">
                  Develop a comprehensive design system that would unify Microsoft's visual language across products
                  while providing flexibility for product-specific customizations and maintaining a cohesive brand identity.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-darkbg/80 p-6 rounded-xl">
                <h3 className="text-xl font-grotesk text-navy dark:text-cybertext mb-3">The Challenge</h3>
                <p className="text-navy/80 dark:text-cybertext/80">
                  {projectDetails.challenges}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* Design System Components */}
      <section className="container mx-auto px-6 py-12">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-grotesk text-navy dark:text-cybertext mb-8">Key Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectDetails.designSystem.components.map((component, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src={component.image} 
                    alt={component.name}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-grotesk text-navy dark:text-cybertext mb-2">
                  {component.name}
                </h3>
                <p className="text-navy/70 dark:text-cybertext/80">
                  {component.description}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>
      
      {/* Project gallery */}
      <section className="container mx-auto px-6 py-12">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-grotesk text-navy dark:text-cybertext mb-8">Project Gallery</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {additionalImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-0 overflow-hidden bg-transparent shadow-none">
                      <CardContent className="p-0">
                        <AspectRatio ratio={4/3}>
                          <img 
                            src={image} 
                            alt={`Project visual ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg hover-effect-image"
                          />
                        </AspectRatio>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="position-override relative right-auto left-auto translate-y-0 dark:bg-darkbg dark:border-cybertext dark:text-cybertext" />
              <CarouselNext className="position-override relative right-auto left-auto translate-y-0 dark:bg-darkbg dark:border-cybertext dark:text-cybertext" />
            </div>
          </Carousel>
        </AnimatedSection>
      </section>
      
      {/* User Research */}
      <section className="container mx-auto px-6 py-12">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Users className="text-navy dark:text-cybertext" size={28} />
              <h2 className="text-2xl md:text-3xl font-grotesk text-navy dark:text-cybertext">User Research</h2>
            </div>
            
            <p className="text-navy/80 dark:text-cybertext/80 mb-8">
              We conducted research with designers and developers to ensure the design system would meet their needs
              and streamline their workflows.
            </p>
            
            <h3 className="text-xl font-grotesk text-navy dark:text-cybertext mb-6">User Personas</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {projectDetails.userPersonas.map((persona, index) => (
                <div key={index} className="bg-white dark:bg-darkbg border border-stone/50 dark:border-cyberborder/30 rounded-xl overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={persona.image} 
                      alt={persona.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-navy dark:text-cybertext">{persona.name}</h4>
                    <p className="text-navy/60 dark:text-cybertext/60 mb-3">{persona.role}</p>
                    
                    <div className="mb-3">
                      <span className="text-sm font-medium text-navy dark:text-cybertext">Goals:</span>
                      <p className="text-navy/80 dark:text-cybertext/80">{persona.goals}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-navy dark:text-cybertext">Pain Points:</span>
                      <p className="text-navy/80 dark:text-cybertext/80">{persona.pain_points}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* Design Process */}
      <section className="container mx-auto px-6 py-12">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-grotesk text-navy dark:text-cybertext mb-8">Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectDetails.process.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-grotesk text-navy dark:text-cybertext mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-navy/70 dark:text-cybertext/80">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>
      
      {/* Iterations & Results */}
      <section className="container mx-auto px-6 py-12 bg-stone/30 dark:bg-cyberborder/10 rounded-2xl my-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <PenTool className="text-navy dark:text-cybertext" size={28} />
            <h2 className="text-2xl md:text-3xl font-grotesk text-navy dark:text-cybertext">Design System Evolution</h2>
          </div>
          
          <div>
            <h3 className="text-xl font-grotesk text-navy dark:text-cybertext mb-6">Design System Iterations</h3>
            <div className="space-y-12">
              {projectDetails.designIterations.map((iteration, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h4 className="text-lg font-medium text-navy dark:text-cybertext mb-2">
                      Version {iteration.version}
                    </h4>
                    <p className="text-navy/80 dark:text-cybertext/80 mb-4">
                      {iteration.description}
                    </p>
                    <div className="bg-white/50 dark:bg-darkbg/50 p-4 rounded-lg">
                      <span className="text-sm font-medium text-navy dark:text-cybertext block mb-2">Feedback:</span>
                      <p className="text-navy/70 dark:text-cybertext/70 italic">
                        "{iteration.feedback}"
                      </p>
                    </div>
                  </div>
                  <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={iteration.image} 
                        alt={`Design iteration ${iteration.version}`}
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* Testing & Results */}
      <section className="container mx-auto px-6 py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="text-navy dark:text-cybertext" size={28} />
            <h2 className="text-2xl md:text-3xl font-grotesk text-navy dark:text-cybertext">Results & Impact</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-xl font-grotesk text-navy dark:text-cybertext mb-4">Key Results</h3>
              <ul className="space-y-4">
                {projectDetails.testingResults.keyFindings.map((finding, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="min-w-6 h-6 rounded-full bg-stone dark:bg-cybertext/20 flex items-center justify-center text-navy dark:text-cybertext font-bold text-sm mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-navy/80 dark:text-cybertext/80">{finding}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-1">
              <h3 className="text-xl font-grotesk text-navy dark:text-cybertext mb-4">Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-navy/70 dark:text-cybertext/70">Implementation Rate</span>
                    <span className="text-navy dark:text-cybertext font-medium">{projectDetails.testingResults.implementationRate}%</span>
                  </div>
                  <div className="h-2 bg-stone/50 dark:bg-cyberborder/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-navy dark:bg-cybertext rounded-full" 
                      style={{ width: `${projectDetails.testingResults.implementationRate}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-navy/70 dark:text-cybertext/70">Designer Satisfaction</span>
                    <span className="text-navy dark:text-cybertext font-medium">{projectDetails.testingResults.designerSatisfaction}%</span>
                  </div>
                  <div className="h-2 bg-stone/50 dark:bg-cyberborder/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-navy dark:bg-cybertext rounded-full" 
                      style={{ width: `${projectDetails.testingResults.designerSatisfaction}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-navy/70 dark:text-cybertext/70">Usability Score</span>
                    <span className="text-navy dark:text-cybertext font-medium">{projectDetails.testingResults.usabilityScore}%</span>
                  </div>
                  <div className="h-2 bg-stone/50 dark:bg-cyberborder/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-navy dark:bg-cybertext rounded-full" 
                      style={{ width: `${projectDetails.testingResults.usabilityScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* My Contribution */}
      <section className="container mx-auto px-6 py-12 bg-navy dark:bg-cyberborder/40 rounded-2xl my-12 text-white">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Puzzle className="text-white" size={28} />
            <h2 className="text-2xl md:text-3xl font-grotesk">My Contribution</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-grotesk mb-4">Key Responsibilities</h3>
              <ul className="space-y-3">
                {projectDetails.contribution.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="min-w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-white/90">{responsibility}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-grotesk mb-4">Learnings & Growth</h3>
              <div className="space-y-4">
                {projectDetails.contribution.learnings.map((learning, index) => (
                  <div key={index} className="bg-white/10 p-4 rounded-lg">
                    <p className="text-white/90">{learning}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* Business Outcomes */}
      <section className="container mx-auto px-6 py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-navy dark:text-cybertext" size={28} />
            <h2 className="text-2xl md:text-3xl font-grotesk text-navy dark:text-cybertext">Outcomes & Impact</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-grotesk text-navy dark:text-cybertext mb-4">Business Impact</h3>
              <div className="space-y-4">
                {projectDetails.outcomes.businessImpact.map((impact, index) => (
                  <div key={index} className="bg-stone/30 dark:bg-cyberborder/20 p-6 rounded-lg">
                    <p className="text-xl font-medium text-navy dark:text-cybertext text-center">{impact}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-grotesk text-navy dark:text-cybertext mb-4">Recognition</h3>
              <div className="space-y-4">
                {projectDetails.outcomes.awards.map((award, index) => (
                  <div key={index} className="flex items-center gap-4 bg-stone/30 dark:bg-cyberborder/20 p-6 rounded-lg">
                    <Award className="text-navy/60 dark:text-cybertext/60" size={24} />
                    <p className="font-medium text-navy dark:text-cybertext">{award}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* Technical details - collapsible section */}
      <section className="container mx-auto px-6 py-12">
        <AnimatedSection>
          <Collapsible 
            open={isOpen} 
            onOpenChange={setIsOpen}
            className="w-full border border-stone/50 dark:border-cyberborder/30 rounded-xl overflow-hidden"
          >
            <CollapsibleTrigger asChild>
              <button className="flex items-center justify-between w-full p-6 text-left bg-stone/20 dark:bg-cyberborder/10 hover:bg-stone/30 dark:hover:bg-cyberborder/20 transition-colors">
                <div className="flex items-center gap-3">
                  <Layers className="text-navy dark:text-cybertext" size={24} />
                  <h2 className="text-2xl font-grotesk text-navy dark:text-cybertext">Technical Specifications</h2>
                </div>
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-navy/20 dark:border-cybertext/20">
                  <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''} text-navy dark:text-cybertext`}>↓</span>
                </div>
              </button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="p-6 bg-white dark:bg-darkbg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-grotesk text-navy dark:text-cybertext mb-4">Design System Structure</h3>
                  <p className="text-navy/80 dark:text-cybertext/80 mb-4">
                    The design system was organized into the following key areas:
                  </p>
                  <ul className="space-y-2 text-navy/80 dark:text-cybertext/80">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-navy dark:bg-cybertext"></span>
                      Core principles and guidelines
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-navy dark:bg-cybertext"></span>
                      Visual language (typography, color, iconography)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-navy dark:bg-cybertext"></span>
                      Component library with 40+ fully documented components
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-navy dark:bg-cybertext"></span>
                      Pattern library for common interaction flows
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-grotesk text-navy dark:text-cybertext mb-4">Implementation Approach</h3>
                  <p className="text-navy/80 dark:text-cybertext/80 mb-4">
                    Key technical considerations in our implementation:
                  </p>
                  <ul className="space-y-2 text-navy/80 dark:text-cybertext/80">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-navy dark:bg-cybertext"></span>
                      Design tokens for easy theming and customization
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-navy dark:bg-cybertext"></span>
                      Component API documentation with code examples
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-navy dark:bg-cybertext"></span>
                      Accessibility compliance built into component specifications
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-navy dark:bg-cybertext"></span>
                      Version control and release management strategy
                    </li>
                  </ul>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </AnimatedSection>
      </section>
      
      {/* Next project */}
      <section className="container mx-auto px-6 py-12">
        <AnimatedSection>
          <div className="text-center">
            <span className="text-sm text-navy/60 dark:text-cybertext/60 uppercase tracking-wider">Continue exploring</span>
            <h2 className="text-2xl md:text-3xl font-grotesk text-navy dark:text-cybertext mb-6">Next Project</h2>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to={`/project/3`}>
                View Next Project
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
