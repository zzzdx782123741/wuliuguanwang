import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Monitor, 
  CheckCircle, 
  TrendingDown, 
  ShieldCheck, 
  Truck, 
  Activity,
  Map,
  FileText,
  PieChart,
  Zap,
  ArrowLeft
} from 'lucide-react';

const MatchmakingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'truck' | 'cargo'>('truck');

  // 模拟 CRM 提交
  const handleCRMSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('提交成功！您的需求已发送至专属调度经理，请保持电话畅通。');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* 1. Top Navigation Bar (Custom for this page) */}
      <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm h-20 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 w-full relative flex items-center justify-center">
          
          {/* Back to Home - Absolute Left */}
          <div className="absolute left-4">
            <button 
              onClick={() => window.location.hash = ''}
              className="flex items-center space-x-2 text-gray-600 hover:text-[#E60012] transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold">返回首页</span>
            </button>
          </div>

          {/* Centered Capsule Navigation */}
          <div className="flex items-center bg-gray-100/80 p-1.5 rounded-full">
            <button 
              className={`text-base font-bold px-8 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'truck' 
                  ? 'bg-white text-[#E60012] shadow-md scale-105' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              onClick={() => {
                setActiveTab('truck');
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
            >
              我要找车
            </button>
            <button 
              className={`text-base font-bold px-8 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'cargo' 
                  ? 'bg-white text-[#E60012] shadow-md scale-105' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              onClick={() => {
                setActiveTab('cargo');
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
            >
              我要找货
            </button>
          </div>

          {/* Right Actions - Absolute Position */}
          <div className="absolute right-4 flex items-center space-x-4">
             <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#E60012] transition-colors hidden md:block">
               企业注册/登录
             </a>
             <button className="bg-[#E60012] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
               易达宝PC端
             </button>
          </div>
        </div>
      </div>

      <div className="pt-20"> {/* Spacer for fixed sub-nav */}
        
        {/* ==================== TAB A: 我要找车 ==================== */}
        {activeTab === 'truck' && (
          <div className="w-full min-h-screen bg-white">
            {/* 2. Banner */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gray-900 text-white">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
                  alt="Logistics Warehouse" 
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
              </div>
              <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center md:text-left">
                <div className="inline-block px-4 py-1.5 bg-[#E60012] text-white text-xs font-bold rounded-full mb-6">
                  易达宝 · 货主找车
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
                  以物流撮合交易为载体的<br />
                  <span className="text-[#E60012]">开放型平台</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-2xl">
                  以信用驱动效率的零负担货运型平台
                </p>
                <button className="bg-[#E60012] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-600/30 hover:scale-105">
                  立即发货
                </button>
              </div>
            </section>

            {/* 3. Core Pain Points - Upgraded Visuals */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                    为什么选择 <span className="text-[#E60012]">易达宝</span> 发货？
                  </h2>
                  <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                    直击物流痛点，为您提供更高效、更安全、更低成本的运力解决方案
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { icon: <TrendingDown className="w-10 h-10" />, title: '降本增效', highlight: '运费直降', desc: '竞价机制透明，去除中间环节，成本可控' },
                    { icon: <FileText className="w-10 h-10" />, title: '财税合规', highlight: '进项无忧', desc: '合法合规网络货运牌照，一键开具专票' },
                    { icon: <Truck className="w-10 h-10" />, title: '运力保障', highlight: '旺季不缺车', desc: '百万认证司机，车型全覆盖，响应速度快' },
                    { icon: <Activity className="w-10 h-10" />, title: '全程可视', highlight: '安全透明', desc: '货物轨迹实时追踪，异常情况自动预警' }
                  ].map((item, idx) => (
                    <div key={idx} className="relative bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-500 group border border-gray-100 overflow-hidden hover:-translate-y-2">
                      {/* Decorative Background Element */}
                      <div className="absolute -right-8 -top-8 w-32 h-32 bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Icon */}
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E60012] to-red-700 flex items-center justify-center text-white shadow-lg shadow-red-500/30 mb-8 group-hover:scale-110 transition-transform duration-500 rotate-0 group-hover:rotate-6">
                        {item.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="relative">
                        <h3 className="text-2xl font-black mb-2 text-gray-900 group-hover:text-[#E60012] transition-colors">
                          {item.title}
                        </h3>
                        <div className="text-sm font-bold text-[#E60012] bg-red-50 px-3 py-1 rounded-full w-fit mb-4 opacity-80 group-hover:opacity-100">
                          {item.highlight}
                        </div>
                        <p className="text-gray-600 leading-relaxed font-medium text-lg">
                          {item.desc}
                        </p>
                      </div>

                      {/* Bottom Bar */}
                      <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-[#E60012] group-hover:w-full transition-all duration-500"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Trust Bar - Ecommerce Style */}
            <section className="py-16 bg-[#FFF0F0] border-y border-red-100 overflow-hidden relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#E60012 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                  {/* Left: Impact Numbers */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center space-x-2 bg-red-100 text-[#E60012] px-3 py-1 rounded-full text-sm font-bold mb-4 animate-bounce">
                      <span className="w-2 h-2 bg-[#E60012] rounded-full"></span>
                      <span>行业信赖之选</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                      已服务 <span className="text-[#E60012] text-5xl md:text-6xl mx-2 drop-shadow-sm">5,000+</span> 知名企业
                    </h2>
                    <p className="text-gray-600 font-medium text-lg">
                      累计承运货物突破 <span className="text-[#E60012] font-bold text-2xl">2,000万</span> 吨，好评率 <span className="text-[#E60012] font-bold text-2xl">99.8%</span>
                    </p>
                  </div>

                  {/* Right: Logo Wall */}
                  <div className="flex-1 w-full">
                    <div className="grid grid-cols-3 gap-4">
                      {['COSCO', 'SINOTRANS', 'SF Express', 'JD Logistics', 'CFLP', 'China Post'].map((logo, i) => (
                        <div key={i} className="bg-white h-20 rounded-xl shadow-sm border border-red-50 flex items-center justify-center group hover:shadow-md hover:scale-105 transition-all duration-300">
                          <span className="font-bold text-gray-400 group-hover:text-[#E60012] transition-colors">{logo}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Digital Demo (TMS) - Visualized */}
            <section className="py-24 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">
                  {/* Text Side */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-[#E60012] font-bold tracking-widest uppercase mb-4">Smart Logistics Brain</div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
                      全链路可视化<br/>
                      <span className="text-[#E60012]">掌控您的物流帝国</span>
                    </h2>
                    <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                      告别黑盒操作，易达宝 TMS 让每一个订单、每一辆车、每一笔费用都清晰可见。
                      <span className="block mt-4 font-bold text-gray-900">数据驱动决策，效率提升 300%！</span>
                    </p>
                    <ul className="space-y-4 mb-10 text-left max-w-md mx-auto md:mx-0">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-[#E60012] shrink-0" />
                        <span className="text-lg font-medium text-gray-700">智能调度大脑，自动匹配最优运力</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-[#E60012] shrink-0" />
                        <span className="text-lg font-medium text-gray-700">北斗/GPS双模定位，轨迹毫秒级刷新</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-[#E60012] shrink-0" />
                        <span className="text-lg font-medium text-gray-700">财务自动对账，一键生成合规税票</span>
                      </li>
                    </ul>
                    <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#E60012] transition-colors shadow-xl">
                      预约系统演示 &rarr;
                    </button>
                  </div>

                  {/* UI Side - Constructed Dashboard */}
                  <div className="flex-1 w-full max-w-2xl">
                    <div className="relative bg-[#0F172A] rounded-2xl p-4 shadow-2xl border border-gray-700 aspect-[4/3] flex flex-col overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                      {/* Top Bar */}
                      <div className="h-12 border-b border-gray-700 flex items-center justify-between px-4 mb-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-gray-400 text-xs font-mono">Yidabao Intelligent TMS v3.0</div>
                      </div>

                      {/* Dashboard Content */}
                      <div className="flex-1 flex gap-4">
                        {/* Sidebar */}
                        <div className="w-16 border-r border-gray-700 flex flex-col items-center space-y-6 py-4">
                          <div className="p-2 bg-[#E60012] rounded-lg text-white"><Activity size={20} /></div>
                          <div className="p-2 text-gray-500 hover:text-white transition-colors"><Truck size={20} /></div>
                          <div className="p-2 text-gray-500 hover:text-white transition-colors"><FileText size={20} /></div>
                          <div className="p-2 text-gray-500 hover:text-white transition-colors"><PieChart size={20} /></div>
                        </div>

                        {/* Main Area */}
                        <div className="flex-1 flex flex-col gap-4 pr-2">
                          {/* Stats Cards */}
                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-[#1E293B] p-3 rounded-lg border border-gray-700">
                              <div className="text-gray-400 text-xs mb-1">今日订单</div>
                              <div className="text-white text-xl font-bold flex items-center gap-2">
                                1,284 <span className="text-green-500 text-xs">+12%</span>
                              </div>
                            </div>
                            <div className="bg-[#1E293B] p-3 rounded-lg border border-gray-700">
                              <div className="text-gray-400 text-xs mb-1">在途车辆</div>
                              <div className="text-white text-xl font-bold text-[#E60012] animate-pulse">856</div>
                            </div>
                            <div className="bg-[#1E293B] p-3 rounded-lg border border-gray-700">
                              <div className="text-gray-400 text-xs mb-1">准时到达率</div>
                              <div className="text-white text-xl font-bold">99.8%</div>
                            </div>
                          </div>

                          {/* Map Visual */}
                          <div className="flex-1 bg-[#1E293B] rounded-lg border border-gray-700 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                            {/* Moving Dots */}
                            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#E60012] rounded-full shadow-[0_0_10px_#E60012] animate-ping"></div>
                            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#E60012] rounded-full shadow-[0_0_10px_#E60012]"></div>
                            
                            <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_green]"></div>
                            
                            {/* Path Line */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                              <path d="M100 100 Q 250 50 400 200" fill="none" stroke="#E60012" strokeWidth="2" strokeDasharray="4 4" className="opacity-50" />
                            </svg>

                            {/* Floating Card */}
                            <div className="absolute bottom-4 left-4 bg-[#0F172A]/90 backdrop-blur border border-gray-600 p-2 rounded-lg text-xs text-white">
                              <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                沪A·88888 正常行驶中
                              </div>
                              <div className="text-gray-400 mt-1">预计 14:30 到达北京分拨中心</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Lead Gen Form */}
            <section className="py-24 bg-[#F9F9FB]">
              <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl border border-gray-100 text-center">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">立即获取运价方案</h2>
                  <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
                    留下联系方式，专属调度经理为您测算运价方案、匹配运力。
                    <br />
                    <span className="text-xs opacity-70">提交后将快速分配到区域公司对应销售人员</span>
                  </p>
                  
                  <form onSubmit={handleCRMSubmit} className="max-w-md mx-auto space-y-4">
                    <div className="relative">
                      <input 
                        type="tel" 
                        placeholder="请输入您的手机号码" 
                        className="w-full h-14 pl-6 pr-4 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-[#E60012] focus:ring-2 focus:ring-red-100 transition-all text-lg"
                        required
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full h-14 bg-[#E60012] text-white font-bold rounded-full hover:bg-red-700 transition-all shadow-lg shadow-red-600/30 text-lg"
                    >
                      立即咨询
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================== TAB B: 我要找货 ==================== */}
        {activeTab === 'cargo' && (
          <div className="w-full min-h-screen bg-white">
            {/* 2. Banner (App Download Focus) */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gray-900 text-white">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000" 
                  alt="Logistics Truck Highway" 
                  className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
              </div>
              <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block px-4 py-1.5 bg-[#E60012] text-white text-xs font-bold rounded-full mb-6">
                    易达宝 · 司机找货
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
                    海量货源 <br />
                    <span className="text-[#E60012]">一触即达</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-xl">
                    以信用驱动效率的零负担货运型平台
                  </p>
                </div>
                
                {/* Large QR Code Card */}
                <div className="bg-white p-6 rounded-3xl shadow-2xl flex flex-col items-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-64 h-64 bg-gray-100 rounded-xl mb-4 overflow-hidden">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=yidabao-driver-app" 
                      alt="Download App" 
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-gray-900 font-bold text-lg mb-1">扫码下载 App</p>
                  <p className="text-[#E60012] font-bold text-sm bg-red-50 px-3 py-1 rounded-full">
                    新手领 188元 大礼包
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Benefits - Upgraded Visuals */}
            <section className="py-24 bg-white relative overflow-hidden">
              {/* Decorative Blobs */}
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-50/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

              <div className="max-w-7xl mx-auto px-4">
                 <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                    车主专享 <span className="text-[#E60012]">四大权益</span>
                  </h2>
                  <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                    海量货源随心挑，结算快人一步
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { icon: <Map className="w-12 h-12" />, title: '货源多', highlight: '日均10万+', desc: '全国货源实时更新，想去哪就去哪' },
                    { icon: <Zap className="w-12 h-12" />, title: '结算快', highlight: '秒到账', desc: '平台担保交易，运费提现秒到账，不压款' },
                    { icon: <TrendingDown className="w-12 h-12" />, title: '不空返', highlight: '智能配载', desc: '大数据分析区域货源，智能推荐回程单' },
                    { icon: <ShieldCheck className="w-12 h-12" />, title: '没套路', highlight: '价格透明', desc: '无任何隐形收费，让您赚得明明白白' }
                  ].map((item, idx) => (
                    <div key={idx} className="relative p-8 rounded-[2rem] transition-all duration-500 group overflow-hidden bg-white border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-red-600/20 hover:-translate-y-2">
                      {/* Gradient Background on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E60012] to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Content Container */}
                      <div className="relative z-10">
                        <div className="bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 text-[#E60012] group-hover:bg-white/20 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:scale-110">
                          {item.icon}
                        </div>
                        
                        <h3 className="text-3xl font-black italic mb-2 text-gray-900 group-hover:text-white transition-colors tracking-tight">
                          {item.title}
                        </h3>
                         <div className="text-lg font-bold text-[#E60012] mb-4 opacity-80 group-hover:text-red-100 group-hover:opacity-100">
                          {item.highlight}
                        </div>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed group-hover:text-red-50 transition-colors">
                          {item.desc}
                        </p>
                      </div>

                      {/* Large Watermark Number */}
                      <div className="absolute -bottom-4 -right-4 text-9xl font-black text-gray-50 group-hover:text-white/10 transition-colors select-none z-0">
                        0{idx + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

             {/* 4. Trust Data - Ecommerce Style */}
            <section className="py-16 bg-[#0F172A] relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#E60012] to-transparent"></div>
              
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {[
                    { val: '10w+', label: '日均货源', sub: '实时更新', color: 'text-[#E60012]' },
                    { val: '300+', label: '覆盖城市', sub: '全国通达', color: 'text-white' },
                    { val: '200w+', label: '注册司机', sub: '实名认证', color: 'text-white' },
                    { val: '5000+', label: '合作企业', sub: '长期稳定', color: 'text-white' }
                  ].map((item, i) => (
                    <div key={i} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                      <div className={`text-5xl md:text-6xl font-black ${item.color} mb-2 tracking-tighter drop-shadow-[0_0_15px_rgba(230,0,18,0.3)] group-hover:scale-110 transition-transform`}>
                        {item.val}
                      </div>
                      <div className="text-white font-bold text-lg mb-1">{item.label}</div>
                      <div className="text-gray-400 text-xs uppercase tracking-widest">{item.sub}</div>
                      
                      {/* Fire Icon for first item */}
                      {i === 0 && (
                        <div className="absolute -top-3 -right-3 bg-[#E60012] text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce">
                          HOT
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. Digital Demo (Driver App) - Visualized */}
            <section className="py-24 bg-white overflow-hidden">
               <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                 <div className="flex-1 text-center md:text-left">
                    <div className="text-[#E60012] font-bold tracking-widest uppercase mb-4">Driver Super App</div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
                      好货抢单 <span className="text-[#E60012]">快人一步</span><br/>
                      赚钱就是这么简单
                    </h2>
                    <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                      依托易达宝强大的算法引擎，为您精准推送回程货、高价货。
                      <span className="block mt-4 font-bold text-gray-900">告别空驶焦虑，月入过万不是梦！</span>
                    </p>
                    <ul className="space-y-4 mb-10 text-left max-w-md mx-auto md:mx-0">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-[#E60012] shrink-0" />
                        <span className="text-lg font-medium text-gray-700">千人千面智能推荐，只看想跑的路线</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-[#E60012] shrink-0" />
                        <span className="text-lg font-medium text-gray-700">运费担保交易，卸货即刻到账提现</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-[#E60012] shrink-0" />
                        <span className="text-lg font-medium text-gray-700">货车专用导航，避开限行少绕路</span>
                      </li>
                    </ul>
                    <button className="bg-[#E60012] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-colors shadow-xl shadow-red-600/30">
                      立即下载抢单 &rarr;
                    </button>
                 </div>
                 
                 <div className="flex-1 relative flex justify-center">
                    {/* Mock Phone UI */}
                    <div className="relative border-gray-900 bg-gray-900 border-[12px] rounded-[3rem] h-[640px] w-[320px] shadow-2xl hover:-translate-y-4 transition-transform duration-500">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[24px] w-[120px] bg-gray-900 rounded-b-xl z-20"></div>
                        
                        {/* Screen */}
                        <div className="w-full h-full bg-gray-50 rounded-[2.2rem] overflow-hidden flex flex-col relative">
                           {/* Status Bar */}
                           <div className="h-12 bg-white flex justify-between items-center px-6 pt-2">
                             <span className="text-xs font-bold">9:41</span>
                             <div className="flex space-x-1">
                               <div className="w-4 h-2.5 bg-black rounded-sm"></div>
                             </div>
                           </div>
                           
                           {/* App Header */}
                           <div className="bg-white px-4 pb-4 border-b border-gray-100">
                             <div className="flex justify-between items-end mb-4">
                               <div>
                                 <div className="text-xs text-gray-500">当前位置</div>
                                 <div className="font-bold text-lg flex items-center">
                                   上海市 <span className="ml-1 text-[10px] bg-gray-100 px-1 rounded">▼</span>
                                 </div>
                               </div>
                               <Activity className="text-gray-400" />
                             </div>
                             
                             {/* Tabs */}
                             <div className="flex bg-gray-100 p-1 rounded-lg">
                               <div className="flex-1 bg-white shadow-sm rounded-md py-1.5 text-center text-sm font-bold text-[#E60012]">推荐货源</div>
                               <div className="flex-1 py-1.5 text-center text-sm font-medium text-gray-500">订阅路线</div>
                             </div>
                           </div>

                           {/* Order List */}
                           <div className="flex-1 overflow-hidden p-3 space-y-3 bg-gray-50">
                              {/* Order Card 1 */}
                              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-[#E60012] text-white text-[10px] px-2 py-1 rounded-bl-lg font-bold">高价急货</div>
                                <div className="flex justify-between items-start mb-3">
                                  <div className="flex flex-col">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-lg font-bold">上海</span>
                                      <span className="text-gray-300">➔</span>
                                      <span className="text-lg font-bold">北京</span>
                                    </div>
                                    <div className="text-xs text-gray-400 mt-1">普货 13米高栏 32吨</div>
                                  </div>
                                  <div className="text-[#E60012] font-bold text-xl">¥12,000</div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></div>
                                    <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                                    <span className="text-[10px] text-gray-400 pl-3 pt-1">3人刚刚查看</span>
                                  </div>
                                  <button className="bg-[#E60012] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-red-200">立即抢单</button>
                                </div>
                              </div>

                              {/* Order Card 2 */}
                              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex justify-between items-start mb-3">
                                  <div className="flex flex-col">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-lg font-bold">杭州</span>
                                      <span className="text-gray-300">➔</span>
                                      <span className="text-lg font-bold">广州</span>
                                    </div>
                                    <div className="text-xs text-gray-400 mt-1">百货 9.6米厢式 18吨</div>
                                  </div>
                                  <div className="text-[#E60012] font-bold text-xl">¥8,500</div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="text-[10px] text-gray-400">装货时间：今日 18:00</div>
                                  <button className="bg-[#E60012] text-white px-4 py-1.5 rounded-full text-sm font-bold">查看详情</button>
                                </div>
                              </div>
                              
                              {/* Toast Notification */}
                              <div className="absolute bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur text-white p-3 rounded-lg shadow-xl flex items-center space-x-3 animate-slide-up">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center font-bold">¥</div>
                                <div>
                                  <div className="text-xs text-gray-300">运费到账提醒</div>
                                  <div className="font-bold text-sm">您的运费 ¥5,200.00 已到账</div>
                                </div>
                              </div>
                           </div>
                        </div>
                    </div>
                 </div>
               </div>
            </section>

            {/* 6. Bottom Download */}
            <section className="py-20 bg-[#E60012] text-white text-center">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">别犹豫，好货不等人</h2>
                <div className="bg-white p-4 rounded-2xl inline-block shadow-xl">
                   <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=yidabao-driver-app-bottom" 
                      alt="Download App" 
                      className="w-40 h-40"
                    />
                </div>
                <p className="mt-6 text-white/80 font-medium">扫码立即下载易达宝司机端</p>
              </div>
            </section>
          </div>
        )}
      </div>

      {/* 7. Fixed Sidebar */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-2">
        <div className="bg-white p-3 rounded-l-xl shadow-lg border border-gray-100 hover:w-48 w-14 group transition-all duration-300 overflow-hidden flex items-center cursor-pointer relative">
          <Phone className="w-6 h-6 text-[#E60012] min-w-[24px]" />
          <div className="ml-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-xs text-gray-500">24小时客服</div>
            <div className="text-sm font-bold">400-015-8686</div>
          </div>
        </div>
        
        <div className="bg-white p-3 rounded-l-xl shadow-lg border border-gray-100 hover:w-48 w-14 group transition-all duration-300 overflow-hidden flex items-center cursor-pointer relative"
           onClick={() => window.open(`https://chat.example.com?source=${activeTab === 'truck' ? 'shipper_page' : 'driver_page'}`, '_blank')}
        >
          <MessageSquare className="w-6 h-6 text-[#E60012] min-w-[24px]" />
          <div className="ml-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-sm font-bold">在线客服</div>
          </div>
        </div>

        <div className="bg-white p-3 rounded-l-xl shadow-lg border border-gray-100 hover:w-48 w-14 group transition-all duration-300 overflow-hidden flex items-center cursor-pointer relative">
          <Monitor className="w-6 h-6 text-[#E60012] min-w-[24px]" />
          <div className="ml-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-sm font-bold">货主端登录</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MatchmakingPage;
