import React from "react";
import { Center, Heading } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Products from "../components/Products";

const Home = () => {
  return (
    <React.Fragment>
      <Heading as="h1" size="xl" textAlign="center" marginY="10px">
        Welcome to the Redux toolkit store
      </Heading>
      <Grid gridTemplateColumns="200px 1fr">
        <GridItem>aside</GridItem>
        <GridItem>
          <Heading size="xl" marginY="40px" textAlign="center" color="green">
            PRODUCTS
          </Heading>
          <Products />
        </GridItem>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
