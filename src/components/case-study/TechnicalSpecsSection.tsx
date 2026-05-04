import { useState } from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface SpecSection {
  title: string;
  description?: string;
  items: string[];
}

interface TechnicalSpecsSectionProps {
  sections: SpecSection[];
}

export default function TechnicalSpecsSection({ sections }: TechnicalSpecsSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="container mx-auto px-6 py-12">
      <AnimatedSection>
        <div
          className={`w-full border border-stone/50 dark:border-cyberborder/30 rounded-xl overflow-hidden transition-colors ${
            isOpen ? "bg-white dark:bg-darkbg/50" : "bg-stone/20 dark:bg-cyberborder/10 hover:bg-stone/30 dark:hover:bg-cyberborder/20"
          }`}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full p-6 text-left"
          >
            <div className="flex items-center gap-3">
              <Layers className="text-indigoPurple dark:text-cybertext" size={24} />
              <h2 className="text-2xl font-grotesk text-indigoPurple dark:text-cybertext">
                Technical Specifications
              </h2>
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-indigoPurple/20 dark:border-cybertext/20">
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-indigoPurple dark:text-cybertext"
              >
                ↓
              </motion.span>
            </div>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-stone/30 dark:border-cyberborder/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-grotesk text-indigoPurple dark:text-cybertext mb-4">
                      {section.title}
                    </h3>
                    {section.description && (
                      <p className="text-indigoPurple/80 dark:text-cybertext/80 mb-4">
                        {section.description}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-indigoPurple dark:bg-cybertext mt-2 shrink-0" />
                          <span className="text-indigoPurple/80 dark:text-cybertext/80">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
}
