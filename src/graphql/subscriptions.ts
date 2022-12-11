/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      name
      coffee {
        items {
          id
          name
          price
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      id
      name
      coffee {
        items {
          id
          name
          price
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      id
      name
      coffee {
        items {
          id
          name
          price
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
export const onCreateCoffee = /* GraphQL */ `
  subscription OnCreateCoffee($filter: ModelSubscriptionCoffeeFilterInput) {
    onCreateCoffee(filter: $filter) {
      id
      name
      price
      createdAt
      updatedAt
      categoryCoffeeId
    }
  }
`;
export const onUpdateCoffee = /* GraphQL */ `
  subscription OnUpdateCoffee($filter: ModelSubscriptionCoffeeFilterInput) {
    onUpdateCoffee(filter: $filter) {
      id
      name
      price
      createdAt
      updatedAt
      categoryCoffeeId
    }
  }
`;
export const onDeleteCoffee = /* GraphQL */ `
  subscription OnDeleteCoffee($filter: ModelSubscriptionCoffeeFilterInput) {
    onDeleteCoffee(filter: $filter) {
      id
      name
      price
      createdAt
      updatedAt
      categoryCoffeeId
    }
  }
`;
