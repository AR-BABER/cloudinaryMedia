import cloudinary from "cloudinary";
import CloudImage from "../../components/CoudImage";
import ForceRefresh from "@/components/ForceRefresh";
import FavoritesList from "./favouritesList";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

async function favorites() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  console.log(results);
  return (
    <section>
      <ForceRefresh />
      <div className=" flex flex-col gap-8 ">
        <div className="flex justify-between px-4 py-2">
          <h1 className="text-4xl font-bold">Favorite Images</h1>
        </div>

        <FavoritesList initresources={results.resources} />
      </div>
    </section>
  );
}

export default favorites;
