import React from "react";
import FooterMobile from "./mobile/FooterMobile";
import FooterDesktop from "./desktop/FooterDesktop";
import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";

function Footer() {
  const theme = useTheme();
  const points=useMediaQuery(theme.breakpoints.down('md'));
  return <>
    {points ? <FooterMobile/> : <FooterDesktop/>}
  </>;
}

export default Footer;
