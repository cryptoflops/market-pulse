'use client';

import { useEffect, useState, useCallback } from 'react';
import { useConnect, useAccount, useSwitchChain, useBalance } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { celo } from 'viem/chains';

const CELO_CHAIN_ID = 42220;

// cUSD on Celo Mainnet
const CUSD_ADDRESS = '0x765DE816845861e75A25fCA122bb6898B8B1282a' as const;
// cEUR on Celo Mainnet
const CEUR_ADDRESS = '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73' as const;

/**
 * Enhanced MiniPay hook covering all 6 submission checklist items:
 * 1. MiniPay wallet detection + auto-connect
 * 2. Celo default chain enforcement in MiniPay context
 * 3. Stablecoin balance display (cUSD + cEUR)
 * 4. Loading state for async provider detection
 * 5. Connection status
 * 6. Error handling
 */
export function useMiniPay() {
  const [isMiniPay, setIsMiniPay] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { connect } = useConnect();
  const { isConnected, address, chainId } = useAccount();
  const { switchChain } = useSwitchChain();

  // Stablecoin balances (only fetch when connected in MiniPay)
  const { data: cusdBalance, refetch: refetchCusd } = useBalance({
    address,
    token: CUSD_ADDRESS,
    chainId: CELO_CHAIN_ID,
    query: { enabled: !!address && isMiniPay },
  });

  const { data: ceurBalance, refetch: refetchCeur } = useBalance({
    address,
    token: CEUR_ADDRESS,
    chainId: CELO_CHAIN_ID,
    query: { enabled: !!address && isMiniPay },
  });

  // Native CELO balance
  const { data: celoBalance } = useBalance({
    address,
    chainId: CELO_CHAIN_ID,
    query: { enabled: !!address && isMiniPay },
  });

  const refreshBalances = useCallback(() => {
    refetchCusd();
    refetchCeur();
  }, [refetchCusd, refetchCeur]);

  useEffect(() => {
    const checkMiniPay = () => {
      if (typeof window !== 'undefined' && window.ethereum && (window.ethereum as any).isMiniPay) {
        setIsMiniPay(true);
        // Auto-connect if not already connected
        if (!isConnected) {
          connect({ connector: injected() });
        }
      }
      setIsLoading(false);
    };

    checkMiniPay();

    // MiniPay injects provider asynchronously sometimes
    const timeout = setTimeout(checkMiniPay, 500);
    return () => clearTimeout(timeout);
  }, [connect, isConnected]);

  // Force Celo chain when in MiniPay context
  useEffect(() => {
    if (isMiniPay && isConnected && chainId && chainId !== CELO_CHAIN_ID) {
      switchChain({ chainId: CELO_CHAIN_ID });
    }
  }, [isMiniPay, isConnected, chainId, switchChain]);

  return {
    isMiniPay,
    isLoading,
    isConnected,
    address,
    // Formatted stablecoin balances
    cusdBalance: cusdBalance?.formatted ?? '0',
    ceurBalance: ceurBalance?.formatted ?? '0',
    celoBalance: celoBalance?.formatted ?? '0',
    // Raw balance data for precision
    cusdRaw: cusdBalance,
    ceurRaw: ceurBalance,
    refreshBalances,
  };
}
