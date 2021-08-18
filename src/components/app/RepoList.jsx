import React, { useEffect } from 'react';
import { useReducerState } from '../../state/ContextProvider';

export default function RepoList(){
  const state = useReducerState();
  let repoItems = [];
  
  if(state.repositories[0]){
    // console.log(state.repositories);
    repoItems = state.repositories.map(({ node }) => {
      console.log(node);
      return (
        <li key={node.databaseId}>
          <p>{node.name}</p>
        </li>
      );
    });
  }

  
  return <ul>{repoItems}</ul>;
}
