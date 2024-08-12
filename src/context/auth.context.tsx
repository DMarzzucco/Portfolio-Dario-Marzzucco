"use client";

import { act, AuthProp, useContProp } from "@/ts";
// import { useRouter } from "next/router";
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

    const [section, setSection] = React.useState<number | null>(null)

    const [state, setState] = React.useState<boolean>(false)

    const [skills, setSkills] = React.useState<boolean>(false)
    const [habs, setHabs] = React.useState<boolean>(false)

    const [about, setAbout] = React.useState<boolean>(false)

    // const router = useRouter()

    const handleSubmit = (index: number) => {
        setSection(pre => (pre === index ? null : index))
    }
    const action = (op: act) => {
        switch (op.type) {
            case "open_nav":
                setState(true);
                break;
            case "close_nav":
                setState(false)
                break;

            case "skills_op":
                setSkills(true);
                setHabs(false);
                break;
            case "out_skills":
                setSkills(false)
                break;

            case "habs_op":
                setHabs(true)
                setSkills(false)
                break;
            case "out_habs":
                setHabs(false)
                break;

            // 
            case "about":
                setAbout(!about)
                setSkills(false)
                setHabs(false)
                break;
            case "project":
                // router.push('/project')
                setAbout(false)
                setSkills(false)
                setHabs(false)
                break;
            default:
                throw new Error

        }
    }
    return (
        <AuthContext.Provider value={{ state, action, skills, habs, about, handleSubmit, section }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;