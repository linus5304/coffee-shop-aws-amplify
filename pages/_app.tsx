import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { ChakraProvider } from "@chakra-ui/react";
import { Poppins } from "@next/font/google";
import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import awsConfig from '../src/aws-exports';

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
