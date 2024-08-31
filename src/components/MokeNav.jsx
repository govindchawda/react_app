import React from 'react'
import { Link } from 'react-router-dom'

export default function MokeNav() {
  return (
    <nav>
        <div className="container"> 
            <div className="cont">
                <Link to="/"><h1>Logo</h1></Link>
                <ul>
                    <li><Link to="/BNr">Home</Link></li>
                    <li><Link to="/AddMokeUser">Add User</Link></li>
                    <li><Link to="/ShowUser">Show User</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
