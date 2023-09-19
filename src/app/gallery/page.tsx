import { CldImage, CldUploadButton } from "next-cloudinary";
import React, { useState } from "react";
import UploadButton from "./UploadButton";
import cloudinary from "cloudinary";
import CloudImage from "../../components/CoudImage";
import ForceRefresh from "@/components/ForceRefresh";
import { ImageGrid } from "@/components/image-grid";
import { Search } from "lucide-react";
import { SearchForm } from "./SearchForm";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

async function Gallery({
  searchParams: { search },
}: {
  searchParams: {
    search: string;
  };
}) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };
  console.log(results);

  return (
    <section>
      <div className=" flex flex-col gap-8 ">
        <div className="flex justify-between px-4 py-2">
          <h1 className="px-3 text-4xl font-bold bg-gradient-to-r from-purple-400 via-orange-300 to-yellow-400 rounded-full">
            Gallery
          </h1>
          <UploadButton />
        </div>
        <SearchForm />
        {/* <SearchForm /> */}
        <ImageGrid
          images={results.resources}
          getImage={(imageData: SearchResult) => (
            <CloudImage
              key={imageData.public_id}
              imagedata={imageData}
              width="400"
              height="300"
              alt="images"
            />
          )}
        />
      </div>
    </section>
  );
}

export default Gallery;
