"use client";

import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/typewriter-text";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-black min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-20"
    >
      <img
        src="/assets/lycorisradiata.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1/2 md:h-full object-contain object-bottom opacity-30 md:opacity-30 pointer-events-none select-none z-0"
      />
      <div className="max-w-4xl mx-auto text-center -translate-y-20">
        <TypewriterText />

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-balance">
          Building{" "}
          <span className="text-primary/80 italic font-normal">modern webs</span>{" "}
          with thoughtful design and{" "}
          <span className="text-primary italic font-normal">
            scalable solutions
          </span>{" "}
        </h1>

        <p className="mt-4 text-muted-foreground text-base max-w-xl mx-auto leading-relaxed text-balance">
          Web developer passionate about building intuitive interfaces, reliable
          systems, and scalable applications. Experienced in frontend and backend
          development, databases, and creating solutions focused on performance, usability, and maintainability.
        </p>
        <div className="relative mt-6 flex justify-center">
          <div className="flex gap-3 relative z-10">
            <Button
              variant="outline"
              size="lg"
              className="text-foreground border border-white/20 hover:border-primary hover:bg-secondary px-5"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="lg"
                  className="text-foreground border border-white/20 hover:border-primary hover:bg-secondary px-5 gap-2"
                >
                  Resume
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="min-w-[180px] bg-black border border-white/20"
              >
                <DropdownMenuItem asChild>
                  <a
                    href="/resume/rociocarvajal-en.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    English (EN)
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="/resume/rociocarvajal-es.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spanish (ES)
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4 md:top-auto md:bottom-10 md:right-10 flex gap-3">
        <a
          href="https://github.com/rociocarvajal"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => console.log("GitHub click")}
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 hover:border-primary hover:bg-secondary  transition-colors"
        >
          <IconBrandGithub
            size={22}
            className="text-muted-foreground group-hover:text-primary transition-colors"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/rociocarvajaldev/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 hover:border-primary hover:bg-secondary transition-colors"
        >
          <IconBrandLinkedin
            size={22}
            className="text-muted-foreground group-hover:text-primary transition-colors"
          />
        </a>
      </div>
    </section>
  );
}
