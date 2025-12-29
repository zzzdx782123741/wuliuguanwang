import React, { useEffect, useState } from 'react';
import { PLATFORMS } from '../constants';

const SideNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('section-home');

  const navItems = [
    { id: 'section-home', label: '首页' },
    ...PLATFORMS.map((platform, index) => ({
      id: `section-platform-${index}`,
      label: platform.name,
    })),
    { id: 'section-stats', label: '业务规模' },
    { id: 'section-partners', label: '合作伙伴' },
    { id: 'safety', label: '安全合规' },
    { id: 'footer', label: '联系我们' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3 group/nav">
      {navItems.map((item) => (
        <div key={item.id} className="group relative flex items-center justify-end cursor-pointer" onClick={() => handleNavClick(item.id)}>
          {/* Label Pill - Show only if active or if group is hovered */}
          <div 
            className={`mr-4 px-4 py-1.5 bg-black text-xs font-bold rounded-full whitespace-nowrap transition-all duration-300 shadow-lg ${
              activeSection === item.id 
                ? 'opacity-100 translate-x-0 text-[#E60012] scale-105' 
                : 'opacity-0 translate-x-4 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-x-0 group-hover/nav:pointer-events-auto text-white group-hover:text-[#E60012]'
            }`}
          >
            {item.label}
          </div>

          {/* Indicator Dot */}
          <div className="relative flex items-center justify-center w-4 h-4">
            <div 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-[#E60012] scale-125'
                  : 'bg-gray-400 group-hover:bg-[#E60012]'
              }`}
            />
            {activeSection === item.id && (
               <div className="absolute inset-0 rounded-full border border-[#E60012] animate-ping opacity-20"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideNavigation;
