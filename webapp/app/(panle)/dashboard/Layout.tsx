import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import HeaderApp from '../components/HeaderApp/HeaderApp'
interface LayoutProps {
  children : React.ReactNode
}
const Layout:React.FC<LayoutProps> =({children })=> {
  return (
    <div className='flex w-full'>
      
      <div className='w-[16rem]'><Sidebar/></div>
      <div className='flex-1 flex flex-col'> 
      <HeaderApp/>
      <div className='p-4'>{children }</div>
      </div>
      </div>
  )
}

export default Layout