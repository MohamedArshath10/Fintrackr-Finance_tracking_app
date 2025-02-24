import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../Styles/Layout'
import Chart from '../Chart/Chart'
import { dollar } from '../../Utils/Icons'
import { useGlobalContext } from '../../Context/globalContext'
import History from '../History/History'


const Dashboard = () => {
  const {totalExpense, totalIncome, getIncome, getExpense} = useGlobalContext()

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
              </div>
            </div>
        </InnerLayout>
    </DashboardStyled>
  )
}
const DashboardStyled = styled.div`

`

export default Dashboard