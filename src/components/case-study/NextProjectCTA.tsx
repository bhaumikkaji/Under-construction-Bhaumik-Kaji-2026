import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

interface NextProjectCTAProps {
  nextProjectSlug?: string;
  nextProjectTitle?: string;
  showAllProjects?: boolean;
}

export default function NextProjectCTA({
  nextProjectSlug,
  nextProjectTitle = "Next Project",
  showAllProjects = true,
}: NextProjectCTAProps) {
  return (
    <section className="container mx-auto px-6 py-16">
      <AnimatedSection>
        <div className="text-center">
          <span className="text-sm text-indigoPurple/60 dark:text-cybertext/60 uppercase tracking-wider">
            Continue exploring
          </span>
          <h2 className="text-2xl md:text-3xl font-grotesk text-indigoPurple dark:text-cybertext mb-6 mt-2">
            Ready to see more work?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {nextProjectSlug && (
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to={`/project/${nextProjectSlug}`}>{nextProjectTitle}</Link>
              </Button>
            )}
            {showAllProjects && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                <Link to="/projects">All Projects</Link>
              </Button>
            )}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
