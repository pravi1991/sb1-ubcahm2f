import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PopularCourses } from './components/PopularCourses';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <PopularCourses />
    </div>
  );
}

export default App;