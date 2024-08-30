import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<IoSearchOutline />} />
        <Input
          ref={ref}
          borderRadius={20}
          size="md"
          placeholder="Search game..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
