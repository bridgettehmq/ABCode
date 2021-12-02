import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Login from "./pages/Login";
import NewPage from "./pages/NewPage";
import ProtectedPageExample from "./pages/ProtectedPageExample";
import SignUp from "./pages/SignUp";
import { client } from "./util/apolloClient";
import { AuthProvider } from "./util/auth";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/info">
              <Info />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            {/* Use PrivateRoute for pages that should only be accessible to a
            user that has logged in.*/}
            <PrivateRoute path="/protected">
              <ProtectedPageExample />
            </PrivateRoute>
            {/* For development purposes, I have the route below as Route and not PrivateRoute, 
            but it will need to be changed once our back end connects */}
            <Route path="/newpage">
              <NewPage />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
