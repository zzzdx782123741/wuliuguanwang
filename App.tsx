
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeBanner from './components/HomeBanner';
import PlatformModules from './components/PlatformModules';
import StatsSection from './components/StatsSection';
import LogoTicker from './components/LogoTicker';
import AfterSales from './components/AfterSales';
import SideNavigation from './components/SideNavigation';

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

      <main className="flex-grow snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden scroll-smooth scroll-pt-0">
        {currentPath === 'home' ? (
          /* --- 独立物流官网页面内容 --- */
          <div className="animate-in fade-in duration-500">
            <HomeBanner />
            <PlatformModules />
            <StatsSection />
            <LogoTicker />
            <Footer />
            <SideNavigation />
          </div>
        ) : (
          /* --- 独立车后服务页面内容 --- */
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pt-20">
            <AfterSales />
          </div>
        )}
      </main>

      {/* 回到顶部悬浮按钮 */}
      <div className="fixed right-6 bottom-10 z-[100] flex flex-col space-y-3">
        <button 
          onClick={() => document.querySelector('main')?.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-[#E60012] shadow-2xl rounded-full flex items-center justify-center text-white hover:bg-black hover:scale-110 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default App;
