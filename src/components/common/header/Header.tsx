import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@/assets"

export default function Header() {
    return (
        <header >
            <div className="flex flex-row items-center" >
                <Link
                    className="m-2 text-xl"
                    href={"/"}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Link >
            </div>
        </header>
    )
}
