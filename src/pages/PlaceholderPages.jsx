import React from 'react';
import { FiAlertCircle, FiVideo, FiFileText, FiFolder, FiTrash2, FiGrid } from 'react-icons/fi';

const PagePlaceholder = ({ title, icon: Icon, description }) => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 bg-white rounded-card border border-borderGray text-center animate-fade-in shadow-card">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary mb-4">
      <Icon size={28} />
    </div>
    <h1 className="text-lg font-bold text-textMain mb-2">{title} Page</h1>
    <p className="text-xs text-textMuted max-w-sm mb-6">{description}</p>
    <div className="flex gap-2">
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-200">
        <FiAlertCircle size={14} />
        Static UI Replica
      </span>
    </div>
  </div>
);

export const DashboardPlaceholder = () => (
  <PagePlaceholder 
    title="Dashboard" 
    icon={FiGrid} 
    description="This is the main File Manager dashboard overview, showing storage analytics, recent uploads, and file type summaries."
  />
);

export const VideoPlaceholder = () => (
  <PagePlaceholder 
    title="Video Folder" 
    icon={FiVideo} 
    description="View and organize all your video assets. Supports preview, transcoding, and media folder management."
  />
);

export const DocumentPlaceholder = () => (
  <PagePlaceholder 
    title="Document Folder" 
    icon={FiFileText} 
    description="Manage text files, PDFs, spreadsheets, and presentations. View document details and metadata."
  />
);

export const AllFilesPlaceholder = () => (
  <PagePlaceholder 
    title="All Files" 
    icon={FiFolder} 
    description="Comprehensive file browser displaying all folders, subfolders, and uploaded elements in a single list."
  />
);

export const TrashPlaceholder = () => (
  <PagePlaceholder 
    title="Trash" 
    icon={FiTrash2} 
    description="Recycle bin containing deleted files. Files here can be permanently deleted or restored to their original location."
  />
);

export const SignOutPage = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center animate-fade-in">
    <h1 className="text-xl font-bold text-textMain mb-2 font-poppins">You have signed out</h1>
    <p className="text-xs text-textMuted mb-6">Thank you for using Hope UI Pro Admin Dashboard.</p>
    <button 
      onClick={() => window.location.href = '/file-manager/images'} 
      className="bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-4 py-2 rounded-lg shadow transition-all"
    >
      Sign In Again
    </button>
  </div>
);
