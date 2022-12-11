import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Link from "next/link";
import { CoffeeCard } from "../components/CoffeeCard";
import useStore from "../store/store";

interface HomePageProps {}
const HomePage: React.FC<HomePageProps> = ({}) => {
  const coffeeData = useStore(state => state.coffeeList);

  const { setSelectedItem } = useStore();
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {coffeeData.map(item => (
          <Link
            href={`/coffee/${item.id}`}
            key={item.id}
            onClick={() => setSelectedItem(item)}
          >
            <GridItem>
              <CoffeeCard
                title={item.title}
                desctiption={item.description}
                image={item.image}
                price={item.price}
              />
            </GridItem>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
