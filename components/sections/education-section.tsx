import { Calendar, MapPin } from "lucide-react";
import { educationItems } from "@/constants/education";

export function EducationSection() {
  return (
    <section id="education" className="bg-black px-6 py-24 text-neutral-400">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Education
          </p>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-5xl">
            My learning path
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {educationItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.degree}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-neutral-950/60 p-6 transition-colors duration-300 hover:border-primary/50"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 rounded-2xl"
                  aria-label={item.degree}
                />
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl text-white transition-colors group-hover:text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
                    <Calendar className="size-3.5" aria-hidden="true" />
                    {item.period}
                  </span>
                </div>
                <h3 className="text-pretty text-lg font-semibold text-white">
                  {item.degree}
                </h3>
                <p className="mt-1 font-medium text-primary/90">
                  {item.institution}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-neutral-500">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {item.location}
                </p>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-neutral-400">
                  {item.description}
                </p>
                {/* <div className="mt-5 flex flex-wrap gap-2 pt-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
