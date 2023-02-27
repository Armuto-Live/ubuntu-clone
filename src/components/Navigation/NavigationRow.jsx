import React from "react";
import {
  Toolbar,
  Box,
  styled,
  Stack,
  AppBar,
  Grid,
  Button
} from "@mui/material";
import Logo from "../../assets/ubuntu.svg";
import NavigationBanner from "./NavigationBanner";
import SearchIcon from "@mui/icons-material/Search";
import LogoUbuntu from "../../assets/ubuntu.svg";

import '../Global/styleGlobal.css'

const CustomToolbar = styled(AppBar)((theme) => ({
  background: "#333",
}));
const CustomButton = styled(Button)((theme) => ({
  textTransform: "none",
  minHeight: "64px",
  color: "#fff",
  borderRadius: "0",
}));
const CustomGrid = styled(Grid)((theme) => ({}));
function NavigationRow() {
  return (
    <>
      <CustomToolbar position="fixed">
        <Grid container justifyContent="center">
          <CustomGrid item >
            <Grid item container sm={12} lg={12} sx={{background:"#e95420"}}>
              <CustomButton href="#" sx={{background:"#e95420"}}>
                <img src={Logo}/>
              </CustomButton>
              <CustomButton sx={{display:{sm:"block",lg:"none"}}}>Sign in</CustomButton>
            </Grid>
          </CustomGrid>
          <CustomGrid  className="grid" item xs={12} lg={8} sx={{}}>
            <Grid container justifyContent="space-between"   className="Grid" >
              <Grid item xs={12} lg={8} xl={10} >
                <Grid container item>
                  <CustomButton className="grid">Enterprise</CustomButton>
                  <CustomButton >Developer</CustomButton>
                  <CustomButton >Community</CustomButton>
                  <CustomButton >Download</CustomButton>
                </Grid>
              </Grid>
              <Grid item lg={3} xl={2} container>
                <CustomButton>Search<SearchIcon/></CustomButton>
                <CustomButton>Sign in</CustomButton>
              </Grid>
            </Grid>
          </CustomGrid>
        </Grid>
      </CustomToolbar>
    </>
  );
}

export default NavigationRow;
