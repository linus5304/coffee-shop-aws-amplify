import { UseToastOptions, ToastId } from "@chakra-ui/react";
import { API } from "aws-amplify";
import {
  CreateProductInput,
  CreateCategoryInput,
  CreateOrderInput,
  Order,
  CreateUserInput,
} from "../src/API";
import { CategoryDto, ProductDto } from "../src/data";
import {
  createProduct,
  createCategory,
  createOrder,
  createUser,
} from "../src/graphql/mutations";
import {
  listCategories,
  listProducts,
  listOrders,
  getUser,
} from "../src/graphql/queries";

export async function getCategoryList(userId?: string) {
  try {
    const result = await API.graphql<{ data: any }>({
      authMode: "API_KEY",
      query: listCategories,
      variables: {
        filter: {
            userCategoriesId: {
            eq: userId,
          },
        },
      },
    });
    console.log("Categories ", result);
    return result["data"].listCategories.items as CategoryDto[];
  } catch (error) {
    console.log("Errors ", error);
  }
}
export async function getCoffeeList() {
  try {
    const result = await API.graphql<CategoryDto>({
      authMode: "API_KEY",
      query: listProducts,
    });
    console.log("Coffee ", result);
    return result["data"].listCoffees.items as ProductDto[];
  } catch (error) {
    console.log("Errors ", error);
  }
}

export async function handleCreateProduct(
  data: CreateProductInput,
  toast?: (options?: UseToastOptions) => ToastId
) {
  try {
    const result = await API.graphql<{ data: any }>({
      authMode: "API_KEY",
      query: createProduct,
      variables: {
        input: data,
      },
    });
    toast({
      title: `Category created`,
      status: "success",
      isClosable: true,
    });
  } catch (error) {
    console.log("Errors ", error);
  }
}
export async function handleCreateCategory(
  data: CreateCategoryInput,
  toast: (options?: UseToastOptions) => ToastId
) {
  try {
    const result = await API.graphql<CreateCategoryInput>({
      authMode: "API_KEY",
      query: createCategory,
      variables: {
        input: data,
      },
    });
    toast({
      title: `Category created`,
      status: "success",
      isClosable: true,
    });
    console.log("Result ", result);
  } catch (error) {
    console.log("Errors ", error);
  }
}

export const handleCreateOrder = async (data: CreateOrderInput) => {
  try {
    const result = await API.graphql<{ data: any }>({
      authMode: "API_KEY",
      query: createOrder,
      variables: {
        input: data,
      },
    });
    console.log("Add order result", result);
  } catch (error) {
    console.log("Errors ", error);
  }
};

export const getUserOrders = async (userId: string) => {
  try {
    const result = await API.graphql<{ data: any }>({
      authMode: "API_KEY",
      query: listOrders,
      variables: {
        filter: {
          userOrdersId: {
            eq: userId,
          },
        },
      },
    });
    console.log("user orders ", result);
    return result["data"].listOrders.items as Order[];
  } catch (error) {
    console.log("Errors ", error);
  }
};

export const createUserProfile = async (data: CreateUserInput) => {
  try {
    const result = await API.graphql<{ data: any }>({
      authMode: "API_KEY",
      query: createUser,
      variables: {
        input: data,
      },
    });
    console.log("user info ", result);
  } catch (error) {
    console.log("Errors ", error);
  }
};
export const getUserProfile = async (userId: string) => {
  try {
    const result = await API.graphql<{ data: any }>({
      authMode: "API_KEY",
      query: getUser,
      variables: {
        filter: {
          userOrdersId: {
            eq: userId,
          },
        },
      },
    });
    console.log("User profile", result);
  } catch (error) {
    console.log("Errors ", error);
  }
};
