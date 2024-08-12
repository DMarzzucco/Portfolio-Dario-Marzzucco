import { dates_fullstak, dates_habs } from "@/ts"
export default class Dates {

    fullstak: dates_fullstak[] = [
        {
            title: "FrontEnd Skills",
            arr: [
                {
                    title: "Web Application Development",
                    context: "Creation of intuitive and functional user interfaces."
                },
                {
                    title: "Frontend and Backend Integration",
                    context: "Effective connection with the backend using RESTful APIs or GraphQL, using tools such as Axios or Fetch."
                },
                {
                    title: "State Management",
                    context: "Management of global application state using tools like useContext or Redux."
                },
                {
                    title: "Optimization and Performance",
                    context: "Techniques such as code splitting and file rendering to achieve better optimization."
                },
            ]
        },
        {
            title: "Back End Skills",
            arr: [
                {
                    title: "Application Development",
                    context: "Development of CRUD operations."
                },
                {
                    title: "Application Integration",
                    context: "Connecting the client with the server, managing APIs, and communication between layers."
                },
                {
                    title: "Database Management",
                    context: "Design, implementation, optimization, use of ORMs, schemas, validations, and query management."
                },
                {
                    title: "Security Implementation",
                    context: "Integration of middleware for user authentication and authorization to access certain routes or perform specific operations."
                },
                {
                    title: "Optimization and Performance",
                    context: "Identification and resolution of performance bottlenecks on the server."
                },
            ]
        },
        {
            title: "Mutual Skills",
            arr: [
                {
                    title: "Code Testing and Quality",
                    context: "Use of testing tools and maintenance of a code structure that is readable, flexible, and scalable."
                },
                {
                    title: "Deployment and Maintenance",
                    context: "Configuration and management of production and development environments, implementation of CI/CD pipelines."
                },
                {
                    title: "Software Architecture Design",
                    context: "Definition of the user interface architecture and its integration with the backend."
                },
            ]
        }
    ]
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
}