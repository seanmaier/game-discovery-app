import { Grid, GridItem } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar.tsx";
import GameGrid from "./components/GameGrid/GameGrid.tsx";
import GenreList from "./components/GenreList/GenreList.tsx";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
