
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

export default function Project1() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Use the specific project data
  const project = projectsData[0]; // First project

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

  // Custom data for this specific project - normally this would be unique content
  const projectDetails = {
    duration: "4 months",
    team: "6 designers, 3 developers, 2 product managers",
    tools: ["Figma", "Adobe Illustrator", "Protopie", "Principle"],
    deliverables: ["UI Design", "User Flows", "Design System", "Interactive Prototype"],
    role: "Lead Designer",
    challenges: "The primary challenge was creating an AI assistant that could understand complex queries while maintaining a user-friendly interface that didn't overwhelm non-technical users.",
    process: [
      {
        title: "Research",
        description: "Conducted extensive user research to understand how people interact with AI assistants and their pain points with existing solutions.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
      },
      {
        title: "Ideation",
        description: "Led workshops with cross-functional teams to brainstorm innovative approaches to AI interaction patterns.",
        image: "https://images.unsplash.com/photo-1573496528013-454181200d97?auto=format&fit=crop&q=80&w=2069"
      },
      {
        title: "Prototyping",
        description: "Created high-fidelity prototypes that simulated AI responses and tested different UI layouts for optimal information presentation.",
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=2070"
      },
      {
        title: "Testing & Iteration",
        description: "Conducted usability testing with diverse user groups to ensure the design was intuitive across different technical proficiency levels.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070"
      }
    ],
    userPersonas: [
      {
        name: "Sarah, 42",
        role: "Marketing Director",
        goals: "Wants to use AI to streamline content creation and data analysis while maintaining brand voice",
        pain_points: "Finds existing AI tools too technical and difficult to customize for brand guidelines",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974"
      },
      {
        name: "David, 29",
        role: "Software Developer",
        goals: "Needs an AI assistant that can help with coding tasks and explain complex technical concepts",
        pain_points: "Current AI tools don't provide enough context or explanation with their suggestions",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974"
      }
    ],
    userJourney: [
      {
        stage: "Discovery",
        description: "User realizes they need AI assistance for complex tasks",
        touchpoints: ["Online reviews", "Professional recommendations", "Product comparison sites"],
        emotions: "Curious but skeptical",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
      },
      {
        stage: "Initial Use",
        description: "User begins interacting with the AI assistant",
        touchpoints: ["Onboarding experience", "First query", "Help documentation"],
        emotions: "Tentative and exploring",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2070"
      },
      {
        stage: "Learning",
        description: "User learns how to phrase queries and use advanced features",
        touchpoints: ["Tooltips", "Suggested queries", "Example use cases"],
        emotions: "Growing confidence",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070"
      },
      {
        stage: "Integration",
        description: "User incorporates the AI into daily workflow",
        touchpoints: ["Custom settings", "Workflow integration", "Saved queries"],
        emotions: "Productivity and satisfaction",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070"
      },
      {
        stage: "Advocacy",
        description: "User recommends the AI to colleagues and provides feedback",
        touchpoints: ["Feedback forms", "Social sharing", "Feature requests"],
        emotions: "Loyalty and investment",
        image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&q=80&w=2070"
      }
    ],
    wireframes: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
    ],
    designIterations: [
      {
        version: "1.0",
        description: "Initial concept focused on text-based interaction with minimal visual elements",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2070",
        feedback: "Users wanted more visual cues and clearer indications of AI capabilities"
      },
      {
        version: "2.0",
        description: "Added visual components including suggestion cards and information hierarchy",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
        feedback: "Improved usability but users reported difficulties with complex multi-step tasks"
      },
      {
        version: "3.0",
        description: "Implemented guided workflows and contextual help with interactive elements",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070",
        feedback: "Significant improvement in task completion rates and user satisfaction"
      }
    ],
    testingResults: {
      usabilityScore: 95,
      taskCompletionRate: 92,
      satisfactionRate: 94,
      keyFindings: [
        "Users completed complex tasks 40% faster than with previous AI tools",
        "93% of users rated the interface as 'highly intuitive'",
        "Non-technical users showed similar proficiency levels to technical users after brief training"
      ]
    },
    contribution: {
      responsibilities: [
        "Led the UX research phase, including competitive analysis and user interviews",
        "Developed the core interaction model for AI-human communication",
        "Created and implemented a visual design system specifically for AI interfaces",
        "Conducted multiple rounds of usability testing and iteration",
        "Collaborated with engineering to ensure technical feasibility of design solutions"
      ],
      learnings: [
        "Refined techniques for designing interfaces that communicate AI capabilities clearly",
        "Developed new patterns for progressive disclosure in complex AI interactions",
        "Improved methods for testing AI interfaces with realistic simulations",
        "Learned to effectively bridge the gap between technical capabilities and user needs"
      ]
    },
    outcomes: {
      businessImpact: [
        "35% increase in user adoption compared to previous AI assistant",
        "28% reduction in support tickets related to AI interaction confusion",
        "Featured as a key selling point in Microsoft's product marketing"
      ],
      awards: [
        "Best AI User Experience Design, Tech Design Awards 2023",
        "Featured case study at UX Design Summit"
      ]
    }
  };

  // Generate additional images for the project gallery
  const additionalImages = [
    project.image,
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
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
                As the {projectDetails.role} on this project, I led the design team in creating a revolutionary AI assistant interface
                that helps users accomplish more with the power of AI across Microsoft products.
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
                  Design a next-generation AI assistant that would seamlessly integrate across Microsoft's product ecosystem,
                  making AI functionality accessible to users of all technical abilities while maintaining a consistent, intuitive experience.
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
      
      {/* Image gallery */}
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
              Understanding our diverse user base was critical to creating an AI assistant that would be useful and accessible to everyone.
              We conducted extensive interviews and testing with users across different technical proficiency levels.
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
            
            <h3 className="text-xl font-grotesk text-navy dark:text-cybertext mb-6">User Journey</h3>
            
            <div className="overflow-x-auto pb-6">
              <div className="grid grid-cols-5 gap-4 min-w-[900px]">
                {projectDetails.userJourney.map((stage, index) => (
                  <div key={index} className="bg-white dark:bg-darkbg border border-stone/50 dark:border-cyberborder/30 rounded-xl overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={stage.image} 
                        alt={stage.stage} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-stone dark:bg-cybertext/20 flex items-center justify-center text-navy dark:text-cybertext font-bold">
                          {index + 1}
                        </div>
                        <h4 className="font-bold text-navy dark:text-cybertext">{stage.stage}</h4>
                      </div>
                      <p className="text-sm text-navy/80 dark:text-cybertext/80 mb-2">{stage.description}</p>
                      <div className="text-xs text-navy/60 dark:text-cybertext/60">
                        <span className="font-medium">Emotions:</span> {stage.emotions}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
      
      {/* Wireframes and Design Iterations */}
      <section className="container mx-auto px-6 py-12 bg-stone/30 dark:bg-cyberborder/10 rounded-2xl my-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <PenTool className="text-navy dark:text-cybertext" size={28} />
            <h2 className="text-2xl md:text-3xl font-grotesk text-navy dark:text-cybertext">Wireframes & Design Iterations</h2>
          </div>
          
          <div className="mb-12">
            <h3 className="text-xl font-grotesk text-navy dark:text-cybertext mb-6">Initial Wireframes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projectDetails.wireframes.map((wireframe, index) => (
                <div key={index} className="overflow-hidden rounded-lg bg-white dark:bg-darkbg p-2">
                  <img 
                    src={wireframe} 
                    alt={`Wireframe ${index + 1}`} 
                    className="w-full aspect-square object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-grotesk text-navy dark:text-cybertext mb-6">Design Evolution</h3>
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
            <h2 className="text-2xl md:text-3xl font-grotesk text-navy dark:text-cybertext">Testing & Results</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-xl font-grotesk text-navy dark:text-cybertext mb-4">Key Findings</h3>
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
              <h3 className="text-xl font-grotesk text-navy dark:text-cybertext mb-4">Test Metrics</h3>
              <div className="space-y-6">
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
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-navy/70 dark:text-cybertext/70">Task Completion</span>
                    <span className="text-navy dark:text-cybertext font-medium">{projectDetails.testingResults.taskCompletionRate}%</span>
                  </div>
                  <div className="h-2 bg-stone/50 dark:bg-cyberborder/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-navy dark:bg-cybertext rounded-full" 
                      style={{ width: `${projectDetails.testingResults.taskCompletionRate}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-navy/70 dark:text-cybertext/70">Satisfaction Rate</span>
                    <span className="text-navy dark:text-cybertext font-medium">{projectDetails.testingResults.satisfactionRate}%</span>
                  </div>
                  <div className="h-2 bg-stone/50 dark:bg-cyberborder/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-navy dark:bg-cybertext rounded-full" 
                      style={{ width: `${projectDetails.testingResults.satisfactionRate}%` }}
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
                  <h3 className="text-lg font-grotesk text-navy dark:text-cybertext mb-4">Design System</h3>
                  <p className="text-navy/80 dark:text-cybertext/80 mb-4">
                    We created a specialized AI interaction design system with the following components:
                  </p>
                  <ul className="space-y-2 text-navy/80 dark:text-cybertext/80">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-navy dark:bg-cybertext"></span>
                      Modular conversation components with clear state indicators
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-navy dark:bg-cybertext"></span>
                      Specialized typography system for AI-generated content
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-navy dark:bg-cybertext"></span>
                      Adaptive color system with accessibility considerations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-navy dark:bg-cybertext"></span>
                      Animation guidelines for AI response states
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-grotesk text-navy dark:text-cybertext mb-4">Project Highlights</h3>
                  <p className="text-navy/80 dark:text-cybertext/80 mb-4">
                    Key innovations in the Microsoft Copilot project:
                  </p>
                  <ul className="space-y-2 text-navy/80 dark:text-cybertext/80">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-navy dark:bg-cybertext"></span>
                      Contextual suggestion system based on user history
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-navy dark:bg-cybertext"></span>
                      Progressive disclosure of AI capabilities
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-navy dark:bg-cybertext"></span>
                      Seamless cross-application integration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-navy dark:bg-cybertext"></span>
                      Flexible light/dark mode with accessibility features
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
              <Link to={`/project/2`}>
                View Next Project
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
