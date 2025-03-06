import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({isAuthenticated, user, children}) {

    console.log("Rendering CheckAuth Component... : ", children);

    const location = useLocation();

    if(location.pathname === "/") {
       if(!isAuthenticated) {
        return  <Navigate to="/auth/login" />
       }else {
        if(user?.role === "admin") {
            return <Navigate to="/admin/dashboard" />
        }else {
            return <Navigate to="/shop/home" />
        }
       }
    }


    return <>{children}</>
 
}

export default CheckAuth;