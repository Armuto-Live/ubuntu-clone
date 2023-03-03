import React from 'react'
import NavigationMovile from './mobile/NavigationMovile';
import NavigationDesktop from './desktop/NavigationDesktop';
import { useMediaQuery,useTheme } from '@mui/material'
function Navigation() {
    const theme=useTheme();
    const breakPoint= useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
        {breakPoint? <NavigationMovile/> : <NavigationDesktop/>}
    </>
  )
}

export default Navigation