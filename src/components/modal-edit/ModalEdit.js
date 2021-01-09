import React, {Component} from 'react';
import './ModalEdit.css'

class ModalEdit extends Component {
  constructor(props) {
    super(props);
    const {chosenUser: {id, name, username, phone, email, website}} = this.props
    this.state = {id, name, username, phone, email, website}
  }

  checkName = (e) => this.setState({name: e.target.value});
  checkUserName = (e) => this.setState({username: e.target.value});
  checkPhone = (e) => this.setState({phone: e.target.value});
  checkEmail = (e) => this.setState({email: e.target.value});
  checkWebSite = (e) => this.setState({website: e.target.value});

  render() {
    const {modalSaveClose} = this.props
    const {name, username, phone, email, website} = this.state
    return (
        <div className='modal-wrapper'>
          <div className='modal-form'>
            <h2><b>Edit form</b></h2>

            <div className='modal-input-wrapper'>
              <span><b className='fs20'>Name :</b></span>
              <input onInput={this.checkName} className='modal-input' type="text" defaultValue={name}/>
            </div>

            <div className='modal-input-wrapper'>
              <span><b className='fs20'>Username :</b></span>
              <input onInput={this.checkUserName} className='modal-input' type="text" defaultValue={username}/>
            </div>

            <div className='modal-input-wrapper'>
              <span><b className='fs20'>Phone :</b></span>
              <input onInput={this.checkPhone} className='modal-input' type="text" defaultValue={phone}/>
            </div>

            <div className='modal-input-wrapper'>
              <span><b className='fs20'>Email :</b></span>
              <input onInput={this.checkEmail} className='modal-input' type="text" defaultValue={email}/>
            </div>

            <div className='modal-input-wrapper'>
              <span><b className='fs20'>Website :</b></span>
              <input onInput={this.checkWebSite} className='modal-input' type="text" defaultValue={website}/>
            </div>

            <div className='modal-btn-wrapper'>
              <button onClick={() => modalSaveClose('save', this.state)} className='modal-btn'>Save</button>
              <button onClick={() => modalSaveClose()} className='modal-btn'>Close</button>
            </div>
          </div>
        </div>
    );
  }
}

export default ModalEdit;
