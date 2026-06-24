import React from 'react';
import { FiSearch, FiSliders, FiPlus } from 'react-icons/fi';
import { useImages } from '../context/ImageContext';
import VideoCard from '../components/VideoCard';
import VideoLightbox from '../components/VideoLightbox';

export default function VideoFolder() {
  const {
    filteredVideos,
    searchQuery,
    setSearchQuery,
    selectVideo,
    selectedVideo
  } = useImages();

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-extrabold text-textMain tracking-tight">Videos</h1>
          <p className="text-xs text-textMuted mt-0.5">Browse your video collection with preview cards and folder-style stats.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-borderGray bg-white py-2 pl-10 pr-3 text-xs text-textMain outline-none focus:border-primary transition-all duration-200"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" size={16} />
          </div>

          <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-xs font-semibold text-white shadow-sm transition-all hover:bg-primary-hover">
            <FiPlus size={16} />
            Add Video
          </button>
        </div>
      </div>

      <section className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-9 space-y-6">
          <div className="flex items-center justify-between rounded-3xl border border-borderGray bg-white p-6 shadow-sm">
            <div>
              <h2 className="text-lg font-bold text-textMain">Recently viewed</h2>
              <p className="text-xs text-textMuted mt-1">Continue watching from your latest previews.</p>
            </div>
            <span className="rounded-full bg-primary-light px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Film Library
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredVideos.slice(0, 6).map((video) => (
              <VideoCard key={video.id} video={video} onSelect={selectVideo} />
            ))}
          </div>

          <div className="rounded-3xl border border-borderGray bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-bold text-textMain">All Videos</h2>
              <span className="text-xs font-semibold text-textMuted">Showing {filteredVideos.length} videos</span>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} video={video} onSelect={selectVideo} />
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-3 space-y-6">
          <div className="rounded-3xl border border-borderGray bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-sm font-bold text-textMain">Collection Overview</h3>
              <button className="text-[11px] font-semibold text-primary">View all</button>
            </div>
            <div className="space-y-4 text-sm text-textMuted">
              <div className="rounded-3xl bg-primary-light p-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-primary">Total Videos</p>
                <p className="mt-2 text-3xl font-bold text-textMain">24</p>
              </div>
              <div className="flex items-center justify-between">
                <span>Recently uploaded</span>
                <span className="font-semibold text-textMain">6</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Favorites</span>
                <span className="font-semibold text-textMain">8</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Storage used</span>
                <span className="font-semibold text-textMain">12.4 GB</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-borderGray bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-sm font-bold text-textMain">Tips</h3>
            <p className="text-xs text-textMuted leading-6">
              Tap any card to open the full player. Use the search bar to filter videos quickly.
            </p>
          </div>
        </aside>
      </section>

      <VideoLightbox />
    </div>
  );
}
