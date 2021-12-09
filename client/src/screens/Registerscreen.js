import React, { useState } from "react";
import {useDispatch , useSelector} from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { registerNewUser } from "../actions/userActions";

export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const dispatch = useDispatch()

  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState(""); //confirm password
  const eye = <FontAwesomeIcon icon={faEye} />;

   
    // Initialize a boolean state
    const [passwordShown, setPasswordShown] = useState(false);
        // Password toggle handler
    const togglePasswordVisiblity = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(passwordShown ? false : true);


  };



  function register(e) {
    e.preventDefault()
    const user={
        name :name,
        email:email,
        password:password,
    } 
    
    if (password==cpassword)
    {
        dispatch(registerNewUser(user))

    } else {
        alert('Mật khẩu hoặc mật khẩu nhập lại không đúng.Vui lòng nhập lại')
    }
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 card p-3" style={{ marginTop: "150px" }}>
          <div className="div">
            <h2 className="text-center m-3">Đăng ký</h2>

            <form onSubmit={register}>
              <input
                type="text"
                placeholder="Tên đăng nhập"
                className="form-control"
                required
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="example@email.com"
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
                minLength='2'
                maxLength='16'
                required
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            
              <input
              
                type={passwordShown ? "text" : "password"}
                placeholder="Nhập lại mật khẩu"
                className="form-control" 
                required
                
                value={cpassword}
                onChange={(e) => {
                  setcpassword(e.target.value);
                  
                }}
                
              />
              <div className='eye'>
              <i onClick={togglePasswordVisiblity}>{eye}</i>
              </div>
              
              

              <div className="text-end">
                <button type='submit' className="btn mt-3" >
                  ĐĂNG KÝ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
