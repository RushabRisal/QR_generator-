import { Header } from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <div>
        <main className='min-h-screen container'>
            <Header/>
            <Outlet/>
        </main>
        <div className='text-center p-10 bg-gray-800 mt-10'>
          hello world ❤️ from rushab
        </div>
    </div>
  )
}
