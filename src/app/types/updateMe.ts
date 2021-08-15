/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateMe
// ====================================================

export interface updateMe_updateAccount {
  __typename: "UpdateAccount";
  success: boolean | null;
  errors: any | null;
}

export interface updateMe {
  /**
   * Update user model fields, defined on settings.
   * 
   * User must be verified.
   */
  updateAccount: updateMe_updateAccount | null;
}

export interface updateMeVariables {
  firstName?: string | null;
  lastName?: string | null;
  jobTitle?: string | null;
  location?: string | null;
}
