import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import type { TestingResults } from "@/data/projectSchema";

interface TestingResultsSectionProps {
  results: TestingResults;
}

export default function TestingResultsSection({ results }: TestingResultsSectionProps) {
  const metrics = [
    { label: "Usability Score", value: results.usabilityScore },
    { label: "Task Completion", value: results.taskCompletionRate },
    { label: "Satisfaction Rate", value: results.satisfactionRate },
    { label: "Implementation Rate", value: results.implementationRate },
    { label: "Designer Satisfaction", value: results.designerSatisfaction },
  ].filter((m) => m.value != null);

  return (
    <section className="container mx-auto px-6 py-12">
      <AnimatedSection>
        <div className="flex items-center gap-3 mb-8">
          <CheckCircle className="text-indigoPurple dark:text-cybertext" size={28} />
          <h2 className="text-2xl md:text-3xl font-grotesk text-indigoPurple dark:text-cybertext">
            Testing & Results
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Key Findings */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-grotesk text-indigoPurple dark:text-cybertext mb-4">
              Key Findings
            </h3>
            <ul className="space-y-4">
              {results.keyFindings.map((finding, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="min-w-6 h-6 rounded-full bg-stone dark:bg-cybertext/20 flex items-center justify-center text-indigoPurple dark:text-cybertext font-bold text-sm mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-indigoPurple/80 dark:text-cybertext/80">{finding}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-grotesk text-indigoPurple dark:text-cybertext mb-4">
              Test Metrics
            </h3>
            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-indigoPurple/70 dark:text-cybertext/70">
                      {metric.label}
                    </span>
                    <span className="text-indigoPurple dark:text-cybertext font-medium">
                      {metric.value}%
                    </span>
                  </div>
                  <div className="h-2 bg-stone/50 dark:bg-cyberborder/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="h-full bg-indigoPurple dark:bg-cybertext rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
