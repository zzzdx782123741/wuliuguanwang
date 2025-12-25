
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

      {/* Safety Section - Integrated here */}
      <div id="safety" className="mt-32 border-t border-gray-100 pt-24 pb-12 snap-start scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 bg-[#E60012] text-white text-[11px] font-bold rounded-full mb-8 shadow-lg shadow-red-600/20">
            安全合规 · 值得信赖
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-20 italic tracking-tight text-gray-900">
            让每一次运输都有保障
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            <div className="flex flex-col items-center group cursor-default">
              <div className="text-6xl font-black text-[#E60012] mb-6 opacity-90 tracking-tighter group-hover:scale-110 transition-transform duration-300">01</div>
              <h4 className="text-xl font-bold mb-6 text-gray-900 tracking-wide">全过程闭环管控</h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
                从订单受理、车辆调度、轨迹追踪到费用结算，实现业务流、信息流、资金流“多流合一”
              </p>
            </div>
            <div className="flex flex-col items-center group cursor-default">
              <div className="text-6xl font-black text-[#E60012] mb-6 opacity-90 tracking-tighter group-hover:scale-110 transition-transform duration-300">02</div>
              <h4 className="text-xl font-bold mb-6 text-gray-900 tracking-wide">多重安全审核</h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
                三证合一校验、工商数据联动、黑名单库筛查，多维度保障承运方真实合规
              </p>
            </div>
            <div className="flex flex-col items-center group cursor-default">
              <div className="text-6xl font-black text-[#E60012] mb-6 opacity-90 tracking-tighter group-hover:scale-110 transition-transform duration-300">03</div>
              <h4 className="text-xl font-bold mb-6 text-gray-900 tracking-wide">阳光合规财税</h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
                直连官方税务系统，一键开具真实运输增值税专用发票，降低财税风险
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
