import React from "react";
import CustomTypography from "../Global/CustomTypography";
import { Grid, styled, Box, Stack, Typography, Button } from "@mui/material";
import CustomBottom from "../Global/CustomBottom";
import CustomLink from "../Global/CustomLink";
import Link from "@mui/material/Link";

const GridContianer = styled(Grid)((theme) => ({
  paddingBottom: "64px",
  paddingLeft: "24px",
  paddingRight: "24px",
}));

function LatestNew() {
  return (
    <GridContianer container justifyContent="center">
      <Grid item lg={9}>
        <Grid container justifyContent="space-between">
          <Grid item lg={12}>
            <CustomTypography variant="h4" text="Latest news from our blog >" />
          </Grid>
          <Grid item lg={12}>
            <Grid container>
              <Grid item container lg={9} flexDirection="row">
                <Grid item lg={4}>
                  <CustomTypography text="24 February 2023" />
                  <Link fontSize="1.2rem">Harnessing the potential of 5G with Kubernetes</Link>
                </Grid>
                <Grid item lg={4}>
                  <CustomTypography text="24 February 2023" />
                  <Link fontSize="1.2rem">What is real-time Linux? Part I</Link>
                </Grid>
                <Grid item lg={3}>
                  <CustomTypography text="24 February 2023" />
                  <Link fontSize="1.2rem">Closed loop architecture and persistent volumes for network
                    functions – Highlights in OSM release THIRTEEN</Link>
                </Grid>
                <hr/>
              </Grid>
              <Grid item lg={3}>
                <CustomTypography text="SPOTLIGTH" />
                <Link>Elektrobit and Canonical announce EB corbos Linux – built on Ubuntu</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </GridContianer>
  );
}

export default LatestNew;
