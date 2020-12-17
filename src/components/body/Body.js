import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "../home/Home";
import Users from "../users/Users";

class Body extends Component {
  render() {

    return (
        <div>
          <Switch>
            <Route path={'/home'} component={Home}/>)}
            <Route path={'/users'} component={Users}/>)}
          </Switch>
        </div>
    );
  }
}

export default withRouter(Body);
