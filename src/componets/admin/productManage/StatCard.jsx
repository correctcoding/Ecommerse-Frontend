import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const StatCard = ({ title, value, colorClass = "text-slate-900" }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    const targetValue = parseInt(value.replace(/,/g, ''));
    gsap.fromTo(numberRef.current, 
      { innerText: 0 }, 
      { 
        innerText: targetValue, 
        duration: 1.5, 
        snap: { innerText: 1 },
        ease: "power3.out",
        scrollTrigger: numberRef.current,
        onUpdate: function() {
          numberRef.current.innerHTML = Math.ceil(this.targets()[0].innerText).toLocaleString();
        }
      }
    );
  }, [value]);

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{title}</p>
      <p ref={numberRef} className={`text-3xl font-extrabold mt-2 dark:text-white ${colorClass}`}>
        0
      </p>
    </div>
  );
};

export default StatCard;