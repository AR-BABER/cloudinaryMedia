"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function ForceRefresh() {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
    console.log("refresing");
  }, []);

  return <div></div>;
}

export default ForceRefresh;
