import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../Styles/Layout'
import { useGlobalContext } from '../../Context/globalContext'
import IncomeItem from '../IncomeItem/IncomeItem'
import ExpenseForm from './ExpenseForm'
import { dateFormat } from '../../Utils/Date'

const Expenses = () => {
  const {addIncome, expenses, getExpense, deleteExpense, totalExpense} = useGlobalContext()

  useEffect(() => {
    getExpense()
  }, [])
  
  return (
    <ExpenseStyled>
        <InnerLayout>
            <h1>Expenses</h1>
            <h2 className="total-income">Total Expenses: <span>${totalExpense()}</span></h2>
            <div className="income-content">
                <div className="form-container"></div>
                    <ExpenseForm />
                <div className="incomes">
                  {expenses.map((expense) => {
                    const {_id, title, amount, date, category, description, type} = expense;
                    return <IncomeItem key={_id} id={_id} title={title} description={description} amount={amount} date={dateFormat()} type={type} category={category}
                    indicatorColor={'#42AD00'} deleteItem={deleteExpense} />
                  })}
                </div>
            </div>
        </InnerLayout>
    </ExpenseStyled>
  )
}

const ExpenseStyled = styled.div`
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
export default Expenses