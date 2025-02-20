import React, { useContext, useState } from "react"
import axios from 'axios'

const BASE_URL = "http://localhost:5500/api/v1/"


const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    // Incomes
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
        .catch((err) => {
            setError(err.response.data.message)
        })
        getIncome()
    }

    const getIncome = async () => {
        const response = await axios.get(`${BASE_URL}get-income`)
        setIncomes(response.data)
    }

    const deleteIncome = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncome()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome += income.amount;
        })

        return totalIncome
    }

    // Expenses
    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}add-expense`, expense)
        .catch((err) => {
            setError(err.response.data.message)
        })
        getExpense()
    }

    const getExpense = async () => {
        const response = await axios.get(`${BASE_URL}get-expense`)
        setExpenses(response.data)
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpense()
    }

    const totalExpense = () => {
        let totalExpense = 0;
        expenses.forEach((expense) => {
            totalExpense += expense.amount;
        })

        return totalExpense
    }



    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncome, 
            deleteIncome,
            incomes,
            totalIncome,
            expenses,
            addExpense,
            getExpense,
            deleteExpense,
            totalExpense
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
} 

