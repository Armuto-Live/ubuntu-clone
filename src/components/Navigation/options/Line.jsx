import React from 'react'
import { Box,styled } from '@mui/material'

const CustomLine=styled('hr')((theme)=>({
    border:"1px solid #ECECEC",
}))
function Line() {
  return (
    <CustomLine/>
  )
}

export default Line