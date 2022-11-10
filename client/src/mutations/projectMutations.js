import { gql } from "@apollo/client";

//Adding project
export const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      id
      name
      description
      status
      clientId {
        id
        name
        email
        phone
      }
    }
  }
`;
//Adding project
export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $id: ID!
    $name: String!
    $description: String!
    $status: ProjectStatusUpdate!
  ) {
    updateProject(
      id: $id
      name: $name
      description: $description
      status: $status
    ) {
      id
      name
      description
      status
      clientId {
        id
        name
        email
        phone
      }
    }
  }
`;

//Deleting project
export const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;
