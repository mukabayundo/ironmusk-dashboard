import React from 'react';
import { FiClock, FiPlayCircle } from 'react-icons/fi';
import { useImages } from '../context/ImageContext';

export default function VideoCard({ video, onSelect }) {
  const { getRelativeTimeString } = useImages();

  return (
    <div
      onClick={() => onSelect(video.id)}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-borderGray bg-white shadow-card transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative overflow-hidden bg-slate-100">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute inset-x-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          <FiPlayCircle size={14} />
          Preview
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-2 mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-textMuted">
          <span>{video.category}</span>
          <span>{video.duration}</span>
        </div>

        <h3 className="text-sm font-bold text-textMain mb-2">{video.title}</h3>

        <div className="flex items-center gap-2 text-[11px] text-textMuted">
          <FiClock size={14} />
          <span>{getRelativeTimeString(video.lastOpened)}</span>
        </div>
      </div>
    </div>
  );
}
