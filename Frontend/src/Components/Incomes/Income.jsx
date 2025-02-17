import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../Styles/Layout'
import { useGlobalContext } from '../../Context/globalContext'
import Form from '../Form/Form'

const Income = () => {

  const {addIncome} = useGlobalContext()
  
  return (
    <IncomeStyled>
        <InnerLayout>
            <h1>Income</h1>
            <div className="income-content">
                <div className="form-container"></div>
                <div className="incomes">
                    <Form />
                </div>
            </div>
        </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`

`
export default Income