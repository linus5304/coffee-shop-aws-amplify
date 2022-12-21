import { useAuthenticator } from "@aws-amplify/ui-react";
import {
  Button,
  Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
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
            toSignIn(data);
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
