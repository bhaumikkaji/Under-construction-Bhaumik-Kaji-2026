import { Route } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import type { JourneyStage } from "@/data/projectSchema";

interface UserJourneySectionProps {
  stages: JourneyStage[];
}

export default function UserJourneySection({ stages }: UserJourneySectionProps) {
  return (
    <section className="container mx-auto px-6 py-12">
      <AnimatedSection>
        <div className="flex items-center gap-3 mb-8">
          <Route className="text-indigoPurple dark:text-cybertext" size={28} />
          <h2 className="text-2xl md:text-3xl font-grotesk text-indigoPurple dark:text-cybertext">
            User Journey
          </h2>
        </div>

        <div className="overflow-x-auto pb-6">
          <div className="grid grid-cols-5 gap-4 min-w-[900px]">
            {stages.map((stage, index) => (
              <div
                key={index}
                className="bg-white dark:bg-darkbg border border-stone/50 dark:border-cyberborder/30 rounded-xl overflow-hidden"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.stage}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-stone dark:bg-cybertext/20 flex items-center justify-center text-indigoPurple dark:text-cybertext font-bold text-sm">
                      {index + 1}
                    </div>
                    <h4 className="font-bold text-indigoPurple dark:text-cybertext">
                      {stage.stage}
                    </h4>
                  </div>
                  <p className="text-sm text-indigoPurple/80 dark:text-cybertext/80 mb-2">
                    {stage.description}
                  </p>
                  <div className="text-xs text-indigoPurple/60 dark:text-cybertext/60">
                    <span className="font-medium">Emotions:</span> {stage.emotions}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
