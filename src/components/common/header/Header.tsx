import Link from "next/link";
import { NavImage, faBriefcase, faEnvelope } from "@/assets"
import Image from "next/image";
import header_comps from "./header_comps";

export default function Header() {
    const it = new header_comps()
    return (
        <header >
            <div className="flex flex-row items-center justify-between" >
                <Link
                    className="m-2 text-xl"
                    href={"/"}>
                    <Image
                        src={NavImage}
                        alt=""
                        width={40} />
                </Link >
                <div className="flex flex-row justify-center items-center">
                    <it.link_header src="/project" name="Works" icon={faBriefcase}/>
                    <it.link_header src="mailto:drrkermazyxokv@gmail.com" name="Email" icon={faEnvelope}/>
                </div>
            </div>
        </header>
    )
}
