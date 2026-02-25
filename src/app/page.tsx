import React from 'react';
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import ContentRow from '../components/ContentRow';

const Landing: React.FC = () => {
  // Simple mock data arrays
  const featured = [
    { id: 'f1', title: 'Sample Movie 1', poster: '/placeholder/poster1.jpg' },
    { id: 'f2', title: 'Sample Movie 2', poster: '/placeholder/poster2.jpg' },
  ];
  const trending = [
    { id: 't1', title: 'Trending 1', poster: '/placeholder/poster3.jpg' },
    { id: 't2', title: 'Trending 2', poster: '/placeholder/poster4.jpg' },
  ];

  return (
    <div>
      <Navbar />
      <main className="p-4 md:p-8">
        <section aria-label="hero" className="mb-8">
          <HeroCarousel slides={featured} />
        </section>
        <section aria-label="content-rows" className="space-y-6">
          <ContentRow title="Trending Now" items={trending} />
          <ContentRow title="Continue Watching" items={trending} />
        </section>
      </main>
      <footer className="p-4 text-center text-sm opacity-70">
        © 2026 Netflix-like OTT — Mock Landing Page
      </footer>
    </div>
  );
};

export default Landing;
