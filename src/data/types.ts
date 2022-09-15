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
}

export interface Experiences {
  experiences: Array<Experience>;
}
