import React, {Component} from 'react';
import './Details.css'

class Details extends Component {
  render() {
    const {chosenUser, user} = this.props
    return (
        <button onClick={() => chosenUser(user)} className='btn-details'>Details</button>
    );
  }
}

export default Details;