const { addExpense, getExpense, deleteExpense } = require('../controllers/expense')
const {addIncome, getIncome, deleteIncome} = require('../controllers/incomes')

const router = require('express').Router()



router.post('/add-income', addIncome)
router.get('/get-income', getIncome)
router.delete('/delete-income/:id', deleteIncome)
router.post('/add-expense', addExpense)
.get('/get-expense', getExpense)
.delete('/delete-expense/:id', deleteExpense)
module.exports = router