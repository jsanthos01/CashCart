import React , { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);



export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState();

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        })

        return unsubscribe;
    }, []) ;

    const value = { user, signup };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
} 