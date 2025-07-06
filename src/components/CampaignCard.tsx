import React from "react";
import { Card } from "./Card";
import { GradientButton } from "./GradientButton";

interface Campaign {
  id: string;
  title: string;
  urduTitle: string;
  description: string;
  urduDescription: string;
  targetAmount: number;
  achievedAmount: number;
  deadline: string;
  image: string;
  topDonor: {
    name: string;
    avatar: string;
    amount: number;
  };
  status: string;
}

interface CampaignCardProps {
  campaign: Campaign;
  featured?: boolean;
}

export const CampaignCard: React.FC<CampaignCardProps> = ({ campaign, featured = false }) => {
  const progressPercentage = (campaign.achievedAmount / campaign.targetAmount) * 100;
  const daysLeft = Math.ceil((new Date(campaign.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <Card className={`${featured ? 'max-w-4xl' : 'min-w-[320px] max-w-[380px]'} p-6`}>
      <div className={`${featured ? 'flex gap-6' : 'flex flex-col'}`}>
        {/* Campaign Image */}
        <div className={`${featured ? 'w-1/3' : 'w-full'} h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center`}>
          <div className="text-4xl">🏗️</div>
        </div>

        {/* Campaign Content */}
        <div className={`${featured ? 'flex-1' : 'mt-4'}`}>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-800">{campaign.title}</h3>
            <span className="text-sm text-gray-500">{daysLeft} days left</span>
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-2">{campaign.description}</p>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress</span>
              <span>{progressPercentage.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>₹{campaign.achievedAmount.toLocaleString()}</span>
              <span>₹{campaign.targetAmount.toLocaleString()}</span>
            </div>
          </div>

          {/* Top Donor */}
          <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              {campaign.topDonor.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium">Top Donor</p>
              <p className="text-xs text-gray-600">{campaign.topDonor.name} - ₹{campaign.topDonor.amount.toLocaleString()}</p>
            </div>
          </div>

          <GradientButton accent className="w-full">Donate Now</GradientButton>
        </div>
      </div>
    </Card>
  );
}; 