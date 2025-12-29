
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PARTNERS, CUSTOMERS } from '../constants';

interface LogoGroupProps {
  title: string;
  items: { name: string; logo: string }[];
  showControls?: boolean;
  isPartnerGroup?: boolean;
}

const SectionTitle: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center justify-center space-x-4 mb-14">
    {/* 左侧红色装饰 - 竖线样式 */}
    <div className="flex items-end space-x-1.5">
      <div className="w-1.5 h-7 bg-[#E60012] rounded-full"></div>
      <div className="w-1.5 h-4 bg-[#E60012] rounded-full opacity-40"></div>
    </div>
    
    <h3 className="text-3xl font-bold text-[#333] tracking-wide mx-2">{text}</h3>
    
    {/* 右侧红色装饰 - 竖线样式 */}
    <div className="flex items-end space-x-1.5">
      <div className="w-1.5 h-4 bg-[#E60012] rounded-full opacity-40"></div>
      <div className="w-1.5 h-7 bg-[#E60012] rounded-full"></div>
    </div>
  </div>
);

const LogoGroup: React.FC<LogoGroupProps> = ({ title, items, showControls = false, isPartnerGroup = false }) => (
  <div className="py-16 relative">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle text={title} />
      
      <div className="relative">
        {/* 侧边导航按钮 - 样式对齐截图 */}
        {showControls && (
          <>
            <button className="absolute -left-12 lg:-left-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#E0E0E0] hover:bg-gray-100 transition-all z-20 shadow-sm">
              <ChevronLeft className="w-9 h-9" />
            </button>
            <button className="absolute -right-12 lg:-right-20 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#E0E0E0] hover:bg-gray-100 transition-all z-20 shadow-sm">
              <ChevronRight className="w-9 h-9" />
            </button>
          </>
        )}

        {/* Logo网格 - 完全按照图片适配 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-6">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex items-center justify-center p-6 h-32 transition-all duration-300 ${
                isPartnerGroup 
                  ? 'bg-[#F9F9FB] rounded-xl hover:bg-[#F2F3F5]' 
                  : 'bg-white border border-[#F2F2F2] rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
              }`}
            >
              <img 
                src={item.logo} 
                alt={item.name} 
                className="max-h-full max-w-full object-contain mix-blend-multiply" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<div class="text-sm font-bold text-gray-500 text-center leading-tight">${item.name}</div>`;
                }}
              />
            </div>
          ))}
        </div>

        {/* 分页指示器 - 样式对齐截图 */}
        {showControls && (
          <div className="flex justify-center space-x-3 mt-14">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E60012]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#D8D8D8]"></div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const LogoTicker: React.FC = () => {
  return (
    <section id="section-partners" className="bg-white min-h-screen snap-start flex flex-col justify-center relative py-24">
      <div className="max-w-7xl mx-auto px-4 w-full mb-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">值得信赖的合作伙伴</h2>
        <p className="text-gray-500">与行业领袖同行，共创物流新生态</p>
      </div>
      {/* 合作客户模块 */}
      <LogoGroup 
        title="合作客户" 
        items={CUSTOMERS} 
        speed={40} 
      />
      
      {/* 合作伙伴模块 */}
      <LogoGroup 
        title="生态伙伴" 
        items={PARTNERS} 
        speed={35} 
        direction="reverse" 
        className="mt-12"
      />
    </section>
  );
};

export default LogoTicker;
