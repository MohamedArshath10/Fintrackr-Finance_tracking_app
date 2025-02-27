import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useGlobalContext } from '../../Context/globalContext'
import Button from '../Buttons/Button'
import { plus } from '../../Utils/Icons'
import { GlobalStyle } from '../../Styles/GlobalStyle'

const ExpenseForm = () => {
    const {addExpense, getExpense} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const {title, amount, date, category, description } = inputState;

    const handleInput = (name) => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        addExpense(inputState)
        getExpense()
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

  return (
    <ExpenseFormStyled onSubmit={handleSubmit}>
        <div className="input-control">
            <input type="text" value={title} name={'title'} placeholder='Expense Title' onChange={handleInput('title')}/>
        </div>
        <div className="input-control">
            <input type="text" value={amount} name={'amount'} placeholder='Expense Amount' onChange={handleInput('amount')}/>
        </div>
        <div className="input-control">
            <DatePicker id='date' placeholderText='Enter the date' selected={date} dateFormat="dd/mm/yyyy" onChange={(date) => {
                setInputState({...inputState, date: date})
            }}
            />
        </div>
        <div className="selects input-control">
            <select required value ={category } name="category" id="category" onChange={handleInput('category')}>
                <option value="" disabled>Select Options</option>
                <option value="education" >Education</option>
                <option value="groceries" >Groceries</option>
                <option value="health" >Health</option>
                <option value="subscriptions" >Subscriptions</option>
                <option value="takeaways" >Takeaways</option>
                <option value="clothing" >Clothing</option>
                <option value="travelling" >Travelling</option>
                <option value="other" >Other</option>
            </select>
        </div>
        <div className="input-control">
            <textarea type="text" value={description} name={'description'} id={'description'} cols='30' rows='4' placeholder='Expense description' onChange={handleInput('description')}/>
        </div>
        <div className="submit-btn">
            <Button 
                name={'Add Expense'}
                icon={plus}
                bPad={'.8rem 1.6rem'}
                bRad={'30px'}
                bg={'#1F509A'}
                color={'#fff'}
            />
        </div>
    </ExpenseFormStyled>
  )
}

const ExpenseFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input , textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34,96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
        .input-control{
            input{
                width: 100%;
            }
        }

        .selects{
            display: flex;
            justify-content: flex-end;
            select{
                color: rgba(34, 34, 96, 0.4);
                &:focus, &:active{
                    color: rgba(34, 34, 96, 1);
                }
            }
        }

        .submit-btn{
            button{
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                &:hover{
                    background: #81BFDA !important;
                } 
            }
        }
    
`

export default ExpenseForm