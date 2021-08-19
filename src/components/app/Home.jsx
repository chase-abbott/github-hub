/* eslint-disable max-len */
import React from 'react';
import InputForm from './InputForm';
import RepoList from './RepoList';


export default function Home() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '25px' }}>
      <InputForm/>
      <RepoList/>
    </div>
  );
}
