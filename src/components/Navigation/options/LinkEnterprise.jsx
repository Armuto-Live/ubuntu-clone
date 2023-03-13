import React from 'react'
import { Link,styled,Box } from '@mui/material'
import Line from './Line'

const CustomLink=styled(Link)((theme)=>({
    paddingBottom:"4.5px",
    marginBottom:"4.5px",
    fontSize:".97rem",
    "&::after":{
        content:'""',
    }
}))


function LinkEnterprise(props) {
  const HiddenLine=(props.HiddenLine)? <div></div>:<Line/>;
  return (
    <>
        <Box >
            <CustomLink underline='hover'>{props.link} {HiddenLine} </CustomLink>
        </Box>
    </>
  )
}

export default LinkEnterprise