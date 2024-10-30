// src/context/ThemeProvider.tsx
"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/store/useThemeStore";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useThemeStore();

  // Función para aplicar el tema
  const applyTheme = (theme: string) => {
    const root = window.document.documentElement;
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    root.classList.remove("light", "dark");
    document.body.style.backgroundColor = isDark
      ? "hsl(240 10% 3.9%)"
      : "white";

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.add("light");
    }
  };

  // Efecto para manejar el tema inicial y los cambios
  useEffect(() => {
    applyTheme(theme);

    // Listener para cambios en el tema del sistema
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => applyTheme("system");
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  return <>{children}</>;
}
