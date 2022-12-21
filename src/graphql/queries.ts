/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      products {
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
          categoryProductsId
          userProductsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userCategoriesId
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
        products {
          nextToken
        }
        createdAt
        updatedAt
        userCategoriesId
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      price
      image
      ingredients
      quantity
      description
      createdAt
      updatedAt
      categoryProductsId
      userProductsId
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        categoryProductsId
        userProductsId
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      authToken
      firstName
      lastName
      profilePictureUrl
      dateOfBirth
      gender
      address
      telephone
      orders {
        items {
          id
          orderDate
          total
          createdAt
          updatedAt
          userOrdersId
        }
        nextToken
      }
      products {
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
          categoryProductsId
          userProductsId
        }
        nextToken
      }
      categories {
        items {
          id
          name
          createdAt
          updatedAt
          userCategoriesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        authToken
        firstName
        lastName
        profilePictureUrl
        dateOfBirth
        gender
        address
        telephone
        orders {
          nextToken
        }
        products {
          nextToken
        }
        categories {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      orderDate
      total
      orderDetails {
        firstName
        lastName
        email
        address
        city
        notes
      }
      createdAt
      updatedAt
      userOrdersId
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderDate
        total
        orderDetails {
          firstName
          lastName
          email
          address
          city
          notes
        }
        createdAt
        updatedAt
        userOrdersId
      }
      nextToken
    }
  }
`;
