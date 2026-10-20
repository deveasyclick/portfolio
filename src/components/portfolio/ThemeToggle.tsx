"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const storageKey = "portfolio-theme";
const changeEvent = "portfolio-theme-change";

function applyTheme(dark: boolean) {
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  window.dispatchEvent(new Event(changeEvent));
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const syncPreference = () => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(storageKey);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
    applyTheme(saved === "dark" || (saved !== "light" && media.matches));
  };
  const onStorage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) syncPreference();
  };
  window.addEventListener(changeEvent, onChange);
  window.addEventListener("storage", onStorage);
  media.addEventListener("change", syncPreference);
  return () => {
    window.removeEventListener(changeEvent, onChange);
    window.removeEventListener("storage", onStorage);
    media.removeEventListener("change", syncPreference);
  };
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme === "dark",
    () => false,
  );

  function toggleTheme() {
    const next = !dark;
    try {
      localStorage.setItem(storageKey, next ? "dark" : "light");
    } catch {
      // Keep an in-memory preference if storage is blocked.
    }
    applyTheme(next);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label="Dark mode"
      aria-pressed={dark}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
    >
      {dark ? (
        <Sun size={17} aria-hidden="true" />
      ) : (
        <Moon size={17} aria-hidden="true" />
      )}
      <span>{dark ? "Light" : "Dark"}</span>
    </button>
  );
}
