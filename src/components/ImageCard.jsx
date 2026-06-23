import React from 'react';
import { FiImage } from 'react-icons/fi';
import { useImages } from '../context/ImageContext';

export default function ImageCard({ image }) {
  const { openImage, getRelativeTimeString } = useImages();

  return (
    <div 
      onClick={() => openImage(image.id)}
      className="group cursor-pointer rounded-card border border-borderGray bg-white p-4 shadow-card hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
    >
      {/* Image Thumbnail Container */}
      <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-50">
        <img 
          src={image.imageUrl} 
          alt={image.fileName} 
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white/90 text-primary text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            Quick View
          </span>
        </div>
      </div>

      {/* Metadata content */}
      <div>
        {/* Created date */}
        <span className="text-[11px] font-medium text-textMuted block mb-1">
          Created on {image.createdDate}
        </span>

        {/* File Name Row */}
        <div className="flex items-center gap-2 mb-2">
          {/* Picture Icon Badge */}
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary-light text-primary">
            <FiImage size={12} />
          </div>
          <span className="truncate text-xs font-bold text-textMain group-hover:text-primary transition-colors" title={image.fileName}>
            {image.fileName}
          </span>
        </div>

        {/* Opened relative timestamp */}
        <div className="text-[11px] text-textMuted">
          You opened <span className="text-primary font-medium">{getRelativeTimeString(image.lastOpened)}</span>
        </div>
      </div>
    </div>
  );
}
