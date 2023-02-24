import React from "react";
import CustomTypography from "../Global/CustomTypography";
import { Grid, styled, Box,ImageListItem } from "@mui/material";
import Link from "@mui/material/Link";

const GridContainer = styled(Grid)((theme) => ({
  paddingLeft: "24px",
  paddingRight: "24px",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
}));

function ShadowNotice() {
  return (
    <>
        <GridContainer container justifyContent="center">
          <Grid item lg={9}>
            <Grid container alignItems="center">
              <Grid item>
                <ImageListItem sx={{ width: "45px" }}>
                  <img src="https://assets.ubuntu.com/v1/5a869d54-centos.png"></img>
                </ImageListItem>
              </Grid>
              <Grid item sm={10}>
                <CustomTypography
                  variant="h6"
                  text="CentOS users, 6 things to know when considering a migration to Ubuntu LTS"
                />
              </Grid>
            </Grid>
          </Grid>
        </GridContainer>
    </>
  );
}

export default ShadowNotice;
