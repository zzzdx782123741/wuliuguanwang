
import React from 'react';

const StatsSection: React.FC = () => {
  const leftStats = [
    { label: '注册司机', value: '882,806', color: '#EF4444', isRed: true },
    { label: '企业会员', value: '5,782', color: '#3B82F6', isRed: false },
    { label: '承运总量(万吨)', value: '24,650', color: '#8B5CF6', isRed: false },
  ];

  const rightStats = [
    { label: '认证车辆', value: '975,640', color: '#EF4444', isRed: true },
    { label: '运输线路', value: '56,851', color: '#F59E0B', isRed: false },
    { label: '分支机构', value: '100+', color: '#10B981', isRed: false },
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
    <section className="py-20 bg-gray-50 flex justify-center items-center">
      <div className="max-w-7xl w-full px-4">
        {/* 标题部分 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">业务规模</h2>
          <p className="text-gray-500 text-sm tracking-wide">覆盖全国30+省级行政区，连接百万司机</p>
        </div>

        {/* 主卡片容器 - 还原截图大圆角白底样式 */}
        <div className="bg-white rounded-[40px] shadow-[0_15px_60px_rgba(0,0,0,0.04)] border border-gray-100 p-12 lg:p-20 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            
            {/* 左侧卡片组 - 彩条在左 */}
            <div className="flex flex-col gap-6 w-full lg:w-72">
              {leftStats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.05)] p-8 relative overflow-hidden flex flex-col items-start transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1.5" 
                    style={{ backgroundColor: stat.color }}
                  ></div>
                  <div className={`text-3xl font-bold mb-2 ${stat.isRed ? 'text-[#E60012]' : 'text-gray-800'}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* 中间地图区域 */}
            <div className="flex-1 relative flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[550px] aspect-[1.1/1]">
                {/* 专业的中国地图底图，带省份轮廓 */}
                <img 
                  src="https://www.wanliantong.com/_next/image?url=%2Fimages%2Fhome%2Fmap.png&w=1200&q=75" 
                  alt="China Map" 
                  className="w-full h-full object-contain opacity-40 grayscale contrast-125"
                />
                
                {/* 业务红点 */}
                <div className="absolute inset-0">
                  {mapDots.map((dot, i) => (
                    <div 
                      key={i} 
                      className="absolute w-3 h-3 bg-[#E60012] rounded-full border-2 border-white shadow-lg"
                      style={{ top: dot.top, left: dot.left }}
                    >
                      <div className="absolute inset-0 bg-[#E60012] rounded-full animate-ping opacity-40"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 地图底部水印字样 */}
              <div className="mt-6 text-[11px] text-gray-300 font-medium tracking-[0.3em] uppercase opacity-60">
                Normal safe city
              </div>
            </div>

            {/* 右侧卡片组 - 彩条在右 */}
            <div className="flex flex-col gap-6 w-full lg:w-72">
              {rightStats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.05)] p-8 relative overflow-hidden flex flex-col items-end transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div 
                    className="absolute right-0 top-0 bottom-0 w-1.5" 
                    style={{ backgroundColor: stat.color }}
                  ></div>
                  <div className={`text-3xl font-bold mb-2 ${stat.isRed ? 'text-[#E60012]' : 'text-gray-800'}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
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
