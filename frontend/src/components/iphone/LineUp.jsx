import React from 'react';

// Data moved outside component
const dataI = [
  {
    "category": "iPhone",
    "model": "iPhone 17 Pro Max",
    "image": "/iPhone-161.jpg",
    "price": 1199,
    "currency": "USD",
    "storage_options": [
      { "capacity": "256GB", "price": 1199 },
      { "capacity": "512GB", "price": 1399 },
      { "capacity": "1TB", "price": 1599 }
    ],
    "color": ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    "display": "6.7-inch Super Retina XDR display with ProMotion",
    "chip": "A17 Pro chip",
    "camera": "48MP main camera, 5x optical zoom, Night mode on all cameras",
    "battery": "Up to 29 hours video playback",
    "os": "iOS 17",
    "releaseDate": "2023-09-22"
  },
  {
    "category": "iPhone",
    "model": "iPhone 17 Pro",
    "image": "/iphone_17pro.jpg",
    "price": 999,
    "currency": "USD",
    "storage_options": [
      { "capacity": "128GB", "price": 999 },
      { "capacity": "256GB", "price": 1099 },
      { "capacity": "512GB", "price": 1299 },
      { "capacity": "1TB", "price": 1499 }
    ],
    "color": ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    "display": "6.1-inch Super Retina XDR display with ProMotion",
    "chip": "A17 Pro chip",
    "camera": "48MP main camera, 5x optical zoom, Night mode on all cameras",
    "battery": "Up to 23 hours video playback",
    "os": "iOS 17",
    "releaseDate": "2023-09-22"
  },
  {
    "category": "iPhone",
    "model": "iPhone 17",
    "image": "/iPhone-162.jpg",
    "price": 799,
    "currency": "USD",
    "storage_options": [
      { "capacity": "128GB", "price": 799 },
      { "capacity": "256GB", "price": 899 },
      { "capacity": "512GB", "price": 1099 }
    ],
    "color": ["Pink", "Yellow", "Green", "Blue", "Black"],
    "display": "6.1-inch Super Retina XDR display",
    "chip": "A16 Bionic chip",
    "camera": "48MP main camera, 2x optical zoom, advanced computational photography",
    "battery": "Up to 20 hours video playback",
    "os": "iOS 17",
    "releaseDate": "2023-09-22"
  },
  {
    "category": "iPhone",
    "model": "iPhone 17 Plus",
    "image": "/iPhone-163.jpg",
    "price": 899,
    "currency": "USD",
    "storage_options": [
      { "capacity": "128GB", "price": 899 },
      { "capacity": "256GB", "price": 999 },
      { "capacity": "512GB", "price": 1199 }
    ],
    "color": ["Pink", "Yellow", "Green", "Blue", "Black"],
    "display": "6.7-inch Super Retina XDR display",
    "chip": "A16 Bionic chip",
    "camera": "48MP main camera, 2x optical zoom, advanced computational photography",
    "battery": "Up to 26 hours video playback",
    "os": "iOS 17",
    "releaseDate": "2023-09-22"
  }
];

const LineUp = () => {
  return (
    <>      <h2 className='text-5xl text-white flex'>Explore our Latest Collection ! </h2>

    <section
      id="product-viewer"
      className="h-[80vh] w-full bg-stone-900 flex items-center justify-start relative group mb-40"
    >
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
      <div className="product-grid flex gap-8 overflow-x-auto w-full h-full items-center px-8 snap-x snap-mandatory scrollbar-hide">
        {dataI.map((item) => (
          <div
            key={item.model} 
            className="product-item flex-shrink-0 w-[100vw] md:w-[400px] bg-zinc-800 rounded-3xl p-6 snap-center shadow-2xl border border-zinc-700 flex flex-col gap-4 transition-transform hover:scale-[1.01] duration-300"
          >
            {/* Image Container */}
            <div className="relative w-full h-[60vh] overflow-hidden rounded-2xl bg-zinc-900">
              <img
                src={item.image}
                alt={item.model}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/400x600/1a1a1a/white?text=No+Image';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 mt-2">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {item.model}
              </h2>

              {/* Screen Size Row */}
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                {/* Replacement SVG for Maximize */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                  <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                  <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                  <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                </svg>
                <p className="truncate">{item.display}</p>
              </div>

              {/* Storage Row */}
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                 {/* Replacement SVG for HardDrive */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" x2="2" y1="12" y2="12" />
                  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                  <line x1="6" x2="6.01" y1="16" y2="16" />
                  <line x1="10" x2="10.01" y1="16" y2="16" />
                </svg>
                <p>{item.storage_options[1]?.capacity || item.storage_options[0]?.capacity || "N/A"}</p>
              </div>

              <button className="mt-4 w-full py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section></>
  );
};

export default LineUp;