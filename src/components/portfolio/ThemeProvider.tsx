"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Theme = "light" | "dark";
const storageKey = "portfolio-theme";
const ThemeContext = createContext<{
  theme: Theme | null;
  toggleTheme: () => void;
} | null>(null);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme | null>(null);
  const preference = useRef<Theme | null>(null);

  const applyTheme = useCallback((next: Theme) => {
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    setTheme(next);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const readPreference = () => {
      try {
        const saved = localStorage.getItem(storageKey);
        preference.current =
          saved === "light" || saved === "dark" ? saved : null;
      } catch {
        // Retain the current choice when browser storage is unavailable.
      }
      applyTheme(preference.current ?? (media.matches ? "dark" : "light"));
    };
    const onSystemChange = () => {
      if (preference.current === null)
        applyTheme(media.matches ? "dark" : "light");
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key === storageKey || event.key === null) readPreference();
    };
    readPreference();
    media.addEventListener("change", onSystemChange);
    window.addEventListener("storage", onStorage);
    window.addEventListener("pageshow", readPreference);
    return () => {
      media.removeEventListener("change", onSystemChange);
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("pageshow", readPreference);
    };
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    // Read the applied theme so a click during hydration cannot use stale state.
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    preference.current = next;
    applyTheme(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // The in-memory choice still works for this session.
    }
  }, [applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
