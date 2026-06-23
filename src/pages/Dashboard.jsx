import React from 'react';
import {
  FiImage,
  FiVideo,
  FiFileText,
  FiMusic,
  FiLayers,
  FiGrid,
  FiStar,
  FiEdit2,
  FiPlus,
  FiTrash2,
  FiMoreVertical,
  FiX,
  FiCloud,
  FiPackage,
} from 'react-icons/fi';

const folderCategories = [
  { name: 'Image', count: '246 Items', icon: FiImage, color: 'bg-primary-light text-primary' },
  { name: 'Video', count: '246 Items', icon: FiVideo, color: 'bg-primary-light text-primary' },
  { name: 'Documents', count: '246 Items', icon: FiFileText, color: 'bg-primary-light text-primary' },
  { name: 'Audio', count: '246 Items', icon: FiMusic, color: 'bg-primary-light text-primary' },
  { name: 'Movies', count: '246 Items', icon: FiVideo, color: 'bg-primary-light text-primary' },
  { name: 'Assignment', count: '246 Items', icon: FiEdit2, color: 'bg-primary-light text-primary' },
  { name: 'Ui-Kit', count: '246 Items', icon: FiGrid, color: 'bg-primary-light text-primary' },
  { name: 'Design', count: '246 Items', icon: FiStar, color: 'bg-primary-light text-primary' },
];

const recentFiles = [
  { name: 'Marcus Family.jpg', size: '12 MB', date: '16 Oct,11:23m', type: 'image', icon: FiImage, iconBg: 'bg-indigo-50 text-indigo-500' },
  { name: 'Work.Doc', size: '4.3 MB', date: '20 Nov,12:40pm', type: 'doc', icon: FiFileText, iconBg: 'bg-sky-50 text-sky-500' },
  { name: 'Apha.mkv', size: '10 MB', date: '08 Oct,05:45pm', type: 'video', icon: FiVideo, iconBg: 'bg-blue-50 text-blue-500' },
  { name: 'SVG Logo.png', size: '9 MB', date: '04 Jul,10:30pm', type: 'image', icon: FiImage, iconBg: 'bg-sky-50 text-sky-500' },
];

const storageDetails = [
  { label: 'Documents', value: '5,674s', color: 'bg-primary', percent: '75%' },
  { label: 'Videos', value: '1,624', color: 'bg-emerald-500', percent: '40%' },
  { label: 'Images', value: '5,515', color: 'bg-orange-500', percent: '55%' },
];

const uploadingFiles = [
  { name: 'Onboarding.zip', size: '23 mb', progress: 40 },
  { name: 'Web Design.zip', size: '45 mb', progress: 60 },
  { name: 'Example.zar', size: '90 mb', progress: 85 },
  { name: 'Web Design.zip', size: '45 mb', progress: 40 },
  { name: 'Designing.pptx', size: '73 mb', progress: 65 },
  { name: 'Web Design.zip', size: '45 mb', progress: 40 },
  { name: 'Example.zar', size: '90 mb', progress: 85 },
  { name: 'Designing.pptx', size: '73 mb', progress: 65 },
];

const cloudStorage = [
  { name: 'Drop Box', used: '32gb', total: '48gb', percent: '66%', icon: FiPackage, iconColor: 'text-indigo-500' },
  { name: 'One Drive', used: '10gb', total: '48gb', percent: '20%', icon: FiCloud, iconColor: 'text-sky-500' },
  { name: 'Google Drive', used: '15gb', total: '48gb', percent: '31%', icon: FiLayers, iconColor: 'text-emerald-500' },
];

