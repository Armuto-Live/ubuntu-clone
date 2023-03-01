import React from 'react'
import { useState } from 'react'
import CustomAccordion from '../Global/CustomAccordion'
function FooterMobile() {
  const data=[
    {title:"title1"}
  ]
  return (
    <>
      <CustomAccordion tittle="Title1" details="asd" />
      <CustomAccordion tittle="Title2" details="asd" />
    </>
  )
}

export default FooterMobile