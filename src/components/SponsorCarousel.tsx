import React from "react";
import { Card } from "./Card";

interface Sponsor {
  id: string;
  name: string;
  urduName: string;
  logo: string;
  website: string;
  description: string;
  urduDescription: string;
}

interface SponsorCarouselProps {
  sponsors: Sponsor[];
}

export const SponsorCarousel: React.FC<SponsorCarouselProps> = ({ sponsors }) => {
  return (
    <div className="w-full py-8">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Our Sponsors</h2>
      
      <div className="relative overflow-hidden">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        
        {/* Scrolling container */}
        <div className="flex gap-6 animate-scroll-left">
          {/* Duplicate sponsors for seamless loop */}
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <Card key={`${sponsor.id}-${index}`} className="min-w-[200px] p-6 flex flex-col items-center hover:scale-105 transition-transform">
              {/* Sponsor Logo */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-2xl">🏢</div>
              </div>
              
              {/* Sponsor Name */}
              <h3 className="font-semibold text-gray-800 text-center mb-2 line-clamp-2">
                {sponsor.name}
              </h3>
              
              {/* Urdu Name */}
              <div className="urdu text-sm text-gray-600 text-center mb-3 line-clamp-1">
                {sponsor.urduName}
              </div>
              
              {/* Description */}
              <p className="text-xs text-gray-500 text-center line-clamp-2">
                {sponsor.description}
              </p>
              
              {/* Visit Link */}
              <button className="mt-4 text-xs text-blue-600 hover:text-blue-800 font-medium">
                Visit Website →
              </button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}; 