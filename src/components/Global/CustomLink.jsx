import React from 'react'
import { Link,styled } from '@mui/material'

const EditLink=styled(Link)((theme)=>({
    textDecoration:"none",
    fontSize:"2.1rem"
}))
function CustomLink(props) {
  return (
    <EditLink>{props.text}</EditLink>
  )
}

export default CustomLink