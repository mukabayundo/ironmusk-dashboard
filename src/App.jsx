import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ImageProvider } from './context/ImageContext';
import AppLayout from './components/AppLayout';
import ImageFolder from './pages/ImageFolder';
import VideoFolder from './pages/VideoFolder';
import DocumentFolder from './pages/DocumentFolder';
import AllFiles from './pages/AllFiles';
import TrashFolder from './pages/TrashFolder';
import Dashboard from './pages/Dashboard';
import { SignOutPage } from './pages/PlaceholderPages';

function App() {
  return (
    <ImageProvider>
      <BrowserRouter>
        <Routes>
          {/* Main Redirect */}
          <Route path="/" element={<Navigate to="/file-manager/images" replace />} />
          
          {/* Main Layout and routes */}
          <Route path="/file-manager" element={<AppLayout />}>
            <Route path="images" element={<ImageFolder />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="videos" element={<VideoFolder />} />
            <Route path="documents" element={<DocumentFolder />} />
            <Route path="all-files" element={<AllFiles />} />
            <Route path="trash" element={<TrashFolder />} />
          </Route>
          
          {/* Other routes */}
          <Route path="/sign-out" element={<SignOutPage />} />
          
          {/* Fallback redirect */}
          <Route path="*" element={<Navigate to="/file-manager/images" replace />} />
        </Routes>
      </BrowserRouter>
    </ImageProvider>
  );
}

export default App;
