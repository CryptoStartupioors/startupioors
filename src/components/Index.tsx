import React from "react";
import { SocialButton } from "@/components/SocialButton";
import { FeatureCard } from "@/components/FeatureCard";
import Link from "next/link";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark bg-hero-pattern">
      <header className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center relative z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-red/20 to-brand-red/20 animate-gradient-x -z-10 opacity-50"></div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight crypto-heading py-4">
            Crypto Startupioors
          </h1>

          <p className="text-xl max-w-2xl mb-8 text-gray-300">
            A hub for connecting with like-minded builders, investors, and
            enthusiasts shaping the future of Web3 startups.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-4xl">
            <SocialButton type="twitter" url="https://x.com/Startupioors" />
            <SocialButton type="discord" url="https://discord.gg/SPRQfSzc" />
            <SocialButton
              type="linkedin"
              url="https://www.linkedin.com/in/crypto-startupioors-740066367/"
            />
            <SocialButton
              type="youtube"
              url="https://www.youtube.com/@CryptoStartupioors"
            />
            <SocialButton
              type="telegram"
              url="https://t.me/+Tr8iGVR72E5hMzk8"
              className="col-span-2 md:col-span-1"
            />
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-red/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-blue/20 rounded-full blur-xl"></div>
      </header>

      <section className="section">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="inline-block p-1 px-4 bg-white/5 rounded-full text-brand-red mb-4">
              💡 What we're about
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <FeatureCard
              title="Insights & Resources"
              description="Sharing insights, trends, and valuable resources for the Web3 ecosystem."
            />

            <FeatureCard
              title="Project Showcase"
              description="Showcasing projects, updates, and opportunities in the Web3 space."
            />

            <FeatureCard
              title="Networking"
              description="Connect with founders, developers, marketers, designers, and more."
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-brand-red/10 to-brand-blue/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto backdrop-blur-sm border border-white/5">
          <p className="text-xl md:text-2xl leading-relaxed">
            Whether you're building, investing, or just exploring the space—you
            belong here. Let's grow, collaborate, and accelerate the next wave
            of Web3 innovation together! 🔥
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="https://t.me/+Tr8iGVR72E5hMzk8"
              target="_blank"
              className="bg-brand-red hover:bg-brand-red/90 text-white py-3 px-8 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Join the Community
            </Link>
            <Link
              href="https://medium.com/@cryptostartupioors"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 text-white py-3 px-8 rounded-xl font-semibold transition-all duration-300 border border-white/20 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <footer className="mt-auto py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Crypto Startupioors. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
