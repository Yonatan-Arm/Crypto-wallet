import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar flex space-between align-center justify-center'>
      <div className='logo'> Logo</div>
      <div className='links flex'>
        <Link to="/currency">currency</Link>
        <Link to="/Wallet">Wallet</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}
