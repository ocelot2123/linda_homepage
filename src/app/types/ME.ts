/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ME
// ====================================================

export interface ME_me_organizationOwners_edges_node {
  __typename: "Organization";
  /**
   * The ID of the object.
   */
  id: string;
  name: string | null;
}

export interface ME_me_organizationOwners_edges {
  __typename: "OrganizationCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ME_me_organizationOwners_edges_node;
}

export interface ME_me_organizationOwners {
  __typename: "OrganizationCountableConnection";
  edges: ME_me_organizationOwners_edges[];
}

export interface ME_me_organizationAdmins_edges_node {
  __typename: "Organization";
  /**
   * The ID of the object.
   */
  id: string;
  name: string | null;
}

export interface ME_me_organizationAdmins_edges {
  __typename: "OrganizationCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ME_me_organizationAdmins_edges_node;
}

export interface ME_me_organizationAdmins {
  __typename: "OrganizationCountableConnection";
  edges: ME_me_organizationAdmins_edges[];
}

export interface ME_me_organizationMembers_edges_node {
  __typename: "Organization";
  /**
   * The ID of the object.
   */
  id: string;
  name: string | null;
}

export interface ME_me_organizationMembers_edges {
  __typename: "OrganizationCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ME_me_organizationMembers_edges_node;
}

export interface ME_me_organizationMembers {
  __typename: "OrganizationCountableConnection";
  edges: ME_me_organizationMembers_edges[];
}

export interface ME_me {
  __typename: "UserNode";
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string | null;
  location: string | null;
  organizationOwners: ME_me_organizationOwners;
  organizationAdmins: ME_me_organizationAdmins;
  organizationMembers: ME_me_organizationMembers;
}

export interface ME {
  me: ME_me | null;
}
