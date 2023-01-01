import * as React from 'react'
import { Text, Center, Flex, HStack, Box, Image, Heading } from '@chakra-ui/react'
import { Link } from 'gatsby'

const menuItems = [
    {
        name: "background/experience",
        link: "/about"
    },
    {
        name: "projects",
        link: "/projects"
    },
    // {
    //     name: "scenery",
    //     link: "/scenery"
    // },
    {
        name: "resume",
        link: "https://drive.google.com/file/d/1_IOzmp8a8JdewSncNE274h6pOH8LVXdL/view?usp=sharing"
    },
]

export default function Navbar() {
    return (
        <Center justify="center">
        <Box maxW="1100px" w="100%" mx="25px" pt={{base: 0, sm: 5}}>
            <Flex align="center" justify="space-between" flexDir={{ base: "column", md: "row" }} p="20px">
                <Flex>
                    <Image/>
                    <Link to="/"><Heading fontSize="3xl">roland yang</Heading></Link>
                </Flex>
                <HStack spacing={6} flexWrap="wrap" justify="center">
                    {menuItems.map((menuItem, i) => {
                        return <Link to={menuItem.link}><Text color="whiteAlpha.700" fontSize="xl" _hover={{color: "white"}} key={i}>{menuItem.name}</Text></Link>;
                    })}
                </HStack>
            </Flex>
        </Box>
        </Center>
    )
}