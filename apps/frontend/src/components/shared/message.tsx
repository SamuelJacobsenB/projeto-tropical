"use client";

// import { useMessage } from "@/contexts/message.provider";

export const Message = () => {
  //   const { text, type } = useMessage();

  //   if (!text || !type) {
  //     return null;
  //   }

  return (
    <div className="z-20 fixed bottom-6 right-4 flex items-center justify-start gap-4 p-4 min-w-96 h-12 text-white text-lg bg-primary">
      Parece que houve um erro
    </div>
  );
};
