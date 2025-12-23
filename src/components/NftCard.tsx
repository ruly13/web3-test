
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NftCardProps {
  nft: any;
}

export const NftCard = ({ nft }: NftCardProps) => {
  // Fallback jika gambar rusak/tidak ada
  const imageUrl = nft.media[0]?.gateway || nft.contract.openSeaMetadata.imageUrl || "https://via.placeholder.com/300?text=No+Image";
  const title = nft.title || `#${nft.tokenId}`;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square relative w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <h3 className="font-bold text-lg truncate">{title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <Badge variant="secondary" className="text-xs">
          {nft.contract.name || "Unknown Collection"}
        </Badge>
      </CardContent>
    </Card>
  );
};