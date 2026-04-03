import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

const defaultCategories = [
  { id: 1, name: "Electronics", icon: "Smartphone", color: "text-primary" },
  { id: 2, name: "Fashion", icon: "Shirt", color: "text-secondary" },
  { id: 3, name: "Home", icon: "Sofa", color: "text-tertiary" },
  { id: 4, name: "Health", icon: "Dumbbell", color: "text-primary-dim" },
  { id: 5, name: "Sports", icon: "Trophy", color: "text-secondary-dim" },
  { id: 6, name: "Beauty", icon: "Sparkles", color: "text-tertiary-dim" },
];

const CategorySection = ({ categories = defaultCategories }) => {
  return (
    // Background dynamic based on theme (surface or background)
    <section className="py-12 px-4 md:px-0 max-w-7xl mx-auto bg-background dark:bg-inverse-surface/5 transition-colors duration-300">
      
      {/* Header Section */}
      <div className="flex items-end justify-between mb-8 px-2">
        <div className="space-y-1">
          <span className="text-primary font-black text-xs tracking-[0.25em] uppercase block">
            Curated For You
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-on-background dark:text-surface-bright tracking-tight">
            Top Categories
          </h2>
        </div>
        
        <button className="group flex items-center gap-2 text-on-surface-variant font-bold text-sm hover:text-primary transition-all active:scale-95">
          View All 
          <div className="bg-surface-container group-hover:bg-primary group-hover:text-on-primary p-1.5 rounded-full transition-colors">
            <Icons.ChevronRight size={14} />
          </div>
        </button>
      </div>

      {/* Categories Wrapper */}
      <div className="flex md:grid md:grid-cols-6 gap-6 overflow-x-auto pb-6 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 snap-x">
        {categories.map((cat, index) => {
          const IconComp = Icons[cat.icon] || Icons.Box;
          return (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 cursor-pointer min-w-[110px] md:min-w-full snap-center group"
            >
              {/* Icon Container with Theme Colors */}
              <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-[2.5rem] flex items-center justify-center transition-all duration-500 shadow-sm border border-outline-variant/30 
                bg-surface-container-low dark:bg-surface-container-lowest/10 
                group-hover:rounded-2xl group-hover:bg-primary-container group-hover:shadow-xl group-hover:shadow-primary/20 group-hover:-translate-y-2`}
              >
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <IconComp 
                   strokeWidth={1.5} 
                   className={`relative z-10 w-8 h-8 md:w-10 md:h-10 transition-all duration-300 ${cat.color} group-hover:text-on-primary-container group-hover:scale-110`} 
                />
              </div>

              {/* Name with On-Surface color */}
              <div className="text-center space-y-1">
                <span className="font-black text-[10px] md:text-xs text-on-surface-variant/70 uppercase tracking-widest block">
                  Shop
                </span>
                <span className="font-bold text-sm md:text-base text-on-surface dark:text-surface-bright tracking-tight transition-colors group-hover:text-primary">
                  {cat.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default CategorySection;