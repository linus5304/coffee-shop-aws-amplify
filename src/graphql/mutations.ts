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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
