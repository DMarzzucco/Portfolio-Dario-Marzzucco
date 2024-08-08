"use client";

import { act, AuthProp, useContProp } from "@/ts";
import React from "react";

export const AuthContext = React.createContext<useContProp | undefined>(undefined)

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used')
    }
    return context;

}

const AuthProvider: React.FC<AuthProp> = ({ children }) => {
    const [state, setState] = React.useState<boolean>(false)

    const action = (op: act) => {
        switch (op.type) {
            case "open":
                setState(true);
                break;
            case "close":
                setState(false)
                break;
            default:
                throw new Error

        }
    }
    return (
        <AuthContext.Provider value={{ state, action }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;