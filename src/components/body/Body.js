import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "../home/Home";
import Users from "../users/Users";
import Announcements from "../announcements/Announcements";

class Body extends Component {
  render() {

    return (
        <div>
          <Switch>
            <Route path={'/Home'} component={Home}/>)}
            <Route path={'/Users'} component={Users}/>)}
            <Route path={'/Announcements'} component={Announcements}/>)}
          </Switch>
        </div>
    );
  }
}

export default withRouter(Body);