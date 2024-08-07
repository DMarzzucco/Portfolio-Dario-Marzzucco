"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HomeImage, NavImage, faBars, faXmark } from "@/assets";
import Coms from "./Common";
import { useAuth } from "@/context/auth.context";


const In = new Coms()
function Header() {
    const { openMenu, closeMenu, OutClick, Ref, state } = useAuth()
    useEffect(() => { OutClick() }, [])

    return (
        <header>
            <div className="flex flex-row items-center" >
                <button onClick={openMenu} className="
                 text-white font-bold py-2 
                 px-4 rounded"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="p-1">
                    <Link href={"/"} onClick={close}>
                        <Image src={NavImage} className="w-9 h-10" alt="Nav Image" />
                    </Link>
                </div>
            </div>
            {/*  */}
            {state ?
                <aside className="flex flex-col z-10 absolute 
                w-60 h-full  bg-blackGray " ref={Ref}
                >
                    <div className="flex w-full justify-end items-center my-4
                    border-b border-Gr">
                        <div className="flex justify-center items-center w-full ">
                            <Image src={HomeImage} alt="" className="w-40" />
                        </div>
                        <button className="p-2 hover:bg-shrefne-200 hover:text-blackGray" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    <div className="w-full h-60 flex flex-col
                     justify-center items-center p-2 border-b border-Gr" onClick={close}>
                        <In.TogAside />
                    </div>
                    <div className="p-2 text-Gr">
                        <p className="footer:text-10">
                            &copy; 2024
                        </p>
                        <span className="mx-1 font-mono footer:text-10">SysteMarzz</span>
                        <p className="footer:text-10">
                            All rights reserved Made by Dario Marzzucco
                        </p>
                    </div>
                </aside> : null
            }
        </header>
    )
}
export default Header;