"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { profileImage, SoftSkills, DevSkills, faGithub, SolidLog, ArchSoft, ConvertLog } from "@/assets";
import { useAuth } from "@/context";
import { Dates, share_comps } from "@/components";

const mont = Montserrat({ subsets: ["latin"] })

const It = new Dates();
const comp = new share_comps()
export default class Coms_home {
    header_page: React.FC = () => {
        return (
            <header className="flex flex-col justify-center items-center w-full text-slate-300">
                <nav className="flex flex-row justify-center items-center w-full">
                    {comp.header_links.map((pre, index) => (
                        <a
                            key={index}
                            href={pre.href}
                            className="mx-1 md:mx-3 flex flex-col justify-center items-center text-xs md:text-lg font-semibold"
                        >
                            {pre.title}
                        </a>
                    ))}
                </nav>
                <div className="border-t border-goldlow w-full">
                    <p className="text-xl font-bold">S K I L L S</p>
                </div>
            </header>
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
                            <div className="flex flex-col items-center justify-center mx-3 mt-4 mini3:items-center mini3:text-center">
                                {/* <h1 className="font-bold text-3xl md:text-6xl">{pre.name}</h1> */}
                                <h1 className="font-bold text-2xl">
                                    D A R I O <br /> M A R Z Z U C C O
                                </h1>

                                <p className="font-semibold w-tre mini3:w-doshMed text-Gr text-lg md:text-xl text-center" >{pre.title}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start w-full">
                            <p className="w-tre text-lg md:text-xl">{pre.context}</p>
                            <div className="flex justify-start items-start w-full border-t border-goldlow my-2 py-4">
                                <comp.comunications_vars />
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        )
    }
    /**
     * Dev Skills
     * @returns {React.FC} skills_windows
     */
    skills_windows: React.FC = () => {
        const { section, handleSubmit } = useAuth()
        return (
            <section id="devsk" className="flex flex-col justify-center items-center py-6 w-full border-t border-goldlow">
                <comp.title_comps src={DevSkills} title="D E V E L O P E R" next_title="S K I L L S" />
                <div className="flex flex-col justify-start items-start w-full px-4">
                    {It.fullstak.map((pre, index) => (
                        <div key={index} className="mb-4 p-2">
                            <comp.action_button
                                title={pre.title}
                                resume={pre.resume}
                                click={() => handleSubmit(index)}
                                action={section === index}
                            />
                            {section === index && (
                                <div className="grid grid-cols-3 gap-4 mt-4 About:grid-cols-2 sixmit:grid-cols-1 sixmit:h-tre sixmit:overflow-y-scroll">
                                    {Array.isArray(pre.arr) && pre.arr.map((item, index) => (
                                        <comp.skill_list key={index} item={item} />
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
     * Software Architecture Section
     */
    architecture_soft: React.FC = () => {
        return (
            <section id="archsk" className="flex flex-col justify-center items-center h-auto py-9 px-2 border-t border-goldlow">
                <comp.title_comps src={ArchSoft} title="S O F T W A R E" next_title="A R C H I T E C T U R E" />
                <div className=" p-2 r">
                    {It.sof_arch_dt.map((pre, index) => (
                        <div key={index} className="flex flex-col justify-center items-start py-4 ">
                            <h2 className="text-goldlow text-xl md:text-2xl font-semibold">{pre.title}</h2>
                            <p className="md:text-lg text-xs font-light text-slate-400 px-2">{pre.context}</p>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
    /**
     * SOLID Principles Section
     */
    solid_windows: React.FC = () => {
        const { section, handleSubmit } = useAuth()
        return (
            <section id="solidsk" className="flex flex-col justify-center items-center h-auto py-9 px-2 border-t border-goldlow">
                <comp.title_comps src={SolidLog} title="S . O . L . I . D" next_title="P R I N C I P L E S" />
                <div className="flex  justify-center items-start p-6 px-1 border-b border-l rounded-l-lg border-goldlow">
                    <span className="md:text-lg text-xs font-semibold text-start text-goldlow">
                        implementation of S.O.L.I.D principles that I incorporate in my projects for a scalable and maintainable architecture
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-start w-full px-4">
                    {It.sld_date.map((pre, index) => (
                        <div key={index} className="mb-4 p-2">
                            <comp.action_button
                                title={pre.title}
                                resume={pre.resume}
                                click={() => handleSubmit(index)}
                                action={section === index}
                            />
                            {section === index && (
                                <div className="flex flex-col justify-center items-center">
                                    {Array.isArray(pre.arr) && pre.arr.map((item, index) => (
                                        <comp.skill_list key={index} item={item} />
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
     * Soft Skills Comp
     * @returns {React.FC} soft skills
     */
    habs_windows: React.FC = () => {
        return (
            <section id="softsk" className="flex flex-col justify-center items-center h-auto py-9 px-2 border-t border-goldlow">
                <comp.title_comps src={SoftSkills} title="S O F T" next_title="S K I L L S" />
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
     * Last Works Comp
     * @returns 
     */
    last_works: React.FC = () => {
        return (
            <section className="flex flex-col justify-center items-center w-full py-8  border-t border-goldlow">
                <div className="flex flex-col justify-center items-start w-full">
                    <h1 className="text-4xl font-bold mb-2">Last Project</h1>
                    <span className="font-light text-lg mb-6">Here are the latest projects I&apos;m working on</span>
                </div>
                {/* Card */}
                <div className="bg-blackGray flex flex-col  justify-between items-center p-4 rounded-lg shadow-xl w-full mb-6">
                    {/* Image and Links */}
                    <div className="flex flex-col justify-center items-center mb-4 md:mb-0 md:mr-4">
                        <Image src={ConvertLog} width={250} alt="CMS Project Image" className="rounded-lg shadow-md shadow-black" />
                        <div className="flex flex-row justify-center md:justify-end w-full mt-4 text-lg">
                            <Link href={"https://github.com/DMarzzucco/Convert_csv_to_json.git"} className="hover:text-white transition-colors duration-300">
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                            {/* <Link href={"#"} className="ml-3 hover:text-white transition-colors duration-300">
                                <FontAwesomeIcon icon={faLink} />
                            </Link> */}
                        </div>
                    </div>
                    {/* Context */}
                    <div className="flex flex-col justify-center items-start p-3 md:p-0 md:ml-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">CSV Manager</h2>
                        <span className="font-medium text-xl mb-4">Effortless Data Upload & Management</span>
                        <p className={`text-sm md:text-base text-slate-400 leading-relaxed ${mont.className}`}>
                            Application that allows you to load CSV files, validate your data and store them in a database. Users can perform CRUD operations on uploaded records. Includes flexible search and robust error handling.
                        </p>
                    </div>
                </div>
                {/* Footer */}
                {/* <div className="flex flex-row justify-center items-center w-full bg-blackGray border-t border-gray-600 py-4 px-1 rounded-xl">
                    <span className="font-light text-sm text-center">
                        If you want to see more projects I&apos;m working on,
                        <Link href={"/project"} className="font-bold hover:text-white transition-colors duration-300"> click here.</Link>
                    </span>
                </div> */}
                <div className="flex flex-row justify-center items-center w-full bg-blackGray border-t border-gray-600 py-4 px-1 rounded-xl">
                    <span className="font-light text-sm text-center">
                        If you want to see more projects I&apos;m working on, I invite you to visit my github profile
                        <Link href={"https://github.com/DMarzzucco"} className="font-bold hover:text-white transition-colors duration-300"> click here.</Link>
                    </span>
                </div>
            </section>
        )
    }
}