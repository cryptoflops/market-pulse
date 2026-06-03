# MarketPulse

<p align="center">
  <img src="./public/logo.png" height="120" alt="MarketPulse Logo" />
</p>

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

## Local Development & MiniPay Testing
1. Clone the repository.
2. Run `npm install`
3. Run `npm run dev`

### Testing in MiniPay (Developer Mode)
To test this application natively inside the Opera MiniPay wallet:
1. Expose your local dev server using ngrok: `ngrok http 3000`
2. Open Opera Mini on your Android device and navigate to MiniPay.
3. Tap the settings icon and enable "Developer Mode".
4. Enter your `ngrok` URL in the test app input field.
5. The application will implicitly auto-connect to the MiniPay injected provider without showing the "Connect Wallet" CTA.

## Proof-of-Ship Analytics
This repository implements on-chain metrics and user event tracking (mocked via `src/utils/analytics.ts` for this submission scope) to fulfill the Celo Proof-of-Ship requirements. Logged events include `loyalty_campaign_created`, `loyalty_visit_logged`, and `customer_mock_check_in`.

## License
MIT
