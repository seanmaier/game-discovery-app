import useGames from "../hooks/useGame.ts";
import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";

const GameGrid = () => {

    const {error, games} = useGames();

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid padding="10px" columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10}>
                {games.map(game =>
                    <GameCard key={game.id} game={game}/>
                )}
            </SimpleGrid>
            </>
    );
}

export default GameGrid;