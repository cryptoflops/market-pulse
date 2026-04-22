# MarketPulse

MarketPulse is a merchant loyalty application for Celo MiniPay. It enables merchants to set up loyalty campaigns and reward repeat customers with points recorded on the blockchain.

## Features
- A portal for merchants to create loyalty programs and set reward rates.
- Tracking for customer visits and points on the Celo network.
- Simple interactions suitable for users of the MiniPay mobile wallet.
- Direct progress tracking for customers to see their milestone status.

## Live on Celo Mainnet
- Loyalty Contract: `0xc3FC22D77C77A745379A5CA7141BA50D25c93Ab1`
- cUSD Token: `0x765DE816845861e75A25fCA122bb6898B8B1282a`

## Developer SDK (NPM)
The MarketPulse SDK is available to add loyalty logic to other marketplaces or applications.

```bash
npm install @cryptoflops/market-pulse
```

### Usage
```typescript
import { useMarketPulse } from '@cryptoflops/market-pulse';

const { logVisit, campaigns, userPoints } = useMarketPulse();
```

## Local Development
1. Clone the repository.
2. Run `npm install`
3. Run `npm run dev`

## License
MIT
