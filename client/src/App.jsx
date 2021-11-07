import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  const user = true; //if true go to home if not go to login or register
  return (
    <Router>
      <Switch>
        {/* this is exact path of / not /movies and all */}
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
          {/* //redirect to register if user is false */}
          <Home />
        </Route>
        <Route path="/login">
          {user ? <Login /> : <Redirect to="/" />}
          <Login />
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
          <Register />
        </Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>

            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
