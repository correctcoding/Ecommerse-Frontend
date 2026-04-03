// // import { Navigate, useLocation } from "react-router-dom";

// // function CheckAuth({ isAuthenticated, user, children }) {
// //   const location = useLocation();

// //   // ১. Home ("/") route handle kora
// //   if (location.pathname === "/") {
// //     if (!isAuthenticated) {
// //       // Login na thakle Home ("/") theke login-e pathabe
// //       return <Navigate to="/shop" />;
// //     } else {
// //       // Login thakle role onujayi dashboard ba shop-e pathabe
// //       if (user?.role === "admin") {
// //         return <Navigate to="/admin/dashboard" />;
// //       } else {
// //         return <Navigate to="/shop" />;
// //       }
// //     }
// //   }

// //   // ২. PUBLIC ROUTES BYPASS (Jekhane login lagbe na)
// //   // Ekhane '/shop' ke include kora hoyeche jate nicher login check-e eta na pore
// //   const isPublicRoute = location.pathname.includes("/shop") || 
// //                         location.pathname.includes("/login") || 
// //                         location.pathname.includes("/register")||
// //                         location.pathname.includes("/contact");

// //   // ৩. Jodi user login kora na thake ebong kono public route-eo na thake (e.g. /cart, /checkout)
// //   if (!isAuthenticated && !isPublicRoute) {
// //     return <Navigate to="/shop" />;
// //   }

// //   // ৪. User login thakle Login/Register-e jete chaile redirect
// //   if (
// //     isAuthenticated &&
// //     (location.pathname.includes("/login") || location.pathname.includes("/register"))
// //   ) {
// //     if (user?.role === "admin") {
// //       return <Navigate to="/admin/dashboard" />;
// //     } else {
// //       return <Navigate to="/shop" />;
// //     }
// //   }

// //   // ৫. Role-based Access Control (RBAC)
// //   // Admin route-e non-admin ke block kora
// //   if (
// //     isAuthenticated &&
// //     user?.role !== "admin" &&
// //     location.pathname.includes("admin")
// //   ) {
// //     return <Navigate to="/unauth-page" />;
// //   }

// //   // ৬. Admin-ke shop/checkout theke admin dashboard-e redirect kora (Optional)
// //   if (
// //     isAuthenticated &&
// //     user?.role === "admin" &&
// //     (location.pathname.includes("shop") || location.pathname.includes("cart"))
// //   ) {
// //     return <Navigate to="/admin/dashboard" />;
// //   }

// //   return <>{children}</>;
// // }

// // export default CheckAuth;


// import { Navigate, useLocation } from "react-router-dom";

// function CheckAuth({ isAuthenticated, user, children }) {
//   const location = useLocation();

//   // ১. Home ("/") route handling
//   // Jodi keu root domain-e ashe, take shop-e ba admin dashboard-e pathiye deya
//   if (location.pathname === "/") {
//     if (isAuthenticated && user?.role === "admin") {
//       return <Navigate to="/admin/dashboard" />;
//     }
//     return <Navigate to="/shop" />;
//   }

//   // ২. Public Routes (Jekhane login lagbe na)
//   // Ekhon login/register route-er proyojon nei karon oghulo popup-e
//   const isPublicRoute = 
//     location.pathname.includes("/shop") || 
//     location.pathname.includes("/contact") ||
//     location.pathname.includes("/visual-search") ||
//     location.pathname.includes("/unauth-page");

//   // ৩. Unauthenticated User Protection
//   // Jodi user login na thake ebong kono private route-e (e.g. /cart, /checkout, /admin) jete chay
//   if (!isAuthenticated && !isPublicRoute) {
//     // Take shop-e pathiye dao jate shekhan theke popup login korte pare
//     return <Navigate to="/shop" />;
//   }

//   // ৪. Role-based Access Control (RBAC)
//   // Admin route-e non-admin (customer) ke block kora
//   if (
//     isAuthenticated &&
//     user?.role !== "admin" &&
//     location.pathname.includes("admin")
//   ) {
//     return <Navigate to="/unauth-page" />;
//   }

//   // ৫. Admin Redirection (Optional)
//   // Admin jodi bhuleo shop ba cart-e jete chay, take dashboard-e niye jao
//   if (
//     isAuthenticated &&
//     user?.role === "admin" &&
//     (location.pathname.includes("shop") || 
//      location.pathname.includes("cart") || 
//      location.pathname.includes("checkout"))
//   ) {
//     return <Navigate to="/admin/dashboard" />;
//   }

//   return <>{children}</>;
// }

// export default CheckAuth;


import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // 1. Root redirect
  if (location.pathname === "/") {
    if (isAuthenticated && user?.role === "admin") return <Navigate to="/admin/dashboard" />;
    return <Navigate to="/shop" />;
  }

  // 2. Public paths definition
  const isPublicRoute = 
    location.pathname.includes("/shop") || 
    location.pathname.includes("/contact") ||
    location.pathname.includes("/unauth-page");

  // 3. Private route protection
  if (!isAuthenticated && !isPublicRoute) {
    return <Navigate to="/shop" />;
  }

  // 4. Role-based Access (Admin only)
  if (isAuthenticated && user?.role !== "admin" && location.pathname.includes("admin")) {
    return <Navigate to="/unauth-page" />;
  }

  // 5. Admin trying to access customer pages
  if (isAuthenticated && user?.role === "admin" && (location.pathname.includes("cart") || location.pathname.includes("checkout"))) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}


export default CheckAuth;