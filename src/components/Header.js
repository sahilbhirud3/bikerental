import React, { useState } from "react";
import "../assets/css/style.css";
import "../assets/css/font-awesome.css";
import "../assets/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { user } from "../pages/Login";
import { useNavigate } from "react-router-dom";


// import { useHistory } from "react-router-dom";
const Header = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
//   const history = useHistory();
  const logout =  () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.clear();
       navigate("/login");
    // history.push('/');
    }
  };

  // const [isLoggedIn,setIsLoggedIn]= useState(localStorage.isLoggedIn);

  return (
    <>
   
      <header className="header-area header-sticky background-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  Bike <em> Rental</em>
                </a>

                <ul className="nav">
                  <li>
                    <Link to="/" className="">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/bikes">Fleet</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  {auth ? (
                    <>
                      <li>
                        <Link to="/mybikes">My Bikes</Link>
                      </li>
                      <li>
                        <Link to="/wishlist">Wishlist</Link>
                      </li>
                      <Link className="loginBtn" onClick={logout}>
                        Logout
                      </Link>
                    </>
                  ) : (
                    <Link className="loginBtn" to="/login">
                      Login
                    </Link>
                  )}

                  {/* {user?<><Link className='loginBtn' to='/login'>Logout</Link></>:<Link className='loginBtn' to='/login'>Login</Link>} */}
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
