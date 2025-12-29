import React from 'react';
import { 
  Zap, 
  MapPin, 
  CreditCard, 
  ShieldCheck, 
  Users, 
  Eye, 
  Settings, 
  CheckCircle,
  Truck,
  Layers,
  Container,
  Leaf,
  FileText,
  BarChart3,
  CalendarDays,
  Wallet,
  Settings2,
  RefreshCcw,
  BarChart4
} from 'lucide-react';
import { Platform, NavItem } from './types';

export const PLATFORMS: Platform[] = [
  {
    id: 'matching',
    name: '撮合交易平台',
    description: '通过智能匹配算法，为货主和司机提供高效的货运撮合服务，降低空驶率，提高运输效率。平台实时匹配货源与运力，让每一次运输都更高效。',
    bgImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2000',
    capabilities: [
      { icon: <Zap className="w-6 h-6" />, label: '智能匹配', description: '基于大数据算法，秒级精准匹配车货资源，提升成交效率' },
      { icon: <MapPin className="w-6 h-6" />, label: '实时追踪', description: '北斗/GPS双模定位，全链路可视化追踪，货物动态实时掌握' },
      { icon: <CreditCard className="w-6 h-6" />, label: '在线支付', description: '支持多种支付方式，平台担保交易，运费结算安全到账' },
      { icon: <ShieldCheck className="w-6 h-6" />, label: '信用评价', description: '建立完善的信用评价体系，优选高诚信司机，服务有保障' },
    ],
    downloads: [
      { name: '易达宝货主端', qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=yidabao-shipper' },
      { name: '易达宝司机端', qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=yidabao-driver' },
      { name: '易达宝调度端', qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=yidabao-dispatch' },
    ]
  },
  {
    id: 'network',
    name: '网络货运平台',
    description: '依托互联网平台整合物流资源，为客户提供全程可视化的货运服务，实现降本增效。打造数字化货运新生态，助力企业转型升级。',
    bgImage: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000',
    capabilities: [
      { icon: <Users className="w-6 h-6" />, label: '资源整合', description: '汇聚海量社会运力，构建优质运力池，满足多样化用车需求' },
      { icon: <Eye className="w-6 h-6" />, label: '全程可视', description: '运输轨迹实时监控，异常情况自动预警，保障货物运输安全' },
      { icon: <Settings className="w-6 h-6" />, label: '数字化管理', description: '业务全流程线上化流转，打破信息孤岛，提升协同效率' },
      { icon: <CheckCircle className="w-6 h-6" />, label: '合规运营', description: '五流合一闭环管理，税务合规无风险，助力企业降本增效' },
    ],
    downloads: [
      { name: '易达宝货主端', qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=yidabao-shipper' },
      { name: '易达宝司机端', qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=yidabao-driver' },
    ]
  },
  {
    id: 'aftermarket',
    name: '车后电商平台',
    description: '链接万千运力，重塑服务价值。为物流车辆提供从配件采购、维修保养到金融保险的全生命周期数字化服务，打造透明、标准、高效的车后综合服务体系。',
    bgImage: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=2000',
    capabilities: [
      { icon: <ShieldCheck className="w-6 h-6" />, label: '正品溯源', description: '源头直采，一物一码，确保每一件商品都是原厂正品' },
      { icon: <BarChart4 className="w-6 h-6" />, label: '价格透明', description: '全国统一售价，拒绝隐形消费，让每一分钱都花在刀刃上' },
      { icon: <RefreshCcw className="w-6 h-6" />, label: '数字监管', description: '服务过程全记录，维修保养数据上链，车辆档案随时可查' },
      { icon: <Settings2 className="w-6 h-6" />, label: '极速响应', description: '全国万家合作门店，线上下单线下服务，故障救援随叫随到' },
    ],
    downloads: [
      { name: '供应商端', qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=supplier' },
      { name: '门店商家端', qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=store' },
      { name: '易达宝司机端', qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=yidabao-driver' },
    ]
  },
  {
    id: 'multimodal',
    name: '多式联运平台',
    description: '整合公路、铁路、水运等多种运输方式，为客户提供一站式综合物流解决方案。通过优化运输组合，实现成本最优、效率最高。',
    bgImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000',
    capabilities: [
      { icon: <Truck className="w-6 h-6" />, label: '一次合同', description: '只需签订一次运输合同，全程负责到底，省去繁琐手续' },
      { icon: <Layers className="w-6 h-6" />, label: '运输灵活', description: '公铁水灵活组合，根据货物特点和时效要求，定制最佳方案' },
      { icon: <Container className="w-6 h-6" />, label: '集装箱化', description: '标准化集装箱运输，减少货物损耗，提高装卸效率' },
      { icon: <Leaf className="w-6 h-6" />, label: '绿色低碳', description: '优化运输结构，大幅降低碳排放，助力实现双碳目标' },
    ],
    downloads: [
      { name: '物流企业端', qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=enterprise' },
      { name: '易达宝司机端', qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=yidabao-driver' },
    ]
  },
  {
    id: 'tms',
    name: 'TMS运输管理系统',
    description: '专业的运输管理系统，帮助企业实现运输全流程数字化管理，提升运营效率。从订单到结算，全流程数字化、智能化管理。',
    bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000',
    capabilities: [
      { icon: <FileText className="w-6 h-6" />, label: '订单管理', description: '支持多种订单导入方式，智能拆单合单，自动化流转' },
      { icon: <CalendarDays className="w-6 h-6" />, label: '调度优化', description: '智能排线算法，自动规划最优路径，提高车辆装载率' },
      { icon: <BarChart3 className="w-6 h-6" />, label: '数据分析', description: '多维度报表自动生成，运营数据可视化，辅助经营决策' },
      { icon: <Wallet className="w-6 h-6" />, label: '财务结算', description: '自动计算运费，对接财务系统，实现业财一体化管理' },
    ],
    downloads: [
      { name: '物流企业端', qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=enterprise' },
      { name: '易达宝司机端', qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=yidabao-driver' },
    ]
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: '物流服务', path: '#platforms' },
  { label: '车后服务', path: '#aftersales' },
  { label: '智慧场站', path: '#scenarios' },
  { label: '资讯公告', path: '#news' },
  { label: '关于我们', path: '#about' },
];

export const BUSINESS_ENTRANCE = [
  { label: '撮合交易平台入口：易达宝货主端', path: '#' },
  { label: '网络货运平台入口：万连通企业端', path: '#' },
  { label: 'TMS平台入口：易达宝货主端', path: '#' },
  { label: '车后电商平台入口：万连通经销商端', path: '#' },
];

export const CUSTOMERS = [
  { name: 'COSCO SHIPPING', logo: 'https://logo.clearbit.com/coscoshipping.com' },
  { name: 'SINOTRANS', logo: 'https://logo.clearbit.com/sinotrans.com' },
  { name: '中国铁路快运', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/China_Railway_Logo_2017.svg/1200px-China_Railway_Logo_2017.svg.png' },
  { name: 'CRE', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/China_Railway_Express_logo.svg/2560px-China_Railway_Express_logo.svg.png' },
  { name: '百世', logo: 'https://logo.clearbit.com/800best.com' },
  { name: '中国邮政', logo: 'https://logo.clearbit.com/chinapost.com.cn' },
  { name: '安吉物流', logo: 'https://www.anji-plus.com/images/logo.png' },
  { name: '顺丰', logo: 'https://logo.clearbit.com/sf-express.com' },
  { name: '京东物流', logo: 'https://logo.clearbit.com/jdwl.com' },
  { name: '中核集团', logo: 'https://logo.clearbit.com/cnnc.com.cn' },
  { name: '万连通', logo: '/logo.png' },
  { name: '鞍钢集团', logo: 'https://logo.clearbit.com/ansteel.cn' },
];

export const PARTNERS = [
  { name: '阿里云', logo: 'https://logo.clearbit.com/aliyun.com' },
  { name: '中信银行', logo: 'https://logo.clearbit.com/citicbank.com' },
  { name: '用友软件', logo: 'https://logo.clearbit.com/yonyou.com' },
  { name: '法大大', logo: 'https://logo.clearbit.com/fadada.com' },
  { name: '腾讯地图', logo: 'https://logo.clearbit.com/map.qq.com' },
  { name: '中交兴路', logo: 'https://www.sinoiov.com/images/logo.png' },
  { name: '交通银行', logo: 'https://logo.clearbit.com/bankcomm.com' },
  { name: '路税', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fpartners%2Flogistictax.png&w=128&q=75' },
  { name: '百度云', logo: 'https://logo.clearbit.com/cloud.baidu.com' },
  { name: '中国光大银行', logo: 'https://logo.clearbit.com/cebbank.com' },
  { name: '华泰保险', logo: 'https://logo.clearbit.com/ehuatai.com' },
  { name: 'aSign爱签', logo: 'https://www.esign.cn/images/logo.png' },
];
