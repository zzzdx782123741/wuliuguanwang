
import React from 'react';

// 使用本地 logo.png
const LogoIcon = () => (
  <img 
    src="/logo.png" 
    alt="万联通 Logo" 
    className="w-10 h-10 object-contain"
  />
);

const FOOTER_LINKS = [
  {
    title: '物流服务',
    items: [
      { label: '撮合平台', href: '#' },
      { label: '网络货运', href: '#' },
      { label: '多式联运', href: '#' },
      { label: 'TMS', href: '#' },
      { label: '业务预测', href: '#' },
      { label: '合作资产', href: '#' },
      { label: '合作伙伴', href: '#' }
    ]
  },
  {
    title: '车后服务',
    items: [
      { label: '核心价值', href: '#' },
      { label: '解决方案', href: '#' },
      { label: '合作申请', href: '#' }
    ]
  },
  {
    title: '智慧场站',
    items: [
      { label: '场站简介', href: '#' },
      { label: '核心功能', href: '#' },
      { label: '价值创造', href: '#' },
      { label: '标杆企业', href: '#' },
      { label: '联系官网', href: '#' }
    ]
  },
  {
    title: '资讯公告',
    items: [
      { label: '新闻资讯', href: '#' },
      { label: '行业要闻', href: '#' },
      { label: '升级公告', href: '#' }
    ]
  },
  {
    title: '关于我们',
    items: [
      { label: '关于我们', href: '#' },
      { label: '资质荣誉', href: '#' }
    ]
  }
];

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#1C1F26] text-gray-400 pt-16 pb-12 font-sans snap-start min-h-[600px] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
          {/* Left Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 flex-1">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title} className="flex flex-col space-y-4">
                <h4 className="text-[#E60012] font-bold text-sm tracking-wider uppercase">{section.title}</h4>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="text-gray-400 hover:text-white text-xs transition-colors duration-300">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Brand & Contact */}
          <div className="flex flex-col items-center lg:items-end space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-[#E60012] p-1.5 rounded-lg">
                <span className="text-white font-black text-xl italic tracking-tighter">万连通</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-wide">万连通</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Wanliantong Logistics</span>
              </div>
            </div>
            
            <div className="text-center lg:text-right space-y-1">
              <p className="text-gray-300 font-medium">电话: <span className="text-white font-bold text-lg">400-015-8686</span></p>
              <p className="text-gray-500 text-xs">网站: https://www.10000da.cn</p>
            </div>

            {/* QR Codes */}
            <div className="flex space-x-4">
              {[
                { name: '公众号', icon: 'M3 3h18v18H3z' },
                { name: '官方APP', icon: 'M3 3h18v18H3z' },
                { name: '服务号', icon: 'M3 3h18v18H3z' }
              ].map((qr, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-2 group cursor-pointer">
                  <div className="w-20 h-20 bg-white p-1 rounded-lg transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr.name}`} 
                      alt={qr.name}
                      className="w-full h-full"
                    />
                  </div>
                  <span className="text-[10px] text-gray-500 group-hover:text-white transition-colors">{qr.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col items-center space-y-4">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] text-gray-500 text-center">
            <span>京公网安备 11010502039306</span>
            <span>津ICP备2021001721号-1</span>
            <span>增值电信业务经营许可证编号：津B2-20210165</span>
            <span>津交运管许可德字120128300595</span>
            <span>投诉举报电话：400-015-8686</span>
            <a href="#" className="hover:text-white">隐私政策</a>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-[11px] text-gray-600">Copyright©万联通易达物流科技有限公司All Rights Reserved. 版权所有</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
