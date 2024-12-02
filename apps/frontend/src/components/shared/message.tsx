"use client";

import { useMessage } from "@/contexts";
import { I } from "@/components";

export const Message = () => {
  const { text, type } = useMessage();

  if (!text || !type) {
    return null;
  }

  return (
    <div
      className={`z-30 fixed bottom-6 right-4 flex items-center justify-start gap-4 p-4 min-w-96 h-12 text-white text-lg ${
        type == "success" ? "bg-dark-green" : "bg-dark-red"
      }`}
    >
      {type == "success" && <I.Success className="text-2xl" />}
      {type == "error" && <I.Error className="text-2xl" />}
      {text}
    </div>
  );
};
