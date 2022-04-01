import React from 'react'
import { Link } from 'react-router-dom'

const ProfileNav = () => {
  return (
    <nav  className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link to="/home/profile/userName" className='nav-link'>UserName</Link>
          </li>
          <li className='nav-item active'>
            <Link to="/home/profile/phoneNumber" className='nav-link'>Phone Number</Link>
          </li>
          <li className='nav-item active'>
            <Link to="/home/profile/password" className='nav-link'>Password</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default ProfileNav