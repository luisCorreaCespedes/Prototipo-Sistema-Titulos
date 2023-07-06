import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute() {
    const {loading, isAuthenticated} = useAuth();
    if (loading) return <div></div>;
    if (!loading && !isAuthenticated) return <Navigate to='/' replace />
    return(
        <Outlet />
    )
};

export default ProtectedRoute;