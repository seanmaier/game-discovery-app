import useGames from "../hooks/useGame.ts";
import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";

const GameGrid = () => {
    const {error, games, isLoading} = useGames();
    const skeleton = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid padding="10px" columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10}>
                {isLoading && skeleton.map(skeleton => <GameCardSkeleton key={skeleton}/> )}
                {games.map(game =>
                    <GameCard key={game.id} game={game}/>
                )}
            </SimpleGrid>
            </>
    );
}

export default GameGrid;