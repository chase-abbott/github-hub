/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { ApolloProvider, createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { ContextProvider } from '../../state/ContextProvider';
import { setContext } from '@apollo/client/link/context';

const key = process.env.ACCESS_TOKEN;

const link = createHttpLink({
  uri: 'https://api.github.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${key}`
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache()
});

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(
      <ApolloProvider client={client}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </ApolloProvider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
