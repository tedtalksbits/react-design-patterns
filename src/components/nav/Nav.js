import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { links } from './links'
import styled from 'styled-components'

const Navbar = styled.nav`
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
   margin: 0;
   min-block-size: 4rem;
   margin-bottom: 2rem;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;
   padding: 10px;
   background: white;
   z-index: 3;
   position: sticky;
   top: 0;
   button{
      margin-left: auto;
   }
   @media screen and (min-width: 740px) {
     
      button{
         display: none;
      }
   }
`
const NLinks = styled.ul`
   display: flex;
   gap: 1rem;
   align-items: center;
   justify-content: center;
   margin: 0;
   opacity: 1;
   transition: .3s cubic-bezier(0.39, 0.58, 0.57, 1) all;
   
   li{
      list-style: none;
   }
   
   @media screen and (max-width: 740px){
      flex-direction: column;
      padding: 2rem 1rem;
      background: var(--background);
      color: white;
      width: 100%;
      position: fixed;
      top: ${({ when }) => when ? '0' : '14rem'};
      bottom: 0;
      z-index: -1;
      border-radius: ${({ when }) => when ? '0' : '100px 100px 0 0'};


      &.hide{
         /* position: fixed; */
         visibility: hidden;
         opacity: 0;
      }
   }
`
const NLink = styled(NavLink)`
   padding: .4rem .6rem;
   border-radius: 100px; 
   text-decoration: none;
   color: #212121;
   transition: all ease 300ms;
   text-transform: capitalize;
   font-weight: 500;

:hover{
   background: var(--background);
}
   &.active{
      color: var(--brand);
      background: var(--background);
      font-weight: 600;
   }
`
export const Nav = () => {
   const [showMobile, setShowMobile] = useState(false)
   return (
      <>


         <Navbar className='nav'>
            <h3>🌐 React Design Patterns</h3>
            <NLinks className={showMobile ? 'show' : 'hide'} when={showMobile}>
               {
                  links.map((link, key) => (
                     <li key={key}> <NLink onClick={() => setShowMobile(false)} to={link.to} activeclassname='active' >{link.title}</NLink></li>
                  ))
               }
            </NLinks>
            <button onClick={() => setShowMobile(!showMobile)}>{showMobile ? 'x' : '='}</button>
         </Navbar>
      </>
   )
}
