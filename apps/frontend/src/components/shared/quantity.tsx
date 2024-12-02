import { I } from "@/components";

interface QuantityProps {
  quantity: number;
  increment: () => void;
  decrement: () => void;
  className?: string;
}

const buttonStyle = "text-3xl text-white";

export const Quantity = ({
  quantity,
  increment,
  decrement,
  className,
}: QuantityProps) => {
  return (
    <div
      className={`flex justify-around items-center bg-black w-40 rounded-full ${className}`}
    >
      <button className={buttonStyle} onClick={decrement}>
        <I.Remove />
      </button>
      <p className="text-xl text-white">{quantity}</p>
      <button className={buttonStyle} onClick={increment}>
        <I.Add />
      </button>
    </div>
  );
};
