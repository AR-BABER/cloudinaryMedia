"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
import { resolve } from "path";
export async function MarkAsFavourite(public_id: string, isfav: boolean) {
  if (isfav) {
    await cloudinary.v2.uploader.remove_tag("favorite", [public_id]);
  } else {
    await cloudinary.v2.uploader.add_tag("favorite", [public_id]);
  }
  // await new Promise((resolve) => setTimeout(resolve, 1500));
  // revalidatePath("/favorites");
}
