import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   padding: 1rem 2rem;
   border: 1px lightgray solid;
   display: flex;
   flex-direction: column;
   gap: .5rem;
   background: ${props => props.color || 'lightgrey'};
   margin: 1rem 0;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   border-radius: 5px;
   transition: all ease .4s;
   animation: zoom ease .4s forwards;
`
export const Card = ({ children, color }) => {
   return (
      <Container color={color}>
         {children}
      </Container>
   )
}
