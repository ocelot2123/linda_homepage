/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: verifyToken
// ====================================================

export interface verifyToken_verifyToken {
  __typename: "Verify";
  payload: any | null;
}

export interface verifyToken {
  verifyToken: verifyToken_verifyToken | null;
}

export interface verifyTokenVariables {
  token: string;
}
