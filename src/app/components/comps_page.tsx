"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { profileImage, SoftSkills, DevSkills, CMDIm, faGithub, faLink } from "@/assets";
import { useAuth } from "@/context";
import { Dates, DateTransfers } from "@/components";

const mont = Montserrat({ subsets: ["latin"] })

const It = new Dates();
export default class Coms_home {

    comunications_vars: React.FC = () => {
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
    /**
     * Presentation Comp
     * @param null
     * @returns HomeCart
     */
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
                                <this.comunications_vars />
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

    habs_windows: React.FC = () => {
        return (
            <div className="flex flex-row mini3:flex-col justify-center items-center text-slate-300 ">
                <div className="flex flex-col justify-center items-center w-full text-slate-300  h-full p-2 ">
                    <Image src={SoftSkills} alt="" width={160} />
                    <h1 className="text-2xl font-semibold text-start mx-1 text-goldlow">
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
    /**
     * comp for dev Skills
     * @param item 
     * @returns Comp for devs Skills
     */
    skill_list: React.FC<{ item: any }> = ({ item }) => {
        return (
            <div className="flex flex-col justify-start items-start p-4 w-full h-auto border border-slate-500 rounded-lg m-2 sixmit:py-2 sixmit:border-none sixmit:border-b sixmit:h-auto">
                <h3 className="font-bold text-blue-500">
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
     * Habilidades de desarrollo
     * @returns el componente Reac para habilidades de desarrollador
     */
    skills_windows: React.FC = () => {
        const { section, handleSubmit } = useAuth()
        return (

            <div className="flex flex-col justify-center items-center w-full py-6">
                <div className="flex flex-col justify-center items-center w-full text-slate-300 p-4">
                    <Image src={DevSkills} alt="Development Skills" width={160} className="mb-4" />
                    <h1 className="text-3xl font-semibold mb-4 text-goldlow">
                        Dev Skills
                    </h1>
                </div>
                <div className="flex flex-col justify-start items-start w-full px-4">
                    {It.fullstak.map((pre, index) => (
                        <div key={index} className="mb-4 p-2">
                            <button
                                className="w-full p-3 font-bold text-xl bg-transparent text-slate-500 text-left flex flex-col justify-start items-start rounded-lg hover:bg-blue-800 transition-colors duration-200"
                                onClick={() => handleSubmit(index)}
                            >
                                <h2 className="text-slate-400">{pre.title}</h2>
                                {section !== index && (
                                    <span className="text-sm font-light mt-1">
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
            </div>
        )
    }

    last_works: React.FC = () => {
        return (
            <div className="flex flex-col justify-center items-start w-full px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-2">Last Works</h1>
                <span className="font-light text-lg mb-6">Here are the latest projects I&apos;m working on</span>

                {/* Card */}
                <div className="bg-blackGray flex flex-col  justify-between items-center p-4 rounded-lg shadow-lg w-full mb-6">

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
            </div>
        )
    }
}