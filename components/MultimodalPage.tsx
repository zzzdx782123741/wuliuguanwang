import React, { useState } from 'react';
import { 
  Truck, 
  ArrowRight, 
  Map, 
  Ship, 
  Train, 
  Globe2,
  Clock,
  TrendingDown
} from 'lucide-react';
import { PLATFORMS, CUSTOMERS } from '../constants';

const MultimodalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'road' | 'rail' | 'water'>('rail');
  
  // 获取多式联运的数据
  const multimodalData = PLATFORMS.find(p => p.id === 'multimodal') || PLATFORMS[3];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-900 animate-in fade-in duration-500">
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src={multimodalData?.bgImage || 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=2000'} 
            alt="Multimodal Logistics" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-black/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#E60012]/20 border border-[#E60012]/30 rounded-full text-white/90 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#E60012] rounded-full animate-pulse" />
              <span className="text-sm font-bold tracking-widest uppercase">Smart Multimodal Transport</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
              多式联运<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60012] to-orange-500">
                重塑物流新效能
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed font-light border-l-4 border-[#E60012] pl-6">
              {multimodalData?.description || '全程一单制，打通公铁水空，为您提供最具成本优势的综合物流解决方案。'}
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-[#E60012] text-white text-lg font-bold rounded-full hover:bg-red-700 transition-all shadow-xl shadow-red-900/30 flex items-center justify-center group">
                立即咨询方案
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg font-bold rounded-full hover:bg-white/20 transition-all flex items-center justify-center">
                下载解决方案
              </button>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-0 w-full bg-white/5 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: '覆盖线路', value: '500+', unit: '条' },
              { label: '综合成本降低', value: '20%', unit: '' },
              { label: '运输时效提升', value: '30%', unit: '' },
              { label: '碳排放减少', value: '40%', unit: '%' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left border-r border-white/10 last:border-0">
                <div className="text-3xl md:text-4xl font-black text-white mb-1">
                  {stat.value}<span className="text-lg text-[#E60012] ml-1">{stat.unit}</span>
                </div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Core Capabilities - Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">核心优势</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              通过公铁水空多种运输方式的高效组合，为您提供最具竞争力的物流解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {multimodalData?.capabilities.map((cap, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E60012] transition-colors duration-300">
                  <div className="text-[#E60012] group-hover:text-white transition-colors duration-300 transform scale-125">
                    {cap.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{cap.label}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Transport Modes - Interactive Tabs */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 w-full">
              <div className="mb-10">
                <span className="text-[#E60012] font-bold tracking-widest uppercase mb-2 block">Flexible Combination</span>
                <h2 className="text-4xl font-black text-gray-900 mb-6">全链路运输组合</h2>
                <p className="text-lg text-gray-500">根据货物特性与时效需求，智能匹配最佳运输方案。</p>
              </div>

              <div className="space-y-4">
                {[
                  { id: 'rail', icon: <Train />, title: '铁路运输', desc: '适合大宗货物长距离运输，运量大、成本低、受天气影响小。' },
                  { id: 'water', icon: <Ship />, title: '水路运输', desc: '适合特大宗货物，成本极低，绿色环保，通江达海。' },
                  { id: 'road', icon: <Truck />, title: '公路短驳', desc: '灵活机动，解决"最后一公里"门到门配送问题。' },
                ].map((mode) => (
                  <div 
                    key={mode.id}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                      activeTab === mode.id 
                        ? 'border-[#E60012] bg-red-50' 
                        : 'border-transparent bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab(mode.id as any)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${
                        activeTab === mode.id ? 'bg-[#E60012] text-white' : 'bg-white text-gray-600'
                      }`}>
                        {mode.icon}
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold mb-2 ${activeTab === mode.id ? 'text-[#E60012]' : 'text-gray-900'}`}>
                          {mode.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{mode.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full relative h-[500px]">
              {/* Image Display Area */}
              <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl">
                 <img 
                   src={
                     activeTab === 'rail' ? 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1000' :
                     activeTab === 'water' ? 'https://images.unsplash.com/photo-1494412574643-35d32468817e?auto=format&fit=crop&q=80&w=1000' :
                     'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000'
                   }
                   alt="Transport Mode"
                   className="w-full h-full object-cover transition-opacity duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                   <div className="text-white">
                     <div className="flex items-center space-x-2 mb-2">
                       <Map className="w-5 h-5 text-[#E60012]" />
                       <span className="font-bold">全球网络覆盖</span>
                     </div>
                     <p className="opacity-80 text-sm">链接全球 200+ 港口与铁路站点，构建无缝物流网络。</p>
                   </div>
                 </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E60012]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Value Proposition - Grid */}
      <section className="py-24 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center md:text-left">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Globe2 className="w-8 h-8 text-[#E60012]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">一单到底</h3>
              <p className="text-gray-400 leading-relaxed">
                只需签订一份运输合同，一次托运、一次计费、一份单证、一次保险，全程负责到底，解决传统分段运输的繁琐。
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Clock className="w-8 h-8 text-[#E60012]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">无缝衔接</h3>
              <p className="text-gray-400 leading-relaxed">
                通过数字化平台实现不同运输方式间的无缝衔接，减少中转等待时间，实现货物"零滞留"，大幅提升周转效率。
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <TrendingDown className="w-8 h-8 text-[#E60012]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">降本增效</h3>
              <p className="text-gray-400 leading-relaxed">
                充分发挥铁路和水运的成本优势，结合公路的灵活性，通过优化组合，相比单一公路运输可降低 20%-30% 的物流成本。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Partners */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500 font-medium mb-12 tracking-widest uppercase">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Use a subset of logos for cleaner look */}
             {CUSTOMERS.slice(0, 6).map((partner, i) => (
               <img 
                 key={i} 
                 src={partner.logo} 
                 alt={partner.name} 
                 className="h-12 object-contain hover:scale-110 transition-transform duration-300"
               />
             ))}
          </div>
        </div>
      </section>

      {/* 6. CTA / Download */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-[#E60012] rounded-[40px] p-12 md:p-16 text-center text-white shadow-2xl shadow-red-600/30 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
               <svg width="100%" height="100%">
                 <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                   <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                 </pattern>
                 <rect width="100%" height="100%" fill="url(#grid)" />
               </svg>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6">准备好优化您的供应链了吗？</h2>
              <p className="text-red-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                立即下载客户端，体验一站式多式联运服务，开启降本增效之旅。
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {multimodalData?.downloads?.map((dl, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer group">
                    <div className="bg-white p-2 rounded-xl mb-4 shadow-lg group-hover:scale-105 transition-transform">
                      <img src={dl.qrUrl} alt={dl.name} className="w-32 h-32" />
                    </div>
                    <div className="font-bold text-lg">{dl.name}</div>
                    <div className="text-xs text-red-200 mt-1">扫码下载 App</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MultimodalPage;
