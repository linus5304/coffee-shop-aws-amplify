import { API, graphqlOperation } from "aws-amplify";
import { listCategories, listCoffees } from "../src/graphql/queries";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
