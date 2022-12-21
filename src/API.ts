/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  userCategoriesId?: string | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
  userCategoriesId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
  userCategoriesId?: string | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  title?: string | null,
  price?: number | null,
  image?: string | null,
  ingredients?: Array< string | null > | null,
  quantity?: number | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  categoryProductsId?: string | null,
  userProductsId?: string | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  userCategoriesId?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  title?: string | null,
  price?: number | null,
  image?: string | null,
  ingredients?: Array< string | null > | null,
  quantity?: number | null,
  description?: string | null,
  categoryProductsId?: string | null,
  userProductsId?: string | null,
};

export type ModelProductConditionInput = {
  title?: ModelStringInput | null,
  price?: ModelIntInput | null,
  image?: ModelStringInput | null,
  ingredients?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  categoryProductsId?: ModelIDInput | null,
  userProductsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProductInput = {
  id: string,
  title?: string | null,
  price?: number | null,
  image?: string | null,
  ingredients?: Array< string | null > | null,
  quantity?: number | null,
  description?: string | null,
  categoryProductsId?: string | null,
  userProductsId?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  authToken?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  profilePictureUrl?: string | null,
  dateOfBirth?: string | null,
  gender?: string | null,
  address?: string | null,
  telephone?: string | null,
};

export type ModelUserConditionInput = {
  authToken?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  profilePictureUrl?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  address?: ModelStringInput | null,
  telephone?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  authToken?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  profilePictureUrl?: string | null,
  dateOfBirth?: string | null,
  gender?: string | null,
  address?: string | null,
  telephone?: string | null,
  orders?: ModelOrderConnection | null,
  products?: ModelProductConnection | null,
  categories?: ModelCategoryConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  orderDate?: string | null,
  total?: number | null,
  orderDetails?: OrderDetails | null,
  createdAt: string,
  updatedAt: string,
  userOrdersId?: string | null,
};

export type OrderDetails = {
  __typename: "OrderDetails",
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  address?: string | null,
  city?: string | null,
  notes?: string | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  authToken?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  profilePictureUrl?: string | null,
  dateOfBirth?: string | null,
  gender?: string | null,
  address?: string | null,
  telephone?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  orderDate?: string | null,
  total?: number | null,
  orderDetails?: OrderDetailsInput | null,
  userOrdersId?: string | null,
};

export type OrderDetailsInput = {
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  address?: string | null,
  city?: string | null,
  notes?: string | null,
};

export type ModelOrderConditionInput = {
  orderDate?: ModelStringInput | null,
  total?: ModelIntInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
  userOrdersId?: ModelIDInput | null,
};

export type UpdateOrderInput = {
  id: string,
  orderDate?: string | null,
  total?: number | null,
  orderDetails?: OrderDetailsInput | null,
  userOrdersId?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
  userCategoriesId?: ModelIDInput | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  price?: ModelIntInput | null,
  image?: ModelStringInput | null,
  ingredients?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
  categoryProductsId?: ModelIDInput | null,
  userProductsId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  authToken?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  profilePictureUrl?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  address?: ModelStringInput | null,
  telephone?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  orderDate?: ModelStringInput | null,
  total?: ModelIntInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
  userOrdersId?: ModelIDInput | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionIntInput | null,
  image?: ModelSubscriptionStringInput | null,
  ingredients?: ModelSubscriptionStringInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  authToken?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  profilePictureUrl?: ModelSubscriptionStringInput | null,
  dateOfBirth?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  telephone?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  orderDate?: ModelSubscriptionStringInput | null,
  total?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title?: string | null,
        price?: number | null,
        image?: string | null,
        ingredients?: Array< string | null > | null,
        quantity?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        userProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCategoriesId?: string | null,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title?: string | null,
        price?: number | null,
        image?: string | null,
        ingredients?: Array< string | null > | null,
        quantity?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        userProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCategoriesId?: string | null,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title?: string | null,
        price?: number | null,
        image?: string | null,
        ingredients?: Array< string | null > | null,
        quantity?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        userProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCategoriesId?: string | null,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    title?: string | null,
    price?: number | null,
    image?: string | null,
    ingredients?: Array< string | null > | null,
    quantity?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
    userProductsId?: string | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    title?: string | null,
    price?: number | null,
    image?: string | null,
    ingredients?: Array< string | null > | null,
    quantity?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
    userProductsId?: string | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    title?: string | null,
    price?: number | null,
    image?: string | null,
    ingredients?: Array< string | null > | null,
    quantity?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
    userProductsId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    authToken?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    profilePictureUrl?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    address?: string | null,
    telephone?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        orderDate?: string | null,
        total?: number | null,
        createdAt: string,
        updatedAt: string,
        userOrdersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title?: string | null,
        price?: number | null,
        image?: string | null,
        ingredients?: Array< string | null > | null,
        quantity?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        userProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    authToken?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    profilePictureUrl?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    address?: string | null,
    telephone?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        orderDate?: string | null,
        total?: number | null,
        createdAt: string,
        updatedAt: string,
        userOrdersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title?: string | null,
        price?: number | null,
        image?: string | null,
        ingredients?: Array< string | null > | null,
        quantity?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        userProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    authToken?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    profilePictureUrl?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    address?: string | null,
    telephone?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        orderDate?: string | null,
        total?: number | null,
        createdAt: string,
        updatedAt: string,
        userOrdersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title?: string | null,
        price?: number | null,
        image?: string | null,
        ingredients?: Array< string | null > | null,
        quantity?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        userProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    orderDate?: string | null,
    total?: number | null,
    orderDetails?:  {
      __typename: "OrderDetails",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      address?: string | null,
      city?: string | null,
      notes?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userOrdersId?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    orderDate?: string | null,
    total?: number | null,
    orderDetails?:  {
      __typename: "OrderDetails",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      address?: string | null,
      city?: string | null,
      notes?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userOrdersId?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    orderDate?: string | null,
    total?: number | null,
    orderDetails?:  {
      __typename: "OrderDetails",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      address?: string | null,
      city?: string | null,
      notes?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userOrdersId?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title?: string | null,
        price?: number | null,
        image?: string | null,
        ingredients?: Array< string | null > | null,
        quantity?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        userProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCategoriesId?: string | null,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userCategoriesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    title?: string | null,
    price?: number | null,
    image?: string | null,
    ingredients?: Array< string | null > | null,
    quantity?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
    userProductsId?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      title?: string | null,
      price?: number | null,
      image?: string | null,
      ingredients?: Array< string | null > | null,
      quantity?: number | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      categoryProductsId?: string | null,
      userProductsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    authToken?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    profilePictureUrl?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    address?: string | null,
    telephone?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        orderDate?: string | null,
        total?: number | null,
        createdAt: string,
        updatedAt: string,
        userOrdersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title?: string | null,
        price?: number | null,
        image?: string | null,
        ingredients?: Array< string | null > | null,
        quantity?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        userProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      authToken?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      profilePictureUrl?: string | null,
      dateOfBirth?: string | null,
      gender?: string | null,
      address?: string | null,
      telephone?: string | null,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    orderDate?: string | null,
    total?: number | null,
    orderDetails?:  {
      __typename: "OrderDetails",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      address?: string | null,
      city?: string | null,
      notes?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userOrdersId?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      orderDate?: string | null,
      total?: number | null,
      orderDetails?:  {
        __typename: "OrderDetails",
        firstName?: string | null,
        lastName?: string | null,
        email?: string | null,
        address?: string | null,
        city?: string | null,
        notes?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOrdersId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title?: string | null,
        price?: number | null,
        image?: string | null,
        ingredients?: Array< string | null > | null,
        quantity?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        userProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCategoriesId?: string | null,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title?: string | null,
        price?: number | null,
        image?: string | null,
        ingredients?: Array< string | null > | null,
        quantity?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        userProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCategoriesId?: string | null,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title?: string | null,
        price?: number | null,
        image?: string | null,
        ingredients?: Array< string | null > | null,
        quantity?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        userProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCategoriesId?: string | null,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    title?: string | null,
    price?: number | null,
    image?: string | null,
    ingredients?: Array< string | null > | null,
    quantity?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
    userProductsId?: string | null,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    title?: string | null,
    price?: number | null,
    image?: string | null,
    ingredients?: Array< string | null > | null,
    quantity?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
    userProductsId?: string | null,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    title?: string | null,
    price?: number | null,
    image?: string | null,
    ingredients?: Array< string | null > | null,
    quantity?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
    userProductsId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    authToken?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    profilePictureUrl?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    address?: string | null,
    telephone?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        orderDate?: string | null,
        total?: number | null,
        createdAt: string,
        updatedAt: string,
        userOrdersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title?: string | null,
        price?: number | null,
        image?: string | null,
        ingredients?: Array< string | null > | null,
        quantity?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        userProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    authToken?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    profilePictureUrl?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    address?: string | null,
    telephone?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        orderDate?: string | null,
        total?: number | null,
        createdAt: string,
        updatedAt: string,
        userOrdersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title?: string | null,
        price?: number | null,
        image?: string | null,
        ingredients?: Array< string | null > | null,
        quantity?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        userProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    authToken?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    profilePictureUrl?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    address?: string | null,
    telephone?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        orderDate?: string | null,
        total?: number | null,
        createdAt: string,
        updatedAt: string,
        userOrdersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title?: string | null,
        price?: number | null,
        image?: string | null,
        ingredients?: Array< string | null > | null,
        quantity?: number | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        userProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        userCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    orderDate?: string | null,
    total?: number | null,
    orderDetails?:  {
      __typename: "OrderDetails",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      address?: string | null,
      city?: string | null,
      notes?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userOrdersId?: string | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    orderDate?: string | null,
    total?: number | null,
    orderDetails?:  {
      __typename: "OrderDetails",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      address?: string | null,
      city?: string | null,
      notes?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userOrdersId?: string | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    orderDate?: string | null,
    total?: number | null,
    orderDetails?:  {
      __typename: "OrderDetails",
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      address?: string | null,
      city?: string | null,
      notes?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userOrdersId?: string | null,
  } | null,
};
