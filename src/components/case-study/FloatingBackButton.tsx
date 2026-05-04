import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface FloatingBackButtonProps {
  to?: string;
  label?: string;
}

export default function FloatingBackButton({
  to = "/projects",
  label = "Back to projects",
}: FloatingBackButtonProps) {
  return (
    <div className="fixed bottom-8 left-8 z-10">
      <Link
        to={to}
        className="p-3 bg-white/80 dark:bg-darkbg/80 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-cyberborder/30 transition-colors"
        aria-label={label}
      >
        <ArrowLeft size={20} className="text-indigoPurple dark:text-cybertext" />
      </Link>
    </div>
  );
}
