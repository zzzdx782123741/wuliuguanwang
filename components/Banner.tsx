
import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden flex items-center mt-20">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover" 
          alt="Logistics background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="max-w-2xl text-white">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            万物互联 <span className="text-[#E60012]">应需易达</span>
          </h2>
          <p className="text-2xl font-light mb-4 text-gray-200">
            5A级网络货运平台
          </p>
          <p className="text-xl mb-10 text-gray-300">
            为企业提供整车货运全生命周期解决方案
          </p>
          <div className="flex space-x-4">
            <button className="bg-[#E60012] px-8 py-3 rounded-full font-bold hover:bg-[#c4000f] transition-all transform hover:scale-105">
              立即咨询
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-all">
              了解更多
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
