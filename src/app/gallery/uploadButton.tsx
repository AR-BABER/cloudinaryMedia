"use client";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import React from "react";

function uploadButton() {
  const router = useRouter();
  return (
    <div>
      <Button
        asChild
        className="bg-slate-300 hover:bg-gray-400 rounded-full"
        variant="secondary"
      >
        <div className="flex gap-2">
          <CldUploadButton
            onUpload={(result: any) => {
              setTimeout(() => {
                router.refresh();
              }, 2000);
            }}
            uploadPreset="f70lvrjb"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </Button>
    </div>
  );
}

export default uploadButton;
