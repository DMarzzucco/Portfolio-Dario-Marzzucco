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
            name: "Dario Marzzucco",

            title: "FullStack Developer",

            context: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, illo recusandae reiciendis quod sint eligendi minima harum, sed nobis laudantium labore quae soluta ad voluptas! Praesentium quasi iure quia quas?"
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
        {
            title: "Mutual Skills",
            resume: "Web application development, code testing, and deployment on platforms such as Docker and Vercel",
            arr: [
                {
                    title: "Web Applications Developer",
                    context: "Content Management Systems (CMS)",
                    context2: "Software as a Service (SaaS)",
                    context3: "Websites"
                },
                {
                    title: "Code Testing and Quality",
                    context: "Use of testing tools and maintenance of a code structure that is readable, flexible, and scalable."
                },
                {
                    title: "Deployment and Maintenance",
                    context: "CI/CD:GitHub",
                    context2: "Containers:Docker",
                    context3: "Deployment Platforms: Vercel"
                },
                {
                    title: "Software Architecture",
                    context: "Monolithic",
                    context2: "MSA:Microservices Architecture",
                    context3: "Hybrid Arch",
                    context4: "C/S (Client-Server)",
                },
            ]
        }
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
}