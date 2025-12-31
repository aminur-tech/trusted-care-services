"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
  const slideData = [
    {
      image: "https://i.ibb.co.com/5WYpR1rF/1.jpg",
      alt: "Elderly Care"
    },
    {
      image: "https://i.ibb.co.com/xqj5GtzJ/2.jpg",
      alt: "Babysitting Services"
    },
    {
      image: "https://i.ibb.co.com/DH8Ywj0k/3.jpg",
      alt: "Special Home Care"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 p-20">
      {/* Decorative Blur Background */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-[120px] opacity-30">
        <div className="h-96 w-96 rounded-full bg-primary"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* --- Left Column: Content --- */}
          <div className="w-full lg:w-1/2 text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium text-primary bg-blue-100 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Certified Care Professionals
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Reliable Care for <br />
              <span className="text-primary">Your Loved Ones</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Experience peace of mind with our expert babysitting, elderly care, 
              and specialized home assistance. We treat your family like our own.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services" 
                className="px-8 py-4 bg-primary text-white text-center font-bold rounded-2xl transition-all shadow-lg shadow-blue-200"
              >
                Explore Services
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-slate-900 text-center font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          {/* --- Right Column: Carousel --- */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative p-2 md:p-4 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100">
              <div className="relative rounded-[2rem] overflow-hidden">
                <Swiper
                  modules={[Autoplay, Pagination, EffectFade]}
                  effect="fade"
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  className="w-full h-[300px] md:h-[500px]"
                >
                  {slideData.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <img 
                        src={slide.image} 
                        alt={slide.alt} 
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Glassmorphism Notification Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 backdrop-blur-lg bg-white/80 p-4 rounded-2xl border border-white/40 shadow-xl hidden sm:flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    Join 50+ families seeking care today
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;