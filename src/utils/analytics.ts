'use client';

/**
 * Mock Analytics implementation for Proof-of-Ship requirements.
 * In production, replace with Vercel Analytics, PostHog, etc.
 */

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    console.log(`[Analytics] ${eventName}`, properties || {});
    
    // Example: Dispatch a custom event to window so a global listener could capture it
    const event = new CustomEvent('analytics_event', {
      detail: { name: eventName, properties, timestamp: new Date().toISOString() }
    });
    window.dispatchEvent(event);
  }
};
