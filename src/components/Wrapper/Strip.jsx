import React from "react";
import { Box, Grid, Stack, styled, Typography, Link, Button } from "@mui/material";
import "../Global/styleGlobal.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const StripGlobal = styled(Box)``;
const StripContainer = styled(Grid)`
  width: 100vw;
`;

function Strip() {
  return (
    <StripGlobal className="p-strip">
      <StripContainer container className="row">
        <Grid item xs={12}>
          <Typography variant="h6" component="h2">
            Open source security
          </Typography>
          <Typography variant="h6">
            More than Linux.
            <Link href="https://ubuntu.com/security/certifications">
              Security and compliance{" "}
            </Link>{" "}
            for the full stack.
          </Typography>
          <Typography variant="body1">
            Secure your open source apps. Patch the full stack, from kernel to
            library and applications, for CVE compliance. Governments and
            auditors certify Ubuntu for FedRAMP, FISMA and HITECH.
          </Typography>
        </Grid>
        <div sx={{ paddingTop: "24px", paddingBottom: "24px" }}>
          <Grid container>
            <Grid item xs={6}>
              <ul>
                <li>
                  <Typography variant="body1">
                    10 year security maintenance and CVE Patching
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <Link href="https://ubuntu.com/security/livepatch">
                      Kernel Livepatch
                    </Link>{" "}
                    for 24/7 patching with no downtime{" "}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" color="initial">
                    <Link>Extended security</Link> for infrastructure and
                    applications{" "}
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" color="initial">
                    <Link>FIPS 140-2</Link> cryptographic modules certified by
                    NIST
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item xs={6}>
              <ul>
                <li>
                  <Typography variant="body1">
                    <Link>Common Criteria EAL2</Link>: ISO/IEC IS 15408
                    validated by CSEC
                  </Typography>
                  <Link></Link>
                </li>
                <li>
                  <Typography variant="body1">
                    <Link href="">DISA/STIG</Link>
                    hardening for DoD compliance
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <Link>CIS profiles</Link> for cyber defence and malware
                    prevention
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid xs={12}>
              <div>Secure all your open source with us ›</div>
            </Grid>
          </Grid>
        </div>
      </StripContainer>
    </StripGlobal>
  );
}

export default Strip;
