import React, {Component} from 'react';
import './Users.css'
import TakeDataFromAPI from "../services/TakeDataFromAPI";
import {Route, withRouter} from "react-router-dom";
import Loading from "../services/loading/Loading";
import User from "../user/User";
import ChosenUser from "../chosen-user/ChosenUser";
import ModalEdit from "../modal-edit/ModalEdit";

class Users extends Component {
  state = {users: null, chosenUser: null, modal: ''}

  componentDidMount() {
    const {match: {url}} = this.props
    console.log(url + `/:id`)
    TakeDataFromAPI(url)
        .then(users => this.setState({users}))
  }

  chosenUser = (chosenUser) => {
    this.setState({chosenUser})
  }

  editUser = () => {
    this.setState({modal: 'show'})
  }

  modalSaveClose = (btnName, stateFromModal) => {
    if (btnName === 'save') {
      const users = this.state.users.filter(user => user.id !== stateFromModal.id)
      users.push(stateFromModal)
      this.setState({chosenUser: stateFromModal})
      users.sort((a, b) => {
        return a.id - b.id
      })
      this.setState({users})
    }
    this.setState({modal: ''})
  }
  handlerUser =(id)=>{
    const {users} = this.state;
    const chosenUser = users.find(user => user.id === +id);
    this.setState({chosenUser})
    return chosenUser
  }

  deleteUser = (id) => {
    const {users: old} = this.state
    const users = old.filter(user => user.id !== id)
    this.setState({users})
    const {history} = this.props
    history.push('/Users')
  }

  render() {

    const {match: {url}} = this.props
    const {users, chosenUser, modal} = this.state
    if (users) {
      return (
          <div className='users-wrapper'>
            <h2 className='text-users'>Users</h2>
            <div className='all-and-chosen'>
              <div className='all-users'>
                {users.map(value => <User user={value} key={value.id} chosenUser={this.chosenUser}/>)}
              </div>
              <div className='w50'>
                <Route path={url + '/:id'} render={(props) => {
                  const {match: {params: {id},url}} = props

                  return <ChosenUser key={id}
                                     id={id}
                                     deleteUser={this.deleteUser}
                                     editUser={this.editUser}
                                     handlerUser={this.handlerUser}
                  />
                }}
                />
              </div>
            </div>
            {modal && <ModalEdit modalSaveClose={this.modalSaveClose} chosenUser={chosenUser}/>}
          </div>
      );
    } else {
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





