import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp, userReduxData } from "../Redux/Features/userSlice";
import { checkInputDataPhoneNumber } from "./checkInputData";
import LogIn from "./LogIn";
import './FormStyle.css'
const RegDuplicate = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [isValidData, setIsValidData] = useState("false");

  const userState = useSelector(userReduxData);

  const dispatch = useDispatch();

  const validate = (e) => {
    e.preventDefault();
    if (
      userInfo.name.trim() &&
      userInfo.phoneNumber.length === 10 &&
      userInfo.password.trim()
    ) {
      const check = checkInputDataPhoneNumber(userState, userInfo);
      if (check === "true") {
        alert("User Registered!!");
        setIsValidData("true");
      } else {
        dispatch(signUp([...userState, userInfo]));
        setIsValidData("true");
       
      }
    } else alert("Enter valid details");
  };
  const registered = () => setIsValidData('true')
  useEffect(() =>{
    console.log(isValidData)
  }, [isValidData])
  return (
    <>
   
      {isValidData === "false" ? (
        
        <div className="container">
          <div className="register-div">
            <h2>Register Here</h2>
              <form onSubmit={validate} className='register-form'>
                <div className="form-group">
                  
                  <input
                    type="email"
                    className="formm-control"
                    placeholder="Email"
                    value={userInfo.email}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                 
                  <input
                    type="text"
                    placeholder="Name"
                    className="formm-control"
                    value={userInfo.name}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="formm-control"
                    placeholder="Phone Number"
                    value={userInfo.phoneNumber}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, phoneNumber: e.target.value })
                    }
                  />
                  <br />
                  {/* <small className="control-small">Enter your 10 digit mobile number</small> */}
                </div>
                <div className="form-group">
                
                  
                  <input
                    type="password"
                    className="formm-control"
                    placeholder="Password"
                    value={userInfo.password}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, password: e.target.value })
                    }
                  />
                </div>
                <div >
                  <button type="submit" className="register-button">
                    Submit
                  </button>
                </div>
                <small>Already have an account? <button type="button" onClick={registered} className="login-button">Click here</button></small>
              </form>
            </div>
         
        </div>
      ) : (
        <LogIn />
      )}
    </>
  );
};

export default RegDuplicate;
