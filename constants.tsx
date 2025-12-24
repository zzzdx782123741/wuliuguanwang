
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
  Wallet
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
];

export const CUSTOMERS = [
  { name: '酒钢集团', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fcustomers%2Fjiugang.png&w=128&q=75' },
  { name: '鸿基焦化', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fcustomers%2Fhaozhi.png&w=128&q=75' },
  { name: '锦泰', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fcustomers%2Fjintai.png&w=128&q=75' },
  { name: '中国电建', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fcustomers%2Fpowerchina.png&w=128&q=75' },
  { name: '青山控股集团', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fcustomers%2Fqingshan.png&w=128&q=75' },
  { name: '西保集团', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fcustomers%2Fxibao.png&w=128&q=75' },
  { name: '吉铁铁合金', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fcustomers%2Fjitie.png&w=128&q=75' },
  { name: '吉林炭素', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fcustomers%2Fjilintansu.png&w=128&q=75' },
  { name: '陕汽重卡', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fcustomers%2Fshanqi.png&w=128&q=75' },
  { name: '梅花集团', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fcustomers%2Fmeihua.png&w=128&q=75' },
  { name: '中粮', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fcustomers%2Fcofco.png&w=128&q=75' },
];

export const PARTNERS = [
  { name: '阿里云', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fpartners%2Faliyun.png&w=128&q=75' },
  { name: '中信银行', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fpartners%2Fcitic.png&w=128&q=75' },
  { name: '用友软件', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fpartners%2Fyonyou.png&w=128&q=75' },
  { name: '法大大', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fpartners%2Ffadada.png&w=128&q=75' },
  { name: '高德地图', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fpartners%2Famap.png&w=128&q=75' },
  { name: '中文兴路', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fpartners%2Fzhongwenxinglu.png&w=128&q=75' },
  { name: '交通银行', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fpartners%2Fcommbank.png&w=128&q=75' },
  { name: '路税', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fpartners%2Flogistictax.png&w=128&q=75' },
  { name: '百望云', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fpartners%2Fbaiwang.png&w=128&q=75' },
  { name: '中国光大银行', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fpartners%2Fcebbank.png&w=128&q=75' },
  { name: '华泰保险', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fpartners%2Fhuatai.png&w=128&q=75' },
  { name: 'aSign爱签', logo: 'https://www.wanliantong.com/_next/image?url=%2Fimages%2Fpartners%2Fasign.png&w=128&q=75' },
];
