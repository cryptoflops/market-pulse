'use client';

import { useState } from 'react';
import AppKitButton from '@/components/AppKitButton';
import { trackEvent } from '@/utils/analytics';
import { useAccount } from 'wagmi';
import { ArrowLeft, QrCode, Store, Users, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function MerchantPage() {
  const { isConnected } = useAccount();
  const [campaignName, setCampaignName] = useState('Local Roasters');
  const [customerAddress, setCustomerAddress] = useState('');

  const handleCreateCampaign = () => {
    trackEvent('loyalty_campaign_created', { name: campaignName });
    alert('Campaign Created Successfully!');
  };

  const handleLogVisit = () => {
    if (!customerAddress) return;
    trackEvent('loyalty_visit_logged', { customer: customerAddress });
    alert(`Logged visit for ${customerAddress}`);
    setCustomerAddress('');
  };

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
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Store className="w-5 h-5 text-primary" />
          </div>
          <h1 className="font-display text-3xl font-extrabold text-on-surface tracking-tight">Merchant Portal</h1>
        </div>
        <p className="text-on-surface-variant mb-10 ml-[52px]">Manage your loyalty campaigns and log customer visits.</p>

        {!isConnected ? (
          <div className="flex flex-col items-center justify-center py-20 gap-6 text-center">
            <div className="w-20 h-20 rounded-full bg-surface-variant flex items-center justify-center">
              <Store className="w-10 h-10 text-on-surface-variant" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-on-surface mb-2">Connect to Get Started</h3>
              <p className="text-on-surface-variant text-sm max-w-sm">
                Connect your MiniPay or Web3 wallet to create campaigns and start tracking customer loyalty.
              </p>
            </div>
            <AppKitButton />
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {/* Active Campaign */}
            <section className="glass-panel p-8">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <h2 className="font-display text-lg font-bold text-on-surface">Active Campaign</h2>
              </div>
              <input 
                className="w-full bg-surface-variant/50 border border-outline-variant text-on-surface rounded-xl px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all mb-4" 
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
              />
              <button
                onClick={handleCreateCampaign}
                className="bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors text-sm"
              >
                Update Campaign
              </button>
            </section>

            {/* Log Visit */}
            <section className="glass-panel p-8">
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-5 h-5 text-secondary" />
                <h2 className="font-display text-lg font-bold text-on-surface">Log Customer Visit</h2>
              </div>
              <div className="relative mb-4">
                <input 
                  className="w-full bg-surface-variant/50 border border-outline-variant text-on-surface rounded-xl px-4 py-3 pr-12 font-body focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all" 
                  placeholder="Customer Wallet Address"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                />
                <QrCode className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
              </div>
              <button
                onClick={handleLogVisit}
                className="w-full bg-secondary text-white font-semibold py-4 rounded-xl hover:bg-secondary-dark transition-colors text-sm"
              >
                Log Visit
              </button>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
