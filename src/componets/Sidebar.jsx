import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Layers, 
  BarChart3, 
  Settings,
  Menu,
  X 
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: 'Products', icon: Package, active: false },
    { name: 'Orders', icon: ShoppingCart, active: false },
    { name: 'Categories', icon: Layers, active: false },
    { name: 'AI Analytics', icon: BarChart3, active: false },
  ];

  const sidebarVariants = {
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { x: '-100%', transition: { type: 'spring', stiffness: 300, damping: 30 } }
  };

  const navContent = (
    <div className="flex flex-col h-full py-6">
      {/* Logo Section */}
      <div className="px-6 mb-10 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.02 }} className="cursor-pointer group">
          <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-sm italic shadow-lg shadow-orange-600/20">K</span>
            Kinetic Admin
          </h1>
          <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-[0.2em] font-bold">
            Marketplace Management
          </p>
        </motion.div>
        
        {/* Mobile Close Button */}
        <button onClick={() => setIsOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
          <X size={24} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2 px-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={index}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                item.active 
                ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-900/20" 
                : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
              }`}
            >
              <Icon size={20} strokeWidth={item.active ? 2.5 : 2} className="transition-transform group-hover:scale-110" />
              <span className="font-medium text-sm">{item.name}</span>
              {item.active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />}
            </motion.a>
          );
        })}
      </nav>

      {/* Status Card */}
      <div className="mt-auto px-4">
        <div className="p-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl backdrop-blur-sm group">
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Workspace Status</p>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-slate-200 font-semibold">Enterprise Tier</span>
            </div>
            <Settings size={14} className="text-slate-500 group-hover:rotate-90 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* --- Mobile Header/Toggle --- */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-slate-900 p-4 z-[60] flex items-center justify-between border-b border-slate-800">
        <h1 className="text-white font-bold text-lg">Kinetic Admin</h1>
        <button onClick={() => setIsOpen(true)} className="text-white p-2 bg-slate-800 rounded-lg">
          <Menu size={24} />
        </button>
      </div>

      {/* --- Desktop Sidebar --- */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-slate-900 flex-col shadow-2xl z-50 border-r border-slate-800">
        {navContent}
      </aside>

      {/* --- Mobile Sidebar (Drawer) --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] lg:hidden"
            />
            
            {/* Sidebar Content */}
            <motion.aside
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed left-0 top-0 h-screen w-72 bg-slate-900 z-[80] lg:hidden shadow-2xl"
            >
              {navContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;