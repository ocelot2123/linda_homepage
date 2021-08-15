/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: verifyAccount
// ====================================================

export interface verifyAccount_verifyAccount {
  __typename: "VerifyAccount";
  success: boolean | null;
  errors: any | null;
}

export interface verifyAccount {
  /**
   * Verify user account.
   * 
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount: verifyAccount_verifyAccount | null;
}

export interface verifyAccountVariables {
  token: string;
}
