'use client';

import React from 'react';
import { WalletButton } from './WalletButton';

export const Header = () => {
  return (
    <header className="flex items-center justify-between h-16 px-8 border-b border-border-dark bg-[#121118]/90 backdrop-blur-md sticky top-0 z-20">
      <div className="flex items-center gap-4 lg:gap-8 flex-1">
        <button className="lg:hidden text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h2 className="text-white text-lg font-bold hidden md:block">
          Dashboard
        </h2>
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-text-muted group-focus-within:text-primary transition-colors">
                search
              </span>
            </div>
            <input
              className="block w-full pl-10 pr-3 py-2 border-none rounded-lg leading-5 bg-card-dark text-white placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm h-10 transition-shadow"
              placeholder="Search tokens, wallets, NFTs..."
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-3">
             <button className="flex items-center justify-center size-10 rounded-lg bg-card-dark hover:bg-border-dark text-white transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full border-2 border-card-dark" />
             </button>
             <WalletButton />
        </div>
      </div>
    </header>
  );
};
