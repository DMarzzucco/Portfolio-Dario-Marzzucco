"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Logo1Image, NavImage, faBars, faXmark } from "@/assets";
import Coms from "./Common";
import { useAuth } from "@/context/auth.context";


const In = new Coms()
function Header() {
    const { state, action } = useAuth()

    return (
        <header >
            <div className="flex flex-row items-center" >
                {!state ?
                    <button
                        onClick={() => { action({ type: "open" }) }}
                        className=" text-white font-bold py-2   px-4 rounded"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    :
                    <button
                        onClick={() => { action({ type: "close" }) }}
                        className="  p-2 hover:bg-shrefne-200 hover:text-blackGray"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                }
                <div className="p-1">
                    <Link href={"/"} className="flex justify-center items-center">
                        {!state ?
                            <Image src={NavImage} className="w-9 h-10" alt="Nav Image" />
                            :
                            <Image src={Logo1Image} alt="" className="w-40" />
                        }
                    </Link>
                </div>
            </div>
            {state ?
                <aside className="flex flex-col z-10 absolute w-60 h-full  bg-blackGray " >
                    <div className="w-full h-60 flex flex-col
                     justify-center items-center p-2 border-y border-Gr" onClick={close}>
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