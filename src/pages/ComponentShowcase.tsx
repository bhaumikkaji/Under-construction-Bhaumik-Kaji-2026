import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Moon, Sun, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ProjectHero,
  ProjectOverview,
  ChallengeSection,
  ProcessSection,
  GalleryCarousel,
  UserPersonasSection,
  UserJourneySection,
  DesignIterationsSection,
  TestingResultsSection,
  ContributionSection,
  OutcomesSection,
  TechnicalSpecsSection,
  NextProjectCTA,
  FloatingBackButton,
} from "@/components/case-study";
import type { CaseStudyData } from "@/data/projectSchema";

/* ── Demo data ─────────────────────────────────────────────── */

const demoProject: CaseStudyData = {
  id: "demo",
  slug: "demo",
  title: "Component Showcase",
  category: "Design System",
  description:
    "A living document of every reusable case-study section in the portfolio component library. Each section below is a real component you can drop into any project page with your own data.",
  heroImage:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
  galleryImages: [
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070",
  ],
  metadata: {
    duration: "Ongoing",
    team: "You + Leo",
    tools: ["React", "TypeScript", "Tailwind", "Framer Motion", "shadcn/ui"],
    deliverables: ["14 reusable sections", "Typed schema", "Dark-mode support"],
    role: "System Designer",
  },
  brief:
    "Build a portfolio site where every case-study page shares the same visual language but tells a unique story.",
  challenge:
    "Avoid copy-pasting markup between projects. Every section should be a prop-driven component that adapts to the content.",
  process: [
    {
      title: "Audit Existing Pages",
      description:
        "Read both Project1 and Project2 pages to identify repeated layout patterns, markup blocks, and animation sequences.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
    },
    {
      title: "Extract Components",
      description:
        "Turn each repeated section into a standalone component with typed props, Framer Motion scroll animations, and dark-mode classes.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Build Schema",
      description:
        "Define TypeScript interfaces so every project’s data fits the same shape. Enables JSON-driven pages later.",
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: "Document & Ship",
      description:
        "Write a README with prop examples, commit, and leave the components unconnected until real content arrives.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070",
    },
  ],
  userPersonas: [
    {
      name: "Bhaumik, 30s",
      role: "Senior Product Designer",
      goals:
        "Showcase AI + design system work in a way that feels crafted, not templated.",
      pain_points:
        "Previous portfolios were either too generic or required hand-coding every page from scratch.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974",
    },
    {
      name: "Recruiter, 30s",
      role: "Design Hiring Manager",
      goals:
        "Quickly scan case studies to evaluate craft, process depth, and business impact.",
      pain_points:
        "Most portfolios are image grids with no narrative. Hard to judge real contribution.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974",
    },
  ],
  userJourney: [
    {
      stage: "Discovery",
      description: "Hiring manager finds the portfolio via LinkedIn or referral.",
      touchpoints: ["LinkedIn bio", "Peer referral", "Twitter/X post"],
      emotions: "Curious, scanning quickly",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    },
    {
      stage: "Land",
      description: "Hero section + project grid gives instant credibility.",
      touchpoints: ["Homepage hero", "Project thumbnails", "About snippet"],
      emotions: "Impressed, wants to dig deeper",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2070",
    },
    {
      stage: "Read",
      description: "Case-study page walks through problem, process, and outcome.",
      touchpoints: [
        "Process images",
        "Metrics section",
        "Contribution block",
      ],
      emotions: "Building trust, evaluating craft",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070",
    },
    {
      stage: "Validate",
      description: "Outcomes + awards confirm business impact, not just pretty pixels.",
      touchpoints: ["Business impact cards", "Awards list", "Next project CTA"],
      emotions: "Convinced, ready to reach out",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070",
    },
    {
      stage: "Contact",
      description: "Recruiter clicks through to email or LinkedIn.",
      touchpoints: ["Contact page", "Email link", "Resume download"],
      emotions: "Action-oriented",
      image:
        "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&q=80&w=2070",
    },
  ],
  wireframes: [
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
  ],
  designIterations: [
    {
      version: "1.0",
      description:
        "All content hardcoded in each page. No reuse, no consistency.",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2070",
      feedback:
        "Updating one section means editing two files. Risk of drift between projects.",
    },
    {
      version: "2.0",
      description:
        "Split into components but props were loosely typed. Dark mode handled per-page.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
      feedback:
        "Better, but still inconsistent. Needed a shared schema and single import path.",
    },
    {
      version: "3.0",
      description:
        "Full component library with typed schema, barrel export, and README.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070",
      feedback:
        "Now any new project page is just data + assembly. Exactly what we wanted.",
    },
  ],
  testingResults: {
    usabilityScore: 98,
    taskCompletionRate: 96,
    satisfactionRate: 94,
    keyFindings: [
      "Components rendered correctly in both light and dark modes on first try",
      "TypeScript caught 3 prop mismatches during assembly — zero runtime errors",
      "Scroll animations felt smooth at 60fps on desktop and mobile",
    ],
  },
  contribution: {
    responsibilities: [
      "Audited both existing project pages for repeated layout patterns",
      "Defined shared TypeScript schema in projectSchema.ts",
      "Built 14 reusable section components with Framer Motion scroll animations",
      "Wrote barrel export index.ts for clean one-line imports",
      "Documented every component with prop examples in README.md",
    ],
    learnings: [
      "Extracting components from real pages beats designing them in isolation",
      "A typed schema forces consistency before content even exists",
      "Dark mode is easier when every component handles its own contrast classes",
      "Barrel exports save cognitive load — one import path for the whole library",
    ],
  },
  outcomes: {
    businessImpact: [
      "New case-study pages can be assembled in minutes, not hours",
      "Zero markup duplication across project pages",
      "Content updates happen in one data file, not scattered across JSX",
    ],
    awards: [
      "Best Internal Tooling, Leo Awards 2026",
      "Featured in 'How I Built My Portfolio' blog post",
    ],
  },
  technicalSpecs: {
    sections: [
      {
        title: "Stack",
        items: [
          "Vite + React 18 + TypeScript",
          "Tailwind CSS for styling",
          "Framer Motion for scroll animations",
          "shadcn/ui for carousel + collapsible primitives",
        ],
      },
      {
        title: "Architecture",
        items: [
          "JSON-driven pages via CaseStudyData schema",
          "14 reusable section components in src/components/case-study/",
          "Barrel export index.ts for clean imports",
          "Dark mode via Tailwind dark: variants",
        ],
      },
      {
        title: "Patterns",
        description: "Design decisions carried across every component",
        items: [
          "AnimatedSection wrapper for consistent entrance animation",
          "whileInView + viewport={{ once: true }} for scroll triggers",
          "Container mx-auto px-6 for consistent page gutters",
          "Optional props — components render nothing if data is missing",
        ],
      },
    ],
  },
};

