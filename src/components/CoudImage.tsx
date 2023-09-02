"use client";
import { Fav } from "@/components/icons/fav";
import { CldImage, CldImageProps } from "next-cloudinary";
import React, { useState, useTransition } from "react";
import { MarkAsFavourite } from "../app/gallery/actions";
import { SearchResult } from "../app/gallery/page";
import { FullFav } from "@/components/icons/fullfav";
import ForceRefresh from "@/components/ForceRefresh";
import { revalidatePath, revalidateTag } from "next/cache";
import { ImageMenu } from "./image-menu";

function CoudImage(
  props: {
    imagedata: SearchResult;
    unfav?: (unfavResources: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) {
  const { imagedata, unfav } = props;
  const [IsFav, setIsFav] = useState(imagedata.tags.includes("favorite"));
  const [Transition, startTransition] = useTransition();

  return (
    <div className=" relative">
      <CldImage {...props} priority={true} src={imagedata.public_id} />
      {IsFav ? (
        <FullFav
          className=" absolute top-2 left-2 hover:text-slate-100 cursor-pointer  "
          onClick={() => {
            setIsFav(false);
            unfav?.(imagedata);
            startTransition(() => {
              MarkAsFavourite(imagedata.public_id, true);
            });
          }}
        />
      ) : (
        <Fav
          className=" absolute top-2 left-2 cursor-pointer  "
          onClick={() => {
            setIsFav(true);
            startTransition(() => {
              MarkAsFavourite(imagedata.public_id, false);
              console.log(imagedata.public_id);
            });
          }}
        />
      )}
      <ImageMenu image={imagedata} />
    </div>
  );
}

export default CoudImage;
