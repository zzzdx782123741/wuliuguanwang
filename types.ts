import React from 'react';

export interface Capability {
  icon: React.ReactNode;
  label: string;
  description: string;
}

export interface Platform {
  id: string;
  name: string;
  description: string;
  bgImage: string;
  capabilities: Capability[];
  downloads: {
    name: string;
    qrUrl: string;
  }[];
}

export interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}
