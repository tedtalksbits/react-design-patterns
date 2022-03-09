import React, { useState } from 'react'
import { ControlledOnboarding } from '../components/onboarding/ControlledOnboarding';
import { UncontrolledOnboarding } from '../components/onboarding/UncontrolledOnboarding'
import styled from 'styled-components';

const FieldSet = styled.fieldset`
   border-radius: 5px;
   background: var(--background); 
   padding: 2rem;
   border: none;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   transition: all ease .25s;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
   :focus-within{
      box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
     
   }
   input{
      font-size: 1.2rem;
      padding: .4rem .5rem;
      border-radius: 5px;
      border: none;
   }
  
`
const StepOne = ({ goToNext }) => {
   const [username, setUsername] = useState({
      username: ""
   })
   const handleChange = (e) => {
      setUsername({ username: e.target.value })
   }
   return (
      <FieldSet className='step'>
         <h1>Step 1</h1>
         <label htmlFor="Name">Please create a username: </label>
         <input autoFocus type="text" placeholder='name' id='name' value={username.username} onChange={handleChange} />
         <button onClick={() => goToNext(username)}>Next ⏭</button>
      </FieldSet>
   )
};
const StepTwo = ({ goToNext }) => {
   const [password, setPassword] = useState({
      password: ""
   })
   const handleChange = (e) => {
      setPassword({ password: e.target.value })
   }
   return (
      <FieldSet className='step'>
         <h1>Step 2</h1>
         <label htmlFor="password">Please create a username: </label>
         <input autoFocus type="password" name="password" id="password" placeholder='password' value={password.password} onChange={handleChange} />
         <button onClick={() => goToNext(password)}>Next ⏭</button>
      </FieldSet>
   )
};
const StepThree = ({ goToNext }) => {
   const [age, setAge] = useState({
      age: 0
   })
   const handleChange = (e) => {
      setAge({ age: Number(e.target.value) })
   }
   return (

      <FieldSet className='step'>
         <h1>Step 3</h1>
         <label htmlFor="age">How old are you? :</label>
         <input autoFocus id='age' type="number" placeholder='age' value={age.age} onChange={handleChange} />
         <button onClick={() => goToNext(age)}>Next ⏭</button>
      </FieldSet>
   );
}

const Completed = ({ children }) => (
   <>
      <h1 className="heading">Completed!✅</h1>
      {children}
   </>
)
export const Onboarding = () => {
   const [onboardingData, setOnboardingData] = useState({});
   const [currentIndex, setCurrentIndex] = useState(0);

   const onNext = stepData => {
      setOnboardingData({ ...onboardingData, ...stepData });
      setCurrentIndex(currentIndex + 1);
   }
   return (
      <div>
         <h1 className="heading">Uncontrolled Onboarding 📩</h1>

         <UncontrolledOnboarding onFinish={(data) => { console.log(data) }}>
            <StepOne />
            <StepTwo />
            <StepThree />
         </UncontrolledOnboarding>

         <h1 className="heading delay-2">Controlled Onboarding 📩</h1>
         <p className="heading elay-2">(State lives in parent)</p>
         <ControlledOnboarding currentIndex={currentIndex} onNext={onNext}>
            <StepOne />
            <StepTwo />
            <StepThree />
            {currentIndex > 2 && <Completed >{JSON.stringify(onboardingData)}</Completed>}
         </ControlledOnboarding>
      </div>
   )
}
