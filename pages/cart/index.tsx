import { Box, Button, Flex, Grid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import useStore from "../../store/store";
import { CartItem as Item } from "../../components/CartItem";
import { formatter } from "../../utils/utils";
import { useRouter } from "next/router";

interface CartPageProps {}

const CartPage: React.FC<CartPageProps> = ({}) => {
  const { coffeeInCart, total } = useStore();
  const router = useRouter();
  return (
    <>
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
        <Box w="100%" display="flex" flexDir="column" gap={4}>
          <Text align="right" fontWeight="bold" fontSize="2xl">
            {formatter.format(total)}
          </Text>
          {coffeeInCart.length > 0 && (
            <Button
              w="20%"
              alignSelf="flex-end"
              onClick={() => router.push("/checkout")}
              variant="brandSecondary"
            >
              Proceed to cheeckout
            </Button>
          )}
        </Box>
      </Flex>
      <Box></Box>
    </>
  );
};

export default CartPage;
