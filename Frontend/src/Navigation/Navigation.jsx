import React from 'react'
import styled from 'styled-components'
// import {avatar} from '..img/react.svg'
import { menuItems } from "../Utils/menuItems";
import { signout } from '../Utils/Icons';

const Navigation = () => {
  return (
    <NavStyled>
        <div className="user-con">
          {/* <img src={avatar} alt="" /> */}
          <div className="text">
            <h2>Arshath</h2>
            <p>Your Money</p>
          </div>
        </div>
        <ul className="menu-items">
          {menuItems.map((item) => {
            return <li key={item.id}>{item.icon}<span>{item.title}</span></li>
          })}
        </ul>
        <div className="bottom-nav">
          <li>
            {signout} Sign Out
          </li>
        </div>
    </NavStyled>
  )
}

const NavStyled = styled.div`




`

export default Navigation