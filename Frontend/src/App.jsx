import React from 'react'
import styled from 'styled-components'
import bg from './img/bg.jpg'
import {MainLayout} from './Styles/Layout'
import Orb from './Components/Orb/Orb'
import Navigation from './Navigation/Navigation'

const App = () => {

  
  return (
    <AppStyled bg={bg} className='App'>
      <Orb />
      <MainLayout>
        <Navigation></Navigation>
      </MainLayout>
    </AppStyled>
  )
}



const AppStyled =styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
`


export default App