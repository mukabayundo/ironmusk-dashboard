import React from 'react';
import { FiPlus, FiGrid, FiSearch, FiSliders } from 'react-icons/fi';
import { useImages } from '../context/ImageContext';
import ImageCard from '../components/ImageCard';
import LightboxModal from '../components/LightboxModal';

export default function ImageFolder() {
  const { 
    recentlyViewed, 
    filteredAllImages, 
    searchQuery, 
    setSearchQuery 
  } = useImages();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-extrabold text-textMain tracking-tight">Images</h1>
          <p className="text-xs text-textMuted mt-0.5">Manage and preview all image files in your workspace.</p>
        </div>
        <button 
          className="flex items-center gap-2 rounded-lg bg-primary hover:bg-primary-hover px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200"
          onClick={() => alert("Add Image is disabled in read-only mode for this assignment.")}
        >
          <FiPlus size={16} />
          <span>Add Image</span>
        </button>
      </div>

      {/* Recently Viewed Section */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm md:text-base font-extrabold text-textMain">Recently viewed</h2>
          <span className="text-[11px] font-medium text-textMuted">Sorted by last opened</span>
        </div>
        
        {recentlyViewed.length === 0 ? (
          <div className="rounded-card border border-dashed border-borderGray bg-white p-8 text-center text-textMuted text-xs">
            No recently opened images. Click on any image below to view it.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {recentlyViewed.slice(0, 8).map((image) => (
              <ImageCard key={`recent-${image.id}`} image={image} />
            ))}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-borderGray w-full my-6"></div>

      {/* All Image Section */}
      <div>
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-sm md:text-base font-extrabold text-textMain">All Image</h2>
          
          {/* Inline filters/search */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-grow sm:flex-grow-0">
              <input 
                type="text"
                placeholder="Filter images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-56 rounded-lg border border-borderGray bg-white py-1.5 pl-8 pr-3 text-xs text-textMain outline-none focus:border-primary transition-all duration-200"
              />
              <FiSearch size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-textMuted" />
            </div>
            
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-borderGray bg-white text-textMuted hover:text-textMain hover:border-primary transition-all">
              <FiSliders size={14} />
            </button>
          </div>
        </div>

        {/* Images Grid */}
        {filteredAllImages.length === 0 ? (
          <div className="rounded-card border border-dashed border-borderGray bg-white p-12 text-center text-textMuted">
            <p className="text-xs">No images match your search query: "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-2 text-xs font-semibold text-primary hover:underline"
            >
              Clear search filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredAllImages.map((image) => (
              <ImageCard key={`all-${image.id}`} image={image} />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal (renders only when an image is clicked) */}
      <LightboxModal />
    </div>
  );
}
