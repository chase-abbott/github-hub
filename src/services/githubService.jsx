/* eslint-disable max-len */
import { gql } from 'graphql-tag';

export const RESPOSITORIES = gql`
query($login: String!){ 
  repositoryOwner(login: $login) {
    repositories(first: 70, orderBy: {direction: DESC, field: CREATED_AT}){
      edges{
        node{
          databaseId,
          name,
          url
        }
      } 
    }
  }
}
`;

export const PULL_REQUESTS = gql`
query($repository: String!, $owner: String!) { 
  repository(name: $repository, owner: $owner){
  createdAt,
  pullRequests(first: 10, orderBy: {field: CREATED_AT, direction: DESC}){
    edges {
      node {
        id,
        changedFiles,
        number,
        state
      }
    }
  }
}
}
`;
