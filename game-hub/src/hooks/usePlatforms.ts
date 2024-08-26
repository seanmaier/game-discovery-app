import useData from "./useData.ts";
import { Platform } from "./useGame.ts";

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
