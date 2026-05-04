import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

interface ProjectHeroProps {
  title: string;
  category: string;
  heroImage: string;
}

export default function ProjectHero({ title, category, heroImage }: ProjectHeroProps) {
  return (
    <section className="w-full h-[70vh] relative overflow-hidden">
      <motion.div
        initial={{ scale: 1.05, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="w-full h-full"
      >
        <img
          src={heroImage}
          alt={title}
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
            <span className="text-sm md:text-base uppercase tracking-wider text-indigoPurple/70 dark:text-cybertext/80 font-medium mb-2 block">
              {category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-grotesk text-indigoPurple dark:text-cybertext">
              {title}
            </h1>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
