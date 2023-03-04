import React from 'react'
import { useState } from 'react'
import CustomAccordion from '../CustomAccordion'

const data =[
  {details:"hola"}
]
function FooterMobile() {
  return (
    <>
      <CustomAccordion tittle="OpenStack" details={["data","asdasd","tercero"]} />
      <CustomAccordion tittle="Title2" details="asd" />
    </>
  )
}

export default FooterMobile