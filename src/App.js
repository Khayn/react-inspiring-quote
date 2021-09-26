import React from "react";
import "./styles.css";

import { gql, useQuery } from "@apollo/client";


const RANDOM_QUOTE_QUERY = gql`
query getRandomQuote {
  randomQuote {
    text
    author
  }
}
`

export default function App() {
  return (
    <div className="App">
      <h1> Inspiring Quote </h1>
     <RandomQuote/>
    </div>
  );
}

function RandomQuote() {
  const { data, loading, error, refetch } = useQuery(RANDOM_QUOTE_QUERY, {
    onError: (err) => {
      console.log("error", err);
      window.lastError = err;
    },
    errorPolicy: "all"
  });

  if (loading) {
    return "Quote is loading...";
  }

  if (error) {
    return "Could not load quote!";
  }

  const {text, author} = data.randomQuote;
  
  return (
    <>
      <Quote text={text} author={author} />
      <button
        onClick={() => {
          refetch()
        }}
      >
        Get new quote!</button>
    </>
  );
}

function Quote({text, author}) {
  return (
    <blockquote>
      {text}
      <footer>
        {author}
      </footer>
    </blockquote>
  );
}