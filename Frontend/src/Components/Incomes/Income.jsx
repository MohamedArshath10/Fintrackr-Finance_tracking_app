import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../Styles/Layout'
import { useGlobalContext } from '../../Context/globalContext'

const Income = () => {

  const {addIncome} = useGlobalContext()
  
  return (
    <IncomeStyled>
        <InnerLayout>
            <h1>Income</h1>
            <div className="income-content">
                <div className="form-container"></div>
                <div className="incomes">
                    
                </div>
            </div>
        </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`

`
export default Income