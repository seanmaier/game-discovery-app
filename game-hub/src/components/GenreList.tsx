import { Image, Text, HStack, ListItem, List } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres.ts";
import getCroppedUrl from "../services/img-service.ts";
import GenreSkeleton from "./GenreSkeleton.tsx";
import GenreContainer from "./GenreContainer.tsx";

const GenreList = () => {
  const { error, data, isLoading } = useGenres();
  const skeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeleton.map((skeleton) => (
          <GenreContainer>
            <GenreSkeleton key={skeleton} />
          </GenreContainer>
        ))}
      {data.map((genre) => (
        <GenreContainer>
          <ListItem key={genre.id}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedUrl(genre.image_background)}
              ></Image>
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        </GenreContainer>
      ))}
    </List>
  );
};

export default GenreList;
