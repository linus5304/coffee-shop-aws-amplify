import { Authenticator } from "@aws-amplify/ui-react";
import {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../../components/InputField";
import { CreateCategoryInput } from "../../src/API";
import { createCategory, createCoffee } from "../../src/graphql/mutations";
import useStore from "../../store/store";

interface AddProps {}

const Add: React.FC<AddProps> = ({}) => {
  const initialValues: CreateCategoryInput = {
    name: "",
  };

  async function handleCreateCategory(data: CreateCategoryInput) {
    try {
      const result = await API.graphql<CreateCategoryInput>({
        authMode: "API_KEY",
        query: createCategory,
        variables: {
          input: data,
        },
      });
      console.log("Result ", result);
    } catch (error) {
      console.log("Errors ", error);
    }
  }

  const { addCoffee, setNewCoffee } = useStore();
  const router = useRouter();
  return (
    <>
      <Authenticator loginMechanisms={["username"]}>
        <Box maxW="60%" mx="auto">
          <Formik
            initialValues={initialValues}
            onSubmit={(data, { resetForm }) => {
              console.log(data);
              handleCreateCategory(data);
              resetForm();
            }}
          >
            <Form>
              <Flex direction="column" gap={4}>
                <InputField name="name" label="Name" />
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
