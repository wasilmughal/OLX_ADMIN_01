import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dasbord from '../Compunets/Dasbord'
import Phone from '../Compunets/Phone'
import Oders from '../Compunets/Oders'
import RetuenItms from '../Compunets/RetuenItms'

function Navegation() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Dasbord/>}></Route>
        <Route path='/Phone' element={<Phone/>}></Route>
        <Route path='/Oders' element={<Oders/>}></Route>
        <Route path='/Return' element={<RetuenItms/>}></Route>


        </Routes> 

    </div>
  )
}

export default Navegation

