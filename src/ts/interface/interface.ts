import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { act } from "../types/types";

export interface dates_habs {
    title: string;
    context: string;
}
export interface date_skills{
    title:string;
    [key:string]: string |number
}
export interface dates_fullstak {
    title: string;
    resume:string;
    [key: string]: date_skills[] | string;
}
export interface TogsProp {
    src: string;
    name?: string;
    icon: IconDefinition
}
export interface ButtonHeaderProps {
    click: () => void;
    icon: IconDefinition
}

export interface Infpr {
    icon: IconDefinition;
    inf: string

}
export interface actionsProps {
    menuNav: boolean;
    skills: boolean;
    habbs: boolean
}

export interface AuthProp { children: React.ReactNode }

export interface useContProp {
    state: boolean;
    skills: boolean;
    habs: boolean
    about: boolean
    action: (op: act) => void;


    section: number | null;
    handleSubmit: (index: number) => void
}