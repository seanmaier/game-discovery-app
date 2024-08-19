import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

interface Genre {
    id: number,
    name: string
}

interface FetchGenreResponses {
    count: number,
    results: Genre[]
}

const useGenres = () => {
    const [isLoading, setLoading] = useState(false);
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState("")

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FetchGenreResponses>("/genres", {signal: controller.signal})
            .then(res => {
                setLoading(false);
                setGenres(res.data.results)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setLoading(false);
                setError(err.message)
            });

        return () => controller.abort();
    }, []);

    return {isLoading, genres, error}
}

export default useGenres;