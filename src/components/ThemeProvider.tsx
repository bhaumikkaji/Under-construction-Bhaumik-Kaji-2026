
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem("theme") as Theme;
    // If there's a saved theme, use it, otherwise default to "system"
    return savedTheme || "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  // Effect to handle system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      if (theme === "system") {
        setResolvedTheme(mediaQuery.matches ? "dark" : "light");
      }
    };
    
    // Initial check
    handleChange();
    
    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);

  // Effect to update resolved theme when explicit theme changes
  useEffect(() => {
    if (theme === "dark") {
      setResolvedTheme("dark");
    } else if (theme === "light") {
      setResolvedTheme("light");
    } else if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setResolvedTheme(prefersDark ? "dark" : "light");
    }
  }, [theme]);

  // Effect to apply theme changes to document
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove the old theme class and add the new theme class
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
    
    // Save the theme preference to localStorage
    localStorage.setItem("theme", theme);
    
    // Apply transition styles for smoother theme switching
    const applyTransition = () => {
      document.body.style.transition = "background-color 0.3s ease, color 0.3s ease";
      document.body.querySelectorAll("*").forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.transition = "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease";
        }
      });
    };
    
    // Cleanup function to remove transitions after they complete
    const removeTransition = () => {
      setTimeout(() => {
        document.body.style.transition = "";
        document.body.querySelectorAll("*").forEach((element) => {
          if (element instanceof HTMLElement) {
            element.style.transition = "";
          }
        });
      }, 300);
    };
    
    applyTransition();
    removeTransition();
  }, [resolvedTheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "light") return "dark";
      if (prevTheme === "dark") return "system";
      return "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
