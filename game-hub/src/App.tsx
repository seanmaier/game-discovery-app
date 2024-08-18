import { Grid, GridItem } from '@chakra-ui/react'
import { Show } from '@chakra-ui/react'
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
      <Grid templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
      }}>
          <GridItem area="nav" bg="coral">
              <Navbar />
          </GridItem>
          <Show above="lg">
             <GridItem area="aside" bg="gold">Aside</GridItem>
          </Show>
          <GridItem area="main" bg="dodgerblue">Main</GridItem>
      </Grid>
  )
}

export default App
