import React from "react"
import { Template } from "../template/project.template"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLink, faGithubAlt } from "@/assets"

export const Projects: React.FC = () => {
    const ui = new Template()
    return (ui.project.map((pre, index) => (
        <div key={index} className="flex flex-col justify-between items-center rounded-lg shadow-lg shadow-black">
            <Image src={pre.img} className="w-full rounded-t-lg " alt={`${pre.title} Project Image`} />
            <div className="flex flex-row justify-end items-center p-2 w-full ">
                {pre.git && <Link href={pre.git}><FontAwesomeIcon icon={faGithub} className="mx-2" /></Link>}
                {pre.dep && <Link href={pre.dep}><FontAwesomeIcon icon={faLink} /></Link>}
            </div>
            <div className="flex flex-col justify-center items-start p-1">
                <h2 className="text-xl font-bold py-1">{pre.title}</h2>
                <span className="text-sm font-light">{pre.context}</span>
            </div>
            <div className="flex flex-wrap gap-1 p-1">
                {pre.details.map((op, index) => (
                    <div key={index} className="flex flex-row justify-start items-start p-1  border border-slate-500 rounded-xl text-xs">
                        <p>{op.tools}</p>
                    </div>
                ))}
            </div>
        </div>
    )))
}
export const FooterProject: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full bg-blackGray border-t border-gray-600 py-3 my-2 px-1 rounded-xl">
            <FontAwesomeIcon icon={faGithubAlt} className="text-5xl" />
            <div className="flex flex-row justify-center items-center w-full py-1">
                <span className="font-light text-sm text-center">
                    If you want to see more projects I&apos;m working on, I invite you to visit my github profile
                    <Link href={"https://github.com/DMarzzucco"} className="font-bold hover:text-white transition-colors duration-300"> click here.</Link>
                </span>
            </div>
        </div>
    )
}