/* ── Section label component ───────────────────────────────── */

function SectionLabel({ name, index }: { name: string; index: number }) {
  return (
    <div className="container mx-auto px-6 pt-16 pb-4">
      <div className="flex items-center gap-3 border-b border-stone/30 dark:border-cyberborder/30 pb-4">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigoPurple dark:bg-cybertext text-white dark:text-darkbg text-sm font-bold">
          {index}
        </span>
        <h2 className="text-xl font-grotesk text-indigoPurple dark:text-cybertext uppercase tracking-wider">
          {name}
        </h2>
        <span className="ml-auto text-sm text-indigoPurple/50 dark:text-cybertext/50 font-mono hidden sm:inline">
          &lt;{name.replace(/\s/g, "")} /&gt;
        </span>
      </div>
      <p className="text-sm text-indigoPurple/60 dark:text-cybertext/60 mt-2">
        Import from{" "}
        <code className="bg-stone/30 dark:bg-cyberborder/20 px-1.5 py-0.5 rounded text-xs">
          @/components/case-study
        </code>
      </p>
    </div>
  );
}

/* ── Main page ─────────────────────────────────────────────── */

export default function ComponentShowcase() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-offwhite dark:bg-darkbg">
        {/* Sticky header */}
        <header className="sticky top-0 z-50 bg-offwhite/90 dark:bg-darkbg/90 backdrop-blur-md border-b border-stone/20 dark:border-cyberborder/20">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full"
              >
                <Link to="/">
                  <ArrowLeft size={20} />
                </Link>
              </Button>
              <div>
                <h1 className="text-lg font-grotesk text-indigoPurple dark:text-cybertext">
                  Component Showcase
                </h1>
                <p className="text-xs text-indigoPurple/60 dark:text-cybertext/60">
                  14 reusable case-study sections
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="rounded-full gap-2"
              >
                {theme === "light" ? (
                  <>
                    <Moon size={14} /> Dark
                  </>
                ) : (
                  <>
                    <Sun size={14} /> Light
                  </>
                )}
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <Link to="/projects">
                  <Eye size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* TOC */}
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap gap-2">
            {[
              "ProjectHero",
              "ProjectOverview",
              "ChallengeSection",
              "ProcessSection",
              "GalleryCarousel",
              "UserPersonasSection",
              "UserJourneySection",
              "DesignIterationsSection",
              "TestingResultsSection",
              "ContributionSection",
              "OutcomesSection",
              "TechnicalSpecsSection",
              "NextProjectCTA",
              "FloatingBackButton",
            ].map((name, i) => (
              <a
                key={name}
                href={`#${name.toLowerCase()}`}
                className="px-3 py-1.5 text-xs rounded-full bg-stone/30 dark:bg-cyberborder/20 text-indigoPurple dark:text-cybertext hover:bg-stone/50 dark:hover:bg-cyberborder/40 transition-colors"
              >
                {i + 1}. {name}
              </a>
            ))}
          </div>
        </div>

        {/* ── Components ─────────────────────────────── */}

        <div id="projecthero">
          <SectionLabel name="ProjectHero" index={1} />
          <ProjectHero
            title={demoProject.title}
            category={demoProject.category}
            heroImage={demoProject.heroImage}
          />
        </div>

        <div id="projectoverview">
          <SectionLabel name="ProjectOverview" index={2} />
          <ProjectOverview
            description={demoProject.description}
            metadata={demoProject.metadata}
          />
        </div>

        <div id="challengesection">
          <SectionLabel name="ChallengeSection" index={3} />
          <ChallengeSection
            brief={demoProject.brief}
            challenge={demoProject.challenge}
          />
        </div>

        <div id="processsection">
          <SectionLabel name="ProcessSection" index={4} />
          <ProcessSection process={demoProject.process} />
        </div>

        <div id="gallerycarousel">
          <SectionLabel name="GalleryCarousel" index={5} />
          <GalleryCarousel
            images={demoProject.galleryImages}
            title="Project Gallery"
          />
        </div>

        <div id="userpersonassection">
          <SectionLabel name="UserPersonasSection" index={6} />
          <UserPersonasSection
            personas={demoProject.userPersonas!}
            introText="Every project starts with understanding who we're designing for."
          />
        </div>

        <div id="userjourneysection">
          <SectionLabel name="UserJourneySection" index={7} />
          <UserJourneySection stages={demoProject.userJourney!} />
        </div>

        <div id="designiterationssection">
          <SectionLabel name="DesignIterationsSection" index={8} />
          <DesignIterationsSection
            wireframes={demoProject.wireframes!}
            iterations={demoProject.designIterations!}
          />
        </div>

        <div id="testingresultssection">
          <SectionLabel name="TestingResultsSection" index={9} />
          <TestingResultsSection results={demoProject.testingResults!} />
        </div>

        <div id="contributionsection">
          <SectionLabel name="ContributionSection" index={10} />
          <ContributionSection contribution={demoProject.contribution!} />
        </div>

        <div id="outcomessection">
          <SectionLabel name="OutcomesSection" index={11} />
          <OutcomesSection outcomes={demoProject.outcomes!} />
        </div>

        <div id="technicalspecssection">
          <SectionLabel name="TechnicalSpecsSection" index={12} />
          <TechnicalSpecsSection
            sections={demoProject.technicalSpecs!.sections}
          />
        </div>

        <div id="nextprojectcta">
          <SectionLabel name="NextProjectCTA" index={13} />
          <NextProjectCTA
            nextProjectSlug="2"
            nextProjectTitle="View Next Project"
            showAllProjects
          />
        </div>

        <div id="floatingbackbutton" className="relative h-32">
          <SectionLabel name="FloatingBackButton" index={14} />
          <p className="container mx-auto px-6 text-sm text-indigoPurple/60 dark:text-cybertext/60 mb-4">
            Fixed bottom-left button. Visible on this page — usually sits behind
            other content.
          </p>
          <FloatingBackButton to="/projects" label="Back to projects" />
        </div>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-16 text-center border-t border-stone/20 dark:border-cyberborder/20 mt-16">
          <p className="text-sm text-indigoPurple/60 dark:text-cybertext/60">
            All components live in{" "}
            <code className="bg-stone/30 dark:bg-cyberborder/20 px-1.5 py-0.5 rounded text-xs">
              src/components/case-study/
            </code>
            . Import via{" "}
            <code className="bg-stone/30 dark:bg-cyberborder/20 px-1.5 py-0.5 rounded text-xs">
              @/components/case-study
            </code>
            .
          </p>
          <Button asChild variant="outline" className="rounded-full mt-6">
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </footer>
      </div>
    </div>
  );
}
