import { useEffect, useRef } from 'react';

// Types for collected data
export interface VisitorData {
  visitorId: string;
  fingerprint: string; // Device Fingerprint
  sessionId: string;
  timestamp: number;
  device: {
    userAgent: string;
    browser: string;
    os: string;
    screenResolution: string;
    language: string;
    isMobile: boolean;
    pixelRatio: number;
    colorDepth: number;
  };
  location: {
    ip: string; // Simulated IP
    city: string;
    country: string;
  };
  page: {
    url: string;
    path: string;
    title: string;
    referrer: string;
  };
}

// Generate a simple browser fingerprint using Canvas API
const getBrowserFingerprint = (): string => {
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return 'unknown';

    canvas.height = 200;
    canvas.width = 200;

    // Text with different fonts and styles
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText("Wanlian Logistics", 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText("Wanlian Logistics", 4, 17);

    // Hashing the data URL
    const dataUrl = canvas.toDataURL();
    let hash = 0;
    if (dataUrl.length === 0) return 'unknown';
    for (let i = 0; i < dataUrl.length; i++) {
      const char = dataUrl.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(16);
  } catch (e) {
    return 'error-generating-fingerprint';
  }
};

// Simple User Agent Parser
const parseUserAgent = (ua: string) => {
  let browser = "Unknown";
  let os = "Unknown";

  // Browser
  if (ua.indexOf("Firefox") > -1) browser = "Mozilla Firefox";
  else if (ua.indexOf("SamsungBrowser") > -1) browser = "Samsung Internet";
  else if (ua.indexOf("Opera") > -1 || ua.indexOf("OPR") > -1) browser = "Opera";
  else if (ua.indexOf("Trident") > -1) browser = "Microsoft Internet Explorer";
  else if (ua.indexOf("Edge") > -1) browser = "Microsoft Edge";
  else if (ua.indexOf("Chrome") > -1) browser = "Google Chrome";
  else if (ua.indexOf("Safari") > -1) browser = "Apple Safari";

  // OS
  if (ua.indexOf("Win") > -1) os = "Windows";
  else if (ua.indexOf("Mac") > -1) os = "MacOS";
  else if (ua.indexOf("Linux") > -1) os = "Linux";
  else if (ua.indexOf("Android") > -1) os = "Android";
  else if (ua.indexOf("like Mac") > -1) os = "iOS";

  return { browser, os };
};

// Generate UUID
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// Mock IP - In a real scenario, this would be fetched from an API like https://api.ipify.org?format=json
const mockLocation = () => {
  const ips = ['114.23.12.5', '202.96.128.86', '58.215.33.1', '221.6.4.12'];
  const cities = ['上海', '北京', '广州', '深圳', '杭州', '成都', '武汉', '南京'];
  return {
    ip: ips[Math.floor(Math.random() * ips.length)], // Randomize for demo diversity, but in real app would be static per session
    city: cities[Math.floor(Math.random() * cities.length)],
    country: '中国'
  };
};

export const useAnalytics = () => {
  // Use ref to track if we already logged this page view to prevent double logging in Strict Mode
  const loggedPath = useRef<string | null>(null);

  useEffect(() => {
    // Current Path
    const currentPath = window.location.hash || window.location.pathname;
    
    // Prevent duplicate logs for the same path in rapid succession (React Strict Mode effect)
    if (loggedPath.current === currentPath) return;
    loggedPath.current = currentPath;

    // 1. Visitor Identification
    let visitorId = localStorage.getItem('wlt_visitor_id');
    if (!visitorId) {
      visitorId = generateUUID();
      localStorage.setItem('wlt_visitor_id', visitorId);
    }

    // 2. Session Tracking
    let sessionId = sessionStorage.getItem('wlt_session_id');
    if (!sessionId) {
      sessionId = generateUUID();
      sessionStorage.setItem('wlt_session_id', sessionId);
    }

    // 3. Device Fingerprinting & Info
    const ua = navigator.userAgent;
    const { browser, os } = parseUserAgent(ua);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    const fingerprint = getBrowserFingerprint();
    
    const data: VisitorData = {
      visitorId: visitorId!,
      fingerprint,
      sessionId: sessionId!,
      timestamp: Date.now(),
      device: {
        userAgent: ua,
        browser,
        os,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        pixelRatio: window.devicePixelRatio || 1,
        colorDepth: window.screen.colorDepth,
        language: navigator.language,
        isMobile,
      },
      location: mockLocation(), // Still mocked as we are client-side
      page: {
        url: window.location.href,
        path: currentPath,
        title: document.title,
        referrer: document.referrer
      }
    };

    console.log('[Analytics] Data Collected:', data);
    
    // Store in local storage
    const history = JSON.parse(localStorage.getItem('wlt_analytics_history') || '[]');
    history.unshift(data);
    
    // Limit storage to avoid overflow (keep last 200)
    localStorage.setItem('wlt_analytics_history', JSON.stringify(history.slice(0, 200)));

  }, [window.location.hash]); // Trigger on hash change (SPA routing)
};
