import React from "react";
import { Card } from "./Card";

interface NewsItem {
  id: string;
  title: string;
  urduTitle: string;
  excerpt: string;
  urduExcerpt: string;
  date: string;
  image: string;
  category: string;
}

interface NewsPanelProps {
  news: NewsItem[];
  language?: 'en' | 'ur';
}

export const NewsPanel: React.FC<NewsPanelProps> = ({ news, language = 'en' }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const content = {
    en: "Latest News",
    ur: "تازہ ترین خبریں"
  };

  return (
    <div className="w-full h-full">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{content[language]}</h2>
      <div className="space-y-4 scrollable-content overflow-y-auto h-full">
        {news.map((item) => (
          <Card key={item.id} className="p-4 hover:scale-[1.02] transition-transform">
            <div className="flex gap-3">
              {/* News Image */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <div className="text-lg">📰</div>
              </div>
              
              {/* News Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">{formatDate(item.date)}</span>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 text-sm leading-tight">
                  {language === 'ur' ? item.urduTitle : item.title}
                </h3>
                
                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                  {language === 'ur' ? item.urduExcerpt : item.excerpt}
                </p>
                
                {language === 'ur' && (
                  <div className="mt-2 text-xs text-gray-500 line-clamp-1">
                    {item.excerpt}
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}; 