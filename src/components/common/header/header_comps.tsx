import { TogsProp } from "@/ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default class header_comps {
    link_header: React.FC<TogsProp> = ({ src, icon, name }) => {
        return (
            <Link href={src} className="flex flex-row justify-center items-center m-1 p-1">
                <FontAwesomeIcon icon={icon} className="text-xl"/>
                <p className="mx-2">{name}</p>
            </Link>
        )
    }
}