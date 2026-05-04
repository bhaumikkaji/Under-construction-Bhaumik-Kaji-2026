import { motion } from "framer-motion";
import { Puzzle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import type { Contribution } from "@/data/projectSchema";

interface ContributionSectionProps {
  contribution: Contribution;
}

export default function ContributionSection({ contribution }: ContributionSectionProps) {
  return (
    <section className="container mx-auto px-6 py-12 bg-indigoPurple dark:bg-cyberborder/40 rounded-2xl my-12 text-white">
      <AnimatedSection>
        <div className="flex items-center gap-3 mb-8">
          <Puzzle className="text-white dark:text-cybertext" size={28} />
          <h2 className="text-2xl md:text-3xl font-grotesk">My Contribution</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Responsibilities */}
          <div>
            <h3 className="text-xl font-grotesk mb-4">Key Responsibilities</h3>
            <ul className="space-y-3">
              {contribution.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="min-w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-white/90">{responsibility}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Learnings */}
          <div>
            <h3 className="text-xl font-grotesk mb-4">Learnings & Growth</h3>
            <div className="space-y-4">
              {contribution.learnings.map((learning, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-white/10 p-4 rounded-lg"
                >
                  <p className="text-white/90">{learning}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
