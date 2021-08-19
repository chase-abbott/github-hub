/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { PULL_REQUESTS } from '../../services/githubService';
import { useReducerState } from '../../state/ContextProvider';

export default function RepoDetail() {
  const state = useReducerState();
  const { repoName } = useParams();
  const { data, loading, error } = useQuery(PULL_REQUESTS, {
    variables: { repository: repoName, owner: state.inputValue }
  });
  useEffect(() => {
    console.log(data);
  }, [data]);

  if(loading) return <h1> Loading... </h1>;
  if(error) return <h1> Error </h1>;


  const mungedData = data.repository.pullRequests.edges;
  const pullRequestItems = mungedData.map(({ node }) => {
    console.log(node);
    return (
      <li key={node.id} style={{ border: '1px solid black', borderRadius: '10px', maxWidth: '200px', margin: '10px', padding: '5px' }}>
        <p> Pull Request #{node.number}</p>
        <p>Files Changed: {node.changedFiles} </p>
        <p>State: {node.state} </p> 
      </li>
    );
  });

  return (
    <div>
      <h1> {repoName} </h1>
      <ul style={{ listStyle: 'none' }}>{pullRequestItems}</ul>
    </div>
  );
}
