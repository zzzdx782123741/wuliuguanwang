
import React from 'react';
import { PLATFORMS } from '../constants';

const PlatformModules: React.FC = () => {
  return (
    <section id="platforms" className="bg-white">
      {PLATFORMS.map((platform, index) => (
        <div 
          key={platform.id} 
          className="relative min-h-[600px] lg:h-[700px] flex items-center group overflow-hidden border-b border-gray-100 last:border-b-0"
        >
          {/* 背景图：带有平滑的缩放动画 */}
          <div className="absolute inset-0">
            <img 
              src={platform.bgImage} 
              alt={platform.name}
              className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110"
            />
            {/* 动态渐变遮罩：增加景深感和文字可读性 */}
            <div className={`absolute inset-0 bg-gradient-to-r transition-opacity duration-1000 ${
              index % 2 === 0 
                ? 'from-black/90 via-black/50 to-transparent' 
                : 'from-transparent via-black/50 to-black/90'
            }`}></div>
          </div>

          <div className={`max-w-7xl mx-auto px-4 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24 py-16 ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}>
            
            {/* 左侧/主内容区：强化层级关系 */}
            <div className="flex-[1.4] text-white">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#E60012] rounded-full text-[11px] font-black uppercase tracking-[0.25em] mb-8 shadow-xl shadow-red-600/30">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                <span>核心业务平台 0{index + 1}</span>
              </div>
              
              <h3 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight drop-shadow-2xl tracking-tight italic">
                {platform.name}
              </h3>
              
              <p className="text-xl text-gray-200 leading-relaxed mb-12 max-w-2xl font-light opacity-90 border-l-4 border-[#E60012] pl-8">
                {platform.description}
              </p>

              {/* 核心能力图标网格：参考截图重构，面积更大，质感更丰富 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
                {platform.capabilities.map((cap) => (
                  <div 
                    key={cap.label} 
                    className="flex flex-col items-center justify-center pt-10 pb-8 px-4 bg-white/10 backdrop-blur-xl rounded-[32px] border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-500 group/cap cursor-default shadow-2xl"
                  >
                    {/* 图标容器：白底大圆角 */}
                    <div className="w-16 h-16 bg-white rounded-[20px] flex items-center justify-center mb-6 shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-transform duration-500 group-hover/cap:scale-110 group-hover/cap:-translate-y-1">
                      <div className="text-[#E60012] transform scale-125">
                        {cap.icon}
                      </div>
                    </div>
                    {/* 标签文字：加粗白字 */}
                    <span className="text-base font-bold tracking-widest text-white drop-shadow-md">
                      {cap.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 右侧/下载区：维持极简美学 */}
            <div className="lg:w-[340px] w-full bg-white/95 backdrop-blur-2xl p-10 rounded-[56px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col items-center transform transition-all hover:scale-[1.02] duration-700 border border-white/60">
              <div className="text-center mb-10">
                <h4 className="text-[#1A1C2E] font-bold text-2xl mb-3 tracking-tight">立即使用产品</h4>
                <div className="w-14 h-[4px] bg-[#E60012] mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-5 w-full">
                {platform.downloads.map((dl) => (
                  <div 
                    key={dl.name} 
                    className="flex items-center bg-[#F8FAFC] rounded-[28px] p-4 border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-500 group/qr"
                  >
                    <div className="bg-white p-2 rounded-xl shadow-md mr-5 group-hover/qr:scale-105 transition-all duration-300">
                      <img src={dl.qrUrl} alt={dl.name} className="w-16 h-16 mix-blend-multiply" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] font-bold text-gray-800 tracking-wide mb-1">{dl.name}</span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">扫描二维码下载</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-100 w-full text-center">
                <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.4em] opacity-50">
                  Secure & Professional
                </p>
              </div>
            </div>

          </div>
        </div>
      ))}
    </section>
  );
};

export default PlatformModules;
