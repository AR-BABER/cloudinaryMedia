import { FolderPlus, PenIcon, Pencil, PencilIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "./icons/menu";
import { AddAlbumDialog } from "./Dialog";
import { SearchResult } from "@/app/gallery/page";
import { useState } from "react";

export function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setopen] = useState(false);
  return (
    <div className=" absolute  top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setopen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className=" p-0 h-6 w-6 ">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-300 p-2 m-2 w-30 ">
          <DropdownMenuItem asChild>
            <AddAlbumDialog image={image} onClose={() => setopen(false)} />
          </DropdownMenuItem>
          <DropdownMenuItem asChild className=" cursor-pointer items-center">
            <Link
              className="items-center"
              href={`edit?publicId=${encodeURIComponent(image.public_id)}`}
            >
              <PencilIcon className="p-1" />
              Edit
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
