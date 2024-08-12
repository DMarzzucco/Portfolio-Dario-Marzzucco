"use client";
import Image from "next/image";
import React from "react";
import { logo2Image, NavImage, profileImage, SoftSkills, DevSkills } from "@/assets";
import { template_props } from "@/ts";
import { useAuth } from "@/context";
import About from "@/components/about/comps";
import Dates from "../about/libs/dates/dates";

const It = new Dates();

export default class Coms {

    template_windows: React.FC<template_props> = ({ children, title, img }) => {
        return (
            <section className="flex flex-row justify-center items-center w-full bg-slate-300 text-slate-800 my-2">
                <div className="flex flex-row justify-center items-center w-full text-slate-500 border-r border-slate-400 h-full p-2 ">
                    <h1 className="text-2xl font-Ligth text-start mx-1">
                        {title}
                    </h1>
                    <Image src={img} alt="" width={160} />
                </div>
                <div className="flex flex-col  items-start w-full h-doshs h-auto overflow-y-scroll p-2">
                    {children}
                </div>
            </section>
        )
    }
    habs_windows: React.FC = () => {
        return (
            <this.template_windows
                title="Soft Skills"
                img={SoftSkills}>
                <div>
                    {It.habs.map((pre, index) => (
                        <div key={index} className="flex flex-col justify-center items-start py-1">
                            <h2 className="text-blue-600">{pre.title}</h2>
                            <p className="text-xs font-light">{pre.context}</p>
                        </div>
                    ))}
                </div>
            </this.template_windows>
        )
    }
    skills_windows: React.FC = () => {
        const { section, handleSubmit } = useAuth()
        return (
            <this.template_windows title="Dev Skills" img={DevSkills}>
                <div>
                    {It.fullstak.map((pre, index) => (
                        <div key={index} className="my-2">
                            <button
                                className="m-1 p-2 font-bold text-xl bg-transparent text-slate-500 "
                                onClick={() => handleSubmit(index)}
                            >
                                {pre.title}
                            </button>
                            {section === index &&
                                <>
                                    {Array.isArray(pre.arr) && pre.arr.map((item, index) => (
                                        <div key={index} className="px-4">
                                            <h3 className="font-bold text-blue-500">
                                                {item.title}
                                            </h3>
                                            <p className="font-light text-slate-500 text-xs">
                                                {item.context}
                                            </p>
                                        </div>
                                    ))}
                                </>
                            }
                        </div>
                    ))}
                </div>
            </this.template_windows>
        )
    }
    // 
    HomeCart = () => {
        const { action, about } = useAuth()
        return (
            <div className="w-auhref home-cart flex flex-col
             justify-center items-center">
                <div className="w-auhref flex flex-col 
                justify-center items-center my-8 ">
                    {/*  */}
                    <Image src={NavImage} alt=""
                        className="w-60 home:w-20 my-3" />
                    <Image
                        src={logo2Image}
                        alt=""
                        className="w-96 home:w-60" />
                    {/*  */}
                </div>
                {/*  */}
                <button
                    onClick={() => { action({ type: "about" }) }}
                    className="flex flex-row justify-center
                 items-center bg-blackGray p-1 rounded-2xl mini3:flex-col mini3:rounded-20">
                    {/*  */}
                    <Image src={profileImage} alt="" className="w-20 rounded-full" />
                    {/*  */}
                    <div className="flex flex-col items-start justify-center mx-3 mini3:items-center mini3:text-center ">
                        <h1 className="font-bold text-xl mini3:text-20 ">Dario Marzzucco</h1>
                        <div className="text-15 font-jet w-tre mini3:w-doshMed text-Gr text-xs font-light text-start">
                            {!about ?
                                <p>FullStack Developer</p>
                                :
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, illo recusandae reiciendis quod sint eligendi minima harum, sed nobis laudantium labore quae soluta ad voluptas! Praesentium quasi iure quia quas?
                                </p>
                            }
                        </div>
                    </div>
                </button>
                <About />
            </div>
        )
    }
}