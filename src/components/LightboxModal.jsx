import React from 'react';
import { FiX, FiCalendar, FiHardDrive, FiFolder, FiClock } from 'react-icons/fi';
import { useImages } from '../context/ImageContext';

export default function LightboxModal() {
  const { selectedImage, closeImageModal, getRelativeTimeString } = useImages();

  if (!selectedImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-fade-in">
      {/* Click outside to close */}
      <div 
        onClick={closeImageModal} 
        className="absolute inset-0 cursor-zoom-out"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl animate-scale-up z-10 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button 
          onClick={closeImageModal}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors focus:outline-none"
        >
          <FiX size={20} />
        </button>

        {/* Image Preview Container (Left/Top) */}
        <div className="flex-grow bg-black flex items-center justify-center p-2 min-h-[300px] md:min-h-0 md:w-3/5">
          <img 
            src={selectedImage.imageUrl} 
            alt={selectedImage.fileName} 
            className="max-h-[50vh] md:max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Info panel (Right/Bottom) */}
        <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-borderGray bg-white">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-light text-primary mb-4">
              Image File
            </span>
            <h3 className="text-lg font-bold text-textMain break-all mb-6">
              {selectedImage.fileName}
            </h3>

            {/* Metadata Rows */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-textMuted">
                <FiCalendar className="text-primary shrink-0" size={16} />
                <div>
                  <p className="text-xs text-textMuted/70">Created On</p>
                  <p className="font-semibold text-textMain">{selectedImage.createdDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-textMuted">
                <FiHardDrive className="text-primary shrink-0" size={16} />
                <div>
                  <p className="text-xs text-textMuted/70">File Size</p>
                  <p className="font-semibold text-textMain">{selectedImage.size || 'N/A'}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-textMuted">
                <FiFolder className="text-primary shrink-0" size={16} />
                <div>
                  <p className="text-xs text-textMuted/70">Category</p>
                  <p className="font-semibold text-textMain">{selectedImage.category}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-textMuted">
                <FiClock className="text-primary shrink-0" size={16} />
                <div>
                  <p className="text-xs text-textMuted/70">Last View Session</p>
                  <p className="font-semibold text-textMain">
                    Opened {getRelativeTimeString(selectedImage.lastOpened)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons (Read-Only Warning / Notice) */}
          <div className="mt-8 pt-6 border-t border-borderGray">
            <button 
              onClick={closeImageModal}
              className="w-full bg-primary hover:bg-primary-hover text-white py-2.5 rounded-lg font-semibold text-sm transition-all shadow-sm"
            >
              Close Preview
            </button>
            <p className="text-[10px] text-center text-textMuted mt-2">
              Viewing mode is read-only.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
