import React from 'react'
import { CompleteProductDetails } from '../components/CompleteProductDetails'
import { CompleteUserDetails } from '../components/CompleteUserDetails'
import { AnonymouseDataLoader } from '../components/containers/AnonymousDataLoader'
import { DataLoader } from '../components/containers/DataLoader'
import { MinimalProductDetails } from '../components/MinimalProductDetails'
import { MinimalUserDetails } from '../components/MinimalUserDetails'
import NormalList from '../components/NormalList'
import { Card } from '../components/ui/Card'
import { peoplesData } from '../data/people'
import { producctsData } from '../data/products'

const Containers = () => {
   const getLocalStorageData = key => () => {

      return localStorage.getItem(key)
   }
   return (
      <div>
         <h1 className="heading">Data Containers💿</h1>
         <Card>
            <h2>Minimal User List</h2>
            <MinimalUserDetails user={peoplesData[9]} />
         </Card>

         <Card>
            <h2>Detailed Users List</h2>
            <NormalList itemsArr={peoplesData} resourceName="user" itemComponent={CompleteUserDetails} />
         </Card>
         <Card>
            <h2>Detailed Products List</h2>
            <NormalList itemsArr={producctsData} resourceName='product' itemComponent={CompleteProductDetails} />
         </Card>
         <h2>Data Loader Using URL</h2>
         <DataLoader url='https://fakestoreapi.com/products/2' resourceName='product'>
            <CompleteProductDetails />
         </DataLoader>

         <DataLoader url='https://fakestoreapi.com/products/1' resourceName='product'>
            <MinimalProductDetails />
         </DataLoader>
         <h2>Anonymous Data Loader Using Function</h2>
         <AnonymouseDataLoader resourceName='message' getDataFunc={getLocalStorageData('message')}>
            <DisaplayLocalStorage />
         </AnonymouseDataLoader>
      </div>
   )
}
const DisaplayLocalStorage = ({ message }) => {
   return (
      <h1>{message}</h1>
   )
}
export default Containers
