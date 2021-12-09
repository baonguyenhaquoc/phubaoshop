import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userActions";
export default function Navbar() {
  const cartreducer = useSelector((state) => state.cartReducer);

  const { cartItems } = cartreducer;

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const dispatch=useDispatch()

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="/">
          PHUBAO SHOP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            {currentUser ? (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {currentUser.name}]
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="/profile">
                      Trang cá nhân
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/orders">
                      Đơn hàng 
                    </a>
                  </li>
                  <li onClick={()=>{dispatch(logoutUser())}}> 
                    <a className="dropdown-item" >
                      Đăng xuất
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Đăng nhập
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link " href="/cart">
                <i className="fas fa-shopping-cart"></i> {cartItems.length}
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  )
}
