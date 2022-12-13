import { useAuthenticator } from "@aws-amplify/ui-react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import { Form, Formik } from "formik";
import React from "react";
import { CoffeeDto } from "../src/data";
import { createCoffee } from "../src/graphql/mutations";
import useStore from "../store/store";
import { InputField } from "./InputField";

interface AuthForm {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const AuthForm: React.FC<AuthForm> = ({ isOpen, onClose, onOpen }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const initialValues = {
    email: "",
    password: "",
  };

  const { addCoffee, setNewCoffee } = useStore();
  const { toSignIn, submitForm } = useAuthenticator(context => [
    context.toSignIn,
  ]);

  async function handleCreatePost(data: CoffeeDto) {
    try {
      await API.graphql<CoffeeDto>({
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

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <Formik
          initialValues={initialValues}
          onSubmit={(data, { resetForm }) => {
            toSignIn(data)
            resetForm();
            onClose();
          }}
        >
          <Form>
            <ModalContent>
              <ModalHeader>Add coffee</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <InputField name="email" label="Email" />
                <InputField name="password" label="Password" type="password" />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} type="submit">
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};
