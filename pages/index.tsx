import { useAuthenticator } from "@aws-amplify/ui-react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import Link from "next/link";
import { useEffect } from "react";
import { CoffeeCard } from "../components/CoffeeCard";
import awsExports from "../src/aws-exports";
import { coffeeData, ProductDto } from "../src/data";
import useStore from "../store/store";
import { handleCreateProduct } from "../store/api";

interface HomePageProps {
  data: ProductDto[];
}

Amplify.configure({ ...awsExports, ssr: true });

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  const {
    coffeeList,
    setCoffeeList,
    setSelectedItem,
    setCategoryList,
    addCoffee,
  } = useStore();

  const { user } = useAuthenticator(ctx => [ctx.user]);
  useEffect(() => {
    // setCategoryList();
    setCoffeeList();
    // for (let coffee of coffeeData) {
    //   handleCreateProduct(coffee);
    //   // addCoffee();
    // }
  }, []);
  return (
    <Box>
      <Grid gridTemplateColumns={{sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)'}} gap={4}>
        {coffeeList?.map(item => (
          <Link
            href={`/coffee/${item.id}`}
            key={item.id}
            onClick={() => setSelectedItem(item)}
          >
            <GridItem>
              <CoffeeCard
                title={item?.title ?? ""}
                desctiption={item?.description ?? ""}
                image={item?.image ?? ""}
                price={item?.price ?? 0}
                categoryCoffeeId={item?.categoryProductsId ?? ""}
              />
            </GridItem>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
