import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles.css';

import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from "@apollo/client";

const URL = "https://khayn-graphql-random.herokuapp.com/";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: URL }),
  queryDeduplication : false
});


ReactDOM.render(
  <React.StrictMode>

    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);