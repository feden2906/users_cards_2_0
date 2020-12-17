import React, {Component} from 'react';
import './Create.css'

class Create extends Component {
  render() {
    const {createUser, } = this.props
    return (
        <button onClick={() => createUser()} className='btn-create'>create</button>
    );
  }
}

export default Create;