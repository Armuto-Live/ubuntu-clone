import React from 'react'
import Typography from '@mui/material/Typography'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box,Link,styled } from '@mui/material';

const CustomTitle=styled(Link)((theme)=>({
    marginBottom:"18px",
    paddingBottom:"7.209px",
    "&:hover": {
        color: "#7D42B8",
    }
}))

function Title(props) {
  return (
    <>
    <Box display="flex" alignItems="center">
        <CustomTitle variant={props.variant} underline='hover' href='#' target="_blank">
            {props.title}{" >"}
        </CustomTitle>
    </Box>
    </>
  )
}

export default Title