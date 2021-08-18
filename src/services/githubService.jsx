import { gql } from 'graphql-tag';

export const RESPOSITORIES = gql`
{ 
  repositoryOwner(login: "chase-abbott") {
    repositories(first: 70){
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
