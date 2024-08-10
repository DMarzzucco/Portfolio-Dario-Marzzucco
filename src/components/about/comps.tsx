"use client";
import { useAuth } from "@/context/auth.context";
import Coms from "./libs/libs";
// import Link from "next/link";
// import { useRouter } from "next/router";

export default function About() {
    const It = new Coms()
    const { action, about } = useAuth()
    // const router = useRouter
    // const HadnleButton = () => {
    //     action({ type: "project" })

    // }
    return (
        <>
            {!about ? null :
                <div className="flex flex-col justify-center items-center">
                    <div className=" bg-slate-300 text-slate-800 font-bold rounded-xl">
                        <div className="flex flex-row justify-center items-center p-2 bg-slate-800 rounded-b-xl ">
                            <button onClick={() => {
                                action({ type: "project" })
                            }}>
                                Project
                            </button>
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