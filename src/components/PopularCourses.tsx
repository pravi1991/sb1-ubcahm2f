import React from 'react';
import { CourseCard } from './CourseCard';

export function PopularCourses() {
  const courses = [
    {
      title: "AI & Machine Learning Fundamentals",
      instructor: "Dr. Sarah Chen",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      rating: 4.8,
      students: 15420,
      duration: "12 weeks",
      price: 99.99
    },
    {
      title: "Quantum Computing for Beginners",
      instructor: "Prof. James Wilson",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
      rating: 4.9,
      students: 8750,
      duration: "8 weeks",
      price: 129.99
    },
    {
      title: "Blockchain Development Masterclass",
      instructor: "Alex Rivera",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
      rating: 4.7,
      students: 12300,
      duration: "10 weeks",
      price: 149.99
    }
  ];

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Popular Courses</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Explore our most popular courses and start your journey towards mastering future technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}