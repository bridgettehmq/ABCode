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
            {/* We should remove the /protected path eventually - this was part of boiler plate code.*/}
            <PrivateRoute path="/protected">
              <ProtectedPageExample />
            </PrivateRoute>
            <PrivateRoute path="/newpage">
              <NewPage />
            </PrivateRoute>
            {/* Will need a "my pages" path on a PrivateRoute */}
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
