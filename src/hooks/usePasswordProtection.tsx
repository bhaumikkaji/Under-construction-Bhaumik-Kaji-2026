
import { useState, useEffect } from 'react';

export function usePasswordProtection() {
  const [isProtected, setIsProtected] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const correctPassword = 'Bhaumikkaji';

  useEffect(() => {
    // Check if previously authenticated
    const authenticated = sessionStorage.getItem('projectsAuthenticated');
    if (authenticated === 'true') {
      setIsProtected(false);
    }
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === correctPassword) {
      setIsProtected(false);
      setError('');
      sessionStorage.setItem('projectsAuthenticated', 'true');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const PasswordForm = () => {
    if (!isProtected) return null;
    
    return (
      <div className="password-overlay">
        <div className="max-w-md w-full p-8">
          <h2 className="text-3xl font-grotesk mb-6 text-navy">Password Protected</h2>
          <p className="mb-6 text-navy/80">
            This page is protected. Please enter the password to continue.
          </p>
          
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full p-3 border border-stone bg-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
                required
              />
            </div>
            
            {error && <p className="text-red-600 text-sm">{error}</p>}
            
            <button
              type="submit"
              className="w-full bg-navy text-white py-3 rounded-md hover:bg-navy/90 transition-colors"
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
