import React, {Component} from 'react';
import './Users.css'
import TakeDataFromAPI from "../services/TakeDataFromAPI";
import Loading from "../services/loading/Loading";
import User from "../user/User";
import ChosenUser from "../chosen-user/ChosenUser";
import ModalEdit from "../modal-edit/ModalEdit";
import Create from "../buttons/create/Create";
import ModalCreate from "../modal-create/ModalCreate";

class Users extends Component {
  state = {users: null, chosenUser: null, modal: '', modalCreate: ''}

  componentDidMount() {
    const {match: {url}} = this.props
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

  createUser = () => {
    this.setState({modalCreate: 'show'})
  }
  modalCreateClose = (btnName, newUser) => {
    if (btnName === 'create') {
      const {users} = this.state
      newUser.id = users[users.length - 1].id + 1
      users.push(newUser)
      this.setState({users})
    }
    this.setState({modalCreate: ''})
  }

  deleteUser = (id) => {
    const {users: old} = this.state
    const users = old.filter(user => user.id !== id)
    this.setState({users})
    this.setState({chosenUser: null})
    const {history} = this.props
    history.push('/Users')
  }

  render() {

    const {users, chosenUser, modal, modalCreate} = this.state

    if (users) {
      return (
          <div className='users-wrapper'>
            <h2 className='text-users'>Users</h2>
            <div className='all-and-chosen'>

              <div className='all-users'>
                {users.map(value => <User user={value} key={value.id} chosenUser={this.chosenUser}/>)}
              </div>

              <div className='w50'>
                {chosenUser &&
                <ChosenUser deleteUser={this.deleteUser} editUser={this.editUser} chosenUser={chosenUser}/>}
                <Create createUser={this.createUser}/>
              </div>

            </div>
            {modal && <ModalEdit modalSaveClose={this.modalSaveClose} chosenUser={chosenUser}/>}
            {modalCreate && <ModalCreate modalCreateClose={this.modalCreateClose}/>}
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

export default Users;





