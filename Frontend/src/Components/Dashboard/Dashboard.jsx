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
                    <br />
                    <p>{dollar} {totalIncome() - totalExpense()}</p>
                  </div>
                </div>
              </div>
              <div className="history-con">
                <History />
                {/* Income */}
                <h2 className="salary-title">Min <span>Salary</span> Max</h2>
                <div className="salary-item">
                  <p>
                    {dollar}
                    {incomes.length > 0 ? Math.min(...incomes.map((item) => item.amount)) || 0 : 0}
                  </p>
                  <p>
                    {dollar}
                    {incomes.length > 0 ? Math.max(...incomes.map((item) => item.amount)) || 0 : 0}
                  </p>
                </div>


                {/* Expense */}
                <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                <div className="salary-item">
                  <p>
                    {dollar}
                    {expenses.length > 0 ? Math.min(...expenses.map((item) => item.amount)) || 0 : 0}
                  </p>
                  <p>
                    {dollar}
                    {expenses.length > 0 ? Math.max(...expenses.map((item) => item.amount)) || 0 : 0}
                  </p>
                </div>
              </div>
            </div>
        </InnerLayout>
    </DashboardStyled>
  )
}
const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    align-items: start;

    /* Responsive for Tablets & Small Screens */
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }

    .chart-con {
      grid-column: 1 / 4;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: auto;

      @media (max-width: 1024px) {
        grid-column: 1 / -1;
      }

      .amount-con {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 2rem;
        justify-content: center;
        width: 100%;

        .income, .expense, .balance {
          flex: 1 1 30%;
          min-width: 250px;
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 1.5rem;
          text-align: center;

          p {
            font-size: 2rem;
            font-weight: 700;
          }
        }
      }
    }

    .history-con {
      grid-column: 4 / -1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;

      @media (max-width: 1024px) {
        grid-column: 1 / -1;
      }

      h2 {
        margin: 1rem;
      }

      .salary-title {
        font-size: 1.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 400px;

        span {
          font-size: 1.8rem;
        }
      }

      .salary-item {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 400px;

        p {
          font-weight: 600;
          font-size: 1.2rem;
        }
      }
    }
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .stats-con {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .chart-con {
      width: 100%;
    }

    .amount-con {
      flex-direction: column;
    }

    .history-con {
      width: 100%;
      align-items: center;
    }
  }
`;



export default Dashboard