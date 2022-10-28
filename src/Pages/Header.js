import React from 'react'
import './Header.css';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <div className='header'>
      <img className="h_icon" src={require('../images/airbnb_icon.png')} alt="icon"/>
      <div className='h_right'>
        <p>Become a host</p>
        <LanguageSharpIcon/>
        <MenuIcon/>
        <AccountCircleSharpIcon/>
        </div>
    </div>
  )
}

export default Header
