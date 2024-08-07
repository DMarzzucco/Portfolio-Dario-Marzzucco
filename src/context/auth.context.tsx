"use client";

import React from "react";

export const AuthContext = React.createContext<useContProp | undefined>(undefined)

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used')
    }
    return context;

}
export interface AuthProp { children: React.ReactNode }

export interface useContProp {
    state: boolean;
    closeMenu: () => void;
    openMenu: () => void;
    OutClick: () => void;
    Ref: React.RefObject<HTMLDivElement>
}
const AuthProvider: React.FC<AuthProp> = ({ children }) => {
    const [state, setState] = React.useState<boolean>(false)

    const Ref = React.useRef<HTMLDivElement>(null)

    const OutClick = () => {
        const click = (e: MouseEvent) => {
            if (Ref.current && e.target instanceof Node && !Ref.current.contains(e.target)) {
                setState(false);
            }
        }
        document.addEventListener("mousedown", click);
        return () => {
            document.removeEventListener("mousedown", click)
        }
    }

    const openMenu = () => { setState(true) }
    const closeMenu = () => { setState(false) }


    return (
        <AuthContext.Provider value={{ state, closeMenu, openMenu, OutClick, Ref }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;