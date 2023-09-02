import { CldImage, CldUploadButton } from "next-cloudinary";
import React, { useState } from "react";
import cloudinary from "cloudinary";
import CloudImage from "../../components/CoudImage";
import ForceRefresh from "@/components/ForceRefresh";
import { ImageGrid } from "@/components/image-grid";
import { AlbumCard } from "@/components/CardAlbums";

export type Folder = { name: string; path: string };

async function AlbumPage() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };

  return (
    <section>
      <div className=" flex flex-col gap-8 ">
        <div className="flex justify-between px-4 py-2">
          <h1 className="text-4xl font-bold">Albums</h1>
        </div>
        <div className=" grid grid-cols-3 gap-4">
          {folders.map((folder) => (
            <AlbumCard key={folder.path} folder={folder} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AlbumPage;
