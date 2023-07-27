import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
      <div className='nav'>
        <a href="#home">Home</a>
        <a href="#tvShows">TV Shows</a>
        <a href="#movies">Movies</a>
        <a href="#originals">New & Popular</a>
        <a href="#mylist">My List</a>
        <a href="#Browse">Browse by Languages</a>
      </div>
      <div className='right_nav'>
        <a href="#search"><i class="fas fa-search sub-nav-logo"></i></a>
        <a href="#bell"><i class="fas fa-bell sub-nav-logo"></i></a>
      </div>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>

  )
}

export default NavBar