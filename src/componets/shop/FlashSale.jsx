import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Flame, ShoppingBag } from 'lucide-react';
import gsap from 'gsap';

const defaultFlashItems = [
  { id: 1, name: "Vanguard Watch", salePrice: 124, regPrice: 248, sold: 85, img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=400&h=400&fit=crop" },
  { id: 2, name: "Max Pro Headphones", salePrice: 89, regPrice: 179, sold: 42, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&h=400&fit=crop" },
  { id: 3, name: "Polarized Shades", salePrice: 45, regPrice: 90, sold: 92, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&h=400&fit=crop" },
  { id: 4, name: "Elite Sneakers", salePrice: 72, regPrice: 144, sold: 15, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&h=400&fit=crop" },
  { id: 5, name: "Mechanical Keyboard", salePrice: 150, regPrice: 300, sold: 70, img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400&h=400&fit=crop" },
];

const FlashSale = ({ items = defaultFlashItems }) => {
  const sliderRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        gsap.to(".bg-glow", {
          x: clientX * 0.05,
          y: clientY * 0.05,
          duration: 1.5,
          ease: "power2.out"
        });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        // We set width for Framer Motion constraints
        setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [items]);

  return (
    <section className="relative overflow-hidden py-10 md:py-20 transition-colors duration-500">
      <div className="bg-glow absolute -top-20 -right-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 blur-[100px] md:blur-[150px] rounded-full -z-10 pointer-events-none hidden dark:block" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-14">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-3 md:gap-4">
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="bg-primary p-2.5 md:p-3 rounded-xl md:rounded-2xl shadow-xl shadow-primary/30"
              >
                <Zap size={22} className="text-on-primary fill-on-primary md:w-7 md:h-7" />
              </motion.div>
              <h2 className="text-2xl md:text-5xl font-black tracking-tighter text-on-background uppercase italic">
                Flash <span className="text-primary not-italic">Sales</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-low dark:bg-white/5 border border-outline-variant/10 p-1.5 md:p-2 rounded-xl w-fit">
               <span className="text-[9px] md:text-[10px] font-black pl-2 text-on-surface-variant tracking-widest uppercase">Snap to explore</span>
               <div className="w-8 md:w-12 h-[1px] bg-primary/40" />
            </div>
          </div>

          <button className="hidden md:flex items-center gap-2 text-primary font-black text-xs tracking-tighter group">
            EXPLORE ALL OFFERS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* SMART SNAPPING CONTAINER 
            Using overflow-x-auto with snap-type for the best mobile feel 
        */}
        <div 
          ref={sliderRef} 
          className="flex gap-4 md:gap-8 overflow-x-auto pb-10 no-scrollbar snap-x snap-mandatory touch-pan-x"
          style={{ scrollBehavior: 'smooth' }}
        >
          {items.map((item) => (
            <motion.div 
              key={item.id} 
              // Snap-align ensures the card stops exactly at the start/center
              className="min-w-[80vw] sm:min-w-[300px] md:min-w-[400px] snap-start snap-always bg-surface-container-low dark:bg-surface-container-lowest/30 backdrop-blur-md rounded-[2.5rem] md:rounded-[3.5rem] p-5 md:p-6 border border-outline-variant/10 shadow-sm relative group"
            >
              <div className="absolute top-8 left-8 z-20 bg-error text-on-error text-[8px] md:text-[10px] font-black px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Flame size={12} fill="currentColor" className="animate-pulse" />
                <span>{item.sold > 80 ? 'CRITICAL' : 'OFFER'}</span>
              </div>

              <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-5 md:mb-6 aspect-square bg-surface-dim">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  draggable="false"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                />
                
                <button className="absolute bottom-5 right-5 md:bottom-6 md:right-6 bg-primary text-on-primary p-4 md:p-5 rounded-2xl shadow-2xl md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 active:scale-90">
                  <ShoppingBag size={20} className="md:w-6 md:h-6" />
                </button>
              </div>

              <div className="space-y-3 md:space-y-5 px-1">
                <h3 className="font-black text-xl md:text-2xl text-on-surface dark:text-surface-bright leading-tight line-clamp-1">
                  {item.name}
                </h3>

                <div className="flex items-center gap-3">
                  <span className="text-3xl md:text-4xl font-black text-primary tracking-tighter">${item.salePrice}</span>
                  <span className="text-xs md:text-sm text-on-surface-variant/40 line-through font-bold">${item.regPrice}</span>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="flex justify-between text-[9px] md:text-[10px] font-black text-on-surface-variant uppercase tracking-widest">
                    <span>Sold Progress</span>
                    <span className={item.sold > 80 ? 'text-error' : 'text-primary'}>{item.sold}%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest dark:bg-white/5 rounded-full h-1.5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.sold}%` }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className={`h-full ${item.sold > 80 ? 'bg-error shadow-[0_0_10px_rgba(255,0,0,0.3)]' : 'bg-primary shadow-[0_0_10px_rgba(255,100,0,0.3)]'}`} 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <button className="w-full py-4 rounded-2xl bg-primary text-on-primary font-black text-[11px] tracking-widest uppercase shadow-xl shadow-primary/20 active:scale-95 transition-all">
            See All Offers
          </button>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default FlashSale;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Zap, Flame, ShoppingBag } from 'lucide-react';

// const defaultFlashItems = [
//   { id: 1, name: "Vanguard Watch", salePrice: 124, regPrice: 248, sold: 85, img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=400&h=400&fit=crop" },
//   { id: 2, name: "Max Pro Headphones", salePrice: 89, regPrice: 179, sold: 42, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&h=400&fit=crop" },
//   { id: 3, name: "Polarized Shades", salePrice: 45, regPrice: 90, sold: 92, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&h=400&fit=crop" },
//   { id: 4, name: "Elite Sneakers", salePrice: 72, regPrice: 144, sold: 15, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&h=400&fit=crop" },
// ];

// const FlashSale = ({ items = defaultFlashItems, timer = "02:45:12" }) => {
//   return (
//     // bg-background light mode-e f6f6f6 kintu dark mode-e amra App.jsx theke asha dark feel follow korbo
//     <section className="relative overflow-hidden py-12 transition-colors duration-500">
      
//       {/* Dark Mode Background Glow - Sudhu dark mode-e fute uthbe */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full -z-10 pointer-events-none hidden dark:block" />
//       <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 blur-[100px] rounded-full -z-10 pointer-events-none hidden dark:block" />
      
//       <div className="max-w-7xl mx-auto px-4 md:px-6">
        
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
//           <div className="space-y-4">
//             <div className="flex items-center gap-4">
//               <div className="bg-primary p-3 rounded-2xl shadow-2xl shadow-primary/40 rotate-3">
//                 <Zap size={26} className="text-on-primary fill-on-primary" />
//               </div>
//               <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-on-background uppercase italic">
//                 Flash <span className="text-primary not-italic">Sales</span>
//               </h2>
//             </div>

//             {/* Dark Timer UI */}
//             <div className="flex items-center gap-4 bg-surface-container-high dark:bg-surface-container border border-outline-variant/10 p-3 rounded-[1.5rem] w-fit shadow-inner">
//               <div className="flex flex-col border-r border-outline-variant/20 pr-4">
//                 <span className="text-[9px] font-black text-on-surface-variant uppercase tracking-[0.2em] leading-none">Limited</span>
//                 <span className="text-[11px] font-black text-error uppercase tracking-[0.1em]">Time left</span>
//               </div>
              
//               <div className="flex items-center gap-3">
//                 {timer.split(':').map((unit, i) => (
//                   <React.Fragment key={i}>
//                     <div className="bg-inverse-surface dark:bg-surface-container-highest text-surface-bright dark:text-primary w-12 h-12 flex items-center justify-center rounded-xl font-mono font-black text-2xl shadow-xl">
//                       {unit}
//                     </div>
//                     {i < 2 && <span className="text-primary font-black animate-pulse text-xl">:</span>}
//                   </React.Fragment>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center gap-3 bg-surface-container-highest dark:bg-primary px-8 py-4 rounded-full font-black text-xs tracking-widest text-on-surface dark:text-on-primary shadow-xl shadow-primary/10 transition-all hover:bg-primary hover:text-on-primary"
//           >
//             SEE ALL OFFERS <ArrowRight size={18} />
//           </motion.button>
//         </div>

//         {/* Horizontal Scroll Area */}
//         <div className="flex gap-6 overflow-x-auto pb-12 no-scrollbar snap-x">
//           {items.map((item) => (
//             <motion.div 
//               key={item.id} 
//               whileHover={{ y: -10 }}
//               className="min-w-[280px] md:min-w-[340px] snap-start bg-surface-container-lowest dark:bg-surface-container-low rounded-[3rem] p-5 border border-outline-variant/10 shadow-sm hover:shadow-2xl dark:hover:shadow-primary/5 transition-all group relative overflow-hidden"
//             >
//               {/* Hot Sale Tag */}
//               <div className={`absolute top-8 left-8 z-20 text-[10px] font-black px-4 py-2 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-md ${
//                 item.sold > 80 ? 'bg-error text-on-error' : 'bg-primary text-on-primary'
//               }`}>
//                 <Flame size={14} fill="currentColor" className="animate-bounce" />
//                 <span>{item.sold > 80 ? 'CRITICAL STOCK' : '60% OFF'}</span>
//               </div>

//               {/* Image with Darker Overlay */}
//               <div className="relative rounded-[2.5rem] overflow-hidden mb-6 aspect-[4/5] bg-surface-container-high dark:bg-surface-dim">
//                 <img 
//                   src={item.img} 
//                   alt={item.name} 
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0" 
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
//                 <button className="absolute bottom-6 right-6 bg-primary text-on-primary p-4 rounded-2xl shadow-2xl translate-y-20 group-hover:translate-y-0 transition-transform duration-500 hover:scale-110 active:scale-90">
//                   <ShoppingBag size={22} />
//                 </button>
//               </div>

//               {/* Content - Using Dark-friendly Colors */}
//               <div className="px-2 space-y-4">
//                 <div>
//                   <h3 className="font-black text-xl text-on-surface dark:text-surface-bright leading-tight line-clamp-1 mb-1">
//                     {item.name}
//                   </h3>
//                   <div className="flex items-center gap-3">
//                     <span className="text-3xl font-black text-primary tracking-tighter">${item.salePrice}</span>
//                     <span className="text-sm text-on-surface-variant/50 line-through font-bold">${item.regPrice}</span>
//                   </div>
//                 </div>

//                 {/* Modern Progress Bar */}
//                 <div className="space-y-3 pt-2">
//                   <div className="flex justify-between items-center text-[10px] font-black tracking-widest text-on-surface-variant">
//                     <span>PROGRESS BAR</span>
//                     <span className={item.sold > 80 ? 'text-error' : 'text-primary'}>{item.sold}% SOLD</span>
//                   </div>
//                   <div className="w-full bg-surface-container-highest dark:bg-surface-variant rounded-full h-3 overflow-hidden shadow-inner">
//                     <motion.div 
//                       initial={{ width: 0 }} 
//                       whileInView={{ width: `${item.sold}%` }} 
//                       transition={{ duration: 1.5, ease: "circOut" }}
//                       className={`h-full rounded-full ${item.sold > 80 ? 'bg-error shadow-[0_0_15px_rgba(179,27,37,0.5)]' : 'bg-primary shadow-[0_0_15px_rgba(161,58,0,0.5)]'}`} 
//                     />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .no-scrollbar::-webkit-scrollbar { display: none; }
//         .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>
//     </section>
//   );
// };

// export default FlashSale;