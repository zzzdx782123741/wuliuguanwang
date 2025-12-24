
import React from 'react';

// 使用用户提供的原图作为 Logo
const LogoIcon = () => (
  <img 
    src="https://files.oaiusercontent.com/file-K1k12v3S5qN5p11L5N1u1J" 
    alt="万联通 Logo" 
    className="w-10 h-10 object-contain"
  />
);

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: '物流服务',
      links: [
        { name: '撮合平台', href: '#' },
        { name: '网络货运', href: '#' },
        { name: '多式联运', href: '#' },
        { name: 'TMS', href: '#' },
        { name: '业务规模', href: '#' },
        { name: '合作客户', href: '#' },
        { name: '合作伙伴', href: '#' },
      ]
    },
    {
      title: '车后服务',
      links: [
        { name: '核心价值', href: '#' },
        { name: '解决方案', href: '#' },
        { name: '合作申请', href: '#' },
      ]
    },
    {
      title: '智慧场景',
      links: [
        { name: '场区痛点', href: '#' },
        { name: '核心功能', href: '#' },
        { name: '价值体现', href: '#' },
        { name: '适应行业', href: '#' },
        { name: '服务案例', href: '#' },
      ]
    },
    {
      title: '资讯公告',
      links: [
        { name: '新闻资讯', href: '#' },
        { name: '行业政策', href: '#' },
        { name: '升级公告', href: '#' },
      ]
    },
    {
      title: '关于我们',
      links: [
        { name: '关于我们', href: '#' },
        { name: '资质荣誉', href: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-[#1C1F26] text-gray-400 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          {/* Left Navigation Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 flex-grow">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-[#E60012] font-bold mb-6 text-base tracking-wide">{group.title}</h4>
                <ul className="space-y-4 text-[13px]">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="hover:text-white transition-colors tracking-tight">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Contact & QR Codes */}
          <div className="lg:w-[400px] flex flex-col items-start lg:items-end">
            <div className="flex items-center space-x-4 mb-6">
              <LogoIcon />
              <div className="text-left">
                <div className="text-white text-3xl font-black tracking-tighter leading-none flex items-center">
                  万联通
                  <span className="ml-1 w-2 h-2 bg-[#E60012] rounded-full"></span>
                </div>
                <div className="text-[10px] text-gray-500 tracking-widest mt-1 font-bold">万物易达旗下在线服务平台</div>
              </div>
            </div>
            
            <div className="text-left lg:text-right space-y-3 mb-8">
              <p className="text-gray-300 text-lg font-medium">电话：400-015-8686</p>
              <p className="text-gray-400">网站：https://www.10000da.cn</p>
            </div>

            <div className="flex flex-wrap lg:justify-end gap-6">
              {[
                { label: '关注公众号', key: 'wechat' },
                { label: '易达宝司机端APP', key: 'driver' },
                { label: '易达宝货主端APP', key: 'shipper' }
              ].map((qr) => (
                <div key={qr.label} className="flex flex-col items-center">
                  <div className="bg-white p-1.5 rounded-sm shadow-lg mb-3">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=${qr.key}`} 
                      alt={qr.label} 
                      className="w-[85px] h-[85px]" 
                    />
                  </div>
                  <span className="text-[11px] text-gray-500 whitespace-nowrap">扫一扫</span>
                  <span className="text-[11px] text-gray-500 whitespace-nowrap">{qr.label}</span>
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
