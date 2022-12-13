/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        coffee {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCoffee = /* GraphQL */ `
  query GetCoffee($id: ID!) {
    getCoffee(id: $id) {
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
export const listCoffees = /* GraphQL */ `
  query ListCoffees(
    $filter: ModelCoffeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoffees(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
