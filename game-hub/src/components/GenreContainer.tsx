import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const GenreContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={8} paddingY={1}>
      {children}
    </Box>
  );
};

export default GenreContainer;
