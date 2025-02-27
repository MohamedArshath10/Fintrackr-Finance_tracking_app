import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import bg from './img/bg.jpg'
import {MainLayout} from './Styles/Layout'
import Orb from './Components/Orb/Orb'
import Navigation from './Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard'
import Income from './Components/Incomes/Income'
import Expenses from './Components/Expenses/Expenses'
import Transaction from './Components/Transaction/Transaction'
import { useGlobalContext } from './Context/globalContext'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from './Components/SignUp or SignIn/Auth'
import { AuthProvider } from './Context/authContext'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'


const App = () => {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()

  const displayData = () => {
    switch(active){
      case 1: 
      return <Dashboard/>
      case 2: 
      return <Transaction />
      case 3: 
      return <Income/>
      case 4: 
      return <Expenses/>
      default :
      return <Dashboard/>
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <AppStyled bg={bg} className='App'>
      
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/signin" element={<Auth />} />
            <Route path="/" element={
              <ProtectedRoute>
                {orbMemo}
                <MainLayout>
                  <Navigation active = {active} setActive = {setActive}/>
                  <main>
                    {displayData()}
                  </main>
                </MainLayout>
              </ProtectedRoute>} />
          </Routes>
        </Router>
      </AuthProvider>
            {/* <MainLayout>
              <Navigation active = {active} setActive = {setActive}/>
              <main>
                {displayData()}
              </main>
            </MainLayout> */}
    </AppStyled>
  )
}
const AppStyled =styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(242, 243, 253, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(2.5px);
    border-radius: 32px;
    /* overflow: auto; */
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`


export default App