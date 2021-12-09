import React, { useState,useEffect } from "react";
import {useDispatch , useSelector} from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { loginUser } from "../actions/userActions";
import Loader from "../components/Loader";
import Error from "../components/Error";


export default function Loginscreen() {

  const loginreducer = useSelector(state=>state.loginReducer)
  const {loading , error} = loginreducer
  
  const [email, setemail] = useState("");

  const dispatch = useDispatch()

  const [password, setpassword] = useState("");
  
  const eye = <FontAwesomeIcon icon={faEye} />;

  

  



  function login(e) {
    e.preventDefault()
    const user={
        
        email:email,
        password:password,
    } 

    dispatch(loginUser(user))

    
  }

  useEffect(() => {
    
    if (localStorage.getItem('currentUser'))
    {
      window.location.href='/'
    }
    
  }, [])

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-4 card p-3" style={{ marginTop: "150px" }}>
          <div className="div">
            <h2 className="text-center m-3">Đăng nhập</h2>

            {error && (<Error error='Invalid Credentiaks' />)}
            {loading && (<Loader />) }

            <form onSubmit={login}>
              
              <input
                type="text"
                placeholder="Email"
                className="form-control"
                required
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                className="form-control"
                required
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            
              
              

              <div className="text-end">
                <button type='submit' className="btn mt-3" >
                  ĐĂNG NHẬP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
