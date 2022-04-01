import React  from 'react'
import {  getCurrentUser } from './CurrentUser'
import NavBar from './NavBar'

const Profile = () => {
 

  let user = getCurrentUser()
  

  return (
    <>
    <NavBar/>
    <div className='text-center'>
    <div class="card mx-auto w-50 bg-light mt-5">
  <div class="card-body">
    <h4 class="card-title mx-auto w-100">Hey {user.name}!!</h4>
    <h5 className='card-text mx-auto'>Phone Number - {user.phoneNumber}</h5>
    <h5 className='card-text mx-auto'>Email - {user.email}</h5>
  </div>
 </div>
    </div>
    </>
  )
}

export default Profile