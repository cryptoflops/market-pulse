'use client';

import { useState } from 'react';
import AppKitButton from '@/components/AppKitButton';
import { trackEvent } from '@/utils/analytics';
import { useAccount } from 'wagmi';
import { ArrowLeft, Gift, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function CustomerPage() {
  const { isConnected, address } = useAccount();
  const [visits, setVisits] = useState(7);
  const targetVisits = 10;

  const handleCustomerCheckIn = () => {
    trackEvent('customer_mock_check_in');
    if (visits < targetVisits) {
      setVisits(v => v + 1);
    }
  };

  const progress = (visits / targetVisits) * 100;

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant">
        <div className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium text-sm">Back</span>
          </Link>
          <AppKitButton />
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
            <Gift className="w-5 h-5 text-secondary" />
          </div>
          <h1 className="font-display text-3xl font-extrabold text-on-surface tracking-tight">My Rewards</h1>
        </div>
        <p className="text-on-surface-variant mb-10 ml-[52px]">Track your loyalty progress and redeem rewards.</p>

        {!isConnected ? (
          <div className="flex flex-col items-center justify-center py-20 gap-6 text-center">
            <div className="w-20 h-20 rounded-full bg-surface-variant flex items-center justify-center">
              <Gift className="w-10 h-10 text-on-surface-variant" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-on-surface mb-2">Connect to View Rewards</h3>
              <p className="text-on-surface-variant text-sm max-w-sm">
                Connect your wallet to check in, track progress, and unlock exclusive merchant rewards.
              </p>
            </div>
            <AppKitButton />
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {/* Loyalty Card */}
            <div className="glass-panel p-8 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white text-xs font-bold font-mono">{address?.slice(0,2)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-on-surface">{address?.slice(0,6)}...{address?.slice(-4)}</p>
                      <p className="text-xs text-on-surface-variant">Loyalty Member</p>
                    </div>
                  </div>
                  <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Active
                  </span>
                </div>

                {/* Campaign Card */}
                <div className="bg-surface-variant/30 rounded-xl p-6 border border-outline-variant mb-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-display font-bold text-on-surface">Local Roasters</h3>
                      <p className="text-xs text-on-surface-variant mt-1">Free Coffee at {targetVisits} Visits</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-on-surface-variant font-semibold mb-2">
                      <span>{visits} Visits</span>
                      <span>{targetVisits} Visits</span>
                    </div>
                    <div className="w-full bg-surface-variant h-3 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${progress}%`,
                          background: `linear-gradient(90deg, #35825e, ${progress >= 100 ? '#c0921a' : '#4aad7a'})`,
                          boxShadow: '0 0 12px rgba(53, 130, 94, 0.4)',
                        }}
                      />
                    </div>
                    {progress >= 100 && (
                      <p className="text-center text-secondary font-semibold text-sm mt-4 flex items-center justify-center gap-1">
                        <Sparkles className="w-4 h-4" />
                        Reward Unlocked! Redeem at checkout.
                      </p>
                    )}
                  </div>
                </div>

                <button 
                  onClick={handleCustomerCheckIn}
                  disabled={visits >= targetVisits}
                  className="w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-primary-dark transition-colors text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {visits >= targetVisits ? 'Reward Unlocked!' : 'Simulate Check-in'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
