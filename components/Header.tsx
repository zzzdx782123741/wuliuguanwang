
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { NAV_ITEMS, BUSINESS_ENTRANCE } from '../constants';

interface HeaderProps {
  currentPath: 'home' | 'aftersales';
  onNavigate: (path: 'home' | 'aftersales') => void;
}

// 使用用户提供的原图作为 Logo
const LogoIcon = () => (
  <img 
    src="https://files.oaiusercontent.com/file-K1k12v3S5qN5p11L5N1u1J" 
    alt="万联通 Logo" 
    className="w-9 h-9 object-contain"
  />
);

const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [isEntranceOpen, setIsEntranceOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path === '#aftersales') {
      e.preventDefault();
      onNavigate('aftersales');
    } else if (path === '#platforms' || path === '/') {
      e.preventDefault();
      onNavigate('home');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-[0_1px_0_rgba(0,0,0,0.05)] z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          {/* Logo 部分 - 点击回首页 */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center group transition-all"
          >
             <div className="mr-3 transition-transform group-hover:scale-110 duration-500">
                <LogoIcon />
             </div>
             <div className="flex flex-col text-left">
                <div className="flex items-baseline">
                  <span className="text-3xl font-black tracking-tighter text-gray-900 leading-none">万联通</span>
                  <div className="ml-1 w-1.5 h-1.5 bg-[#E60012] rounded-full"></div>
                </div>
                <span className="text-[10px] text-gray-400 font-bold tracking-widest mt-1 uppercase">Digital Logistics</span>
             </div>
          </button>

          {/* 导航链接 */}
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => {
              const isActive = (item.path === '#aftersales' && currentPath === 'aftersales') || 
                               (item.path === '#platforms' && currentPath === 'home');
              
              return (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`text-[15px] font-medium transition-all relative py-2 ${
                    isActive ? 'text-[#E60012]' : 'text-gray-700 hover:text-[#E60012]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E60012] rounded-full animate-in fade-in zoom-in duration-300"></span>
                  )}
                </a>
              );
            })}
          </div>
        </div>

        {/* 右侧入口 */}
        <div className="flex items-center space-x-8">
          <a href="#" className="text-[14px] text-gray-700 font-medium hover:text-[#E60012] transition-colors">
            集团官网
          </a>
          
          <div 
            className="relative"
            onMouseEnter={() => setIsEntranceOpen(true)}
            onMouseLeave={() => setIsEntranceOpen(false)}
          >
            <button className="flex items-center space-x-1.5 text-[14px] font-medium text-gray-700 hover:text-[#E60012] transition-colors py-2">
              <span>物流业务入口</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isEntranceOpen ? 'rotate-180' : ''}`} />
            </button>

            {isEntranceOpen && (
              <div className="absolute right-0 top-full mt-0 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 overflow-hidden animate-in fade-in slide-in-from-top-1">
                {BUSINESS_ENTRANCE.map((entrance, idx) => (
                  <a
                    key={idx}
                    href={entrance.path}
                    className="block px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-[#E60012]"
                  >
                    {entrance.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
