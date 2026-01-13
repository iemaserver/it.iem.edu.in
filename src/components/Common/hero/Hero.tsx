'use client';

import React, { useEffect, useState } from 'react';
import Heading from '../heading/Heading';
import './Hero.css';
import Carousel, { CarouselItem } from '@/components/Components/Carousel/Carousel';
import Link from 'next/link';

type ImageItem = {
  id: number;
  img: string;
  title: string;
};

export default function Hero() {
  const images: ImageItem[] = [
    { id: 1, img: '/images/ericsson_visit.jpeg', title: 'Industrial Visit To Ericsson' },
    { id: 2, img: '/images/webel_visit.jpeg', title: 'Industrial Visit To Webel' },
    { id: 3, img: '/images/Chandan_karfa_talk (2).jpeg', title: 'Machine Learning in EDA by Dr. Chandan Karfa' },
    { id: 4, img: '/images/hackoasis2 (3).JPG', title: 'IEM HACKOASIS 2.0' },
    { id: 5, img: '/images/bg_1.jpg', title: 'IEM HACKOASIS 1.0' },
    
  ];

  const carouselItems: CarouselItem[] = images.map((image) => ({
    id: image.id,
    title: image.title,
    description: '',
    image: image.img,
  }));

  // Default start width
  const [carouselWidth, setCarouselWidth] = useState(360);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      // Updated Logic: Reduced sizes for Large screens to match the text box
      if (width >= 1280) {
        setCarouselWidth(550); // XL: 550px matches the visual weight of the left box
      } else if (width >= 1024) {
        setCarouselWidth(450); // LG: 450px fits cleanly in the split layout
      } else if (width >= 768) {
        setCarouselWidth(450); // MD
      } else if (width >= 640) {
        setCarouselWidth(400); // SM
      } else {
        setCarouselWidth(340); // Mobile
      }
    };

    handleResize(); // set on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="hero relative text-white overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen px-4 md:px-8">
      <div className="max-w-7xl w-full py-8 md:py-12 lg:pb-16 lg:pt-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Section - Text */}
          <div className="desc_hero w-full lg:w-1/2 bg-white/10 backdrop-blur-md shadow-xl rounded-xl p-6 sm:p-8 transition-all hover:translate-y-[-5px] z-10">
            <Heading
              subtitle="EXPLORE, LEARN, INNOVATE"
              title="Empowering Future IT Leaders"
            />
            <p className="mt-1 text-base md:text-lg text-[#f3f3f3] leading-relaxed">
              Dive into a world of cutting-edge technology, where innovation meets knowledge! The Department of IT
              welcomes you to an immersive learning experience—designed to sharpen your skills, fuel your creativity,
              and prepare you for the digital revolution.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:justify-start">
              <Link href="/land_students" className="primary-btn">
                STUDENT&apos;S CORNER<i className="fa fa-long-arrow-alt-right ml-2" />
              </Link>
              <Link href="/about" className="secondary-btn">
                NOW MORE <i className="fa fa-long-arrow-alt-right ml-2" />
              </Link>
            </div>
          </div>

          {/* Right Section - Single Unified Carousel */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mt-8 lg:mt-0 relative z-0">
             <div 
                style={{ width: `${carouselWidth}px` }} 
                className="transition-all duration-300 mx-auto"
             >
                <Carousel
                  items={carouselItems}
                  baseWidth={carouselWidth}
                  autoplay={true}
                  autoplayDelay={4000}
                  pauseOnHover={false}
                  loop={true}
                  round={false}
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}