import React, { useState } from 'react'
import { Box,styled,Link } from '@mui/material'

const ListItem= styled("li")((theme)=>({
}))
function UnorderList(props) {

  return (
    <Box>
        <ListItem> <Link underline='hover'>{props.list}</Link> </ListItem>
    </Box>
  )
}

export default UnorderList