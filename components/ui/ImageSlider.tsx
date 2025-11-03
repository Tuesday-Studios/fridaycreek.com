"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageSlide {
  url: string;
  alt: string;
  title?: string;
}

interface ImageSliderProps {
  images: ImageSlide[];
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
}

export default function ImageSlider({
  images,
  autoplay = false,
  loop = true,
  className = "",
}: ImageSliderProps) {
  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={loop}
        autoplay={
          autoplay
            ? {
                delay: 5000,
                disableOnInteraction: false,
              }
            : false
        }
        className="rounded-xl overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
              {image.title && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <h2 className="font-display text-display-md text-white text-center px-8 text-shadow">
                    {image.title}
                  </h2>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
