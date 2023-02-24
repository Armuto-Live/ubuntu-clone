import React from "react";
import { Grid, styled, Box, Stack, Typography, Button } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import CustomTypography from "../Global/CustomTypography";

const GridContainer = styled(Grid)((theme) => ({
  paddingTop: "72px",
  paddingLeft: "24px",
  paddingRight: "24px",
}));
const ImageListItems = styled(Box)((theme) => ({
  display: "flex",
  justifyContent:"center",
  flexWrap: "wrap",
}));

const Image = styled("img")`
  width: 29%;
`;
const Separator = styled("hr")`
  margin: 64px 0;
`;
function ModerEnterprise() {
  return (
    <>
      <GridContainer container justifyContent="center">
        <Grid item lg={9}>
          <Grid container justifyContent="space-between">
            <Grid item lg={6}>
              <CustomTypography
                variant="h3"
                text="Modern enterprise open source"
              />
              <CustomTypography
                variant="h5"
                text="Security, support, and managed services from the publisher of Ubuntu."
              />
              <Button
                variant="contained"
                color="success"
                sx={{ textTransform: "none" }}
              >
                Get Ubuntu Pro
              </Button>
            </Grid>
            <Grid item container lg={6} alignItems="center">
              <ImageListItems>
                <Image
                  src="https://assets.ubuntu.com/v1/83ff4203-awshp-strip-customers.png"
                />
                <Image
                  src="https://assets.ubuntu.com/v1/83ff4203-awshp-strip-customers.png"
                />
                <Image
                  src="https://assets.ubuntu.com/v1/83ff4203-awshp-strip-customers.png"
                />
                <Image
                  src="https://assets.ubuntu.com/v1/83ff4203-awshp-strip-customers.png"
                />
              </ImageListItems>
            </Grid>
          </Grid>
          <Separator />
        </Grid>
      </GridContainer>
    </>
  );
}

export default ModerEnterprise;
