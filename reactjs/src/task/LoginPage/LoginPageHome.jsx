import React from 'react'
import LoginPageCard from './LoginPageCard'

const LoginPageHome = () => {
      let usersList = [
        {
            username:"shivani",
            password:"shivani@!23"
        }
    ]
  return (
    <div>
      <h1>Home Page</h1>
      <LoginPageCard usersList={usersList}/>
    </div>
  )
}

export default LoginPageHome