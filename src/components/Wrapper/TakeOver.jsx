import React from "react";
import { Grid, styled, Box, Stack, Typography, Button } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "@mui/material/Link";
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
  color: #fff;
  align-items: center;
  background-blend-mode: multiply, multiply, normal, normal;
  background-position: top right, top left, right bottom -1px, left top;
  background-repeat: no-repeat;
  background-size: 74% 99.83%, 68% 91%, 103.8% 20.26%, 100% 99.8%;
  justify-content: flex-start;
  margin: 0;
  padding-top: 4.2%;
  padding-bottom: 4.2%;
`;
const Container = styled(Stack)`
  margin: 0 auto;
  max-width: 76%;
  padding-left: 27px;
  padding-right: 27px;
  height: 27rem;
  display: flex;
  justify-content: center;
  align-item: center;
`;

const ImageContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-item: center;
`;

function TakeOver() {
  return (
    <>
      <Global>
        <Container>
          <Grid container alignContent="center" height="243.5px">
            <Grid item xs={11} sm={7} fontSize="1rem">
              <Typography variant="h3" component="h1" mb="2%">
                Cloud Pricing Report 2022
              </Typography>
              <Typography variant="h6" component="p" mb="2%">
                Understand the impact of cloud pricing on cloud infrastructure
                choices
              </Typography>
              <Button
                variant="contained"
                color="success"
                sx={{ textTransform: "none", padding: "5.4px 16px" }}
              >
                <Link>
                  <Typography variant="body1" color="white">
                    Download free report
                  </Typography>
                </Link>
              </Button>
            </Grid>
            <Grid item xs={5} sx={{ display: { xs: "none", lg: "block" } }}>
              <ImageContainer>
                <ImageListItem sx={{ width: "200px", height: "244px" }}>
                  <img src="https://assets.ubuntu.com/v1/a0f23d1b-Savings.svg"></img>
                </ImageListItem>
              </ImageContainer>
            </Grid>
          </Grid>
        </Container>
      </Global>
    </>
  );
}

export default TakeOver;
