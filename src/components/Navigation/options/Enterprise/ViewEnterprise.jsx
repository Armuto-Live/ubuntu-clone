import React from "react";
import { Grid, styled, Box } from "@mui/material";
import Title from "./TitleEnterprise";
import CustomParraf from "./TypographyEnterprise";
import ButtonEnterprise from "./ButtonEnterprise";
import LinkEnterprise from "./LinkEnterprise";
const Container = styled(Grid)((theme) => ({}));

function ViewEnterprise() {
  return (
    <>
      <Container container justifyContent="center" pt="27px">
        <Grid item lg={8}>
          <Grid container justifyContent="space-between" spacing={5}>
            <Grid item lg={3}>
              <Title title="OpenStack" />
              <CustomParraf parraf="Canonical is the leading provider of managed OpenStack. We also provide enterprise support, training,   consulting and will help you design and deliver your new private cloud." />
              <ButtonEnterprise value="Get OpenStack" />
              <Box>
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
                <LinkEnterprise link="TCO calculator" />
              </Box>
            </Grid>
            <Grid item lg={3}>
              <Title title="Kubernetes" />
              <CustomParraf parraf="Canonical supports Kubeadm, MicroK8s and Charmed Kubernetes on VMware OpenStack, bare metal, AWS, Azure, Google, Oracle Cloud, IBM Cloud and Rackspace."/>
              <ButtonEnterprise value="Get Kubernetes" />
              <Box>
                <LinkEnterprise link="Industry report" />
                <LinkEnterprise link="What is Kubernetes" />
                <LinkEnterprise link="Multicloud K8s on bare metal, VMware, and all public clouds" />
                <LinkEnterprise link="Fully managed K8s" />
                <LinkEnterprise link="Get K8s for your workstation and edge / IoT" />
                <LinkEnterprise link="AI and ML on Kubernetes" />
                <LinkEnterprise link="Easy Kubeflow operations" />
                <LinkEnterprise link="GKE with Ubuntu on Google Cloud" />
                <LinkEnterprise link="TCO calculator" />
              </Box>
            </Grid>
            <Grid item lg={3}>
              <Title title="Internet of Things" />
              <CustomParraf parraf="Embedded Ubuntu gives you the best developer experience, security and long-term support. Choose between classic Ubuntu Server or the Ubuntu Core for appliances."/>
              <ButtonEnterprise value="Build your IoT on Ubuntu"/>
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
                <LinkEnterprise link="Networking with Ubuntu" />
              </Box>
            </Grid>
            <Grid item lg={3}>
              <Title title="Support and Services" />
              <CustomParraf parraf="Canonical provides 24/7 enterprise support, security, and break-fix engineering for Ubuntu OpenStack, Docker and Kubernetes. Enterprise Linux done right."/>
              <ButtonEnterprise value="Get Support"/>
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
                <LinkEnterprise link="Get Ubuntu Pro on Azure" />
              </Box>
            </Grid>
          </Grid>
          <hr />
        </Grid>
      </Container>
    </>
  );
}

export default ViewEnterprise;
