"use client";
import cloudinary from "cloudinary";
import CloudImage from "../../components/CoudImage";
import ForceRefresh from "@/components/ForceRefresh";
import { useEffect, useState } from "react";
import { ImageGrid } from "@/components/image-grid";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

function FavoritesList({ initresources }: { initresources: SearchResult[] }) {
  const [resources, setresources] = useState(initresources);
  useEffect(() => {
    setresources(initresources);
  }, [initresources]);

  return (
    <ImageGrid
      images={resources}
      getImage={(imageData: SearchResult) => (
        <CloudImage
          key={imageData.public_id}
          imagedata={imageData}
          width="400"
          height="300"
          alt="images"
          unfav={(unfavResource) => {
            setresources((CurrentResourcess) => {
              return CurrentResourcess.filter((resource) => {
                return resource.public_id !== unfavResource.public_id;
              });
            });
          }}
        />
      )}
    />
  );
}

export default FavoritesList;
