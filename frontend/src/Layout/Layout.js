import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/add">AddContact</Link>
      <Outlet />
    </div>
  )
}

export default Layout
