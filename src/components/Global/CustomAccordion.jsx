import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function CustomAccordion(props) {

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-label="Expand"
          aria-controls="-content"
          id="-header"
        >
          <Typography variant="h5">{props.tittle}</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Button variant="contained" color="primary">
            {props.details}
          </Button>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default CustomAccordion;
