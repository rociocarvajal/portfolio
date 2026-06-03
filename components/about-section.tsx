import { stats } from "@/constants/skills"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
          Sobre mí
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-balance">
          Apasionado por crear{" "}
          <span className="text-primary">experiencias únicas</span>
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Soy un desarrollador frontend con más de 5 años de experiencia
          creando aplicaciones web modernas y accesibles. Mi enfoque combina
          diseño centrado en el usuario con código limpio y mantenible.
        </p>

        <p className="text-muted-foreground text-lg leading-relaxed">
          Me especializo en construir interfaces intuitivas que no solo se ven
          bien, sino que también ofrecen una experiencia de usuario excepcional.
          Cada proyecto es una oportunidad para aprender y superar nuevos
          desafíos.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
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
