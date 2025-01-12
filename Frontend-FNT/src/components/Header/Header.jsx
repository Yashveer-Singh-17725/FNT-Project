import React from 'react'
import Button from '@mui/material/Button';
import "./Header.css"

function Header() {

  return (
    <div className='header'>
        <div className='logo-links'>
            <img src='' class></img>

            <div className='page-rd-links'>
                <a href="#" className='home-link'>Home</a>
                <a href="#" className='db-link'>Dashboard</a>
                <a href="#" className='fi-link'>Food intake</a>
                <a href="#" className='insights-link'>Insights</a>
            </div>
        </div>

        <div className='divBtns'>
            <Button variant="Text" className='signIn'><b>Sign In</b></Button>

            <Button 
                variant="contained" 
                className="getStarted" 
                sx={{ backgroundColor: 'black', color: 'white' }}
            >   
            Get Started
            </Button>
        </div>
    </div>
  )
}

export default Header