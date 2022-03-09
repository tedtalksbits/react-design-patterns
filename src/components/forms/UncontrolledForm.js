import React from 'react'

export const UncontrolledForm = () => {
   return (
      <form>
         <label htmlFor="name">Name: </label>
         <input type="text" placeholder='name' name='name' id='name' />
      </form>
   )
}
