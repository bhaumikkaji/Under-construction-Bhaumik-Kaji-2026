import { motion } from "framer-motion";
import { PenTool } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import type { DesignIteration } from "@/data/projectSchema";

interface DesignIterationsSectionProps {
  wireframes: string[];
  iterations: DesignIteration[];
}

export default function DesignIterationsSection({ wireframes, iterations }: DesignIterationsSectionProps) {
  return (
    <section className="container mx-auto px-6 py-12 bg-stone/30 dark:bg-cyberborder/10 rounded-2xl my-12">
      <AnimatedSection>
        <div className="flex items-center gap-3 mb-8">
          <PenTool className="text-indigoPurple dark:text-cybertext" size={28} />
          <h2 className="text-2xl md:text-3xl font-grotesk text-indigoPurple dark:text-cybertext">
            Wireframes & Design Iterations
          </h2>
        </div>

        {/* Wireframes Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-grotesk text-indigoPurple dark:text-cybertext mb-6">
            Initial Wireframes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wireframes.map((wireframe, index) => (
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

        {/* Design Iterations — Alternating Layout */}
        <div>
          <h3 className="text-xl font-grotesk text-indigoPurple dark:text-cybertext mb-6">
            Design Evolution
          </h3>
          <div className="space-y-12">
            {iterations.map((iteration, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}
              >
                <div className={index % 2 === 0 ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                  <h4 className="text-lg font-medium text-indigoPurple dark:text-cybertext mb-2">
                    Version {iteration.version}
                  </h4>
                  <p className="text-indigoPurple/80 dark:text-cybertext/80 mb-4">
                    {iteration.description}
                  </p>
                  <div className="bg-white/50 dark:bg-darkbg/50 p-4 rounded-lg">
                    <span className="text-sm font-medium text-indigoPurple dark:text-cybertext block mb-2">
                      Feedback:
                    </span>
                    <p className="text-indigoPurple/70 dark:text-cybertext/70 italic">
                      "{iteration.feedback}"
                    </p>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={index % 2 === 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"}
                >
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                      src={iteration.image}
                      alt={`Design iteration ${iteration.version}`}
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
