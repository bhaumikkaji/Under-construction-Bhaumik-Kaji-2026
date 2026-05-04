import { Clock, Tag, Users, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import type { ProjectMetadata } from "@/data/projectSchema";

interface ProjectOverviewProps {
  description: string;
  metadata: ProjectMetadata;
}

export default function ProjectOverview({ description, metadata }: ProjectOverviewProps) {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <AnimatedSection className="lg:col-span-2">
          <div className="prose prose-indigoPurple dark:prose-invert max-w-none">
            <p className="text-lg md:text-xl text-indigoPurple/90 dark:text-cybertext/90 leading-relaxed">
              {description}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-6">
          <MetadataItem icon={Clock} label="Duration" value={metadata.duration} />
          <MetadataItem icon={Users} label="Team" value={metadata.team} />
          <MetadataTags icon={Tag} label="Tools" tags={metadata.tools} />
          <MetadataTags icon={ExternalLink} label="Deliverables" tags={metadata.deliverables} />
        </AnimatedSection>
      </div>
    </section>
  );
}

function MetadataItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center space-x-3">
      <Icon className="text-indigoPurple/60 dark:text-cybertext/60" size={18} />
      <div>
        <h3 className="text-sm text-indigoPurple/60 dark:text-cybertext/60 uppercase tracking-wider">
          {label}
        </h3>
        <p className="text-indigoPurple dark:text-cybertext font-medium">{value}</p>
      </div>
    </div>
  );
}

function MetadataTags({
  icon: Icon,
  label,
  tags,
}: {
  icon: React.ElementType;
  label: string;
  tags: string[];
}) {
  return (
    <div className="flex items-start space-x-3">
      <Icon className="text-indigoPurple/60 dark:text-cybertext/60 mt-1" size={18} />
      <div>
        <h3 className="text-sm text-indigoPurple/60 dark:text-cybertext/60 uppercase tracking-wider">
          {label}
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-stone dark:bg-cyberborder/30 rounded-full text-sm text-indigoPurple dark:text-cybertext"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
