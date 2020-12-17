import React, {Component} from 'react';
import './Edit.css'

export class Edit extends Component {
  render() {
    const {editUser} = this.props
    return (
        <button onClick={() => editUser()} className='btn-edit'>Edit</button>
    );
  }

}

