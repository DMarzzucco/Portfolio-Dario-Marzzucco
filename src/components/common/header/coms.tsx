import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ButtonHeaderProps } from "@/ts";
import DateTransfers from "@/components/libs/Data.Transfers";
import Link from "next/link";

const Dt = new DateTransfers()
export default class HeaderProps {

    Actions_Menu: React.FC<ButtonHeaderProps> = ({ click, icon }) => {
        return (
            <button
                onClick={click}
                className="text-white font-bold py-2 px-4 rounded bg-transparent hover:border-none"
            >
                <FontAwesomeIcon icon={icon} />
            </button>
        )
    }
    TogAside: React.FC = () => {
        return (
            <>
                {Dt.tagsNv.map((pre, index) => (
                    <div key={index} className=" w-full h-full flex flex-row justify-center items-center hover:bg-sta hover:text-blackGray">
                        <Link href={pre.src} className=" w-full h-full flex items-center justify-between p-1">
                            <FontAwesomeIcon icon={pre.icon} />
                            <p>{pre.name}</p>
                        </Link>
                    </div>
                ))}
            </>
        )
    }
    menu_Nav: React.FC = () => {
        return (
            <aside className="flex flex-col z-10 absolute w-60 h-full  bg-blackGray " >
                <div className="w-full h-60 flex flex-col
                     justify-center items-center p-2 border-y border-Gr" onClick={close}>
                    <this.TogAside />
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
        )
    }
}