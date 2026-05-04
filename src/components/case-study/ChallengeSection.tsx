import { Target } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface ChallengeSectionProps {
  brief?: string;
  challenge: string;
}

export default function ChallengeSection({ brief, challenge }: ChallengeSectionProps) {
  return (
    <section className="container mx-auto px-6 py-12">
      <AnimatedSection>
        <div className="bg-stone/30 dark:bg-cyberborder/10 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-indigoPurple dark:text-cybertext" size={28} />
              <h2 className="text-2xl md:text-3xl font-grotesk text-indigoPurple dark:text-cybertext">
                Project Brief & Challenge
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brief && (
                <div className="bg-white/80 dark:bg-darkbg/80 p-6 rounded-xl">
                  <h3 className="text-xl font-grotesk text-indigoPurple dark:text-cybertext mb-3">
                    The Brief
                  </h3>
                  <p className="text-indigoPurple/80 dark:text-cybertext/80">{brief}</p>
                </div>
              )}
              <div
                className={`bg-white/80 dark:bg-darkbg/80 p-6 rounded-xl ${!brief ? "md:col-span-2" : ""}`}
              >
                <h3 className="text-xl font-grotesk text-indigoPurple dark:text-cybertext mb-3">
                  The Challenge
                </h3>
                <p className="text-indigoPurple/80 dark:text-cybertext/80">{challenge}</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
