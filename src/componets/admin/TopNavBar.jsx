import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const TopNavBar = () => {
  return (
    <header className="fixed top-0 right-0 w-full lg:w-[calc(100%-16rem)] h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-between px-4 lg:px-8 z-40 shadow-sm border-b border-slate-100 dark:border-slate-800 transition-all">
      <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full w-full max-w-md transition-all focus-within:ring-2 focus-within:ring-orange-500/20">
        <Search size={18} className="text-slate-400" />
        <input 
          className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-500 outline-none" 
          placeholder="Search inventory..." 
          type="text"
        />
      </div>
      
      <div className="flex items-center gap-4 lg:gap-6 ml-4">
        <button className="text-slate-500 hover:text-orange-600 transition-all relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-orange-600 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>
        <button className="text-slate-500 hover:text-orange-600 transition-all p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
};

export default TopNavBar;