export type RedActions =
    | { type: "open_nav" }
    | { type: "close_nav" }
    | { type: "open_skills" }
    | { type: "close_skills" }
    | { type: "habbs" }
    | { type: "close_habbs" }


export type act =
    // Nav
    | { type: "open_nav" }
    | { type: "close_nav" }
    // skills_windows
    | { type: "skills_op" }
    | { type: "out_skills" }
    // habs_windows
    | { type: "habs_op" }
    | { type: "out_habs" }

    // about
    | { type: "about" }
    | { type: "project" }

