import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "@material-ui/core/Container";
import Dashboard from "./pages/Dashboard";
import CreatePassword from "./pages/CreatePassword";
import PasswordPage from "./pages/PasswordPage";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    // feature/newhomepage
    //     <Home />

    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Container component="main">
          <div className="container">
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/createPassword">
              <CreatePassword />
            </Route>
            <Route exact path="/passwords/:passwordsId">
              <PasswordPage />
            </Route>
          </div>
        </Container>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
