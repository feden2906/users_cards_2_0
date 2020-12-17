import React, {Component} from 'react';
import './ChosenUser.css'
import Loading from "../services/loading/Loading";
import TakeDataFromAPI from "../services/TakeDataFromAPI";
import {Edit} from "../buttons/edit/Edit";
import Delete from "../buttons/delete/Delete";


class ChosenUser extends Component {
  // state = {user: null, modal: ''};

  // componentDidMount() {
  //   const {url} = this.props;
  //   console.log(url)
  //   TakeDataFromAPI(url)
  //       .then(user => this.setState({user}))
  // }

  render() {
    const {deleteUser, editUser, chosenUser} = this.props
    // const {user} = this.state

    if (chosenUser) {
      const {id, name, username, email, phone, website} = chosenUser
      return (
          <div className='chosen-user'>
            <p className='fs25'>{name}</p>
            <p className='fs14'>{username}</p>
            <hr className='hr'/>
            <p><b>Email: </b>{email}</p>
            <hr className='hr'/>
            <p><b>Phone: </b>{phone}</p>
            <hr className='hr'/>
            <p><b>Website: </b>{website}</p>
            <hr className='hr'/>
            <div className='chosen__btn_wrapper'>
              <Edit editUser={editUser}/>
              <Delete deleteUser={deleteUser} id={id}/>
            </div>
          </div>
      )
    } else {
      return (
          <div className='chosen-user'>
            <Loading/>
          </div>
      );
    }
  }
}

export default ChosenUser;