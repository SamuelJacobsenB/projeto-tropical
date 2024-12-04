import React from "react";
import Image from "next/image";
import { Button } from "@/components";

interface FormPageProps {
  children: React.ReactNode;
  title: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export const FormPage = ({ children, title, onSubmit }: FormPageProps) => {
  return (
    <div className="grid grid-cols-12 w-screen h-screen">
      <div className="md:col-span-7 lg:md:col-span-9 md:flex md:justify-center md:items-center md:bg-light-primary md:h-screen hidden">
        <div className="flex justify-center items-center bg-white rounded-full p-2">
          <Image src="/logo.png" alt="Logo" width={120} height={120} />
        </div>
      </div>
      <div className="col-span-12 md:col-span-5 lg:col-span-3 flex flex-col items-center p-4 gap-12 bg-white overflow-auto">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={120}
          className="mt-16"
        />
        <h1 className="text-3xl">{title}</h1>
        <form
          method="post"
          onSubmit={onSubmit}
          className="flex flex-col items-center gap-6 w-full"
        >
          {children}
          <Button
            type="submit"
            className="w-full h-12 bg-green-700 text-white hover:bg-green-800"
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};
