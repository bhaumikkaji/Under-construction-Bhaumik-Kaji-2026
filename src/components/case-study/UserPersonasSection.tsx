import { Users } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import type { UserPersona } from "@/data/projectSchema";

interface UserPersonasSectionProps {
  personas: UserPersona[];
  introText?: string;
}

export default function UserPersonasSection({ personas, introText }: UserPersonasSectionProps) {
  return (
    <section className="container mx-auto px-6 py-12">
      <AnimatedSection>
        <div className="flex items-center gap-3 mb-8">
          <Users className="text-indigoPurple dark:text-cybertext" size={28} />
          <h2 className="text-2xl md:text-3xl font-grotesk text-indigoPurple dark:text-cybertext">
            User Personas
          </h2>
        </div>

        {introText && (
          <p className="text-indigoPurple/80 dark:text-cybertext/80 mb-8 max-w-3xl">
            {introText}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-darkbg border border-stone/50 dark:border-cyberborder/30 rounded-xl overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                <img
                  src={persona.image}
                  alt={persona.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-bold text-indigoPurple dark:text-cybertext">
                    {persona.name}
                  </h3>
                  <span className="text-sm text-indigoPurple/60 dark:text-cybertext/60">
                    {persona.role}
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-indigoPurple dark:text-cybertext block mb-1">
                      Goals
                    </span>
                    <p className="text-sm text-indigoPurple/80 dark:text-cybertext/80">
                      {persona.goals}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-indigoPurple dark:text-cybertext block mb-1">
                      Pain Points
                    </span>
                    <p className="text-sm text-indigoPurple/80 dark:text-cybertext/80">
                      {persona.pain_points}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
