import { I } from "@/components";

interface QuantityProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
}

const buttonStyle = "text-3xl text-white";

export const Quantity = ({
  quantity,
  setQuantity,
  className,
}: QuantityProps) => {
  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function increment() {
    setQuantity(quantity + 1);
  }

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
