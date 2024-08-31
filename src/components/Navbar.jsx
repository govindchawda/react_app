import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">ABout</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
    </div>
  )
}
