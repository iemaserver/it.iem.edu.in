import React from 'react';
import Heading from '../Common/heading/Heading';
import Link from 'next/link';
import Image from 'next/image';

export default function HackOasis() {
    return (
        <section
            id="hackoasis-section"
            className="relative w-full overflow-hidden bg-[#240a1e] py-20"
        >
            {/* Background Decorative Gradients - Adds depth */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#983b76] rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#ffea00] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <Heading
                        title="IEM HackOasis"
                        subtitle="The Flagship Hackathon"
                        subtitleClass="text-[#ffea00] font-bold tracking-widest uppercase text-sm mb-2"
                        titleClass="text-4xl md:text-5xl font-extrabold text-white mb-4"
                    />
                    <div className="w-24 h-1 bg-gradient-to-r from-[#ffea00] to-[#983b76] mx-auto rounded-full mb-6"></div>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Where innovation meets execution. The annual technical extravaganza of the Department of Information Technology.
                    </p>
                </div>

                {/* --- HACKOASIS 1.0 SECTION (Text Left, Images Right) --- */}
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
                    {/* Text Content */}
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-[#ffea00]/30 transition-all duration-300">
                            {/* Decorative number */}
                            <span className="absolute -right-4 -top-4 text-9xl font-bold text-white/5 select-none z-0">1.0</span>
                            
                            <div className="relative z-10">
                                <div className="inline-block px-4 py-1 rounded-full bg-[#983b76]/30 border border-[#983b76] text-[#ffea00] text-sm font-semibold mb-4">
                                    📅 Sept 28, 2024
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    The Inception
                                </h3>
                                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                    HackOasis 1.0 marked the beginning of a legacy. It was the spark that ignited the coding culture within the department. 
                                    Focused on <strong>foundational innovation</strong>, this 9-hour sprint brought intra-college teams together to solve core problems in Web Development and Automation.
                                </p>
                                <p className="text-gray-400 text-base">
                                    It wasn&apos;t just about winning; it was about setting the precedent for collaboration, mentorship, and the spirit of &quot;building in public.&quot;
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="lg:w-1/2 order-1 lg:order-2 grid grid-cols-2 gap-4">
                        <div className="space-y-4 mt-8">
                            <Image
                                src="/images/bg_1.jpg"
                                alt="HackOasis 1.0 Highlights"
                                width={600} height={400}
                                className="rounded-2xl object-cover h-48 w-full shadow-lg hover:scale-105 transition-transform duration-500"
                            />
                            <Image
                                src="/images/hackoasis1 (1).jpeg"
                                alt="HackOasis 1.0 Team"
                                width={600} height={400}
                                className="rounded-2xl object-cover h-64 w-full shadow-lg hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="space-y-4">
                            <Image
                                src="/images/hackoasis1 (2).jpeg"
                                alt="HackOasis 1.0 Event"
                                width={600} height={400}
                                className="rounded-2xl object-cover h-64 w-full shadow-lg hover:scale-105 transition-transform duration-500"
                            />
                            <Image
                                src="/images/BANNER_FINAL_2_page-0001.jpg"
                                alt="HackOasis 1.0 Banner"
                                width={600} height={400}
                                className="rounded-2xl object-cover h-48 w-full shadow-lg hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>

                {/* --- HACKOASIS 2.0 SECTION (Images Left, Text Right) --- */}
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
                    {/* Image Grid - Reversed Layout */}
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                         <div className="space-y-4">
                            <Image
                                src="/images/hackoasis2 (1).jpg"
                                alt="HackOasis 2.0 Coding"
                                width={600} height={400}
                                className="rounded-2xl object-cover h-64 w-full shadow-lg hover:scale-105 transition-transform duration-500"
                            />
                            <Image
                                src="/images/hackoasis2 (2).JPG"
                                alt="HackOasis 2.0 Mentors"
                                width={600} height={400}
                                className="rounded-2xl object-cover h-48 w-full shadow-lg hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="space-y-4 mt-8">
                            <Image
                                src="/images/hackoasis2 (3).JPG"
                                alt="HackOasis 2.0 Prize"
                                width={600} height={400}
                                className="rounded-2xl object-cover h-48 w-full shadow-lg hover:scale-105 transition-transform duration-500"
                            />
                            <Image
                                src="/images/BANNER_FINAL_2_page-0001.jpg"
                                alt="HackOasis 2.0 Banner"
                                width={600} height={400}
                                className="rounded-2xl object-cover h-64 w-full shadow-lg hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <div className="bg-gradient-to-br from-[#983b76]/20 to-[#3c1c33]/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-[#ffea00]/30 transition-all duration-300">
                             {/* Decorative number */}
                             <span className="absolute -right-4 -top-4 text-9xl font-bold text-white/5 select-none z-0">2.0</span>

                            <div className="relative z-10">
                                <div className="inline-block px-4 py-1 rounded-full bg-[#ffea00]/20 border border-[#ffea00] text-[#ffea00] text-sm font-semibold mb-4">
                                    📅 Sept 20, 2025
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    The Evolution
                                </h3>
                                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                    HackOasis 2.0 raised the bar. Moving beyond the basics, this edition embraced <strong>Generative AI, AR/VR, and Cybersecurity</strong>. 
                                    We opened the doors to inter-college teams, resulting in higher stakes and more complex, market-ready prototypes.
                                </p>
                                <p className="text-gray-400 text-base">
                                    With surprise problem statements revealed on the spot, 2.0 tested adaptability as much as coding skill. It wasn&apos;t just a hackathon; it was a glimpse into the future of tech.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-20">
                     <Link
                        href="https://iemhackoasis.iem.edu.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-[#983b76] font-lg rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffea00] hover:bg-[#b04489]"
                    >
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                        <span className="relative flex items-center gap-2">
                            VISIT OFFICIAL WEBSITE
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}