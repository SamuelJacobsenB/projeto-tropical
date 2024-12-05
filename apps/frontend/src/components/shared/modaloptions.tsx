"use client";

import { useModalOptions } from "@/contexts";
import { ModalBox, Button, I } from "..";

export const ModalOptions = () => {
  const { text, action, closeModalOptions } = useModalOptions();

  function handleConfirm() {
    closeModalOptions();
    action();
  }

  if (!text) {
    return null;
  }

  return (
    <ModalBox className="p-4 gap-2 max-w-screen-sm">
      <div className="flex w-full justify-between">
        <h2 className="text-3xl">Nova ação:</h2>
        <button className="text-3xl" onClick={closeModalOptions}>
          <I.Close />
        </button>
      </div>
      <p className="text-lg text-justify">{text}</p>
      <div className="flex gap-1">
        <Button
          className="text-white flex-1 bg-red-700 hover:bg-red-800"
          onClick={closeModalOptions}
        >
          Cancelar
        </Button>
        <Button
          className="text-white flex-1 bg-green-700 hover:bg-green-800"
          onClick={handleConfirm}
        >
          Confirmar
        </Button>
      </div>
    </ModalBox>
  );
};
