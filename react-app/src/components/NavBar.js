import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteCurrentUser } from './CurrentUser'
import SearchBox from './SearchBox'

const NavBar = ({ setSearch, setIsLoggedIn }) => {

  

  const logout = () => {
    setIsLoggedIn('false')
   deleteCurrentUser()
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <Link to="/home" className="navbar-brand ml-3">
        My-App
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto ">
          <li className="nav-item active">
            <Link to="/home/fav" className="nav-link">
              Favourites
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/home/profile" className="nav-link">
              Profile
            </Link>
          </li>
          <li className="nav-item active">
          {/* onClick={logout} */}
          
         
         <button type='button' className='btn btn-dark nav-link' onClick={logout}>Logout</button>
        
         
          </li>
        
        </ul>
      </div>

      <div className="text-center">
        <SearchBox setSearch={setSearch} />
      </div>
    </nav>
    
    </>
  )
}

export default NavBar