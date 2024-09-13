import { dates_fullstak, dates_habs, presentation_inf, TogsProp } from "@/ts"
import { faGithub, faGoogle, faLinkedin, faTelegram } from "@/assets"


export default class Dates {
    /**
     * Presentation date
     * @interface presentation_inf[]
     * @params name, context, title
     * @returns presentation_inf
     */
    presentation_inf: presentation_inf[] = [
        {
            title: "Software Developer",
            context: "Freelance software developer and Information Systems Engineering student, specialized in web application development. I leverage Node.js and TypeScript to create scalable and efficient systems, while ensuring high-performance, secure applications. Experienced in backend and frontend development with a problem-solving mindset."
        }
    ]
    /**
     * Skills Devs Date
     * @interface dates_fullstak
     * 
     * @property {string} title 
     * @property {string} resume
     * @property {[key:string]:dates_habs[] | string}
     * 
     * @type {dates_fullstak[]} fullstack
     */
    fullstak: dates_fullstak[] = [
        {
            title: "Back End Skills",
            resume: "Node.js, Express, NestJS, PostgreSQL, MongoDB, and security with JWT and bcrypt",
            arr: [
                {
                    title: "Programming Lenguage",
                    context: "TypeScript/JavaScript with Node.js",
                },
                {
                    title: "Frameworks",
                    context: "Express",
                    context2: "Nest.js",
                    context3: "GraphQL"
                },
                {
                    title: "Database",
                    context: "SQL: PostgreSQL",
                    context2: "NoSQL:MongoDB",
                    context3: "ORMs: Mongoose and Prisma"
                },
                {
                    title: "CRUD Operations and RESTful APIs",
                    context: "Designing and implementing CRUD (Create, Read, Update, Delete) operations to build RESTful APIs, ensuring proper endpoint structure, data handling, and adherence to REST principles."
                },
                {
                    title: "Security:",
                    context: "Authentication and Authorization: JWT",
                    context2: "Hashing: Using bcrypt to hash and verify passwords.",
                    context3: "Data Validation: Using Zod to define validation schemes, ensuring that incoming data meets expected",
                },
                {
                    title: "Networking",
                    context: "Protocols: HTTP, HTTPS.",
                    context2: "Network models: WebSockets"
                },
                {
                    title: "Documentation",
                    context: "API Documentation: Postman",
                    context2: "README.md Files: Creation of README.md files to provide general information about the project, including installation instructions, usage, contribution and any other relevant information for developers and users."
                },
                {
                    title: "Errors and Logs Management",
                    context: "Errors Handlers: Customized error handling implementation, developing strategies and structures to capture, manage and report errors in the application.",
                    context2: "Logs Handlers: Creation and implementation of customized solutions for event and error logging, adapted to the specific needs of the project."
                },
                {
                    title: "Optimization and Performance",
                    context: "Identification and resolution of performance bottlenecks on the server."
                },
            ]
        },
        {
            title: "FrontEnd Skills",
            resume: "React, Next.js, TailwindCSS, and performance optimization with Webpack.",
            arr: [
                {
                    title: "Lenguages",
                    context: "JavaScript/TypeScript",
                    context2: "HTML",
                    context3: "CSS",
                    context4: "SCSS",
                },
                {
                    title: "Frameworks and Libraries",
                    context: "React",
                    context2: "NextJS",
                    context3: "TaillwindCSS"
                },
                {
                    title: "Automatizations and Constructions",
                    context: "Task Runners: Familiarity with tools such as npm scripts to automate common tasks.",
                    context2: "Module Blunders: Knowledge of Webpack, Vite or Parcel to package code and its dependencies."
                },
                {
                    title: "Optimization and Performance",
                    context: "Image Optimization: Use of efficient image formats and techniques such as lazy loading",
                    context2: "Minification and Compression: Compression of CSS and JS files to improve loading times.",
                    context3: "Rendering Improvements: Techniques to avoid reflow/repaint problems and optimize page performance."
                },
                {
                    title: "Webs APIs",
                    context: "Browser APIs: Knowledge of APIs such as Fetch API, and Axios"
                },
                {
                    title: "State Management",
                    context: "Global State: Proficiency in managing global state using tools like useContext and Redux."
                },
                {
                    title: "UX/UI Design",
                    context: "UX/UI Principles: Basic knowledge of user-centered design, proper use of typography, colors, and spacing."
                },
            ]
        },
    ]
    /**
     * Soft Skills date
     * @interface dates_habs
     * 
     * @property {string} title
     * @property {string} context
     * 
     * @type {dates_habs[]} habs
     */
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
    /**
     * social template date
     * @interface TogsProp
     * 
     * @property {string} src
     * @property {string} [name]
     * @property {IconDefinition}icon
     * 
     * @type {TogsProp[]} red_social
     */
    red_social: TogsProp[] = [
        {
            icon: faGithub,
            src: "https://github.com/DMarzzucco"
        },
        {
            icon: faGoogle,
            src: "mailto:drrkermazyxokv@gmail.com"
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
    /**
     * SOLID Principles Date
     * @interface dates_fullstak
     * 
     * @property {string} title 
     * @property {string} resume
     * @property {[key:string]:dates_habs[] | string}
     * 
     * @type {dates_fullstak[]} sld_date
     */
    sld_date: dates_fullstak[] = [
        {
            title: "SRP",
            resume: "Single Responsibility Principle",
            arr: [
                {
                    title: "Client",
                    context: "Use of components with well-defined responsibilities, using managers to manage states globally without overloading individual components."
                },
                {
                    title: "Server",
                    context: "Application of SRP on services and controllers, ensuring that each service has a single responsibility. Using ORM to handle data persistence in a modular way."
                }
            ]
        },
        {
            title: "OCP",
            resume: "Open/Closed Principle",
            arr: [
                {
                    title: "Client",
                    context: "Extension of components without modifying existing code."
                },
                {
                    title: "Server",
                    context: "Implementation of new services and endpoints without modifying existing functionalities, facilitating the extension of the application through modules. Use of middlewares for authentication without modifying existing routes."
                }
            ]
        },
        {
            title: "LSP",
            resume: "Liskov Substitution Principle",
            arr: [
                {
                    title: "Client",
                    context: "Creation of components that can be reused and replaced in different contexts without breaking the application, guaranteeing compatibility across interfaces and types."
                },
                {
                    title: "Server",
                    context: "Use of classes and interfaces to ensure that implementations can be replaced without affecting the behavior of services."
                }
            ]
        },
        {
            title: "ISP",
            resume: "Interface Segregation Principle",
            arr: [
                {
                    title: "Client",
                    context: "Splitting interfaces, ensuring that components only implement the interfaces they really need, improving cohesion and avoiding unnecessary dependencies."
                },
                {
                    title: "Server",
                    context: "Creation of interfaces and services that are specifically designed to fulfill a particular purpose, avoiding the use of generic interfaces that do not fit the needs of each module."
                }
            ]
        },
        {
            title: "DIP",
            resume: "Dependency Inversion Principle",
            arr: [
                {
                    title: "Client",
                    context: "Dependency inversion using contexts and providers to manage state and dependencies, making code easier to test and maintain."
                },
                {
                    title: "Server",
                    context: "Use of dependency injection, allowing modules and services to depend on abstractions instead of concrete implementations, facilitating testing and scalability of the code."
                }
            ]
        },

    ]
    /**
     * Software Arch Dates
     * @interface dates_habs
     * 
     * @type {data_habs []} soft_arch_dt
     */
    sof_arch_dt: dates_habs[] = [
        {
            title: "Monolithic Architecture:",
            context: "Design and development of applications with a single code base that manages all functionalities in a single deployment."
        },
        {
            title: "Microservices Architecture (MSA):",
            context: "Application development using independent services that communicate with each other, facilitating scalability and maintenance."
        },
        {
            title: "Client-Server(C/S):",
            context: "Creation of applications with a client-server architecture, where the client makes requests to the server to access resources and services."
        },
        {
            title: "Hybrid Architecture:",
            context: "Implementation of hybrid approaches that combine features of monolithic and microservices-based architectures according to the needs of the project."
        },
    ]
}