import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ThanksPage from './pages/ThanksPage'
import VerificationForm from './pages/ValidationPage'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/validation' element={<VerificationForm />} />
            <Route path='/thanks' element={<ThanksPage />} />
        </Routes>
    </div>
  )
}

export default AppRoutes