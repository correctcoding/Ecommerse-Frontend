import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, X, AlertCircle, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const AuthPopup = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      gsap.to(".home-content-blur", {
        filter: "blur(20px)",
        scale: 0.96,
        duration: 1,
        ease: "expo.out"
      });
    } else {
      gsap.to(".home-content-blur", {
        filter: "blur(0px)",
        scale: 1,
        duration: 0.6,
        ease: "power2.inOut"
      });
    }
  }, [isOpen]);

  const handleAuth = (e) => {
    e.preventDefault();
    setError('');
    if (isLogin && email !== "admin@dev.com") {
      setError("Account not found. Please register.");
      gsap.to(".modal-box", { x: 6, repeat: 5, yoyo: true, duration: 0.04 });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        // FIX 1: Overflow-y-auto add kora hoyeche jate choto screen-e scroll kora jay
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto outline-none">
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 400 }}
            // FIX 2: my-auto ebong max-h add kora hoyeche jate kete na jay
            className="modal-box relative w-full max-w-[420px] my-auto bg-[#0A0A0A] border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-2xl overflow-hidden"
          >
            {/* Close Button - Responsive Position */}
            <button onClick={onClose} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/40 hover:text-primary transition-colors p-1 z-10">
              <X size={24} />
            </button>

            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-[2px] bg-primary rounded-full" />
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-primary">Security Portal</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                {isLogin ? 'Sign' : 'Create'} <span className="text-primary italic">Account</span>
              </h2>
            </div>

            {/* Social Buttons - Responsive Gap */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
                <span className="text-[10px] font-black uppercase text-white">Google</span>
              </button>

              <button className="flex items-center justify-center gap-2 py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span className="text-[10px] font-black uppercase text-white">Github</span>
              </button>
            </div>

            <div className="relative flex items-center gap-4 mb-6 sm:mb-8">
              <div className="h-[1px] flex-1 bg-white/10" />
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40">OR</span>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>

            <form onSubmit={handleAuth} className="space-y-3 sm:space-y-4">
              <div className="relative">
                <div className={`group flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 bg-white/5 rounded-xl sm:rounded-2xl border transition-all duration-300 ${error ? 'border-red-500' : 'border-white/10 focus-within:border-primary'}`}>
                  <Mail size={18} className="text-white/40 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent border-none outline-none w-full text-sm font-semibold text-white placeholder:text-white/30"
                    required
                  />
                </div>
                <AnimatePresence>
                  {error && (
                    <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="absolute -bottom-5 sm:-bottom-6 left-1 flex items-center gap-1.5 text-red-500">
                      <AlertCircle size={10} />
                      <span className="text-[9px] font-bold uppercase">{error}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="group flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 focus-within:border-primary transition-all duration-300">
                <Lock size={18} className="text-white/40 group-focus-within:text-primary transition-colors" />
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="bg-transparent border-none outline-none w-full text-sm font-semibold text-white placeholder:text-white/30"
                  required
                />
              </div>

              <button type="submit" className="w-full mt-2 py-3.5 sm:py-4 bg-primary text-black rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-[11px] tracking-[0.2em] uppercase shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                {isLogin ? 'Verify' : 'Join'}
                <ArrowRight size={16} />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <button onClick={() => { setIsLogin(!isLogin); setError(''); }} className="text-[10px] sm:text-[11px] font-black tracking-widest uppercase text-white/50 hover:text-primary transition-colors leading-relaxed">
                {isLogin ? "New here?" : "Member?"} 
                <span className="ml-2 text-primary underline underline-offset-4 decoration-primary/40">
                  {isLogin ? 'Register' : 'Login'}
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthPopup;