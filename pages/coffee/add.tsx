import { Authenticator } from "@aws-amplify/ui-react";
import {
  Box, Button, Flex
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import * as z from "yup";
import { InputField } from "../../components/InputField";
import { CreateCoffeeInput } from "../../src/API";
import { CoffeeDto } from "../../src/data";
import { createCoffee } from "../../src/graphql/mutations";
import useStore from "../../store/store";

interface AddProps {}

const Add: React.FC<AddProps> = ({}) => {
  const initialValues: CreateCoffeeInput = {
    title: "",
    description: "",
    image: "",
    ingredients: [],
    price: 0,
    quantity: 1,
    categoryCoffeeId: "",
  };

  async function handleCreatePost(data: CreateCoffeeInput) {
    try {
      await API.graphql<{data: any}>({
        authMode: "API_KEY",
        query: createCoffee,
        variables: {
          input: data,
        },
      });
    } catch (error) {
      console.log("Errors ", error);
    }
  }

  const { addCoffee, setNewCoffee, categoryList, setCategoryList } = useStore();
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
  return (
    <>
      <Authenticator socialProviders={["google"]}>
        <Box maxW="60%" mx="auto">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(data, { resetForm }) => {
              handleCreatePost(data);
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
                  <Button colorScheme="blue" mr={3} type="submit" px={8}>
                    Save
                  </Button>
                  <Button onClick={() => router.push("/")} px={8}>
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
