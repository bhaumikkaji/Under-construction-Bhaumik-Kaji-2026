
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem("theme") as Theme;
    // Check user preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme || (prefersDark ? "dark" : "light");
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove the old theme class and add the new theme class
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    
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
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
