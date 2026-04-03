// import React from 'react';
// import { motion } from 'framer-motion';
// import { Star, ShoppingCart, ChevronLeft, ChevronRight, Sparkles, BrainCircuit } from 'lucide-react';

// const defaultAIItems = [
//   { id: 1, name: "Wireless Headphones", price: 89.99, rating: 4.8, reviews: "1.2k", discount: "20% OFF", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop" },
//   { id: 2, name: "Prime Lens", price: 249.00, rating: 4.9, reviews: "854", discount: "NEW", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop" },
//   { id: 3, name: "Smart Floor Lamp", price: 120.00, rating: 4.6, reviews: "2.1k", discount: null, img: "https://images.unsplash.com/photo-1507473885765-e6ed657f9971?q=80&w=500&auto=format&fit=crop" },
//   { id: 4, name: "Titan Book 14 OLED", price: 1299.00, rating: 4.7, reviews: "341", discount: "15% OFF", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=500&auto=format&fit=crop" },
// ];

// const AIRecommendation = ({ items = defaultAIItems }) => {
//   return (
//     <section className="relative py-20 transition-colors duration-500 overflow-hidden">
      
//       {/* AI Futuristic Glows - Deep dark theme optimization */}
//       <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none hidden dark:block" />
//       <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-tertiary/10 blur-[150px] rounded-full pointer-events-none hidden dark:block" />

//       <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <div className="bg-tertiary/10 p-2 rounded-xl border border-tertiary/20">
//                 <BrainCircuit size={20} className="text-tertiary animate-pulse" />
//               </div>
//               <span className="text-[10px] font-black text-tertiary uppercase tracking-[0.3em]">Smart Engine</span>
//             </div>
            
//             <h2 className="text-4xl md:text-6xl font-black text-on-background tracking-tighter leading-none">
//               AI <span className="text-primary italic font-serif">Picks</span>
//             </h2>
//             <p className="max-w-md text-on-surface-variant/70 text-sm md:text-base font-medium">
//               Curated items matching your unique tech stack and aesthetic preferences.
//             </p>
//           </div>

