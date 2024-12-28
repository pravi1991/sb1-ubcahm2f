import React from 'react';
import { Rocket, Brain, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-black to-blue-950 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Learn from the Future
          </h1>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Master cutting-edge skills with our AI-powered learning platform. Join millions of learners worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transform hover:scale-105 transition">
              Get Started
            </button>
            <button className="bg-white/10 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transform hover:scale-105 transition">
              Browse Courses
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {[
            {
              icon: <Brain className="h-8 w-8" />,
              title: "AI-Powered Learning",
              description: "Personalized learning paths adapted to your goals and pace"
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Expert Instructors",
              description: "Learn from industry leaders and renowned experts"
            },
            {
              icon: <Rocket className="h-8 w-8" />,
              title: "Future-Ready Skills",
              description: "Master the technologies shaping tomorrow's world"
            }
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
              <div className="bg-blue-500/20 p-3 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-blue-200/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/2 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl" />
    </div>
  );
}