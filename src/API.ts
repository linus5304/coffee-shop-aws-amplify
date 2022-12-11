/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
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

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  coffee?: ModelCoffeeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCoffeeConnection = {
  __typename: "ModelCoffeeConnection",
  items:  Array<Coffee | null >,
  nextToken?: string | null,
};

export type Coffee = {
  __typename: "Coffee",
  id: string,
  name: string,
  price: number,
  createdAt: string,
  updatedAt: string,
  categoryCoffeeId?: string | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateCoffeeInput = {
  id?: string | null,
  name: string,
  price: number,
  categoryCoffeeId?: string | null,
};

export type ModelCoffeeConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelCoffeeConditionInput | null > | null,
  or?: Array< ModelCoffeeConditionInput | null > | null,
  not?: ModelCoffeeConditionInput | null,
  categoryCoffeeId?: ModelIDInput | null,
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

export type UpdateCoffeeInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  categoryCoffeeId?: string | null,
};

export type DeleteCoffeeInput = {
  id: string,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelCoffeeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelCoffeeFilterInput | null > | null,
  or?: Array< ModelCoffeeFilterInput | null > | null,
  not?: ModelCoffeeFilterInput | null,
  categoryCoffeeId?: ModelIDInput | null,
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

export type ModelSubscriptionCoffeeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCoffeeFilterInput | null > | null,
  or?: Array< ModelSubscriptionCoffeeFilterInput | null > | null,
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

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    coffee?:  {
      __typename: "ModelCoffeeConnection",
      items:  Array< {
        __typename: "Coffee",
        id: string,
        name: string,
        price: number,
        createdAt: string,
        updatedAt: string,
        categoryCoffeeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    coffee?:  {
      __typename: "ModelCoffeeConnection",
      items:  Array< {
        __typename: "Coffee",
        id: string,
        name: string,
        price: number,
        createdAt: string,
        updatedAt: string,
        categoryCoffeeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    coffee?:  {
      __typename: "ModelCoffeeConnection",
      items:  Array< {
        __typename: "Coffee",
        id: string,
        name: string,
        price: number,
        createdAt: string,
        updatedAt: string,
        categoryCoffeeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCoffeeMutationVariables = {
  input: CreateCoffeeInput,
  condition?: ModelCoffeeConditionInput | null,
};

export type CreateCoffeeMutation = {
  createCoffee?:  {
    __typename: "Coffee",
    id: string,
    name: string,
    price: number,
    createdAt: string,
    updatedAt: string,
    categoryCoffeeId?: string | null,
  } | null,
};

export type UpdateCoffeeMutationVariables = {
  input: UpdateCoffeeInput,
  condition?: ModelCoffeeConditionInput | null,
};

export type UpdateCoffeeMutation = {
  updateCoffee?:  {
    __typename: "Coffee",
    id: string,
    name: string,
    price: number,
    createdAt: string,
    updatedAt: string,
    categoryCoffeeId?: string | null,
  } | null,
};

export type DeleteCoffeeMutationVariables = {
  input: DeleteCoffeeInput,
  condition?: ModelCoffeeConditionInput | null,
};

export type DeleteCoffeeMutation = {
  deleteCoffee?:  {
    __typename: "Coffee",
    id: string,
    name: string,
    price: number,
    createdAt: string,
    updatedAt: string,
    categoryCoffeeId?: string | null,
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
    coffee?:  {
      __typename: "ModelCoffeeConnection",
      items:  Array< {
        __typename: "Coffee",
        id: string,
        name: string,
        price: number,
        createdAt: string,
        updatedAt: string,
        categoryCoffeeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      coffee?:  {
        __typename: "ModelCoffeeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCoffeeQueryVariables = {
  id: string,
};

export type GetCoffeeQuery = {
  getCoffee?:  {
    __typename: "Coffee",
    id: string,
    name: string,
    price: number,
    createdAt: string,
    updatedAt: string,
    categoryCoffeeId?: string | null,
  } | null,
};

export type ListCoffeesQueryVariables = {
  filter?: ModelCoffeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoffeesQuery = {
  listCoffees?:  {
    __typename: "ModelCoffeeConnection",
    items:  Array< {
      __typename: "Coffee",
      id: string,
      name: string,
      price: number,
      createdAt: string,
      updatedAt: string,
      categoryCoffeeId?: string | null,
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
    coffee?:  {
      __typename: "ModelCoffeeConnection",
      items:  Array< {
        __typename: "Coffee",
        id: string,
        name: string,
        price: number,
        createdAt: string,
        updatedAt: string,
        categoryCoffeeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    coffee?:  {
      __typename: "ModelCoffeeConnection",
      items:  Array< {
        __typename: "Coffee",
        id: string,
        name: string,
        price: number,
        createdAt: string,
        updatedAt: string,
        categoryCoffeeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    coffee?:  {
      __typename: "ModelCoffeeConnection",
      items:  Array< {
        __typename: "Coffee",
        id: string,
        name: string,
        price: number,
        createdAt: string,
        updatedAt: string,
        categoryCoffeeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCoffeeSubscriptionVariables = {
  filter?: ModelSubscriptionCoffeeFilterInput | null,
};

export type OnCreateCoffeeSubscription = {
  onCreateCoffee?:  {
    __typename: "Coffee",
    id: string,
    name: string,
    price: number,
    createdAt: string,
    updatedAt: string,
    categoryCoffeeId?: string | null,
  } | null,
};

export type OnUpdateCoffeeSubscriptionVariables = {
  filter?: ModelSubscriptionCoffeeFilterInput | null,
};

export type OnUpdateCoffeeSubscription = {
  onUpdateCoffee?:  {
    __typename: "Coffee",
    id: string,
    name: string,
    price: number,
    createdAt: string,
    updatedAt: string,
    categoryCoffeeId?: string | null,
  } | null,
};

export type OnDeleteCoffeeSubscriptionVariables = {
  filter?: ModelSubscriptionCoffeeFilterInput | null,
};

export type OnDeleteCoffeeSubscription = {
  onDeleteCoffee?:  {
    __typename: "Coffee",
    id: string,
    name: string,
    price: number,
    createdAt: string,
    updatedAt: string,
    categoryCoffeeId?: string | null,
  } | null,
};
