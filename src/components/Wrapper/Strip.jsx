import React from "react";
import CustomTypography from "../Global/CustomTypography";
import CustomLink from "../Global/CustomLink";
import { PListItem } from "./index";
import { Box, Grid, styled, Typography, Link } from "@mui/material";
import "../Global/styleGlobal.css";

const GridContainer = styled(Grid)((theme) => ({
  padding: "72px 24px",
}));

function Strip() {
  return (
    <GridContainer container justifyContent="center">
      <Grid item lg={9}>
        <Grid container justifyContent="space-between">
          <Grid item lg={12}>
            <CustomTypography text="Open source security" />
          </Grid>
          <Grid item lg={6}>
            <CustomTypography
              variant="body1"
              text="Secure your open source apps. Patch the full stack, from kernel to library and applications, for CVE compliance. Governments and auditors certify Ubuntu for FedRAMP, FISMA and HITECH."
            />
          </Grid>
          <Grid item container lg={12} justifyContent="space-between">
            <Grid item lg={6}>
              <PListItem text="10 year security maintenance and CVE Patching" />
              <PListItem text="10 year security maintenance and CVE Patching" />
              <PListItem text="10 year security maintenance and CVE Patching" />
              <PListItem text="10 year security maintenance and CVE Patching" />
            </Grid>
            <Grid item lg={6}>
              <PListItem text="10 year security maintenance and CVE Patching" />
              <PListItem text="10 year security maintenance and CVE Patching" />
              <PListItem text="10 year security maintenance and CVE Patching" />
              <PListItem text="10 year security maintenance and CVE Patching" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </GridContainer>
  );
}

export default Strip;
