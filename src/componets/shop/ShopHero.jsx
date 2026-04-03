import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const defaultHero = {
  tag: "LIMITED TIME",
  title: "Flash Sale",
  highlight: "50% Off",
  description: "Upgrade your lifestyle with our premium curated collection.",
  image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
  buttonText: "Shop The Drop"
};

const ShopHero = ({ data = defaultHero }) => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden group mx-auto bg-background transition-colors duration-500 border border-outline-variant/20 shadow-xl">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={data.image}
          alt="Banner"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Dynamic Gradient Overlay based on Theme Colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent md:bg-gradient-to-r md:from-inverse-surface/80 md:to-transparent z-10" />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end md:justify-center p-8 md:px-20 lg:px-32 z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl space-y-5 md:space-y-8"
        >
          {/* Tag - Using Primary Fixed for high visibility */}
          <div className="flex items-center gap-2">
            <span className="px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-black text-[10px] md:text-xs tracking-[0.2em] shadow-lg shadow-primary/20">
              {data.tag}
            </span>
            <div className="h-[2px] w-12 bg-primary-fixed-dim/50 hidden md:block"></div>
          </div>

          {/* Title - Responsive Sizing */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-surface-bright leading-[1] tracking-tighter italic">
            {data.title} <br/>
            <span className="text-primary-fixed-dim not-italic drop-shadow-xl">{data.highlight}</span>
          </h1>

          {/* Description - Using On-Surface-Variant style but bright for readability */}
          <p className="text-surface-container-low text-sm md:text-xl font-medium max-w-sm md:max-w-md leading-relaxed opacity-90">
            {data.description}
          </p>

          {/* Button Logic - Material 3 Primary Container Style */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn bg-primary text-on-primary px-8 py-4 rounded-2xl md:rounded-3xl font-black text-sm md:text-lg shadow-2xl shadow-primary/30 flex items-center gap-3 transition-colors hover:bg-primary-dim"
            >
              <ShoppingBag size={20} />
              {data.buttonText}
              <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
            
            <button className="hidden sm:flex text-surface-bright font-bold items-center gap-2 border-b-2 border-primary-fixed-dim pb-1 hover:text-primary-fixed-dim transition-colors">
              View Catalog
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Interactive Pagination Indicators */}
      <div className="absolute bottom-10 right-8 md:right-20 flex flex-col gap-3 z-20">
        {[0, 1, 2].map((i) => (
          <div 
            key={i} 
            className={`transition-all duration-500 rounded-full ${
              i === 0 
              ? "h-10 w-1.5 bg-primary-fixed shadow-lg shadow-primary/50" 
              : "h-1.5 w-1.5 bg-surface-bright/30"
            }`}
          />
        ))}
      </div>

      {/* Surface Decorative Element */}
      <div className="absolute top-0 right-0 p-8 z-20 hidden lg:block">
        <div className="w-24 h-24 rounded-full border border-surface-bright/10 backdrop-blur-sm flex items-center justify-center text-surface-bright/20 rotate-12">
          <span className="text-[10px] font-black tracking-widest uppercase text-center leading-none">Premium<br/>Quality</span>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ShoppingBag, ArrowRight } from 'lucide-react';

// const slides = [
//   {
//     tag: "LIMITED TIME",
//     title: "Flash Sale",
//     highlight: "50% Off",
//     description: "Upgrade your lifestyle with our premium curated collection.",
//     image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
//     buttonText: "Shop The Drop"
//   },
//   {
//     tag: "NEW ARRIVAL",
//     title: "Urban Style",
//     highlight: "2026 Edition",
//     description: "Experience the next generation of fashion with our latest drop.",
//     image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
//     buttonText: "Explore Now"
//   },
//   {
//     tag: "EXCLUSIVE",
//     title: "Tech Gear",
//     highlight: "Pro Series",
//     description: "Precision engineered tools for the modern developer.",
//     image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2001&auto=format&fit=crop",
//     buttonText: "Get Yours"
//   },
//   {
//     tag: "TRENDING",
//     title: "Eco Friendly",
//     highlight: "Pure Nature",
//     description: "Sustainable choices for a better and greener future.",
//     image: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=2013&auto=format&fit=crop",
//     buttonText: "Shop Green"
//   }
// ];

