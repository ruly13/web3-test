Markdown

\# DOKUMENTASI PROYEK: WEB3 ASSET DASHBOARD

\*\*Nama Proyek:\*\* Web3 Portfolio Frontend  

\*\*Versi:\*\* 1.0.0  

\*\*Framework:\*\* Next.js 14 (App Router)  

\*\*Author:\*\* [Nama Anda]

\---

\## 📋 1. Pendahuluan

Dokumen ini berfungsi sebagai panduan teknis langkah-demi-langkah (SOP) untuk membangun \*\*Web3 Asset Dashboard\*\*. Aplikasi ini memungkinkan pengguna untuk menghubungkan dompet kripto (seperti MetaMask) dan melihat portofolio aset digital (NFT dan Token Saldo) mereka secara \*real-time\* di berbagai jaringan blockchain.

\### Fitur Utama

1\.  \*\*Multi-Chain Connect:\*\* Mendukung Ethereum Mainnet, Polygon, dan Testnet (Sepolia).

2\.  \*\*Asset Discovery:\*\* Menampilkan koleksi NFT pengguna secara otomatis.

3\.  \*\*Responsive UI:\*\* Tampilan modern dan responsif menggunakan Tailwind CSS & Shadcn/UI.

4\.  \*\*Secure Architecture:\*\* API Key dilindungi melalui Next.js API Routes.

\---

\## 🛠 2. Tech Stack & Persiapan

\### Perangkat Lunak & Library

\* \*\*Core:\*\* Next.js 14, TypeScript, React 18.

\* \*\*Web3 Connectivity:\*\* RainbowKit, Wagmi v2, Viem.

\* \*\*Data Provider:\*\* Alchemy SDK (untuk indexing data blockchain).

\* \*\*Styling:\*\* Tailwind CSS, Shadcn/UI, Lucide React (Icons).

\### Prasyarat (Akun Pihak Ketiga)

Sebelum memulai coding, Anda \*\*wajib\*\* memiliki akun dan kunci API berikut:

1\.  \*\*WalletConnect Project ID\*\*

