'use client';

import React from 'react';
import { useAccount } from 'wagmi';

export const Sidebar = () => {
  const { address, isConnected } = useAccount();

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-border-dark bg-[#121118] h-full flex-shrink-0">
      <div className="p-6">
        <div className="flex flex-col">
          <h1 className="text-white text-xl font-bold tracking-tight">
            Web3Dash
          </h1>
          <p className="text-text-muted text-xs font-normal mt-1">v1.0.2</p>
        </div>
      </div>
      <nav className="flex-1 px-4 flex flex-col gap-2 overflow-y-auto">
        <a
          className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary/10 border border-primary/20 group transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-primary filled">
            dashboard
          </span>
          <p className="text-white text-sm font-medium">Overview</p>
        </a>
        <a
          className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-card-dark text-text-muted hover:text-white transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined">
            account_balance_wallet
          </span>
          <p className="text-sm font-medium">Wallet</p>
        </a>
        <a
          className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-card-dark text-text-muted hover:text-white transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined">swap_horiz</span>
          <p className="text-sm font-medium">Swap</p>
        </a>
        <a
          className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-card-dark text-text-muted hover:text-white transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined">image</span>
          <p className="text-sm font-medium">NFTs</p>
        </a>
        <a
          className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-card-dark text-text-muted hover:text-white transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined">settings</span>
          <p className="text-sm font-medium">Settings</p>
        </a>
      </nav>
      {isConnected && address ? (
        <div className="p-4 border-t border-border-dark">
          <div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-card-dark">
            <div className="size-8 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-xs font-bold text-white">
              {address.substring(0, 2)}
            </div>
            <div className="flex flex-col overflow-hidden">
              <p className="text-white text-sm font-medium truncate">User</p>
              <p className="text-text-muted text-xs truncate">{`${address.slice(0, 6)}...${address.slice(-4)}`}</p>
            </div>
          </div>
        </div>
      ) : (
          <div className="p-4 border-t border-border-dark">
              <p className="text-text-muted text-xs text-center">Wallet not connected</p>
          </div>
      )}
    </aside>
  );
};
