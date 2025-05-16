import React from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate(); 

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
            navigate('/login');
        })
    }
  return (
    <button
      className='inline-block px-6 py-2 mx-1 text-orange-600 hover:bg-orange-100 rounded-full transition-colors duration-200'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn