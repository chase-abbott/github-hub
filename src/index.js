import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { ContextProvider } from './state/ContextProvider';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter } from 'react-router-dom';

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


render(
  <ApolloProvider client={client}>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </ApolloProvider>
  ,
  document.getElementById('root')
);
