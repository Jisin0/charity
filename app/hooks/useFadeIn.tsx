"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Detect route changes

export function useFadeInObserver() {
  const pathname = usePathname(); // Current route

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = document.querySelectorAll(".fade-in");

    if (!sections.length) return;

    // Reset visibility state to trigger animation again
    sections.forEach(section => section.classList.remove("visible"));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]); // Run effect on every route change
}