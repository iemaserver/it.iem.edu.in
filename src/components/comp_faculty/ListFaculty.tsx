'use client';

import React from 'react';
import { itfaculty } from "@/lib/dummydata";
import "./faculty_gen.css";
import Link from "next/link";
import Image from "next/image";

// --- Types ---
interface FacultyMember {
  id: string | number;
  title: string;
  desg: string;
  img?: string;
  linkedin?: string;
  gscholar?: string;
}

interface FacultyGroup {
  hod?: FacultyMember[];
  prof?: FacultyMember[];
  asso_prof?: FacultyMember[];
  assi_prof?: FacultyMember[];
  faculty?: FacultyMember[]; // Fallback for legacy structure if needed
}

// --- Components ---

const FacultyNode: React.FC<{ faculty: FacultyMember }> = ({ faculty }) => {
  const isHOD = faculty.desg.toLowerCase().includes("head");

  return (
    <div className={`faculty-card group ${isHOD ? "hod-card" : ""}`}>
      <div className="faculty-card__img-container flex items-center justify-center gap-2 lg:gap-0 lg:relative">
        <Image
          width={700}
          height={700}
          src={faculty.img || "/default-profile.png"}
          alt={faculty.title}
          className="w-28 h-28 rounded-full border-4 border-[#7a2fe3] object-cover hover:scale-105 hover:rotate-1 transition"
        />
        {/* Social Icons - Hover Effect */}
        <div className="faculty-card__info absolute left-full mx-1 lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:left-[110%] transition-all duration-300">
          {faculty.linkedin && (
            <Link
              href={faculty.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fa-brands fa-linkedin" />
            </Link>
          )}
          {faculty.gscholar && (
            <Link
              href={faculty.gscholar}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fa-brands fa-google-scholar" />
            </Link>
          )}
        </div>
      </div>
      <div className="mt-2 text-center">
        <h3 className="text-base md:text-lg font-bold text-gray-800">
          {faculty.title}
        </h3>
        <p className="text-sm text-gray-600 font-medium">{faculty.desg}</p>
      </div>
    </div>
  );
};

const FacultyTree: React.FC<{ facultyData: FacultyGroup }> = ({ facultyData }) => {
  // Check if data exists
  const hasData = facultyData && (
    (facultyData.hod && facultyData.hod.length > 0) ||
    (facultyData.prof && facultyData.prof.length > 0) ||
    (facultyData.asso_prof && facultyData.asso_prof.length > 0) ||
    (facultyData.assi_prof && facultyData.assi_prof.length > 0)
  );

  if (!hasData) {
    return <div className="text-center text-gray-500">No faculty data available.</div>;
  }

  return (
    <div className="faculty-tree px-4 sm:px-6 md:px-8" id="faculty-section">
      
      {/* 1. Head of Department */}
      {facultyData.hod && facultyData.hod.length > 0 && (
        <div className="tree-group hod-group mb-8">
          <h2 className="text-xl font-semibold text-center mt-4 text-[#7a2fe3]">
            Head of Department
          </h2>
          <div className="tree-row flex flex-wrap justify-center gap-6">
            {facultyData.hod.map((hod) => (
              <div key={hod.id} className="tree-node">
                <FacultyNode faculty={hod} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Professors */}
      {facultyData.prof && facultyData.prof.length > 0 && (
        <div className="tree-group professor-group mb-8">
          <h2 className="text-xl font-semibold text-center mt-4 text-[#2196f3]">
            Professors
          </h2>
          <div className="tree-row flex flex-wrap justify-center gap-6">
            {facultyData.prof.map((prof) => (
              <div key={prof.id} className="tree-node">
                <FacultyNode faculty={prof} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Associate Professors */}
      {facultyData.asso_prof && facultyData.asso_prof.length > 0 && (
        <div className="tree-group associate-prof-group mb-8">
          <h2 className="text-xl font-semibold text-center mt-4 text-[#4caf50]">
            Associate Professors
          </h2>
          <div className="tree-row flex flex-wrap justify-center gap-6">
            {facultyData.asso_prof.map((asso) => (
              <div key={asso.id} className="tree-node">
                <FacultyNode faculty={asso} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Assistant Professors */}
      {facultyData.assi_prof && facultyData.assi_prof.length > 0 && (
        <div className="tree-group assistant-prof-group-1 mb-8">
          <h2 className="text-xl font-semibold text-center mt-4 text-[#ff9800]">
            Assistant Professors
          </h2>
          <div className="tree-row flex flex-wrap justify-center gap-6">
            {facultyData.assi_prof.map((assi) => (
              <div key={assi.id} className="tree-node">
                <FacultyNode faculty={assi} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function ListFaculty() {
  // Use the itfaculty data imported from dummydata
  const facultyData: FacultyGroup = itfaculty;

  return (
    <section className="faculty-container py-8 px-4 sm:px-6 lg:px-12">
      <h1 className="faculty-header text-center text-3xl sm:text-4xl font-bold mb-12 py-10 text-[#7a2fe3]">
        IT Faculty List
      </h1>
      <FacultyTree facultyData={facultyData} />
    </section>
  );
}