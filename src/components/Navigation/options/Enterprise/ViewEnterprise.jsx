import React from "react";
import { Grid, styled, Box, Typography } from "@mui/material";
import Title from "../TitleEnterprise";
import CustomParraf from "../TypographyEnterprise";
import Line from "../Line";
import ButtonEnterprise from "../ButtonEnterprise";
import LinkEnterprise from "../LinkEnterprise";
import UnorderList from "../UnorderList";
const Container = styled(Grid)((theme) => ({}));
const CustomBox = styled(Box)((theme) => ({
  marginBottom: "26.1px",
}));

function ViewEnterprise() {
  return (
    <>
      <Container container justifyContent="center" pt="27px" paddingLeft="24px">
        <Grid item lg={8}>
          <Grid container justifyContent="space-between" spacing={5}>
            <Grid item lg={3}>
              <Title title="OpenStack" variant="h5" />
              <CustomParraf parraf="Canonical is the leading provider of managed OpenStack. We also provide enterprise support, training,   consulting and will help you design and deliver your new private cloud." />
              <ButtonEnterprise value="Get OpenStack" />
              <CustomBox>
                <LinkEnterprise link="Fully managed OpenStack" />
                <LinkEnterprise link="Design and deliver private clouds" />
                <LinkEnterprise link="OpenStack features" />
                <LinkEnterprise link="Migrate from VMware" />
                <LinkEnterprise link="NFVi and Edge solutions" />
                <LinkEnterprise link="Multi-node OpenStack for workstations and edge / IoT" />
                <LinkEnterprise link="NFV Management and Orchestration (MANO)" />
                <LinkEnterprise link="OpenStack training" />
                <LinkEnterprise link="Pricing" />
                <LinkEnterprise link="Support" />
                <LinkEnterprise link="TCO calculator" HiddenLine />
              </CustomBox>
            </Grid>
            <Grid item lg={3}>
              <Title title="Kubernetes" variant="h5" />
              <CustomParraf parraf="Canonical supports Kubeadm, MicroK8s and Charmed Kubernetes on VMware OpenStack, bare metal, AWS, Azure, Google, Oracle Cloud, IBM Cloud and Rackspace." />
              <ButtonEnterprise value="Get Kubernetes" />
              <CustomBox>
                <LinkEnterprise link="Industry report" />
                <LinkEnterprise link="What is Kubernetes" />
                <LinkEnterprise link="Multicloud K8s on bare metal, VMware, and all public clouds" />
                <LinkEnterprise link="Fully managed K8s" />
                <LinkEnterprise link="Get K8s for your workstation and edge / IoT" />
                <LinkEnterprise link="AI and ML on Kubernetes" />
                <LinkEnterprise link="Easy Kubeflow operations" />
                <LinkEnterprise link="GKE with Ubuntu on Google Cloud" />
                <LinkEnterprise link="TCO calculator" HiddenLine />
              </CustomBox>
            </Grid>
            <Grid item lg={3}>
              <Title title="Internet of Things" variant="h5" />
              <CustomParraf parraf="Embedded Ubuntu gives you the best developer experience, security and long-term support. Choose between classic Ubuntu Server or the Ubuntu Core for appliances." />
              <ButtonEnterprise value="Build your IoT on Ubuntu" />
              <Box>
                <LinkEnterprise link="Launch a product with our IoT Professional Services" />
                <LinkEnterprise link="Ubuntu Core - embedded & secure" />
                <LinkEnterprise link="Appliance images" />
                <LinkEnterprise link="Embedded Linux with Ubuntu" />
                <LinkEnterprise link="Snaps - secure packages for IoT" />
                <LinkEnterprise link="Supported boards and SoCs" />
                <LinkEnterprise link="Digital signage and smart displays" />
                <LinkEnterprise link="Robots and drones with app stores" />
                <LinkEnterprise link="Industrial gateways with Ubuntu" />
                <LinkEnterprise link="Automotive with Ubuntu" />
                <LinkEnterprise link="Networking with Ubuntu" HiddenLine />
              </Box>
            </Grid>
            <Grid item lg={3}>
              <Title title="Support and Services" variant="h5" />
              <CustomParraf parraf="Canonical provides 24/7 enterprise support, security, and break-fix engineering for Ubuntu OpenStack, Docker and Kubernetes. Enterprise Linux done right." />
              <ButtonEnterprise value="Get Support" />
              <Box>
                <LinkEnterprise link="Ubuntu Pro" />
                <LinkEnterprise link="Livepatch security updates" />
                <LinkEnterprise link="Landscape remote management" />
                <LinkEnterprise link="Compliance reporting" />
                <LinkEnterprise link="Model-driven operations" />
                <LinkEnterprise link="Managed Apps" />
                <LinkEnterprise link="Pricing" />
                <LinkEnterprise link="Observability" />
                <LinkEnterprise link="Security" />
                <LinkEnterprise link="Hardware certification" />
                <LinkEnterprise link="Get Ubuntu Pro on AWS" />
                <LinkEnterprise link="Get Ubuntu Pro on Azure" HiddenLine />
              </Box>
            </Grid>
          </Grid>
          <Line />
          <Grid container spacing={4}>
            <Grid item lg={2} mt="10px">
              <Title title="CLOUD" />
              <CustomBox>
                <LinkEnterprise link="Public cloud" />
                <LinkEnterprise link="Private cloud" />
                <LinkEnterprise link="Hybrid cloud" />
                <LinkEnterprise link="Multi-cloud" />
                <LinkEnterprise
                  link="Use Ubuntu on AWS, Azure, Google, Oracle and IBM clouds"
                  HiddenLine
                />
              </CustomBox>
            </Grid>
            <Grid item lg={2} mt="10px">
              <Title title="CONTAINERS" />
              <LinkEnterprise link="Install and operate Kubernetes" />
              <LinkEnterprise
                link="Run system containers with LXD"
                HiddenLine
              />
            </Grid>
            <Grid item lg={2} mt="10px">
              <Title title="DATA CENTRE" />
              <CustomBox>
                <LinkEnterprise link="MAAS - fast server provisioning" />
                <LinkEnterprise link="Multi cloud operations with Juju" />
                <LinkEnterprise link="Ceph storage on Ubuntu" />
                <LinkEnterprise link="Certified hardware" />
                <LinkEnterprise link="Ubuntu Server docs" />
                <LinkEnterprise
                  link="Anbox Cloud - Android in the cloud"
                  HiddenLine
                />
              </CustomBox>
            </Grid>
            <Grid item lg={2} mt="10px">
              <Title title="AI & ML" />
              <CustomBox>
                <LinkEnterprise link="What is Kubeflow" />
                <LinkEnterprise link="Try out Kubeflow on MicroK8s" />
                <LinkEnterprise link="MLOps services and training" HiddenLine />
              </CustomBox>
            </Grid>
            <Grid item lg={4} mt="10px">
              <Title title="PARTNERS" />
              <Typography fontSize="1.1rem">
                Our partners provide the expertise, integration and commitment
                to deliver the solutions you need. Meet our partner community,
                and learn about programs for working together.
              </Typography>
            </Grid>
          </Grid>
          <Line />
          <Grid container>
            <Grid item container>
              <Grid item lg={3}>
                SECTORS
              </Grid>
              <Grid item lg={9}>
                <Box display="flex" flexDirection="row">
                  <UnorderList list="Telco" />
                  <UnorderList list="Finance" />
                  <UnorderList list="Government" />
                  <UnorderList list="Signage" />
                  <UnorderList list="Robotics" />
                  <UnorderList list="Gateways" />
                  <UnorderList list="Automotive" />
                  <UnorderList list="Organisations" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Line />
          <Grid container>
            <Grid item container>
              <Grid item lg={3}>
                FULLY MANAGED
              </Grid>
              <Grid item lg={9}>
                <Box display="flex" flexDirection="row">
                  <UnorderList list="OpenStack" />
                  <UnorderList list="Kubernetes" />
                  <UnorderList list="Managed apps" />
                  <UnorderList list="Anbox Cloud" />
                  <UnorderList list="IoT Professional Services" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Line />
          <Grid container>
            <Grid item container>
              <Grid item lg={3}>
                RESOURCES
              </Grid>
              <Grid item lg={9}>
                <Box display="flex" flexDirection="row">
                  <UnorderList list="Webinars" />
                  <UnorderList list="Tutorials" />
                  <UnorderList list="Videos" />
                  <UnorderList list="Case studies" />
                  <UnorderList list="Whitepapers" />
                  <UnorderList list="Docs" />
                  <UnorderList list="Training" />
                  <UnorderList list="Blog" />
                  <UnorderList list="Press centre" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Line />
          <Grid container>
            <Grid item container>
              <Grid item lg={3}>
                <CustomParraf parraf="CONSULTING"/>
              </Grid>
              <Grid item lg={9}>
                <Box display="flex" flexDirection="row">
                  <UnorderList list="OpenStack" />
                  <UnorderList list="Kubernetes" />
                  <UnorderList list="Juju experts" />
                  <UnorderList list="MLOps" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ViewEnterprise;
