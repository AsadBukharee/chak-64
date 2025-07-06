import React from "react";
import { Card } from "./Card";

interface Comment {
  id: string;
  user: string;
  avatar: string;
  content: string;
  urduContent: string;
  timestamp: string;
}

interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  urduContent: string;
  image: string | null;
  timestamp: string;
  likes: number;
  dislikes: number;
  shares: number;
  comments: Comment[];
}

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInHours = Math.floor((now.getTime() - postTime.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  return (
    <Card className="p-6">
      {/* User Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
          {post.user.name.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-800">{post.user.name}</h3>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {post.user.role}
            </span>
          </div>
          <p className="text-sm text-gray-500">{formatTimeAgo(post.timestamp)}</p>
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-gray-800 mb-3">{post.content}</p>
        <div className="urdu text-gray-700 mb-3">{post.urduContent}</div>
        
        {post.image && (
          <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4">
            <div className="text-3xl">📷</div>
          </div>
        )}
      </div>

      {/* Interaction Stats */}
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b">
        <div className="flex items-center gap-4">
          <span>{post.likes} likes</span>
          <span>{post.comments.length} comments</span>
          <span>{post.shares} shares</span>
        </div>
        {post.dislikes > 0 && <span>{post.dislikes} dislikes</span>}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-4">
        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
          <span>👍</span>
          <span>Like</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
          <span>💬</span>
          <span>Comment</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
          <span>📤</span>
          <span>Share</span>
        </button>
      </div>

      {/* Comments */}
      {post.comments.length > 0 && (
        <div className="space-y-3">
          {post.comments.map((comment) => (
            <div key={comment.id} className="flex gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {comment.user.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">{comment.user}</span>
                  <span className="text-xs text-gray-500">{formatTimeAgo(comment.timestamp)}</span>
                </div>
                <p className="text-sm text-gray-700">{comment.content}</p>
                <div className="urdu text-sm text-gray-600 mt-1">{comment.urduContent}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}; 