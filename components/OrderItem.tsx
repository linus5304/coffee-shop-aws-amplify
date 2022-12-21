import {
    Box,
    Card, CardBody, Text
} from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { OrderDetailsInput } from "../src/API";

interface OrderItemProps {
  id: string;
  orderDate?: string;
  total?: number;
  orderDetails?: OrderDetailsInput;
  userOrdersId?: string;
}

export const OrderItem: React.FC<OrderItemProps> = ({
  id,
  orderDate,
  orderDetails,
  total,
}) => {
  return (
    <Box flex={1}>
      <Card>
        <CardBody>
          <Text>{orderDetails?.firstName ?? ""}</Text>
          <Text>{orderDetails?.lastName ?? ""}</Text>
          <Text>
            {moment.parseZone(orderDate).format("DD/MM/YYYY")}{" "}
            {moment.parseZone(orderDate).format("HH:mm")}
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
};
