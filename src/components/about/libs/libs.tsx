"use client";
import { template_props } from "@/ts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import { faXmark } from "@/assets"
import { useAuth } from "@/context/auth.context";
import Dates from "./dates/dates";

const It = new Dates();

export default class Coms {

    template_windows: React.FC<template_props> = ({ children, title, click }) => {
        return (
            <div className="flex flex-col justify-center items-center w-full">
                <div className="flex flex-row justify-between items-center w-full text-slate-700">
                    <h2>{title}</h2>
                    <button onClick={click} className="p-0 m-0 bg-transparent text-slate-800 ">
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="flex flex-col  items-start w-full h-dosh overflow-y-scroll p-2">
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
                        title="Soft Skills"
                        click={() => { action({ type: "out_habs" }) }}>
                        <div>
                            {It.habs.map((pre, index) => (
                                <div key={index} className="flex flex-col justify-center items-start border-t border-slate-800 py-1">
                                    <h2>{pre.title}</h2>
                                    <p className="text-xs font-light">{pre.context}</p>
                                </div>
                            ))}
                        </div>
                    </this.template_windows>
                }
            </>
        )
    }

}