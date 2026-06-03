export interface NavItem {
  name: string
  href: string
  id: string
}

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Contact", href: "#contact", id: "contact" },
]
