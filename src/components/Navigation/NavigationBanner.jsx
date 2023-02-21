import React from 'react'
import Logo from '../../assets/ubuntu.svg'
import './style.css'
function NavigationBanner() {
  return (
    <div className='NavigationBanner'>
      <div className='NavigationBannerLogo'>
        <a className='NavigationBannerItem'>
          <img className='NavigationBannerImg' src={Logo} alt='Logo'></img>
        </a>
      </div>
    </div>
  )
}

export default NavigationBanner