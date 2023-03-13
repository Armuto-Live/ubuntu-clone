import React from "react";
import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)((theme) => ({
    padding:"6.2px 18px",
    marginBottom:"21.6px",
    borderRadius:"0"
}));

function ButtonEnterprise(props) {
  return (
    <>
      <CustomButton variant="contained" color="success" disableRipple>{props.value}</CustomButton>
    </>
  );
}

export default ButtonEnterprise;
