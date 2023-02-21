import React from "react";
import { Grid, styled, Box, Stack, Typography, Button } from "@mui/material";
import Link from "@mui/material/Link";
const LatestGlobal = styled(Box)`
  padding-bottom: 64px;
`;
const LatestContainer = styled(Grid)`
  margin: 0 auto;
  max-width: 76%;
  padding-left: 27px;
  padding-right: 27px;
  height: "61px";
`;
function LatestNew() {
  return (
    <LatestGlobal>
      <LatestContainer>
        <Grid item>
          <Typography variant="h5" sx={{marginBottom:"1%"}}>
            Latest news from{" "}
            <Link href="https://ubuntu.com/blog">our blog {"<"}</Link>
          </Typography>
        </Grid>
        <Grid container>
          <Grid item md={3}>
            <Typography variant="body1" component="p">
              19 February 2023
            </Typography>
            <Link href="https://ubuntu.com/blog/open-source-security-with-ubuntu-pro">
              <Typography variant="h7">
                Cloud computing security and compliance with Ubuntu Pro
              </Typography>
            </Link>
          </Grid>
          <Grid item md={3}>
            
          <Typography variant="body1" component="p">
              19 February 2023
            </Typography>
            <Link href="https://ubuntu.com/blog/open-source-security-with-ubuntu-pro">
              <Typography variant="h7">
                Air gapped network: FIPS 140 compliance with Ubuntu
              </Typography>
            </Link>
          </Grid>
          <Grid item md={3}>
            
          <Typography variant="body1" component="p">
              19 February 2023
            </Typography>
            <Link href="https://ubuntu.com/blog/open-source-security-with-ubuntu-pro">
              <Typography variant="h7">
              Course for deploying ROS applications now available in The Construct
              </Typography>
            </Link>
          </Grid>
          <Grid item md={3}>
          <Typography variant="body1" component="p">
              SPOTLIGHT
            </Typography>
            <Link href="https://ubuntu.com/blog/open-source-security-with-ubuntu-pro">
              <Typography variant="h7">
                Real-time Ubuntu is now generally available
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </LatestContainer>
    </LatestGlobal>
  );
}

export default LatestNew;
