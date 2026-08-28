export type ProjectStatus = "featured" | "active" | "complete" | "in-progress";

export type ProjectCardVariant =
  | "default"
  | "featured"
  | "visual-left"
  | "visual-right"
  | "compact";

export type ProjectImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  category: string;
  technologies: string[];
  highlights: string[];
  repository?: string;
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  documentationUrl?: string;
  videoUrl?: string;
  images?: ProjectImage[];
  featured?: boolean;
  status?: ProjectStatus;
  variant?: ProjectCardVariant;
  accent?: string;
  mediaPosition?: "default" | "overlap" | "left" | "right";
};

export type ProjectCategory = {
  title: string;
  description: string;
  projects: Project[];
};
