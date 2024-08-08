import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { act } from "../types/types";

export interface TogsProp {
    src: string;
    name?: string;
    icon: IconDefinition
}

export interface Infpr {
    icon: IconDefinition;
    inf: string

}
export interface ImpProp {
    type: React.HTMLInputTypeAttribute | undefined;
    name: string;
    placeholder: string;
    pattern: string;
    title: string
}
export interface ListMenuProp {
    ico: IconDefinition;
    name: string;
    color: number;
    href: string
}
export interface Liprop {
    title: string;
    cont: string;
    icon: IconDefinition;
    color: number;
}
export interface ElementPr {
    et: string
}
export interface Htmlprop {
    title: string
}
export interface actionsProps {
    menuNav: boolean;
    skills: boolean;
    habbs: boolean
}

export interface AuthProp { children: React.ReactNode }

export interface useContProp {
    state: boolean;
    action: (op: act) => void;
}