import React from 'react'
import './Footer.css'
// import FacebookIcon from '@mui/icons-material/Facebook';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='Footer'>
        <div className='product div'>
            <ul>
                <h3>Product</h3>
                <li><a href='#'>Feature</a></li>
                <li><a href='#'>Pricing</a></li>
                <li><a href='#'>API</a></li>
            </ul>
        </div>

        <div className='company div'>        
            <ul>
                <h3>Company</h3>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Careers</a></li>
            </ul>
        </div>

        <div className='support div'>
            <ul>
                <h3>Support</h3>
                <li><a href='#'>Help Center</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Privacy</a></li>
            </ul>
        </div>

        <div className='connect div'>
            <ul>
                <h3>Connect</h3>
                <li><a href='#'><FacebookOutlinedIcon/></a></li>
                <li><a href='#'><XIcon/></a></li>
                <li><a href='#'><InstagramIcon/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer