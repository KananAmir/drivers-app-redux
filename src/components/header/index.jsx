import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss';
const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Drivers List</Link>
        <Link to='/favorite-drivers'>Favorite Drivers</Link>
      </nav>
    </header>
  )
}

export default Header