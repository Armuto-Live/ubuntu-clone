import React from 'react'
import { Box, styled,Stack,Grid } from '@mui/material'
import NavigationBanner from './NavigationBanner';


const Global=styled(Box)`
    height:56px;
    background-color:#333;
`;

const Container = styled(Stack)`
  margin: 0 auto;
  max-width: 76%;
  padding-left: 1.5rem;
  padding-right: 27px;
  height: 100%;
  color:white;
`;
function NavigationRow() {
  return (
    <>
        <Global>
            <Container>
                <NavigationBanner/>
            </Container>
        </Global>
    </>
  )
}

export default NavigationRow