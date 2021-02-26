import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return(
    <div style={{display:"flex", justifyContent:"space-around"}}>
      <Link to="/">Home</Link>
      <Link to="/about">About us</Link>
      <Link to="/shop">Shop</Link>
    </div>
  )
}

export default Navbar