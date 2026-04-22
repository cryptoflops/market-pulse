import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import ClientWrapper from '@/components/ClientWrapper';
import Link from 'next/link';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta-sans' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'MarketPulse Landing Page',
  description: 'Loyalty on the Pulse of Celo',
  other: {
    'talentapp:project_verification': '2a8f74653e33a535639514d4b4b623692c63085536770b7a9688392ff64bd776eef2d6c868751f3b7f7bf9a5dcc3f2b5b4313d5acba0e40a2e049dd3a8e341e5',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-surface text-on-surface min-h-screen pb-24 md:pb-0 overflow-x-hidden antialiased">
        
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-[#131413]/80 backdrop-blur-lg shadow-[0_12px_40px_rgba(0,0,0,0.4)] md:hidden">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-white text-2xl">storefront</span>
            <span className="text-lg font-black text-white tracking-widest uppercase font-headline">MarketPulse</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-bold text-[#FCFF52] font-headline tracking-tight hover:opacity-80 transition-opacity cursor-pointer">Mainnet</span>
          </div>
        </header>

        <header className="hidden md:flex fixed top-0 left-0 w-full z-50 justify-between items-center px-10 h-20 bg-surface/90 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-white text-3xl">storefront</span>
            <span className="text-2xl font-black text-white tracking-widest uppercase font-headline">MarketPulse</span>
          </div>
          <nav className="flex gap-8">
            <Link className="text-primary-fixed font-bold text-sm uppercase tracking-wider font-headline" href="#">Home</Link>
            <Link className="text-zinc-500 hover:text-white font-bold text-sm uppercase tracking-wider font-headline transition-colors" href="#merchants">For Merchants</Link>
            <Link className="text-zinc-500 hover:text-white font-bold text-sm uppercase tracking-wider font-headline transition-colors" href="#customers">For Customers</Link>
          </nav>
          <div>
            <button className="bg-[#FCFF52] text-[#1c1d00] font-bold px-8 py-4 rounded-md shadow-[0_12px_40px_rgba(252,255,82,0.15)] hover:opacity-90 transition-opacity text-center">Launch App</button>
          </div>
        </header>

        <ClientWrapper>{children}</ClientWrapper>

        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-[#1f201f]/90 backdrop-blur-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.5)] z-50 rounded-t-3xl md:hidden">
          <Link className="flex flex-col items-center justify-center bg-[#FCFF52] text-[#121312] rounded-xl px-4 py-2 transition-all duration-300 scale-90 active:duration-150" href="#">
            <span className="material-symbols-outlined fill">grid_view</span>
            <span className="font-headline text-[10px] font-bold uppercase tracking-[0.05em] mt-1 text-[#121312]">Home</span>
          </Link>
          <Link className="flex flex-col items-center justify-center text-zinc-400 py-2 hover:text-white scale-90 active:duration-150" href="#merchants">
            <span className="material-symbols-outlined">info</span>
            <span className="font-headline text-[10px] font-bold uppercase tracking-[0.05em] mt-1 text-zinc-400 font-black">How</span>
          </Link>
          <Link className="flex flex-col items-center justify-center text-zinc-400 py-2 hover:text-white scale-90 active:duration-150" href="#customers">
            <span className="material-symbols-outlined">history_edu</span>
            <span className="font-headline text-[10px] font-bold uppercase tracking-[0.05em] mt-1 text-zinc-400 font-black">Log</span>
          </Link>
        </nav>

        <footer className="w-full pb-32 pt-12 border-t border-white/5 flex flex-col items-center space-y-4 px-8 bg-[#131413] md:pb-12 mt-12">
          <div className="flex gap-6 mb-2">
            <Link className="font-body text-xs text-zinc-600 hover:text-white transition-colors opacity-100" href="#">Privacy</Link>
            <Link className="font-body text-xs text-zinc-600 hover:text-white transition-colors opacity-100" href="#">Terms</Link>
            <Link className="font-body text-xs text-zinc-600 hover:text-white transition-colors opacity-100" href="#">Celo Explorer</Link>
          </div>
          <p className="font-body text-xs text-zinc-500 font-bold text-zinc-300">© 2024 MarketPulse Ledger</p>
        </footer>
      </body>
    </html>
  );
}