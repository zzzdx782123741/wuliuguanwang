
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HomeBanner: React.FC = () => {
  return (
    <section id="section-home" className="relative h-screen snap-start w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2000" 
          alt="Red Logistics Truck" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-4 md:px-12 w-full h-full flex flex-col justify-center">
        <div className="max-w-7xl">
          <div className="inline-block px-6 py-2 bg-wanlian-red/20 border border-wanlian-red/40 text-red-400 text-base font-bold rounded-full mb-12 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            万连通 · 智慧物流生态
          </div>
          
          <h1 className="flex flex-row items-center gap-6 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 whitespace-nowrap">
            <span className="text-6xl md:text-7xl lg:text-8xl xl:text-[140px] font-black text-white leading-none tracking-tight">
              万物互联
            </span>
            <div className="relative flex flex-col items-center">
              <span className="relative z-10 text-6xl md:text-7xl lg:text-8xl xl:text-[140px] font-black text-[#E60012] leading-none whitespace-nowrap italic">
                应需易达
              </span>
            </div>
          </h1>
          
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 pl-6 md:pl-10 border-l-8 border-[#E60012]">
            <p className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 tracking-wide">
              5A级网络货运平台
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 leading-relaxed font-light">
              为企业提供整车货运全生命周期解决方案
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <svg className="w-12 h-12 lg:w-14 lg:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HomeBanner;
