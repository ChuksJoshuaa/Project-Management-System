import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Header, Footer } from "./components";
import { Home, SingleProject, NotFound } from "./pages";

//To eliminate this error -> Cache data may be lost when replacing the clients field of a Query object.
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },

        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://system-mgmt.vercel.app/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <link
              href="https://fonts.googleapis.com/css2?family=Amiri:ital@1&family=Lobster+Two&family=Cormorant+Garamond:wght@300&family=Racing+Sans+One&family=Rajdhani:wght@500&family=Roboto+Mono:wght@100&display=swap"
              rel="stylesheet"
            ></link>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<SingleProject />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
