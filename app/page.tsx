'use client';

import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';
import Image from 'next/image';
import {
  Store, Gift, ArrowRight, BarChart3, Users, Award,
  Shield, Zap, Eye, CheckCircle2, Activity,
  ChevronRight, Wallet, ExternalLink
} from 'lucide-react';

/* ─── Simulated Transaction Feed ─── */
const TX_FEED = [
  { label: 'Campaign Created', addr: '0x4a2f...c901', amount: '— Local Roasters', color: 'text-primary' },
  { label: 'Visit Logged', addr: '0x8b12...f3e2', amount: '+1 check-in', color: 'text-primary' },
  { label: 'Reward Redeemed', addr: '0xd9c4...71a8', amount: 'Free Coffee ☕', color: 'text-secondary' },
  { label: 'Campaign Created', addr: '0x1fe3...9a0b', amount: '— Nairobi Eats', color: 'text-primary' },
  { label: 'Visit Logged', addr: '0x6a88...2de1', amount: '+1 check-in', color: 'text-primary' },
  { label: 'Reward Redeemed', addr: '0xbc50...44f9', amount: '15% Discount', color: 'text-secondary' },
];

function TransactionFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % TX_FEED.length);
        setIsVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      {[0, 1, 2].map(offset => {
        const idx = (currentIndex + offset) % TX_FEED.length;
        const tx = TX_FEED[idx];
        return (
          <div
            key={`${idx}-${currentIndex}`}
            className={`flex items-center justify-between p-3 rounded-xl bg-surface-variant/40 border border-outline-variant transition-all duration-500 ${
              offset === 0 ? (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2') : 'opacity-60'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${tx.color === 'text-secondary' ? 'bg-secondary' : 'bg-primary'} animate-pulse`} />
              <div>
                <p className={`text-xs font-semibold ${tx.color}`}>{tx.label}</p>
                <p className="text-[10px] text-on-surface-variant font-mono">{tx.addr}</p>
              </div>
            </div>
            <span className="text-xs text-on-surface-variant font-medium">{tx.amount}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Main Landing Page ─── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      {/* ─── Skip Link ─── */}
      <a href="#hero" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        Skip to content
      </a>

      {/* ═══ Sticky Navigation ═══ */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl shadow-lg border-b border-outline-variant'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="MarketPulse Logo" width={32} height={32} className="rounded-lg object-contain" />
            <span className="font-display text-lg font-extrabold tracking-tight text-on-surface">MarketPulse</span>
          </div>
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <a href="#hero" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded">Home</a>
            <a href="#roles" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded">Get Started</a>
            <a href="#trust" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded">On-Chain</a>
            <a href="#connect" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded">Connect</a>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/merchant"
              className="hidden md:inline-flex bg-primary text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-primary-dark transition-colors shadow-md shadow-primary/20"
            >
              Launch App
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* ═══ HERO SECTION ═══ */}
        <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left - Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-semibold mb-8">
                <Shield className="w-3.5 h-3.5" />
                Built on Celo Mainnet
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-on-surface leading-tight tracking-tight mb-6">
                Loyalty Programs,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#4aad7a]">
                  Verified On-Chain
                </span>
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg mb-10">
                Create verifiable loyalty campaigns, log customer visits, and distribute rewards, all transparently recorded on Celo. No middlemen, no expired points, no trust issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/merchant"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl text-sm hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 group"
                >
                  Start as Merchant
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/customer"
                  className="inline-flex items-center justify-center gap-2 bg-surface-variant/50 text-on-surface font-semibold px-8 py-4 rounded-xl text-sm border border-outline-variant hover:bg-surface-variant transition-colors"
                >
                  View Rewards
                </Link>
              </div>
            </div>

            {/* Right - Dashboard Mockup */}
            <div className="hidden lg:block">
              <div className="glass-panel p-6 relative">
                {/* KPI Cards */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Total Visits', value: '2,847', icon: Users, change: '+12%' },
                    { label: 'Active Users', value: '438', icon: Activity, change: '+8%' },
                    { label: 'Redeemed', value: '156', icon: Award, change: '+24%' },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-surface-variant/40 border border-outline-variant rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <kpi.icon className="w-4 h-4 text-on-surface-variant" />
                        <span className="text-[10px] text-on-surface-variant font-medium uppercase tracking-wider">{kpi.label}</span>
                      </div>
                      <p className="font-display text-xl font-bold text-on-surface font-mono">{kpi.value}</p>
                      <p className="text-xs text-primary font-semibold mt-1">{kpi.change}</p>
                    </div>
                  ))}
                </div>

                {/* Live Feed */}
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs text-on-surface-variant font-semibold uppercase tracking-wider">Live Activity</h4>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-[10px] text-on-surface-variant">Live</span>
                    </div>
                  </div>
                  <TransactionFeed />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ROLE SELECTOR ═══ */}
        <section id="roles" className="py-24 bg-surface-variant/20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
                Choose Your Role
              </h2>
              <p className="text-on-surface-variant max-w-lg mx-auto">
                Whether you run a business or love collecting rewards, MarketPulse has you covered.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Merchant Card */}
              <Link
                href="/merchant"
                role="button"
                tabIndex={0}
                className="glass-panel p-8 group hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Launch Merchant Portal"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Store className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-on-surface mb-3">I am a Merchant</h3>
                <ul className="space-y-2.5 mb-6">
                  {['Create loyalty campaigns', 'Log customer visits via QR', 'Track redemption analytics'].map(feat => (
                    <li key={feat} className="flex items-center gap-2.5 text-sm text-on-surface-variant">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Launch Portal <ChevronRight className="w-4 h-4" />
                </div>
              </Link>

              {/* Customer Card */}
              <Link
                href="/customer"
                role="button"
                tabIndex={0}
                className="glass-panel p-8 group hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                aria-label="View Customer Rewards"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Gift className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-on-surface mb-3">I am a Customer</h3>
                <ul className="space-y-2.5 mb-6">
                  {['Check in at participating stores', 'Track progress to rewards', 'Redeem on-chain perks'].map(feat => (
                    <li key={feat} className="flex items-center gap-2.5 text-sm text-on-surface-variant">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-secondary font-semibold text-sm group-hover:gap-3 transition-all">
                  View Rewards <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ ON-CHAIN TRUST ═══ */}
        <section id="trust" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
                Verifiable. Transparent. On-Chain.
              </h2>
              <p className="text-on-surface-variant max-w-lg mx-auto">
                Every campaign, every visit, every redemption is recorded immutably on the Celo blockchain.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Feature Cards */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: 'Immutable Records', desc: 'All loyalty data is permanently stored on-chain. No vendor can retroactively alter or expire your points.' },
                  { icon: Eye, title: 'Full Transparency', desc: 'Customers can independently verify their visit count and reward eligibility on CeloScan.' },
                  { icon: Zap, title: 'Instant Settlements', desc: 'Rewards are distributed directly to customer wallets on Celo with sub-second finality and near-zero gas.' },
                  { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Merchants get live dashboards showing visit frequency, peak hours, and redemption conversion rates.' },
                ].map((feat) => (
                  <div key={feat.title} className="glass-panel p-6 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <feat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-on-surface mb-2">{feat.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>

              {/* Live Transaction Feed */}
              <div className="lg:col-span-2">
                <div className="glass-panel p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-display font-bold text-on-surface text-sm">Celo Explorer Feed</h4>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-[10px] text-on-surface-variant font-mono">LIVE</span>
                    </div>
                  </div>
                  <TransactionFeed />
                  <a
                    href="https://celoscan.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 text-xs text-on-surface-variant hover:text-primary transition-colors py-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View on CeloScan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WALLET CONNECT ═══ */}
        <section id="connect" className="py-24 bg-surface-variant/20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
                Connect Your Way
              </h2>
              <p className="text-on-surface-variant max-w-lg mx-auto">
                MarketPulse supports the wallets you already use. Connect in one tap.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { name: 'MetaMask', desc: 'Browser extension or mobile app', icon: '🦊' },
                { name: 'WalletConnect', desc: 'Scan QR from any supported wallet', icon: '🔗' },
                { name: 'Valora', desc: 'Celo-native mobile wallet', icon: '💚' },
              ].map((wallet) => (
                <button
                  key={wallet.name}
                  className="glass-panel p-6 flex flex-col items-center text-center hover:border-primary/40 hover:shadow-xl transition-all duration-300 cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label={`Connect with ${wallet.name}`}
                >
                  <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{wallet.icon}</span>
                  <h3 className="font-display font-bold text-on-surface mb-1">{wallet.name}</h3>
                  <p className="text-xs text-on-surface-variant">{wallet.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HOW IT WORKS ═══ */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
                How It Works
              </h2>
              <p className="text-on-surface-variant max-w-lg mx-auto">
                From creation to redemption in three simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { step: '01', title: 'Create a Campaign', desc: 'Merchants define reward rules and thresholds. The campaign contract deploys on Celo Mainnet.', icon: Store },
                { step: '02', title: 'Customers Check In', desc: 'Each visit is logged on-chain via wallet scan. Progress is tracked transparently and immutably.', icon: Users },
                { step: '03', title: 'Redeem Rewards', desc: 'When the threshold is reached, rewards unlock automatically. No codes, no expiry, no hassle.', icon: Award },
              ].map((item) => (
                <div key={item.step} className="relative text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 md:right-auto md:left-[calc(50%+24px)] md:-top-2 bg-primary text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center font-mono">
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-on-surface mb-2">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-outline-variant py-12 bg-surface-variant/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="MarketPulse" width={24} height={24} className="rounded-md object-contain" />
              <span className="font-display font-bold text-on-surface text-sm">MarketPulse</span>
            </div>
            <div className="flex gap-6">
              <a href="https://celoscan.io" target="_blank" rel="noopener noreferrer" className="text-xs text-on-surface-variant hover:text-primary transition-colors">Celo Explorer</a>
              <a href="#" className="text-xs text-on-surface-variant hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-xs text-on-surface-variant hover:text-primary transition-colors">Terms</a>
            </div>
            <p className="text-xs text-on-surface-variant">&copy; 2024 MarketPulse Ledger</p>
          </div>
        </div>
      </footer>
    </>
  );
}
