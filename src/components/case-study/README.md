# Case Study Component Library

Pre-built, reusable sections for assembling product-designer portfolio case-study pages.
All components live in `src/components/case-study/` and are unconnected — drop them into any page with data props.

---

## Quick Start

```tsx
import {
  ProjectHero,
  ProjectOverview,
  ChallengeSection,
  // ... etc
} from "@/components/case-study";
```

---

## Component Reference

### 1. ProjectHero
Full-bleed hero image with title/category overlay.

```tsx
<ProjectHero
  title="Microsoft Copilot"
  category="AI Assistant"
  heroImage="/images/project-hero.jpg"
/>
```

### 2. ProjectOverview
Description + metadata sidebar (duration, team, tools, deliverables).

```tsx
<ProjectOverview
  description="AI assistant that helps users..."
  metadata={{
    duration: "4 months",
    team: "6 designers, 3 developers",
    tools: ["Figma", "Adobe Illustrator"],
    deliverables: ["UI Design", "Design System"],
    role: "Lead Designer",
  }}
/>
```

### 3. ChallengeSection
Brief + Challenge cards (brief is optional).

```tsx
<ChallengeSection
  brief="Create an AI assistant for enterprise users."
  challenge="Balancing power with simplicity for non-technical users."
/>
```

### 4. ProcessSection
Numbered process grid with images.

```tsx
<ProcessSection
  process={[
    {
      title: "Research",
      description: "User interviews and competitive analysis...",
      image: "/images/research.jpg",
    },
    // ... more steps
  ]}
/>
```

### 5. GalleryCarousel
Image carousel using shadcn/ui carousel.

```tsx
<GalleryCarousel
  images={[
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    // ...
  ]}
  title="Project Gallery"
/>
```

### 6. UserPersonasSection
Persona cards with image, role, goals, pain points.

```tsx
<UserPersonasSection
  introText="We identified two primary user types..."
  personas={[
    {
      name: "Sarah, 42",
      role: "Marketing Director",
      goals: "Streamline content creation...",
      pain_points: "Existing tools too technical...",
      image: "/images/persona-sarah.jpg",
    },
    // ... more personas
  ]}
/>
```

### 7. UserJourneySection
Horizontal scrollable journey stage cards.

```tsx
<UserJourneySection
  stages={[
    {
      stage: "Discovery",
      description: "User realizes they need AI assistance...",
      touchpoints: ["Online reviews", "Recommendations"],
      emotions: "Curious but skeptical",
      image: "/images/journey-1.jpg",
    },
    // ... more stages
  ]}
/>
```

### 8. DesignIterationsSection
Wireframes grid + alternating iteration layout with feedback quotes.

```tsx
<DesignIterationsSection
  wireframes={[
    "/images/wireframe-1.jpg",
    "/images/wireframe-2.jpg",
  ]}
  iterations={[
    {
      version: "1.0",
      description: "Initial text-based concept...",
      image: "/images/iter-v1.jpg",
      feedback: "Users wanted more visual cues...",
    },
    // ... more iterations
  ]}
/>
```

### 9. TestingResultsSection
Animated metrics bars + key findings list.

```tsx
<TestingResultsSection
  results={{
    usabilityScore: 95,
    taskCompletionRate: 92,
    satisfactionRate: 94,
    keyFindings: [
      "Users completed tasks 40% faster...",
      "93% rated interface as highly intuitive",
    ],
  }}
/>
```

### 10. ContributionSection
Dark background section — responsibilities + learnings grid.

```tsx
<ContributionSection
  contribution={{
    responsibilities: [
      "Led UX research phase...",
      "Developed core interaction model...",
    ],
    learnings: [
      "Refined techniques for AI interface design...",
      "Developed progressive disclosure patterns...",
    ],
  }}
/>
```

### 11. OutcomesSection
Business impact cards + awards/recognition list.

```tsx
<OutcomesSection
  outcomes={{
    businessImpact: [
      "35% increase in user adoption",
      "28% reduction in support tickets",
    ],
    awards: [
      "Best AI UX Design, Tech Design Awards 2023",
      "Featured case study at UX Design Summit",
    ],
  }}
/>
```

### 12. TechnicalSpecsSection
Collapsible accordion with spec categories.

```tsx
<TechnicalSpecsSection
  sections={[
    {
      title: "Design System",
      description: "Component architecture...",
      items: [
        "Modular conversation components",
        "Specialized typography system",
        "Adaptive color system",
      ],
    },
    // ... more sections
  ]}
/>
```

### 13. NextProjectCTA
End-of-page navigation CTA.

```tsx
<NextProjectCTA
  nextProjectSlug="2"
  nextProjectTitle="View Next Project"
  showAllProjects={true}
/>
```

### 14. FloatingBackButton
Fixed bottom-left back button.

```tsx
<FloatingBackButton
  to="/projects"
  label="Back to projects"
/>
```

---

## Full Page Assembly Example

```tsx
import { FloatingBackButton, ProjectHero, ProjectOverview, ChallengeSection, ProcessSection, GalleryCarousel, UserPersonasSection, DesignIterationsSection, TestingResultsSection, ContributionSection, OutcomesSection, NextProjectCTA } from "@/components/case-study";
import type { CaseStudyData } from "@/data/projectSchema";

export default function ProjectPage({ project }: { project: CaseStudyData }) {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-darkbg pb-16">
      <FloatingBackButton />

      <ProjectHero
        title={project.title}
        category={project.category}
        heroImage={project.heroImage}
      />

      <ProjectOverview
        description={project.description}
        metadata={project.metadata}
      />

      <ChallengeSection
        brief={project.brief}
        challenge={project.challenge}
      />

      <ProcessSection process={project.process} />

      {project.userPersonas && <UserPersonasSection personas={project.userPersonas} />}

      {project.designIterations && project.wireframes && (
        <DesignIterationsSection
          wireframes={project.wireframes}
          iterations={project.designIterations}
        />
      )}

      {project.testingResults && <TestingResultsSection results={project.testingResults} />}

      {project.contribution && <ContributionSection contribution={project.contribution} />}

      {project.outcomes && <OutcomesSection outcomes={project.outcomes} />}

      <GalleryCarousel images={project.galleryImages} />

      <NextProjectCTA nextProjectSlug="2" />
    </div>
  );
}
```

---

## Data Schema

All types live in `src/data/projectSchema.ts`. See that file for the full `CaseStudyData` interface.

Key interfaces:
- `ProcessStep` — `{ title, description, image }`
- `UserPersona` — `{ name, role, goals, pain_points, image }`
- `JourneyStage` — `{ stage, description, touchpoints[], emotions, image }`
- `DesignIteration` — `{ version, description, image, feedback }`
- `TestingResults` — `{ usabilityScore, taskCompletionRate?, satisfactionRate?, implementationRate?, designerSatisfaction?, keyFindings[] }`
- `Contribution` — `{ responsibilities[], learnings[] }`
- `Outcomes` — `{ businessImpact[], awards[] }`
- `ProjectMetadata` — `{ duration, team, tools[], deliverables[], role }`

---

## Notes

- All components are **dark-mode aware** (light/dark classes applied)
- All use **Framer Motion** scroll-triggered animations (`whileInView`, `viewport={{ once: true }}`)
- All wrap sections in `AnimatedSection` for consistent entrance animation
- Components with optional data (userPersonas, testingResults, etc.) return nothing if not provided — safe to conditionally render
- **Not wired to routing** — import and use in pages as needed
