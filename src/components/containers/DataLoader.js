import React, { useEffect, useState } from 'react'

export const DataLoader = ({ url, children, resourceName }) => {

   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch(url, {
            method: 'GET'
         })
         const result = await response.json();

         setData(result)
      }
      fetchData();
   }, [url])
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
