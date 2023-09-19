"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditePage({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) {
  //destructing of types above, must learn
  const [prompt, setprompt] = useState("");
  const [transformation, settransformation] = useState<
    undefined | "generative-fill" | "blur" | "bg-remove"
  >();
  const [pending, setpending] = useState("");
  return (
    <section>
      <div className=" flex flex-col gap-8 ">
        <div className="flex justify-between px-4 py-2">
          <h1 className="text-4xl font-bold">Edite {publicId}</h1>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <Button
              onClick={() => {
                settransformation("generative-fill");
                setprompt(pending);
              }}
              variant={"ghost"}
              className="bg-slate-200 hover:bg-slate-300"
            >
              Generative Fill
            </Button>
            <Label className="bg-">Prompt:</Label>
            <input
              className="bg-slate-200 rounded-lg border-spacing-1 hover:bg-slate-300 px-3 py-1 "
              value={pending}
              onChange={(e) => setpending(e.target.value)}
            />
          </div>

          <Button
            onClick={() => settransformation(undefined)}
            variant={"secondary"}
            className="bg-slate-200 hover:bg-slate-300"
          >
            Clear All
          </Button>
          <Button
            onClick={() => settransformation("blur")}
            variant={"secondary"}
            className="bg-slate-200 hover:bg-slate-300"
          >
            Blur
          </Button>
          <Button
            onClick={() => settransformation("bg-remove")}
            variant={"secondary"}
            className="bg-slate-200 hover:bg-slate-300"
          >
            Remove BackGround
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-8 object-contain">
          <CldImage alt={""} src={publicId} width="800" height="600" />
          {transformation === "generative-fill" && (
            <CldImage
              alt={""}
              src={publicId}
              width="1800"
              height="1400"
              crop="pad"
              fillBackground={{
                prompt,
              }}
            />
          )}
          {transformation === "blur" && (
            <CldImage
              alt={""}
              src={publicId}
              width="300"
              height="200"
              blur="800"
            />
          )}

          {transformation === "bg-remove" && (
            <CldImage
              alt={""}
              src={publicId}
              width="300"
              height="200"
              removeBackground
            />
          )}
        </div>
      </div>
    </section>
  );
}
