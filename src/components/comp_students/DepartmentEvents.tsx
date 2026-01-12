import Image from 'next/image';
import React from 'react';
import Heading from '../Common/heading/Heading';

export default function DepartmentEvents() {
  return (
    <section
      id="department-events-section"
      className="relative bg-gradient-to-br from-[#76801a] to-[#83257a] py-16 px-4 md:px-8 text-white overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center">
        <Heading
          title="Department Events"
          subtitle=""
          subtitleClass="chap-subheading"
          titleClass="chap-heading"
        />
        <div className="mt-3 text-xl sm:text-lg lg:text-2xl max-w-3xl mx-auto leading-relaxed">
          Highlighting the major events and initiatives organized by the Department of Information Technology
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg mt-12 px-4 py-8 sm:p-10 max-w-6xl mx-auto">
        <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#ffea00] uppercase mb-10 text-center">
          Faculty Development Program
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
          <div className="w-full grid lg:grid-cols-2 gap-6 md:gap-12">
            <Image
              src="/images/fdp (1).jpeg"
              alt="Faculty Development Program"
              width={1600}
              height={900}
              className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            />
            <Image
              src="/images/fdp (2).jpeg"
              alt="Faculty Development Program"
              width={1600}
              height={900}
              className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>

      {/* CTA Link */}
      {/* <div className="mt-10 text-center">
        <Link
          href="https://iemicdc.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-[#ffea00] to-[#ff7b00] text-[#222] font-bold text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-3.5 rounded-full uppercase tracking-wide shadow-md hover:scale-105 hover:from-[#ff7b00] hover:to-[#ffea00] hover:shadow-xl transition-all duration-300"
        >
          Visit IEM-ICDC Official Website
        </Link>
      </div> */}
    </section>
  );
}
