// import React, { useState } from 'react'
// import { Route, Routes } from "react-router-dom"
// import CheckAuth from './utls/CheckAuth'
// import AuthLayout from './componets/auth/Layout'
// import ShopPage from './pages/auth/Shop'
// import LoginPage from './pages/auth/Login'
// import RegisterPage from './pages/auth/Register'

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState({
//     role: "user"
//   });

//   return (
//     // transition-colors duration-500 use kora hoyeche jeno mode change smooth hoy
//     <div className='min-h-screen bg-background dark:bg-inverse-surface text-on-background transition-colors duration-500'>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <CheckAuth isAuthenticated={isAuthenticated} user={user}>
//               <AuthLayout isAuthenticated={isAuthenticated} user={user} />
//             </CheckAuth>
//           }
//         >
//           {/* Default path-e shop page thakte pare ba login */}
//           <Route path="login" element={<LoginPage />} />
//           <Route path="register" element={<RegisterPage />} />
//           <Route path="shop" element={<ShopPage />} />
//         </Route>
//       </Routes>
//     </div>
//   )
// }

// export default App;

import React, { useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from './store/auth-slice'
import CheckAuth from './utls/CheckAuth'
import AuthLayout from './componets/auth/Layout'
import ShopPage from './pages/auth/Shop'

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user, isLoading } = useSelector((state) => state.auth);
  console.log("App.jsx - Auth State:", { isAuthenticated, user, isLoading });

  // App mount holei check korbe user logged in kina
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  // Initial loading state handle kora (khub guruttopurno)
  if (isLoading) return <div className="flex items-center justify-center h-screen">Loading...</div>;

  return (
    <div className='min-h-screen bg-background dark:bg-inverse-surface text-on-background transition-colors duration-500'>
      <Routes>
        {/* Main Wrapper */}
        <Route
          path="/"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          {/* Default shop page */}
          <Route path="shop" element={<ShopPage />} />
          
          {/* Admin routes ekhon logic onujayi CheckAuth handle korbe */}
          <Route path="admin/dashboard" element={<div>Admin Dashboard</div>} />
        </Route>
        
        <Route path="/unauth-page" element={<h1>You are not authorized!</h1>} />
      </Routes>
    </div>
  )
}

export default App;