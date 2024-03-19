import Menubar from '@/components/menubar/Menubar'
import React, { ReactNode } from 'react'
import Footer from '@/components/sections/footer/Footer'

interface LayoutProps {
  children: ReactNode // ReactNode allows any valid React child type
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-[100vw] overflow-x-hidden">
      <Menubar />
      {children}
    </div>
  )
}

export default Layout
