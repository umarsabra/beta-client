import React from 'react'
import { Outlet } from 'react-router-dom'

function Page() {
  return (
    <div className='page-layout'>
        <button>رجوع</button>
        <Outlet />
    </div>
  )
}

export default Page