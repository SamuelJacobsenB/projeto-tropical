"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "..";

interface ProductCardProps {
  src: string;
  alt: string;
  name: string;
  href: string;
  onDelete: () => void;
}

export const ProductCard = ({
  src,
  alt,
  name,
  href,
  onDelete,
}: ProductCardProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-primary rounded-lg h-64 overflow-hidden cursor-pointer">
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        className="w-48 h-40 object-cover"
      />
      <div className="flex flex-col justify-center w-full">
        <Button onClick={() => router.push(href)}>Modificar</Button>
      </div>
    </div>
  );
};
