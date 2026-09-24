export type NotebookStatus = "Planned" | "Draft" | "In Progress" | "Reference";

export type NotebookSection = {
  title: string;
  body: string;
  points?: string[];
};

export type NotebookEntry = {
  id: string;
  slug: string;
  title: string;
  type: string;
  summary: string;
  status: NotebookStatus;
  tags: string[];
  updatedAt: string;
  sections: NotebookSection[];
};

export type NotebookCategory = {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  summary: string;
  intro?: string[];
  principles?: string[];
  status: NotebookStatus;
  featured?: boolean;
  entries: NotebookEntry[];
};

export type BuildersLabItem = NotebookCategory;
