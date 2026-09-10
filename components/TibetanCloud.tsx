import React from 'react';

interface TibetanCloudProps {
  className?: string;
  variant?: 'hero-left' | 'hero-right' | 'top-cloud' | 'banner' | 'cluster' | 'wisp' | 'hero';
}

export const TibetanCloud: React.FC<TibetanCloudProps> = ({ 
  className = "w-64 h-64 pointer-events-none select-none", 
  variant = 'hero-left' 
}) => {
  // Vibrant Tibetan Thangka Full-Color Cluster - Left Side (Bottom Left Corner Cluster)
  if (variant === 'hero-left') {
    return (
      <svg 
        className={className} 
        viewBox="0 0 550 450" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g stroke="#1e293b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* Bottom Gold Lobe */}
          <path 
            d="M 140 380 C 70 380, 50 320, 90 270 C 130 220, 210 230, 240 280 C 270 340, 200 400, 140 380 Z" 
            fill="#f59e0b" 
          />
          <path d="M 120 320 C 100 320, 95 300, 110 290 C 125 280, 145 295, 135 310 C 125 325, 110 315, 115 308" fill="none" stroke="#78350f" strokeWidth="2.5" />

          {/* Crimson / Coral Red Lower Swirl */}
          <path 
            d="M 220 390 C 160 410, 140 330, 190 280 C 230 230, 310 240, 340 300 C 360 360, 280 410, 220 390 Z" 
            fill="#e11d48" 
          />
          <path d="M 240 340 C 220 340, 210 315, 230 300 C 250 285, 275 305, 260 325 C 245 345, 225 330, 232 320" fill="none" stroke="#881337" strokeWidth="2.5" />

          {/* Emerald / Jade Green Top-Left Lobe */}
          <path 
            d="M 180 240 C 110 240, 80 170, 130 110 C 180 50, 270 60, 300 130 C 320 190, 250 250, 180 240 Z" 
            fill="#10b981" 
          />
          <path d="M 180 160 C 160 160, 150 135, 170 120 C 190 105, 215 125, 200 145 C 185 165, 165 150, 172 140" fill="none" stroke="#064e3b" strokeWidth="2.5" />

          {/* Sky Blue / Teal Center Swirl Lobe */}
          <path 
            d="M 280 280 C 220 280, 210 200, 260 150 C 310 100, 390 110, 410 180 C 430 250, 340 300, 280 280 Z" 
            fill="#0284c7" 
          />
          <path d="M 310 200 C 290 200, 280 175, 300 160 C 320 145, 345 165, 330 185 C 315 205, 295 190, 302 180" fill="none" stroke="#0c4a6e" strokeWidth="2.5" />

          {/* Light Pink Soft Accent Lobe */}
          <path 
            d="M 110 280 C 60 280, 40 230, 70 190 C 100 150, 160 160, 175 200 C 185 240, 140 285, 110 280 Z" 
            fill="#fda4af" 
          />

          {/* Trailing Green Bottom Wisp */}
          <path 
            d="M 320 370 C 370 380, 430 360, 470 320 C 430 370, 370 410, 290 410 Z" 
            fill="#34d399" 
          />
          <path 
            d="M 160 410 C 220 440, 300 440, 360 410 C 290 450, 210 445, 140 410 Z" 
            fill="#f59e0b" 
          />
        </g>
      </svg>
    );
  }

  // Vibrant Tibetan Thangka Full-Color Cluster - Right Side (Bottom Right Corner Cluster)
  if (variant === 'hero-right') {
    return (
      <svg 
        className={className} 
        viewBox="0 0 550 450" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g stroke="#1e293b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* Trailing Saffron Gold Tail Wisp on Left */}
          <path 
            d="M 230 370 C 180 380, 120 360, 80 320 C 120 370, 180 410, 260 410 Z" 
            fill="#f59e0b" 
          />

          {/* Bottom Crimson Lobe */}
          <path 
            d="M 410 380 C 480 380, 500 320, 460 270 C 420 220, 340 230, 310 280 C 280 340, 350 400, 410 380 Z" 
            fill="#e11d48" 
          />
          <path d="M 430 320 C 450 320, 455 300, 440 290 C 425 280, 405 295, 415 310 C 425 325, 440 315, 435 308" fill="none" stroke="#881337" strokeWidth="2.5" />

          {/* Coral Pink Lower Lobe */}
          <path 
            d="M 330 390 C 390 410, 410 330, 360 280 C 320 230, 240 240, 210 300 C 190 360, 270 410, 330 390 Z" 
            fill="#fb7185" 
          />
          <path d="M 310 340 C 330 340, 340 315, 320 300 C 300 285, 275 305, 290 325 C 305 345, 325 330, 318 320" fill="none" stroke="#9f1239" strokeWidth="2.5" />

          {/* Sky Blue Top Right Lobe */}
          <path 
            d="M 370 240 C 440 240, 470 170, 420 110 C 370 50, 280 60, 250 130 C 230 190, 300 250, 370 240 Z" 
            fill="#38bdf8" 
          />
          <path d="M 370 160 C 390 160, 400 135, 380 120 C 360 105, 335 125, 350 145 C 365 165, 385 150, 378 140" fill="none" stroke="#0369a1" strokeWidth="2.5" />

          {/* Deep Cyan / Navy Center Swirl */}
          <path 
            d="M 270 280 C 330 280, 340 200, 290 150 C 240 100, 160 110, 140 180 C 120 250, 210 300, 270 280 Z" 
            fill="#0284c7" 
          />
          <path d="M 240 200 C 260 200, 270 175, 250 160 C 230 145, 205 165, 220 185 C 235 205, 255 190, 248 180" fill="none" stroke="#0c4a6e" strokeWidth="2.5" />

          {/* Emerald Green Accent Lobe */}
          <path 
            d="M 440 280 C 490 280, 510 230, 480 190 C 450 150, 390 160, 375 200 C 365 240, 410 285, 440 280 Z" 
            fill="#10b981" 
          />
          <path d="M 440 230 C 455 230, 460 215, 450 205" fill="none" stroke="#064e3b" strokeWidth="2" />
        </g>
      </svg>
    );
  }

  // Smaller Top Cloud Motif
  if (variant === 'top-cloud') {
    return (
      <svg 
        className={className} 
        viewBox="0 0 320 220" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Top Blue Lobe */}
          <path d="M 160 140 C 110 140, 90 90, 130 50 C 170 10, 230 20, 250 70 C 270 120, 210 150, 160 140 Z" fill="#38bdf8" />
          <path d="M 170 85 C 150 85, 145 70, 160 60 C 175 50, 190 65, 180 75" fill="none" stroke="#0369a1" strokeWidth="2" />
          {/* Lower Gold & Crimson Lobes */}
          <path d="M 110 150 C 70 150, 55 115, 85 85 C 115 55, 165 70, 155 110 Z" fill="#f59e0b" />
          <path d="M 210 150 C 250 150, 265 115, 235 85 C 205 55, 155 70, 165 110 Z" fill="#e11d48" />
        </g>
      </svg>
    );
  }

  // Default Banner / Cluster Fallback
  return (
    <svg 
      className={className} 
      viewBox="0 0 500 320" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 140 210 C 80 210, 60 160, 100 110 C 130 60, 210 50, 250 90 C 290 50, 370 60, 400 110 C 440 160, 410 210, 350 210 C 290 250, 200 250, 140 210 Z" fill="#0284c7" fillOpacity="0.8" />
        <path d="M 180 170 C 140 170, 120 130, 150 95 C 180 60, 240 70, 260 105 Z" fill="#f59e0b" fillOpacity="0.85" />
        <path d="M 320 170 C 360 170, 380 130, 350 95 C 320 60, 260 70, 240 105 Z" fill="#e11d48" fillOpacity="0.85" />
      </g>
    </svg>
  );
};


