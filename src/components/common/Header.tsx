"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TogAside } from "./Common";
import {  faAddressCard, faCode, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons/faDiagramProject";
import { HomeImage, NavImage } from "@/assets";

function Header() {
    const [isDeplegad, setIsDesplegad] = useState(false);
    const menuRef = useRef(null);

    // useEffect(() => {
    //     const clickOutside = (e) => {
    //         if (menuRef.current && !menuRef.current.contains(e.target)) {
    //             setIsDesplegad(false);
    //         }
    //     };
    //     document.addEventListener('mousedown', clickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', clickOutside);
    //     };


    // }, []);

    const desplegarMenu = () => { setIsDesplegad(!isDeplegad); }
    const close = () => { setIsDesplegad(false); }
    return (
        <header>
            <div className="flex flex-row items-center" >
                <button onClick={desplegarMenu} className="
                 text-white font-bold py-2 
                 px-4 rounded"
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="p-1">
                    <Link href={"/"} onClick={close}>
                        <Image src={NavImage} className="w-9 h-10" alt="Nav Image" />
                    </Link>
                </div>
            </div>
            {/*  */}
            {isDeplegad ?
                <aside className="flex flex-col z-10 absolute 
                w-60 h-full  bg-blackGray " ref={menuRef}
                >
                    <div className="flex w-full justify-end items-center my-4
                    border-b border-Gr">
                        <div className="flex justify-center items-center w-full ">
                            <Image src={HomeImage} alt="" className="w-40" />
                        </div>
                        <button className="p-2 hover:bg-shrefne-200 hover:text-blackGray" onClick={close}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="w-full h-60 flex flex-col
                     justify-center items-center p-2 border-b border-Gr" onClick={close}>
                        <TogAside ico={faAddressCard} src="/About" name="About" />
                        <TogAside ico={faDiagramProject} src="/Project" name="Project" />
                        <TogAside ico={faCode} src='/Tc' name='Technology' />
                        <TogAside ico={faPhone} src='/Contact' name='Contact' />
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
                </aside>
                : null
            }
        </header>
    )
}
export default Header;