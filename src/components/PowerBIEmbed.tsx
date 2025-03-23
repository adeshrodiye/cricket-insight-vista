
import React, { useEffect, useRef } from 'react';

interface PowerBIEmbedProps {
  embedUrl: string;
  title: string;
  className?: string;
}

const PowerBIEmbed: React.FC<PowerBIEmbedProps> = ({ embedUrl, title, className = "" }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // This is where you'd typically initialize the Power BI JavaScript SDK
    // For now, we'll use a simple iframe approach
    
    const handleResize = () => {
      if (iframeRef.current) {
        // You can add responsive resize logic here if needed
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className={`dashboard-container ${className}`}>
      <iframe
        ref={iframeRef}
        title={title}
        src={embedUrl}
        frameBorder="0"
        className="w-full h-full"
        allowFullScreen
      />
    </div>
  );
};

export default PowerBIEmbed;
