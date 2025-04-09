
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Clock, Tag, Users } from "lucide-react";
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
import { projectsData } from "@/data/projectsData";

export default function SingleProject() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<typeof projectsData[0] | undefined>(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the project with matching ID
    if (id) {
      const foundProject = projectsData.find(p => p.id === parseInt(id));
      setProject(foundProject);
    }
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);

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

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-offwhite dark:bg-darkbg">
        <h1 className="text-3xl font-grotesk text-navy dark:text-cybertext mb-4">Project Not Found</h1>
        <p className="text-navy/70 dark:text-cybertext/80 mb-6">The project you're looking for doesn't exist.</p>
        <Button asChild variant="default">
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  // Mock additional project details that would come from a real API
  const projectDetails = {
    duration: "3 months",
    team: "4 designers, 2 developers",
    tools: ["Figma", "Sketch", "Adobe XD", "InVision"],
    deliverables: ["User Research", "UI Design", "Prototyping", "Design System"],
    role: "Lead Designer",
    challenges: "The main challenge was creating a consistent design system that would work across multiple platforms while maintaining the brand identity.",
    process: [
      {
        title: "Research",
        description: "Conducted user interviews and competitive analysis to understand the market and user needs.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
      },
      {
        title: "Ideation",
        description: "Explored multiple design directions and concepts through sketching and wireframing.",
        image: "https://images.unsplash.com/photo-1573496528013-454181200d97?auto=format&fit=crop&q=80&w=2069"
      },
      {
        title: "Prototyping",
        description: "Created interactive prototypes to test the user experience and gather feedback.",
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=2070"
      },
      {
        title: "Implementation",
        description: "Worked closely with developers to ensure the design was implemented correctly.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070"
      }
    ]
  };

  // Generate additional images for the project gallery (in a real app, these would come from the API)
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
                As the {projectDetails.role} on this project, I was responsible for establishing the design direction, 
                creating the component library, and ensuring a consistent user experience across all touchpoints.
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
      
      {/* Design process */}
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
      
      {/* Next project */}
      <section className="container mx-auto px-6 py-12">
        <AnimatedSection>
          <div className="text-center">
            <span className="text-sm text-navy/60 dark:text-cybertext/60 uppercase tracking-wider">Continue exploring</span>
            <h2 className="text-2xl md:text-3xl font-grotesk text-navy dark:text-cybertext mb-6">Next Project</h2>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to={`/project/${(project.id % projectsData.length) + 1}`}>
                View Next Project
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
