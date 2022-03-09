import React from 'react'
import { Loading } from './ui/Loading';

export const CompleteProductDetails = ({ product }) => {

   const { title, price, description, image, rating } = product;
   return title ? (
      <>
         <p>Product: {title}</p>
         <p>description: {description}</p>
         <p>price: ${price}</p>
         <img height={220} width={220} src={image} alt={title} />
         <p>rating: {rating.rate}</p>
         <span>votes: {rating.count}</span>
      </>

   ) : <Loading />

}
