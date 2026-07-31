import { skills } from "@/constants/skills";
import { basePath } from "@/lib/base-path";

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-10 px-6 bg-black scroll-mt-14">
      <img
        src={`${basePath}/assets/ferns.png`}
        alt=""
        aria-hidden="true"
        className="
          absolute top-0 right-0
          h-1/4 md:h-2/3 object-contain object-top
           opacity-25
           pointer-events-none select-none z-0
"
      />
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
          Skills
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-balance">
          Technologies and abilities
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="backdrop-blur-sm rounded-xl p-6"
              translate="no"
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
      </div>
    </section>
  );
}
