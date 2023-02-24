import React from "react";
import { Grid, styled, Box, Toolbar, Typography, Button } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "@mui/material/Link";
import CustomTypography from "../Global/CustomTypography";
const Global = styled(Box)`
  background-color: #772953;
  background-image: linear-gradient(
      to bottom left,
      rgba(119, 41, 83, 0.16) 0,
      rgba(119, 41, 83, 0.16) 49.9%,
      transparent 50%
    ),
    linear-gradient(
      to bottom right,
      rgba(228, 228, 228, 0.5) 0,
      rgba(228, 228, 228, 0.5) 49.9%,
      transparent 50%
    ),
    linear-gradient(
      to top left,
      white 0%,
      white 49.3%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(-89deg, #e95420 0%, #772953 42%, #2c001e 94%);
  display:flex;
  align-items: center;
  background-blend-mode: multiply, multiply, normal, normal;
  background-position: top right, top left, right bottom -1px, left top;
  background-repeat: no-repeat;
  background-size: 74% 99.83%, 68% 91%, 103.8% 20.26%, 100% 99.8%;
  justify-content: flex-start;
  margin: 0;
  padding-top: 4.2%;
  padding-bottom: 4.2%;
  height: 35rem;
`;

const GridContainer = styled(Grid)((theme) => ({
  paddingLeft: "24px",
  paddingRight: "24px",
}));
function TakeOver() {
  return (
    <>
      <Global>
        <GridContainer container justifyContent="center">
          <Grid item xs={12} lg={9}>
            <Grid container color="lightcyan" justifyContent="space-between">
              <Grid item lg={8}>
                <Box>
                  <CustomTypography
                    variant="h3"
                    colordefault="true"
                    text="Cloud Pricing Report 2022"
                  />
                  <CustomTypography
                    variant="h5"
                    colordefault="true"
                    text="Understand the impact of cloud pricing on cloud infrastructure choices"
                  ></CustomTypography>
                  <Button
                    variant="contained"
                    colordefault="true"
                    color="success"
                    sx={{ textTransform: "none" }}
                  >
                    Download free report
                  </Button>
                </Box>
              </Grid>
              <Grid item lg={3} sx={{display:{xs:"none",lg:"block"}}}>
                <Box sx={{ width: "200px" }}>
                  <img src="https://assets.ubuntu.com/v1/a0f23d1b-Savings.svg" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </GridContainer>
      </Global>
    </>
  );
}

export default TakeOver;
