"use client";

import { useContProp } from "@/ts";
import React from "react";

export const AuthContext = React.createContext<useContProp | undefined>(undefined)

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [section, setSection] = React.useState<number | null>(null)

    /**
     * handler index.
     * @params (index: number)
     * @returns handleSubmit
     */
    const handleSubmit = (index: number) => {
        setSection(pre => (pre === index ? null : index))
    }
    return (
        <AuthContext.Provider value={{ handleSubmit, section }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used')
    }
    return context;

}