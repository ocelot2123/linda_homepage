import { gql } from '@apollo/client';

export const tokenAuthMutation = gql`
  mutation TokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      refreshToken
    }
  }
`;

export const verifyTokenMutation = gql`
  mutation verifyToken($token: String!) {
    verifyToken(token: $token) {
      payload
    }
  }
`;

export const refreshTokenMutation = gql`
  mutation refreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      payload
      token
      refreshToken
    }
  }
`;

export const meQuery = gql`
  query ME {
    me {
      firstName
      lastName
      email
      jobTitle
      location
      organizationOwners {
        edges {
          node {
            id
            name
          }
        }
      }
      organizationAdmins {
        edges {
          node {
            id
            name
          }
        }
      }
      organizationMembers {
        edges {
          node {
            id
            name
            owners {
              edges {
                node {
                  id
                }
              }
            }
            admins {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const registerAccountMutation = gql`
  mutation register(
    $email: String!
    $password1: String!
    $password2: String!
    $username: String!
    $firstName: String!
    $lastName: String!
  ) {
    register(
      email: $email
      username: $username
      password1: $password1
      password2: $password2
      firstName: $firstName
      lastName: $lastName
    ) {
      success
      errors
      refreshToken
      token
    }
  }
`;
export const activateAccountMutation = gql`
  mutation verifyAccount($token: String!) {
    verifyAccount(token: $token) {
      success
      errors
    }
  }
`;
export const updateMeMutation = gql`
  mutation updateMe(
    $firstName: String
    $lastName: String
    $jobTitle: String
    $location: String
  ) {
    updateAccount(
      firstName: $firstName
      lastName: $lastName
      jobTitle: $jobTitle
      location: $location
    ) {
      success
      errors
    }
  }
`;
