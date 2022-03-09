import React from 'react'
import { Background, Body } from './UncontrolledModal'


export const ControlledModal = ({ children, isVisible, onClose }) => {


   return (
      <>
         {isVisible &&

            <Background onClick={onClose}>
               <Body onClick={(e) => e.stopPropagation()}>
                  {children}
               </Body>
            </Background>
         }
      </>
   )
}
