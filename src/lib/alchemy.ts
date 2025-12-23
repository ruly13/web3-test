import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  // Ganti ke Network.ETH_SEPOLIA jika menggunakan Testnet
  network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings);