import AppKitButton from '@/components/AppKitButton';

export default function Home() {
  return (
    <main className="pt-20 md:pt-28 px-6 md:px-12 max-w-7xl mx-auto">
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-16 md:py-24">
        <div className="flex-1 space-y-8 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-fixed/10 rounded-full blur-3xl -z-10"></div>
          <div className="inline-flex items-center gap-2 bg-surface-container-high px-3 py-1.5 rounded-full border border-outline-variant/30">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
            <span className="text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-on-surface-variant font-label">Celo Mainnet Active</span>
          </div>
          <h1 className="text-[3.5rem] leading-tight font-extrabold font-headline tracking-tight text-white">
            Loyalty on the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed to-primary">Pulse of Celo</span>
          </h1>
          <p className="text-[0.875rem] md:text-base text-on-surface-variant font-body max-w-md leading-relaxed">
            A high-clarity tool for the modern merchant. Seamlessly set up on-chain reward programs and track customer milestones with transparent, verifiable progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-[#FCFF52] text-[#1c1d00] font-bold px-8 py-4 rounded-md shadow-[0_12px_40px_rgba(252,255,82,0.15)] hover:opacity-90 transition-opacity text-center">
              Launch App
            </button>
            <button className="bg-surface-container-highest text-on-surface font-bold px-8 py-4 rounded-md hover:bg-surface-bright transition-colors text-center border border-outline-variant/15">
              Read the Docs
            </button>
          </div>
          <div className="pt-4">
            <AppKitButton />
          </div>
        </div>
        <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center bg-surface-container-lowest rounded-2xl md:rounded-[2rem] border border-outline-variant/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <span className="material-symbols-outlined text-[200px] text-surface-bright">storefront</span>
          <div className="absolute -bottom-6 -left-6 md:-left-12 bg-surface-container/90 backdrop-blur-xl p-6 rounded-xl border border-outline-variant/15 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-on-surface-variant font-label mb-2">Total Value Locked</p>
            <p className="text-2xl font-bold font-headline text-white">$4.2M+</p>
          </div>
        </div>
      </section>

      <section className="py-16" id="merchants">
        <h2 className="text-3xl font-bold font-headline text-white mb-12 text-center md:text-left">Built for Merchants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container-low to-surface-container-highest z-0"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="material-symbols-outlined text-[#FCFF52] text-4xl mb-4">storefront</span>
                <h3 className="text-2xl font-bold font-headline text-white mb-2">Frictionless Setup</h3>
                <p className="text-on-surface-variant text-sm max-w-sm">Deploy your loyalty smart contract in seconds. No coding required. Just set your rules and start logging visits.</p>
              </div>
              <div className="mt-8 flex items-center justify-between bg-surface p-4 rounded-lg border border-outline-variant/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary-fixed text-sm">qr_code_scanner</span>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant font-label uppercase tracking-widest">Log Visit</p>
                    <p className="text-sm font-bold text-white">Scan Customer Wallet</p>
                  </div>
                </div>
                <button className="bg-surface-container-highest text-primary-fixed px-3 py-1.5 rounded-md text-xs font-bold hover:bg-surface-bright transition-colors">Test Flow</button>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/15 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-secondary-fixed text-3xl mb-4">analytics</span>
              <h3 className="text-xl font-bold font-headline text-white mb-2">Real-time Data</h3>
              <p className="text-on-surface-variant text-sm">Track customer retention and reward distribution on an immutable ledger.</p>
            </div>
            <div className="mt-6">
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-on-surface-variant font-label mb-2">Retention Rate</p>
              <p className="text-3xl font-bold font-headline text-secondary-fixed">84%</p>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/15 flex flex-col justify-between md:col-start-3 md:row-start-1 h-full hidden md:flex">
            <div>
              <span className="material-symbols-outlined text-primary text-3xl mb-4">verified</span>
              <h3 className="text-xl font-bold font-headline text-white mb-2">Verifiable</h3>
              <p className="text-on-surface-variant text-sm">Every scan is cryptographically secured.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" id="customers">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold font-headline text-white">Transparent Progress</h2>
            <p className="text-on-surface-variant text-sm md:text-base max-w-md leading-relaxed">
              Customers hold their loyalty history in their own wallet. No more lost punch cards. They can watch their progress bar fill up as they get closer to their next reward.
            </p>
            <ul className="space-y-4 mt-8">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary-fixed mt-1">check_circle</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Self-Custodial</h4>
                  <p className="text-xs text-on-surface-variant mt-1">Users own their data and rewards.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary-fixed mt-1">check_circle</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Instant Sync</h4>
                  <p className="text-xs text-on-surface-variant mt-1">Balances update immediately upon scan.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-1 w-full flex justify-center">
            <div className="bg-surface-container w-full max-w-sm rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-outline-variant/15 relative overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-surface-bright rounded-full"></div>
                  <p className="font-bold text-sm text-white font-headline">0x...4A2f</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
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
                    <span>7 Visits</span>
                    <span>10 Visits</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                    <div className="bg-secondary-fixed h-full w-[70%] rounded-full shadow-[0_0_8px_rgba(107,253,167,0.5)]"></div>
                  </div>
                </div>
              </div>
              <div className="bg-surface rounded-xl p-4 border border-outline-variant/15 flex justify-between items-center opacity-70">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-sm">local_cafe</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white">Visit Logged</p>
                    <p className="text-xs text-on-surface-variant">Yesterday</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-secondary-fixed">+1</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
