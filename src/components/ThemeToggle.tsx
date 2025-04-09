
import { Moon, Sun, Computer } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="rounded-full hover:bg-stone/30 dark:hover:bg-cybertext/20 transition-colors"
      aria-label={`Current theme: ${theme} (click to toggle)`}
    >
      {theme === "system" ? (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Computer className="w-5 h-5 text-navy dark:text-cybertext" />
        </motion.div>
      ) : theme === "light" ? (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Sun className="w-5 h-5 text-navy dark:text-cybertext" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Moon className="w-5 h-5 text-navy dark:text-cybertext" />
        </motion.div>
      )}
    </Button>
  );
}
