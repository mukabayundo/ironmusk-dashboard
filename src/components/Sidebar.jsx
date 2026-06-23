import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FiGrid, 
  FiImage, 
  FiVideo, 
  FiFileText, 
  FiFolder, 
  FiTrash2, 
  FiLogOut, 
  FiMail, 
  FiHeart, 
  FiBell 
} from 'react-icons/fi';
import { useImages } from '../context/ImageContext';

export default function Sidebar() {
  const { sidebarOpen } = useImages();

  const menuGroups = [
    {
      title: 'FILE MANAGER',
      items: [
        { name: 'Dashboard', path: '/file-manager/dashboard', icon: FiGrid }
      ]
    },
    {
      title: 'PAGES',
      items: [
        { name: 'Image', path: '/file-manager/images', icon: FiImage },
        { name: 'Video', path: '/file-manager/videos', icon: FiVideo },
        { name: 'Document', path: '/file-manager/documents', icon: FiFileText },
        { name: 'All Files', path: '/file-manager/all-files', icon: FiFolder, badge: 21 },
        { name: 'Trash', path: '/file-manager/trash', icon: FiTrash2 }
      ]
    },
    {
      title: 'OTHER',
      items: [
        { name: 'Sign Out', path: '/sign-out', icon: FiLogOut }
      ]
    }
  ];

  return (
    <aside 
      className={`fixed top-0 left-0 z-40 h-screen w-64 border-r border-borderGray bg-white pt-5 transition-transform duration-300 ease-in-out md:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Brand Logo */}
      <div className="flex items-center gap-3 px-6 mb-6">
        <svg 
          className="h-8 w-8 text-primary" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
        <span className="text-xl font-bold tracking-tight text-textMain">Hope UI</span>
      </div>

      {/* User Profile Info */}
      <div className="mx-4 mb-6 rounded-xl border border-borderGray p-4 text-center">
        <div className="relative mx-auto mb-2 h-16 w-16 overflow-hidden rounded-xl border-2 border-primary-light">
          <img 
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80" 
            alt="Elon Musk Avatar" 
            className="h-full w-full object-cover"
          />
        </div>
        <h4 className="font-semibold text-textMain text-sm">Elon musk</h4>
        <span className="text-xs text-primary font-medium">@musk</span>

        {/* Social Quick Actions */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary hover:bg-primary hover:text-white transition-all duration-200">
            <FiMail size={14} />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary hover:bg-primary hover:text-white transition-all duration-200">
            <FiHeart size={14} />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary hover:bg-primary hover:text-white transition-all duration-200">
            <FiBell size={14} />
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <nav className="h-[calc(100vh-270px)] overflow-y-auto px-3">
        {menuGroups.map((group, gIdx) => (
          <div key={gIdx} className="mb-6">
            <h5 className="mb-2 px-3 text-[10px] font-bold tracking-wider text-textMuted uppercase">
              {group.title}
            </h5>
            <ul className="space-y-1">
              {group.items.map((item, iIdx) => (
                <li key={iIdx}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                        isActive 
                          ? 'bg-primary-light text-primary border-l-4 border-primary rounded-l-none' 
                          : 'text-textMuted hover:bg-gray-50 hover:text-textMain'
                      }`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={18} className="shrink-0" />
                      <span>{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className="rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-bold text-white">
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
