import React from 'react'
import { UncontrolledForm } from '../components/forms/UncontrolledForm'
import { Editor } from '../components/quill/Editor'

export const Forms = () => {
   return (
      <div>
         <h1 className="heading">Forms</h1>
         <UncontrolledForm />
         <Editor />
      </div>
   )
}
