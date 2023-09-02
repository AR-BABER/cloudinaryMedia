"use client";
import { SearchResult } from "@/app/gallery/page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FolderPlus } from "lucide-react";
import { useState } from "react";
import { addImageToFolder } from "./actions";

export function AddAlbumDialog({
  image,
  onClose,
}: {
  image: SearchResult;
  onClose: () => void;
}) {
  //what is destructured prop in above?
  const [albumName, setalbumName] = useState("");
  const [open, setopen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpenState) => {
        setopen(newOpenState);
        if (!newOpenState) {
          onClose();
        }
      }}
    >
      <DialogTrigger>
        {/* <div className="flex  items-center mx-2 gap-2"> */}
        <Button variant="ghost" className="flex justify-between">
          <FolderPlus className="mr-2 h-4 w-4" />
          <span>+ Album</span>
        </Button>
        {/* </div> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Type an album you want to move this image into
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input
              onChange={(e) => setalbumName(e.currentTarget.value)}
              id="album-name"
              value={albumName}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={async () => {
              try {
                await addImageToFolder(image, albumName);
                onClose();
                setopen(false);
              } catch (error) {
                console.log("errrrrrrrrr", error);
              }
            }}
            type="submit"
          >
            Add to Album
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
