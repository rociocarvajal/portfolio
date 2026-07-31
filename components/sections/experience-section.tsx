"use client";
import { useState } from "react";
import {
  Calendar,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { experienceItems } from "@/constants/experience";

export function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? experienceItems : experienceItems.slice(0, 2);

  return (
    <section id="experience" className="bg-black px-6 py-24 text-neutral-400">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Experience
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Where I've <span className="text-primary">worked</span>
          </h2>
        </div>

        <div className="relative flex flex-col">
          <div className="hidden md:block absolute left-34 top-2 bottom-2 w-px bg-white/10" />

          {visibleItems.map((item, index) => (
            <div key={item.title} className="group relative flex gap-0 pb-6">
              <div className="hidden md:flex items-center justify-end min-w-30 pr-8 pt-6">
                <span className="text-xs font-medium text-neutral-500 whitespace-nowrap text-right">
                  {item.period.split("—")[0].trim()}
                </span>
              </div>
              <div className="hidden md:flex items-center justify-center w-8 pt-6 relative z-10">
                <div className="size-2 rounded-full bg-primary/70 ring-primary/20 shrink-0 transition-colors group-hover:bg-primary" />
              </div>
              <div className="relative flex-1 ml-2 rounded-2xl border border-white/10 bg-neutral-950/60 p-6 transition-colors duration-300 hover:border-primary/50">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 rounded-2xl"
                  aria-label={item.title}
                />
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p
                      className="text-sm font-medium text-primary/90"
                      translate="no"
                    >
                      {item.company}
                    </p>
                  </div>
                  <ExternalLink className="size-4 shrink-0 text-neutral-600 transition-colors group-hover:text-primary" />
                </div>
                <div className="mb-4 flex flex-wrap gap-3 text-xs text-neutral-500">
                  <span className="md:hidden flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3.5" />
                    {item.location}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {experienceItems.length > 2 && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 rounded-full bg-neutral-950/60 border border-white/20 px-6 py-2.5 text-sm font-medium text-neutral-400 hover:border-primary/50 hover:text-primary transition-colors"
            >
              {showAll ? (
                <>
                  <ChevronUp className="size-4" />
                </>
              ) : (
                <>
                  <ChevronDown className="size-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
