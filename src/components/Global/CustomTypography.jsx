import React from 'react'
import {styled} from '@mui/material'
import Typography from '@mui/material/Typography'

const CustomText=styled(Typography)((theme)=>({
    fontWeight:"100",
    marginTop:"1rem",
    marginBottom:"1rem",
}))

function CustomTypography(props) {
    const colordefault=(props.colordefault) ? "#fff":"#000";
  return (
    <CustomText variant={props.variant} color={colordefault}>{props.text}</CustomText>
  )
}

export default CustomTypography