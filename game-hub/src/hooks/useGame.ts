import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

export interface Platform {
    id: number,
    name: string
    slug: string
}

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: {platform: Platform}[],
    metacritic: number
}

interface FetchGameResponses {
    count: number,
    results: Game[],
}


const useGame = () => {
    const [error, setError] = useState("");
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get<FetchGameResponses>("/games", {signal: controller.signal})
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)});

        return () => controller.abort();
    }, []);

    return { error, setError, games, setGames}
}

export default useGame;