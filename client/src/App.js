import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Login from "./pages/Login";
import NewPage from "./pages/NewPage";
// import MyPages from "./pages/MyPages";
import SinglePage from "./pages/SinglePage";
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
            <PrivateRoute path="/newpage">
              <NewPage />
            </PrivateRoute>
            {/* <PrivateRoute path="/mypages">
              <MyPages />
            </PrivateRoute> */}
            <PrivateRoute path="/pages/:pageId">
              <SinglePage />
            </PrivateRoute>
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
