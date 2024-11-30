import React, { useState, useCallback, createContext, useContext } from "react";
import { Message, Type } from "@/types";

const MessageContext = createContext<Message>({} as Message);

interface MessageProviderProps {
  children: React.ReactNode;
}

export const MessageProvider = ({ children }: MessageProviderProps) => {
  const [text, setText] = useState<string | null>(null);
  const [type, setType] = useState<Type | null>(null);

  const showMessage = useCallback((text: string, type: Type) => {
    setText(text);
    setType(type);

    setTimeout(() => {
      setText(null);
      setType(null);
    }, 6000);
  }, []);

  return (
    <MessageContext.Provider value={{ text, type, showMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);