//           {/* Nav Controls - Glassmorphism */}
//           <div className="flex gap-4">
//             <button className="h-14 w-14 rounded-2xl bg-surface-container-high/40 backdrop-blur-xl border border-outline-variant/10 flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-xl">
//               <ChevronLeft size={24} />
//             </button>
//             <button className="h-14 w-14 rounded-2xl bg-surface-container-high/40 backdrop-blur-xl border border-outline-variant/10 flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-xl">
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {items.map((item, index) => (
//             <motion.div 
//               key={item.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group relative bg-surface-container-low/30 dark:bg-surface-container-lowest/20 backdrop-blur-sm rounded-[2.5rem] p-4 border border-outline-variant/10 hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
//             >
//               {/* Product Image */}
//               <div className="relative aspect-[1/1] rounded-[2rem] overflow-hidden bg-surface-dim shadow-inner mb-5">
//                 <img 
//                   src={item.img} 
//                   alt={item.name} 
//                   className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
//                 />
                
//                 {/* Badge - Glassmorphic */}
//                 {item.discount && (
//                   <div className="absolute top-4 left-4 bg-background/60 backdrop-blur-md border border-outline-variant/20 text-on-background text-[10px] font-black px-4 py-2 rounded-full shadow-lg">
//                     {item.discount}
//                   </div>
//                 )}

//                 {/* Quick Add Overlay */}
//                 <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                    <motion.button 
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="bg-primary text-on-primary p-5 rounded-full shadow-2xl"
//                    >
//                      <ShoppingCart size={24} />
//                    </motion.button>
//                 </div>
//               </div>

//               {/* Info Area */}
//               <div className="px-2 space-y-3">
//                 <div className="flex items-center justify-between text-on-surface-variant">
//                   <div className="flex items-center gap-1.5 bg-surface-container-high/50 px-3 py-1 rounded-full border border-outline-variant/10">
//                     <Star size={12} fill="currentColor" className="text-tertiary" />
//                     <span className="text-[11px] font-black">{item.rating}</span>
//                   </div>
//                   <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">{item.reviews} Reviews</span>
//                 </div>

//                 <h3 className="text-lg font-black text-on-surface leading-tight line-clamp-1 group-hover:text-primary transition-colors">
//                   {item.name}
//                 </h3>

//                 <div className="pt-2 flex items-end justify-between">
//                   <div className="flex flex-col">
//                     <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] leading-none mb-1">MSRP</span>
//                     <span className="text-2xl font-black text-on-surface tracking-tighter">${item.price}</span>
//                   </div>
                  
//                   <div className="h-10 w-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
//                     <Sparkles size={18} />
//                   </div>
//                 </div>
//               </div>

//               {/* Decorative Corner Glow */}
//               <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AIRecommendation;

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingCart, ChevronLeft, ChevronRight, Sparkles, BrainCircuit } from 'lucide-react';

const defaultAIItems = [
  { id: 1, name: "Wireless Headphones", price: 89.99, rating: 4.8, reviews: "1.2k", discount: "20% OFF", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop" },
  { id: 2, name: "Prime Lens", price: 249.00, rating: 4.9, reviews: "854", discount: "NEW", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop" },
  { id: 3, name: "Smart Floor Lamp", price: 120.00, rating: 4.6, reviews: "2.1k", discount: null, img: "https://images.unsplash.com/photo-1507473885765-e6ed657f9971?q=80&w=500&auto=format&fit=crop" },
  { id: 4, name: "Titan Book 14 OLED", price: 1299.00, rating: 4.7, reviews: "341", discount: "15% OFF", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=500&auto=format&fit=crop" },
  { id: 1, name: "Wireless Headphones", price: 89.99, rating: 4.8, reviews: "1.2k", discount: "20% OFF", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop" },
  { id: 2, name: "Prime Lens", price: 249.00, rating: 4.9, reviews: "854", discount: "NEW", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop" },
  { id: 3, name: "Smart Floor Lamp", price: 120.00, rating: 4.6, reviews: "2.1k", discount: null, img: "https://images.unsplash.com/photo-1507473885765-e6ed657f9971?q=80&w=500&auto=format&fit=crop" },
  { id: 4, name: "Titan Book 14 OLED", price: 1299.00, rating: 4.7, reviews: "341", discount: "15% OFF", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=500&auto=format&fit=crop" },
  { id: 1, name: "Wireless Headphones", price: 89.99, rating: 4.8, reviews: "1.2k", discount: "20% OFF", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop" },
  { id: 2, name: "Prime Lens", price: 249.00, rating: 4.9, reviews: "854", discount: "NEW", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop" },
  { id: 3, name: "Smart Floor Lamp", price: 120.00, rating: 4.6, reviews: "2.1k", discount: null, img: "https://images.unsplash.com/photo-1507473885765-e6ed657f9971?q=80&w=500&auto=format&fit=crop" },
  { id: 4, name: "Titan Book 14 OLED", price: 1299.00, rating: 4.7, reviews: "341", discount: "15% OFF", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=500&auto=format&fit=crop" },
];

const AIRecommendation = ({ items = defaultAIItems }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Scroll function for buttons
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // Update button visibility on scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      return () => currentRef.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="relative py-12 md:py-20 transition-colors duration-500 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none hidden dark:block" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-tertiary/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none hidden dark:block" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-tertiary/10 p-2 rounded-xl border border-tertiary/20">
                <BrainCircuit size={18} className="text-tertiary animate-pulse" />
              </div>
              <span className="text-[9px] font-black text-tertiary uppercase tracking-[0.3em]">Smart Engine</span>
            </div>
            
            <h2 className="text-3xl md:text-6xl font-black text-on-background tracking-tighter leading-none">
              AI <span className="text-primary italic font-serif">Picks</span>
            </h2>
            <p className="max-w-xs md:max-w-md text-on-surface-variant/70 text-xs md:text-base font-medium">
              Curated items matching your unique tech stack and aesthetic preferences.
            </p>
          </div>

          {/* Desktop/Tablet Nav Controls */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`h-12 w-12 md:h-14 md:w-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg border border-outline-variant/10 backdrop-blur-xl
                ${canScrollLeft ? 'bg-surface-container-high/40 text-on-surface hover:bg-primary hover:text-on-primary' : 'bg-surface-container-low/20 text-on-surface/20 cursor-not-allowed'}`}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`h-12 w-12 md:h-14 md:w-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg border border-outline-variant/10 backdrop-blur-xl
                ${canScrollRight ? 'bg-surface-container-high/40 text-on-surface hover:bg-primary hover:text-on-primary' : 'bg-surface-container-low/20 text-on-surface/20 cursor-not-allowed'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 md:gap-8 no-scrollbar snap-x snap-mandatory touch-pan-x pb-8"
        >
          {items.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="min-w-[85vw] sm:min-w-[calc(50%-16px)] lg:min-w-[calc(25%-24px)] snap-start snap-always 
                         group relative bg-surface-container-low/30 dark:bg-surface-container-lowest/20 backdrop-blur-sm 
                         rounded-[2rem] md:rounded-[2.5rem] p-4 border border-outline-variant/10 hover:border-primary/40 
                         transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Image Section */}
              <div className="relative aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-surface-dim mb-5">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
                
                {item.discount && (
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-background/80 backdrop-blur-md border border-outline-variant/20 text-on-background text-[9px] md:text-[10px] font-black px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                    {item.discount}
                  </div>
                )}

                <div className="absolute inset-0 bg-primary/20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <motion.button 
                    whileTap={{ scale: 0.9 }}
                    className="bg-primary text-on-primary p-4 rounded-full shadow-2xl"
                   >
                     <ShoppingCart size={20} />
                   </motion.button>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-1 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 bg-surface-container-high/50 px-2 py-0.5 rounded-full border border-outline-variant/10">
                    <Star size={10} fill="currentColor" className="text-tertiary" />
                    <span className="text-[10px] font-black">{item.rating}</span>
                  </div>
                  <button className="md:hidden p-2 bg-primary/10 rounded-full text-primary">
                    <ShoppingCart size={16} />
                  </button>
                </div>

                <h3 className="text-base md:text-lg font-black text-on-surface line-clamp-1 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>

                <div className="flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black text-primary uppercase tracking-[0.2em] mb-0.5">MSRP</span>
                    <span className="text-xl md:text-2xl font-black text-on-surface tracking-tighter">${item.price}</span>
                  </div>
                  
                  <div className="h-9 w-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                    <Sparkles size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default AIRecommendation;