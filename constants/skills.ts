export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "Tailwind CSS",
      "NextJS",
    ],
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel", "Python", "NodeJS", "MySQL", "SQLite"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "GitLab", "Laragon", "Vite"],
  },
  {
    category: "Soft Skills",
    items: ["Communication", "Teamwork", "Organization", "Self-Learning", "Adaptability"],
  },
];
