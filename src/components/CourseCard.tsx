import React from 'react';
import { Clock, Star, Users } from 'lucide-react';

interface CourseCardProps {
  title: string;
  instructor: string;
  image: string;
  rating: number;
  students: number;
  duration: string;
  price: number;
}

export function CourseCard({ title, instructor, image, rating, students, duration, price }: CourseCardProps) {
  return (
    <div className="bg-white/5 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-blue-200 mb-4">{instructor}</p>
        
        <div className="flex items-center space-x-4 text-sm text-blue-200 mb-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{students.toLocaleString()} students</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">${price}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}