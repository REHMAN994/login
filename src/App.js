import React from "react";
import Login from "./component";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import main from "./component/result";
import result from "./component/result";
function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/Home" component={Main_Home} exact/> */}
        <Route path='/' component={Login} exact />
        <Route path='/result' component={result} exact />
        
      </Switch>
    </Router>
  );
}

export default App;
