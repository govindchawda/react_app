import React from 'react'
import { Link } from 'react-router-dom'
export default function HomeLogo() {
  return (
    <>
    <nav> 
        <div className="container">

       <div className="cont">
       <Link to=""><h1>Logo</h1></Link>
        <ul>
            <li><Link to="/Banner">Home</Link></li>
            <li><Link to="/Add">Add User</Link></li>
        </ul>
       </div>
        </div>
    </nav>
    </>
  )
}
