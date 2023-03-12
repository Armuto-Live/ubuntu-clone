import React from 'react'
import Typography from '@mui/material/Typography'

function CustomParraf(props) {
  return (
    <>
    <Typography color="initial" mb="1.3rem" sx={{marginBottom:"1.1rem",fontSize:"1rem"}}>
        {props.parraf}
    </Typography>
    </>
  )
}

export default CustomParraf