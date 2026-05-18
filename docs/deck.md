# MarketPulse Slide Deck

> 10 slides for Proof-of-Ship submission

---

## Slide 1: Title

**MarketPulse**
On-chain loyalty for Celo merchants.

Create campaigns. Reward visits. Verify points. All from MiniPay.

---

## Slide 2: Problem

**Small merchants can't afford loyalty programs.**

- Paper punch cards get lost, can't be verified
- Centralized loyalty platforms (Square, Stamped.io) charge monthly fees
- No solution exists for the 10M+ MiniPay users in emerging markets
- Merchants need something free, mobile-first, and trustworthy

---

## Slide 3: Solution

**MarketPulse -- free, on-chain loyalty via MiniPay.**

- Merchant creates a campaign (name + points per visit)
- Customer visits, merchant logs it from MiniPay
- Points accumulate on-chain -- transparent and verifiable
- Both merchant and customer use the same MiniPay app
- Zero cost for merchants. No hardware required.

---

## Slide 4: Dual-Sided Loop

```
Merchant                          Customer
   │                                 │
   │  1. createCampaign()            │
   │──────────────▶ Contract         │
   │                                 │
   │  2. Customer visits store       │
   │◀────────────────────────────────│
   │                                 │
   │  3. logVisit(customer)          │
   │──────────────▶ Contract ───────▶│ Points += N
   │                                 │
   │                 4. checkPoints() │
   │               Contract ◀────────│
   │                                 │
```

Every visit = on-chain transaction. Natural tx volume signal.

---

## Slide 5: Architecture

```
┌─────────────┐     ┌───────────────┐     ┌──────────────┐
│  MiniPay    │     │  Next.js 16   │     │ Celo Mainnet │
│  WebView    │────▶│  React 19     │────▶│ Chain 42220  │
│             │     │  Wagmi + Viem │     │              │
│  Merchant   │     │  Framer Motion│     │ MarketPulse  │
│  or Customer│◀────│  useMiniPay   │◀────│ Loyalty.sol  │
└─────────────┘     └───────────────┘     └──────────────┘
```

- Dual-sided app: merchant + customer views
- Premium animations via Framer Motion (unique among Celo apps)
- Real-time campaign analytics dashboard

---

## Slide 6: Smart Contract

**MarketPulseLoyalty** -- deployed on Celo Mainnet

Address: `0x2FFE8a86de0B2Cee7e053123CE60E991B273991d`

| Function | Purpose |
|----------|---------|
| `createCampaign(name, ptsPerVisit)` | Merchant creates program |
| `logVisit(campaignId, customer)` | Award points on visit |
| `campaigns(id)` | Read campaign details |
| `userPoints(campaignId, addr)` | Read customer points |

---

## Slide 7: MiniPay Integration

All 6 checklist items covered:

- [x] MiniPay wallet detection via `window.ethereum.isMiniPay`
- [x] Auto-connect using injected connector
- [x] Celo chain enforcement (`switchChain` on mismatch)
- [x] Stablecoin balance display (cUSD + cEUR)
- [x] Loading state for async provider detection
- [x] Mobile-first responsive design

---

## Slide 8: Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS 3 |
| Animation | Framer Motion 12 |
| Web3 | Wagmi 2.19 + Viem 2.39 |
| Wallet | Reown AppKit 1.8 |
| Contract | Solidity 0.8.19 (Foundry) |
| Hosting | Cloudflare Pages |
| Package | `@cryptoflops/market-pulse` on NPM |

---

## Slide 9: Competitive Landscape

| | MarketPulse | Square Loyalty | Stamped.io | POAP |
|---|-------------|---------------|------------|------|
| Free for merchants | Yes | $45+/mo | $23+/mo | Free |
| Mobile wallet native | MiniPay | POS required | Web only | No |
| On-chain verification | Yes | No | No | Yes |
| Dual-sided (merchant + customer) | Yes | Yes | No | No |
| Stablecoin integration | cUSD | No | No | No |

---

## Slide 10: Milestones & Status

| Milestone | Status |
|-----------|--------|
| Loyalty contract on Celo Mainnet | Done |
| MiniPay hook (all 6 items) | Done |
| Stablecoin balance display | Done |
| Campaign creation flow | Done |
| Visit logging flow | Done |
| Customer points view | Done |
| Architecture docs | Done |
| Competitive analysis | Done |
| NPM package published | Done |
| Slide deck | Done |

**Live contract**: [CeloScan](https://celoscan.io/address/0x2FFE8a86de0B2Cee7e053123CE60E991B273991d)
