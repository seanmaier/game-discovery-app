import { Grid, GridItem, Text } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import useGenres from "./hooks/useGenres.ts";

function App() {
  const { error, data } = useGenres();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          {error && <Text>{error}</Text>}
          <ul>
            {data.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
