import React from 'react';
import { FiSearch, FiMenu, FiArrowLeft, FiShoppingBag, FiMail, FiBell, FiUser } from 'react-icons/fi';
import { useImages } from '../context/ImageContext';

export default function Navbar() {
  const { searchQuery, setSearchQuery, sidebarOpen, setSidebarOpen } = useImages();

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-borderGray bg-white px-6 shadow-navbar">
      {/* Left side actions and breadcrumbs */}
      <div className="flex items-center gap-4">
        {/* Toggle Sidebar (Mobile) */}
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="rounded-lg p-2 text-textMuted hover:bg-gray-100 hover:text-textMain md:hidden"
        >
          <FiMenu size={20} />
        </button>

        {/* Back Arrow */}
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary hover:bg-primary hover:text-white transition-all duration-200">
          <FiArrowLeft size={16} />
        </button>

        {/* Navigation Breadcrumbs */}
        <div className="hidden items-center gap-2 text-xs font-medium md:flex">
          <span className="text-primary hover:underline cursor-pointer">Image</span>
          <span className="text-textMuted">/</span>
          <span className="text-textMuted hover:text-textMain cursor-pointer">Home</span>
          <span className="text-textMuted">/</span>
          <span className="text-textMuted hover:text-textMain cursor-pointer">Pages</span>
          <span className="text-textMuted">/</span>
          <span className="text-textMuted hover:text-textMain cursor-pointer">Elements</span>
        </div>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-4">
        {/* Font scale indicator "A A A" */}
        <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-lg text-xs font-bold border border-borderGray">
          <button className="px-2 py-1 text-textMuted hover:text-textMain transition-all">A</button>
          <button className="bg-primary text-white px-2 py-1 rounded shadow-sm">A</button>
          <button className="px-2 py-1 text-textMuted hover:text-textMain transition-all">A</button>
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
        <div className="flex items-center gap-2.5">
          {/* Shopping Cart Button */}
          <button className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary hover:bg-primary hover:text-white transition-all duration-200">
            <FiShoppingBag size={15} />
            <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white border border-white">
              3
            </span>
          </button>

          {/* Messages Button */}
          <button className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary hover:bg-primary hover:text-white transition-all duration-200">
            <FiMail size={15} />
            <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white border border-white">
              5
            </span>
          </button>

          {/* Notifications Button */}
          <button className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary hover:bg-primary hover:text-white transition-all duration-200">
            <FiBell size={15} />
            <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-green-500 text-[9px] font-bold text-white border border-white">
              2
            </span>
          </button>

          {/* Divider */}
          <div className="h-6 w-[1px] bg-borderGray mx-1"></div>

          {/* Profile Dropdown Trigger */}
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-hover transition-all duration-200">
            <FiUser size={15} />
          </button>
        </div>
      </div>
    </header>
  );
}
