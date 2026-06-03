import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
          Contacto
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
          ¿Tienes un proyecto en mente?
        </h2>

        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Estoy disponible para proyectos freelance y oportunidades de trabajo.
          No dudes en contactarme.
        </p>

        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 gap-2"
          asChild
        >
          <a href="mailto:correo@ejemplo.com">
            <Mail size={20} />
            Enviar email
          </a>
        </Button>

        <div className="mt-12 flex items-center justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.name}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
