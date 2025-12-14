import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <ul className='flex items-center gap-[20px] justify-center p-[10px] text-[18px] font-[600]'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/zustand'}>Zustand</Link></li>
            <li><Link to={'/jotai'}>Jotai</Link></li>
            <li><Link to={'/about'}>Mobx</Link></li>
            <li><Link to={'/sync'}>Sync</Link></li>
            <li><Link to={'/syncJotai'}>Sync Jotai</Link></li>   
            <li><Link to={'/counter'}>Counter</Link></li>  
            <li><Link to={'/todo'}>Todo</Link></li>       
        </ul>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout