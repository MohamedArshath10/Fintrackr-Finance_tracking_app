import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../Styles/Layout'
import Chart from '../Chart/Chart'
import { dollar } from '../../Utils/Icons'
import { useGlobalContext } from '../../Context/globalContext'
import History from '../History/History'


const Dashboard = () => {
  const {totalExpense, incomes, expenses, totalIncome, getIncome, getExpense} = useGlobalContext()

  useEffect(() => {
    getIncome()
    getExpense()
  },[])
  return (
    <DashboardStyled>
        <InnerLayout>
            <h1>All Transactions</h1>
            <div className="stats-con">
              <div className="chart-con">
                <Chart/>
                <div className="amount-con">
                  <div className="income">
                    <h2>Total Income</h2>
                    <p>{dollar} {totalIncome()}</p>
                  </div>
                  <div className="expense">
                    <h2>Total Expense</h2>
                    <p>{dollar} {totalExpense()}</p>
                  </div>
                  <div className="balance">
                    <h2>Total Balance</h2>
                    <p>{dollar} {totalIncome() - totalExpense()}</p>
                  </div>
                </div>
              </div>
              <div className="history-con">
                <History />
                {/* Income */}
                <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                <div className="salary-item">
                  <p>
                    {Math.min(...incomes.map((item) => item.amount))}
                  </p>
                  <p>
                    {Math.max(...incomes.map((item) => item.amount))}
                  </p>
                </div>

                {/* Expense */}
                <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                <div className="salary-item">
                  <p>
                    {Math.min(...expenses.map((item) => item.amount))}
                  </p>
                  <p>
                    {Math.max(...expenses.map((item) => item.amount))}
                  </p>
                </div>
              </div>
            </div>
        </InnerLayout>
    </DashboardStyled>
  )
}
const DashboardStyled = styled.div`
  .stats-con{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-con{
      grid-column: 1 / 4;
      height: 300px;
      .amount-con{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income, .expense{
          grid-column: span 2;
        }
        .income, .expense, .balance{
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 1rem;
          p{
            font-size: 2.5rem;
            font-weight: 700;
          }
        }

        .balance{
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .history-con{
      grid-column: 4 / -1;
      h2{
        margin: 1rem;
      }
    }
  }
`

export default Dashboard