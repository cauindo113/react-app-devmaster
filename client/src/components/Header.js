import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { signOut, isAuthenticated } from '../pages/WEBSITE/auth';
import { useLocation } from 'react-router-dom'
const Header = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [isLogged, setIsLogged] = useState(false)
  useEffect(() => {
    isAuthenticated() && setIsLogged(true)
  }, [pathname, isLogged])
  return (
    <>
      <div className=" _header">
        <div className="row ">
          <div className="col-sm-3">
            <div className="logo"><a href="#"><img src="images/logo.png" /></a></div>
          </div>
          <div className="col-sm-9">
            <nav className=" navbar-expand-lg navbar-light bg-black">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link last"><Link to="/" className="nav-link">Home</Link></a>
                  <a className="nav-item nav-link last"><Link to="/category" className="nav-link">Collection</Link></a>
                  <a className="nav-item nav-link last"><Link to="/product" className="nav-link">Shoes</Link></a>
                  <a className="nav-item nav-link last"><Link to="/about" className="nav-link">About</Link></a>
                  <a className="nav-item nav-link last"><Link to="/contact" className="nav-link">Contact</Link></a>

                  <a className="nav-item nav-link last" data-toggle="modal" data-target="#exampleModalCenter"><Link to="#" className="nav-link"><i className="fa fa-user-circle-o" aria-hidden="true"></i></Link></a>
                          
                  <div className="modal fade" id="exampleModalCenter"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title text-white" id="exampleModalLongTitle">Modal User</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          {!isLogged && (
                            <>
                             <a  className="modal_text " onClick={() => window.location.reload()}><Link to="/signup" style={{color: "#fff"}}><i class="fa fa-registered" aria-hidden="true"></i> Signup</Link></a>
                             <a  className="modal_text " onClick={() => window.location.reload()}><Link to="/signin" style={{color: "#fff"}}><i class="fa fa-sign-in" aria-hidden="true"></i> Signin</Link></a>
                            </>
                          )}
                        {isLogged && (
                          <>
                            <a  className="modal_text " onClick={() => signOut(()=>{
                            setIsLogged(false)
                            history.push('/')
                        })} style={{color: "#fff",cursor: "pointer"}}><i class="fa fa-sign-out" aria-hidden="true"></i> Signout</a>
                          </>
                          )}
                      
                        <a  className="modal_text " ><Link to="/admin/dashboard" style={{color: "#fff"}}><i class="fa fa-lock" aria-hidden="true"></i> Admin</Link></a>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="nav-item nav-link last" href="#"><img src="images/search_icon.png" /></a>
                  <a className="nav-item nav-link last" href="contact.html"><img src="images/shop_icon.png" /></a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header
