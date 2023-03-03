import React from "react";
import { styled, AppBar, Grid, Button } from "@mui/material";
import Logo from "../../assets/ubuntu.svg";
import CustomBottom from "../Global/CustomBottom";
import SearchIcon from "@mui/icons-material/Search";
import { height } from "@mui/system";

const CustomToolbar = styled(AppBar)((theme) => ({
  background: "#333",
  height:"56px"
}));
const ButtonLogo = styled(Button)((theme) => ({
  textTransform: "none",
  color: "#fff",
  borderRadius: "0",
  background: "#e95420",
  "&:hover": {
    background: "#e95420",
  },
  width:"100%",
  padding:"0 60%",
  height:"56px",
}));
const BottonNav=styled(Button)((theme)=>({
  color:"white",
  height:"56px",
}))
function NavigationDesktop() {
  return (
    <CustomToolbar position="fixed">
      <Grid container justifyContent="center" sx={{paddingLeft:"24px",paddingRight:"24px"}}>
        <Grid item lg={11} xl={9}>
          <Grid container justifyContent="space-between">
            <Grid item lg={1} xl={1}>
              <ButtonLogo>
                <img src={Logo} />
              </ButtonLogo>
            </Grid>
            <Grid container item lg={11} xl={11} justifyContent="space-between" alignContent="center">
              <Grid container item lg={7} xl={6} justifyContent="space-around">
                <BottonNav>
                  Enteprise
                </BottonNav>
                <BottonNav>
                  Developer
                </BottonNav>
                <BottonNav>
                  Community
                </BottonNav>
                <BottonNav>
                  Download
                </BottonNav>
              </Grid>
              <Grid container item lg={4} xl={2} justifyContent="space-around">
                <BottonNav>
                  Search
                </BottonNav>
                <BottonNav>
                  Sign In
                </BottonNav>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CustomToolbar>
  );
}

export default NavigationDesktop;
