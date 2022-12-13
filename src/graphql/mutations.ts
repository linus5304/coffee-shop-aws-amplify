/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      coffee {
        items {
          id
          title
          price
          image
          ingredients
          quantity
          description
          createdAt
          updatedAt
          categoryCoffeeId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      coffee {
        items {
          id
          title
          price
          image
          ingredients
          quantity
          description
          createdAt
          updatedAt
          categoryCoffeeId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      coffee {
        items {
          id
          title
          price
          image
          ingredients
          quantity
          description
          createdAt
          updatedAt
          categoryCoffeeId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCoffee = /* GraphQL */ `
  mutation CreateCoffee(
    $input: CreateCoffeeInput!
    $condition: ModelCoffeeConditionInput
  ) {
    createCoffee(input: $input, condition: $condition) {
      id
      title
      price
      image
      ingredients
      quantity
      description
      createdAt
      updatedAt
      categoryCoffeeId
    }
  }
`;
export const updateCoffee = /* GraphQL */ `
  mutation UpdateCoffee(
    $input: UpdateCoffeeInput!
    $condition: ModelCoffeeConditionInput
  ) {
    updateCoffee(input: $input, condition: $condition) {
      id
      title
      price
      image
      ingredients
      quantity
      description
      createdAt
      updatedAt
      categoryCoffeeId
    }
  }
`;
export const deleteCoffee = /* GraphQL */ `
  mutation DeleteCoffee(
    $input: DeleteCoffeeInput!
    $condition: ModelCoffeeConditionInput
  ) {
    deleteCoffee(input: $input, condition: $condition) {
      id
      title
      price
      image
      ingredients
      quantity
      description
      createdAt
      updatedAt
      categoryCoffeeId
    }
  }
`;
