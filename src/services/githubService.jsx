import { gql } from 'graphql-tag';

export const RESPOSITORIES = gql`
query($login: String!){ 
  repositoryOwner(login: $login) {
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
