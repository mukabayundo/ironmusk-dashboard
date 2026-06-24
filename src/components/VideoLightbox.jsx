import React from 'react';
import { FiX, FiCalendar, FiClock, FiFilm, FiFolder } from 'react-icons/fi';
import { useImages } from '../context/ImageContext';

export default function VideoLightbox() {
  const { selectedVideo, closeVideoModal } = useImages();

  if (!selectedVideo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in">
      <div onClick={closeVideoModal} className="absolute inset-0 cursor-zoom-out" />

      <div className="relative w-full max-w-6xl overflow-hidden rounded-[32px] bg-white shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]">
        <button
          onClick={closeVideoModal}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
        >
          <FiX size={20} />
        </button>

        <div className="flex h-full flex-1 flex-col bg-black/95 p-4 md:p-6">
          <div className="relative flex-1 overflow-hidden rounded-[32px] bg-black">
            <video
              controls
              autoPlay
              className="h-full w-full object-cover"
              poster={selectedVideo.thumbnail}
            >
              <source src={selectedVideo.videoUrl} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </div>
        </div>

        <div className="w-full max-w-[420px] border-t border-borderGray bg-white p-6 md:border-t-0 md:border-l md:p-8">
          <span className="inline-flex rounded-full bg-primary-light px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
            Video File
          </span>
          <h2 className="mt-5 text-xl font-bold text-textMain">{selectedVideo.title}</h2>
          <p className="mt-4 text-sm leading-6 text-textMuted">{selectedVideo.description}</p>

          <div className="mt-8 space-y-4 text-sm text-textMuted">
            <div className="flex items-center gap-3">
              <FiCalendar className="text-primary" size={18} />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-textMuted">Created</p>
                <p className="font-semibold text-textMain">{selectedVideo.createdDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiFolder className="text-primary" size={18} />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-textMuted">Category</p>
                <p className="font-semibold text-textMain">{selectedVideo.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiClock className="text-primary" size={18} />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-textMuted">Last opened</p>
                <p className="font-semibold text-textMain">{selectedVideo.lastOpenedText}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiFilm className="text-primary" size={18} />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-textMuted">Duration</p>
                <p className="font-semibold text-textMain">{selectedVideo.duration}</p>
              </div>
            </div>
          </div>

          <button
            onClick={closeVideoModal}
            className="mt-8 w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover"
          >
            Close Player
          </button>
        </div>
      </div>
    </div>
  );
}
