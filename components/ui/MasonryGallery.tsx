"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalleryImage {
  url: string;
  alt: string;
  span?: string; // Tailwind grid span classes
}

const galleryImages: GalleryImage[] = [
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2016/11/IMG_2923.jpg",
    alt: "Friday Creek Retreat Facilities",
    span: "col-span-2 row-span-2", // Large featured image
  },
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2017/09/New-drone-shots-1-1024x767.jpg",
    alt: "Aerial view of Friday Creek Retreat",
    span: "col-span-1 row-span-1",
  },
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2016/11/Friday-Creek_Drone_002-1-1024x768.jpg",
    alt: "Pool deck - Romantic Getaway Coffs Harbour",
    span: "col-span-1 row-span-2",
  },
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2016/11/IMG_2715-768x1024.jpg",
    alt: "Cooking pizzas - Friday Creek Retreat",
    span: "col-span-1 row-span-2",
  },
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2016/11/Misty-by-Jessie-1024x1024.jpg",
    alt: "Pet Friendly - Friday Creek Retreat",
    span: "col-span-1 row-span-1",
  },
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2016/11/IMG_2919.jpg",
    alt: "Roaring Pizza Oven - Friday Creek Retreat",
    span: "col-span-2 row-span-1",
  },
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2016/11/IMG_2832.jpg",
    alt: "Pizza Dough - Friday Creek Retreat",
    span: "col-span-1 row-span-1",
  },
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2016/10/Extras-66.jpg",
    alt: "Friday Creek Facilities",
    span: "col-span-1 row-span-1",
  },
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2016/10/Extras-64.jpg",
    alt: "Friday Creek Facilities",
    span: "col-span-1 row-span-2",
  },
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2016/10/Extras-63.jpg",
    alt: "Vineyard - Friday Creek Retreat",
    span: "col-span-1 row-span-1",
  },
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2016/10/Extras-60.jpg",
    alt: "Lake - Friday Creek Retreat",
    span: "col-span-2 row-span-1",
  },
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2016/10/Extras-58.jpg",
    alt: "Friday Creek Facilities",
    span: "col-span-1 row-span-1",
  },
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2016/10/Extras-55.jpg",
    alt: "Tennis Court - Friday Creek Retreat",
    span: "col-span-1 row-span-2",
  },
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2016/10/Extras-53.jpg",
    alt: "Friday Creek Facilities",
    span: "col-span-1 row-span-1",
  },
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2016/10/Extras-52.jpg",
    alt: "Friday Creek Facilities",
    span: "col-span-1 row-span-1",
  },
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2016/10/Extras-49-1.jpg",
    alt: "Friday Creek Facilities",
    span: "col-span-2 row-span-1",
  },
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2016/10/Extras-23.jpg",
    alt: "Friday Creek Facilities",
    span: "col-span-1 row-span-1",
  },
  {
    url: "https://www.fridaycreek.com/wp-content/uploads/2016/10/Extras-40.jpg",
    alt: "Pizza Oven - Friday Creek Retreat",
    span: "col-span-1 row-span-1",
  },
];

export default function MasonryGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Convert images for lightbox
  const lightboxSlides = galleryImages.map((img) => ({
    src: img.url,
    alt: img.alt,
  }));

  const handleImageClick = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg group cursor-pointer ${image.span}`}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={lightboxSlides}
        on={{
          view: ({ index }) => setPhotoIndex(index),
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
        animation={{ fade: 300 }}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
}
