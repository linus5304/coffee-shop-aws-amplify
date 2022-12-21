import { Authenticator, Flex, useAuthenticator } from "@aws-amplify/ui-react";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik, useFormik } from "formik";
import React from "react";
import { InputField } from "../../components/InputField";
import { OrderDetailsInput } from "../../src/API";
import useStore from "../../store/store";
import { handleCreateOrder } from "../../store/api";
import { formatter } from "../../utils/utils";
import { Router, useRouter } from "next/router";

interface IndexProps {}

const initialValues: OrderDetailsInput = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  notes: "",
};

export const Index: React.FC<IndexProps> = ({}) => {
  const { coffeeInCart, clearCart } = useStore();
  const { user } = useAuthenticator(ctx => [ctx.user]);
  const router = useRouter()
  return (
    <Authenticator socialProviders={["google"]}>
      <Flex
        width="100%"
        direction={{ base: "column", medium: "row", large: "row" }}
      >
        <Box flex={1}>
          <Text fontSize="4xl" fontWeight="bold">
            Billing Details
          </Text>
          <Formik
            initialValues={initialValues}
            onSubmit={(data, { resetForm }) => {
              handleCreateOrder({
                orderDate: new Date().toISOString(),
                orderDetails: data,
                total: coffeeInCart.reduce(
                  (a, c) => a + c.price * c.quantity,
                  0
                ),
                userOrdersId: user.username,
              });
              clearCart()
              console.log(data);
              router.push('/profile')
              resetForm();
            }}
          >
            {({ values }) => {
              console.log(values);
              return (
                <Form>
                  <VStack spacing={4} alignItems="flex-start">
                    <InputField
                      name="firstName"
                      placeholder="First name"
                      label="First name"
                    />
                    <InputField
                      name="lastName"
                      placeholder="Last name"
                      label="Last name"
                    />
                    <InputField
                      name="email"
                      placeholder="Email"
                      label="Email"
                    />
                    <InputField
                      name="address"
                      placeholder="Address"
                      label="Address"
                    />
                    <InputField name="city" placeholder="City" label="City" />
                    <InputField
                      name="notes"
                      placeholder="Notes"
                      label="Order notes (Optional)"
                    />
                    <Button variant="brandSecondary" type="submit" textTransform="capitalize">
                      Place order
                    </Button>
                  </VStack>
                </Form>
              );
            }}
          </Formik>
        </Box>
        <Box flex={1}>
          <Text fontSize="4xl">Your Order</Text>
          <Grid gridTemplateColumns="repeat(2, 1fr)" gap="40%">
            <GridItem>Product</GridItem>
            <GridItem>Subtotal</GridItem>
          </Grid>
          <Divider />
          {coffeeInCart.map(data => (
            <Grid gridTemplateColumns="repeat(2, 1fr)" gap="40%" key={data.id}>
              <GridItem>
                {data.title} x {data.quantity}
              </GridItem>
              <GridItem>
                {formatter.format(data.price * data.quantity)}
              </GridItem>
            </Grid>
          ))}
          <Divider />
          <Grid
            gridTemplateColumns="repeat(2, 1fr)"
            gap="40%"
            fontWeight="semibold"
          >
            <GridItem>Subtotal</GridItem>
            <GridItem>
              {formatter.format(
                coffeeInCart.reduce((a, c) => a + c.price * c.quantity, 0)
              )}
            </GridItem>
          </Grid>
          <Grid
            gridTemplateColumns="repeat(2, 1fr)"
            gap="40%"
            fontWeight="bold"
          >
            <GridItem>Total</GridItem>
            <GridItem>
              {formatter.format(
                coffeeInCart.reduce((a, c) => a + c.price * c.quantity, 0)
              )}
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Authenticator>
  );
};

export default Index;
