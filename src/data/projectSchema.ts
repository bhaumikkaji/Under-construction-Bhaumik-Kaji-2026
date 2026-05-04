// Case Study Data Schema
// Defines the structure for all project case study data
// Usage: Create a JSON file per project following this schema

export interface ProcessStep {
  title: string;
  description: string;
  image: string;
}

export interface UserPersona {
  name: string;
  role: string;
  goals: string;
  pain_points: string;
  image: string;
}

export interface JourneyStage {
  stage: string;
  description: string;
  touchpoints: string[];
  emotions: string;
  image: string;
}

export interface DesignIteration {
  version: string;
  description: string;
  image: string;
  feedback: string;
}

export interface TestingResults {
  usabilityScore: number;
  taskCompletionRate?: number;
  satisfactionRate?: number;
  implementationRate?: number;
  designerSatisfaction?: number;
  keyFindings: string[];
}

export interface Contribution {
  responsibilities: string[];
  learnings: string[];
}

export interface Outcomes {
  businessImpact: string[];
  awards: string[];
}

export interface ProjectMetadata {
  duration: string;
  team: string;
  tools: string[];
  deliverables: string[];
  role: string;
}

export interface CaseStudyData {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  metadata: ProjectMetadata;
  challenge: string;
  brief?: string;
  process: ProcessStep[];
  userPersonas?: UserPersona[];
  userJourney?: JourneyStage[];
  wireframes?: string[];
  designIterations?: DesignIteration[];
  testingResults?: TestingResults;
  contribution?: Contribution;
  outcomes?: Outcomes;
  technicalSpecs?: {
    sections: Array<{
      title: string;
      description?: string;
      items: string[];
    }>;
  };
}

// Minimal project card data (for the grid listing)
export interface ProjectCardData {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
}
