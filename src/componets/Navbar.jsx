import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Camera,
  LogOut,
  Package,
  Heart,
  LayoutDashboard
} from 'lucide-react';

const Navbar = ({ isAuthenticated = false, user = null, onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const publicLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Visual Search', path: '/visual-search', icon: <Camera size={16} /> },
    { name: 'Support', path: '/contact' },
  ];

  const userLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'Orders', path: '/dashboard/orders', icon: <Package size={18} /> },
    { name: 'Wishlist', path: '/dashboard/wishlist', icon: <Heart size={18} /> },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-surface/80 dark:bg-inverse-surface/90 backdrop-blur-xl shadow-md border-b border-outline-variant/20"
          : "bg-transparent"
        }`}
    >
      <div className="flex items-center justify-between w-full px-6 py-4 max-w-screen-2xl mx-auto">

        {/* Brand - Using primary color */}
        <div className="flex items-center gap-10">
          <Link
            to="/"
            className="text-2xl font-black italic tracking-tighter text-primary hover:text-primary-fixed-dim transition-all active:scale-95"
          >
            Kinetic
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {publicLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-tight transition-all relative pb-1 flex items-center gap-1.5 ${location.pathname === link.path
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary"
                  }`}
              >
                {link.icon && <span className="opacity-70">{link.icon}</span>}
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Search Bar - Optimized with surface-container variables */}
        <div className="flex-1 max-w-xl px-10 hidden md:block">
          <div className="relative group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors"
              size={18}
            />
            <input
              className="w-full bg-surface-container-high dark:bg-surface-container border-none rounded-2xl py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/50 text-sm text-on-surface"
              placeholder="Search for premium products..."
              type="text"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-5">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2.5 hover:bg-surface-container-highest dark:hover:bg-surface-variant rounded-xl transition-colors text-on-surface"
          >
            <ShoppingCart size={22} />
            <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[9px] font-black h-4.5 w-4.5 flex items-center justify-center rounded-full shadow-lg shadow-primary/30 border-2 border-surface">
              3
            </span>
          </motion.button>

          {isAuthenticated ? (
            <div className="hidden md:flex items-center">
              <Link to="/dashboard" className="p-2.5 hover:bg-surface-container-highest dark:hover:bg-surface-variant rounded-xl transition-all">
                <User className="text-on-surface" size={22} />
              </Link>
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              className="hidden md:block text-xs font-black uppercase tracking-widest px-6 py-3 bg-primary text-on-primary rounded-2xl hover:bg-primary-dim transition-all shadow-lg shadow-primary/20 active:scale-95"
            >
              Login
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-on-surface rounded-xl hover:bg-surface-container-high transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer - Integrated with surface variables */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-surface-bright dark:bg-inverse-surface border-t border-outline-variant/10 shadow-2xl overflow-hidden rounded-b-[2rem]"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              <div className="relative md:hidden mb-2">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
                <input
                  className="w-full bg-surface-container dark:bg-surface-container-high rounded-2xl py-3 pl-12 pr-4 text-sm text-on-surface"
                  placeholder="Search products..."
                />
              </div>

              <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/60 font-black">Browse</p>
              <div className="grid grid-cols-1 gap-2">
                {publicLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 py-3 px-4 rounded-2xl hover:bg-primary/10 hover:text-primary text-lg font-bold text-on-surface transition-all"
                  >
                    <span className="text-primary">{link.icon || <Package size={20} />}</span>
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="h-px bg-outline-variant/20 my-2" />

              {isAuthenticated ? (
                <>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/60 font-black">Account</p>
                  <div className="grid grid-cols-1 gap-2">
                    {userLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 py-3 px-4 rounded-2xl hover:bg-surface-container text-lg font-bold text-on-surface transition-all"
                      >
                        <span className="text-on-surface-variant">{link.icon}</span>
                        {link.name}
                      </Link>
                    ))}
                    <button className="flex items-center gap-4 py-4 px-4 text-lg font-black text-error mt-2">
                      <LogOut size={20} /> Logout
                    </button>
                  </div>
                </>
              ) : (
                <button
                  onClick={onLoginClick}
                  // onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-primary text-on-primary text-center rounded-[1.25rem] font-black uppercase tracking-widest shadow-xl shadow-primary/20"
                >
                  Join / Login
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;