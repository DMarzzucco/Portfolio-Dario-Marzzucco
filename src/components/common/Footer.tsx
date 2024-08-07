import Link from "next/link";
import Image from "next/image";
import { FooterEn, FooterInf} from "./Common"
import { Logo1Image } from "@/assets";


import { faGithub, faGoogle, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer className="w-full  flex flex-col justify-center
        items-center">
            <div className="grid grid-cols-2 my-3 justify-center items-center
            footer:flex footer:flex-col">
                 <Image src={Logo1Image} alt="" className="w-56 m-1"/>
                <div>
                    <div className="flex flex-col justify-center items-start footer:items-center">
                        <h1>CONTACT</h1>
                        <FooterInf
                            ico={faPhone}
                            inf={'+54 9 3462 56-8958'}
                        />
                        <FooterInf
                            ico={faEnvelope}
                            inf={'drrkermazyxokv@gmail.com'}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <FooterEn src={'https://github.com/DMarzzucco'} ico={faGithub} />
                        <FooterEn src={'drrkermazyxokv@gmail.com'} ico={faGoogle} />
                        <FooterEn src={'https://www.linkedin.com/in/dario-marzzucco-597090283/'} ico={faLinkedin} />
                        <FooterEn src={'https://telegram.me/Darmarzrold77'} ico={faTelegram} />
                    </div>
                </div>
            </div>
            <div className="my-px">
                <Link href={'https://github.com/DMarzzucco/SysteMarzz.git'}>SOURCE</Link>
            </div>
            {/*  */}
            <div className="flex my-px text-Gr">
                <p className="footer:text-10">
                    &copy; 2024
                </p>
                <span className="mx-1 font-mono footer:text-10 text-white">SysteMarzz</span>
                <p className="footer:text-10">
                    All rights reserved Made by Dario Marzzucco
                </p>

            </div>
        </footer>
    )
}
export default Footer;