"use client";

import { useEffect, useState } from "react";

const texts = [
  "Hi world, I'm Rocio Carvajal!",
  "Full Stack Developer",
  "Sysadmin Student",
];

export function TypewriterText() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Escribir
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 80);
      } else {
        // Pausa antes de borrar
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      // Borrar
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="h-8 mb-6 flex items-center justify-center">
      <span translate="no" className="text-primary font-medium text-xl">
        {displayText}
        <span className="animate-pulse">| </span>
      </span>
    </div>
  );
}
