import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
interface LayoutProps {
  children: React.ReactNode
}
const Layout:React.FC<LayoutProps> =({children})=> {
  return (
    <div className='flex'>
      <div className='basis-1/6'><Sidebar/></div>
      <div className='basis-10/12'>
      {children}
      </div>
    </div>
  )
}

export default Layout