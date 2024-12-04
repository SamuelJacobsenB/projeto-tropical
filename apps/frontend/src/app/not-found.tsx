"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoadPage } from "@/components";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/hamburgueres");
  }, [router]);

  return <LoadPage />;
};

export default NotFound;
