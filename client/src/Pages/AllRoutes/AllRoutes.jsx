import React from 'react'
import { Route, Routes } from "react-router-dom";
import AddressBook from '../AddressBook/AddressBook';
import Home from '../Home';
import Products from '../Products/Products';


const AllRoutes = () => {
  return (
    <>
    <Routes>
    <Route path='' element={<Home/>}/>
        <Route path='addresses' element={<AddressBook/>}/>
        <Route path='products' element={<Products/>}/>

    </Routes>
    </>
  )
}

export default AllRoutes