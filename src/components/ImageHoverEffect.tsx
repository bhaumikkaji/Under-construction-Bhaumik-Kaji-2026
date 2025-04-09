
import { useImageHoverEffect } from '@/hooks/useImageHoverEffect';
import { useEffect } from 'react';

export function ImageHoverEffect() {
  const { registerImages } = useImageHoverEffect();
  
  useEffect(() => {
    // Register all images when the component mounts
    registerImages();
  }, [registerImages]);
  
  // This is a utility component that doesn't render anything visible
  return null;
}
