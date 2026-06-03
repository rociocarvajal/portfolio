import { LucideIcon } from "lucide-react"

export interface SocialLink {
  name: string
  icon: LucideIcon
  href: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    icon: require("lucide-react").Github,
    href: "https://github.com",
  },
  {
    name: "LinkedIn",
    icon: require("lucide-react").Linkedin,
    href: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: require("lucide-react").Twitter,
    href: "https://twitter.com",
  },
]

export const CONTACT_EMAIL = "correo@ejemplo.com"
