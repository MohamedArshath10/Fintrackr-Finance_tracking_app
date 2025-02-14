import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import bg from './img/bg.jpg'
import {MainLayout} from './Styles/Layout'
import Orb from './Components/Orb/Orb'
import Navigation from './Navigation/Navigation'

const App = () => {
  const [active, setActive] = useState(1)

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])
  
  
  return (
    <AppStyled bg={bg} className='App'>
      {orbMemo}
      <MainLayout>
        <Navigation active = {active} setActive = {setActive}/>
        <main>

        </main>
      </MainLayout>
    </AppStyled>
  )
}



const AppStyled =styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    border-radius: 32px;
    
  }
`


export default App