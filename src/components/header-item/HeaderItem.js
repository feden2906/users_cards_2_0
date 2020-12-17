import React, {Component} from 'react';
import './HeaderItem.css'
import {NavLink} from "react-router-dom";

class HeaderItem extends Component {
  render() {
    const {item} = this.props
    return (
        <div className='header-item'>
          <NavLink to={item}><b>{item}</b></NavLink>
        </div>
    );
  }
}

export default HeaderItem;
