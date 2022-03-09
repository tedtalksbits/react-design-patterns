import React from 'react'

export const MinimalUserDetails = ({ user }) => {
   const { first_name, last_name, email } = user;
   return (
      <>
         <p>Name: {first_name}, {last_name}</p>
         <p>Email: {email}</p>
      </>
   )
}


