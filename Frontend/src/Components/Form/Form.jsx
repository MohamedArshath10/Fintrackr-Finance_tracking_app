import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Form = () => {

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
  return (
    <FormStyled>
        <div className="input-control">
            <input type="text" value={title} name={'title'} placeholder='Salary Title' onChange={handleInput('title')}/>
        </div>
        <div className="input-control">
            <input type="text" value={amount} name={'amount'} placeholder='Salary Amount' onChange={handleInput('amount')}/>
        </div>
        <div className="input-control">
            <DatePicker id='date' placeholderText='Enter the date' selected={date} dateFormat={"dd/mm/yyyy"} onChange={(date) => {
                setInputState({...inputState, date: date})
            }}
            />
        </div>
        <div className="selects input-control">
            <select required value ={category } name="category" id="category" onChange={handleInput('category')}>
                <option value="" disabled>Select Options</option>
                <option value="salary" >Salary</option>
                <option value="freelancing" >Freelancing</option>
                <option value="investments" >Investments</option>
                <option value="stocks" >Stocks</option>
                <option value="bitcoins" >Bitcoins</option>
                <option value="bank" >Bank</option>
                <option value="youtube" >Youtube</option>
                <option value="other" >Other</option>
            </select>
        </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`

`

export default Form