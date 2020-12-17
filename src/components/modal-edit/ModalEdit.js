import React, {Component} from 'react';
import './ModalEdit.css'

class ModalEdit extends Component {
  render() {
    const {modalSaveClose, chosenUser} = this.props
    console.log(chosenUser)
    return (
        <div className='modal-wrapper'>
            <div className='modal-form'>
              <h2><b>Edit form</b></h2>
              <span><b></b></span>
              <div className='modal-btn-wrapper'>
              <button onClick={()=> modalSaveClose('save')} className='modal-btn'>Save</button>
              <button onClick={()=> modalSaveClose()} className='modal-btn'>Close</button>
              </div>
            </div>
        </div>
    );
  }
}

export default ModalEdit;