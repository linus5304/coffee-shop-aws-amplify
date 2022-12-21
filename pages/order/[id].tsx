import { Box, Flex, Text } from "@chakra-ui/react";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CreateOrderInput, OrderDetailsInput } from "../../src/API";
import useStore from "../../store/store";
import { formatter } from "../../utils/utils";

interface OrdersProps {
}

export const Orders: React.FC<OrdersProps> = ({
}) => {
  const router = useRouter();
  const { id } = router.query;
  const { userOrders } = useStore();
  const [order, setOrder] = useState<CreateOrderInput>();

  useEffect(() => {
    const item = userOrders.find(item => item.id === id);
    setOrder(item);
  }, [order]);
  return (
    <>
    <Flex gap={8}>
      <Box>
        <Text fontWeight="semibold">Order date</Text>
        <Text>{moment.parseZone(order?.orderDate).format('DD/MM/YYYY') ?? ''} {moment.parseZone(order?.orderDate).format('HH:mm') ?? ''}</Text>
      </Box>
      <Box>
        <Text fontWeight="semibold">Total</Text>
        <Text>{formatter.format(order?.total ?? 0)}</Text>
      </Box>
    </Flex>
    <Box>
      <Text fontWeight="semibold">Items</Text>
      <Text></Text>
    </Box>
    </>
  );
};

export default Orders;
