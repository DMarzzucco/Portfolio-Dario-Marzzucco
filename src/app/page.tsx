"use client";
import Coms from "@/components/common/Common";
import Image from "next/image";
import Link from "next/link";

import { faLink, faGithub } from "@/assets"
import { CMDIm } from "@/assets";
import { Montserrat } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mont = Montserrat({ subsets: ["latin"] })

export default function Home() {
  const In = new Coms()
  return (
    <main>
      <section className=" flex flex-col justify-center items-center h-screen w-full">
        <In.HomeCart />
      </section>
      <section className="flex flex-col bg-blackGray bg-opacity-40 justify-center items-center h-screen">
        <In.habs_windows />
      </section>
      <section className="flex flex-col bg-blackGray bg-opacity-90 justify-center items-center h-auto">
        <In.skills_windows />
      </section>
      <section className="flex flex-col justify-center items-center w-full py-8">
        <div className="flex flex-col justify-center items-start w-full px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-2">Last Works</h1>
          <span className="font-light text-lg mb-6">Here are the latest projects I'm working on</span>

          {/* Card */}
          <div className="bg-blackGray flex flex-col  justify-between items-center p-4 rounded-lg shadow-lg w-full mb-6">

            {/* Image and Links */}
            <div className="flex flex-col justify-center items-center mb-4 md:mb-0 md:mr-4">
              <Image src={CMDIm} width={250} alt="CMS Project Image" className="rounded-lg shadow-md shadow-black" />
              <div className="flex flex-row justify-center md:justify-end w-full mt-4 text-lg">
                <Link href={"#"} className="hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link href={"#"} className="ml-3 hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={faLink} />
                </Link>
              </div>
            </div>

            {/* Context */}
            <div className="flex flex-col justify-center items-start p-3 md:p-0 md:ml-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">CMS-System</h2>
              <span className="font-medium text-xl mb-4">Content Management System</span>
              <p className={`text-sm md:text-base text-slate-400 leading-relaxed ${mont.className}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid maiores cumque, ducimus labore molestias doloribus, necessitatibus, impedit laboriosam id obcaecati ea iure quasi hic est rem ipsum ipsa quia. Sunt!
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-row justify-center items-center w-full bg-blackGray border-t border-gray-600 py-4 px-1 rounded-xl">
            <span className="font-light text-sm text-center">
              If you want to see more projects I'm working on,
              <Link href={"/project"} className="font-bold hover:text-white transition-colors duration-300"> click here.</Link>
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}