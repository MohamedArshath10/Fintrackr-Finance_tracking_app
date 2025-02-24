import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../Styles/Layout'
import { useGlobalContext } from '../../Context/globalContext'
import Form from '../Form/Form'
import IncomeItem from '../IncomeItem/IncomeItem'
import { dateFormat } from "/src/Utils/Date.jsx";
import { dollar } from '../../Utils/Icons'

const Income = () => {
  const {addIncome, incomes, getIncome, deleteIncome, totalIncome} = useGlobalContext()

  useEffect(() => {
    getIncome()
  }, [])
  
  return (
    <IncomeStyled>
        <InnerLayout>
            <h1>Income</h1>
            <h2 className="total-income">Total Income: <span>{dollar}{totalIncome()}</span></h2>
            <div className="income-content">
                <div className="form-container"></div>
                    <Form />
                <div className="incomes">
                  {incomes.map((income) => {
                    const {_id, title, amount, date, category, description, type} = income;
                    return <IncomeItem key={_id} id={_id} title={title} description={description} type={type} amount={amount} date={dateFormat()} category={category}
                    indicatorColor={'#42AD00'} deleteItem={deleteIncome} />
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
  .total-income{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: .5rem;
    span{
      font-size: 2.5rem;
      font-weight: 800;
      color: #42AD00;
    }
  }
  .income-content{
    display: flex;
    gap: 2rem;
    .incomes{
      flex: 1;
    }
  }
`
export default Income