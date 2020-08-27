import React from "react";
import { Switch, Route } from "react-router-dom";
import Hoc from "./Hoc";
import Home from "./Containers/Home/Home";
import Cart from "./Containers/Cart/Cart";

const Login = () => <h1>Hello from About</h1>;

const BaseRouter = () => {
  return (
    <Hoc>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Hoc>
  );
};

export default BaseRouter;
