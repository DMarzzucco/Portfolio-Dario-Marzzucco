"use client";

import Link from "next/link";
import Image from "next/image";

import { Logo1Image, NavImage, faBars, faXmark } from "@/assets";
import { useAuth } from "@/context/auth.context";
import HeaderProps from "./coms";

const Ac = new HeaderProps();
export default function Header() {
    const { state, action } = useAuth()
    return (
        <header >
            <div className="flex flex-row items-center" >
                {!state ?
                    <Ac.Actions_Menu
                        click={() => { action({ type: "open_nav" }) }}
                        icon={faBars} />
                    :
                    <Ac.Actions_Menu
                        click={() => { action({ type: "close_nav" }) }}
                        icon={faXmark} />
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
            {state ? <Ac.menu_Nav /> : null}
        </header>
    )
}
