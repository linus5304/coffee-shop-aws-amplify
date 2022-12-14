import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import React from "react";
import useStore from "../../../store/store";
import { formatter } from "../../../utils/utils";

interface CoffeeItemProps {
  image: string;
  title: string;
  desctiption?: string;
  price: number;
}

const Index: React.FC<CoffeeItemProps> = ({}) => {
  const router = useRouter();
  const { id } = router.query;

  const {
    addToCart,
    setNewCoffee,
    addQuantity,
    removeQuantity,
    selectedItem,
    setCartQuantity,
  } = useStore();

  return (
    <Box my={20}>
      <Flex gap={10} direction={{ base: "column", md: "row" }}>
        <Box>
          <Image
            src={selectedItem?.image ?? ""}
            height={500}
            width={400}
            layout="fixed"
            priority={true}
            alt="demo"
          />
        </Box>
        <Box>
          <Text fontSize={{ base: "4xl", md: "6xl" }}>
            {selectedItem?.title}
          </Text>
          <Text fontSize="4xl">
            {formatter.format(selectedItem?.price ?? 0)}
          </Text>
          <Text fontSize="md">{selectedItem?.description}</Text>
          <Flex gap={4} direction="column">
            <Flex gap={2}>
              <Button
                variant="brandSecondary"
                onClick={() => removeQuantity(selectedItem)}
              >
                -
              </Button>
              <Input
                width={20}
                value={selectedItem?.quantity ?? 1}
                type="number"
                placeholder="0"
              />
              <Button
                variant="brandSecondary"
                onClick={() => addQuantity(selectedItem)}
              >
                +
              </Button>
            </Flex>
            <Box>
              <Button
                px="12"
                onClick={() => {
                  setNewCoffee(selectedItem);
                  addToCart();
                  setCartQuantity();
                }}
                variant="brandSecondary"
              >
                Add to cart
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
