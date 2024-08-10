"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image";
import React from "react";
import { logo2Image, NavImage, profileImage } from "@/assets";
import { ElementPr, Htmlprop, ImpProp, Liprop, ListMenuProp } from "@/ts";
import { useAuth } from "@/context";
import About from "@/components/about/comps";

export default class Coms {

    HomeCart = ({ }) => {
        const { action, about } = useAuth()
        return (
            <div className="w-auhref home-cart flex flex-col
             justify-center items-center">
                <div className="w-auhref flex flex-col 
                justify-center items-center my-8 ">
                    {/*  */}
                    <Image src={NavImage} alt=""
                        className="w-60 home:w-20 my-3" />
                    <Image
                        src={logo2Image}
                        alt=""
                        className="w-96 home:w-60" />
                    {/*  */}
                </div>
                {/*  */}
                <button
                    onClick={() => { action({ type: "about" }) }}
                    className="flex flex-row justify-center
                 items-center bg-blackGray p-1 rounded-2xl mini3:flex-col mini3:rounded-20">
                    {/*  */}
                    <Image src={profileImage} alt="" className="w-20 rounded-full" />
                    {/*  */}
                    <div className="flex flex-col items-start justify-center mx-3 mini3:items-center mini3:text-center ">
                        <h1 className="font-bold text-xl mini3:text-20 ">Dario Marzzucco</h1>
                        <div className="text-15 font-jet w-tre mini3:w-doshMed text-Gr text-xs font-light text-start">
                            {!about ?
                                <p>FullStack Developer</p>
                                :
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, illo recusandae reiciendis quod sint eligendi minima harum, sed nobis laudantium labore quae soluta ad voluptas! Praesentium quasi iure quia quas?
                                </p>
                            }
                        </div>
                    </div>
                </button>
                <About />
            </div>
        )
    }
    //
    InpForm: React.FC<ImpProp> = ({ type, name, placeholder, pattern, title }) => {
        return (
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                pattern={pattern}
                title={title}
                required
                className="w-full p-2 m-2 border rounded-lg border-Gr bg-blackGray"
            />
        )
    }
    // 
    LiMenu: React.FC<ListMenuProp> = ({ ico, name, href }) => {
        return (
            <li className="flex flex-row w-full  p-3 border-b border-blackGray
            hover:bg-blackGray hover:text-sta cursor-pointer">
                <a href={href} className="flex flex-row items-center">
                    {Array.isArray(ico) && ico.map((ico, index, color) => (
                        <FontAwesomeIcon key={index} icon={ico} style={{ color: color[index], margin: "3px" }} />
                    ))}
                    <p className="mx-2">{name}</p>
                </a>
            </li>
        )
    }
    // 
    Lipro: React.FC<Liprop> = ({ title, cont, icon, color }) => {


        return (
            <>
                <li className="flex flex-row  items-center">
                    {title}
                    {Array.isArray(cont) && cont.map((cont, index) => (
                        <p key={index} style={{ margin: '0px 3px', color: '#969696', fontSize: '15px' }}>
                            {cont}
                        </p>
                    ))}
                    {Array.isArray(icon) && Array.isArray(color) && icon.map((icon, index) => (
                        <FontAwesomeIcon key={index} icon={icon}
                            style={{ color: color[index], margin: "3px" }} />
                    ))}
                </li>
            </>
        )
    }
    Elementk: React.FC<ElementPr> = ({ et }) => {
        return (
            <p className="flex flex-row  items-center text-green-500">
                {et}
            </p>
        )
    }
    // 
    HtmLI: React.FC<Htmlprop> = ({ title }) => {
        return (
            <div className="flex flex-row hover:bg-black">
                <this.Elementk et={"<li>"} />
                <li className="text-blue-400">{title}</li>
                <this.Elementk et={"</li>"} />
            </div>
        )
    }
}