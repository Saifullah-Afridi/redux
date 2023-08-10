import { add } from "../../src/store/cartSlice";
import { useDispatch } from "react-redux";
import {
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Box,
  HStack,
  Button,
  Badge,
} from "@chakra-ui/react";
import useProducts from "./hooks/useProducts";

const Products = () => {
  const dispatch = useDispatch();
  const products = useProducts();
  const handleAdd = (prod) => {
    dispatch(add(prod));
  };
  return (
    <>
      <SimpleGrid columns={4} spacing={4}>
        {products.map((product) => (
          <Card key={product.id} border="2px" borderColor="black" marginY={6}>
            <Image src={product.image} boxSize="300px" borderRadius="lg" />
            <CardBody marginY={4}>
              <HStack justifyContent="space-between" marginY={3}>
                <Heading size="md">{product.title}</Heading>
                <Badge colorScheme="green" borderRadius="5px">
                  ${product.price}
                </Badge>
              </HStack>
              <Button colorScheme="blue" onClick={() => handleAdd(product)}>
                Add to cart
              </Button>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Products;
