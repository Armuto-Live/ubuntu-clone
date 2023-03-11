import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TitleAccordion from './TitleAccordion';
import SubTitleAccordion from './SubTitleAccordion';

function CustomAccordion() {
  return (
    <>
      <Accordion>
        <TitleAccordion title="OpenStack"/>
        <SubTitleAccordion subTitle="What is OpenStack"/>
        <SubTitleAccordion subTitle="Features"/>
        <SubTitleAccordion subTitle="Managed"/>
        <SubTitleAccordion subTitle="Consulting"/>
        <SubTitleAccordion subTitle="Install"/>
        <SubTitleAccordion subTitle="Support"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="Ceph"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="Managed"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="Kubernetes"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="AI/ML"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="Robotics"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="Cloud"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="IoT"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="Raspberry Pi"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="Core"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="Desktop"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="Server"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="Security"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="Download"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="Observability"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="Appliance"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="Support"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="Pricing"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
      <Accordion>
        <TitleAccordion title="Sectors"/>
        <SubTitleAccordion subTitle="sub"/>
      </Accordion>
    </>
  );
}

export default CustomAccordion;