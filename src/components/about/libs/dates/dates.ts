export interface dates_habs {
    title: string;
    context: string;
}
export interface dates_fullstak {
    title: string;
    sub_title: string;
    [key: string]: string | number;
}

export default class Dates {

    habs: dates_habs[] = [
        {
            title: "Problem Solving",
            context: "Diagnosing and solving technical issues"
        },
        {
            title: "Communication",
            context: "Explaining technical concepts to non-technical audiences."
        },
        {
            title: "Teamwork",
            context: "Collaborating with other developers and cross-functional teams"
        },
        {
            title: "Project Management",
            context: "Planning and managing projects using agile methodologies."
        },
        {
            title: "Adaptability",
            context: "Learning new technologies and adapting to changes in projects."
        },
    ]
    fullstak: dates_fullstak[] = [
        {
            title: "",
            sub_title: "",

        },
    ]
}