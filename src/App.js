import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Signup from './components/Signup';

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route exact path="/" component={Signup}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
