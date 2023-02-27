import React from "react";

function Prueba() {
  return (
      <CustomToolbar>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={9}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <CustomButton sx={{background:"orange"}}>
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
  );
}

export default Prueba;
