import React from 'react'
import NavigationMovile from './NavigationMovile';
import NavigationDesktop from './NavigationDesktop';
import { useMediaQuery } from '@mui/material'
import { useTheme } from "@mui/system";
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