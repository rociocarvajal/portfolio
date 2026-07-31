import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { EducationSection } from "@/components/sections/education-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
