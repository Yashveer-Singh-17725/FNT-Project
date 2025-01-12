import React from 'react'
import "./landingPage.css"
import Button from '@mui/material/Button';
import IntroImg from '../../assets/Intro-Sec-Img.jpg'

function LandingPage() {
  return (
    <div>
        <Introduction/>
        <Section2></Section2>
        <Section3></Section3>
    </div>
  )
}

function Introduction() {
    return (
      <div className='Introduction-Section'>

        <div className='Intro-info'>
            <h1>Track Your Nutrition Achieve Your Goals</h1>  
            <p><b>Take control of your health journey with our comprehensive nutrition tracking platform.Monitor calories,analyze macros,and get personalized recommendations.</b></p>
            <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', marginRight:'8em'}} className='Start-your-Journey'>
                Start your Journey
            </Button>    
        </div>

        <div className='Intro-Sec-img-Div'>
            <img src={IntroImg} className='Intro-sec-img'></img>
        </div>
      </div>
    )
  }

  function Section2() {
    return (
      <div>landingPage</div>
    )
  }

  function Section3() {
    return (
      <div>landingPage</div>
    )
  }

export default LandingPage