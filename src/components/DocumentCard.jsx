import React from 'react';
import { FiFileText, FiClock } from 'react-icons/fi';
import { useImages } from '../context/ImageContext';

export default function DocumentCard({ document, onSelect }) {
  const { getRelativeTimeString } = useImages();

  return (
    <div
      onClick={() => onSelect(document.id)}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-borderGray bg-white p-5 shadow-card transition-all duration-300 hover:shadow-xl"
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-light text-primary">
          <FiFileText size={20} />
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-textMuted">
          {document.size}
        </span>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-bold text-textMain line-clamp-2">{document.fileName}</h3>
        <p className="mt-2 text-[11px] text-textMuted">Created on {document.createdDate}</p>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-textMuted">
        <FiClock size={14} />
        <span>You opened {getRelativeTimeString(document.lastOpened)}</span>
      </div>
    </div>
  );
}
