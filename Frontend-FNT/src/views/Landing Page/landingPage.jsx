import React from 'react'
import "./landingPage.css"
import Button from '@mui/material/Button';
import IntroImg from '../../assets/Intro-Sec-Img.jpg'
import CalculateIcon from '@mui/icons-material/Calculate';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BarChartIcon from '@mui/icons-material/BarChart';
import { colors } from '@mui/material';

function LandingPage() {
  return (
    <div>
        <Introduction/>
        <FeatureSection/>
        <ImgSection/>
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

  function FeatureSection() {
    return (
      <div className='feature-section'>

        <div className='FS-heading-Tagline'>
          <h1>Everything you need to track your nutrition</h1>
          <p>Comprehensive tools and insights to help you maintain a healthy lifestyle.</p>
        </div>

        <div className='FS-features'>
          <div className='feature feature1'>
            <div className='iconDiv'>
              <CalculateIcon style={{color:"white"}}></CalculateIcon>
            </div>
            <h1>Calorie Calculator</h1>
            <p>Calculate your daily caloric needs based on your goals, activity level, and body composition.</p>
          </div>

          <div className='feature feature2'>
            <div className='iconDiv'>
              <RestaurantIcon style={{color:"white"}}></RestaurantIcon>
            </div>
            <h1>Food Tracking</h1>
            <p>Log your meals and track your daily food intake with our extensive database of foods.</p>
          </div>

          <div className='feature feature3'>
            <div className='iconDiv'>
              <BarChartIcon style={{color:"white"}}></BarChartIcon>
            </div> 
            <h1>Nutrition Analysis</h1>
            <p>Visualize your macro and micro nutrient intake with detailed charts and insights.</p>
          </div>          
        </div>
      </div>
    )
  }

  function ImgSection() {
    return (
      <div className='ImgSection'>

        <div className='IS-trackAnywhere'>
          <h1>Track Anywhere</h1>
          <p>Access your nutrition data on any device</p>
        </div>

        <div className='IS-smartRecomm'>
          <h1>Smart Recommendations</h1>
          <p> Get personalized nutrition advice</p>
        </div>
        
      </div>
    )
  }

export default LandingPage