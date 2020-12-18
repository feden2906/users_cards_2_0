import React, {Component} from 'react';
import './User.css'
import {withRouter} from "react-router-dom";
import Details from "../buttons/details/Details";


class User extends Component {

  render() {
    const {user, user: {id, name}, chosenUser} = this.props

    return (
        <div className='users-name-wrapper'>
          <p className='user-name'>{id}. {name}</p>
          <div className='btn-flex'>
            <Details user={user} chosenUser={chosenUser}/>
          </div>
        </div>
    );
  }
}

export default withRouter(User);