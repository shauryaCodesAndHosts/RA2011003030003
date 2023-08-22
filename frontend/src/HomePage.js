import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Link,
  Text,
  VStack,
  Container,
  Grid,
} from "@chakra-ui/react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import axios from "axios";
import { serverBackend } from "./index.js";

const offlineProducts = [
  {
    _id: "1",
    vProductName: "Tejas",
    vPrice: "2000",
    vFrontImage: "product1.jpg",
  },
  {
    _id: "2",
    vProductName: "Shatabdi",
    vPrice: "1040",
    vFrontImage: "product2.jpg",
  },
  {
    _id: "3",
    vProductName: "kaashivishwanath",
    vPrice: "399",
    vFrontImage: "product3.jpg",
  },
];

const Home = () => {
  const [vProducts, setvProducts] = useState(offlineProducts);

  // useEffect(() => {
  //   axios
  //     .get(`${serverBackend}/Products`)
  //     .then((res) => {
  //       setvProducts(res.data.products);
  //     })
  //     .catch((e) => {
  //       toast.error(e.response.data.message);
  //     });
  // }, []);

  return (
    <Container maxW="xl" py="8">
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4}>
        {vProducts.map((i) => (
          <ProductCard
            key={i._id}
            vProductName={i.vProductName}
            vPrice={i.vPrice}
            vFrontImage={i.vFrontImage}
            id={i._id}
          />
        ))}
      </Grid>
    </Container>
  );
};

const ProductCard = ({ id, vProductName, vPrice, vFrontImage, handler }) => (
  <Box p="4" borderWidth="1px" borderRadius="md">
    <Box mb="4">
      <img src={vFrontImage} alt={vProductName} style={{ width: "100%" }} />
    </Box>
    <Text fontSize="xl" fontWeight="bold" mb="2">
      {vProductName}
    </Text>
    <Text fontSize="lg">₹{vPrice}</Text>
    <VStack mt="4" spacing="2">
      <Button variant="outline">
        <RouterLink to={`/DetailedProduct/${id}`}>MORE DETAILS</RouterLink>
      </Button>
    </VStack>
  </Box>
);

export default Home;
