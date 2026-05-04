import { motion } from "framer-motion";
import { PenTool } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import type { ProcessStep } from "@/data/projectSchema";

interface ProcessSectionProps {
  process: ProcessStep[];
}

export default function ProcessSection({ process }: ProcessSectionProps) {
  return (
    <section className="container mx-auto px-6 py-12">
      <AnimatedSection>
        <div className="flex items-center gap-3 mb-8">
          <PenTool className="text-indigoPurple dark:text-cybertext" size={28} />
          <h2 className="text-2xl md:text-3xl font-grotesk text-indigoPurple dark:text-cybertext">
            Design Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {process.map((step, index) => (
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
              <h3 className="text-xl font-grotesk text-indigoPurple dark:text-cybertext mb-2">
                {index + 1}. {step.title}
              </h3>
              <p className="text-indigoPurple/70 dark:text-cybertext/80">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
