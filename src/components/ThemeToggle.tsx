
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-stone/50 dark:hover:bg-navy/30 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Moon className="w-5 h-5 text-navy dark:text-stone" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Sun className="w-5 h-5 text-navy dark:text-stone" />
        </motion.div>
      )}
    </button>
  );
}
