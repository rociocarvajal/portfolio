import { SKILLS, STATS } from "@/constants/skills"

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
          Habilidades
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-balance">
          Tecnologías que <span className="text-primary">domino</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((skill) => (
            <div
              key={skill.category}
              className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {skill.category}
              </h3>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
