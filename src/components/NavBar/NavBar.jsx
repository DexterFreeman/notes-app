import React from 'react'
import './NavBar.scss'
const NavBar = (props) => {
    const {handleReset} = props
  return (
    <div className='nav-bar'>
      <h1 className="nav-bar__title">My Todos</h1>
      <button className='nav-bar__btn' onClick={handleReset}>Reset</button>
      </div>
  )
}

export default NavBar