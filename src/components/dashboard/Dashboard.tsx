'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NftCard } from '@/components/NftCard';
import { Skeleton } from '@/components/ui/skeleton';

export function Dashboard() {
  const { address, isConnected } = useAccount();
  const [nfts, setNfts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch data ketika user terhubung
  useEffect(() => {
    if (isConnected && address) {
      fetchNfts();
    } else {
      setNfts([]); // Reset jika disconnect
    }
  }, [address, isConnected]);

  const fetchNfts = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/nfts', { address });
      setNfts(response.data.nfts);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 md:p-10">
      {/* Header */}
      <nav className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Web3 Dashboard</h1>
          <p className="text-gray-500">Your assets, visualized.</p>
        </div>
        <ConnectButton showBalance={true} />
      </nav>

      {/* Content Area */}
      {!isConnected ? (
        <div className="flex flex-col items-center justify-center h-[50vh] space-y-4">
          <div className="text-xl font-semibold text-gray-400">
            Please connect your wallet to view assets
          </div>
        </div>
      ) : (
        <section>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            Your Collectibles 
            <span className="text-sm font-normal bg-gray-200 px-2 py-1 rounded-full">{nfts.length}</span>
          </h2>

          {loading ? (
            // Loading State (Skeleton)
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <Skeleton className="h-[250px] w-full rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Success State
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {nfts.map((nft, idx) => (
                <NftCard key={`${nft.contract.address}-${nft.tokenId}-${idx}`} nft={nft} />
              ))}
            </div>
          )}

          {!loading && nfts.length === 0 && (
            <p className="text-center text-gray-500 mt-10">No NFTs found on this network.</p>
          )}
        </section>
      )}
    </main>
  );
}
