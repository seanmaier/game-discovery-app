import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import usePlatforms from "../../hooks/usePlatforms.ts";

const GameMenu = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default GameMenu;
