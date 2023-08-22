import {
  Box,
  Button,
  Image,
  Text,
  Container,
  VStack,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";

import { serverBackend } from "./index.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const sampleProductData = {
  _id: "1",
  vProductName: "NDLS LKO Superfast",
  vManufacturerName: "12429",
  vPrice: "₹ 750",
  vTier01: "1A",
  vTier02: "2A",
  vTier03: "3A",
  vQuantity: 1080,
  vUnit: "Seats",
  vSellerName: "Lucknow",
  vShelfLife: 7,
  vCountryOfOrigin: "Delhi",
};

// Usage in your DetailedProduct component
// ...

const DetailedProduct = () => {
  const [vProducts, setvProducts] = useState(sampleProductData);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${serverBackend}/Products/${id}`, {})
      .then((res) => {
        setvProducts(res.data.vData);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  }, [id]);

  return (
    <Box className="Cover">
      <Container maxW="xl" py="8">
        <HStack justifyContent="center">
          {vProducts ? (
            <ProductCard
              key={sampleProductData._id}
              vProductName={sampleProductData.vProductName}
              vManufacturerName={sampleProductData.vManufacturerName}
              vPrice={sampleProductData.vPrice}
              vFrontImage={sampleProductData.vFrontImage}
              vBackImage={sampleProductData.vBackImage}
              vQuantity={sampleProductData.vQuantity}
              vUnit={sampleProductData.vUnit}
              vTier01={sampleProductData.vTier01}
              vTier02={sampleProductData.vTier02}
              vTier03={sampleProductData.vTier03}
              vSellerName={sampleProductData.vSellerName}
              vShelfLife={sampleProductData.vShelfLife}
              vCountryOfOrigin={sampleProductData.vCountryOfOrigin}
              id={sampleProductData._id}
            />
          ) : (
            <Text>Loading...</Text>
          )}
        </HStack>
      </Container>
    </Box>
  );
};

const ProductCard = ({
  id,
  vProductName,
  vManufacturerName,
  vFrontImage,
  vBackImage,
  vPrice,
  vQuantity,
  vUnit,
  vTier01,
  vTier02,
  vTier03,
  vSellerName,
  vShelfLife,
  vCountryOfOrigin,
  handler,
}) => (
  <Box d="flex" justifyContent="center">
    <HStack justifyContent="center">
      <VStack align="flex-start" spacing="4">
        <Text fontSize="xl" fontWeight="bold">
          {vProductName}
        </Text>
        <Text fontSize="md">{vManufacturerName}</Text>
        <HStack spacing="4">
          <Text fontWeight="bold">FARE:</Text>
          <Text>
            {vPrice} {"onwards"}
          </Text>
        </HStack>
        <HStack spacing="4">
          <Text fontWeight="bold">SEATING-TYPES:</Text>
          <Text>
            {vTier01} {vTier02} {vTier03}{" "}
          </Text>
        </HStack>
        <HStack spacing="4">
          <Text fontWeight="bold">AVAILABILITY:</Text>
          <Text>
            {vQuantity}
            {vUnit}
          </Text>
        </HStack>
        <VStack align="flex-start" spacing="2">
          <Text fontWeight="bold">INFORMATION:</Text>
          <Text>
            Origin: {vSellerName}, Destination:
            {vCountryOfOrigin}, Travel Time: {vShelfLife}
            {"h"}
          </Text>
        </VStack>
      </VStack>
    </HStack>
  </Box>
);

export default DetailedProduct;
