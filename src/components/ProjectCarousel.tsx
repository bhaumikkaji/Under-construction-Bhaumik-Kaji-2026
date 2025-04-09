
import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projectData = [
  {
    id: 1,
    title: "Microsoft Copilot",
    description: "Leading design initiatives for Microsoft's AI assistant, helping users accomplish more with the power of AI across Microsoft products.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070",
    tags: ["AI", "Product Design", "UX Research"]
  },
  {
    id: 2,
    title: "Design System Evolution",
    description: "Developed and maintained a comprehensive design system that ensures consistency across Microsoft's product ecosystem.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
    tags: ["Design Systems", "Component Library", "Documentation"]
  },
  {
    id: 3,
    title: "User Experience Optimization",
    description: "Conducted extensive user research and testing to optimize the experience for Microsoft products, resulting in improved usability metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    tags: ["UX Research", "Prototyping", "User Testing"]
  },
  {
    id: 4,
    title: "Cross-Platform Integration",
    description: "Designed seamless experiences that work across devices and platforms, ensuring consistent user experience regardless of access point.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070",
    tags: ["Responsive Design", "Multi-platform", "Accessibility"]
  }
];

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-[calc(100vh-6rem)]">
      <div className="full-screen-carousel h-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container h-full">
          {projectData.map((project) => (
            <div key={project.id} className="embla__slide flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-lg"
                >
                  <div className="flex space-x-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-stone rounded-full text-navy/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-grotesk text-navy">
                    {project.title}
                  </h2>
                  <p className="text-navy/80 mb-8 text-lg">
                    {project.description}
                  </p>
                </motion.div>
              </div>
              <div className="md:w-1/2 h-64 md:h-full relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-8 md:left-12 lg:left-16 flex space-x-4 z-10">
        <button 
          onClick={scrollPrev}
          className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-navy hover:bg-white transition-colors"
          aria-label="Previous project"
        >
          <ArrowLeft size={20} />
        </button>
        <button 
          onClick={scrollNext}
          className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-navy hover:bg-white transition-colors"
          aria-label="Next project"
        >
          <ArrowRight size={20} />
        </button>
      </div>
      
      <div className="absolute bottom-8 right-8 md:right-12 lg:right-16 flex items-center space-x-2 z-10">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-navy' : 'bg-navy/30'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
