import React from 'react';
import { FiSearch, FiPlus, FiSliders } from 'react-icons/fi';
import { useImages } from '../context/ImageContext';
import DocumentCard from '../components/DocumentCard';

export default function DocumentFolder() {
  const {
    filteredDocuments,
    searchQuery,
    setSearchQuery,
    selectDocument
  } = useImages();

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-extrabold text-textMain tracking-tight">Document</h1>
          <p className="text-xs text-textMuted mt-0.5">Organize your documents in a clean grid and preview details in one click.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-borderGray bg-white py-2 pl-10 pr-3 text-xs text-textMain outline-none focus:border-primary transition-all duration-200"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" size={16} />
          </div>

          <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-xs font-semibold text-white shadow-sm transition-all hover:bg-primary-hover">
            <FiPlus size={16} />
            Add Document
          </button>
        </div>
      </div>

      <section className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-9 space-y-6">
          <div className="rounded-3xl border border-borderGray bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-textMain">Recently viewed</h2>
              <button className="text-xs font-semibold text-primary">View all</button>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredDocuments.slice(0, 6).map((document) => (
                <DocumentCard key={document.id} document={document} onSelect={selectDocument} />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-borderGray bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-bold text-textMain">All Documents</h2>
              <span className="text-xs font-semibold text-textMuted">Showing {filteredDocuments.length} documents</span>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredDocuments.map((document) => (
                <DocumentCard key={document.id} document={document} onSelect={selectDocument} />
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-3 space-y-6">
          <div className="rounded-3xl border border-borderGray bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-sm font-bold text-textMain">Folder Summary</h3>
              <button className="text-[11px] font-semibold text-primary">More</button>
            </div>
            <div className="space-y-4 text-sm text-textMuted">
              <div className="rounded-3xl bg-primary-light p-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-primary">Total Documents</p>
                <p className="mt-2 text-3xl font-bold text-textMain">16</p>
              </div>
              <div className="flex items-center justify-between">
                <span>PDFs</span>
                <span className="font-semibold text-textMain">5</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Word Docs</span>
                <span className="font-semibold text-textMain">4</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Spreadsheets</span>
                <span className="font-semibold text-textMain">3</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-borderGray bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-sm font-bold text-textMain">Note</h3>
            <p className="text-xs text-textMuted leading-6">
              Click any document card to view details in the style shown in the screenshot.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
