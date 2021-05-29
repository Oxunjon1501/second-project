import React from 'react';
import {BrowserRouter,Switch,Route}  from "react-router-dom";
import Hooks from "./Hooks";
import Main from "./Main";
import Navbar from "./Navbar";
const Routing = () => {
    return (
      <BrowserRouter>
          <Navbar/>
          <Switch>
              <Route path="/" exact component={Hooks}/>
              <Route path="/main" exact component={Main}/>
          </Switch>
      </BrowserRouter>
    );
};

export default Routing;