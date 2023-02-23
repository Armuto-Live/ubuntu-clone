import React from "react";
import {Stack} from "@mui/material";
import {
  TakeOver,
  ShadowNotice,
  ModerEnterprise,
  LatestNew,
  StripLase,
  Strip,
  Prueba,
  } from '../Wrapper';
// import ShadowNotice from "../Wrapper/ShadowNotice";
// import TakeOver from "../Wrapper/TakeOver";
// import ModerEnterprise from "../Wrapper/ModerEnterprise";
// import LatestNew from "../Wrapper/LatestNew";
// import StripLase from "../Wrapper/StripLase";
// import Strip from "../Wrapper/Strip";


function ContainerMain() {
  return (
    <>
      <Stack >
        <TakeOver/>
        <ShadowNotice/>
        <ModerEnterprise/>
        <LatestNew/>
        <StripLase/>
        <Strip/>
        <Prueba/>
      </Stack>
    </>
  );
}

export default ContainerMain;
