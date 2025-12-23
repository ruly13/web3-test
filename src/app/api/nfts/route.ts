import { NextResponse } from 'next/server';
import { alchemy } from '@/lib/alchemy';
import { NftFilters } from 'alchemy-sdk';

export async function POST(request: Request) {
  try {
    const { address } = await request.json();

    if (!address) {
      return NextResponse.json({ error: 'Address required' }, { status: 400 });
    }

    // Mengambil NFT milik address tersebut
    const nfts = await alchemy.nft.getNftsForOwner(address, {
      pageSize: 12, // Batasi 12 item dulu agar ringan
      excludeFilters: [NftFilters.SPAM], // Filter spam NFT
    });

    return NextResponse.json({ nfts: nfts.ownedNfts });
  } catch (error) {
    console.error("Alchemy Error:", error);
    return NextResponse.json({ error: 'Failed to fetch NFTs' }, { status: 500 });
  }
}