`    `\* Daftar: [WalletConnect Cloud](https://cloud.walletconnect.com/)

`    `\* Kegunaan: Diperlukan agar fitur QR Code scanner dan mobile wallet berfungsi.

2\.  \*\*Alchemy API Key\*\*

`    `\* Daftar: [Alchemy Dashboard](https://www.alchemy.com/)

`    `\* Kegunaan: Untuk mengambil data NFT dan metadata token tanpa perlu membuat node sendiri.

\---

\## 🚀 3. Langkah Pengerjaan (Step-by-Step)

\### Langkah 1: Inisialisasi Proyek

Gunakan \*scaffolding\* resmi dari RainbowKit untuk setup tercepat.

\```bash

npm init @rainbow-me/rainbowkit@latest

\# ATAU

pnpm create @rainbow-me/rainbowkit@latest

**Konfigurasi saat instalasi:**

- Project name: web3-dashboard
- App Router: **Yes**
- Turbopack: **Yes** (Opsional)
- Import alias: @/\* (Standard)

**Langkah 2: Instalasi UI Framework (Shadcn/UI)**

Masuk ke folder proyek, lalu inisialisasi Shadcn untuk komponen UI yang estetik.

Bash

cd web3-dashboard

npx shadcn-ui@latest init

*Pilih "Default", "Slate", dan setuju untuk menggunakan CSS Variables.*

Instal komponen spesifik yang akan kita gunakan:

Bash

npx shadcn-ui@latest add card button skeleton toast badge

Instal Alchemy SDK:

Bash

npm install alchemy-sdk axios

**Langkah 3: Konfigurasi Environment Variables**

Buat file bernama .env.local di *root directory*.

Bash

\# File: .env.local

NEXT\_PUBLIC\_WC\_PROJECT\_ID=masukkan\_id\_project\_walletconnect\_anda

NEXT\_PUBLIC\_ALCHEMY\_API\_KEY=masukkan\_key\_alchemy\_anda

NEXT\_PUBLIC\_ENABLE\_TESTNETS=true

⚠️ **PENTING:** Jangan lupa menambahkan .env.local ke dalam file .gitignore agar kunci rahasia Anda tidak ter-upload ke GitHub.

**Langkah 4: Setup Backend Helper (Alchemy)**

Kita perlu membuat konfigurasi Alchemy. Buat file baru di lib/alchemy.ts.

TypeScript

// File: lib/alchemy.ts

import { Network, Alchemy } from "alchemy-sdk";

const settings = {

`  `apiKey: process.env.NEXT\_PUBLIC\_ALCHEMY\_API\_KEY,

`  `// Ganti ke Network.ETH\_SEPOLIA jika menggunakan Testnet

`  `network: Network.ETH\_MAINNET, 

};

export const alchemy = new Alchemy(settings);

**Langkah 5: Membuat API Route (Server-Side)**

Untuk keamanan, kita mengambil data NFT di server, bukan di browser.

Buat file: app/api/nfts/route.ts

TypeScript

// File: app/api/nfts/route.ts

import { NextResponse } from 'next/server';

import { alchemy } from '@/lib/alchemy';

export async function POST(request: Request) {

`  `try {

`    `const { address } = await request.json();

`    `if (!address) {

`      `return NextResponse.json({ error: 'Address required' }, { status: 400 });

`    `}

`    `// Mengambil NFT milik address tersebut

`    `const nfts = await alchemy.nft.getNftsForOwner(address, {

`      `pageSize: 12, // Batasi 12 item dulu agar ringan

`      `excludeFilters: ['SPAM'], // Filter spam NFT

`    `});

`    `return NextResponse.json({ nfts: nfts.ownedNfts });

`  `} catch (error) {

`    `console.error("Alchemy Error:", error);

`    `return NextResponse.json({ error: 'Failed to fetch NFTs' }, { status: 500 });

`  `}

}

**Langkah 6: Membuat Komponen Tampilan (Frontend)**

**A. Komponen Kartu NFT**

Buat file: components/NftCard.tsx

TypeScript

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

interface NftCardProps {

`  `nft: any;

}

export const NftCard = ({ nft }: NftCardProps) => {

`  `// Fallback jika gambar rusak/tidak ada

`  `const imageUrl = nft.media[0]?.gateway || nft.contract.openSeaMetadata.imageUrl || "[https://via.placeholder.com/300?text=No+Image](https://via.placeholder.com/300?text=No+Image)";

`  `const title = nft.title || `#${nft.tokenId}`;

`  `return (

`    `<Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">

`      `<div className="aspect-square relative w-full overflow-hidden">

`        `<img 

`          `src={imageUrl} 

`          `alt={title} 

`          `className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"

`          `loading="lazy"

`        `/>

`      `</div>

`      `<CardHeader className="p-4 pb-2">

`        `<h3 className="font-bold text-lg truncate">{title}</h3>

`      `</CardHeader>

`      `<CardContent className="p-4 pt-0">

`        `<Badge variant="secondary" className="text-xs">

`          `{nft.contract.name || "Unknown Collection"}

`        `</Badge>

`      `</CardContent>

`    `</Card>

`  `);

};

**B. Halaman Utama**

Edit file: app/page.tsx

TypeScript

'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

import { useAccount } from 'wagmi';

import { useState, useEffect } from 'react';

import axios from 'axios';

import { NftCard } from '@/components/NftCard';

import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {

`  `const { address, isConnected } = useAccount();

`  `const [nfts, setNfts] = useState<any[]>([]);

`  `const [loading, setLoading] = useState(false);

`  `// Fetch data ketika user terhubung

`  `useEffect(() => {

`    `if (isConnected && address) {

`      `fetchNfts();

`    `} else {

`      `setNfts([]); // Reset jika disconnect

`    `}

`  `}, [address, isConnected]);

`  `const fetchNfts = async () => {

`    `setLoading(true);

`    `try {

`      `const response = await axios.post('/api/nfts', { address });

`      `setNfts(response.data.nfts);

`    `} catch (error) {

`      `console.error("Error fetching data", error);

`    `} finally {

`      `setLoading(false);

`    `}

`  `};

`  `return (

`    `<main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 md:p-10">

`      `{/\* Header \*/}

`      `<nav className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">

`        `<div>

`          `<h1 className="text-3xl font-extrabold tracking-tight">Web3 Dashboard</h1>

`          `<p className="text-gray-500">Your assets, visualized.</p>

`        `</div>

`        `<ConnectButton showBalance={true} />

`      `</nav>

`      `{/\* Content Area \*/}

`      `{!isConnected ? (

`        `<div className="flex flex-col items-center justify-center h-[50vh] space-y-4">

`          `<div className="text-xl font-semibold text-gray-400">

`            `Please connect your wallet to view assets

`          `</div>

`        `</div>

`      `) : (

`        `<section>

`          `<h2 className="text-xl font-bold mb-6 flex items-center gap-2">

`            `Your Collectibles 

`            `<span className="text-sm font-normal bg-gray-200 px-2 py-1 rounded-full">{nfts.length}</span>

`          `</h2>



`          `{loading ? (

`            `// Loading State (Skeleton)

`            `<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

`              `{[...Array(4)].map((\_, i) => (

`                `<div key={i} className="flex flex-col space-y-3">

`                  `<Skeleton className="h-[250px] w-full rounded-xl" />

`                  `<div className="space-y-2">

`                    `<Skeleton className="h-4 w-[250px]" />

`                    `<Skeleton className="h-4 w-[200px]" />

`                  `</div>

`                `</div>

`              `))}

`            `</div>

`          `) : (

`            `// Success State

`            `<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

`              `{nfts.map((nft, idx) => (

`                `<NftCard key={`${nft.contract.address}-${nft.tokenId}-${idx}`} nft={nft} />

`              `))}

`            `</div>

`          `)}



`          `{!loading && nfts.length === 0 && (

`            `<p className="text-center text-gray-500 mt-10">No NFTs found on this network.</p>

`          `)}

`        `</section>

`      `)}

`    `</main>

`  `);

}

-----
**📂 4. Struktur Folder Akhir**

Pastikan struktur folder Anda terlihat seperti ini untuk mempermudah *debugging*.

my-web3-dashboard/

├── app/

│   ├── api/

│   │   └── nfts/

│   │       └── route.ts       # Endpoint backend

│   ├── globals.css

│   ├── layout.tsx

│   └── page.tsx               # Halaman utama

├── components/

│   ├── ui/                    # Komponen Shadcn (Card, Skeleton, dll)

│   └── NftCard.tsx            # Komponen kustom kita

├── lib/

│   ├── alchemy.ts             # Config Alchemy SDK

│   └── utils.ts               # Utility Shadcn

├── public/

├── .env.local                 # Environment Variables (RAHASIA)

├── next.config.js

├── package.json

└── wagmi.ts                   # Config Web3 Provider

-----
**🚢 5. Deployment (Vercel)**

1. Push kode ke repository Git (GitHub/GitLab).
1. Buka [Vercel](https://vercel.com) dan buat proyek baru ("Add New").
1. Import repository Git Anda.
1. **Konfigurasi Environment Variable di Vercel:**
   1. Masukkan NEXT\_PUBLIC\_WC\_PROJECT\_ID
   1. Masukkan NEXT\_PUBLIC\_ALCHEMY\_API\_KEY
1. Klik **Deploy**.

