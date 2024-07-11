import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

const ColorModeSwitch = () => {
    const {  toggleColorMode , setColorMode , colorMode} = useColorMode();
  return (
    <HStack>
        <Switch isChecked= {colorMode === "dark"} onChange={toggleColorMode}/>
        <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch