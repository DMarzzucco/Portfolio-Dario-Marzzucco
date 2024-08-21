"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { profileImage, SoftSkills, DevSkills, CMDIm, faGithub, faLink } from "@/assets";
import { useAuth } from "@/context";
import { Dates } from "@/components";

const mont = Montserrat({ subsets: ["latin"] })

const It = new Dates();
export default class Coms_home {
    /**
     * Template for social media links
     * @returns {React.FC} comunications_vars
     */
    comunications_vars: React.FC = () => {
        return (
            <div className=" flex space-x-4">
                {It.red_social.map((pre, index) => (
                    <Link key={index} href={pre.src} className="text-lg text-goldlow hover:text-gray-200 transition-colors duration-300">
                        <FontAwesomeIcon icon={pre.icon} />
                    </Link>
                ))}
            </div>
        )
    }
    /**
     * Presentation Comp
     * @param null
     * @returns {React.FC}HomeCart
     */
    HomeCart = () => {
        return (
            <section className=" flex flex-col justify-center items-center h-screen w-full">
                {It.presentation_inf.map((pre, index) => (
                    <div key={index} className="flex flex-col md:flex-row justify-center items-center p-2 rounded-lg w-auto">
                        <div className="flex flex-col justify-center items-center  mini3:flex-col p-2">
                            <Image src={profileImage} alt="" width={260} className=" rounded-full border border-slate-300 p-2" />
                            <div className="flex flex-col items-center justify-center mx-3 mini3:items-center mini3:text-center">
                                <h1 className="font-bold text-3xl md:text-6xl">{pre.name}</h1>
                                <p className="font-semibold w-tre mini3:w-doshMed text-Gr text-lg md:text-xl text-center" >{pre.title}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start w-full">
                            <p className="w-tre text-lg md:text-xl">{pre.context}</p>
                            <div className="flex justify-start items-start w-full border-t border-goldlow my-2 py-4">
                                <this.comunications_vars />
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        )
    }
    /**
     * Soft Skills Comp
     * @returns {React.FC} soft skills
     */
    habs_windows: React.FC = () => {
        return (
            <section className="flex flex-col justify-center items-center h-auto py-9 px-2 border-t border-goldlow">
                <div className="flex md:flex-row flex-col md:justify-start justify-center items-center w-full text-slate-300  h-full py-4 ">
                    <Image src={SoftSkills} alt="" width={160} />
                    <h1 className="text-2xl font-bold text-start mx-1 text-goldlow">
                        S O F T // S K I L L
                    </h1>
                </div>
                <div className="gb  p-2 rounded-lg border-2 border-goldlow">
                    {It.habs.map((pre, index) => (
                        <div key={index} className="flex flex-col justify-center items-start py-1">
                            <h2 className="text-goldlow text-xl md:text-2xl font-semibold">{pre.title}</h2>
                            <p className="md:text-lg text-xs font-light text-slate-400">{pre.context}</p>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
    /**
     * List of skils for dev skills
     * @param item 
     * @returns {React.FC} skills_list
     */
    skill_list: React.FC<{ item: any }> = ({ item }) => {
        return (
            <div className="flex flex-col justify-start items-start p-4 w-full h-auto border border-slate-500 rounded-lg m-2 sixmit:py-2 sixmit:border-none sixmit:border-b sixmit:h-auto">
                <h3 className="font-bold text-goldlow">
                    {item.title}
                </h3>
                <ul className="list-disc pl-5 mt-2">
                    {Object.keys(item).map((key) => {
                        if (key.startsWith("context") && typeof item[key] === "string") {
                            return (
                                <li key={key} className="font-light text-slate-500 text-sm">
                                    {item[key]}
                                </li>
                            );
                        }
                        return null;
                    })}
                </ul>
            </div>
        )
    }
    /**
     * Dev Skills
     * @returns {React.FC} skills_windows
     */
    skills_windows: React.FC = () => {
        const { section, handleSubmit } = useAuth()
        return (
            <section className="flex flex-col justify-center items-center py-6 w-full border-t border-goldlow">
                <div className="flex flex-col md:flex-row justify-center items-center md:justify-start w-full text-slate-300 py-4">
                    <Image src={DevSkills} alt="Development Skills" width={160} className="mb-4" />
                    <h1 className="text-3xl font-semibold mb-4 text-goldlow">
                        D E V // S K I L L S
                    </h1>
                </div>
                <div className="flex flex-col justify-start items-start w-full px-4">
                    {It.fullstak.map((pre, index) => (
                        <div key={index} className="mb-4 p-2">
                            <button
                                className="w-full p-3 font-bold text-xl bg-transparent text-slate-300 text-left flex flex-col justify-start items-start rounded-lg hover:bg-goldlow hover:text-blackGray transition-colors duration-200"
                                onClick={() => handleSubmit(index)}
                            >
                                <h2>{pre.title}</h2>
                                {section !== index && (
                                    <span className="text-sm font-light mt-1 text-slate-500">
                                        {pre.resume}
                                    </span>
                                )}
                            </button>
                            {section === index && (
                                <div className="grid grid-cols-3 gap-4 mt-4 About:grid-cols-2 sixmit:grid-cols-1 sixmit:h-tre sixmit:overflow-y-scroll">
                                    {Array.isArray(pre.arr) && pre.arr.map((item, index) => (
                                        <this.skill_list key={index} item={item} />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        )
    }
    /**
     * Last Works Comp
     * @returns 
     */
    last_works: React.FC = () => {
        return (
            <section className="flex flex-col justify-center items-center w-full py-8  border-t border-goldlow">
                <div className="flex flex-col justify-center items-start w-full">
                    <h1 className="text-4xl font-bold mb-2">Last Works</h1>
                    <span className="font-light text-lg mb-6">Here are the latest projects I&apos;m working on</span>
                </div>
                {/* Card */}
                <div className="bg-blackGray flex flex-col  justify-between items-center p-4 rounded-lg shadow-xl w-full mb-6">
                    {/* Image and Links */}
                    <div className="flex flex-col justify-center items-center mb-4 md:mb-0 md:mr-4">
                        <Image src={CMDIm} width={250} alt="CMS Project Image" className="rounded-lg shadow-md shadow-black" />
                        <div className="flex flex-row justify-center md:justify-end w-full mt-4 text-lg">
                            <Link href={"#"} className="hover:text-white transition-colors duration-300">
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                            <Link href={"#"} className="ml-3 hover:text-white transition-colors duration-300">
                                <FontAwesomeIcon icon={faLink} />
                            </Link>
                        </div>
                    </div>
                    {/* Context */}
                    <div className="flex flex-col justify-center items-start p-3 md:p-0 md:ml-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">CMS-System</h2>
                        <span className="font-medium text-xl mb-4">Content Management System</span>
                        <p className={`text-sm md:text-base text-slate-400 leading-relaxed ${mont.className}`}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid maiores cumque, ducimus labore molestias doloribus, necessitatibus, impedit laboriosam id obcaecati ea iure quasi hic est rem ipsum ipsa quia. Sunt!
                        </p>
                    </div>
                </div>
                {/* Footer */}
                <div className="flex flex-row justify-center items-center w-full bg-blackGray border-t border-gray-600 py-4 px-1 rounded-xl">
                    <span className="font-light text-sm text-center">
                        If you want to see more projects I&apos;m working on,
                        <Link href={"/project"} className="font-bold hover:text-white transition-colors duration-300"> click here.</Link>
                    </span>
                </div>
            </section>
        )
    }
}