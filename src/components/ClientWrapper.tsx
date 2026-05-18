'use client';

import { useEffect, useState } from 'react';
import ContextProvider from '@/context';
import MiniPayBar from '@/components/MiniPayBar';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <ContextProvider>
      <MiniPayBar />
      {children}
    </ContextProvider>
  );
}