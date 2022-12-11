import { Box, Flex, Grid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import useStore from "../../store/store";
import { CartItem as Item } from "../../components/CartItem";

interface CartPageProps {}

const CartPage: React.FC<CartPageProps> = ({}) => {
  const { coffeeInCart, total } = useStore();
  return (
    <Flex direction="column" gap={4}>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} borderBottom="2px">
        <Box>Product</Box>
        <Box> Price</Box>
        <Box> Quantity</Box>
        <Box> Subtotal</Box>
        <Box> Actions</Box>
      </Grid>
      <Flex gap={4} direction="column">
        {coffeeInCart.map(item => (
          <Item key={item.id} data={item} />
        ))}
      </Flex>
      <Box>
        <Text align="right" fontWeight="bold" fontSize="2xl">{total}</Text>
      </Box>
    </Flex>
  );
};

export default CartPage;
