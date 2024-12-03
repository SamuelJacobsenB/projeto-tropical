"use client";

import { useState } from "react";
import { useOrder } from "@/contexts";
import { ModalBox, I, Button, Input } from "..";

interface ConfirmOrderModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ConfirmOrderModal = ({
  isVisible,
  setIsVisible,
}: ConfirmOrderModalProps) => {
  const { order, value } = useOrder();

  const [table, setTable] = useState(1);
  const [obs, setObs] = useState("");

  if (!isVisible || order === null || value === null) {
    return null;
  }

  return (
    <ModalBox>
      <div className="flex justify-between items-center p-2 text-3xl">
        <h1>Confirmar pedido</h1>
        <button onClick={() => setIsVisible(false)}>
          <I.Close />
        </button>
      </div>
      <div className="flex flex-col gap-6 w-full min-h-44">
        <Input
          type="number"
          name="table"
          label="Número da mesa:"
          value={table}
          onChange={(evt) => setTable(Number(evt.target.value))}
          placeholder="Número da mesa"
          minLength={1}
          required
        />
        <Input
          type="text"
          name="obs"
          label="Observação (opcional):"
          value={obs}
          onChange={(evt) => setObs(evt.target.value)}
          placeholder="Sua observação (opcional)"
        />
      </div>
      <div>
        <big>R$ {value.toFixed(2)}</big>
        <Button>Confirmar</Button>
      </div>
    </ModalBox>
  );
};
