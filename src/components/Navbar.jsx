import React from 'react';
import { 
  FiSearch, 
  FiMenu, 
  FiArrowLeft, 
  FiHome, 
  FiFileText, 
  FiLayers, 
  FiDatabase, 
  FiUser, 
  FiEdit2 
} from 'react-icons/fi';
import { useImages } from '../context/ImageContext';

export default function Navbar() {
  const {
    searchQuery,
    setSearchQuery,
    sidebarOpen,
    setSidebarOpen,
    fontSize,
    setFontSize
  } = useImages();

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-borderGray bg-white px-6 shadow-navbar">
      {/* Left side actions and breadcrumbs */}
      <div className="flex items-center gap-6">
        {/* Toggle Sidebar (Mobile) */}
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="rounded-lg p-2 text-textMuted hover:bg-gray-100 hover:text-textMain md:hidden"
        >
          <FiMenu size={20} />
        </button>

        {/* Back Arrow & Dashboard Breadcrumb */}
        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-hover transition-all duration-200 shadow-sm">
            <FiArrowLeft size={16} />
          </button>
          <span className="text-textMuted font-medium text-sm hidden sm:inline">Dashboard</span>
        </div>

        {/* Vertical divider */}
        <div className="hidden h-5 w-[1px] bg-borderGray md:block"></div>

        {/* Navigation Breadcrumbs / Links */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Home Link (Active) */}
          <a 
            href="#" 
            className="flex items-center gap-1.5 px-1 py-4 text-primary border-b-2 border-primary font-semibold text-sm transition-all"
          >
            <FiHome size={15} />
            <span>Home</span>
          </a>

          {/* Pages Link */}
          <a 
            href="#" 
            className="flex items-center gap-1.5 px-1 py-4 text-textMuted hover:text-textMain font-medium text-sm transition-all"
          >
            <FiFileText size={15} />
            <span>Pages</span>
          </a>

          {/* Elements Link */}
          <a 
            href="#" 
            className="flex items-center gap-1.5 px-1 py-4 text-textMuted hover:text-textMain font-medium text-sm transition-all"
          >
            <FiLayers size={15} />
            <span>Elements</span>
          </a>
        </div>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-5">
        {/* Font scale indicator "A A A" */}
        <div className="flex items-center gap-1.5 bg-gray-50 p-1 rounded-lg text-xs font-bold border border-borderGray">
          <button
            onClick={() => setFontSize(26)}
            className={`px-2.5 py-1 rounded-md transition-all text-xs font-bold ${fontSize === 26 ? 'bg-primary text-white shadow-sm' : 'text-textMuted hover:text-textMain'}`}
            aria-label="Set font size to 26px"
          >
            A
          </button>
          <button
            onClick={() => setFontSize(16)}
            className={`px-2.5 py-1 rounded-md transition-all text-xs font-bold ${fontSize === 16 ? 'bg-primary text-white shadow-sm' : 'text-textMuted hover:text-textMain'}`}
            aria-label="Set font size to 16px"
          >
            A
          </button>
          <button
            onClick={() => setFontSize(18)}
            className={`px-2.5 py-1 rounded-md transition-all text-xs font-bold ${fontSize === 18 ? 'bg-primary text-white shadow-sm' : 'text-textMuted hover:text-textMain'}`}
            aria-label="Set font size to 18px"
          >
            A
          </button>
        </div>

        {/* Search input */}
        <div className="relative hidden sm:block">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-48 rounded-lg border border-borderGray bg-gray-50 py-1.5 pl-3 pr-8 text-xs text-textMain outline-none focus:border-primary focus:bg-white transition-all duration-200 lg:w-64"
          />
          <FiSearch size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-textMuted" />
        </div>

        {/* Right side action icons */}
        <div className="flex items-center gap-2">
          {/* Database/Drive Button */}
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-hover transition-all duration-200 shadow-sm">
            <FiDatabase size={14} />
          </button>

          {/* Profile User Button */}
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-hover transition-all duration-200 shadow-sm">
            <FiUser size={14} />
          </button>

          {/* Edit/Pencil Button */}
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-hover transition-all duration-200 shadow-sm">
            <FiEdit2 size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}

