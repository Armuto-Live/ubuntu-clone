import React from "react";
import CustomBottom from '../../Global/CustomBottom'
import { DataFooter } from "../../../constants/Footer";

import { Grid, styled, Typography, Box,Stack, IconButton,Link } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { height } from "@mui/system";

const GridContainer = styled(Grid)((theme) => ({
  paddingTop: "40px",
  paddingBottom: "40px",
  paddingLeft:"24px",
}));

const SubTitle=styled(Link)((theme)=>({

}))

const datos = DataFooter.map((column) => (
  <Box mb="24px">
    <Box >
      <Link variant="h6" underline="hover" color="black">{column.title}</Link>
    </Box>
    {column.menu.map((subTitle) => (
      <Box>
        <Link underline="hover" color="black">{subTitle.name}</Link>
      </Box>
    ))}
  </Box>
));

const IconContainer=styled(Stack)((theme)=>({
  display:"flex",
  flexDirection:"column"
}))

function filtrar(props){
  let longitud=""
  for(const prop in datos){
    if(prop<props){
      longitud=prop;
    }
  }
}

function FooterDesktop() {
  return (
    <>
      <GridContainer container justifyContent="center">
        <Grid item md={12} lg={9}>
          <Grid container justifyContent="space-between">
            <Grid item lg={2}>
              {datos[0]}
              {datos[1]}
              {datos[2]}
            </Grid>
            <Grid item lg={2}>
              {datos[3]}
              {datos[4]}
              {datos[5]}
              {datos[6]}
            </Grid>
            <Grid item lg={2}>
              {datos[7]}
              {datos[8]}
              {datos[9]}
            </Grid>
            <Grid item lg={2}>
              {datos[10]}
              {datos[11]}
              {datos[12]}
            </Grid>
            <Grid item lg={2}>
              {datos[13]}
              {datos[14]}
              {datos[15]}
            </Grid>
            <Grid item lg={2}>
              {datos[16]}
              {datos[17]}
              {datos[18]}
              {datos[19]}
              {datos[20]}
              {datos[21]}
              {datos[22]}
              {datos[23]}
              {datos[24]}
              {datos[25]}
            </Grid>
          </Grid>
        </Grid>
      </GridContainer>
      <hr />
      <GridContainer container justifyContent="center">
        <Grid item md={12} lg={9}>
          <Grid container>
            <Grid item md={8} lg={6} justifyContent="space-between">
              <Grid container>
                <CustomBottom texto="Contact us" variant="outlined"/>
                <CustomBottom texto="About us"/>
                <CustomBottom texto="Community"/>
                <CustomBottom texto="Careers"/>
                <CustomBottom texto="Blog"/>
                <CustomBottom texto="Resources"/>
                <CustomBottom texto="Press centre"/>
                <Typography variant="body1" color="initial">
                  © 2023 Canonical Ltd. Ubuntu and Canonical are registered trademarks of Canonical Ltd.
                </Typography>
                <IconContainer>
                  <li>Legal Information</li>
                  <li>Data privacy</li>
                  <li>Manage Your tracker settings</li>
                  <li>Report a bug on this site</li>
                </IconContainer>
              </Grid>
            </Grid>
            <Grid item md={4} lg={5} container justifyContent="flex-end">
              <Stack direction="row">
                <IconButton sx={{":hover":{"background":"#1DA1F2"},width:"42px" , height:"42px"}}>
                  <TwitterIcon sx={{width:"100px"}}/>
                </IconButton>
                <IconButton sx={{":hover":{"background":"#3B5898"},width:"42px" , height:"42px"}}>
                  <FacebookIcon/>
                </IconButton>
                <IconButton sx={{":hover":{"background":"#0274B3"},width:"42px" , height:"42px"}}>
                  <LinkedInIcon/>
                </IconButton>
                <IconButton sx={{":hover":{"background":"#EA781A"},width:"42px" , height:"42px"}}>
                  <RssFeedIcon/>
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </GridContainer>
    </>
  );
}

export default FooterDesktop;
