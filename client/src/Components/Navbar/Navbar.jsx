import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import decode from 'jwt-decode'

import logo from '../../Assets/logo.png'
import search from '../../Assets/search-solid.svg'
import Avatar from '../../Components/Avatar/Avatar'
import './Navbar.css'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {

  var User = useSelector((state)=>(state.currentUserReducer))
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'})
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  useEffect(()=>{
    const token = User?.token
    if(token){
      const decodedToken = decode(token)
      if((decodedToken.exp * 1000) < (new Date().getTime())){
        handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))
  },[dispatch])

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link className="nav-item nav-logo" to='/'>
        <img src={ logo } alt="logo" />
        </Link>
        <Link className="nav-item nav-btn">About</Link>
        <Link className="nav-item nav-btn">Products</Link>
        <Link className="nav-item nav-btn">For Teams</Link>
        <form>
          <input type="text" placeholder='search...'/>
          <img src={search} alt="search" className='search-icon' width="18" />
        </form>
        {
          User === null ?
          <Link to='/Auth' className='nav-item nav-links'>Login</Link>:
          <>
           <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                <Link to={`Users/${User?.result?._id}`} style={{ color: "white", textDecoration: "none" }}>
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
            </Avatar>
          <button className='nav-item nav-links' onClick={handleLogout}>Log Out</button>
          </>
        }
      </div>
    </nav>
  )
}

export default Navbar