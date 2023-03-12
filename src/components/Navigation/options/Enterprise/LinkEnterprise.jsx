import React from 'react'
import { Link,styled,Box } from '@mui/material'

const CustomLink=styled(Link)((theme)=>({
    fontWeight:"400",
    "&::after":{
        content:'""',
    }
}))

const CustomLine=styled('hr')((theme)=>({
    marginTop:"4px",
    border:"1px solid #ECECEC",
}))

function LinkEnterprise(props) {
  return (
    <>
        <Box >
            <CustomLink underline='hover'>{props.link}</CustomLink>
            <CustomLine/>
        </Box>
    </>
  )
}

export default LinkEnterprise