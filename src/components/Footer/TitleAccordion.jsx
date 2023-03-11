import React from 'react'
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography'

function TitleAccordion(props) {
  return (
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" color="initial">{props.title}</Typography>
    </AccordionSummary>
  )
}

export default TitleAccordion