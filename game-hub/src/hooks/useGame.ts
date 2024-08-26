import useData from "./useData.ts";
import { Genre } from "./useGenres.ts";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (
  selectedGenre: Genre | null,
  selectPlatform: Platform | null,
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectPlatform?.id } },
    [selectedGenre?.id, selectPlatform?.id],
  );

export default useGame;
