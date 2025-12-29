
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { NAV_ITEMS, BUSINESS_ENTRANCE } from '../constants';

interface HeaderProps {
  currentPath: 'home' | 'aftersales';
  onNavigate: (path: 'home' | 'aftersales') => void;
}

// 使用本地 logo.png
const LogoIcon = () => (
  <img 
    src="/logo.png" 
    alt="万连通 Logo" 
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
          {/* Logo Area */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-[#E60012] rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-black text-2xl italic">W</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-gray-900 group-hover:text-[#E60012] transition-colors">
                万连通
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                Wanlian Logistics
              </span>
            </div>
          </div>

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
          
          <div className="relative group">
            <button 
              className="flex items-center space-x-1.5 py-2 text-[13px] font-bold tracking-wide transition-colors group-hover:text-[#E60012] text-gray-700"
            >
              <span>物流业务后台入口</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            
            <div className="absolute right-0 top-full pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden py-2">
                {BUSINESS_ENTRANCE.map((item, index) => (
                  <a 
                    key={index}
                    href={item.path}
                    className="block px-5 py-3.5 hover:bg-gray-50 transition-colors group/item"
                  >
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="text-gray-500">{item.label.split('：')[0]}：</span>
                      <span className="font-bold text-[#0052D9] group-hover/item:text-[#E60012] transition-colors">
                        {item.label.split('：')[1]}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
