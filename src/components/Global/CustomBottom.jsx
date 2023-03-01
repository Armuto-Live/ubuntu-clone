import React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material'

const StyledBottom=styled(Button)((theme)=>({
  display:"flex",
  justifyContent:"flex-start",
  alignItems:"flex-start",
  textTransform:"none",
  padding:"0",
  fontSize:"1.1rem",
  textAlign:"center",
}))
function CustomBottom(props) {
  return (
    <StyledBottom variant={props.variant} color={props.color}>
    {props.texto}
    </StyledBottom>
  )
}

export default CustomBottom