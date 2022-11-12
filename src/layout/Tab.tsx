import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

function Tab() {
  return (
    <div className='tab-layout'>
        <Menu />
        <Outlet />
    </div>
  )
}

export default Tab