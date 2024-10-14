import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
import { FaRegSun, FaRegMoon } from "react-icons/fa";

const NavBar = () => {
    const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir= {{base: "column", sm: "row"}}>
        <Text
        bgGradient='linear(to-l, cyan.400, blue.500)'
        bgClip='text'
        textAlign={"center"}
        textTransform={"uppercase"}
        fontSize={{base: "22", sm: "28"}}
        fontWeight='bold'
            >
            <Link to={"/"}>Product Store</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
                <Button>
                    <CiSquarePlus fontSize={20}/>
                </Button>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <FaRegMoon /> : <FaRegSun />}
                </Button>
            </Link>
        </HStack>
        </Flex>
    </Container>
  )
}

export default NavBar