// const ShopHero = () => {
//   const [current, setCurrent] = useState(0);

//   // Auto-play logic: 4 seconds timer
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 8000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full h-[550px] md:h-[650px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden group mx-auto bg-[#0A0A0A] border border-white/5 shadow-2xl">
      
//       {/* Background Images with AnimatePresence */}
//       <div className="absolute inset-0 z-0">
//         <AnimatePresence mode="wait">
//           <motion.img 
//             key={current}
//             initial={{ scale: 1.1, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 1.05, opacity: 0 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             src={slides[current].image}
//             alt="Banner"
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//         </AnimatePresence>
        
//         {/* Premium Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/80 md:to-transparent z-10" />
//       </div>

//       {/* Content Section */}
//       <div className="absolute inset-0 flex flex-col justify-end md:justify-center p-8 md:px-20 lg:px-32 z-20">
//         <AnimatePresence mode="wait">
//           <motion.div 
//             key={current}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 20 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="max-w-2xl space-y-6 md:space-y-8"
//           >
//             {/* Animated Tag */}
//             <div className="flex items-center gap-3">
//               <span className="px-5 py-2 rounded-full bg-primary text-black font-black text-[10px] md:text-xs tracking-[0.25em] shadow-xl shadow-primary/20">
//                 {slides[current].tag}
//               </span>
//               <div className="h-[1px] w-16 bg-white/20 hidden md:block"></div>
//             </div>

//             {/* Title with Italic Highlight */}
//             <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter italic">
//               {slides[current].title} <br/>
//               <span className="text-primary not-italic inline-block mt-2">{slides[current].highlight}</span>
//             </h1>

//             <p className="text-white/70 text-base md:text-xl font-medium max-w-sm md:max-w-md leading-relaxed">
//               {slides[current].description}
//             </p>

//             <div className="flex flex-wrap items-center gap-5 pt-4">
//               <motion.button 
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group/btn bg-white text-black px-8 py-4 rounded-2xl font-black text-sm md:text-lg flex items-center gap-3 transition-all hover:bg-primary"
//               >
//                 <ShoppingBag size={20} />
//                 {slides[current].buttonText}
//                 <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
//               </motion.button>
              
//               <button className="hidden sm:flex text-white/50 hover:text-white font-bold items-center gap-2 transition-all">
//                 View Collection
//               </button>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
      
//       {/* Vertical Pagination Indicators (Top-to-Bottom) */}
//       <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12 flex flex-col gap-4 z-30">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className="relative group p-2"
//           >
//             <div className={`transition-all duration-500 rounded-full ${
//               i === current 
//               ? "h-12 w-1.5 bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" 
//               : "h-2 w-1.5 bg-white/20 group-hover:bg-white/40"
//             }`} />
            
//             {/* Tooltip on hover */}
//             <span className="absolute right-8 top-1/2 -translate-y-1/2 px-2 py-1 bg-white text-black text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
//               Slide 0{i + 1}
//             </span>
//           </button>
//         ))}
//       </div>

//       {/* Premium Badge */}
//       <div className="absolute top-0 right-0 p-10 z-20 hidden lg:block">
//         <motion.div 
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="w-28 h-28 rounded-full border border-white/10 backdrop-blur-md flex items-center justify-center"
//         >
//           <div className="text-white/20 text-[9px] font-black tracking-[0.3em] uppercase text-center">
//             Premium<br/>Quality<br/>2026
//           </div>
//         </motion.div>
//       </div>

//     </section>
//   );
// };

// export default ShopHero;