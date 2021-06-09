import React from 'react'
import { Link } from 'react-router-dom'


const Admin = (props) => {
  return (
    <>
      <div className="main_dashboard">
        <div className="side_bar">
          <div className="list_bar">
            <br/>
            <center><h4 style={{color: "black"}}>DEV MASTER</h4></center>
            <center><hr style={{width: "16rem",height: "0.1rem",margin: "0 2rem 0 2rem"}}/></center>
            <br/>
          <ul>
            <li><a href="/" className="nav-link">Home page</a></li>
            <li><Link  to="/admin/dashboard" className="nav-link">Dashboard</Link></li>
            <li><Link  to="/admin/category" className="nav-link">categorys</Link></li>
            <li><Link  to="/admin/product" className="nav-link">products</Link></li>
            <li><Link  to="/admin/users" className="nav-link">users</Link></li>
          </ul>
          </div>
          
        </div>

        <div className="content_dashboard">
          {props.children}
        </div>
      </div>


    </>
  )
}

export default Admin
