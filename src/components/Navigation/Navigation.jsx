import React from 'react'
import NavigationMovile from './NavigationMovile';
import NavigationDesktop from './NavigationDesktop';
import { useMediaQuery,useTheme } from '@mui/material'
function Navigation() {
    const theme=useTheme();
    const breakPoint= useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <>
        {breakPoint? <NavigationMovile/> : <NavigationDesktop/>}
    </>
  )
}

export default Navigation