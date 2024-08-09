import DateTransfers from "@/components/libs/Data.Transfers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Dt = new DateTransfers()
export default class Coms {
    FooterInf: React.FC = () => {
        return (
            <>
                {Dt.InFoot.map((pres, index) => (
                    <div key={index} className="flex m-1">
                        <span className="mx-2">
                            <FontAwesomeIcon icon={pres.icon} />
                        </span>
                        <p>{pres.inf}</p>
                    </div>
                ))}
            </>
        )
    }
    // 
    FooterEn: React.FC = () => {
        return (
            <>
                {Dt.RedSocials.map((pre, index) => (
                    <Link key={index} className="m-2" href={pre.src}>
                        <FontAwesomeIcon icon={pre.icon} />
                    </Link>
                ))}
            </>
        )
    }
}