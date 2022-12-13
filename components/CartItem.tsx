import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  Icon,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";
import { CoffeeDto } from "../src/data";
import useStore from "../store/store";
import { AiFillDelete } from "react-icons/ai";

interface CartItemProps {
  data: CoffeeDto;
}

export const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const [count, setCount] = useState(data.quantity as number);
  const {
    setCartQuantity,
    updateCartItem,
    setTotal,
    deleteCartItem,
    coffeeInCart,
  } = useStore();

  useEffect(() => {
    updateCartItem(data?.id ?? '', { ...data, quantity: count });
    setCartQuantity();
    setTotal();
  }, [count]);
  return (
    <Card maxW="full">
      <CardBody>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <Box>
            <Image
              src={data?.image ?? ''}
              alt="Green double couch with wooden legs"
              layout="fixed"
              width={50}
              height={50}
            />
            <Text size="sm">{data.title}</Text>
          </Box>
          <Text color="blue.600" fontSize="2xl">
            {data.price}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            {data.quantity}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            {data?.quantity ?? 1 * data?.price!}
          </Text>
          <Box>
            <Flex gap={2}>
              <Button
                onClick={() => {
                  setCount(prev => {
                    if (prev > 0) return prev - 1;
                    else return prev;
                  });
                }}
              >
                -
              </Button>
              <Input width={20} value={count} type="number" placeholder="0" />
              <Button
                onClick={() => {
                  setCount(prev => prev + 1);
                }}
              >
                +
              </Button>
              <IconButton
                aria-label="delete"
                onClick={() => {
                  deleteCartItem(data.id ?? '', coffeeInCart);
                  setCartQuantity();
                  setTotal();
                }}
              >
                <AiFillDelete style={{ fontSize: 20, color: "#f0283b" }} />
              </IconButton>
            </Flex>
          </Box>
        </Grid>
      </CardBody>
    </Card>
  );
};
