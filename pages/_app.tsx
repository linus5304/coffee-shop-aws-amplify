import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Poppins } from "@next/font/google";
import { Authenticator, View } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'; 
import { Amplify } from "aws-amplify";
import awsConfig from '../src/aws-exports'

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

Amplify.configure({...awsConfig})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Authenticator.Provider>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Authenticator.Provider>
    </main>
  );
}
