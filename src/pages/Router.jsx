import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Signin from './signin-page/Signin';
import Front from './front-page/Front';
import Getstarted from './getstarted/Getstarted';

const Router = () => {
  return (
    <>
    <Routes>
    <Route  path='/' element={<Front/>}  />
    <Route  path='/signin' element={<Signin/>}  />
    <Route path='/getstarted' element={<Getstarted/>} />
   
    </Routes>
    </>
  )
}

export default Router;