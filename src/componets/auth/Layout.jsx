import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import AuthPopup from './AuthPopup';

function AuthLayout({ isAuthenticated, user }) {
  const [showAuth, setShowAuth] = useState(false);
  return (
    <div className='w-full flex flex-col min-h-screen'>
      {/* Navbar-e auth states pass kora holo */}
      <Navbar isAuthenticated={isAuthenticated} user={user} onLoginClick={() => setShowAuth(true)} />

      {/* main area-te max-width ebong responsive padding add kora holo */}
      <main className='pt-20 pb-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex-1'>
        {/* Page transition-er jonno ekhane motion.div add kora jete pare */}
        <div className="w-full animate-in fade-in duration-500">
          <Outlet />
        </div>

        {/* Popup Component */}
        <AuthPopup isOpen={showAuth} onClose={() => setShowAuth(false)} />
      </main>
    </div>
  )
}

export default AuthLayout;