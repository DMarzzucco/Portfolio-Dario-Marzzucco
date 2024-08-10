"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo1Image, faFileLines } from "@/assets";
import Coms from "./coms";

export default function Footer() {
    const In = new Coms()
    return (
        <footer className="w-full  flex flex-col justify-center
        items-center bg-blackGray">
            <div className="grid grid-cols-2 my-3 justify-center items-center
            footer:flex footer:flex-col">
                <Image src={Logo1Image} alt="" className="w-56 m-1" />
                <div>
                    <div className="flex flex-col justify-center items-start footer:items-center">
                        <h1>CONTACT</h1>
                        <In.FooterInf />
                    </div>
                    <div className="flex justify-center items-center">
                        <In.FooterEn />
                    </div>
                </div>
            </div>
            <div className="my-px">
                <Link
                    href={"https://cvpdf.netlify.app/"}
                    className="flex flex-row justify-center items-center hover:border hover:border-slate-300 p-1 rounded-xl"
                >
                    <FontAwesomeIcon icon={faFileLines} />
                    <p className="ml-2">Resume</p>
                </Link>
            </div>
            {/*  */}
            <div className="flex my-px text-Gr text-xs">
                <p>
                    &copy; 2024
                </p>
                <Link href={'https://github.com/DMarzzucco/SysteMarzz.git'} className="mx-1 font-bold  text-white">SysteMarzz</Link>
                <p>
                    All rights reserved Made by Dario Marzzucco
                </p>
            </div>
        </footer>
    )
}