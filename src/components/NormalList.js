import React from 'react'

const NormalList = ({ itemsArr, resourceName, itemComponent: ItemComponent }) => {
   return (
      <>
         {itemsArr.map((item, key) => (
            <ItemComponent key={key} {...{ [resourceName]: item }} />
         ))}
      </>
   )
}

export default NormalList
