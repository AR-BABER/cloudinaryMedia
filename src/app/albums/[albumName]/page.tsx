import { CldImage, CldUploadButton } from "next-cloudinary";
import React, { useState } from "react";

import cloudinary from "cloudinary";
import CloudImage from "../../../components/CoudImage";
import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "@/app/gallery/page";
import ForceRefresh from "@/components/ForceRefresh";

async function InerAlbum({
  params: { albumName },
}: {
  params: {
    albumName: string;
  };
}) {
  const albumNamee = decodeURI(albumName);
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };
  console.log("inside results", results);

  return (
    <section>
      <ForceRefresh />
      <div className=" flex flex-col gap-8 ">
        <div className="flex justify-between px-4 py-2">
          <h1 className="text-4xl font-bold">{albumNamee}</h1>
        </div>
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

export default InerAlbum;
