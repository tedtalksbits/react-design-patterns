import React, { useEffect, useState } from 'react'

export const AnonymouseDataLoader = ({ getDataFunc = () => { }, children, resourceName }) => {

   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const data = getDataFunc()

         setData(data)
      }
      fetchData();
   }, [getDataFunc])
   return (
      <>
         {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
               // console.log({ [resourceName]: data });
               // the name of the prop the child is expecting
               return React.cloneElement(child, { [resourceName]: data })
            }
            return child;
         })}
      </>
   )
}
