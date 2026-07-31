import { House, BriefcaseBusiness, Code2, GraduationCap, Mail } from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
  id: string;
  icon: React.ElementType;
}

export const navItems: NavItem[] = [
  {
    name: "Home",
    href: "#home",
    id: "home",
    icon: House,
  },
  {
    name: "Experience",
    href: "#experience",
    id: "experience",
    icon: BriefcaseBusiness,
  },
  {
    name: "Skills",
    href: "#skills",
    id: "skills",
    icon: Code2,
  },
  {
    name: "Education",
    href: "#education",
    id: "education",
    icon: GraduationCap,
  },
  {
    name: "Contact",
    href: "#contact",
    id: "contact",
    icon: Mail,
  },
];
