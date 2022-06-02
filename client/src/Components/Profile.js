import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../JS/Actions/userAction'

function Profile() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user = useSelector((state)=>state.authReducer.user)
  return (
    <div style={{textAlign:"center"}}>
      <h1>WELCOME TO YOU Profile</h1>
      <h2>{user?.name }</h2>
      <button class="btn btn-danger" onClick={()=>dispatch(logout(),navigate('/Login'))}>logout</button>
  </div>
  )
}

export default Profile