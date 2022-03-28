import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { passwordChanged, userReduxData } from '../Redux/Features/userSlice'
import { changePassword } from './AfterNewPassword'
import { getCurrentUser, setCurrentUser } from './CurrentUser'
import NavBar from './NavBar'

const DuplicateProfile = () => {
  let user = getCurrentUser()

  const [newPassword , setNewPassword] = useState(user.password)

  //console.log(newPassword)
  const userState = useSelector(userReduxData);
  const dispatch = useDispatch()

  const setnewState = () => {
      alert('password changed')
    user.password = newPassword
    setCurrentUser(user)
    const newUserState =  changePassword(userState)
    dispatch(passwordChanged(newUserState))
     localStorage.setItem('userData' , JSON.stringify(newUserState))
  }
 

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

    <div className='text-center m-5'>
    <form className='mx-auto w-50 m-5'>
    <div className='card mx-auto w-50'>
    <div className='card-body'>
      <h4 className='card-title'>Change Your Password Here!!</h4>
      <h6>Current Password is {newPassword} </h6>
      <input   className="form-control "
        type="password"
        // value={props.value}
        onChange={(e) => setNewPassword(e.target.value)}/>
        <button typ='button' onClick={setnewState} className='btn btn-primary'></button>
       <small>Note: Password will be changed within 24 hours</small>
    </div>
    </div>
    </form>
    </div>
    </>
  )
}

export default DuplicateProfile