export default function Dashboard() {
  return (
    <div className="grid gap-6 lg:grid-cols-12 animate-fade-in text-textMain">
      {/* Left Column (Spans 9/12 cols on large screens) */}
      <div className="lg:col-span-9 space-y-6 flex flex-col">
        
        {/* Your Folders Section */}
        <div>
          <h2 className="text-xl font-bold text-textMain mb-4">Your Folders</h2>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {folderCategories.map((folder, index) => (
              <div key={`${folder.name}-${index}`} className="relative group mt-3 flex flex-col">
                {/* Physical Tab Shape */}
                <div className="absolute -top-[10px] left-0 h-[11px] w-[55%] bg-white border-t border-r border-l border-borderGray rounded-t-[8px] z-10" />
                {/* White border-masker */}
                <div className="absolute top-0 left-[1px] h-[2px] w-[calc(55%-2px)] bg-white z-20" />
                
                {/* Folder Body */}
                <div className="relative w-full border border-borderGray bg-white p-5 rounded-b-xl rounded-tr-xl shadow-sm hover:shadow-md transition-all duration-200 z-10 flex flex-col items-start pt-4">
                  {/* Vertical 3-dot Menu */}
                  <button className="absolute top-4 right-4 text-textMuted hover:text-textMain transition-colors">
                    <FiMoreVertical size={16} />
                  </button>
                  
                  {/* Icon Circle */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-primary mb-4 shadow-sm">
                    <folder.icon size={18} />
                  </div>
                  
                  {/* Text details */}
                  <h3 className="font-semibold text-textMain text-sm">{folder.name}</h3>
                  <span className="text-xs text-textMuted mt-1">{folder.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Chart Section */}
        <div className="border border-borderGray bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-textMain">Activity Chart</h2>
            </div>
            {/* Year Selector Dropdown */}
            <div className="relative">
              <select className="appearance-none rounded-lg border border-borderGray bg-white py-1.5 pl-3 pr-8 text-xs font-semibold text-textMuted outline-none hover:border-primary hover:text-primary transition-all cursor-pointer">
                <option>This year</option>
                <option>Last year</option>
              </select>
              <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-textMuted">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* SVG Line Chart */}
          <div className="relative h-64 w-full">
            {/* Grid lines and curves inside single SVG */}
            <svg className="w-full h-full" viewBox="0 0 700 240" preserveAspectRatio="none">
              {/* Horizontal Dashed Grid Lines (90GB down to 30GB) */}
              <line x1="40" y1="20" x2="680" y2="20" stroke="#f1f3f5" strokeWidth="1.5" strokeDasharray="5 5" />
              <line x1="40" y1="53" x2="680" y2="53" stroke="#f1f3f5" strokeWidth="1.5" strokeDasharray="5 5" />
              <line x1="40" y1="86" x2="680" y2="86" stroke="#f1f3f5" strokeWidth="1.5" strokeDasharray="5 5" />
              <line x1="40" y1="120" x2="680" y2="120" stroke="#f1f3f5" strokeWidth="1.5" strokeDasharray="5 5" />
              <line x1="40" y1="153" x2="680" y2="153" stroke="#f1f3f5" strokeWidth="1.5" strokeDasharray="5 5" />
              <line x1="40" y1="186" x2="680" y2="186" stroke="#f1f3f5" strokeWidth="1.5" strokeDasharray="5 5" />
              <line x1="40" y1="220" x2="680" y2="220" stroke="#f1f3f5" strokeWidth="1.5" strokeDasharray="5 5" />

              {/* Y-Axis Labels inside SVG */}
              <text x="0" y="24" fill="#adb5bd" fontSize="10" fontWeight="bold">90 GB</text>
              <text x="0" y="57" fill="#adb5bd" fontSize="10" fontWeight="bold">80 GB</text>
              <text x="0" y="90" fill="#adb5bd" fontSize="10" fontWeight="bold">70 GB</text>
              <text x="0" y="124" fill="#adb5bd" fontSize="10" fontWeight="bold">60 GB</text>
              <text x="0" y="157" fill="#adb5bd" fontSize="10" fontWeight="bold">50 GB</text>
              <text x="0" y="190" fill="#adb5bd" fontSize="10" fontWeight="bold">40 GB</text>
              <text x="0" y="224" fill="#adb5bd" fontSize="10" fontWeight="bold">30 GB</text>

              {/* Curve Chart Path */}
              <path 
                d="M 60 86 C 110 130, 140 186, 170 186 C 200 186, 240 20, 270 20 C 300 20, 340 170, 370 170 C 400 170, 440 86, 470 86 C 500 86, 540 213, 570 213 C 600 213, 640 53, 670 53" 
                stroke="#3b82f6" 
                strokeWidth="4" 
                fill="none" 
                strokeLinecap="round" 
              />
            </svg>
          </div>
          
          {/* X-Axis labels in a flex container */}
          <div className="flex justify-between pl-[40px] pr-[10px] text-xs font-bold text-textMuted mt-4">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>July</span>
          </div>
        </div>

        {/* Bottom nested grid for Recently Added Files and Cloud Storage */}
        <div className="grid gap-6 md:grid-cols-12">
          
          {/* Recently Added Files Component */}
          <div className="md:col-span-7 border border-borderGray bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-textMain">Recently added files</h2>
                <a href="#" className="text-xs font-bold text-primary hover:underline">View all</a>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-borderGray">
                      <th className="pb-3 text-xs font-bold text-textMuted uppercase tracking-wider">Files</th>
                      <th className="pb-3 text-xs font-bold text-textMuted uppercase tracking-wider">Last Modified</th>
                      <th className="pb-3 text-xs font-bold text-textMuted uppercase tracking-wider">Size</th>
                      <th className="pb-3 text-xs font-bold text-textMuted uppercase tracking-wider text-right"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-borderGray/50">
                    {recentFiles.map((file, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-3.5 flex items-center gap-3">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-xl ${file.iconBg} shadow-sm`}>
                            <file.icon size={15} />
                          </div>
                          <span className="font-semibold text-textMain text-xs sm:text-sm truncate max-w-[120px] sm:max-w-none">{file.name}</span>
                        </td>
                        <td className="py-3.5 text-xs text-textMuted font-medium">{file.date}</td>
                        <td className="py-3.5 text-xs font-semibold text-primary">{file.size}</td>
                        <td className="py-3.5 text-right">
                          <button className="text-orange-500 hover:text-orange-600 p-1.5 rounded-lg hover:bg-orange-50 transition-colors">
                            <FiTrash2 size={15} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Cloud Storage Component */}
          <div className="md:col-span-5 border border-borderGray bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-base font-bold text-textMain mb-6">Cloud Storage</h2>
              
              <div className="space-y-5">
                {cloudStorage.map((cloud, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-textMain">
                      <div className="flex items-center gap-2">
                        <cloud.icon size={16} className={cloud.iconColor} />
                        <span>{cloud.name}</span>
                      </div>
                      <span className="text-textMuted">{cloud.total}</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="bg-primary h-full rounded-full transition-all duration-500" 
                        style={{ width: cloud.percent }} 
                      />
                    </div>
                    {/* Mini details below */}
                    <div className="flex items-center justify-between text-[10px] font-bold text-textMuted">
                      <span>{cloud.used}</span>
                      <span>{cloud.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Right Column (Spans 3/12 cols on large screens) */}
      <div className="lg:col-span-3 space-y-6 flex flex-col">
        
        {/* Storage Details Component */}
        <div className="border border-borderGray bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center">
          <div className="w-full text-left self-start">
            <h2 className="text-base font-bold text-textMain">Storage Details</h2>
          </div>

          {/* Semi-circular Gauge Chart */}
          <div className="relative flex justify-center items-center mt-6">
            <svg className="w-48 h-24" viewBox="0 0 100 50">
              {/* Background Arc */}
              <path 
                d="M 10 45 A 35 35 0 0 1 90 45" 
                stroke="#eef2f6" 
                strokeWidth="8" 
                fill="none" 
                strokeLinecap="round" 
              />
              {/* Value Arc (75% filled) */}
              <path 
                d="M 10 45 A 35 35 0 0 1 90 45" 
                stroke="#3b82f6" 
                strokeWidth="8" 
                fill="none" 
                strokeLinecap="round" 
                strokeDasharray="110" 
                strokeDashoffset="27.5"
              />
            </svg>
            <div className="absolute bottom-0 text-center">
              <span className="text-2xl font-extrabold text-textMain block leading-tight">75GB</span>
              <span className="text-[10px] font-bold text-primary tracking-wide">used of 100GB</span>
            </div>
          </div>

          {/* Detailed Lists */}
          <div className="mt-8 w-full space-y-4">
            {storageDetails.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold text-textMain">
                  <span>{item.label}</span>
                  <span className="text-textMuted">{item.value}</span>
                </div>
                {/* Progress bar */}
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`${item.color} h-full rounded-full`} 
                    style={{ width: item.percent }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Uploading on Drive Component */}
        <div className="border border-borderGray bg-white p-6 rounded-2xl shadow-sm flex flex-col">
          <h2 className="text-base font-bold text-textMain mb-4">Uploading on Drive</h2>
          
          <div className="space-y-3 overflow-y-auto max-h-[360px] pr-1.5">
            {uploadingFiles.map((file, idx) => (
              <div key={idx} className="flex items-center justify-between gap-3 border border-borderGray bg-white rounded-xl p-3.5 shadow-sm">
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-textMain text-xs truncate">{file.name}</p>
                </div>
                {/* Micro Progress Bar */}
                <div className="h-1 w-16 bg-slate-100 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: `${file.progress}%` }} />
                </div>
                <div className="text-[10px] font-semibold text-textMuted shrink-0">
                  {file.size}
                </div>
                {/* Cancel Button */}
                <button className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-light text-primary hover:bg-primary hover:text-white transition-all duration-150 shrink-0">
                  <FiX size={10} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Upgrade Promotional Card */}
        <div className="border border-borderGray bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center justify-between flex-grow">
          {/* Custom Illustration */}
          <div className="w-full">
            <svg className="mx-auto w-32 h-32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Folder Background Tab */}
              <path d="M15 25 C15 22.2, 17.2 20, 20 20 H50 L58 30 H100 C102.8 30, 105 32.2, 105 35 V85 C105 87.8, 102.8 90, 100 90 H20 C17.2 90, 15 87.8, 15 85 Z" fill="#3b82f6" fillOpacity="0.8" />
              {/* Folder Front Cover */}
              <path d="M15 38 C15 35.2, 17.2 33, 20 33 H100 C102.8 33, 105 35.2, 105 38 V88 C105 90.8, 102.8 93, 100 93 H20 C17.2 93, 15 90.8, 15 88 Z" fill="#1d4ed8" />
              {/* Shield Protection */}
              <path d="M60 45 C60 45, 75 40, 75 52 C75 68, 60 78, 60 78 C60 78, 45 68, 45 52 C45 40, 60 45, 60 45 Z" fill="#22c55e" stroke="#ffffff" strokeWidth="2.5" />
              {/* Shield Checkmark */}
              <path d="M54 62 L58 66 L66 56" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="space-y-4 mt-2">
            <h3 className="font-extrabold text-textMain text-sm sm:text-base px-2 leading-snug">
              Upgrade to Special Offer For Unlimited Storage
            </h3>
            <button className="w-full py-2 bg-primary hover:bg-primary-hover text-white text-xs font-bold rounded-lg shadow-sm hover:shadow transition-all duration-200">
              Buy storage
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
