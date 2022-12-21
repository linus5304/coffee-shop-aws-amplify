import {
  Box,
  Button,
  Flex,
  IconButton,
  MenuDivider,
  MenuGroup,
  MenuList,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactNode, use, useEffect } from "react";
import useStore from "../store/store";
import { AuthForm } from "./AuthForm";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { AiOutlineLogout } from "react-icons/ai";
import { useRouter } from "next/router";
import Image from "next/image";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { cartQuantity } = useStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, signOut, authStatus } = useAuthenticator(context => [
    context.authStatus,
  ]);
  const router = useRouter();
  return (
    <>
      <Box bgColor="#fffffa">
        <Box height="100px" color="white" borderBottom="2px solid black">
          <Flex align="center" px={10} alignItems="center" h="100%">
            <Box display="flex" flex={1} gap="10%" alignItems="center">
              <Text fontSize="4xl" fontWeight="bold" color="#d96b1a">
                <Link href="/">
                  <Image
                    src="/coffee_logo.png"
                    width={100}
                    height={100}
                    alt="Coffee logo"
                  />
                </Link>
              </Text>
            </Box>
            <Flex alignItems="center" gap={4}>
              <Link href="/coffee/add">
                <Button variant="brandPrimary" bg="#d96b1a">
                  Add Coffee
                </Button>
              </Link>
              <Link href="/category/add">
                <Button variant="brandPrimary" bg="#d96b1a">
                  Add Category
                </Button>
              </Link>

              {authStatus === "authenticated" ? (
                <Flex>
                  <Menu>
                    <MenuButton>
                      <Button variant="brandSecondary">Profile</Button>
                    </MenuButton>
                    <MenuList bg="#854f43">
                      <Link href="/profile">
                        <MenuItem bg="#854f43">My Account</MenuItem>
                      </Link>
                      <MenuItem
                        bg="#854f43"
                        onClick={() => {
                          signOut();
                          router.push("/");
                        }}
                      >
                        <Text>Logout</Text>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              ) : (
                <Link href="/auth">
                  <Button variant="brandPrimary">
                    Login
                  </Button>
                </Link>
              )}
              <Text color="#854f43">
                <Link href="/cart">Cart {`(${cartQuantity})`}</Link>
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box mx="auto" width="80%" mt={6} minH="80vh">
          {children}
        </Box>
      </Box>
      <AuthForm isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  );
};

export default Layout;
