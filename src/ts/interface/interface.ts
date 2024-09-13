import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";

export interface projectProps extends dates_habs {
    img: StaticImageData;
    git?: string;
    dep?: string;
    details: Array<{ tools: string; }>;
}
export interface dates_habs {
    title: string;
    context: string;
}
export interface presentation_inf extends dates_habs { }
export interface link_sections extends Omit<dates_habs, "context"> { href: string }
export interface date_skills extends Omit<dates_habs, "context"> { [key: string]: string | number }
export interface dates_fullstak extends Omit<dates_habs, "context"> {
    resume: string;
    [key: string]: date_skills[] | string;
}
export interface ButtonHeaderProps {
    click: () => void;
    icon: IconDefinition
}
export interface TogsProp extends Omit<ButtonHeaderProps, "click"> {
    src: string;
    name?: string;
}

export interface title_compProps extends dates_habs { src: StaticImport; }
export interface action_props extends Omit<title_compProps, "src"> {
    click: () => void;
    action: boolean
}

export interface useContProp {
    section: number | null;
    handleSubmit: (index: number) => void
}