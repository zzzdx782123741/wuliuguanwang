
import React from 'react';

const StatsSection: React.FC = () => {
  const leftStats = [
    { label: '注册司机', value: '900940', color: '#EF4444', isRed: false },
    { label: '企业会员', value: '6093', color: '#EF4444', isRed: false },
    { label: '服务区县', value: '2877', color: '#EF4444', isRed: false },
    { label: '承运总量(万吨)', value: '26716', color: '#EF4444', isRed: false },
  ];

  const rightStats = [
    { label: '认证车辆', value: '998310', color: '#EF4444', isRed: false },
    { label: '运输线路', value: '59962', color: '#EF4444', isRed: false },
    { label: '分支机构', value: '100+', color: '#EF4444', isRed: false },
    { label: '覆盖省级', value: '30', color: '#EF4444', isRed: false },
  ];

  // 严格参照截图中的红点点位
  const mapDots = [
    { top: '48%', left: '48%' }, // 中部枢纽
    { top: '55%', left: '55%' }, // 华东/华中交界
    { top: '40%', left: '62%' }, // 华北/山东
    { top: '65%', left: '52%' }, // 华南/广东
    { top: '50%', left: '65%' }, // 江浙
    { top: '62%', left: '42%' }, // 西南/四川
  ];

  return (
    <section id="section-stats" className="min-h-screen snap-start flex flex-col justify-center py-20 bg-gray-50 items-center relative">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* 标题部分 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center">
            <span className="text-[#E60012] mr-2 text-xl font-bold">/ /</span>
            业务规模
            <span className="text-[#E60012] ml-2 text-xl font-bold">/ /</span>
          </h2>
          {/* <p className="text-gray-500 text-sm tracking-wide">覆盖全国30+省级行政区，连接百万司机</p> */}
        </div>

        {/* 主卡片容器 - 还原截图大圆角白底样式 */}
        <div className="bg-white rounded-[40px] shadow-[0_15px_60px_rgba(0,0,0,0.04)] border border-gray-100 p-12 lg:p-20 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            
            {/* 左侧卡片组 - 整合为一个垂直卡片 */}
            <div className="w-full lg:w-64 bg-white border border-[#E60012]/30 shadow-sm p-8 flex flex-col justify-between h-[480px]">
              {leftStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center border-b border-gray-100 last:border-0 pb-6 last:pb-0 pt-6 first:pt-0 flex-1 justify-center">
                  <div className="text-3xl font-bold text-[#1e3a8a] mb-2">{stat.value}</div>
                  <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* 中间地图区域 */}
            <div className="flex-1 relative flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[650px] aspect-[1.2/1]">
                {/* 专业的中国地图底图 - 使用 Wikimedia Commons 源 + 防盗链规避 */}
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/52/China_blank_province_map.svg" 
                  alt="China Map" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain opacity-20 grayscale contrast-125"
                />
                
                {/* 业务红点 */}
                <div className="absolute inset-0">
                  {mapDots.map((dot, i) => (
                    <div 
                      key={i} 
                      className="absolute w-2 h-2 bg-[#E60012] rounded-full"
                      style={{ top: dot.top, left: dot.left }}
                    >
                    </div>
                  ))}
                </div>
              </div>
              
            </div>

            {/* 右侧卡片组 - 整合为一个垂直卡片 */}
            <div className="w-full lg:w-64 bg-white border border-[#E60012]/30 shadow-sm p-8 flex flex-col justify-between h-[480px]">
              {rightStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center border-b border-gray-100 last:border-0 pb-6 last:pb-0 pt-6 first:pt-0 flex-1 justify-center">
                  <div className="text-3xl font-bold text-[#1e3a8a] mb-2">{stat.value}</div>
                  <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
