import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";

const Searchbar = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<IoSearchOutline />} />
      <Input
        borderRadius={20}
        size="md"
        placeholder="Search game..."
        variant="filled"
      />
    </InputGroup>
  );
};

export default Searchbar;
