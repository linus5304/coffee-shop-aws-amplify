import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import {
  Box, Button, Flex, useToast
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import * as z from "yup";
import { InputField } from "../../components/InputField";
import { CreateProductInput } from "../../src/API";
import { handleCreateProduct } from "../../store/api";
import useStore from "../../store/store";

interface AddProps {}

const Add: React.FC<AddProps> = ({}) => {
  const initialValues: CreateProductInput = {
    title: "",
    description: "",
    image: "",
    ingredients: [],
    price: 0,
    quantity: 1,
    categoryProductsId: "",
  };

  const { addCoffee, setNewCoffee, categoryList, setCategoryList } = useStore();
  const {user} = useAuthenticator(ctx => [ctx.user])
  const router = useRouter();

  const validationSchema = z.object().shape({
    title: z.string().required(),
    description: z.string(),
    image: z.string(),
    ingredients: z.array(z.string()),
    price: z.number().required(),
    quantity: z.number(),
    categoryCoffeeId: z.string().required("Please select a category"),
  });
  const toast = useToast()
  useEffect(() => {
    setCategoryList()
  })
  return (
    <>
      <Authenticator socialProviders={["google"]}>
        <Box maxW="60%" mx="auto">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(data, { resetForm }) => {
              handleCreateProduct({...data, userProductsId: user.username}, toast);
              setNewCoffee(data);
              addCoffee();
              resetForm();
            }}
          >
            <Form>
              <Flex direction="column" gap={4}>
                <InputField name="title" label="Title" />
                <InputField name="description" label="Description" />
                <InputField name="image" label="Image URL" />
                <InputField name="price" label="Price" />
                <InputField name="quantity" label="Quantity" />
                <InputField
                  name="categoryCoffeeId"
                  label="Category"
                  select
                  options={categoryList}
                />
                <Flex>
                  <Button variant="brandSecondary" mr={3} type="submit" px={8}>
                    Save
                  </Button>
                  <Button variant="outline" onClick={() => router.push("/")} px={8}>
                    Cancel
                  </Button>
                </Flex>
              </Flex>
            </Form>
          </Formik>
        </Box>
      </Authenticator>
    </>
  );
};

export default Add;
