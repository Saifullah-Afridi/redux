import { Link } from "react-router-dom";

import { HStack } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const item = useSelector((state) => state.cart);
  return (
    <HStack
      bg="green"
      justifyContent="space-between"
      padding={4}
      height="40px"
      fontSize="16px"
    >
      <span>Redux Toolkit</span>
      <HStack justifyContent="space-between">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </HStack>
      <span>Cart item :{item.length}</span>
    </HStack>
  );
};

export default Navbar;
