import React from 'react'
import './secondsection.css'
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function SecondSection() {
  return (
    <div className='second'>
      <div className='s_info'>
        <h1>New this week</h1>
        <KeyboardArrowLeftIcon/>
        <KeyboardArrowRightIcon/>
        <div className='i_info'>
          <h3>Collection</h3>
          <h5>Most popular around the world</h5>
          <Button variant='outlined'>show all</Button>
        </div>   
    </div>
    <div className='s_info'>
        <h1>New this week</h1>
        <KeyboardArrowLeftIcon/>
        <KeyboardArrowRightIcon/>
        <div className='i_info'>
          <h3>Collection</h3>
          <h5>Most popular around the world</h5>
          <Button variant='outlined'>show all</Button>
        </div>   
    </div>
    <div className='s_info'>
        <h1>New this week</h1>
        <KeyboardArrowLeftIcon/>
        <KeyboardArrowRightIcon/>
        <div className='i_info'>
          <h3>Collection</h3>
          <h5>Most popular around the world</h5>
          <Button variant='outlined'>show all</Button>
        </div>   
    </div>
    </div>
  )
}

export default SecondSection
