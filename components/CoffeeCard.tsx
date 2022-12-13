import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Text,
} from "@chakra-ui/react";
import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";
import useStore from "../store/store";
import { formatter } from "../utils/utils";

interface CoffeeCardProps {
  image: string;
  title: string;
  desctiption?: string;
  price: number;
  categoryCoffeeId: string;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({
  title,
  price,
  desctiption,
  image,
  categoryCoffeeId,
}) => {
  const [category, setCategory] = useState("");
  const { categoryList } = useStore();
  useEffect(() => {
    const item = categoryList.find(item => item.id === categoryCoffeeId);
    setCategory(item?.name ?? "");
    console.log("cat id", categoryCoffeeId)
    console.log("item", item)
  }, []);
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          layout="responsive"
          width={200}
          height={150}
          priority={true}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{desctiption}</Text>
          <Text color="blue.600" fontSize="2xl">
            {formatter.format(price)}
          </Text>
          <Text fontSize="sm" fontWeight="bold">
            {category}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};
