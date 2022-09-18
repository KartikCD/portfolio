export interface Experience {
  id: string;
  company: string;
  shortName: string;
  role: string;
  duration: string;
  city: string;
  description: string;
  website?: string;
  github?: string;
  letter?: string;
  stack?: Array<string>;
}

export interface Experiences {
  experiences: Array<Experience>;
}

export interface Project {
  id: string;
  project: string;
  description: string;
  stack: Array<string>;
  demo: string;
  github: string;
  image: string;
}

export interface FeaturedProjects {
  projects: Array<Project>;
}
