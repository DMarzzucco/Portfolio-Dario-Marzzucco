"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo1Image, faFileLines } from "@/assets";
import Coms from "./coms";

export default function Footer() {
    const In = new Coms()
    return (
        <footer className="w-full flex flex-col bg-blackGray text-slate-300 pt-6 pb-1">
            {/* <div className="flex flex-col md:flex-row justify-between items-center mx-4">
                <div className="flex justify-center mb-4 md:mb-0">
                    <Image src={Logo1Image} alt="Logo" className="w-56" />
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-xl font-bold mb-2">Contact</h1>
                    <In.FooterInf />
                    <div className="mt-4">
                        <In.FooterEn />
                    </div>
                </div>
            </div>

            <div className="flex justify-center my-4">
                <Link
                    href="https://cvpdf.netlify.app/"
                    className="flex items-center text-slate-300 hover:text-white hover:border hover:border-slate-300 p-2 rounded-xl transition-colors"
                >
                    <FontAwesomeIcon icon={faFileLines} className="text-lg" />
                    <span className="ml-2">Resume</span>
                </Link>
            </div> */}

            <div className="flex flex-col md:flex-row justify-center items-center text-xs text-gray-400 mt-4">
                <p className="mr-1">&copy; 2024</p>
                <Link
                    href="https://github.com/DMarzzucco/SysteMarzz.git"
                    className="mx-1 font-bold text-white hover:underline"
                >
                    SysteMarzz
                </Link>
                <p className="ml-1">
                    All rights reserved. Made by Dario Marzzucco
                </p>
            </div>
        </footer>
    )
}