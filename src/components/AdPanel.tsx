import React from "react";
import { Card } from "./Card";

interface AdItem {
  id: string;
  title: string;
  urduTitle: string;
  description: string;
  urduDescription: string;
  image: string;
  link: string;
  displayDuration: string;
  category: string;
}

interface AdPanelProps {
  ads: AdItem[];
  language?: 'en' | 'ur';
}

export const AdPanel: React.FC<AdPanelProps> = ({ ads, language = 'en' }) => {
  const content = {
    en: "Community Updates",
    ur: "کمیونٹی اپڈیٹس"
  };

  return (
    <div className="w-full h-full">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{content[language]}</h2>
      <div className="space-y-4 scrollable-content overflow-y-auto h-full">
        {ads.map((ad) => (
          <Card key={ad.id} className="p-4 hover:scale-[1.02] transition-transform cursor-pointer">
            <div className="flex flex-col gap-3">
              {/* Ad Image */}
              <div className="w-full h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-2xl">📢</div>
              </div>
              
              {/* Ad Content */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {ad.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {language === 'ur' ? ad.urduTitle : ad.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {language === 'ur' ? ad.urduDescription : ad.description}
                </p>
                
                {language === 'ur' && (
                  <div className="text-sm text-gray-600 line-clamp-1 mb-3">
                    {ad.description}
                  </div>
                )}
                
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  {language === 'ur' ? 'مزید جانیں →' : 'Learn More →'}
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}; 