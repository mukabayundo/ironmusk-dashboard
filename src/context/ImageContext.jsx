import React, { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

// Dynamic initial state with fixed relative times relative to Date.now()
const INITIAL_IMAGES = [
  {
    id: 'img1',
    fileName: 'Gallery-1234725783.jpg',
    createdDate: 'Dec 13, 2020',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80',
    lastOpened: Date.now() - 1000 * 60, // 1 minute ago ("just now")
    category: 'Images',
    size: '1.8 MB'
  },
  {
    id: 'img2',
    fileName: 'Gallery-25783.jpg',
    createdDate: 'Dec 13, 2020',
    imageUrl: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600&auto=format&fit=crop&q=80',
    lastOpened: Date.now() - 1000 * 60 * 60 * 24 * 2, // 2 days ago
    category: 'Images',
    size: '2.4 MB'
  },
  {
    id: 'img3',
    fileName: 'Gallery-49895383.jpg',
    createdDate: 'Dec 13, 2020',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80',
    lastOpened: Date.now() - 1000 * 60 * 60 * 24 * 30, // 30 days ago ("a month ago")
    category: 'Images',
    size: '3.1 MB'
  },
  {
    id: 'img4',
    fileName: 'Gallery-4509853.jpg',
    createdDate: 'Dec 13, 2020',
    imageUrl: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&auto=format&fit=crop&q=80',
    lastOpened: Date.now() - 1000 * 60 * 60 * 24 * 2 - 1000 * 60 * 5, // 2 days ago
    category: 'Images',
    size: '1.2 MB'
  },
  {
    id: 'img5',
    fileName: 'Gallery-280397557.jpg',
    createdDate: 'Dec 13, 2020',
    imageUrl: 'https://images.unsplash.com/photo-1473116763269-25541579ffbe?w=600&auto=format&fit=crop&q=80',
    lastOpened: Date.now() - 1000 * 120, // 2 minutes ago ("just now")
    category: 'Images',
    size: '2.9 MB'
  },
  {
    id: 'img6',
    fileName: 'Gallery-76935783.jpg',
    createdDate: 'Dec 13, 2020',
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&auto=format&fit=crop&q=80',
    lastOpened: Date.now() - 1000 * 60 * 60 * 24 * 2 - 1000 * 60 * 10, // 2 days ago
    category: 'Images',
    size: '1.5 MB'
  },
  {
    id: 'img7',
    fileName: 'Gallery-4725783.jpg',
    createdDate: 'Dec 13, 2020',
    imageUrl: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&auto=format&fit=crop&q=80',
    lastOpened: Date.now() - 1000 * 60 * 60 * 24 * 30 - 1000 * 60 * 60 * 2, // 30 days ago ("a month ago")
    category: 'Images',
    size: '4.2 MB'
  },
  {
    id: 'img8',
    fileName: 'Gallery-38290382.jpg',
    createdDate: 'Dec 13, 2020',
    imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&auto=format&fit=crop&q=80',
    lastOpened: Date.now() - 1000 * 60 * 60 * 24 * 2 - 1000 * 60 * 30, // 2 days ago
    category: 'Images',
    size: '2.0 MB'
  }
];

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState(INITIAL_IMAGES);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mark an image as opened and open modal
  const openImage = (id) => {
    setImages(prevImages =>
      prevImages.map(img =>
        img.id === id ? { ...img, lastOpened: Date.now() } : img
      )
    );
    const clickedImg = images.find(img => img.id === id);
    setSelectedImage(clickedImg);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Helper to format relative time
  const getRelativeTimeString = (timestamp) => {
    if (!timestamp) return 'Never opened';
    const now = Date.now();
    const diff = now - timestamp;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (minutes < 5) return 'just now';
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (days < 30) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;
    return `${Math.floor(months / 12)} year${Math.floor(months / 12) > 1 ? 's' : ''} ago`;
  };

  // Derived states
  // Recently Viewed: sorted by lastOpened descending
  const recentlyViewed = [...images]
    .filter(img => img.lastOpened !== null)
    .sort((a, b) => b.lastOpened - a.lastOpened);

  // All Images filtered by search query
  const filteredAllImages = images.filter(img =>
    img.fileName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ImageContext.Provider value={{
      images,
      recentlyViewed,
      filteredAllImages,
      selectedImage,
      searchQuery,
      sidebarOpen,
      setSidebarOpen,
      setSearchQuery,
      openImage,
      closeImageModal,
      getRelativeTimeString
    }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImages must be used within an ImageProvider');
  }
  return context;
};
