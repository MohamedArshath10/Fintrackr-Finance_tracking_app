import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../Styles/Layout'
import { useGlobalContext } from '../../Context/globalContext'
import Form from '../Form/Form'
import IncomeItem from '../IncomeItem/IncomeItem'

const Income = () => {
  const {addIncome, incomes, getIncome} = useGlobalContext()

  useEffect(() => {
    getIncome()
  }, [incomes])
  
  return (
    <IncomeStyled>
        <InnerLayout>
            <h1>Income</h1>
            <div className="income-content">
                <div className="form-container"></div>
                    <Form />
                <div className="incomes">
                  {incomes.map((income) => {
                    const {id, title, amount, date, category, description} = income;
                    return <IncomeItem key={id} id={id} title={title} description={description} amount={amount} date={date} category={category}
                    indicatorColor={'#42AD00'} />
                  })}
                </div>
            </div>
        </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`
  display: flex;
  overflow: auto;
  .income-content{
    display: flex;
    gap: 2rem;
    .incomes{
      flex: 1;
    }
  }
`
export default Income