"use client";

import React, { useState, useCallback, createContext, useContext } from "react";

interface ModalOptions {
  text: string | null;
  action: () => void;
  showModalOptions: (text: string, action: () => void) => void;
  closeModalOptions: () => void;
}

const ModalOptionsContext = createContext<ModalOptions>({} as ModalOptions);

interface ModalOptionsProviderProps {
  children: React.ReactNode;
}

export const ModalOptionsProvider = ({
  children,
}: ModalOptionsProviderProps) => {
  const [text, setText] = useState<string | null>(null);
  const [action, setAction] = useState<() => void>(() => {});

  const showModalOptions = useCallback((text: string, action: () => void) => {
    setText(text);
    setAction(action);
  }, []);

  const closeModalOptions = useCallback(() => {
    setText(null);
    setAction(() => {});
  }, []);

  return (
    <ModalOptionsContext.Provider
      value={{ text, action, showModalOptions, closeModalOptions }}
    >
      {children}
    </ModalOptionsContext.Provider>
  );
};

export const useModalOptions = () => useContext(ModalOptionsContext);
