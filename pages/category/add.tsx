import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../../components/InputField";
import { CreateCategoryInput } from "../../src/API";
import  { handleCreateCategory } from "../../store/api";
import useStore from "../../store/store";

interface AddProps {}

const Add: React.FC<AddProps> = ({}) => {
  const initialValues: CreateCategoryInput = {
    name: "",
  };

  const { addCoffee, setNewCoffee } = useStore();
  const { user } = useAuthenticator();
  const router = useRouter();
  const toast = useToast()
  return (
    <>
      <Authenticator loginMechanisms={["username"]}>
        <Box maxW="60%" mx="auto">
          <Formik
            initialValues={initialValues}
            onSubmit={(data, { resetForm }) => { 
              handleCreateCategory({
                ...data,
                userCategoriesId: user.username,
              }, toast);
              resetForm();
            }}
          >
            <Form>
              <Flex direction="column" gap={4}>
                <InputField name="name" label="Name" />
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
