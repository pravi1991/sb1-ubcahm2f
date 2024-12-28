import React from 'react';
import { Search, Bell, User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">FutureLearn</span>
          </div>
          
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full bg-white/10 border border-white/20 rounded-full py-2 pl-4 pr-10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-white/50" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-white/70 hover:text-white">
              <Bell className="h-6 w-6" />
            </button>
            <button className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 text-white hover:bg-white/20">
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}