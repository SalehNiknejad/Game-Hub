import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo-ff4914e6.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={`10px`}>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
