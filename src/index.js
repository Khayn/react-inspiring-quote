import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles.css';

import { ApolloClient, InMemoryCache, HttpLink, gql, ApolloProvider } from "@apollo/client";

const URL = "https://khayn-graphql-random.herokuapp.com/";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({uri: URL})
});

const RANDOM_QUOTE_QUERY = gql`
query getRandomQuote {
  randomQuote {
    text
    author
  }
}
`

client.query({query : RANDOM_QUOTE_QUERY}).then(result => console.log("Query result: " + result.data));


ReactDOM.render(
  <React.StrictMode>

    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);