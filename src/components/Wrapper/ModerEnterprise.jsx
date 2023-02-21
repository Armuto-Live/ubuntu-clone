import React from "react";
import { Grid, styled, Box, Stack, Typography } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";

const GlobalEnterprise = styled(Box)`
  padding-top: 72px;
`;
const ContainerEnterprise = styled(Stack)`
  margin: 0 auto;
  max-width: 76%;
  padding-left: 27px;
  padding-right: 27px;
  height: "61px";
`;

const ImageListItems = styled(Box)`
  background-color: aqua;
  width: 50px;
  height: 50px;
`;

const Image = styled(ImageListItem)`
  display: flex;
  width:145px;
`;

function ModerEnterprise() {
  return (
    <>
      <GlobalEnterprise>
        <ContainerEnterprise>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h4" component="h2">
                Modern enterprise open source
              </Typography>
              <Typography variant="h5" component="p">
                Publisher of Ubuntu.
                <br />
                Security. Support. Managed Services.
              </Typography>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Image>
                <img src="https://assets.ubuntu.com/v1/83ff4203-awshp-strip-customers.png" />
              </Image>
            </Grid>
          </Grid>
          <hr
            style={{
              width: "100%",
              marginTop: "72px",
              marginBottom: "72px",
              backgroundColor: "black",
            }}
          />
        </ContainerEnterprise>
      </GlobalEnterprise>
    </>
  );
}

export default ModerEnterprise;
