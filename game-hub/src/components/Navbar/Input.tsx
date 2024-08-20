import { Input as ChakraInput } from "@chakra-ui/react";

const Input = () => {
  return (
    <ChakraInput
      borderRadius={20}
      width="60%"
      size="md"
      placeholder="Search for games"
    />
  );
};

export default Input;
