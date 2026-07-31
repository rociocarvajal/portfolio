import { SquareTerminal, Laptop, GitMerge } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  icon: LucideIcon;
  url: string;
};

export const educationItems: EducationItem[] = [
  {
    degree: "Sysadmin & Free Software",
    institution: "Universidad Nacional del Comahue",
    period: "2021 — present",
    location: "Neuquén, Argentina",
    description:
      "Linux administration, network configuration, hardware, operating systems, and open-source technologies.",
    icon: SquareTerminal,
    url: "https://www.fi.uncoma.edu.ar/",
  },
  {
    degree: "Web Development",
    institution: "Universidad Nacional del Comahue",
    period: "2024 — present",
    location: "Neuquén, Argentina",
    description:
      "Web development fundamentals, POO, relational databases, and software design principles.",
    icon: Laptop,
    url: "https://www.fi.uncoma.edu.ar/",
  },
  {
    degree: "Front-End Development",
    institution: "Independent Learning",
    period: "2022 - present",
    location: "Online",
    description:
      "Developing intuitive and visually appealing interfaces while continuously exploring new technologies and best practices.",
    icon: GitMerge,
    url: "https://github.com/rociocarvajal",
  },
];
