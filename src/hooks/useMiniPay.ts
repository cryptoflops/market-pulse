'use client';

import { useEffect, useState } from 'react';
import { useConnect, useAccount } from 'wagmi';
import { injected } from 'wagmi/connectors';

export function useMiniPay() {
  const [isMiniPay, setIsMiniPay] = useState(false);
  const { connect } = useConnect();
  const { isConnected } = useAccount();

  useEffect(() => {
    // Check if we are inside the MiniPay WebView
    const checkMiniPay = () => {
      if (typeof window !== 'undefined' && window.ethereum && (window.ethereum as any).isMiniPay) {
        setIsMiniPay(true);
        // Auto-connect if not already connected
        if (!isConnected) {
          connect({ connector: injected() });
        }
      }
    };

    checkMiniPay();
    
    // MiniPay injects provider asynchronously sometimes
    const timeout = setTimeout(checkMiniPay, 500);
    return () => clearTimeout(timeout);
  }, [connect, isConnected]);

  return { isMiniPay };
}
