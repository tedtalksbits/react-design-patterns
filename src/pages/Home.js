import React from 'react'
import styled from 'styled-components'

const Topic = styled.article`
   background: var(--background);
   padding: 2rem;
   border-radius: 5px;
   display: flex;
   min-block-size: max-content;
   gap: 1rem;
   justify-content: space-between;
   flex-direction: column;
   margin-bottom: 1rem;
   box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
   transition: all ease .4s;
   animation: zoom ease .4s;

   details{
      padding: .4rem;
      cursor: pointer;
      user-select: none;
   }
   summary{
      margin-bottom: 1rem;
   }
   p{
      margin-bottom: 1rem;
   }
`
export const Home = () => {
   return (
      <div>
         <h1 className="heading">Home🛖</h1>

         <Topic className="topic">
            <h2>Layout Components</h2>
            <details>
               <summary><b>What are layout components?</b></summary>
               <p className="text">
                  A component that deal primarily with arranging other components on the page.
               </p>
               <p className='highlight'>example: </p>
               <ul>
                  <li>Split screens</li>
                  <li>Lists and Items</li>
                  <li>Modals</li>
               </ul>
            </details>
         </Topic>
         <Topic className="topic" style={{ animationDelay: '0.1s' }}>
            <h2>Container Components</h2>
            <details>
               <summary><b>What are container components?</b></summary>
               <p className="text">
                  Components that take care of loading and managing data for their children components.
               </p>
               <b>The Idea of Container Components:</b>
               <p className="text">Our components should not know where their data is coming from.</p>
            </details>
         </Topic>
         <Topic className="topic" style={{ animationDelay: '0.2s' }}>
            <h2>Higher-Order Components (HOC)</h2>
            <details>
               <summary><b>What are HOC's?</b></summary>
               <p className="text">
                  A component thats returns another component in stead of JSX.
               </p>

            </details>
         </Topic>
      </div>
   )
}
