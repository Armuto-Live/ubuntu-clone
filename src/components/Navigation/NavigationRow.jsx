import React from "react";
import { Toolbar, Box, styled, Stack, Grid, Button } from "@mui/material";
import NavigationBanner from "./NavigationBanner";
import SearchIcon from '@mui/icons-material/Search';
import LogoUbuntu from '../../assets/ubuntu.svg';

const CustomToolbar=styled(Toolbar)((theme)=>(({
  background:"#333",
})))
const CustomButton = styled(Button)((theme) => ({
  textTransform:"none",
  minHeight:"64px",
  color:"#fff",
  borderRadius:"0",
}));

function NavigationRow() {
  return (
    <>
      <CustomToolbar >
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={9}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <CustomButton>
                  <img src={LogoUbuntu} alt="" />
                </CustomButton>
                <CustomButton>Enterprise</CustomButton>
                <CustomButton>Developer</CustomButton>
                <CustomButton>Community</CustomButton>
                <CustomButton>Download</CustomButton>
              </Grid>
              <Grid item>
                <CustomButton>Search <SearchIcon/></CustomButton>
                <CustomButton>Sign In</CustomButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CustomToolbar>
    </>
  );
}

export default NavigationRow;
