
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PLATFORMS } from '../constants';

const PlatformModules: React.FC = () => {
  const [previewItem, setPreviewItem] = useState<{ url: string; name: string } | null>(null);

  const handlePlatformClick = (id: string) => {
    // 撮合平台特殊处理，跳转到独立页
    if (id === 'matching') {
        window.location.hash = '#platform/matching';
        return;
    }
    // 车后电商特殊处理，跳转到车后服务页
    if (id === 'aftermarket') {
        window.location.hash = '#aftersales';
        return;
    }
    // 多式联运平台特殊处理，跳转到外部链接
    if (id === 'multimodal') {
        window.open('https://www.10000da.cn/multimodal-transport', '_blank');
        return;
    }
    // 其他平台暂无独立页，暂时保留原样或提示
    // window.location.href = `/platform/${id}`; 
    console.log(`Navigate to ${id}`);
  };

  return (
    <section id="platforms" className="bg-white">
      {PLATFORMS.map((platform, index) => (
        <div 
          key={platform.id} 
          id={`section-platform-${index}`}
          className="relative h-screen snap-start flex items-center group overflow-hidden border-b border-gray-100 last:border-b-0 cursor-pointer"
          onClick={() => handlePlatformClick(platform.id)}
        >
          {/* Scroll hint arrow - Top (Up) */}
          <div 
             className="absolute top-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-80 hover:opacity-100 transition-opacity z-20"
             onClick={(e) => {
               e.stopPropagation();
               const prevSection = index === 0 ? 'section-home' : `section-platform-${index - 1}`;
               document.getElementById(prevSection)?.scrollIntoView({ behavior: 'smooth' });
             }}
           >
             <svg 
               className="w-8 h-8 lg:w-10 lg:h-10 text-white drop-shadow-md rotate-180" 
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24"
             >
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
             </svg>
           </div>

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

          <div className={`max-w-[1920px] mx-auto px-4 md:px-8 2xl:px-16 relative z-10 w-full flex flex-col lg:flex-row items-center justify-center h-full gap-8 lg:gap-32 py-12 lg:py-20 ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}>
            
            {/* 左侧/主内容区：强化层级关系 */}
            <div className="flex-[1.5] text-white flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center space-x-3 px-6 py-2 bg-[#E60012] rounded-full text-xs lg:text-sm font-black uppercase tracking-[0.3em] mb-6 lg:mb-12 shadow-xl shadow-red-600/30 w-fit">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span>核心业务平台 0{index + 1}</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl font-bold mb-6 lg:mb-12 leading-tight drop-shadow-2xl tracking-tight italic">
                {platform.name}
              </h3>
              
              <p className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-gray-200 leading-relaxed mb-8 lg:mb-16 max-w-3xl font-light opacity-90 lg:border-l-4 lg:border-l-8 border-[#E60012] lg:pl-6 lg:pl-10">
                {platform.description}
              </p>

              <button 
                className="flex items-center space-x-6 text-white font-bold mb-8 lg:mb-20 group/btn hover:text-[#E60012] transition-colors lg:ml-6 lg:ml-10 text-4xl lg:text-5xl"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlatformClick(platform.id);
                }}
              >
                <span>查看详情</span>
                <ArrowRight className="w-12 h-12 lg:w-14 lg:h-14 group-hover/btn:translate-x-2 transition-transform" />
              </button>

              {/* 核心能力图标网格 - 调整后：悬停显示长条红框描述，覆盖下方区域 */}
              <div className="flex flex-row justify-between w-full max-w-2xl lg:max-w-none mt-8 relative">
                {platform.capabilities.map((cap) => (
                  <div 
                    key={cap.label} 
                    className="relative group/cap flex flex-col items-center justify-start flex-1 cursor-default mx-1 first:ml-0 last:mr-0"
                  >
                    <div className="flex flex-col items-center justify-center relative z-20 w-full">
                        {/* 图标容器 - 仿照车后价值样式 */}
                        <div className="w-28 h-28 lg:w-32 lg:h-32 bg-white rounded-[24px] flex items-center justify-center shadow-2xl transition-all duration-300 group-hover/cap:bg-[#E60012] group-hover/cap:scale-110 mb-6">
                          <div className="text-[#E60012] group-hover/cap:text-white transition-colors duration-300 transform scale-[2]">
                            {cap.icon}
                          </div>
                        </div>
                        
                        {/* 标题 */}
                        <span className="text-xl font-bold tracking-widest text-white drop-shadow-md text-center whitespace-nowrap z-10 group-hover/cap:text-[#E60012] transition-colors duration-300">
                          {cap.label}
                        </span>
                    </div>
                    
                    {/* 全宽描述框 - 仅桌面端显示，移动端隐藏以防溢出 */}
                    <div className="hidden lg:flex absolute top-[180px] left-0 w-[400%] -left-[0%] group-first/cap:left-0 group-last/cap:-left-[300%] group-[&:nth-child(2)]/cap:-left-[100%] group-[&:nth-child(3)]/cap:-left-[200%] h-auto min-h-[60px] bg-black/60 backdrop-blur-md rounded-[16px] items-center px-8 py-4 opacity-0 group-hover/cap:opacity-100 transition-all duration-300 z-30 pointer-events-none shadow-2xl shadow-black/50 border border-white/10">
                        <div className="w-1.5 h-10 bg-[#E60012] rounded-full mr-6 shrink-0"></div>
                        <p className="text-xl md:text-2xl text-white font-bold leading-relaxed tracking-wide">
                            {cap.description}
                        </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 右侧/下载区 */}
            {platform.downloads && (
              <div 
                className="hidden lg:flex lg:w-[320px] 2xl:w-[360px] w-full bg-black/30 backdrop-blur-md p-6 lg:p-8 rounded-[32px] border border-white/10 flex-col items-center h-auto justify-center cursor-default shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center mb-6">
                  <h4 className="text-white font-bold text-xl lg:text-2xl mb-2 tracking-wide">产品下载</h4>
                  <p className="text-gray-400 text-xs lg:text-sm tracking-[0.2em] uppercase">随时随地 掌控运力</p>
                </div>
                
                <div className="space-y-4 w-full px-2 flex-grow flex flex-col justify-center">
                  {platform.downloads.map((dl) => (
                    <div 
                      key={dl.name} 
                      className="flex flex-col items-center bg-white/5 rounded-xl p-3 border border-white/5 hover:bg-white/10 transition-all duration-300 group/qr shrink-0 cursor-zoom-in"
                      onClick={() => setPreviewItem({ url: dl.qrUrl, name: dl.name })}
                    >
                      <div className="bg-white p-2 rounded-lg shadow-inner mb-2 group-hover/qr:scale-105 transition-all duration-300">
                        <img src={dl.qrUrl} alt={dl.name} className="w-20 h-20 lg:w-24 lg:h-24" />
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-sm lg:text-base font-bold text-gray-100 tracking-wide mb-0.5">{dl.name}</span>
                        <span className="text-[10px] lg:text-xs text-gray-500 font-medium">扫码一键下载</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/5 w-full text-center">
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] opacity-60">
                    Secure & Professional
                  </p>
                </div>
              </div>
            )}
            
            {!platform.downloads && (
                <div className="hidden lg:flex lg:w-[360px] opacity-0"></div>
            )}

          </div>

          {/* Scroll hint arrow - Bottom center */}
          <div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-80 hover:opacity-100 transition-opacity z-20"
            onClick={(e) => {
              e.stopPropagation();
              const nextSection = index === PLATFORMS.length - 1 ? 'section-stats' : `section-platform-${index + 1}`;
              document.getElementById(nextSection)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
             <svg 
               className="w-8 h-8 lg:w-10 lg:h-10 text-white drop-shadow-md" 
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24"
             >
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
             </svg>
           </div>
        </div>
      ))}
      {/* Image Preview Modal - Refined Style */}
      {previewItem && (
        <div 
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setPreviewItem(null)}
        >
          <div 
            className="bg-[#1C1F26]/90 backdrop-blur-md p-8 rounded-[32px] border border-white/10 flex flex-col items-center shadow-2xl transform transition-all scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white p-3 rounded-2xl mb-6 shadow-lg">
              <img 
                src={previewItem.url} 
                alt={previewItem.name} 
                className="w-48 h-48 object-contain"
              />
            </div>
            <h4 className="text-white text-xl font-bold mb-2 tracking-wide">{previewItem.name}</h4>
            <p className="text-gray-400 text-sm font-medium">扫码一键下载</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PlatformModules;
