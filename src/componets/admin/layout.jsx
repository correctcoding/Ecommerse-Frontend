import React from 'react'
import Sidebar from '../Sidebar'

function AdminLayout({children}) {
  return (
    <div className='w-full'>
        <Sidebar/>
        <main>
          {children}
        </main>
    </div>
  )
}

export default AdminLayout