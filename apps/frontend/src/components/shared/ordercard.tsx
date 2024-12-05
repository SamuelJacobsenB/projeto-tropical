import { Button } from "..";

interface OrderCardProps {
  table: number;
  price: number;
}

export const OrderCard = ({ table, price }: OrderCardProps) => {
  return <div className="flex flex-col w-72 bg-primary border-2 rounded p-2">
    <div className="flex justify-between w-full text-white">
        <h3 className="text-2">Mesa: {table}</h3>
        <p>{price.toFixed(2)}</p>
    </div>
    <div>
        <Button className="">Ver detalhes</Button>
        <Button>Fechar</Button>
    </div>
  </div>;
};
