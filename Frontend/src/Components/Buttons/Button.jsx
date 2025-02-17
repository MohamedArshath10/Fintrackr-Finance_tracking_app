import React from 'react'
import styled from 'styled-components'


const Button = ({name, icon, onClick, bg, bPad, color, bRad}) => {
  return (
    <ButtonStyled style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
    }} onClick={onClick}>
        {icon}
        {name}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
    font-family: inherit;
    outline: none;
    border: none;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    transition: all .4s ease-in-out;

`

export default Button