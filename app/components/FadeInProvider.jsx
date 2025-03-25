"use client"; // Ensures it runs in the browser

import { useFadeInObserver } from "../hooks/useFadeIn";

export default function FadeInProvider({ children }) {
  useFadeInObserver(); // Apply global fade-in effect
  return <>{children}</>;
}