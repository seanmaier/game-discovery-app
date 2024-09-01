import {
  Image,
  Button,
  HStack,
  ListItem,
  List,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres.ts";
import getCroppedUrl from "../../services/img-service.ts";
import GenreSkeleton from "./GenreSkeleton.tsx";
import GenreContainer from "./GenreContainer.tsx";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectGenre: Genre | null;
}

const GenreList = ({ selectGenre, onSelectGenre }: Props) => {
  const { error, data, isLoading } = useGenres();
  const skeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeleton.map((skeleton) => (
            <GenreContainer key={skeleton}>
              <GenreSkeleton />
            </GenreContainer>
          ))}
        {data.map((genre) => (
          <GenreContainer key={genre.id}>
            <ListItem>
              <HStack>
                <Image
                  objectFit="cover"
                  boxSize={"32px"}
                  borderRadius={8}
                  src={getCroppedUrl(genre.image_background)}
                ></Image>
                <Button
                  textAlign="left"
                  whiteSpace="normal"
                  fontWeight={selectGenre?.id === genre.id ? "bold" : "normal"}
                  onClick={() => onSelectGenre(genre)}
                  variant="link"
                  fontSize={"lg"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          </GenreContainer>
        ))}
      </List>
    </>
  );
};

export default GenreList;
