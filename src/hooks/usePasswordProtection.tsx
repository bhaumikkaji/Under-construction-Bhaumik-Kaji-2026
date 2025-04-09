
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function usePasswordProtection() {
  const [isProtected, setIsProtected] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const correctPassword = 'Bhaumikkaji';
  const navigate = useNavigate();

  useEffect(() => {
    // Check if previously authenticated
    const authenticated = sessionStorage.getItem('projectsAuthenticated');
    if (authenticated === 'true') {
      setIsProtected(false);
    }
  }, []);

  // Focus the input field when there's an error
  useEffect(() => {
    if (error && inputRef.current) {
      inputRef.current.focus();
    }
  }, [error]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === correctPassword) {
      setIsProtected(false);
      setError('');
      sessionStorage.setItem('projectsAuthenticated', 'true');
    } else {
      setError('Incorrect password. Please try again.');
      // Maintain focus after showing error
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const PasswordForm = () => {
    if (!isProtected) return null;
    
    return (
      <div className="password-overlay">
        {/* Back button */}
        <div className="fixed top-8 left-8 z-10">
          <button 
            onClick={() => navigate('/')}
            className="p-3 bg-white/80 dark:bg-darkbg/80 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-cyberborder/30 transition-colors"
            aria-label="Back to home"
          >
            <ArrowLeft size={20} className="text-navy dark:text-cybertext" />
          </button>
        </div>
        
        <div className="max-w-md w-full p-8">
          <h2 className="text-3xl font-grotesk mb-6 text-navy dark:text-cybertext">Password Protected</h2>
          <p className="mb-6 text-navy/80 dark:text-cybertext/80">
            This page is protected. Please enter the password to continue.
          </p>
          
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full p-3 border border-stone dark:border-cyberborder bg-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-navy dark:focus:ring-cybertext"
                required
                ref={inputRef}
                // Focus the input when it's rendered
                autoFocus
              />
            </div>
            
            {error && <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>}
            
            <button
              type="submit"
              className="w-full bg-navy dark:bg-cyberborder/30 text-white dark:text-cybertext py-3 rounded-md hover:bg-navy/90 dark:hover:bg-cyberborder/50 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return { isProtected, PasswordForm };
}
