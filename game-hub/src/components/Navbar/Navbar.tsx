import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import Input from "./Input.tsx";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <Input />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar;
