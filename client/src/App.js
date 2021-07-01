import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Things from "./pages/Things";
import { Container } from "semantic-ui-react";
import Register from "./components/Register";
import Login from "./components/Login";
import FetchUser from "./components/FetchUser";
import ProtecedRoute from "./components/ProtectedRoute";

// anything in fetchuser will be hidden while that checkuser function is running

function App() {
  return (
    <>
      <NavBar />

      <Container>
        <FetchUser>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <ProtecedRoute exact path="/things" component={Things} />
          </Switch>
        </FetchUser>
      </Container>
    </>
  );
}

export default App;