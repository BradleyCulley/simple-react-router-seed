import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/1" component={Page1}/>
          <Route exact path="/2" component={Page2}/>
          <Redirect to="/1"/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
