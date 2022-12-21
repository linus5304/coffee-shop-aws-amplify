/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
