
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import PlatformModules from './components/PlatformModules';
import StatsSection from './components/StatsSection';
import LogoTicker from './components/LogoTicker';
import AfterSales from './components/AfterSales';

const App: React.FC = () => {
  // 简单的路由状态：'home' (物流官网) | 'aftersales' (车后服务独立页)
  const [currentPath, setCurrentPath] = useState<'home' | 'aftersales'>('home');

  // 监听导航点击事件（通过 URL Hash 模拟简单路由）
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#aftersales') {
        setCurrentPath('aftersales');
        window.scrollTo(0, 0);
      } else {
        setCurrentPath('home');
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // 初始加载检查
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path: 'home' | 'aftersales') => {
    window.location.hash = path === 'home' ? '' : path;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-red-100 selection:text-[#E60012]">
      {/* 统一头部，通过 props 感知当前页面状态 */}
      <Header currentPath={currentPath} onNavigate={navigateTo} />

      <main className="flex-grow">
        {currentPath === 'home' ? (
          /* --- 独立物流官网页面内容 --- */
          <div className="animate-in fade-in duration-500">
            <Banner />
            <PlatformModules />
            <StatsSection />
            <LogoTicker />
            
            {/* 安全合规板块 */}
            <section id="safety" className="py-24 bg-[#0A0E17] text-white relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#E60012] rounded-full opacity-80"></div>
              <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="inline-block px-4 py-1.5 bg-[#E60012] text-white text-[11px] font-bold rounded-full mb-8 shadow-lg shadow-red-600/20">
                  安全合规 · 值得信赖
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-20 italic tracking-tight">
                  让每一次运输都有保障
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                  <div className="flex flex-col items-center">
                    <div className="text-6xl font-black text-[#E60012] mb-6 opacity-90 tracking-tighter">01</div>
                    <h4 className="text-xl font-bold mb-6 text-white tracking-wide">全过程闭环管控</h4>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                      从订单受理、车辆调度、轨迹追踪到费用结算，实现业务流、信息流、资金流“多流合一”
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-6xl font-black text-[#E60012] mb-6 opacity-90 tracking-tighter">02</div>
                    <h4 className="text-xl font-bold mb-6 text-white tracking-wide">多重安全审核</h4>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                      三证合一校验、工商数据联动、黑名单库筛查，多维度保障承运方真实合规
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-6xl font-black text-[#E60012] mb-6 opacity-90 tracking-tighter">03</div>
                    <h4 className="text-xl font-bold mb-6 text-white tracking-wide">阳光合规财税</h4>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                      直连官方税务系统，一键开具真实运输增值税专用发票，降低财税风险
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          /* --- 独立车后服务页面内容 --- */
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pt-20">
            <AfterSales />
          </div>
        )}
      </main>

      <Footer />

      {/* 回到顶部悬浮按钮 */}
      <div className="fixed right-6 bottom-10 z-[100] flex flex-col space-y-3">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-[#E60012] shadow-2xl rounded-full flex items-center justify-center text-white hover:bg-black hover:scale-110 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default App;
