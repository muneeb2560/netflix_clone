import React from 'react';

type Item = { id: string; title: string; poster: string };

export default function ContentRow({ title, items }: { title: string; items: Item[] }) {
  return (
    <section aria-label={title}>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <div className="flex space-x-4 overflow-x-auto py-2">
        {items.map((it) => (
          <div key={it.id} className="min-w-[120px] group">
            <div className="bg-gray-800 rounded overflow-hidden hover:scale-105 transition-transform">
              <img src={it.poster} alt={it.title} className="w-full h-180 object-cover" />
            </div>
            <div className="text-sm mt-1 truncate w-full">{it.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
