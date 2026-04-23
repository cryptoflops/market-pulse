import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { cookieStorage, createStorage } from 'wagmi';
import type { Chain } from 'viem';

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error('Project ID is not defined');
}

// Define chains inline to avoid TypeScript module resolution issues
const celo: Chain = {
  id: 42220,
  name: 'Celo',
  nativeCurrency: { name: 'CELO', symbol: 'CELO', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://forno.celo.org'] },
  },
  blockExplorers: {
    default: { name: 'Celo Explorer', url: 'https://explorer.celo.org/mainnet' },
  },
};

const celoSepolia: Chain = {
  id: 11142220,
  name: 'Celo Sepolia Testnet',
  nativeCurrency: { name: 'CELO', symbol: 'CELO', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://forno.celo-sepolia.celo-testnet.org'] },
  },
  blockExplorers: {
    default: { name: 'Celo Sepolia Explorer', url: 'https://celo-sepolia.blockscout.com' },
  },
  testnet: true,
};

export const networks = [celo, celoSepolia] as const;

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }) as any,
  ssr: true,
  networks: [...networks],
  projectId,
});

export const config = wagmiAdapter.wagmiConfig;