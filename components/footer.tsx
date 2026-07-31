import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-1 sm:py-3 px-3 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground text-xs sm:text-sm flex items-center justify-center gap-1 leading-none">
          © All rights reserved | Made with{" "}
          <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-primary" /> by{" "}
          <a
            href="https://github.com/rociocarvajal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            Roo
          </a>
        </p>
      </div>
    </footer>
  );
}