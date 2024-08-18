import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch.tsx";

const Navbar = () => {
    return <HStack>
        <Image src={logo} boxSize="60px"></Image>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
}

export default Navbar;