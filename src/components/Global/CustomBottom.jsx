import React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material'

const StyledBottom=styled(Button)((theme)=>({
  textTransform:"none",
  color:"black",
  marginRight:"16px",
}))
function CustomBottom(props) {
  return (
    <StyledBottom variant={props.variant} color={props.color}>
    {props.texto}
    </StyledBottom>
  )
}

export default CustomBottom