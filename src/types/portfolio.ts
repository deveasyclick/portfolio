export interface Metric {
  title: string;
  value: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  image: string;
  color: string;
  link?: string;
  github?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}
