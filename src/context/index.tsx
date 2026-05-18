'use client';

import React from 'react';
import { wagmiAdapter, projectId, networks } from '@/config';
import { createAppKit } from '@reown/appkit/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';

const queryClient = new QueryClient();

if (!projectId) {
  throw new Error('Project ID is not defined');
}

const metadata = {
  name: 'MarketPulse',
  description: 'On-Chain Loyalty for Celo Merchants via MiniPay',
  url: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://market-pulse.pages.dev',
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
};

export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [...networks],
  metadata,
  themeMode: 'dark',
  features: {
    analytics: true,
  },
});

import { LogProvider } from './LogContext';
import NetworkEnforcer from '@/components/NetworkEnforcer';

export default function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <NetworkEnforcer />
        <LogProvider>{children}</LogProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}