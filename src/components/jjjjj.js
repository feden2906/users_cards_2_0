import React, {Component} from 'react';
import './Users.css'
import TakeDataFromAPI from "../services/TakeDataFromAPI";
import {Route, withRouter} from "react-router-dom";
import Loading from "../services/loading/Loading";
import User from "../user/User";
import ChosenUser from "../chosen-user/ChosenUser";


class Users extends Component {
  state = {users: null, chosenUser: null}

  componentDidMount() {
    const {match: {url}} = this.props
    TakeDataFromAPI(url)
        .then(users => this.setState({users}))
  }

  chosenUser = (chosenUser) => {
    this.setState({chosenUser})
  }

  deleteUser = (id) => {
    const {users} = this.state
    console.log(users)
    const {history} = this.props

    history.push('/Users')

    // this.setState({users})
  }

  render() {

    const {match: {url}} = this.props

    const {users} = this.state
    if (users) {
      return (
          <div className='users-wrapper'>
            <h2 className='text-users'>Users</h2>
            <div className='all-and-chosen'>
              <div className='all-users'>
                <Route path={url + '/:id'} render={(props) => {
                  const {match: {params: {id},url}} = props
                  return <ChosenUser key={id} url={url} deleteUser={this.deleteUser}/>
                {users.map(value => <User user={value} key={value.id} chosenUser={this.chosenUser}/>)}
              </div>
              <div className='w50'>
                }}
                />
              </div>
            </div>
          </div>
      );
    }
    else
    {
      return (
          <div className='users-wrapper'>
            <h2 className='text-users'>Users</h2>
            <Loading/>
          </div>
      )
    }

  }
}

export default withRouter(Users);
import React, {Component} from 'react';
import './Users.css'
import TakeDataFromAPI from "../services/TakeDataFromAPI";
import {Route, withRouter} from "react-router-dom";

    TakeDataFromAPI(url)
        .then(users => this.setState({users}))
  }


            </div>
          </div>
                {users.map(value => <User user={value} key={value.id} chosenUser={this.chosenUser}/>)}
      );
    }
    else
    {
      return (
          <div className='users-wrapper'>
            <h2 className='text-users'>Users</h2>
            <Loading/>
          </div>
      )
    }

  }
class Users extends Component {
  state = {users: null, chosenUser: null}

            <h2 className='text-users'>Users</h2>
            <div className='all-and-chosen'>
              <div className='all-users'>
              </div>
              <div className='w50'>
                <Route path={url + '/:id'} render={(props) => {
  componentDidMount() {
    const {match: {url}} = this.props
    this.setState({chosenUser})
  }
import Loading from "../services/loading/Loading";
  chosenUser = (chosenUser) => {
import User from "../user/User";
import ChosenUser from "../chosen-user/ChosenUser";

    const {users} = this.state
    console.log(users)
    const {history} = this.props

    history.push('/Users')

  deleteUser = (id) => {
  }

  render() {

    const {match: {url}} = this.props

    const {users} = this.state
    if (users) {
      return (
          <div className='users-wrapper'>
    // this.setState({users})
                  const {match: {params: {id},url}} = props
                  return <ChosenUser key={id} url={url} deleteUser={this.deleteUser}/>
                }}
                />
              </div>
}

export default withRouter(Users);