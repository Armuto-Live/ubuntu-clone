import React from "react";
import { Box, Grid, styled, Stack, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import "../Global/styleGlobal.css";
import CustomTypography from "../Global/CustomTypography";

const GridContainer = styled(Grid)((theme) => ({
  padding: "64px 24px",
  background: "#f7f7f7",
}));
const CustomLink=styled(Link)((theme)=>({
  textDecoration:"none",
}));

function StripLase() {
  return (
    <>
      <GridContainer container justifyContent="center">
        <Grid item lg={9}>
          <Grid container justifyContent="space-between">
            <Grid item lg={8}>
              <CustomTypography text="Energise your engineers" />
              <CustomTypography text="Better security. More packages. Newer tools. All your open source, from cloud to edge." />
              <CustomTypography text="66% of experienced developers prefer Ubuntu." />
              <CustomTypography text="That’s why Ubuntu supports the fastest, biggest and most successful digital operations." />
              <CustomLink pr=".3rem">Let’s talk open source ›</CustomLink>
              <CustomLink> Watch Ubuntu Masters in action›</CustomLink>
            </Grid>
            <Grid item lg={4} container justifyContent="center" alignItems="center" >
              <Grid container sx={{display:{xs:"none",lg:"block"}}}>
                <CustomLink>The 2020 HackerEarth Developer Survey</CustomLink>
                <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_200,h_40/https://assets.ubuntu.com/v1/934a0626-Hackerearth_logo.svg"></img>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </GridContainer>
    </>
  );
}

export default StripLase;
