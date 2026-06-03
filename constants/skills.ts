export interface SkillCategory {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Herramientas",
    items: ["Git", "Figma", "VS Code", "Vercel"],
  },
  {
    category: "Otros",
    items: ["Node.js", "REST APIs", "GraphQL", "Testing"],
  },
]

export interface Stat {
  number: string
  label: string
}

export const stats: Stat[] = [
  { number: "5+", label: "Años experiencia" },
  { number: "50+", label: "Proyectos" },
  { number: "30+", label: "Clientes" },
  { number: "100%", label: "Satisfacción" },
]
