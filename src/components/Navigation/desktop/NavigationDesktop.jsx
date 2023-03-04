import React from "react";
import { styled, AppBar, Grid, Button } from "@mui/material";
import Logo from "../../../assets/ubuntu.svg";
import CustomBottom from "../../Global/CustomBottom";
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
  width:"110px",
  height:"56px",
}));
const BottonNav=styled(Button)((theme)=>({
  color:"white",
  height:"56px",
  textTransform:"none",
  letterSpacing:"0",
  borderRadius:"0",
  background:"#333",
  boxShadow:"none"
}))
function NavigationDesktop() {
  return (
    <CustomToolbar position="fixed">
      <Grid container justifyContent="center" sx={{paddingLeft:"24px"}}>
        <Grid item md={12} lg={9}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <ButtonLogo>
                <img src={Logo}/>
              </ButtonLogo>
            </Grid>
            <Grid item md={10} mr="auto">
              <Grid container justifyContent="space-between">
                <Grid item md={8}>
                  <BottonNav variant="contained" color="primary">
                    Enterprise
                  </BottonNav>
                  <BottonNav variant="contained" color="primary">
                    Developer
                  </BottonNav>
                  <BottonNav variant="contained" color="primary">
                    Community
                  </BottonNav>
                  <BottonNav variant="contained" color="primary">
                    Download
                  </BottonNav>
                </Grid>
                <Grid container item md={4} justifyContent="flex-end">
                  <BottonNav>
                    Search
                  </BottonNav>
                  <BottonNav>
                    Sign in
                  </BottonNav>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CustomToolbar>
  );
}

export default NavigationDesktop;
