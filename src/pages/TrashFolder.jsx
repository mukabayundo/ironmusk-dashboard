import React from 'react';
import { FiSearch, FiMoreVertical } from 'react-icons/fi';
import { useImages } from '../context/ImageContext';
import DocumentCard from '../components/DocumentCard';
import ImageCard from '../components/ImageCard';
import VideoCard from '../components/VideoCard';

export default function TrashFolder() {
  const { filteredDocuments, filteredAllImages, filteredVideos, searchQuery, setSearchQuery } = useImages();

  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-extrabold text-textMain tracking-tight">Trash</h1>
          <p className="text-xs text-textMuted mt-0.5">Restore deleted files, images, and videos from the trash collection.</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder="Search trash..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-borderGray bg-white py-2 pl-10 pr-3 text-xs text-textMain outline-none focus:border-primary transition-all duration-200"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" size={16} />
          </div>
          <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-xs font-semibold text-white shadow-sm transition-all hover:bg-primary-hover">
            Restore All
          </button>
        </div>
      </div>

      <section className="space-y-10">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-textMain">Documents</h2>
            <span className="text-xs font-semibold text-textMuted">{filteredDocuments.length} items</span>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {filteredDocuments.slice(0, 4).map((document) => (
              <div key={document.id} className="relative">
                <DocumentCard document={document} onSelect={() => {}} />
                <button className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-textMuted shadow-sm hover:text-textMain">
                  <FiMoreVertical size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-textMain">Image</h2>
            <span className="text-xs font-semibold text-textMuted">{filteredAllImages.length} items</span>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {filteredAllImages.slice(0, 4).map((image) => (
              <div key={image.id} className="relative">
                <ImageCard image={image} />
                <button className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-textMuted shadow-sm hover:text-textMain">
                  <FiMoreVertical size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-textMain">Videos</h2>
            <span className="text-xs font-semibold text-textMuted">{filteredVideos.length} items</span>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {filteredVideos.slice(0, 4).map((video) => (
              <div key={video.id} className="relative">
                <VideoCard video={video} onSelect={() => {}} />
                <button className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-textMuted shadow-sm hover:text-textMain">
                  <FiMoreVertical size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
