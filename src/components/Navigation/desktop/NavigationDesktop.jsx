import React from "react";
import { useState,useRef } from "react";
import { styled, AppBar, Grid, Button } from "@mui/material";
import Logo from "../../../assets/ubuntu.svg";
import SearchApp from "../SearchApp";
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
const BottonNav=styled('button')((theme)=>({
  color:"white",
  height:"56px",
  textTransform:"none",
  letterSpacing:"0",
  borderRadius:"0",
  background:"#333",
  boxShadow:"none"
}))


function NavigationDesktop() {

  const [focus,setFocus]=useState();
  const ref=useRef();
  const ref2=useRef();

  const handleFocus=(event)=>{
    const focusValue=event.target.value;
    if(focus===focus){
      setFocus(focusValue);
      ref.current.style.visibility="hidden"
      ref.current.style.position="absolute"
      ref2.current.style.visibility="hidden"
      ref2.current.style.position="absolute"
    }
  }

  const handleBlur=(event)=>{
    const blurValue=event.target.value;
    if(focus===blurValue){
      ref.current.style.visibility="visible"
      ref.current.style.position="relative"
      ref2.current.style.visibility="visible"
      ref2.current.style.position="relative"
    }
  }

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
                <Grid item md={8} ref={ref2}>
                  <BottonNav variant="contained" color="primary" >
                    Enterprise
                  </BottonNav>
                  <BottonNav variant="contained" color="primary"  >
                    Developer
                  </BottonNav>
                  <BottonNav variant="contained" color="primary">
                    Community
                  </BottonNav>
                  <BottonNav variant="contained" color="primary">
                    Download
                  </BottonNav>
                </Grid>
                <Grid item md={2}>
                  <BottonNav onFocus={handleFocus} onBlur={handleBlur}>
                    <SearchApp/>
                  </BottonNav>
                  <BottonNav ref={ref}>
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
