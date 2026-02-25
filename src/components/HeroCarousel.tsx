import React from 'react';

type Slide = { id: string; title: string; poster: string };

export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  return (
    <div className="rounded-xl overflow-hidden bg-gray-900/60">
      {slides.map((s) => (
        <div key={s.id} className="flex items-center bg-gray-900 p-6">
          <img src={s.poster} alt={s.title} className="w-48 h-28 object-cover rounded" />
          <div className="ml-4">
            <h3 className="text-2xl font-bold">{s.title}</h3>
            <p className="text-sm opacity-70">Trailer preview here (mock)</p>
          </div>
        </div>
      ))}
    </div>
  );
}
