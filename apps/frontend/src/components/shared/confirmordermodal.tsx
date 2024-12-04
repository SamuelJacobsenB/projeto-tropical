"use client";

import { useState } from "react";
import { useOrder, useMessage } from "@/contexts";
import { postOrder } from "@/functions";
import { ModalBox, I, Button, Input } from "..";

interface ConfirmOrderModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ConfirmOrderModal = ({
  isVisible,
  setIsVisible,
}: ConfirmOrderModalProps) => {
  const { showMessage } = useMessage();
  const { order, value, cancelOrder } = useOrder();

  const [table, setTable] = useState(1);
  const [obs, setObs] = useState("");

  async function handleConfirmOrder() {
    try {
      const response = await postOrder(order!, table, value!, obs);

      if (response.error) {
        throw new Error();
      }

      cancelOrder();

      showMessage("Pedido confirmado com sucesso!", "success");
      setIsVisible(false);
    } catch {
      showMessage("Erro ao confirmar o pedido", "error");
      setIsVisible(false);
    }
  }

  if (!isVisible || order === null || value === null) {
    return null;
  }

  return (
    <>
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
        <div className="flex justify-between items-center p-2">
          <big className="text-2xl">R$ {value.toFixed(2)}</big>
          <Button
            onClick={async () => await handleConfirmOrder()}
            className="bg-green-600 text-white hover:bg-green-800"
          >
            Confirmar
          </Button>
        </div>
      </ModalBox>
    </>
  );
};
