import React, { useState } from 'react'
import styled from 'styled-components'
export const Background = styled.div`
   background: #212121aa;
   height: 100%;
   width: 100%;
   overflow-y: hidden;
   position: fixed;
   z-index: 1;
   left: 0;
   top: 0;

`
export const Body = styled.div`
   background: white;
   border-radius: 5px;
   padding: 1rem;
   width: 95%;
   margin: auto;
   position: relative;
   top: calc(100vh - 40rem) ;
   max-inline-size: 40rem;
   /* height: 20rem; */
   overflow-y: auto;
   box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`

export const UncontrolledModal = ({ children }) => {

   const [visible, setVisible] = useState(false);
   return (
      <>
         <button onClick={() => setVisible((prevState) => !prevState)}>toggle modal</button>
         {visible &&

            <Background onClick={() => setVisible(false)}>
               <Body onClick={(e) => e.stopPropagation()}>
                  {children}
               </Body>
            </Background>
         }
      </>
   )
}
