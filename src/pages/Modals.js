import React, { useState } from 'react'
import { ControlledModal } from '../components/modal/ControlledModal'
import { UncontrolledModal } from '../components/modal/UncontrolledModal'

export const Modals = () => {

   const [showModal, setShowModal] = useState(false)
   return (
      <div>
         <h1 className="heading">Uncontrolled🤪 & Controlled😌 modals</h1>

         <h3>Uncontrolled🤪</h3>
         <UncontrolledModal>
            <h1>I am an uncontrolled modal🤪</h1>
            <p>My state is within my component🥷🏽</p>
         </UncontrolledModal>

         <hr />
         <h3>Controlled😌</h3>
         <button
            onClick={() => setShowModal((prevState) => !prevState)}
         >
            {showModal ? 'close modal' : 'open modal'}
         </button>
         <ControlledModal isVisible={showModal} onClose={() => setShowModal(false)}>
            <h1>I am an controlled modal😌</h1>
            <p>My state is my  parent component🤰🏽</p>
         </ControlledModal>
      </div>
   )
}
