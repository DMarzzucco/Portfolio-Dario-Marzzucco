import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import Dates from "./libs/dates";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { link_sections } from "@/ts";

export interface title_compProps {
    src: StaticImport;
    title: string;
    next_title: string;
}
export interface action_props {
    title: string;
    resume?: string;
    click: () => void;
    action: boolean
}
const It = new Dates()

export default class share_comps {
    /**
     * 
     */
    header_links: link_sections[] = [
        {
            title: "DEVELEOPER",
            href: "#devsk"
        },
        {
            title: "ARCHITECTURE",
            href: "#archsk"
        },
        {
            title: "S.O.L.I.D",
            href: "#solidsk"
        },
        {
            title: "SOFT",
            href: "#softsk"
        },
    ]
    /**
     * Buttom comps
     * @param param0 
     * @returns 
     */
    action_button: React.FC<action_props> = ({ title, resume, click, action }) => {
        return (
            <button
                className="w-full p-3 font-bold text-xl bg-transparent text-goldlow text-left flex flex-col justify-start items-start rounded-lg hover:bg-goldlow hover:text-blackGray transition-colors duration-200"
                onClick={click}
            >
                <h2>{title}</h2>
                {!action && resume && (
                    <span className="text-sm font-light mt-1 text-slate-500">
                        {resume}
                    </span>
                )}
            </button>
        )
    }
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
     * presentation template
     * @interface title_compProps
     * @param {src,title, next_title} 
     * @type {React.FC<title_compProps>} title_comp
     */
    title_comps: React.FC<title_compProps> = ({ src, title, next_title }) => {
        return (
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-start w-full text-slate-300 py-4">
                <Image src={src} alt="" width={160} className="mb-4" />
                <div className="flex flex-col justify-center items-center text-goldlow">
                    <h1 className="text-2xl font-bold text-start mx-1">
                        {title}
                    </h1>
                    <p className="font-semibold">
                        {next_title}
                    </p>
                </div>
            </div>
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
}