import { Box, Input, Button, Container, Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react'

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image:  ""
    });
    const handleAddProduct = () => {
        console.log(newProduct);
    }
  return (
    <Container maxW={"container.sm"}>
        <VStack spacing={8}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb = {8}>
                Create New Product
            </Heading>
            <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow = {"md"}>
                <VStack>
                    <Input placeholder={"Product Name"} name = {"name"} value = {newProduct.name} 
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})} />

                    <Input placeholder= "Price" name = "price" type= "number" value = {newProduct.price} 
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})} />

                    <Input placeholder={"Image URL"} name = {"Image"} value = {newProduct.image} 
                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})} />

                    <Button colorScheme={'blue'} w='full' onClick={handleAddProduct}>
                        Create Product
                    </Button>
                </VStack>
            </Box>
        </VStack>
    </Container>
  )
}
export default CreatePage