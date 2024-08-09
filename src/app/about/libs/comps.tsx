"use client";
import { template_props } from "@/ts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import { faXmark } from "@/assets"
import { useAuth } from "@/context/auth.context";

export default class Coms {
    template_windows: React.FC<template_props> = ({ children, title, click }) => {
        return (
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row justify-between items-center">
                    <h2>{title}</h2>
                    <button onClick={click}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="flex flex-col justify-center items-start h-28 overflow-y-auto">
                    {children}
                </div>
            </div>
        )
    }
    skills_windows: React.FC = () => {
        const { action, skills } = useAuth()
        return (
            <>
                {!skills ? null :
                    <this.template_windows
                        title="Skills"
                        click={() => { action({ type: "out_skills" }) }}>
                        <ul>
                            <li>asd</li>
                            <li>asd</li>
                            <li>asd</li>
                        </ul>
                    </this.template_windows>
                }
            </>
        )
    }
    habs_windows: React.FC = () => {
        const { action, habs } = useAuth()
        return (
            <>
                {!habs ? null :
                    <this.template_windows
                        title="Habs"
                        click={() => { action({ type: "out_habs" }) }}>
                        <ul>
                            <li>asd</li>
                            <li>asd</li>
                            <li>asd</li>
                        </ul>
                    </this.template_windows>
                }
            </>
        )
    }

}