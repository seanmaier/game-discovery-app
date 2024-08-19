import useGames from "../hooks/useGame.ts";

const GameGrid = () => {
const {error, games}= useGames();

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