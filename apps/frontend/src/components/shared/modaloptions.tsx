import { ModalBox, Button, I } from "..";

interface ModalOptionsProps {
  text: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ModalOptions = ({
  text,
  onCancel,
  onConfirm,
}: ModalOptionsProps) => {
  return (
    <ModalBox className="flex flex-col">
      <div className="flex w-full justify-between">
        <h2 className="text-2xl">Nova ação:</h2>
        <button className="text-2xl" onClick={onCancel}>
          <I.Close />
        </button>
      </div>
      <p className="text-lg text-justify">{text}</p>
      <div className="flex gap-1">
        <Button
          className="text-white bg-red-700 hover:bg-red-800"
          onClick={onCancel}
        >
          Cancelar
        </Button>
        <Button
          className="text-white bg-green-700 hover:bg-green-800"
          onClick={onConfirm}
        >
          Confirmar
        </Button>
      </div>
    </ModalBox>
  );
};
