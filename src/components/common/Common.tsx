import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link";
import Image from "next/image";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { logo2Image, NavImage, profileImage } from "@/assets";



export const HomeCart = ({ }) => {
    return (
        <div className="w-auhref home-cart flex flex-col
         justify-center items-center">
            <div className="w-auhref flex flex-col 
            justify-center items-center my-8 ">
                {/*  */}
                <Image src={NavImage} alt=""
                    className="w-60 home:w-20 my-3" />
                <Image src={logo2Image} alt=""
                    className="w-96 home:w-60" />
                {/*  */}
            </div>
            {/*  */}
            <Link href={"https://www.linkedin.com/in/dario-marzzucco-597090283/"}
                className="flex flex-row justify-center
             items-center bg-blackGray p-1 rounded-40 mini3:flex-col mini3:rounded-20">
                {/*  */}
                <Image src={profileImage} alt="" className="w-20 rounded-full" />
                {/*  */}
                <div className="flex flex-col items-start justify-center mx-3 mini3:items-center mini3:text-center ">
                    <h1 className="font-jet text-25 mini3:text-20 ">Dario Marzzucco</h1>
                    <span className="text-15 font-jet w-tre mini3:w-doshMed text-Gr">
                        Programmer,Web Developer,Graphic Designer
                    </span>
                </div>
            </Link>
        </div>
    )
}
// 
export interface TogsProp {
    src: string;
    name: string;
    ico: IconDefinition
}
export const TogAside: React.FC<TogsProp> = ({ src, name, ico }) => {
    return (
        <div className=" w-full h-full flex flex-row 
        justify-center items-center hover:bg-sta hover:text-blackGray">
            <Link href={src} className=" w-full h-full
             flex items-center justify-between p-1">
                <FontAwesomeIcon icon={ico} />
                <p>{name}</p>
            </Link>
        </div>
    )
}
// 
export interface FooterProp {
    src: string;
    ico: IconDefinition;
}
export const FooterEn: React.FC<FooterProp> = ({ src, ico }) => {
    return (
        <Link className="m-2" href={src}>
            <FontAwesomeIcon icon={ico} />
        </Link>
    )
}
export interface  Infpr{
    ico: IconDefinition;
    inf?: string

}
export const FooterInf: React.FC<Infpr> = ({ ico, inf }) => {
    return (
        <div className="flex m-1">
            <span className="mx-2">
                <FontAwesomeIcon icon={ico} />
            </span>
            <p>{inf}</p>
        </div>
    )
}
//
export interface ImpProp {
    type: React.HTMLInputTypeAttribute | undefined;
    name: string;
    placeholder: string;
    pattern: string;
    title: string
}
export const InpForm: React.FC<ImpProp> = ({ type, name, placeholder, pattern, title }) => {
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
export interface ListMenuProp {
    ico: IconDefinition;
    name: string;
    color: number;
    href: string
}
export const LiMenu: React.FC<ListMenuProp> = ({ ico, name, href }) => {
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
export interface Liprop {
    title: string;
    cont: string;
    icon: IconDefinition;
    color: number;
}
export const Lipro:React.FC<Liprop> = ({ title, cont, icon, color }) => {


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
export interface ElementPr{
    et:string
}
export const Elementk:React.FC<ElementPr> = ({ et }) => {
    return (
        <p className="flex flex-row  items-center text-green-500">
            {et}
        </p>
    )
}
// 
export interface Htmlprop{
    title:string
}
export const HtmLI:React.FC<Htmlprop> = ({ title }) => {
    return (
        <div className="flex flex-row hover:bg-black">
            <Elementk et={"<li>"} />
            <li className="text-blue-400">{title}</li>
            <Elementk et={"</li>"} />
        </div>
    )
}
