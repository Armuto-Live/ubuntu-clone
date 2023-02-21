import React from "react";
import { Box, Grid, styled, Stack, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import "../Global/styleGlobal.css";

const StripLaseGlobal = styled(Box)`
  padding: 64px 0;
  background-color: #f7f7f7;
`;
const StripLaseContainer = styled(Grid)``;



function StripLase() {
  return (
    <>
      <StripLaseGlobal>
        <StripLaseContainer className="row" container>
          <Grid item xs={8}>
            <Typography variant="h4" component="h2" paddingTop="1%" marginBottom="2%">
              Energise your engineers
            </Typography>
            <Typography variant="h6"  paddingTop="1%" marginBottom="2%">
              Better security. More packages. Newer tools. All your open source,
              from cloud to edge.
            </Typography>
            <Typography variant="h7" color="initial"  paddingTop="1%" marginBottom="2%">
              66% of experienced developers prefer Ubuntu.
            </Typography>
            <Typography variant="body1"  paddingTop="1%" marginBottom="2%">
              That’s why Ubuntu supports the fastest, biggest and most
              successful digital operations.
            </Typography>
          </Grid>
          <Grid item xs={4} >
            <Link href="https://recruit-c7ff.kxcdn.com/recruit/wp-content/uploads/2020/05/he-developer-survey-2020.pdf">
            The 2020 HackerEarth Developer Survey
          </Link>
            <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_200,h_40/https://assets.ubuntu.com/v1/934a0626-Hackerearth_logo.svg"></img>
          </Grid>
        </StripLaseContainer>
      </StripLaseGlobal>
    </>
  );
}

export default StripLase;
