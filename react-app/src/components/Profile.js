import React, { useEffect, useState } from 'react'
import { getCurrentUser } from './CurrentUser'
import NavBar from './NavBar'

const Profile = (props) => {
  let user = getCurrentUser()
  const [newPassword , setNewPassword] = useState(user.password)
  console.log(newPassword)
  
  useEffect(() => {
     user.password = newPassword
     console.log(user)
  }, [newPassword])

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

    {/* <div className='text-center m-5'>
    <form className='mx-auto w-50 m-5'>
    <div className='card mx-auto w-50'>
    <div className='card-body'>
      <h4 className='card-title'>Change Your Password Here!!</h4>
      <h6>Current Password is {newPassword} </h6>
      <input   className="form-control "
        type="password"
        // value={props.value}
        onChange={(e) => setNewPassword(e.target.value)}/>
       <small>Note: Password will be changed within 24 hours</small>
    </div>
    </div>
    </form>
    </div> */}
    </>
  )
}

export default Profile