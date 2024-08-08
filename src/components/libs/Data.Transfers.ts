import { faAddressCard, faDiagramProject, faCode, faPhone, faEnvelope, faGithub, faLinkedin, faTelegram, faGoogle } from "@/assets";
import { Infpr, TogsProp,actionsProps } from "@/ts";

export default class DateTransfers {

    actionsItems: actionsProps = {
        menuNav: false,
        skills: false,
        habbs: false
    }
    RedSocials: TogsProp[] = [
        {
            icon: faGithub,
            src: "https://github.com/DMarzzucco"
        },
        {
            icon: faGoogle,
            src: "drrkermazyxokv@gmail.com"
        },
        {
            icon: faLinkedin,
            src: "https://www.linkedin.com/in/dario-marzzucco-597090283/"
        },
        {
            icon: faTelegram,
            src: "https://telegram.me/Darmarzrold77"
        },
    ]
    InFoot: Infpr[] = [
        {
            icon: faPhone,
            inf: "+54 9 3462 56-8958"
        },
        {
            icon: faEnvelope,
            inf: "drrkermazyxokv@gmail.com"
        },
    ]

    tagsNv: TogsProp[] = [
        {
            src: "/about",
            name: "About",
            icon: faAddressCard
        },
        {
            src: "/project",
            name: "Project",
            icon: faDiagramProject
        },
        // icon: faCode
    ]
}