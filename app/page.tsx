'use client';

import { useState } from 'react';
import AppKitButton from '@/components/AppKitButton';
import { trackEvent } from '@/utils/analytics';
import { useAccount } from 'wagmi';

export default function Home() {
  const { isConnected, address } = useAccount();
  const [mode, setMode] = useState<'landing' | 'merchant' | 'customer'>('landing');

  // Merchant State
  const [campaignName, setCampaignName] = useState('Local Roasters');
  const [customerAddress, setCustomerAddress] = useState('');

  // Customer State
  const [visits, setVisits] = useState(7);
  const targetVisits = 10;

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

  const handleCustomerCheckIn = () => {
    trackEvent('customer_mock_check_in');
    if (visits < targetVisits) {
      setVisits(v => v + 1);
    }
  };

  if (mode === 'merchant') {
    return (
      <main className="pt-20 px-6 max-w-lg mx-auto w-full min-h-[80vh] flex flex-col relative z-10">
        <button onClick={() => setMode('landing')} className="text-on-surface-variant font-label-caps mb-8 self-start flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Back
        </button>
        
        <h1 className="font-display-md text-primary mb-8">Merchant <span className="text-secondary-fixed">Portal</span></h1>
        
        {!isConnected ? (
          <div className="flex justify-center my-8"><AppKitButton /></div>
        ) : (
          <div className="flex flex-col gap-8">
            <div className="glass-panel p-6 border-t-primary">
              <h2 className="font-headline-md mb-4 text-on-background">Active Campaign</h2>
              <input 
                className="w-full bg-transparent border-0 border-b border-white/20 text-on-background font-body-md px-0 py-2 focus:ring-0 focus:border-secondary-fixed mb-4" 
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
              />
              <button onClick={handleCreateCampaign} className="bg-primary text-on-primary px-4 py-2 font-label-caps">Update Name</button>
            </div>

            <div className="glass-panel p-6 border-t-secondary-fixed">
              <h2 className="font-headline-md mb-4 text-on-background">Log Customer Visit</h2>
              <div className="relative">
                <span className="material-symbols-outlined absolute right-0 top-2 text-on-surface-variant cursor-pointer">qr_code_scanner</span>
                <input 
                  className="w-full bg-transparent border-0 border-b border-white/20 text-on-background font-body-md px-0 py-2 focus:ring-0 focus:border-secondary-fixed mb-4 pr-8" 
                  placeholder="Customer Wallet Address"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                />
              </div>
              <button onClick={handleLogVisit} className="w-full bg-secondary-fixed text-on-secondary-fixed py-4 font-label-caps mt-2 hover:bg-secondary transition-colors">
                Log Visit
              </button>
            </div>
          </div>
        )}
      </main>
    );
  }

  if (mode === 'customer') {
    return (
      <main className="pt-20 px-6 max-w-lg mx-auto w-full min-h-[80vh] flex flex-col relative z-10">
        <button onClick={() => setMode('landing')} className="text-on-surface-variant font-label-caps mb-8 self-start flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Back
        </button>
        
        <h1 className="font-display-md text-primary mb-8">My <span className="text-secondary-fixed">Rewards</span></h1>
        
        {!isConnected ? (
          <div className="flex justify-center my-8"><AppKitButton /></div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="bg-surface-container w-full rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-outline-variant/15 relative overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-surface-bright rounded-full overflow-hidden border border-outline-variant">
                    <div className="w-full h-full bg-gradient-to-br from-primary to-secondary-fixed"></div>
                  </div>
                  <p className="font-bold text-sm text-white font-headline">{address?.slice(0,6)}...{address?.slice(-4)}</p>
                </div>
              </div>
              
              <div className="bg-surface rounded-xl p-5 border border-outline-variant/15 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h5 className="font-bold text-white font-headline">Local Roasters</h5>
                    <p className="text-xs text-on-surface-variant mt-1">Free Coffee at 10 Visits</p>
                  </div>
                  <div className="bg-surface-container-highest px-2 py-1 rounded text-xs font-bold text-primary-fixed">Active</div>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-on-surface-variant font-bold mb-2">
                    <span>{visits} Visits</span>
                    <span>{targetVisits} Visits</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-secondary-fixed h-full rounded-full shadow-[0_0_8px_rgba(107,253,167,0.5)] transition-all duration-500"
                      style={{ width: `${(visits / targetVisits) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button 
                  onClick={handleCustomerCheckIn}
                  disabled={visits >= targetVisits}
                  className="bg-surface-container-highest text-primary-fixed border border-primary-fixed/50 px-6 py-3 rounded-md text-sm font-label-caps hover:bg-surface-bright transition-colors disabled:opacity-50"
                >
                  {visits >= targetVisits ? 'Reward Unlocked!' : 'Simulate Check-in'}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    );
  }

  // Landing Mode
  return (
    <main className="pt-20 md:pt-28 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-fixed/10 rounded-full blur-3xl -z-10"></div>
      
      <h1 className="text-[3.5rem] leading-tight font-extrabold font-headline tracking-tight text-white mb-6">
        Loyalty on the <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed to-primary">Pulse of Celo</span>
      </h1>
      <p className="text-on-surface-variant font-body max-w-md leading-relaxed mb-12">
        A high-clarity tool for the modern merchant. Seamlessly set up on-chain reward programs and track customer milestones with verifiable progress.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center">
        <button 
          onClick={() => setMode('merchant')}
          className="flex-1 glass-panel p-8 border-t-primary group hover:border-t-primary-fixed transition-colors flex flex-col items-center"
        >
          <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform">storefront</span>
          <h3 className="font-headline-md text-white mb-2">I am a Merchant</h3>
          <p className="text-xs text-on-surface-variant">Create campaigns & log visits</p>
        </button>
        
        <button 
          onClick={() => setMode('customer')}
          className="flex-1 glass-panel p-8 border-t-secondary-fixed group hover:border-t-white transition-colors flex flex-col items-center"
        >
          <span className="material-symbols-outlined text-4xl text-secondary-fixed mb-4 group-hover:scale-110 transition-transform">loyalty</span>
          <h3 className="font-headline-md text-white mb-2">I am a Customer</h3>
          <p className="text-xs text-on-surface-variant">View rewards & check-in</p>
        </button>
      </div>

      <div className="mt-12">
         <AppKitButton />
      </div>
    </main>
  );
}
