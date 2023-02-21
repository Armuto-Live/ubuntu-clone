import React from "react";
import { Box, Grid, Stack, styled, Typography,Link } from "@mui/material";
import "../Global/styleGlobal.css";

const StripGlobal = styled(Box)`
  padding: 4% 0;
`;
const StripContainer = styled(Grid)`
`;

function Strip() {
  return (
    <StripGlobal>
      <StripContainer container className="row">
        <Grid item xs={7}>
          <Typography variant="h6" component="h2">Open source security</Typography>
          <Typography variant="h6" >More than Linux.
            <Link href="https://ubuntu.com/security/certifications">
            Security and compliance {' '}
            </Link>
            {' '} for the full stack.
          </Typography>
          <Typography variant="body2">
      Secure your open source apps. Patch the full stack, from kernel to library and applications, for CVE compliance. Governments and auditors certify Ubuntu for FedRAMP, FISMA and HITECH.
    </Typography>
        </Grid>
      </StripContainer>
    </StripGlobal>
  );
}   

export default Strip;
