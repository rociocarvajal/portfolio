// Navigation.tsx
"use client";

import { navItems } from "@/constants/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Navigation() {
  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 md:bottom-auto md:top-0 md:left-0 md:right-0 md:translate-x-0 pointer-events-none">
      <div className="max-w-7xl mx-auto pt-6 flex justify-center">
        <div className="pointer-events-auto px-8 py-3 rounded-full border border-border bg-background/80 backdrop-blur-xl">
          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`flex items-center gap-2 transition-colors duration-300 text-sm ${
                      isActive
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile */}
          <ul className="flex md:hidden items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`flex items-center justify-center transition-colors duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon size={22} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
