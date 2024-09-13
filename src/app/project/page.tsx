import { FooterProject, Projects } from "./ui/project.ui";

export default function Project() {
    return (
        <section className="flex flex-col justify-center items-center h-full w-full">

            <div className="w-full flex flex-col justify-center items-center text-center md:text-left p-1 my-8">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <h1 className="text-8xl font-extrabold text-goldlow">
                        {"</>"}
                    </h1>
                    <div className="font-extrabold text-3xl md:text-5xl text-goldlow">
                        <p> S O M E</p>
                        <p className="text-2xl md:text-4xl">W O R K S</p>
                    </div>
                </div>
                <span className="font-light text-base md:text-lg text-gray-600 mt-2">
                    Here are some of the things I&apos;ve been working on.
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
                <Projects />
            </div>
            <FooterProject />
        </section>
    )
}