import React from "react";
import { cn } from "@/lib/utils";
import { Twitter, Youtube, Linkedin, MessageCircle } from "lucide-react";

type SocialType = "twitter" | "discord" | "linkedin" | "youtube" | "telegram";

interface SocialButtonProps {
  type: SocialType;
  url: string;
  className?: string;
}

export const SocialButton = ({ type, url, className }: SocialButtonProps) => {
  const getIcon = () => {
    switch (type) {
      case "twitter":
        return <Twitter size={24} />;
      case "discord":
        return <MessageCircle size={24} />;
      case "linkedin":
        return <Linkedin size={24} />;
      case "youtube":
        return <Youtube size={24} />;
      case "telegram":
        return <MessageCircle size={24} />;
      default:
        return <Twitter size={24} />;
    }
  };

  const getColorClass = () => {
    switch (type) {
      case "twitter":
        return "bg-[#1DA1F2] hover:bg-[#1a94df]";
      case "discord":
        return "bg-[#5865F2] hover:bg-[#4a56e3]";
      case "linkedin":
        return "bg-[#0A66C2] hover:bg-[#0959ab]";
      case "youtube":
        return "bg-[#FF0000] hover:bg-[#e50000]";
      case "telegram":
        return "bg-[#26A5E4] hover:bg-[#2195cd]";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  const getSocialName = () => {
    switch (type) {
      case "twitter":
        return "X";
      case "discord":
        return "Discord";
      case "linkedin":
        return "LinkedIn";
      case "youtube":
        return "YouTube";
      case "telegram":
        return "Telegram";
      default:
        return "";
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "social-button text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 gap-3",
        getColorClass(),
        className
      )}
    >
      {getIcon()}
      <span className="hidden sm:inline">{getSocialName()}</span>
    </a>
  );
};
