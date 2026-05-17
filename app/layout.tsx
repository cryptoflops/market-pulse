import type { Metadata } from 'next';
import { DM_Sans, DM_Mono } from 'next/font/google';
import ClientWrapper from '@/components/ClientWrapper';
import { ThemeProvider } from '@/components/theme-provider';
import Image from 'next/image';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', weight: ['400', '500', '600', '700'] });
const dmMono = DM_Mono({ subsets: ['latin'], variable: '--font-dm-mono', weight: ['400', '500'] });

export const metadata: Metadata = {
  title: 'MarketPulse - On-Chain Loyalty for Celo Merchants',
  description: 'Create, manage, and verify on-chain customer loyalty programs on the Celo blockchain. Real-time analytics, verifiable rewards, and seamless Web3 integration for modern merchants.',
  other: {
    'talentapp:project_verification': '74a9c62d7beea532fc7794548425eaf3f18d0076d988cbfb290bc50ba6ae577b0bae046469b1358467e87e0e69a24bd24be2f63e295c74cf6a56cda583e408a8',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700&display=swap" rel="stylesheet" />
        <style>{`
          :root { --font-cabinet: 'Cabinet Grotesk', sans-serif; }
        `}</style>
      </head>
      <body className="font-body">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}