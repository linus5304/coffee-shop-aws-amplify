import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactNode } from "react";
import useStore from "../store/store";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { cartQuantity } = useStore();
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
            </Box>
            <Box>
              <Text color="#854f43">
                <Link href="/cart">
                  Cart { `(${ cartQuantity })` }
                </Link>
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box mx="auto" width="80%" mt={6}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
