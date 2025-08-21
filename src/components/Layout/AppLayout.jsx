import React from 'react'
import Headers from '../ui/Headers'
import Footer from '../ui/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout
