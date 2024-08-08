"use client";

import Link from "next/link";
import Image from "next/image";
import { Logo1Image } from "@/assets";
import Coms from "./Common";
import { useAuth } from "@/context/auth.context";

export default function Footer() {
    const In = new Coms()
    const { state } = useAuth()
    return (
        <>
            {state ? null :
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
                        <Link href={'https://github.com/DMarzzucco/SysteMarzz.git'}>SOURCE</Link>
                    </div>
                    {/*  */}
                    <div className="flex my-px text-Gr">
                        <p className="footer:text-10">
                            &copy; 2024
                        </p>
                        <span className="mx-1 font-mono footer:text-10 text-white">SysteMarzz</span>
                        <p className="footer:text-10">
                            All rights reserved Made by Dario Marzzucco
                        </p>
                    </div>
                </footer>
            }
        </>
    )
}