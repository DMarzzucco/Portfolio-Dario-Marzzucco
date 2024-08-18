"use client";
import Image from "next/image";
import React from "react";
import { logo2Image, NavImage, profileImage, SoftSkills, DevSkills } from "@/assets";
import { useAuth } from "@/context";
import Dates from "../about/dates";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DateTransfers from "../libs/Data.Transfers";

const It = new Dates();
export default class Coms {

    habs_windows: React.FC = () => {
        return (
            <div className="flex flex-row mini3:flex-col justify-center items-center text-slate-300 ">
                <div className="flex flex-col justify-center items-center w-full text-slate-300  h-full p-2 ">
                    <Image src={SoftSkills} alt="" width={160} />
                    <h1 className="text-2xl font-Ligth text-start mx-1">
                        Soft Skills
                    </h1>
                </div>
                <div className="gb  p-2 rounded-lg border-2 border-blue-500">
                    {It.habs.map((pre, index) => (
                        <div key={index} className="flex flex-col justify-center items-start py-1">
                            <h2 className="text-blue-500">{pre.title}</h2>
                            <p className="text-xs font-light text-slate-400">{pre.context}</p>
                        </div>
                    ))}
                </div>
            </div >
        )
    }
    skill_list: React.FC<{ item: any }> = ({ item }) => {
        return (
            <div className="flex flex-col justify-center items-start p-4 w-tre h-dosh border border-slate-500 rounded-lg m-2 sixmit:py-2 sixmit:border-none sixmit:border-b sixmit:h-auto">
                <h3 className="font-bold text-blue-500">
                    {item.title}
                </h3>
                <ul className="list-disc p-2">
                    {Object.keys(item).map((key) => {
                        if (key.startsWith("context") && typeof item[key] === "string") {
                            return <li key={key} className="font-light text-slate-500 text-xs">
                                {item[key]}
                            </li>
                        }
                        return null
                    })}
                </ul>
            </div>
        )
    }
    skills_windows: React.FC = () => {
        const { section, handleSubmit } = useAuth()
        return (
            <div className="flex flex-col justify-center items-center w-full ">
                <div className="flex flex-col justify-center items-center w-full text-slate-300  h-full p-2 ">
                    <Image src={DevSkills} alt="" width={160} />
                    <h1 className="text-2xl font-Ligth text-start mx-1">
                        Dev Skills
                    </h1>
                </div>
                <div className=" flex flex-col justify-center items-start w-full ">
                    {It.fullstak.map((pre, index) => (
                        <div key={index} className="my-2 p-2 ">
                            <button
                                className="m-1 p-2 font-bold text-xl bg-transparent text-slate-500 w-tre text-center flex flex-col justify-center items-start"
                                onClick={() => handleSubmit(index)}
                            >
                                <h2>{pre.title}</h2>
                                {section !== index && (
                                    <span className="text-xs font-light text-start">
                                        {pre.resume}
                                    </span>
                                )}
                            </button>
                            {section === index && (
                                <div className="grid grid-cols-3 About:grid-cols-2 sixmit:grid-cols-1 sixmit:overflow-y-scroll sixmit:justify-start sixmit:h-tre justify-center items-center">
                                    {Array.isArray(pre.arr) && pre.arr.map((item, index) => (
                                        <this.skill_list key={index} item={item} />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    FooterEn: React.FC = () => {
        const Dt = new DateTransfers()
        return (
            <>
                {Dt.RedSocials.map((pre, index) => (
                    <Link key={index} className="m-2" href={pre.src}>
                        <FontAwesomeIcon icon={pre.icon} />
                    </Link>
                ))}
            </>
        )
    }
    // 
    HomeCart = () => {
        return (
            <div className="w-auhrefss w-full home-cart flex flex-col
             justify-center items-center">
                <div
                    className="flex flex-col justify-center
                 items-center bg-blackGray p-2 rounded-lg w-auto ">

                    <div className="flex flex-row justify-center
                 items-center  mini3:flex-col p-2">

                        <Image src={profileImage} alt="" className="w-20 rounded-full" />

                        <div className="flex flex-col items-start justify-center mx-3 mini3:items-center mini3:text-center ">
                            <h1 className="font-bold text-2xl mini3:text-20 ">Dario Marzzucco</h1>
                            <div className="text-15 font-jet w-tre mini3:w-doshMed text-Gr text-xs font-light text-start mini3:text-center">
                                <p>FullStack Developer</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <this.FooterEn />
                            </div>
                        </div>
                    </div>
                    <p className="w-tre">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, illo recusandae reiciendis quod sint eligendi minima harum, sed nobis laudantium labore quae soluta ad voluptas! Praesentium quasi iure quia quas?
                    </p>
                </div>
            </div>
        )
    }
}