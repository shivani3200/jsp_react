import React from 'react'
import Dashboard from './Dashboard'

const Home = ({userList}) => {

  return (
    <div className='flex justify-center items-center h-screen'>
      
      <div className='border-1 border-gray-300 rounded-lg h-[400px] w-[600px] p-4'>
        <Dashboard userList={userList}/>
      </div>

    </div>
  )
}

export default Home
