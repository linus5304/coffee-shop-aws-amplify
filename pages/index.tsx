import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Amplify, API, withSSRContext } from "aws-amplify";
import Link from "next/link";
import { CoffeeCard } from "../components/CoffeeCard";
import useStore from "../store/store";
import awsExports from "../src/aws-exports";
import { listCoffees } from "../src/graphql/queries";
import { CoffeeDto } from "../src/data";
import { useEffect } from "react";
import { createCoffee } from "../src/graphql/mutations";

interface HomePageProps {
  data: CoffeeDto[];
}

Amplify.configure({ ...awsExports, ssr: true });

// export async function getServerSideProps({ req }) {
//   const SSR = withSSRContext({ req });
//   try {
//     const response = await SSR.API.graphql({ query: listCoffees });
//     return {
//       props: {
//         data: response.data.listCoffees.items,
//       },
//     };
//   } catch (err) {
//     console.log(err);
//     return {
//       props: {},
//     };
//   }
// }

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  const { coffeeList, setCoffeeList, setSelectedItem, setCategoryList } =
    useStore();

  useEffect(() => {
    setCategoryList();
    setCoffeeList();
  }, []);
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {coffeeList.map(item => (
          <Link
            href={`/coffee/${item.id}`}
            key={item.id}
            onClick={() => setSelectedItem(item)}
          >
            <GridItem>
              <CoffeeCard
                title={item?.title ?? ''}
                desctiption={item?.description ?? ''}
                image={item?.image ?? ''}
                price={item?.price ?? 0}
                categoryCoffeeId={item?.categoryCoffeeId ?? ''}
              />
            </GridItem>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
