"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchForm() {
  const [TagName, setTagName] = useState("");
  const router = useRouter();
  return (
    <form
      className="px-4"
      onSubmit={(e) => {
        e.preventDefault();
        router.replace(`/gallery?search=${encodeURIComponent(TagName)}`);
        router.refresh();
      }}
    >
      <Label
        htmlFor="Tag name"
        className="text-right bg-slate-300 rounded-full px-2"
      >
        Search By Tag
      </Label>
      <div className="flex gap-2">
        <Input
          onChange={(e) => setTagName(e.currentTarget.value)}
          id="album-name"
          value={TagName}
          className="col-span-3 bg-slate-200 rounded-sm"
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
