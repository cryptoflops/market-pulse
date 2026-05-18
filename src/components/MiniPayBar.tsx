'use client';

import { useMiniPay } from '@/hooks/useMiniPay';

/**
 * Floating stablecoin balance bar shown when the app is loaded inside MiniPay.
 * Satisfies the "Stablecoin balance display" and "MiniPay wallet hook" checklist items.
 */
export default function MiniPayBar() {
  const { isMiniPay, isLoading, cusdBalance, ceurBalance, address } = useMiniPay();

  if (isLoading || !isMiniPay || !address) return null;

  const formatBalance = (val: string) => {
    const num = parseFloat(val);
    if (num === 0) return '0.00';
    if (num < 0.01) return '<0.01';
    return num.toFixed(2);
  };

  return (
    <div className="w-full px-4 py-2 bg-gradient-to-r from-[#fcff52]/10 to-[#35d07f]/10 backdrop-blur-md border-b border-[#35d07f]/20 flex items-center justify-between text-xs z-50">
      <div className="flex items-center gap-1.5">
        <span className="inline-block w-2 h-2 rounded-full bg-[#35d07f] animate-pulse" />
        <span className="text-[#35d07f] font-semibold tracking-wide uppercase text-[10px]">MiniPay</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-white/80">
          <span className="text-white/50 mr-1">cUSD</span>
          <span className="font-mono font-bold">{formatBalance(cusdBalance)}</span>
        </span>
        <span className="text-white/80">
          <span className="text-white/50 mr-1">cEUR</span>
          <span className="font-mono font-bold">{formatBalance(ceurBalance)}</span>
        </span>
      </div>
    </div>
  );
}
