import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../Styles/Layout'
import { useGlobalContext } from '../../Context/globalContext'
import Form from '../Form/Form'
import IncomeItem from '../IncomeItem/IncomeItem'
import { dateFormat } from "/src/Utils/Date.jsx";
import { dollar } from '../../Utils/Icons'

const Income = () => {
  const { addIncome, incomes, getIncome, deleteIncome, totalIncome } = useGlobalContext()

  useEffect(() => {
    getIncome()
  }, [])
  
  return (
    <IncomeStyled>
        <InnerLayout>
            <h1>Income</h1>
            <h2 className="total-income">Total Income: <span>{dollar}{totalIncome()}</span></h2>
            <div className="income-content">
                <div className="form-container">
                    <Form />
                </div>
                <div className="incomes">
                  {incomes.map((income) => {
                    const { _id, title, amount, date, category, description, type } = income;
                    return (
                      <IncomeItem 
                        key={_id} 
                        id={_id} 
                        title={title} 
                        description={description} 
                        type={type} 
                        amount={amount} 
                        date={dateFormat(date)} 
                        category={category}
                        indicatorColor={'#42AD00'} 
                        deleteItem={deleteIncome} 
                      />
                    )
                  })}
                </div>
            </div>
        </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 1.8rem;
    gap: 0.5rem;
    text-align: center;
    
    span {
      font-size: 2.2rem;
      font-weight: 800;
      color: #42AD00;
    }
  }
  
  .income-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  
  .form-container {
    width: 100%;
    
    @media (min-width: 768px) {
      width: 40%;
    }
  }
  
  .incomes {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export default Income;
