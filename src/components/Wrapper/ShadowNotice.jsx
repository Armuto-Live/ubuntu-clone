import React from "react";
import { Grid,styled,Stack,Box } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Container = styled(Stack)`
  margin: 0 auto;
  max-width: 76%;
  padding-left: 27px;
  padding-right: 27px;
  height: "61px";
`;
function ShadowNotice() {
  return (
    <>
      <Box pt="27px" pb="27px">
        <Container>
          <Grid container wrap="nowrap" height="100%">
            <Grid item >
              <ImageListItem sx={{ width: "45px" }}>
                <img src="https://assets.ubuntu.com/v1/5a869d54-centos.png"></img>
              </ImageListItem>
            </Grid>
            <Grid item xs={11}>
              <Link href="#" height="100%" alignContent="center" sx={{textDecoration:"none"}}>
                <Typography variant="h6" color="initial" height="100%" sx={{display:"flex",alignItems:"center"}}>
                  CentOS users, 6 things to know when considering a migration to
                  Ubuntu LTS ›
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ShadowNotice;
