import { Image, Text, HStack, ListItem, List } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres.ts";
import getCroppedUrl from "../services/img-service.ts";

const GenreList = () => {
  const { error, data } = useGenres();

  return (
    <List>
      {error && <Text>{error}</Text>}{" "}
      {data.map((genre) => (
        <ListItem paddingY={"5px"} key={genre.id}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedUrl(genre.image_background)}
            ></Image>
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
