import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

export default function Layout() {
  const location = useLocation()
  const bare = location.pathname === '/apply'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="app-shell">
      {!bare && <Navbar />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
