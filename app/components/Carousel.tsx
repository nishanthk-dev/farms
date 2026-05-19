"use client";

import { useState, useEffect } from "react";

interface CarouselImage {
  id: number;
  title: string;
  src: string;
}

const CAROUSEL_IMAGES: CarouselImage[] = [
  {
    id: 1,
    title: "Farmland Resort 1",
    src: "https://images.unsplash.com/photo-1500382017468-7049fae79249?w=1200&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Farmland Resort 2",
    src: "https://images.unsplash.com/photo-1500382017468-7049fae79249?w=1200&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Farmland Resort 3",
    src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&h=600&fit=crop",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {CAROUSEL_IMAGES.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition shadow-lg"
      >
        <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition shadow-lg"
      >
        <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === current ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
