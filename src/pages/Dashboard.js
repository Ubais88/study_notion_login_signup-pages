import React from 'react'
import { Navigate } from 'react-router-dom';

const Dashboard = ({isLoggedIn}) => {
  if(!isLoggedIn){
      return <Navigate to="/login" />
  }
  return (
    <div className='flex justify-center items-center text-white text-3xl h-full'>Welcome to Study Notion</div>
  )
}

export default Dashboard