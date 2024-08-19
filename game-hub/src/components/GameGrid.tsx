import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";

interface Game {
    id: number,
    name: string
}

interface FetchGameResponses {
    id: number,
    results: Game[],
}

const GameGrid = () => {
    const [error, setError] = useState("");
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        apiClient
            .get<FetchGameResponses>("/games")
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message));
    }, []);

    return (
        <>
            {error && <p>{error}</p>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    );
}

export default GameGrid;