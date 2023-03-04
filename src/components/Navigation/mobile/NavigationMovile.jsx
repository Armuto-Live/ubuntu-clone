import React from "react";
import { useState } from "react";
import Logo from "../../../assets/ubuntu.svg";
import { Grid, styled, AppBar, Button } from "@mui/material";
import CustomTypography from "../../Global/CustomTypography";
import CustomBottom from "../../Global/CustomBottom";
import SearchIcon from '@mui/icons-material/Search';
import SearchApp from "../SearchApp";


const Container = styled(AppBar)((theme) => ({
  background: "#333",
}));

const NavigationButton = styled(Button)((theme) => ({
  color:"white",
  textTransform:"none",
}));

function NavigationMovile() {
  const [show,setShow]=useState(true);
  return (
    <Container position="relative">
      <Grid container>
        <Grid item xxs={12}>
          <Grid item container justifyContent="space-between" bgcolor="#e95420" pl="10px" pr="10px">
            <Grid item>
              <NavigationButton>
                <img src={Logo}/>
              </NavigationButton>
            </Grid>
            <Grid item xxs={9} container alignItems="center" justifyContent="flex-end">
                <NavigationButton onClick={()=>setShow(!show)}>
                  <SearchApp/>
                </NavigationButton>
                <NavigationButton >Sign In</NavigationButton>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item container xxs={12}>
              <CustomBottom texto="Enterprise" />
              <CustomBottom texto="Developer" />
              <CustomBottom texto="Community" />
              <CustomBottom texto="Download"/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NavigationMovile;
