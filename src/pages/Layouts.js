import React from 'react'
import { CompleteUserDetails } from '../components/CompleteUserDetails'
import SplitScreen from '../components/layout/SplitScreen'
import { peoplesData } from '../data/people'

export const Layouts = () => {
   return (
      <div>
         <h1 className="heading">Split View 🖖🏼</h1>
         <SplitScreen leftWeight={2} rightWeight={1}>
            <CompleteUserDetails user={peoplesData[9]} />
            <CompleteUserDetails user={peoplesData[6]} />
         </SplitScreen>
         <SplitScreen rightWeight={1} leftWeight={2}>
            <img style={{width: '100%', objectFit: 'contain'}} src="https://images.unsplash.com/photo-1639884758285-00377c9ccd87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="woman walking on sand" />
            <div>
               <h1 style={{fontSize: '4rem', marginBottom: '4rem', lineHeight: '4rem'}}>Welcome to my beach🏖</h1>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita esse sequi cumque reprehenderit animi veritatis cupiditate temporibus nobis ipsa quae.</p>
            </div>
         </SplitScreen>
      </div>
   )
}
