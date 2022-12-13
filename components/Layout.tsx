import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactNode, use } from "react";
import useStore from "../store/store";
import { AuthForm } from "./AuthForm";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { AiOutlineLogout } from "react-icons/ai";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { cartQuantity } = useStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, signOut } = useAuthenticator(context => [context.user]);
  function handleLogin() {}
  return (
    <>
      <Box bgColor="#fffffa">
        <Box height="100px" color="white" borderBottom="2px solid black">
          <Flex align="center" px={10} alignItems="center" h="100%">
            <Box display="flex" flex={1} gap={20} alignItems="center">
              <Text fontSize="4xl" fontWeight="bold" color="#d96b1a">
                <Link href="/">CoffeeSHOP</Link>
              </Text>
              <Text fontSize="2xl" fontWeight="semibold" color="#854f43">
                <Link href="/">Home</Link>
              </Text>
              <Link href="/coffee/add">
                <Button variant="solid" bg="#d96b1a">
                  Add Coffee
                </Button>
              </Link>
              <Link href="/category/add">
                <Button variant="solid" bg="#d96b1a">
                  Add Category
                </Button>
              </Link>
            </Box>
            <Flex alignItems="center" gap={4}>
              <Text color="#854f43">
                <Link href="/cart">Cart {`(${cartQuantity})`}</Link>
              </Text>
              {user ? (
                <IconButton
                  aria-label="logout"
                  onClick={() => signOut()}
                  bg="#854f43"
                >
                  <AiOutlineLogout />
                </IconButton>
              ) : (
                <Link href="/auth">
                  <Button variant="solid" bg="#d96b1a">
                    Login
                  </Button>
                </Link>
              )}
            </Flex>
          </Flex>
        </Box>
        <Box mx="auto" width="80%" mt={6}>
          {children}
        </Box>
      </Box>
      <AuthForm isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  );
};

export default Layout;
