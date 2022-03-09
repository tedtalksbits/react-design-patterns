import React from 'react'

export const CompleteUserDetails = ({ user }) => {
   const { first_name, last_name, gender, email, hobbies } = user;
   return (
      <>
         <p>Name: {first_name}, {last_name}</p>
         <p>Email: {email}</p>
         <p>Gender: {gender}</p>

         <span>Hobbies</span>
         <ul>
            {hobbies.map(hobby => (
               <li key={hobby}>{hobby}</li>
            ))}
         </ul>
      </>
   )
}
