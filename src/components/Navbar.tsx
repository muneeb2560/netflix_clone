import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold">Netflix-like OTT</div>
        <div className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Catalog</a>
          <a href="#" className="hover:underline">Search</a>
          <a href="#" className="hover:underline">Profile</a>
        </div>
      </div>
    </nav>
  );
}
