
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-offwhite dark:bg-darkbg">
      <div className="text-center">
        <motion.h1 
          className="text-8xl md:text-9xl font-grotesk text-navy dark:text-cybertext mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-navy/80 dark:text-cybertext mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Page not found
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-navy text-white dark:bg-darkbg dark:border dark:border-cybertext dark:text-cybertext rounded-md hover:bg-navy/90 dark:hover:bg-cybertext/10 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
