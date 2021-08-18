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
