"use client";
import { profileImage } from "@/assets";
import { useAuth } from "@/context/auth.context";
import Image from "next/image";
import Coms from "./libs/comps";

export default function About() {
    const It = new Coms()
    const { action, about } = useAuth()
    return (
        <>
            {!about ? null :
                <div className="flex justify-center items-center">
                    <div className=" bg-slate-300 text-slate-800 font-bold rounded-xl">
                        <div className="flex flex-row justify-center items-center py-2 bg-slate-800 rounded-b-xl ">
                            <button>CV</button>
                            <button onClick={() => { action({ type: "skills_op" }) }}>Skills</button>
                            <button onClick={() => { action({ type: "habs_op" }) }}>Comunication </button>
                        </div>
                        <It.habs_windows />
                        <It.skills_windows />
                    </div>
                </div>
            }
        </>
    )
}