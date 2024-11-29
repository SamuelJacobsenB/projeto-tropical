import Image from "next/image";

interface ProductCardProps {
  src: string;
  alt: string;
  name: string;
  price: number;
}

export const ProductCard = ({ src, alt, name, price }: ProductCardProps) => {
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
        <h2 className="text-xl text-white text-center m-2">{name}</h2>
        <h3 className="text-lg text-white text-center">
          R$ {price.toFixed(2)}
        </h3>
      </div>
    </div>
  );
};
