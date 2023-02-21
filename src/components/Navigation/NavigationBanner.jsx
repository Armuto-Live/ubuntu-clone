import React from 'react'
import { Grid } from '@mui/material'
import Logo from '../../assets/ubuntu.svg'
import './style.css'
function NavigationBanner() {
  return (
    <Grid container className='NavigationBanner'>
      <Grid item lg={12} className='NavigationBannerLogo'>
        <a className='NavigationBannerItem'>
          <img className='NavigationBannerImg' src={Logo} alt='Logo'></img>
        </a>
      </Grid>
    </Grid>
  )
}

export default NavigationBanner