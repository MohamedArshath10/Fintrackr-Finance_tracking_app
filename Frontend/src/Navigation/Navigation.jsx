import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import avatar from '../img/avatar.png';
import { menuItems } from '../Utils/menuItems';
import { signout } from '../Utils/Icons';
import { FiMenu, FiX } from 'react-icons/fi';

const Navigation = ({ active, setActive }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </MenuToggle>
      )}
      <NavStyled menuOpen={menuOpen} isMobile={isMobile}>
        <div className="user-con">
          <img src={avatar} alt="User Avatar" />
          <div className="text">
            <h2>Arshath</h2>
            <p>Your Money</p>
          </div>
        </div>
        <ul className="menu-items">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                setActive(item.id);
                if (isMobile) setMenuOpen(false);
              }}
              className={active === item.id ? 'active' : ''}
            >
              {item.icon}<span>{item.title}</span>
            </li>
          ))}
        </ul>
        <div className="bottom-nav">
          <li>{signout} Sign Out</li>
        </div>
      </NavStyled>
    </>
  );
};

const MenuToggle = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1100;
  color: rgba(34, 34, 96, 0.6);
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: ${({ isMobile }) => (isMobile ? '260px' : '374px')};
  height: 100%;
  background: rgba(242, 243, 253, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  position: ${({ isMobile }) => (isMobile ? 'fixed' : 'static')};
  left: ${({ menuOpen, isMobile }) => (isMobile ? (menuOpen ? '0' : '-100%') : '0')};
  top: 0;
  height: 100vh;
  transition: left 0.3s ease-in-out;
  z-index: 100;

  @media (max-width: 768px) {
    width: 260px;
  }

  .user-con {
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 2px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }
`;

export default Navigation;