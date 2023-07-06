import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest, getUsersRequest } from "../api/auth.js";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth tiene que ser usado junto con AuthProvider");
    };
    return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [allUser, setAllUser] = useState([]);

    const getUsers = async () => {
        try {
            const res = await getUsersRequest();
            console.log(res)
            setAllUser(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (error) {
            setErrors(error.response.data);
        }
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }
            setErrors([error.response.data.message]);
        }
    };

    const logout = () => {
        Cookies.remove("token");
        setIsAuthenticated(false);
        setUser(null);
    };

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 8000);
            return () => clearTimeout(timer);
        }
    });

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get();
            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null);
            }
            try {
                const res = await verifyTokenRequest(cookies.token);
                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }
                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
            }
        }
        checkLogin();
    }, []);
    

    return (
        <AuthContext.Provider value={{
            signup, signin, logout, loading, user, isAuthenticated, errors, allUser, getUsers,
        }}>
            {children}
        </AuthContext.Provider>
    )
}