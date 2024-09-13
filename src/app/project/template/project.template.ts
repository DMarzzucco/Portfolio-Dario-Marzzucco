import { projectProps } from "@/ts";
import { ConvertLog, Calculator, DeathTime, PsicoTer } from "@/assets"

export class Template {
    project: projectProps[] = [
        {
            img: ConvertLog,
            git: "https://github.com/DMarzzucco/Convert_csv_to_json.git",
            title: "CSV Manager",
            context: "Application that allows you to load CSV files, validate your data and store them in a database. Users can perform CRUD operations on uploaded records. Includes flexible search and robust error handling.",
            details: [
                { tools: "TypeScript" },
                { tools: "PostgreSQL" },
                { tools: "Prisma" },
                { tools: "NextJS" },
                { tools: "TailwindCSS" },
                { tools: "Nestjs" },
                { tools: "Docker" },
            ]
        },
        {
            img: Calculator,
            git: "https://github.com/DMarzzucco/Inpuesto-Dolar-Steam-Microsft.git",
            dep: "https://inpuesto-dolar-steam-microsft.vercel.app/",
            title: "Calculadora ARS en Steam y Microsoft",
            context: "This app allows you to convert from card dollars to AR$ and calculate more taxes and how much a product purchased on one of these platforms will actually cost you.",
            details: [
                { tools: "TypeScript" },
                { tools: "NextJS" },
                { tools: "TailwindCSS" },
            ]
        }, {
            img: DeathTime,
            git: "https://github.com/DMarzzucco/Death-Time.git",
            title: "Death Time",
            context: "This project is a middleware that implements a technique inspired by the idea of ​​pressuring customers to make outstanding payments by progressively rendering the application unusable after a specific deadline.",
            details: [
                { tools: "SQL" },
                { tools: "C#" },
                { tools: "TypeScript" },
                { tools: "Python" }
            ]
        }, {
            img: PsicoTer,
            dep:"https://psicoterap-a-individual--alpha.vercel.app/",
            title: "Psicoterapía Individual",
            context: "Personal website dedicated to a professional in Psychology, so that she can show both the services she offers, and so that her clients or future clients can also send a form to her email to schedule an appointment.",
            details: [
                { tools: "TypeScript" },
                { tools: "NextJS" },
                { tools: "TailwindCSS" },
            ]
        },
    ]
}