import React from 'react'
import { Loading } from './ui/Loading';

export const MinimalProductDetails = ({ product }) => {
   const { title, price, image } = product;
   return title ? (
      <>
         <p>Product: {title}</p>
         <p>price: ${price}</p>
         <img height={220} width={220} src={image} alt={title} />
      </>
   ) :
      <Loading />
}
