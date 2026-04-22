'use client';

import { useReadContract, useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { LOYALTY_ADDRESS, MarketPulseLoyaltyABI, CELO_SEPOLIA_CHAIN_ID } from '@/contracts';

// --- Read Hooks ---

export function useCampaignDetails(campaignId: bigint) {
  return useReadContract({
    address: LOYALTY_ADDRESS,
    abi: MarketPulseLoyaltyABI,
    functionName: 'campaigns',
    args: [campaignId],
    chainId: CELO_SEPOLIA_CHAIN_ID,
  });
}

export function useCampaignCounter() {
  return useReadContract({
    address: LOYALTY_ADDRESS,
    abi: MarketPulseLoyaltyABI,
    functionName: 'campaignCounter',
    chainId: CELO_SEPOLIA_CHAIN_ID,
  });
}

export function useUserPoints(campaignId: bigint) {
  const { address } = useAccount();

  return useReadContract({
    address: LOYALTY_ADDRESS,
    abi: MarketPulseLoyaltyABI,
    functionName: 'userPoints',
    args: address ? [campaignId, address] : undefined,
    chainId: CELO_SEPOLIA_CHAIN_ID,
    query: { enabled: !!address },
  });
}

// --- Write Hooks ---

export function useCreateCampaign() {
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const createCampaign = (name: string, pointsPerVisit: bigint) => {
    writeContract({
      address: LOYALTY_ADDRESS,
      abi: MarketPulseLoyaltyABI,
      functionName: 'createCampaign',
      args: [name, pointsPerVisit],
      chainId: CELO_SEPOLIA_CHAIN_ID,
    });
  };

  return { createCampaign, hash, isPending, isConfirming, isSuccess, error };
}

export function useLogVisit() {
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const logVisit = (campaignId: bigint, customer: `0x${string}`) => {
    writeContract({
      address: LOYALTY_ADDRESS,
      abi: MarketPulseLoyaltyABI,
      functionName: 'logVisit',
      args: [campaignId, customer],
      chainId: CELO_SEPOLIA_CHAIN_ID,
    });
  };

  return { logVisit, hash, isPending, isConfirming, isSuccess, error };
}
