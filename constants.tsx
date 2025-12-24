
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
      { icon: <Zap className="w-6 h-6" />, label: '智能匹配' },
      { icon: <MapPin className="w-6 h-6" />, label: '实时追踪' },
      { icon: <CreditCard className="w-6 h-6" />, label: '在线支付' },
      { icon: <ShieldCheck className="w-6 h-6" />, label: '信用评价' },
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
      { icon: <Users className="w-6 h-6" />, label: '资源整合' },
      { icon: <Eye className="w-6 h-6" />, label: '全程可视' },
      { icon: <Settings className="w-6 h-6" />, label: '数字化管理' },
      { icon: <CheckCircle className="w-6 h-6" />, label: '合规运营' },
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
    bgImage: 'https://images.unsplash.com/photo-1486006396193-47135889AF4D?auto=format&fit=crop&q=80&w=2000',
    capabilities: [
      { icon: <ShieldCheck className="w-6 h-6" />, label: '正品溯源' },
      { icon: <BarChart4 className="w-6 h-6" />, label: '价格透明' },
      { icon: <RefreshCcw className="w-6 h-6" />, label: '数字监管' },
      { icon: <Settings2 className="w-6 h-6" />, label: '极速响应' },
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
      { icon: <Truck className="w-6 h-6" />, label: '一次合同' },
      { icon: <Layers className="w-6 h-6" />, label: '运输灵活' },
      { icon: <Container className="w-6 h-6" />, label: '集装箱化' },
      { icon: <Leaf className="w-6 h-6" />, label: '绿色低碳' },
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
      { icon: <FileText className="w-6 h-6" />, label: '订单管理' },
      { icon: <CalendarDays className="w-6 h-6" />, label: '调度优化' },
      { icon: <BarChart3 className="w-6 h-6" />, label: '数据分析' },
      { icon: <Wallet className="w-6 h-6" />, label: '财务结算' },
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
  { label: '网络货运平台入口：万联通企业端', path: '#' },
  { label: 'TMS平台入口：易达宝货主端', path: '#' },
  { label: '车后电商平台入口：万联通经销商端', path: '#' },
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
  { name: '万联通', logo: '/logo.png' },
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
