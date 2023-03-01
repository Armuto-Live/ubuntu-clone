import React from "react";
import Logo from "../../assets/ubuntu.svg";
import { Grid, styled, AppBar, Button } from "@mui/material";
import CustomTypography from "../Global/CustomTypography";
import SearchIcon from '@mui/icons-material/Search';
const Container = styled(AppBar)((theme) => ({
  background: "#333",
}));

const NavigationButton = styled(Button)((theme) => ({
  color: "white",
  textTransform:"none",
  padding:"16px 25%",
}));

const SearchContainer=styled("div")((theme)=>({
    position:"relative",
    borderRadius:"2px",
    background:"red",
    width:"100%",
}));
function NavigationMovile() {
  return (
    <Container position="relative">
      <Grid container>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="space-between"
            bgcolor="#e95420"
            sx={{ padding: "0 24px" }}
          >
            <Grid item xs={6}>
              <Button>
                <img src={Logo} />
              </Button>
            </Grid>
            <Grid item container xs={6} justifyContent="flex-end">
              <Button sx={{ textTransform: "none" }}>
                <CustomTypography colordefault="true" text="Sign in" />
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
                <SearchIcon/>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid item xs={3}>
              <NavigationButton>Enterprise</NavigationButton>
            </Grid>
            <Grid item xs={3}>
              <NavigationButton>Developer</NavigationButton>
            </Grid>
            <Grid item xs={3}>
              <NavigationButton>Community</NavigationButton>
            </Grid>
            <Grid item xs={3}>
              <NavigationButton>Download</NavigationButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NavigationMovile;
