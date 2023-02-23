import React from "react";
import PListItem from "./PListItem";
import "../Global/styleGlobal.css";
import {
  Grid,
  Box,
  Stack,
  Container,
  styled,
  Typography,
  Link,
} from "@mui/material";
import List from "@mui/material/List";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "../Global/styleGlobal.css";

const GlobalPrueba = styled(Stack)`
  background-color: #f7f7f7;
  padding: 4.2% 0;
`;
const GridContainer = styled(Grid)`
  width: 95vw;
  margin: 0 auto;
  padding: 0 auto;
`;
const Img = styled("img")`
  width: 266px;
`;

function Prueba() {
  return (
    <GlobalPrueba bgcolor="red">
      <GridContainer container>
        <Grid item xs={5} sm={12} lg={6}>
          <Typography mb="3.2%" variant="h5">
            Significant enterprise savings
          </Typography>
          <Typography variant="h6">
            Sustainable open source at the lowest cost, everywhere.
          </Typography>
          <Typography mt="3.2%" variant="body1">
            Rethink what’s possible with Linux and open source.
          </Typography>
          <Typography mt="3.2%" variant="body1">
            Companies engage Canonical to drive down open source operating
            costs. Automate everything: multi-cloud operations, bare metal
            provisioning, edge clusters and IoT.
          </Typography>
        </Grid>
        <Grid
          item
          xs={7}
          sm={12}
          lg={6}
          sx={{
            width: "100%",
            justifyItems:"center",
            display: { xs: "none", md: "block"},
          }}
        >
          <Box justifyContent="center" alignContent="center" display="flex">
          <Img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_266,h_200/https://assets.ubuntu.com/v1/f129afea-Save+Money-Yen-Euro-Dollar-2020.svg"></Img>
          </Box>
        </Grid>
      </GridContainer>
      <GridContainer container>
        <Grid item xs={12} sm={12} md={6}>
          <PListItem text="No mandatory subscriptions for Ubuntu"/>
          <PListItem text="Security, support and fully managed infra and apps"/>
          <PListItem text="Public cloud, data centre, edge cluster and appliances"/>
          <PListItem text="Long term maintenance commitment"/>
        </Grid>
        <Grid  item xs={12} sm={12} md={6}>
          <PListItem text="Transparent pricing for enterprise and ISV"></PListItem>
          <PListItem text="Switch from VMware to OpenStack"></PListItem>
          <PListItem text="TCO analysis of Open Infra"></PListItem>
          <PListItem text="451 study on private/public cloud costs"></PListItem>
        </Grid>
        <Typography variant="body2" color="initial">
            <Link underline="hover">
                Let’s talk open source ›
            </Link>
          </Typography>
      </GridContainer>
    </GlobalPrueba>
  );
}

export default Prueba;
