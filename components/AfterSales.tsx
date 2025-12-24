
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Settings2, 
  RefreshCcw, 
  BarChart4, 
  Store, 
  Truck, 
  UserSquare2, 
  CheckCircle2, 
  PhoneCall, 
  MessageSquareMore,
  Building2,
  Warehouse
} from 'lucide-react';

const AfterSales: React.FC = () => {
  const [activeRole, setActiveRole] = useState<'brand' | 'shop' | 'driver'>('brand');
  const [formRole, setFormRole] = useState<'supplier' | 'store'>('supplier');
  const [submitted, setSubmitted] = useState(false);

  const roles = [
    { id: 'brand', label: '品牌商/经销商', icon: <Store className="w-5 h-5" /> },
    { id: 'shop', label: '维修门店', icon: <Settings2 className="w-5 h-5" /> },
    { id: 'driver', label: '司机与中小车队', icon: <Truck className="w-5 h-5" /> },
  ];

  const roleSolutions = {
    brand: [
      '开设官方旗舰店，直连终端用户',
      '高效结算，加速资金周转',
      '获取真实消费数据，反哺产品与渠道策略'
    ],
    shop: [
      '平台精准导流，获得稳定订单',
      '接入品牌官方供应链，降低采购成本',
      '获得“万联驿站认证门店”标识，提升客户信任'
    ],
    driver: [
      '正品配件保障 + 平台质保',
      '全国认证门店网络，服务标准统一',
      '支持灵活金融方案，缓解资金压力'
    ]
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. After-Sales Banner */}
      <section className="relative h-[600px] bg-[#1A1C2E] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486006396193-47135889AF4D?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 scale-105" 
            alt="Auto service"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1C2E] via-[#1A1C2E]/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#E60012] rounded-full text-white text-[10px] font-black tracking-[0.2em] uppercase mb-8 shadow-xl shadow-red-600/20">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span>万联驿站 · 数字化车后电商</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight italic">
              链接万千运力 <br />
              <span className="text-[#E60012]">重塑服务价值</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-xl font-light border-l-2 border-white/20 pl-6">
              为物流车辆提供从配件采购、维修保养到金融保险的全生命周期数字化服务。
            </p>
            
            <div className="flex items-center space-x-12">
              <div className="text-white">
                <div className="text-4xl font-black text-[#E60012] mb-1">750+</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">覆盖县域</div>
              </div>
              <div className="h-8 w-px bg-white/10"></div>
              <div className="text-white">
                <div className="text-4xl font-black text-[#E60012] mb-1">2000+</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">联营网点</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Values */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">核心服务价值</h2>
              <div className="w-16 h-1 bg-[#E60012] rounded-full mb-6"></div>
              <p className="text-gray-500 text-lg">依托万联通强大的运力基石，打造透明、标准、高效的车后综合服务体系</p>
            </div>
            <div className="flex space-x-4">
              <div className="p-4 bg-red-50 text-[#E60012] rounded-2xl">
                 <ShieldCheck className="w-8 h-8" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '正品溯源', desc: '平台直连大牌厂商，全链条溯源，确保每一件配件均为原厂正品。', icon: <ShieldCheck className="w-8 h-8" /> },
              { title: '价格透明', desc: '全国统一结算价，告别线下维修“看人下菜”的行业乱象。', icon: <BarChart4 className="w-8 h-8" /> },
              { title: '数字监管', desc: '维修过程线上可视化，服务工单实时归档，质量可追溯。', icon: <RefreshCcw className="w-8 h-8" /> },
              { title: '极速响应', desc: '依托全国网点布局，为长途货运提供紧急救援及快速维保服务。', icon: <Settings2 className="w-8 h-8" /> },
            ].map((item, idx) => (
              <div key={idx} className="p-10 rounded-[32px] bg-white border border-gray-100 hover:border-[#E60012]/30 hover:shadow-2xl hover:shadow-red-600/5 transition-all duration-500 group">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-[#E60012] group-hover:bg-red-50 transition-colors mb-8">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solutions by Role (The dark UI for contrast) */}
      <section className="py-24 bg-[#0A0E17]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-20">
             <span className="text-[#E60012] text-xs font-bold tracking-[0.3em] uppercase mb-4">Ecosystem</span>
             <h2 className="text-4xl font-bold text-white mb-6">多方共赢的生态闭环</h2>
             <p className="text-gray-500 max-w-2xl">针对产业链上下游痛点，提供场景化的赋能方案</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3 flex flex-col space-y-3">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id as any)}
                  className={`flex items-center space-x-5 p-7 rounded-[28px] transition-all text-left ${
                    activeRole === role.id 
                      ? 'bg-[#E60012] text-white shadow-2xl shadow-red-600/30 -translate-y-1' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <div className={`p-4 rounded-2xl ${activeRole === role.id ? 'bg-white/20' : 'bg-white/5'}`}>
                    {role.icon}
                  </div>
                  <span className="font-bold text-lg">{role.label}</span>
                </button>
              ))}
            </div>

            <div className="lg:w-2/3 bg-white/5 backdrop-blur-md rounded-[48px] p-12 lg:p-20 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8">
                  <UserSquare2 className="w-32 h-32 text-white/5" />
               </div>
               <div className="relative z-10 animate-in fade-in slide-in-from-right-10 duration-500">
                  <h3 className="text-3xl font-bold text-white mb-12 flex items-center">
                    <span className="w-8 h-1 bg-[#E60012] mr-4 rounded-full"></span>
                    核心赋能权益
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {roleSolutions[activeRole].map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-[#E60012] mt-0.5 mr-4 flex-shrink-0" />
                        <span className="text-lg text-gray-300 font-light leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-16 px-12 py-5 bg-[#E60012] text-white font-black rounded-full hover:bg-white hover:text-black transition-all shadow-xl shadow-red-600/20">
                    咨询合作详情
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Form Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[60px] shadow-2xl p-12 lg:p-20 relative border border-gray-100">
            {submitted ? (
              <div className="py-20 text-center animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h4 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">提交成功！</h4>
                <p className="text-gray-500 text-lg">招商团队将在 1 个工作日内拨打您的电话。</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="text-center mb-16">
                   <h2 className="text-4xl font-bold text-gray-900 mb-6 italic tracking-tight uppercase">入驻万联驿站</h2>
                   <p className="text-gray-500">已有 2000+ 伙伴加入，共创万亿规模商用车后市场</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {/* Role Selector */}
                  <div className="md:col-span-2 space-y-4">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4 flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#E60012] rounded-full mr-2"></span>
                      入驻角色选择
                    </label>
                    <div className="grid grid-cols-2 gap-4 p-1.5 bg-gray-50 rounded-[32px]">
                      <button
                        type="button"
                        onClick={() => setFormRole('supplier')}
                        className={`flex items-center justify-center space-x-3 py-5 px-6 rounded-[28px] text-[15px] font-bold transition-all duration-300 ${
                          formRole === 'supplier' 
                            ? 'bg-white text-[#E60012] shadow-xl' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        <Building2 className={`w-5 h-5 ${formRole === 'supplier' ? 'text-[#E60012]' : 'text-gray-400'}`} />
                        <span>供应商</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormRole('store')}
                        className={`flex items-center justify-center space-x-3 py-5 px-6 rounded-[28px] text-[15px] font-bold transition-all duration-300 ${
                          formRole === 'store' 
                            ? 'bg-white text-[#E60012] shadow-xl' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        <Warehouse className={`w-5 h-5 ${formRole === 'store' ? 'text-[#E60012]' : 'text-gray-400'}`} />
                        <span>门店商家</span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">您的称呼</label>
                    <input type="text" placeholder="请输入姓名" required className="w-full px-8 py-5 rounded-[24px] bg-gray-50 border-none focus:ring-2 focus:ring-[#E60012] focus:bg-white transition-all outline-none text-gray-800" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">联系手机</label>
                    <input type="tel" placeholder="请输入手机号" required className="w-full px-8 py-5 rounded-[24px] bg-gray-50 border-none focus:ring-2 focus:ring-[#E60012] focus:bg-white transition-all outline-none text-gray-800" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">公司/门店全称</label>
                    <input type="text" placeholder="请输入完整名称" required className="w-full px-8 py-5 rounded-[24px] bg-gray-50 border-none focus:ring-2 focus:ring-[#E60012] focus:bg-white transition-all outline-none text-gray-800" />
                  </div>
                </div>

                <button className="w-full py-6 bg-[#E60012] text-white text-xl font-black rounded-[24px] shadow-2xl shadow-red-600/30 hover:bg-black transition-all hover:-translate-y-1">
                  提交入驻申请
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Fixed Actions for AfterSales Only */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col space-y-4">
        <div className="group relative">
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-100 text-gray-900 font-bold whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none">
            400-015-8686
          </div>
          <button className="w-14 h-14 bg-white text-gray-700 shadow-2xl rounded-2xl flex items-center justify-center hover:bg-[#E60012] hover:text-white transition-all border border-gray-100">
            <PhoneCall className="w-6 h-6" />
          </button>
        </div>
        <div className="group relative">
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-100 text-gray-900 font-bold whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none">
            在线招商咨询
          </div>
          <button className="w-14 h-14 bg-white text-gray-700 shadow-2xl rounded-2xl flex items-center justify-center hover:bg-[#E60012] hover:text-white transition-all border border-gray-100">
            <MessageSquareMore className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AfterSales;
