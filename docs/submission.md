# MarketPulse -- Proof-of-Ship Submission

## One-Liner
On-chain loyalty for Celo merchants -- create campaigns, reward visits, verify points, all from MiniPay.

## Problem Statement
Small merchants in MiniPay markets (Africa, Southeast Asia, Latin America) have no affordable way to run customer loyalty programs. Paper punch cards get lost. Centralized loyalty platforms charge monthly fees and require merchant infrastructure. Meanwhile, 10M+ MiniPay users carry a blockchain wallet in their pocket with no way to earn or track merchant loyalty on-chain.

### Competitive Landscape
| App | Strength | Weakness |
|-----|----------|----------|
| **Square Loyalty** | Integrated POS | Expensive, requires hardware, no crypto |
| **Stamped.io** | Flexible rewards | Web-only, no mobile wallet, centralized |
| **Poap** | On-chain proof | Event-focused, not merchant loyalty |
| **MarketPulse** | MiniPay native, free for merchants, verifiable on-chain, dual-sided | New, needs merchant onboarding |

## Solution
MarketPulse provides a zero-cost loyalty system accessible via MiniPay:
- **Merchant creates campaign** -- defines name + points per visit, all on-chain
- **Customer visits** -- merchant logs the visit from their MiniPay, customer earns points
- **Points are on-chain** -- verifiable, transparent, no central server
- **Dual-sided** -- both merchant and customer use the same MiniPay app

The natural dual-sided loop generates high transaction volume since every customer visit produces an on-chain transaction.

## Architecture
See [architecture.md](./architecture.md) for full system diagram, sequence diagram, and tech stack.

**Key frameworks:**
- Next.js 16, React 19, TypeScript
- Wagmi 2 + Viem 2
- Framer Motion (animations)
- Reown AppKit
- Tailwind CSS 3
- Cloudflare Pages

## Smart Contract
- **MarketPulseLoyalty** deployed on Celo Mainnet
- Address: `0x2FFE8a86de0B2Cee7e053123CE60E991B273991d`
- [View on CeloScan](https://celoscan.io/address/0x2FFE8a86de0B2Cee7e053123CE60E991B273991d)

## Milestones

| Milestone | Status | PR/Evidence |
|-----------|--------|-------------|
| Loyalty contract deployed to Celo Mainnet | Done | Foundry deploy broadcast |
| MiniPay wallet detection + auto-connect | Done | `useMiniPay` hook |
| Stablecoin balance display (cUSD/cEUR) | Done | `MiniPayBar` component |
| Celo chain forcing in MiniPay context | Done | `useMiniPay` chain switch |
| Campaign creation flow | Done | `useCreateCampaign` hook + merchant UI |
| Visit logging flow | Done | `useLogVisit` hook + merchant UI |
| Customer points view | Done | `useUserPoints` hook + customer UI |
| NPM package published | Done | `@cryptoflops/market-pulse` |

## Slide Deck
See [deck.md](./deck.md) -- 10 slides covering problem, dual-sided model, merchant/customer flows, contract, MiniPay integration, competitive landscape, milestones.
