"use client";

import { useRouter } from "next/navigation";
import { useModalOptions } from "@/contexts";
import Image from "next/image";
import { Button, I } from "..";

interface ProductCardProps {
  src: string;
  alt: string;
  name: string;
  href: string;
  onDelete: () => void;
}

export const AdmProductCard = ({
  src,
  alt,
  name,
  href,
  onDelete,
}: ProductCardProps) => {
  const router = useRouter();
  const { showModalOptions } = useModalOptions();

  function handleDelete() {
    showModalOptions(
      "Deseja mesmo deletar este produto? (esta ação não pode ser revertida)",
      onDelete
    );
  }

  return (
    <div className="flex flex-col bg-primary rounded-lg h-64 overflow-hidden cursor-pointer">
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        className="w-48 h-40 object-cover"
      />
      <div className="flex flex-col justify-center w-full p-2">
        <h2 className="text-xl text-white text-center m-1">{name}</h2>
        <div className="flex max-w-full gap-2">
          <Button
            className="text-white w-10 flex-1 bg-blue-600 hover:bg-blue-700"
            onClick={() => router.push(href)}
          >
            <I.Edit />
          </Button>
          <Button
            className="text-white flex-1 bg-red-600 hover:bg-red-700"
            onClick={handleDelete}
          >
            <I.Delete />
          </Button>
        </div>
      </div>
    </div>
  );
};
