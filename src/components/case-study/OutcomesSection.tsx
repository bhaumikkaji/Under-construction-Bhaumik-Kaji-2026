import { motion } from "framer-motion";
import { Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import type { Outcomes } from "@/data/projectSchema";

interface OutcomesSectionProps {
  outcomes: Outcomes;
}

export default function OutcomesSection({ outcomes }: OutcomesSectionProps) {
  return (
    <section className="container mx-auto px-6 py-12">
      <AnimatedSection>
        <div className="flex items-center gap-3 mb-8">
          <Award className="text-indigoPurple dark:text-cybertext" size={28} />
          <h2 className="text-2xl md:text-3xl font-grotesk text-indigoPurple dark:text-cybertext">
            Outcomes & Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Business Impact */}
          <div>
            <h3 className="text-xl font-grotesk text-indigoPurple dark:text-cybertext mb-4">
              Business Impact
            </h3>
            <div className="space-y-4">
              {outcomes.businessImpact.map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-stone/30 dark:bg-cyberborder/20 p-6 rounded-lg"
                >
                  <p className="text-xl font-medium text-indigoPurple dark:text-cybertext text-center">
                    {impact}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards / Recognition */}
          <div>
            <h3 className="text-xl font-grotesk text-indigoPurple dark:text-cybertext mb-4">
              Recognition
            </h3>
            <div className="space-y-4">
              {outcomes.awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 bg-stone/30 dark:bg-cyberborder/20 p-6 rounded-lg"
                >
                  <Award className="text-indigoPurple/60 dark:text-cybertext/60 shrink-0" size={24} />
                  <p className="font-medium text-indigoPurple dark:text-cybertext">{award}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
