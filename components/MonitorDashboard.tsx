import React, { useEffect, useState } from 'react';
import { 
  Activity, 
  Smartphone, 
  Monitor, 
  Globe, 
  Clock, 
  Users, 
  Shield, 
  AlertTriangle,
  RefreshCw,
  Search,
  Eye,
  MousePointer2
} from 'lucide-react';
import { VisitorData } from '../utils/analytics';

const MonitorDashboard: React.FC = () => {
  const [logs, setLogs] = useState<VisitorData[]>([]);
  const [stats, setStats] = useState({
    totalPV: 0,
    totalUV: 0,
    online: 0,
    mobilePercent: 0,
  });
  const [pageStats, setPageStats] = useState<{path: string, pv: number, uv: number}[]>([]);

  // Load data
  useEffect(() => {
    const loadData = () => {
      const history: VisitorData[] = JSON.parse(localStorage.getItem('wlt_analytics_history') || '[]');
      setLogs(history);

      // 1. Calculate Total PV
      const totalPV = history.length;

      // 2. Calculate Total UV
      const uniqueVisitors = new Set(history.map(h => h.visitorId));
      const totalUV = uniqueVisitors.size;

      // 3. Calculate Online Users (Active in last 5 minutes)
      const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
      const onlineVisitors = new Set(
        history.filter(h => h.timestamp > fiveMinutesAgo).map(h => h.visitorId)
      );
      const online = onlineVisitors.size;

      // 4. Calculate Mobile Percent
      const mobileCount = history.filter(h => h.device.isMobile).length;
      const mobilePercent = totalPV > 0 ? Math.round((mobileCount / totalPV) * 100) : 0;

      setStats({
        totalPV,
        totalUV,
        online,
        mobilePercent
      });

      // 5. Calculate Page PV/UV
      const pageMap = new Map<string, { pv: number, visitorIds: Set<string> }>();
      
      history.forEach(log => {
        // Normalize path
        const path = log.page.path || '/';
        if (!pageMap.has(path)) {
          pageMap.set(path, { pv: 0, visitorIds: new Set() });
        }
        const stat = pageMap.get(path)!;
        stat.pv += 1;
        stat.visitorIds.add(log.visitorId);
      });

      const pageStatsArray = Array.from(pageMap.entries()).map(([path, data]) => ({
        path,
        pv: data.pv,
        uv: data.visitorIds.size
      })).sort((a, b) => b.pv - a.pv); // Sort by PV desc

      setPageStats(pageStatsArray);
    };

    loadData();
    const interval = setInterval(loadData, 2000); // Refresh every 2s for better realtime feel
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans p-6 md:p-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-black mb-2 flex items-center">
            <Activity className="text-[#E60012] w-8 h-8 mr-3" />
            设备与访客监控系统
          </h1>
          <p className="text-gray-400 text-sm">Real-time Device & Visitor Monitoring System (Live Data)</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-500 text-sm font-bold animate-pulse">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            系统运行正常
          </div>
          <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors" onClick={() => window.location.reload()}>
            <RefreshCw className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: '实时在线访客 (5min)', val: stats.online, icon: <Users className="w-6 h-6 text-blue-500" />, sub: '当前活跃会话' },
          { label: '历史总访问量 (PV)', val: stats.totalPV.toLocaleString(), icon: <Eye className="w-6 h-6 text-[#E60012]" />, sub: 'Page Views' },
          { label: '独立访客数 (UV)', val: stats.totalUV.toLocaleString(), icon: <MousePointer2 className="w-6 h-6 text-green-500" />, sub: 'Unique Visitors' },
          { label: '移动端占比', val: `${stats.mobilePercent}%`, icon: <Smartphone className="w-6 h-6 text-purple-500" />, sub: '设备分布' },
        ].map((stat, i) => (
          <div key={i} className="bg-[#1E293B] border border-gray-700 p-6 rounded-2xl shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-gray-800 rounded-xl">{stat.icon}</div>
              {i === 0 && <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">LIVE</span>}
            </div>
            <div className="text-3xl font-black mb-1">{stat.val}</div>
            <div className="text-gray-400 text-xs">{stat.label}</div>
            <div className="mt-4 pt-4 border-t border-gray-700/50 text-xs text-gray-500 flex justify-between">
              <span>{stat.sub}</span>
              <span className="text-gray-300">Real-time</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts & Distributions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Device Distribution */}
        <div className="bg-[#1E293B] border border-gray-700 p-6 rounded-2xl lg:col-span-1">
          <h3 className="font-bold text-lg mb-6 flex items-center">
            <Monitor className="w-5 h-5 mr-2 text-gray-400" /> 设备类型分布
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">Desktop</span>
                <span className="font-bold">{100 - stats.mobilePercent}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${100 - stats.mobilePercent}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">Mobile</span>
                <span className="font-bold">{stats.mobilePercent}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${stats.mobilePercent}%` }}></div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
             <div className="flex items-center text-xs text-gray-400 mb-2">
               <Shield className="w-3 h-3 mr-1" /> 数据采集状态
             </div>
             <div className="text-sm text-gray-300">
               当前设备指纹: <span className="text-[#E60012] font-mono bg-black/30 px-1 rounded">{logs[0]?.fingerprint?.slice(0, 8) || 'Scanning...'}</span>
             </div>
          </div>
        </div>

        {/* Page Performance */}
        <div className="bg-[#1E293B] border border-gray-700 p-6 rounded-2xl lg:col-span-2">
          <h3 className="font-bold text-lg mb-6 flex items-center">
            <Globe className="w-5 h-5 mr-2 text-[#E60012]" /> 页面访问热度 (PV/UV)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-gray-500 border-b border-gray-700">
                  <th className="pb-3 pl-2">页面路径</th>
                  <th className="pb-3">浏览量 (PV)</th>
                  <th className="pb-3">访客数 (UV)</th>
                  <th className="pb-3">占比</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700/50">
                {pageStats.map((page, i) => (
                  <tr key={i} className="hover:bg-gray-800/50 transition-colors">
                    <td className="py-4 pl-2 font-mono text-gray-300">{page.path}</td>
                    <td className="py-4 font-bold text-white">{page.pv}</td>
                    <td className="py-4 text-gray-400">{page.uv}</td>
                    <td className="py-4 w-1/3">
                       <div className="flex items-center">
                         <div className="flex-1 bg-gray-700 h-1.5 rounded-full mr-2">
                           <div 
                             className="bg-[#E60012] h-1.5 rounded-full" 
                             style={{ width: `${(page.pv / stats.totalPV) * 100}%` }}
                           ></div>
                         </div>
                         <span className="text-xs text-gray-500">{Math.round((page.pv / stats.totalPV) * 100)}%</span>
                       </div>
                    </td>
                  </tr>
                ))}
                {pageStats.length === 0 && (
                  <tr><td colSpan={4} className="py-4 text-center text-gray-500">暂无数据</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Visitor Logs Table */}
      <div className="bg-[#1E293B] border border-gray-700 p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-lg">实时访问日志 (Data Collection Layer)</h3>
          <div className="relative">
             <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
             <input type="text" placeholder="搜索 Visitor ID" className="bg-gray-800 border border-gray-700 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#E60012] w-64" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-500 border-b border-gray-700 bg-gray-800/50">
                <th className="p-4 rounded-tl-xl">时间</th>
                <th className="p-4">访客 ID / 指纹</th>
                <th className="p-4">设备型号</th>
                <th className="p-4">系统 / 分辨率</th>
                <th className="p-4 rounded-tr-xl">当前页面</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {logs.length > 0 ? logs.map((log, i) => (
                <tr key={i} className="hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 font-mono text-gray-400 whitespace-nowrap">
                    {new Date(log.timestamp).toLocaleTimeString()}
                  </td>
                  <td className="p-4 font-mono">
                    <div className="text-[#E60012]">{log.visitorId.slice(0, 8)}...</div>
                    <div className="text-xs text-gray-600">{log.fingerprint ? `FP: ${log.fingerprint.slice(0,8)}` : 'No FP'}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-medium text-white">{log.device.browser}</div>
                    <div className="text-xs text-gray-500">{log.device.isMobile ? 'Mobile Device' : 'Desktop Device'}</div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                       <span className="text-gray-300">{log.device.os}</span>
                       <span className="text-xs text-gray-500">{log.device.screenResolution}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-300 truncate max-w-xs font-mono">
                    {log.page.path}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-500">
                    等待流量接入...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MonitorDashboard;
