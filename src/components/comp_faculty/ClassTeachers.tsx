'use client';

import React from 'react'; 
import "./faculty_gen.css";
import Link from "next/link";
import Image from "next/image";
import { classTeachers } from '@/lib/dummydata';

// --- Types ---
interface Teacher {
  id: number;
  name: string;
  batch: string;
  linkedin: string;
  gscholar: string;
  img: string;
}

// --- Component for Individual Card ---
const TeacherNode: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  return (
    <div className="faculty-card group hover:-translate-y-2 transition-transform duration-300">
      <div className="faculty-card__img-container flex items-center justify-center gap-2 lg:gap-0 lg:relative">
        <Image
          width={700}
          height={700}
          src={teacher.img || "/default-profile.png"}
          alt={teacher.name}
          className="w-28 h-28 rounded-full border-4 border-[#7a2fe3] object-cover hover:scale-105 hover:rotate-1 transition"
        />
        
        {/* Social Icons - Appearing on Hover (Desktop) */}
        <div className="faculty-card__info absolute left-full mx-1 lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:left-[110%] transition-all duration-300">
          {teacher.linkedin && (
            <Link
              href={teacher.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fa-brands fa-linkedin" />
            </Link>
          )}
          {teacher.gscholar && (
            <Link
              href={teacher.gscholar}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fa-brands fa-google-scholar" />
            </Link>
          )}
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-base md:text-lg font-bold text-gray-800">
          {teacher.name}
        </h3>
        <p className="text-sm font-bold text-[#7a2fe3] mt-1 uppercase tracking-wider">
          {teacher.batch}
        </p>
        <p className="text-xs text-gray-500 font-medium">Class Teacher</p>
      </div>
    </div>
  );
};

// --- Main Layout Component ---
export default function ClassTeachers() {
  const data = classTeachers?.teachers || [];

  return (
    <section className="faculty-container py-8 px-4 sm:px-6 lg:px-12 min-h-[60vh]">
      <h1 className="faculty-header text-center text-3xl sm:text-4xl font-bold mb-16 py-10 text-[#7a2fe3]">
        Batch Class Teachers
      </h1>

      {/* Grid Layout: Centers items and makes them responsive */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
        {data.map((teacher) => (
          <div 
            key={teacher.id} 
            className="w-full sm:w-[300px] flex justify-center"
          >
            <TeacherNode teacher={teacher} />
          </div>
        ))}
      </div>
    </section>
  );
}