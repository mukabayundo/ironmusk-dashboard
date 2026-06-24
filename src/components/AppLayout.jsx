import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useImages } from '../context/ImageContext';

export default function AppLayout() {
  const { sidebarOpen, setSidebarOpen, fontSize } = useImages();

  return (
    <div className="min-h-screen bg-pageBg text-textMain">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div 
        className={`min-h-screen flex flex-col transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'md:pl-64' : 'pl-0'
        }`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Backdrop for Mobile Sidebar */}
        {sidebarOpen && (
          <div 
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm md:hidden"
          />
        )}

        {/* Content Outlet */}
        <main className="flex-grow p-6 md:p-8" style={{ fontSize: `${fontSize}px` }}>
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="border-t border-borderGray bg-white px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-textMuted">
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
          </div>
          <div>
            <span>© Hope UI, Made with <span className="text-red-500">♥</span> by </span>
            <a href="https://iqonic.design/" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">
              IQONIC Design
            </a>
          </div>
        </footer>
      </div>

      {/* Floating Side Actions for UI fidelity */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {/* Buy Now Button (Green vertical tab) */}
        <a 
          href="#" 
          className="bg-[#12b886] hover:bg-[#0ca678] text-white py-3 px-1 rounded-l-md shadow-lg writing-mode-vertical font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 transition-all"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          <svg className="w-3.5 h-3.5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Buy Now
        </a>

        {/* Config Settings Button (Gear, orange/red) */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white p-2.5 rounded-l-md shadow-lg flex items-center justify-center transition-all animate-spin-slow">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        {/* Landing Pages Button (Blue vertical tab) */}
        <a 
          href="#" 
          className="bg-primary hover:bg-primary-hover text-white py-3 px-1 rounded-l-md shadow-lg writing-mode-vertical font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 transition-all"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Landing Pages
        </a>
      </div>
    </div>
  );
}
