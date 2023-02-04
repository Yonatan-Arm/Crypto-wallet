import React from 'react'
import loginSrc from '../assets/imgs/login-page.jpg'

export default function LoginPage() {
  return (
    <div className='login-page flex column'>
        <img src={loginSrc} alt="login-img" />
        <span>User Login</span>
        <form action="login" className='flex column align-center'>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button>Login</button>
        </form>

    </div>
  )
}
