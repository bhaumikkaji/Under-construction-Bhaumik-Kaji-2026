
import { useEffect, useRef } from 'react';

export const useImageHoverEffect = () => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  
  // Function to register all images with the hover effect
  const registerImages = () => {
    // Find all images that should have this effect
    const images = document.querySelectorAll('.hover-effect-image');
    imageRefs.current = Array.from(images as NodeListOf<HTMLImageElement>);
  };
  
  useEffect(() => {
    registerImages();
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      imageRefs.current.forEach(image => {
        if (!image) return;
        
        // Get image position
        const rect = image.getBoundingClientRect();
        const imageX = rect.left + rect.width / 2;
        const imageY = rect.top + rect.height / 2;
        
        // Calculate distance between mouse and image center
        const distanceX = (clientX - imageX) / 20; // Reduced for subtlety 
        const distanceY = (clientY - imageY) / 20;
        
        // Calculate proximity (closer = stronger effect)
        const proximity = Math.sqrt(Math.pow(clientX - imageX, 2) + Math.pow(clientY - imageY, 2));
        const maxDistance = 300; // Maximum distance to apply effect
        
        if (proximity < maxDistance) {
          // Scale effect based on proximity
          const scale = 1 - (proximity / maxDistance);
          const moveX = distanceX * scale * -0.5; // Negative to move opposite to cursor
          const moveY = distanceY * scale * -0.5;
          
          // Apply transform with smooth transition
          image.style.transform = `translate(${moveX}px, ${moveY}px)`;
          image.style.transition = `transform 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000)`;
        } else {
          // Reset if mouse is too far
          image.style.transform = 'translate(0px, 0px)';
        }
      });
    };
    
    const handleMouseLeave = () => {
      // Reset all images when mouse leaves
      imageRefs.current.forEach(image => {
        if (!image) return;
        image.style.transform = 'translate(0px, 0px)';
      });
    };
    
    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Re-register images when DOM changes
    const observer = new MutationObserver(() => {
      registerImages();
    });
    
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);
  
  return { registerImages };
};
